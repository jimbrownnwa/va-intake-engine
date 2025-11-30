/**
 * Database Type Definitions
 *
 * Auto-generated types for Supabase database schema.
 * These types provide type safety when interacting with the database.
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      veterans: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          phone: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name: string;
          phone?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string;
          phone?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      intake_sessions: {
        Row: {
          id: string;
          veteran_id: string;
          started_at: string;
          last_updated_at: string;
          completed_at: string | null;
          current_step: string | null;
          progress_percentage: number;
          status: 'in_progress' | 'completed';
          created_at: string;
        };
        Insert: {
          id?: string;
          veteran_id: string;
          started_at?: string;
          last_updated_at?: string;
          completed_at?: string | null;
          current_step?: string | null;
          progress_percentage?: number;
          status?: 'in_progress' | 'completed';
          created_at?: string;
        };
        Update: {
          id?: string;
          veteran_id?: string;
          started_at?: string;
          last_updated_at?: string;
          completed_at?: string | null;
          current_step?: string | null;
          progress_percentage?: number;
          status?: 'in_progress' | 'completed';
          created_at?: string;
        };
      };
      veteran_profile: {
        Row: {
          id: string;
          session_id: string;
          military_status: 'active_duty' | 'veteran' | 'guard' | 'reserve' | null;
          va_file_number: string | null;
          service_start_date: string;
          service_end_date: string | null;
          duty_stations: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          session_id: string;
          military_status?: 'active_duty' | 'veteran' | 'guard' | 'reserve' | null;
          va_file_number?: string | null;
          service_start_date: string;
          service_end_date?: string | null;
          duty_stations?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          session_id?: string;
          military_status?: 'active_duty' | 'veteran' | 'guard' | 'reserve' | null;
          va_file_number?: string | null;
          service_start_date?: string;
          service_end_date?: string | null;
          duty_stations?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      branches_of_service: {
        Row: {
          id: string;
          session_id: string;
          branch_name: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          session_id: string;
          branch_name: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          session_id?: string;
          branch_name?: string;
          created_at?: string;
        };
      };
      mos_history: {
        Row: {
          id: string;
          session_id: string;
          job_title: string;
          start_date: string;
          end_date: string;
          sequence_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          session_id: string;
          job_title: string;
          start_date: string;
          end_date: string;
          sequence_order: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          session_id?: string;
          job_title?: string;
          start_date?: string;
          end_date?: string;
          sequence_order?: number;
          created_at?: string;
        };
      };
      conditions: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          category: string | null;
          is_active: boolean;
          display_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          category?: string | null;
          is_active?: boolean;
          display_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string | null;
          category?: string | null;
          is_active?: boolean;
          display_order?: number;
          created_at?: string;
        };
      };
      condition_instances: {
        Row: {
          id: string;
          session_id: string;
          condition_id: string;
          veteran_id: string;
          has_condition: boolean;
          personal_description: string | null;
          has_existing_rating: boolean;
          completed: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          session_id: string;
          condition_id: string;
          veteran_id: string;
          has_condition?: boolean;
          personal_description?: string | null;
          has_existing_rating?: boolean;
          completed?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          session_id?: string;
          condition_id?: string;
          veteran_id?: string;
          has_condition?: boolean;
          personal_description?: string | null;
          has_existing_rating?: boolean;
          completed?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      question_templates: {
        Row: {
          id: string;
          question_key: string;
          question_text: string;
          question_type: 'text' | 'textarea' | 'single_select' | 'multi_select' | 'date' | 'scale';
          options: Json | null;
          validation_rules: Json | null;
          help_text: string | null;
          placeholder: string | null;
          category: string | null;
          is_reusable: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          question_key: string;
          question_text: string;
          question_type: 'text' | 'textarea' | 'single_select' | 'multi_select' | 'date' | 'scale';
          options?: Json | null;
          validation_rules?: Json | null;
          help_text?: string | null;
          placeholder?: string | null;
          category?: string | null;
          is_reusable?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          question_key?: string;
          question_text?: string;
          question_type?: 'text' | 'textarea' | 'single_select' | 'multi_select' | 'date' | 'scale';
          options?: Json | null;
          validation_rules?: Json | null;
          help_text?: string | null;
          placeholder?: string | null;
          category?: string | null;
          is_reusable?: boolean;
          created_at?: string;
        };
      };
      answers: {
        Row: {
          id: string;
          session_id: string;
          question_key: string;
          condition_instance_id: string | null;
          answer_value: Json;
          answered_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          session_id: string;
          question_key: string;
          condition_instance_id?: string | null;
          answer_value: Json;
          answered_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          session_id?: string;
          question_key?: string;
          condition_instance_id?: string | null;
          answer_value?: Json;
          answered_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: {
      user_owns_session: {
        Args: {
          p_session_id: string;
        };
        Returns: boolean;
      };
    };
    Enums: Record<string, never>;
  };
}
