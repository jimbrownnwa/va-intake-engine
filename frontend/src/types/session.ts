/**
 * Session State Type Definitions
 *
 * Types for intake session management and state
 */

import type { Database } from './database';

export type IntakeSession = Database['public']['Tables']['intake_sessions']['Row'];
export type IntakeSessionInsert = Database['public']['Tables']['intake_sessions']['Insert'];
export type IntakeSessionUpdate = Database['public']['Tables']['intake_sessions']['Update'];

export type VeteranProfile = Database['public']['Tables']['veteran_profile']['Row'];
export type VeteranProfileInsert = Database['public']['Tables']['veteran_profile']['Insert'];
export type VeteranProfileUpdate = Database['public']['Tables']['veteran_profile']['Update'];

export type Condition = Database['public']['Tables']['conditions']['Row'];
export type ConditionInstance = Database['public']['Tables']['condition_instances']['Row'];
export type ConditionInstanceInsert = Database['public']['Tables']['condition_instances']['Insert'];
export type ConditionInstanceUpdate = Database['public']['Tables']['condition_instances']['Update'];

export type MilitaryStatus = 'active_duty' | 'veteran' | 'guard' | 'reserve';
export type SessionStatus = 'in_progress' | 'completed';

export interface SessionState {
  session: IntakeSession | null;
  profile: VeteranProfile | null;
  selectedConditions: ConditionInstance[];
  answers: Record<string, any>;
  loading: boolean;
  error: Error | null;
}

export interface SessionContextValue extends SessionState {
  // Session operations
  createSession: () => Promise<IntakeSession | null>;
  loadSession: (sessionId: string) => Promise<void>;
  updateSession: (updates: IntakeSessionUpdate) => Promise<void>;
  completeSession: () => Promise<void>;

  // Answer operations
  saveAnswer: (
    questionKey: string,
    value: any,
    conditionInstanceId?: string | null
  ) => Promise<void>;
  getAnswer: (questionKey: string, conditionInstanceId?: string | null) => any;

  // Progress tracking
  updateProgress: () => Promise<void>;
  updateCurrentStep: (step: string) => Promise<void>;

  // Condition operations
  addCondition: (conditionId: string, hasCondition: boolean) => Promise<void>;
  updateConditionInstance: (instanceId: string, updates: ConditionInstanceUpdate) => Promise<void>;

  // Utility
  clearError: () => void;
  refresh: () => Promise<void>;
}

export const QUIZ_STEPS = {
  WELCOME: 'welcome',
  VETERAN_PROFILE: 'veteran_profile',
  CONDITION_SCREENING: 'condition_screening',
  CONDITION_BUILDER: 'condition_builder',
  COMPLETE: 'complete',
} as const;

export type QuizStep = typeof QUIZ_STEPS[keyof typeof QUIZ_STEPS];
