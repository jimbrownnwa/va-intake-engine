/**
 * Authentication Context Provider
 *
 * Manages authentication state and provides auth operations throughout the app.
 * Handles sign up, sign in, sign out, and session management.
 */

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { User, Session, AuthError } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

interface AuthContextValue {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName: string, phone?: string) => Promise<{
    user: User | null;
    error: AuthError | null;
  }>;
  signIn: (email: string, password: string) => Promise<{
    user: User | null;
    error: AuthError | null;
  }>;
  signInWithMagicLink: (email: string) => Promise<{
    error: AuthError | null;
  }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{
    error: AuthError | null;
  }>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active session on mount - use getUser() to validate server-side
    const initializeAuth = async () => {
      try {
        // getUser() makes a server call to validate the token, unlike getSession()
        // which only reads from localStorage. This ensures deleted users are caught.
        const { data: { user: currentUser }, error: userError } = await supabase.auth.getUser();

        if (userError) {
          // Token is invalid or user was deleted - clear any stale session
          console.error('Error validating user:', userError);
          await supabase.auth.signOut();
          setSession(null);
          setUser(null);
        } else if (currentUser) {
          // User is valid, now get the session for the token
          const { data: { session: currentSession } } = await supabase.auth.getSession();
          setSession(currentSession);
          setUser(currentUser);
        } else {
          setSession(null);
          setUser(null);
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        setSession(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, currentSession) => {
        console.log('Auth state changed:', event);
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  /**
   * Sign up a new user
   */
  const signUp = async (email: string, password: string, fullName: string, phone?: string) => {
    try {
      // Sign up with Supabase Auth
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            phone: phone || null,
          },
        },
      });

      if (error) {
        return { user: null, error };
      }

      // Create veteran profile in our database
      if (data.user) {
        const { error: profileError } = await supabase
          .from('veterans')
          .insert({
            id: data.user.id,
            email,
            full_name: fullName,
            phone: phone || null,
          });

        if (profileError) {
          console.error('Error creating veteran profile:', profileError);
          // Note: User is created in auth, but profile creation failed
          // Could implement cleanup logic here if needed
        }
      }

      return { user: data.user, error: null };
    } catch (error) {
      console.error('Unexpected error during sign up:', error);
      return {
        user: null,
        error: error as AuthError,
      };
    }
  };

  /**
   * Sign in with email and password
   */
  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return { user: null, error };
      }

      return { user: data.user, error: null };
    } catch (error) {
      console.error('Unexpected error during sign in:', error);
      return {
        user: null,
        error: error as AuthError,
      };
    }
  };

  /**
   * Sign in with magic link (passwordless)
   */
  const signInWithMagicLink = async (email: string) => {
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: window.location.origin,
        },
      });

      return { error };
    } catch (error) {
      console.error('Unexpected error during magic link sign in:', error);
      return { error: error as AuthError };
    }
  };

  /**
   * Sign out the current user
   */
  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Error signing out:', error);
      }
    } catch (error) {
      console.error('Unexpected error during sign out:', error);
    }
  };

  /**
   * Send password reset email
   */
  const resetPassword = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      return { error };
    } catch (error) {
      console.error('Unexpected error during password reset:', error);
      return { error: error as AuthError };
    }
  };

  const value: AuthContextValue = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signInWithMagicLink,
    signOut,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
