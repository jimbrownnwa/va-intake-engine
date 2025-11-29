/**
 * Question and Answer Type Definitions
 *
 * Types for working with questions, answers, and validation
 */

export type QuestionType =
  | 'text'
  | 'textarea'
  | 'single_select'
  | 'multi_select'
  | 'date'
  | 'scale';

export interface QuestionTemplate {
  id: string;
  question_key: string;
  question_text: string;
  question_type: QuestionType;
  options?: string[] | null;
  validation_rules?: ValidationRules | null;
  help_text?: string | null;
  placeholder?: string | null;
  category?: string | null;
  is_reusable: boolean;
}

export interface ValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  pattern?: string;
  custom?: string;
}

export interface Answer {
  id: string;
  session_id: string;
  question_key: string;
  condition_instance_id?: string | null;
  answer_value: string | number | boolean | string[] | null;
  answered_at: string;
  updated_at: string;
}

export interface QuestionFlowStep {
  questionKey: string;
  questionType?: QuestionType;
  showIf?: (answers: Record<string, any>) => boolean;
  required?: boolean;
}

export interface ConditionQuestionFlow {
  conditionId: string;
  conditionName: string;
  steps: QuestionFlowStep[];
}

// Answer value types for different question types
export type TextAnswerValue = string;
export type SingleSelectAnswerValue = string;
export type MultiSelectAnswerValue = string[];
export type DateAnswerValue = string; // ISO date string
export type ScaleAnswerValue = number;

export type AnswerValue =
  | TextAnswerValue
  | SingleSelectAnswerValue
  | MultiSelectAnswerValue
  | DateAnswerValue
  | ScaleAnswerValue
  | null;
