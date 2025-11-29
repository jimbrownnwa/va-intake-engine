/**
 * Conditions API Functions
 *
 * Functions for fetching and managing VA disability conditions
 */

import { supabase } from '../supabase';
import type { Condition } from '../../types/session';

/**
 * Fetch all active conditions from the database
 */
export const fetchConditions = async (): Promise<Condition[]> => {
  const { data, error } = await supabase
    .from('conditions')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch conditions: ${error.message}`);
  }

  return data || [];
};

/**
 * Fetch conditions grouped by category
 */
export const fetchConditionsByCategory = async (): Promise<Record<string, Condition[]>> => {
  const conditions = await fetchConditions();

  return conditions.reduce((acc, condition) => {
    const category = condition.category || 'other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(condition);
    return acc;
  }, {} as Record<string, Condition[]>);
};

/**
 * Category display names for UI
 */
export const CATEGORY_LABELS: Record<string, string> = {
  auditory: 'Hearing & Auditory',
  mental_health: 'Mental Health',
  respiratory: 'Respiratory & Sleep',
  neurological: 'Neurological',
  musculoskeletal: 'Musculoskeletal',
  dermatological: 'Skin & Scars',
  gastrointestinal: 'Digestive',
  dental: 'Dental & TMJ',
  cardiovascular: 'Cardiovascular',
  genitourinary: 'Genitourinary',
  other: 'Other Conditions',
};

/**
 * Get display name for a category
 */
export const getCategoryLabel = (category: string): string => {
  return CATEGORY_LABELS[category] || category;
};
