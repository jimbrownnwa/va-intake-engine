/**
 * Session Context Provider
 *
 * Manages intake session state, answers, and progress throughout the quiz.
 * Provides operations for saving answers, tracking progress, and managing conditions.
 */

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';
import type {
  SessionContextValue,
  SessionState,
  IntakeSession,
  IntakeSessionUpdate,
  ConditionInstanceUpdate,
  VeteranProfile,
  ConditionInstance,
} from '../types/session';

const SessionContext = createContext<SessionContextValue | undefined>(undefined);

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};

/**
 * Check if an error is auth-related (user deleted, token invalid, RLS violation)
 */
const isAuthError = (error: any): boolean => {
  if (!error) return false;
  const message = error.message?.toLowerCase() || '';
  const code = error.code?.toLowerCase() || '';

  return (
    code === 'pgrst301' || // JWT expired
    code === '42501' || // RLS policy violation
    message.includes('jwt') ||
    message.includes('token') ||
    message.includes('unauthorized') ||
    message.includes('permission denied') ||
    message.includes('row-level security')
  );
};

/**
 * Handle auth errors by signing out the user
 */
const handleAuthError = async (error: any): Promise<void> => {
  if (isAuthError(error)) {
    console.error('Auth error detected, signing out:', error);
    await supabase.auth.signOut();
  }
};

interface SessionProviderProps {
  children: ReactNode;
}

export const SessionProvider = ({ children }: SessionProviderProps) => {
  const { user, loading: authLoading } = useAuth();

  const [state, setState] = useState<SessionState>({
    session: null,
    profile: null,
    selectedConditions: [],
    answers: {},
    loading: true,
    error: null,
  });

  /**
   * Load or create session when user logs in
   */
  useEffect(() => {
    if (authLoading) return;

    const initializeSession = async () => {
      if (!user) {
        setState(prev => ({ ...prev, loading: false }));
        return;
      }

      try {
        // Try to find an existing in-progress session
        const { data: sessions, error: sessionError } = await supabase
          .from('intake_sessions')
          .select('*')
          .eq('veteran_id', user.id)
          .eq('status', 'in_progress')
          .order('started_at', { ascending: false })
          .limit(1);

        if (sessionError) throw sessionError;

        let currentSession: IntakeSession | null = null;

        if (sessions && sessions.length > 0) {
          // Load existing session
          currentSession = sessions[0];
          await loadSessionData(currentSession.id);
        } else {
          // Create new session
          currentSession = await createNewSession();
        }

        setState(prev => ({
          ...prev,
          session: currentSession,
          loading: false,
        }));
      } catch (error) {
        console.error('Error initializing session:', error);
        await handleAuthError(error);
        setState(prev => ({
          ...prev,
          error: error as Error,
          loading: false,
        }));
      }
    };

    initializeSession();
  }, [user, authLoading]);

  /**
   * Create a new session
   */
  const createSession = useCallback(async (): Promise<IntakeSession | null> => {
    if (!user) return null;

    try {
      const newSession = await createNewSession();
      setState(prev => ({
        ...prev,
        session: newSession,
        profile: null,
        selectedConditions: [],
        answers: {},
      }));
      return newSession;
    } catch (error) {
      console.error('Error creating session:', error);
      await handleAuthError(error);
      setState(prev => ({ ...prev, error: error as Error }));
      return null;
    }
  }, [user]);

  /**
   * Helper to create new session
   */
  const createNewSession = async (): Promise<IntakeSession> => {
    if (!user) throw new Error('No authenticated user');

    const { data, error } = await supabase
      .from('intake_sessions')
      .insert({
        veteran_id: user.id,
        status: 'in_progress',
        progress_percentage: 0,
        current_step: 'welcome',
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  };

  /**
   * Load session data (profile, conditions, answers)
   */
  const loadSessionData = async (sessionId: string) => {
    try {
      // Load profile
      const { data: profileData } = await supabase
        .from('veteran_profile')
        .select('*')
        .eq('session_id', sessionId)
        .maybeSingle();

      // Load condition instances
      const { data: conditionsData } = await supabase
        .from('condition_instances')
        .select('*')
        .eq('session_id', sessionId);

      // Load answers
      const { data: answersData } = await supabase
        .from('answers')
        .select('*')
        .eq('session_id', sessionId);

      // Transform answers into a lookup object
      const answersMap: Record<string, any> = {};
      answersData?.forEach(answer => {
        const key = answer.condition_instance_id
          ? `${answer.question_key}_${answer.condition_instance_id}`
          : answer.question_key;
        answersMap[key] = answer.answer_value;
      });

      setState(prev => ({
        ...prev,
        profile: profileData || null,
        selectedConditions: conditionsData || [],
        answers: answersMap,
      }));
    } catch (error) {
      console.error('Error loading session data:', error);
      throw error;
    }
  };

  /**
   * Load a specific session by ID
   */
  const loadSession = useCallback(async (sessionId: string) => {
    setState(prev => ({ ...prev, loading: true }));

    try {
      const { data: sessionData, error: sessionError } = await supabase
        .from('intake_sessions')
        .select('*')
        .eq('id', sessionId)
        .single();

      if (sessionError) throw sessionError;

      await loadSessionData(sessionId);

      setState(prev => ({
        ...prev,
        session: sessionData,
        loading: false,
      }));
    } catch (error) {
      console.error('Error loading session:', error);
      setState(prev => ({
        ...prev,
        error: error as Error,
        loading: false,
      }));
    }
  }, []);

  /**
   * Update session fields
   */
  const updateSession = useCallback(async (updates: IntakeSessionUpdate) => {
    if (!state.session) return;

    try {
      const { data, error } = await supabase
        .from('intake_sessions')
        .update(updates)
        .eq('id', state.session.id)
        .select()
        .single();

      if (error) throw error;

      setState(prev => ({
        ...prev,
        session: data,
      }));
    } catch (error) {
      console.error('Error updating session:', error);
      await handleAuthError(error);
      setState(prev => ({ ...prev, error: error as Error }));
    }
  }, [state.session]);

  /**
   * Mark session as completed
   */
  const completeSession = useCallback(async () => {
    if (!state.session) return;

    await updateSession({
      status: 'completed',
      completed_at: new Date().toISOString(),
      progress_percentage: 100,
    });
  }, [state.session, updateSession]);

  /**
   * Save an answer (with upsert logic)
   */
  const saveAnswer = useCallback(async (
    questionKey: string,
    value: any,
    conditionInstanceId: string | null = null
  ) => {
    if (!state.session) return;

    try {
      const { error } = await supabase
        .from('answers')
        .upsert({
          session_id: state.session.id,
          question_key: questionKey,
          condition_instance_id: conditionInstanceId,
          answer_value: value,
        }, {
          onConflict: 'session_id,question_key,condition_instance_id',
        });

      if (error) throw error;

      // Update local state
      const key = conditionInstanceId
        ? `${questionKey}_${conditionInstanceId}`
        : questionKey;

      setState(prev => ({
        ...prev,
        answers: {
          ...prev.answers,
          [key]: value,
        },
      }));

      // Update progress after saving
      await updateProgress();
    } catch (error) {
      console.error('Error saving answer:', error);
      await handleAuthError(error);
      setState(prev => ({ ...prev, error: error as Error }));
    }
  }, [state.session]);

  /**
   * Get an answer from local state
   */
  const getAnswer = useCallback((
    questionKey: string,
    conditionInstanceId: string | null = null
  ): any => {
    const key = conditionInstanceId
      ? `${questionKey}_${conditionInstanceId}`
      : questionKey;
    return state.answers[key];
  }, [state.answers]);

  /**
   * Calculate and update progress percentage
   */
  const updateProgress = useCallback(async () => {
    if (!state.session) return;

    try {
      // Simple progress calculation for MVP
      // TODO: Implement detailed progress calculation based on plan
      const profileAnswered = Object.keys(state.answers).filter(
        key => !key.includes('_') // Profile questions don't have condition instance IDs
      ).length;

      const conditionsScreened = state.selectedConditions.length;
      const conditionsCompleted = state.selectedConditions.filter(c => c.completed).length;

      // Rough calculation: 30% profile, 20% screening, 50% conditions
      let progress = 0;
      progress += Math.min((profileAnswered / 10) * 30, 30); // Assume 10 profile questions
      progress += Math.min((conditionsScreened / 30) * 20, 20); // 30 total conditions
      if (conditionsScreened > 0) {
        progress += (conditionsCompleted / conditionsScreened) * 50;
      }

      const progressPercentage = Math.round(progress);

      await updateSession({ progress_percentage: progressPercentage });
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  }, [state.session, state.answers, state.selectedConditions, updateSession]);

  /**
   * Update current step in session
   */
  const updateCurrentStep = useCallback(async (step: string) => {
    await updateSession({ current_step: step });
  }, [updateSession]);

  /**
   * Add or update a condition instance
   */
  const addCondition = useCallback(async (conditionId: string, hasCondition: boolean) => {
    if (!state.session || !user) return;

    try {
      const { data, error } = await supabase
        .from('condition_instances')
        .upsert({
          session_id: state.session.id,
          condition_id: conditionId,
          veteran_id: user.id,
          has_condition: hasCondition,
        }, {
          onConflict: 'session_id,condition_id',
        })
        .select()
        .single();

      if (error) throw error;

      setState(prev => ({
        ...prev,
        selectedConditions: [
          ...prev.selectedConditions.filter(c => c.condition_id !== conditionId),
          data,
        ],
      }));
    } catch (error) {
      console.error('Error adding condition:', error);
      await handleAuthError(error);
      setState(prev => ({ ...prev, error: error as Error }));
    }
  }, [state.session, user]);

  /**
   * Update a condition instance
   */
  const updateConditionInstance = useCallback(async (
    instanceId: string,
    updates: ConditionInstanceUpdate
  ) => {
    try {
      const { data, error } = await supabase
        .from('condition_instances')
        .update(updates)
        .eq('id', instanceId)
        .select()
        .single();

      if (error) throw error;

      setState(prev => ({
        ...prev,
        selectedConditions: prev.selectedConditions.map(c =>
          c.id === instanceId ? data : c
        ),
      }));
    } catch (error) {
      console.error('Error updating condition instance:', error);
      await handleAuthError(error);
      setState(prev => ({ ...prev, error: error as Error }));
    }
  }, []);

  /**
   * Clear error state
   */
  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }));
  }, []);

  /**
   * Refresh session data from database
   */
  const refresh = useCallback(async () => {
    if (!state.session) return;
    await loadSessionData(state.session.id);
  }, [state.session]);

  const value: SessionContextValue = {
    ...state,
    createSession,
    loadSession,
    updateSession,
    completeSession,
    saveAnswer,
    getAnswer,
    updateProgress,
    updateCurrentStep,
    addCondition,
    updateConditionInstance,
    clearError,
    refresh,
  };

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
};
