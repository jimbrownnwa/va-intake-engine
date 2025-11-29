/**
 * Questions API Functions
 *
 * Functions for fetching question templates from the database
 */

import { supabase } from '../supabase';
import type { QuestionTemplate } from '../../components/Questions/QuestionRenderer';

/**
 * Fetch all question templates
 */
export const fetchQuestionTemplates = async (): Promise<QuestionTemplate[]> => {
  const { data, error } = await supabase
    .from('question_templates')
    .select('*')
    .eq('is_reusable', true);

  if (error) {
    throw new Error(`Failed to fetch question templates: ${error.message}`);
  }

  // Parse JSON options field
  return (data || []).map((template) => ({
    ...template,
    options: template.options ? JSON.parse(JSON.stringify(template.options)) : null,
    validation_rules: template.validation_rules
      ? JSON.parse(JSON.stringify(template.validation_rules))
      : null,
  }));
};

/**
 * Fetch question templates by category
 */
export const fetchQuestionsByCategory = async (
  category: string
): Promise<QuestionTemplate[]> => {
  const { data, error } = await supabase
    .from('question_templates')
    .select('*')
    .eq('is_reusable', true)
    .eq('category', category);

  if (error) {
    throw new Error(`Failed to fetch questions for category ${category}: ${error.message}`);
  }

  return (data || []).map((template) => ({
    ...template,
    options: template.options ? JSON.parse(JSON.stringify(template.options)) : null,
    validation_rules: template.validation_rules
      ? JSON.parse(JSON.stringify(template.validation_rules))
      : null,
  }));
};

/**
 * Fetch a single question template by key
 */
export const fetchQuestionByKey = async (
  questionKey: string
): Promise<QuestionTemplate | null> => {
  const { data, error } = await supabase
    .from('question_templates')
    .select('*')
    .eq('question_key', questionKey)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      return null; // Not found
    }
    throw new Error(`Failed to fetch question ${questionKey}: ${error.message}`);
  }

  return {
    ...data,
    options: data.options ? JSON.parse(JSON.stringify(data.options)) : null,
    validation_rules: data.validation_rules
      ? JSON.parse(JSON.stringify(data.validation_rules))
      : null,
  };
};

/**
 * Question categories in display order
 */
export const QUESTION_CATEGORIES = [
  { key: 'timeline', label: 'Symptom Timeline', description: 'When and how your condition started' },
  { key: 'symptom', label: 'Symptoms & Severity', description: 'How your symptoms affect you' },
  { key: 'treatment', label: 'Treatment History', description: 'Medical care and medications' },
  { key: 'functional_impact', label: 'Functional Impact', description: 'How it affects daily life and work' },
  { key: 'nexus', label: 'Service Connection', description: 'Relationship to military service' },
  { key: 'additional', label: 'Additional Information', description: 'Anything else we should know' },
];
