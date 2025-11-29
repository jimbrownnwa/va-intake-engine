-- VA Intake Engine - Row-Level Security Policies
-- Migration: 002_rls_policies
-- Created: 2024-11-29

-- =====================================================
-- ENABLE RLS ON ALL TABLES
-- =====================================================

ALTER TABLE veterans ENABLE ROW LEVEL SECURITY;
ALTER TABLE intake_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE veteran_profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE branches_of_service ENABLE ROW LEVEL SECURITY;
ALTER TABLE mos_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE conditions ENABLE ROW LEVEL SECURITY;
ALTER TABLE condition_instances ENABLE ROW LEVEL SECURITY;
ALTER TABLE question_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE answers ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- VETERANS TABLE POLICIES
-- =====================================================

-- Veterans can view their own profile
CREATE POLICY "Veterans can view own profile"
  ON veterans
  FOR SELECT
  USING (auth.uid() = id);

-- Veterans can insert their own profile (during signup)
CREATE POLICY "Veterans can insert own profile"
  ON veterans
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Veterans can update their own profile
CREATE POLICY "Veterans can update own profile"
  ON veterans
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- =====================================================
-- INTAKE SESSIONS TABLE POLICIES
-- =====================================================

-- Veterans can view their own sessions
CREATE POLICY "Veterans can view own sessions"
  ON intake_sessions
  FOR SELECT
  USING (veteran_id = auth.uid());

-- Veterans can create their own sessions
CREATE POLICY "Veterans can create own sessions"
  ON intake_sessions
  FOR INSERT
  WITH CHECK (veteran_id = auth.uid());

-- Veterans can update their own sessions
CREATE POLICY "Veterans can update own sessions"
  ON intake_sessions
  FOR UPDATE
  USING (veteran_id = auth.uid())
  WITH CHECK (veteran_id = auth.uid());

-- =====================================================
-- VETERAN PROFILE TABLE POLICIES
-- =====================================================

-- Veterans can view their own profile data
CREATE POLICY "Veterans can view own profile data"
  ON veteran_profile
  FOR SELECT
  USING (
    session_id IN (
      SELECT id FROM intake_sessions WHERE veteran_id = auth.uid()
    )
  );

-- Veterans can insert their own profile data
CREATE POLICY "Veterans can insert own profile data"
  ON veteran_profile
  FOR INSERT
  WITH CHECK (
    session_id IN (
      SELECT id FROM intake_sessions WHERE veteran_id = auth.uid()
    )
  );

-- Veterans can update their own profile data
CREATE POLICY "Veterans can update own profile data"
  ON veteran_profile
  FOR UPDATE
  USING (
    session_id IN (
      SELECT id FROM intake_sessions WHERE veteran_id = auth.uid()
    )
  )
  WITH CHECK (
    session_id IN (
      SELECT id FROM intake_sessions WHERE veteran_id = auth.uid()
    )
  );

-- =====================================================
-- BRANCHES OF SERVICE TABLE POLICIES
-- =====================================================

-- Veterans can view their own branches
CREATE POLICY "Veterans can view own branches"
  ON branches_of_service
  FOR SELECT
  USING (
    session_id IN (
      SELECT id FROM intake_sessions WHERE veteran_id = auth.uid()
    )
  );

-- Veterans can insert their own branches
CREATE POLICY "Veterans can insert own branches"
  ON branches_of_service
  FOR INSERT
  WITH CHECK (
    session_id IN (
      SELECT id FROM intake_sessions WHERE veteran_id = auth.uid()
    )
  );

-- Veterans can update their own branches
CREATE POLICY "Veterans can update own branches"
  ON branches_of_service
  FOR UPDATE
  USING (
    session_id IN (
      SELECT id FROM intake_sessions WHERE veteran_id = auth.uid()
    )
  );

-- Veterans can delete their own branches
CREATE POLICY "Veterans can delete own branches"
  ON branches_of_service
  FOR DELETE
  USING (
    session_id IN (
      SELECT id FROM intake_sessions WHERE veteran_id = auth.uid()
    )
  );

-- =====================================================
-- MOS HISTORY TABLE POLICIES
-- =====================================================

-- Veterans can view their own MOS history
CREATE POLICY "Veterans can view own MOS history"
  ON mos_history
  FOR SELECT
  USING (
    session_id IN (
      SELECT id FROM intake_sessions WHERE veteran_id = auth.uid()
    )
  );

-- Veterans can insert their own MOS history
CREATE POLICY "Veterans can insert own MOS history"
  ON mos_history
  FOR INSERT
  WITH CHECK (
    session_id IN (
      SELECT id FROM intake_sessions WHERE veteran_id = auth.uid()
    )
  );

-- Veterans can update their own MOS history
CREATE POLICY "Veterans can update own MOS history"
  ON mos_history
  FOR UPDATE
  USING (
    session_id IN (
      SELECT id FROM intake_sessions WHERE veteran_id = auth.uid()
    )
  );

-- Veterans can delete their own MOS history
CREATE POLICY "Veterans can delete own MOS history"
  ON mos_history
  FOR DELETE
  USING (
    session_id IN (
      SELECT id FROM intake_sessions WHERE veteran_id = auth.uid()
    )
  );

-- =====================================================
-- CONDITIONS TABLE POLICIES (Reference Data)
-- =====================================================

-- All authenticated users can view active conditions
CREATE POLICY "Authenticated users can view active conditions"
  ON conditions
  FOR SELECT
  USING (auth.role() = 'authenticated' AND is_active = true);

-- Only admins can insert/update/delete conditions (future admin panel)
-- For now, we'll manage this through migrations

-- =====================================================
-- CONDITION INSTANCES TABLE POLICIES
-- =====================================================

-- Veterans can view their own condition instances
CREATE POLICY "Veterans can view own condition instances"
  ON condition_instances
  FOR SELECT
  USING (
    session_id IN (
      SELECT id FROM intake_sessions WHERE veteran_id = auth.uid()
    )
  );

-- Veterans can insert their own condition instances
CREATE POLICY "Veterans can insert own condition instances"
  ON condition_instances
  FOR INSERT
  WITH CHECK (
    session_id IN (
      SELECT id FROM intake_sessions WHERE veteran_id = auth.uid()
    )
  );

-- Veterans can update their own condition instances
CREATE POLICY "Veterans can update own condition instances"
  ON condition_instances
  FOR UPDATE
  USING (
    session_id IN (
      SELECT id FROM intake_sessions WHERE veteran_id = auth.uid()
    )
  )
  WITH CHECK (
    session_id IN (
      SELECT id FROM intake_sessions WHERE veteran_id = auth.uid()
    )
  );

-- Veterans can delete their own condition instances
CREATE POLICY "Veterans can delete own condition instances"
  ON condition_instances
  FOR DELETE
  USING (
    session_id IN (
      SELECT id FROM intake_sessions WHERE veteran_id = auth.uid()
    )
  );

-- =====================================================
-- QUESTION TEMPLATES TABLE POLICIES (Reference Data)
-- =====================================================

-- All authenticated users can view question templates
CREATE POLICY "Authenticated users can view question templates"
  ON question_templates
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Only admins can insert/update/delete templates (future admin panel)
-- For now, we'll manage this through migrations

-- =====================================================
-- ANSWERS TABLE POLICIES
-- =====================================================

-- Veterans can view their own answers
CREATE POLICY "Veterans can view own answers"
  ON answers
  FOR SELECT
  USING (
    session_id IN (
      SELECT id FROM intake_sessions WHERE veteran_id = auth.uid()
    )
  );

-- Veterans can insert their own answers
CREATE POLICY "Veterans can insert own answers"
  ON answers
  FOR INSERT
  WITH CHECK (
    session_id IN (
      SELECT id FROM intake_sessions WHERE veteran_id = auth.uid()
    )
  );

-- Veterans can update their own answers
CREATE POLICY "Veterans can update own answers"
  ON answers
  FOR UPDATE
  USING (
    session_id IN (
      SELECT id FROM intake_sessions WHERE veteran_id = auth.uid()
    )
  )
  WITH CHECK (
    session_id IN (
      SELECT id FROM intake_sessions WHERE veteran_id = auth.uid()
    )
  );

-- Veterans can delete their own answers
CREATE POLICY "Veterans can delete own answers"
  ON answers
  FOR DELETE
  USING (
    session_id IN (
      SELECT id FROM intake_sessions WHERE veteran_id = auth.uid()
    )
  );

-- =====================================================
-- HELPER FUNCTION FOR FUTURE USE
-- =====================================================

-- Function to check if user owns a session (can be used in policies)
CREATE OR REPLACE FUNCTION user_owns_session(p_session_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1
    FROM intake_sessions
    WHERE id = p_session_id
    AND veteran_id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

COMMENT ON FUNCTION user_owns_session IS 'Helper function to check if current user owns a given session';
