-- Migration: Add veteran_id to condition_instances
-- Purpose: Enable direct queries from veteran to conditions for n8n automations

-- Add veteran_id column to condition_instances
ALTER TABLE condition_instances
ADD COLUMN veteran_id UUID REFERENCES veterans(id) ON DELETE CASCADE;

-- Backfill existing data from intake_sessions
UPDATE condition_instances ci
SET veteran_id = s.veteran_id
FROM intake_sessions s
WHERE ci.session_id = s.id;

-- Make column NOT NULL after backfill
ALTER TABLE condition_instances
ALTER COLUMN veteran_id SET NOT NULL;

-- Add index for performance on veteran lookups
CREATE INDEX idx_condition_instances_veteran ON condition_instances(veteran_id);
