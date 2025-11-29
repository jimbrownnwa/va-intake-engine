-- VA Intake Engine - Seed Question Templates
-- Migration: 004_seed_question_templates
-- Created: 2024-11-29
-- Populates reusable question templates for Condition Builder

INSERT INTO question_templates (question_key, question_text, question_type, options, validation_rules, help_text, placeholder, category, is_reusable) VALUES

-- =====================================================
-- SYMPTOM ONSET & TIMELINE QUESTIONS
-- =====================================================

('condition_onset_date',
'When did you first notice symptoms of this condition?',
'date',
NULL,
'{"required": true}',
'Provide the approximate month and year when you first experienced symptoms',
NULL,
'timeline',
true),

('condition_onset_circumstances',
'Describe the circumstances when this condition first started',
'textarea',
NULL,
'{"required": true, "minLength": 20}',
'Explain what you were doing, what happened, or what you believe caused this condition to start',
'Example: During deployment in 2007, I was exposed to...',
'timeline',
true),

('condition_in_service',
'Did this condition occur while you were in active military service?',
'single_select',
'["Yes, symptoms started during active service", "No, symptoms started after separation", "Unsure"]',
'{"required": true}',
NULL,
NULL,
'nexus',
true),

-- =====================================================
-- FREQUENCY & SEVERITY QUESTIONS
-- =====================================================

('condition_frequency',
'How often do you experience symptoms?',
'single_select',
'["Daily", "Several times per week", "Weekly", "Monthly", "Varies/Unpredictable"]',
'{"required": true}',
NULL,
NULL,
'symptom',
true),

('condition_severity_scale',
'On a scale of 1-10, how would you rate the severity of this condition at its worst?',
'scale',
'{"min": 1, "max": 10}',
'{"required": true}',
'1 = Minimal impact, 10 = Completely debilitating',
NULL,
'symptom',
true),

('condition_severity_average',
'On a scale of 1-10, how would you rate the average daily severity?',
'scale',
'{"min": 1, "max": 10}',
'{"required": true}',
'1 = Minimal impact, 10 = Completely debilitating',
NULL,
'symptom',
true),

('condition_getting_worse',
'Has this condition gotten worse over time?',
'single_select',
'["Yes, significantly worse", "Yes, somewhat worse", "Stayed about the same", "Improved somewhat", "Improved significantly"]',
'{"required": true}',
NULL,
NULL,
'symptom',
true),

('condition_flare_ups',
'Do you experience flare-ups where symptoms get significantly worse?',
'single_select',
'["Yes, frequently", "Yes, occasionally", "Rarely", "No"]',
'{"required": true}',
NULL,
NULL,
'symptom',
true),

('condition_triggers',
'What triggers or makes this condition worse?',
'textarea',
NULL,
'{"required": false}',
'Examples: weather changes, stress, physical activity, certain foods, etc.',
'Describe what makes your symptoms worse...',
'symptom',
true),

-- =====================================================
-- CURRENT TREATMENT QUESTIONS
-- =====================================================

('condition_current_treatment',
'Are you currently receiving treatment for this condition?',
'single_select',
'["Yes, active treatment", "Yes, but only medications", "Previous treatment, not currently", "No treatment"]',
'{"required": true}',
NULL,
NULL,
'treatment',
true),

('condition_medications',
'List all medications you take for this condition',
'textarea',
NULL,
'{"required": false}',
'Include prescription and over-the-counter medications, dosages if known',
'Example: Ibuprofen 800mg twice daily, Gabapentin 300mg three times daily...',
'treatment',
true),

('condition_provider_name',
'Who is your primary healthcare provider for this condition?',
'text',
NULL,
'{"required": false}',
'Include doctor name and facility if applicable',
'Dr. Smith at VA Medical Center',
'treatment',
true),

('condition_treatment_frequency',
'How often do you see a healthcare provider for this condition?',
'single_select',
'["Weekly", "Monthly", "Every 3 months", "Every 6 months", "Annually", "As needed only", "No regular appointments"]',
'{"required": false}',
NULL,
NULL,
'treatment',
true),

('condition_hospitalizations',
'Have you been hospitalized or had emergency care for this condition?',
'single_select',
'["Yes, multiple times", "Yes, once", "No"]',
'{"required": true}',
NULL,
NULL,
'treatment',
true),

('condition_hospitalizations_details',
'Describe the hospitalizations or emergency care',
'textarea',
NULL,
'{"required": false}',
'Include dates, hospital names, and what happened',
'Example: May 2020, VA Hospital in Tampa, severe flare-up...',
'treatment',
true),

('condition_surgery',
'Have you had surgery for this condition?',
'single_select',
'["Yes", "No", "Recommended but not yet done"]',
'{"required": true}',
NULL,
NULL,
'treatment',
true),

('condition_surgery_details',
'Describe the surgery or surgical recommendation',
'textarea',
NULL,
'{"required": false}',
'Include dates, type of surgery, outcomes',
NULL,
'treatment',
true),

('condition_therapies',
'What other treatments or therapies have you tried?',
'multi_select',
'["Physical therapy", "Occupational therapy", "Chiropractic care", "Massage therapy", "Acupuncture", "Mental health counseling", "Support groups", "Alternative medicine", "None"]',
'{"required": false}',
'Select all that apply',
NULL,
'treatment',
true),

-- =====================================================
-- FUNCTIONAL IMPACT - WORK
-- =====================================================

('condition_work_impact',
'How does this condition affect your ability to work?',
'textarea',
NULL,
'{"required": true, "minLength": 30}',
'Be specific about tasks you can''t do, accommodations needed, days missed, etc.',
'Example: I have difficulty standing for long periods, miss 2-3 days per month due to flare-ups...',
'functional_impact',
true),

('condition_work_missed_days',
'How many days of work have you missed in the past year due to this condition?',
'text',
NULL,
'{"required": false}',
NULL,
'Example: Approximately 15-20 days',
'functional_impact',
true),

('condition_work_accommodations',
'Do you require work accommodations because of this condition?',
'single_select',
'["Yes, have formal accommodations", "Yes, informal accommodations", "Need them but don''t have them", "No accommodations needed"]',
'{"required": false}',
NULL,
NULL,
'functional_impact',
true),

('condition_work_accommodations_details',
'Describe the work accommodations',
'textarea',
NULL,
'{"required": false}',
NULL,
'Example: Modified schedule, ergonomic chair, reduced standing time...',
'functional_impact',
true),

('condition_unable_to_work',
'Has this condition prevented you from working?',
'single_select',
'["Yes, currently unable to work", "Yes, previously unable to work", "No, still working but difficult", "No impact on work"]',
'{"required": true}',
NULL,
NULL,
'functional_impact',
true),

-- =====================================================
-- FUNCTIONAL IMPACT - DAILY ACTIVITIES
-- =====================================================

('condition_daily_activities_impact',
'How does this condition affect your daily activities and quality of life?',
'textarea',
NULL,
'{"required": true, "minLength": 30}',
'Include impacts on self-care, household tasks, hobbies, social life, etc.',
'Example: I have difficulty grocery shopping, can''t play with my kids...',
'functional_impact',
true),

('condition_activities_limited',
'What activities can you no longer do because of this condition?',
'textarea',
NULL,
'{"required": false}',
'List specific activities you''ve had to stop or significantly reduce',
'Example: Running, hiking, yard work, playing guitar...',
'functional_impact',
true),

('condition_self_care_impact',
'Does this condition affect your ability to care for yourself?',
'multi_select',
'["Bathing/showering", "Dressing", "Eating", "Using the toilet", "Grooming", "Walking", "Climbing stairs", "No impact on self-care"]',
'{"required": false}',
'Select all that apply',
NULL,
'functional_impact',
true),

('condition_sleep_impact',
'How does this condition affect your sleep?',
'single_select',
'["Severely disrupts sleep nightly", "Frequently disrupts sleep", "Occasionally disrupts sleep", "Rarely affects sleep", "No impact on sleep"]',
'{"required": false}',
NULL,
NULL,
'functional_impact',
true),

('condition_relationship_impact',
'How has this condition affected your relationships?',
'textarea',
NULL,
'{"required": false}',
'Describe impacts on family, friends, or intimate relationships',
NULL,
'functional_impact',
true),

('condition_recreational_impact',
'How has this condition affected your hobbies and recreational activities?',
'textarea',
NULL,
'{"required": false}',
NULL,
'Example: Can no longer golf, had to stop coaching kids'' soccer...',
'functional_impact',
true),

-- =====================================================
-- SERVICE CONNECTION / NEXUS
-- =====================================================

('condition_service_connection_belief',
'Do you believe this condition is related to your military service?',
'single_select',
'["Yes, definitely", "Yes, probably", "Possibly", "Unsure", "No"]',
'{"required": true}',
NULL,
NULL,
'nexus',
true),

('condition_service_connection_explanation',
'Explain how you believe this condition is connected to your military service',
'textarea',
NULL,
'{"required": true, "minLength": 30}',
'Include specific events, exposures, activities, or situations during service',
'Example: During my deployment to Iraq in 2004, I was exposed to burn pits daily...',
'nexus',
true),

('condition_in_service_records',
'Is this condition documented in your military medical records?',
'single_select',
'["Yes, definitely documented", "Partially documented", "Mentioned but not fully documented", "No, not documented", "Unsure"]',
'{"required": true}',
NULL,
NULL,
'nexus',
true),

('condition_buddy_statement',
'Do you have or can you get a buddy statement (letter from fellow service member)?',
'single_select',
'["Yes, already have one", "Yes, can get one", "Maybe", "No", "Not applicable"]',
'{"required": false}',
'A buddy statement is a letter from someone who served with you confirming your condition or the events that caused it',
NULL,
'nexus',
true),

('condition_lay_evidence',
'Do you have any personal statements, journals, or other lay evidence?',
'textarea',
NULL,
'{"required": false}',
'Describe any letters, emails, journals, or other documentation you have',
NULL,
'nexus',
true),

-- =====================================================
-- SECONDARY CONDITIONS
-- =====================================================

('condition_caused_by_other',
'Is this condition caused or made worse by another service-connected condition?',
'single_select',
'["Yes", "Possibly", "No", "Unsure"]',
'{"required": true}',
'Secondary conditions are those caused by or worsened by another service-connected condition',
NULL,
'nexus',
true),

('condition_caused_by_which',
'Which condition caused or worsened this condition?',
'text',
NULL,
'{"required": false}',
NULL,
'Example: My back pain causes my depression',
'nexus',
true),

('condition_caused_by_explanation',
'Explain how the other condition causes or worsens this condition',
'textarea',
NULL,
'{"required": false}',
NULL,
'Example: Because I can''t exercise due to my knee pain, I''ve gained weight which worsens my sleep apnea...',
'nexus',
true),

-- =====================================================
-- ADDITIONAL INFORMATION
-- =====================================================

('condition_additional_info',
'Is there anything else important about this condition we should know?',
'textarea',
NULL,
'{"required": false}',
'Include any other relevant information not covered above',
NULL,
'additional',
true);

-- =====================================================
-- INDICES
-- =====================================================

CREATE INDEX IF NOT EXISTS idx_question_templates_reusable_category ON question_templates(is_reusable, category);

-- =====================================================
-- COMMENT
-- =====================================================

COMMENT ON TABLE question_templates IS 'Contains 40+ reusable question templates for Condition Builder - covers symptoms, treatment, functional impact, and service connection';
