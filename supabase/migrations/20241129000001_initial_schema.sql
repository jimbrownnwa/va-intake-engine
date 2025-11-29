-- VA Intake Engine - Initial Schema
-- Migration: 001_initial_schema
-- Created: 2024-11-29

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- VETERANS TABLE
-- =====================================================
CREATE TABLE veterans (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  phone TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =====================================================
-- INTAKE SESSIONS TABLE
-- =====================================================
CREATE TABLE intake_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  veteran_id UUID NOT NULL REFERENCES veterans(id) ON DELETE CASCADE,
  started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  current_step TEXT,
  progress_percentage INTEGER NOT NULL DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
  status TEXT NOT NULL DEFAULT 'in_progress' CHECK (status IN ('in_progress', 'completed')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_intake_sessions_veteran_id ON intake_sessions(veteran_id);
CREATE INDEX idx_intake_sessions_status ON intake_sessions(status);

-- =====================================================
-- VETERAN PROFILE TABLE
-- =====================================================
CREATE TABLE veteran_profile (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id UUID UNIQUE NOT NULL REFERENCES intake_sessions(id) ON DELETE CASCADE,
  military_status TEXT CHECK (military_status IN ('active_duty', 'veteran', 'guard', 'reserve')),
  va_file_number TEXT,
  service_start_date DATE NOT NULL,
  service_end_date DATE,
  duty_stations TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_veteran_profile_session_id ON veteran_profile(session_id);

-- =====================================================
-- BRANCHES OF SERVICE TABLE
-- =====================================================
CREATE TABLE branches_of_service (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id UUID NOT NULL REFERENCES intake_sessions(id) ON DELETE CASCADE,
  branch_name TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_branches_session_id ON branches_of_service(session_id);

-- =====================================================
-- MOS HISTORY TABLE
-- =====================================================
CREATE TABLE mos_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id UUID NOT NULL REFERENCES intake_sessions(id) ON DELETE CASCADE,
  job_title TEXT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  sequence_order INTEGER NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT valid_dates CHECK (end_date >= start_date)
);

CREATE INDEX idx_mos_history_session_id ON mos_history(session_id);
CREATE INDEX idx_mos_history_sequence ON mos_history(session_id, sequence_order);

-- =====================================================
-- CONDITIONS TABLE (Reference/Template)
-- =====================================================
CREATE TABLE conditions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  description TEXT,
  category TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_conditions_active ON conditions(is_active, display_order);
CREATE INDEX idx_conditions_category ON conditions(category);

-- =====================================================
-- CONDITION INSTANCES TABLE
-- =====================================================
CREATE TABLE condition_instances (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id UUID NOT NULL REFERENCES intake_sessions(id) ON DELETE CASCADE,
  condition_id UUID NOT NULL REFERENCES conditions(id) ON DELETE CASCADE,
  has_condition BOOLEAN NOT NULL DEFAULT false,
  personal_description TEXT,
  has_existing_rating BOOLEAN NOT NULL DEFAULT false,
  completed BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT unique_session_condition UNIQUE(session_id, condition_id)
);

CREATE INDEX idx_condition_instances_session ON condition_instances(session_id);
CREATE INDEX idx_condition_instances_condition ON condition_instances(condition_id);
CREATE INDEX idx_condition_instances_has_condition ON condition_instances(session_id, has_condition);

-- =====================================================
-- QUESTION TEMPLATES TABLE
-- =====================================================
CREATE TABLE question_templates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  question_key TEXT UNIQUE NOT NULL,
  question_text TEXT NOT NULL,
  question_type TEXT NOT NULL CHECK (question_type IN ('text', 'textarea', 'single_select', 'multi_select', 'date', 'scale')),
  options JSONB,
  validation_rules JSONB,
  help_text TEXT,
  placeholder TEXT,
  category TEXT,
  is_reusable BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_question_templates_key ON question_templates(question_key);
CREATE INDEX idx_question_templates_category ON question_templates(category);
CREATE INDEX idx_question_templates_reusable ON question_templates(is_reusable);

-- =====================================================
-- ANSWERS TABLE
-- =====================================================
CREATE TABLE answers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id UUID NOT NULL REFERENCES intake_sessions(id) ON DELETE CASCADE,
  question_key TEXT NOT NULL,
  condition_instance_id UUID REFERENCES condition_instances(id) ON DELETE CASCADE,
  answer_value JSONB NOT NULL,
  answered_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT unique_answer UNIQUE(session_id, question_key, condition_instance_id)
);

CREATE INDEX idx_answers_session ON answers(session_id);
CREATE INDEX idx_answers_question_key ON answers(question_key);
CREATE INDEX idx_answers_condition_instance ON answers(condition_instance_id);

-- =====================================================
-- FUNCTIONS & TRIGGERS
-- =====================================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply updated_at triggers to relevant tables
CREATE TRIGGER update_veterans_updated_at
  BEFORE UPDATE ON veterans
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_veteran_profile_updated_at
  BEFORE UPDATE ON veteran_profile
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_condition_instances_updated_at
  BEFORE UPDATE ON condition_instances
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_answers_updated_at
  BEFORE UPDATE ON answers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Function to update session last_updated_at when related data changes
CREATE OR REPLACE FUNCTION update_session_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE intake_sessions
  SET last_updated_at = NOW()
  WHERE id = COALESCE(NEW.session_id, OLD.session_id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply session timestamp triggers
CREATE TRIGGER update_session_on_profile_change
  AFTER INSERT OR UPDATE OR DELETE ON veteran_profile
  FOR EACH ROW
  EXECUTE FUNCTION update_session_timestamp();

CREATE TRIGGER update_session_on_branches_change
  AFTER INSERT OR UPDATE OR DELETE ON branches_of_service
  FOR EACH ROW
  EXECUTE FUNCTION update_session_timestamp();

CREATE TRIGGER update_session_on_mos_change
  AFTER INSERT OR UPDATE OR DELETE ON mos_history
  FOR EACH ROW
  EXECUTE FUNCTION update_session_timestamp();

CREATE TRIGGER update_session_on_condition_change
  AFTER INSERT OR UPDATE OR DELETE ON condition_instances
  FOR EACH ROW
  EXECUTE FUNCTION update_session_timestamp();

CREATE TRIGGER update_session_on_answer_change
  AFTER INSERT OR UPDATE OR DELETE ON answers
  FOR EACH ROW
  EXECUTE FUNCTION update_session_timestamp();

-- =====================================================
-- COMMENTS FOR DOCUMENTATION
-- =====================================================

COMMENT ON TABLE veterans IS 'Core veteran user profiles linked to auth.users';
COMMENT ON TABLE intake_sessions IS 'Tracks each intake session with progress and completion status';
COMMENT ON TABLE veteran_profile IS 'Veteran service history and profile information';
COMMENT ON TABLE branches_of_service IS 'Military branches served in (one-to-many with sessions)';
COMMENT ON TABLE mos_history IS 'Job titles/MOS history (repeatable, up to 10 per veteran)';
COMMENT ON TABLE conditions IS 'Master list of claimable VA disability conditions';
COMMENT ON TABLE condition_instances IS 'Specific conditions claimed by veterans in their intake session';
COMMENT ON TABLE question_templates IS 'Reusable question templates for condition builders';
COMMENT ON TABLE answers IS 'Individual question responses linked to sessions and optionally to condition instances';
