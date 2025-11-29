/**
 * Question Flow Configuration
 *
 * Defines the order of questions and conditional logic for showing/hiding
 */

export interface QuestionFlowItem {
  questionKey: string;
  showIf: (answers: Record<string, any>) => boolean;
}

/**
 * Condition Builder question flow
 * All conditions use the same set of questions
 */
export const getConditionBuilderFlow = (): QuestionFlowItem[] => [
  // =====================================================
  // TIMELINE QUESTIONS
  // =====================================================
  {
    questionKey: 'condition_onset_date',
    showIf: () => true,
  },
  {
    questionKey: 'condition_onset_circumstances',
    showIf: () => true,
  },
  {
    questionKey: 'condition_in_service',
    showIf: () => true,
  },

  // =====================================================
  // SYMPTOM QUESTIONS
  // =====================================================
  {
    questionKey: 'condition_frequency',
    showIf: () => true,
  },
  {
    questionKey: 'condition_severity_scale',
    showIf: () => true,
  },
  {
    questionKey: 'condition_severity_average',
    showIf: () => true,
  },
  {
    questionKey: 'condition_getting_worse',
    showIf: () => true,
  },
  {
    questionKey: 'condition_flare_ups',
    showIf: () => true,
  },
  {
    questionKey: 'condition_triggers',
    showIf: (answers) => {
      // Show if they have flare-ups
      const flareUps = answers['condition_flare_ups'];
      return flareUps && flareUps !== 'No';
    },
  },

  // =====================================================
  // TREATMENT QUESTIONS
  // =====================================================
  {
    questionKey: 'condition_current_treatment',
    showIf: () => true,
  },
  {
    questionKey: 'condition_medications',
    showIf: (answers) => {
      const treatment = answers['condition_current_treatment'];
      return treatment && (
        treatment.includes('active treatment') ||
        treatment.includes('only medications')
      );
    },
  },
  {
    questionKey: 'condition_provider_name',
    showIf: (answers) => {
      const treatment = answers['condition_current_treatment'];
      return treatment && treatment.includes('active treatment');
    },
  },
  {
    questionKey: 'condition_treatment_frequency',
    showIf: (answers) => {
      const treatment = answers['condition_current_treatment'];
      return treatment && treatment.includes('active treatment');
    },
  },
  {
    questionKey: 'condition_hospitalizations',
    showIf: () => true,
  },
  {
    questionKey: 'condition_hospitalizations_details',
    showIf: (answers) => {
      const hospitalizations = answers['condition_hospitalizations'];
      return hospitalizations && hospitalizations !== 'No';
    },
  },
  {
    questionKey: 'condition_surgery',
    showIf: () => true,
  },
  {
    questionKey: 'condition_surgery_details',
    showIf: (answers) => {
      const surgery = answers['condition_surgery'];
      return surgery && surgery !== 'No';
    },
  },
  {
    questionKey: 'condition_therapies',
    showIf: () => true,
  },

  // =====================================================
  // FUNCTIONAL IMPACT QUESTIONS
  // =====================================================
  {
    questionKey: 'condition_work_impact',
    showIf: () => true,
  },
  {
    questionKey: 'condition_work_missed_days',
    showIf: () => true,
  },
  {
    questionKey: 'condition_work_accommodations',
    showIf: () => true,
  },
  {
    questionKey: 'condition_work_accommodations_details',
    showIf: (answers) => {
      const accommodations = answers['condition_work_accommodations'];
      return accommodations && (
        accommodations.includes('formal accommodations') ||
        accommodations.includes('informal accommodations')
      );
    },
  },
  {
    questionKey: 'condition_unable_to_work',
    showIf: () => true,
  },
  {
    questionKey: 'condition_daily_activities_impact',
    showIf: () => true,
  },
  {
    questionKey: 'condition_activities_limited',
    showIf: () => true,
  },
  {
    questionKey: 'condition_self_care_impact',
    showIf: () => true,
  },
  {
    questionKey: 'condition_sleep_impact',
    showIf: () => true,
  },
  {
    questionKey: 'condition_relationship_impact',
    showIf: () => true,
  },
  {
    questionKey: 'condition_recreational_impact',
    showIf: () => true,
  },

  // =====================================================
  // NEXUS / SERVICE CONNECTION QUESTIONS
  // =====================================================
  {
    questionKey: 'condition_service_connection_belief',
    showIf: () => true,
  },
  {
    questionKey: 'condition_service_connection_explanation',
    showIf: (answers) => {
      const belief = answers['condition_service_connection_belief'];
      return belief && belief !== 'No';
    },
  },
  {
    questionKey: 'condition_in_service_records',
    showIf: () => true,
  },
  {
    questionKey: 'condition_buddy_statement',
    showIf: () => true,
  },
  {
    questionKey: 'condition_lay_evidence',
    showIf: () => true,
  },
  {
    questionKey: 'condition_caused_by_other',
    showIf: () => true,
  },
  {
    questionKey: 'condition_caused_by_which',
    showIf: (answers) => {
      const causedBy = answers['condition_caused_by_other'];
      return causedBy && (causedBy === 'Yes' || causedBy === 'Possibly');
    },
  },
  {
    questionKey: 'condition_caused_by_explanation',
    showIf: (answers) => {
      const causedBy = answers['condition_caused_by_other'];
      return causedBy && (causedBy === 'Yes' || causedBy === 'Possibly');
    },
  },

  // =====================================================
  // ADDITIONAL INFORMATION
  // =====================================================
  {
    questionKey: 'condition_additional_info',
    showIf: () => true,
  },
];

/**
 * Get visible questions based on current answers
 */
export const getVisibleQuestions = (
  flow: QuestionFlowItem[],
  answers: Record<string, any>
): string[] => {
  return flow
    .filter((item) => item.showIf(answers))
    .map((item) => item.questionKey);
};

/**
 * Check if all required questions are answered
 */
export const getUnansweredRequired = (
  visibleQuestionKeys: string[],
  questionTemplates: Map<string, { validation_rules: { required?: boolean } | null }>,
  answers: Record<string, any>
): string[] => {
  return visibleQuestionKeys.filter((key) => {
    const template = questionTemplates.get(key);
    if (!template?.validation_rules?.required) {
      return false;
    }
    const answer = answers[key];
    if (answer === undefined || answer === null || answer === '') {
      return true;
    }
    if (Array.isArray(answer) && answer.length === 0) {
      return true;
    }
    return false;
  });
};
