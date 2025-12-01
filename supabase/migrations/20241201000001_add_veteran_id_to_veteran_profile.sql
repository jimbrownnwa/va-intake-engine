-- Migration: Add veteran_id to veteran_profile
-- Purpose: Enable direct queries from veteran to profile for n8n automations

-- Add veteran_id column to veteran_profile
ALTER TABLE veteran_profile
ADD COLUMN veteran_id UUID REFERENCES veterans(id) ON DELETE CASCADE;

-- Backfill existing data from intake_sessions
UPDATE veteran_profile vp
SET veteran_id = s.veteran_id
FROM intake_sessions s
WHERE vp.session_id = s.id;

-- Make column NOT NULL after backfill
ALTER TABLE veteran_profile
ALTER COLUMN veteran_id SET NOT NULL;

-- Add index for performance on veteran lookups
CREATE INDEX idx_veteran_profile_veteran ON veteran_profile(veteran_id);
