# VA Intake Engine - Project Documentation

## Project Overview

**Purpose**: A comprehensive VA Disability Intake Quiz that collects veteran information to support writing high-quality Nexus Letters and Personal Statements for VA disability benefits claims.

**Tech Stack**:
- **Frontend**: React 19 + TypeScript + Vite
- **UI Framework**: Material-UI (MUI)
- **Backend/Database**: Supabase (PostgreSQL + Auth)
- **Routing**: React Router v6
- **State Management**: React Context (AuthContext + SessionContext)

**Development Approach**: Phased MVP
- **Phase 1 (MVP)**: Module 1 (Veteran Profile) + 1 condition (Tinnitus) - CURRENT
- **Phase 2**: Scale to all 30 conditions
- **Phase 3**: Admin panel, document generation, analytics

---

## Project Structure

```
va-intake-engine/
├── frontend/                       # React TypeScript application
│   ├── src/
│   │   ├── lib/
│   │   │   ├── supabase.ts        # Supabase client initialization
│   │   │   ├── api/               # API functions (sessions, answers, conditions, profile)
│   │   │   └── utils/             # Utility functions (validation, questionFlow)
│   │   ├── types/
│   │   │   ├── database.ts        # Generated Supabase types
│   │   │   ├── questions.ts       # Question/Answer types
│   │   │   └── session.ts         # Session state types
│   │   ├── context/
│   │   │   ├── AuthContext.tsx    # Authentication state & operations
│   │   │   └── SessionContext.tsx # Session state & auto-save logic
│   │   ├── hooks/                 # Custom hooks (useAutoSave, useQuestions, useProgress)
│   │   ├── components/
│   │   │   ├── Layout/            # AppLayout, ProgressBar
│   │   │   ├── Auth/              # LoginForm, SignupForm, MagicLinkForm
│   │   │   ├── Questions/         # QuestionRenderer, TextInput, SingleSelect, etc.
│   │   │   ├── VeteranProfile/    # ContactInfo, MilitaryService, MOSHistory, DutyStations
│   │   │   ├── Conditions/        # ConditionScreening, ConditionCard, ConditionBuilder
│   │   │   └── Common/            # WelcomeScreen, NavigationButtons, AutoSaveIndicator
│   │   ├── pages/
│   │   │   ├── WelcomePage.tsx    # ✅ Landing page
│   │   │   ├── LoginPage.tsx      # ✅ Auth page
│   │   │   ├── VeteranProfilePage.tsx # ⚠️ Placeholder (needs full implementation)
│   │   │   ├── ConditionScreeningPage.tsx # ⏸️ Not started
│   │   │   ├── ConditionBuilderPage.tsx   # ⏸️ Not started
│   │   │   └── CompletePage.tsx   # ⏸️ Not started
│   │   ├── theme.ts               # ✅ MUI theme configuration
│   │   ├── main.tsx               # ✅ Entry point with providers
│   │   └── App.tsx                # ✅ Routing setup
│   ├── .env                       # Environment variables (Supabase URL & keys)
│   └── package.json               # Dependencies
│
├── supabase/
│   └── migrations/
│       ├── 20241129000001_initial_schema.sql       # ✅ All 9 tables
│       ├── 20241129000002_rls_policies.sql         # ✅ Row-level security
│       ├── 20241129000003_seed_conditions.sql      # ✅ 30 conditions
│       └── 20241129000004_seed_question_templates.sql # ✅ 40+ questions
│
├── reference/
│   ├── Outgrow Quiz_ V4.md        # Original quiz structure (500+ questions)
│   └── Custom Intake.md           # Technical requirements & architecture
│
├── .env                           # Root env (Supabase config)
└── claude.md                      # This file
```

---

## Database Schema

### Core Tables

**veterans** - User profiles linked to auth.users
- `id` (uuid, FK to auth.users)
- `email`, `full_name`, `phone`
- `created_at`, `updated_at`

**intake_sessions** - Tracks each intake run
- `id` (uuid, PK)
- `veteran_id` (FK to veterans)
- `started_at`, `last_updated_at`, `completed_at`
- `current_step` (e.g., "veteran_profile", "condition_tinnitus_q45")
- `progress_percentage` (0-100)
- `status` ('in_progress' | 'completed')

**veteran_profile** - Service history (1-to-1 with session)
- `session_id` (FK to intake_sessions, unique)
- `military_status` ('active_duty' | 'veteran' | 'guard' | 'reserve')
- `va_file_number`
- `service_start_date`, `service_end_date`
- `duty_stations` (text field)

**branches_of_service** - Multi-select branches (1-to-many with session)
- `session_id`, `branch_name`

**mos_history** - Job titles (up to 10 per veteran)
- `session_id`, `job_title`, `start_date`, `end_date`, `sequence_order`

**conditions** - Reference table of 30 VA disability conditions
- `name`, `description`, `category`, `is_active`, `display_order`

**condition_instances** - Veteran's claimed conditions
- `session_id`, `condition_id`
- `has_condition`, `personal_description`, `has_existing_rating`, `completed`

**question_templates** - Reusable question library (40+ templates)
- `question_key`, `question_text`, `question_type`, `options`, `validation_rules`
- `help_text`, `placeholder`, `category`, `is_reusable`

**answers** - All question responses
- `session_id`, `question_key`, `condition_instance_id` (nullable)
- `answer_value` (JSONB - flexible storage)
- Unique constraint: (session_id, question_key, condition_instance_id)

### Key Features
- **Auto-timestamps**: Triggers update `updated_at` on all relevant tables
- **Session tracking**: Triggers update `intake_sessions.last_updated_at` when related data changes
- **RLS (Row-Level Security)**: Veterans can only access their own data
- **Cascading deletes**: Deleting a session deletes all related data

---

## Architecture Decisions

### 1. Hybrid Data Model
**Decision**: Question templates in database, quiz flow logic in code

**Rationale**:
- ✅ Question templates reusable across conditions
- ✅ Easy to update question text without code changes
- ✅ Flow logic in code is easier to maintain and test
- ✅ Best of both worlds: flexibility + maintainability

### 2. Auto-Save Strategy
**Implementation**: Debounced saves (500ms after user stops typing)

**Rationale**:
- Prevents data loss if user closes browser
- Reduces database writes (debouncing)
- Immediate saves for selections (radio, checkbox, date)
- Force save on navigation

### 3. Progress Calculation
**Current approach** (MVP):
- 30% - Veteran Profile completion
- 20% - Condition screening
- 50% - Condition builders (weighted by selected conditions)

### 4. Authentication
**Enabled methods**:
- Email/Password (Supabase Auth)
- Magic Link (passwordless)

**Flow**:
1. User signs up → Creates auth.users entry + veterans table entry
2. Login → Auto-creates or loads existing session
3. Session persists in localStorage (Supabase handles this)

### 5. Condition Builder Pattern
**Reusable across all conditions**:
- Each condition uses same ~40 question templates
- Questions categorized: timeline, symptom, treatment, functional_impact, nexus
- Conditional logic handled in code (showIf functions)

---

## Implementation Status

### ✅ Completed (Sprint 1 - Foundation)

**Database**:
- [x] All 9 tables created
- [x] RLS policies configured
- [x] 30 conditions seeded
- [x] 40+ question templates seeded
- [x] Auto-update triggers
- [x] Indexes for performance

**Frontend Core**:
- [x] Supabase client initialized
- [x] TypeScript types (database, questions, session)
- [x] AuthContext (signup, login, magic link, logout)
- [x] SessionContext (session CRUD, auto-save, progress)
- [x] MUI theme configuration
- [x] Routing with protected routes
- [x] WelcomePage (landing)
- [x] LoginPage (3 auth methods)
- [x] VeteranProfilePage (placeholder)

### ⚠️ In Progress (Sprint 2 - Module 1)

**Veteran Profile Components** (NOT YET BUILT):
- [ ] ContactInfo component
- [ ] MilitaryService component
- [ ] MOSHistory component (repeatable, "add another")
- [ ] DutyStations component
- [ ] Wire up auto-save for all fields
- [ ] Form validation
- [ ] Progress tracking integration

### ⏸️ Not Started (Sprint 3+)

- [ ] ConditionScreeningPage
- [ ] ConditionCard component (3-question pattern)
- [ ] ConditionBuilderPage
- [ ] QuestionRenderer (dynamic)
- [ ] All question type components (text, textarea, select, multi-select, date, scale)
- [ ] CompletePage
- [ ] ProgressBar component
- [ ] Navigation buttons

---

## Development Workflow

### Setup Instructions

1. **Clone and install**:
   ```bash
   cd va-intake-engine/frontend
   npm install
   ```

2. **Configure environment**:
   - Ensure `frontend/.env` has:
     ```
     VITE_SUPABASE_URL=https://nrylenxnxtjpkomnxety.supabase.co
     VITE_SUPABASE_ANON_KEY=eyJhbGci...
     ```

3. **Apply database migrations**:
   - Go to Supabase dashboard: https://nrylenxnxtjpkomnxety.supabase.co
   - SQL Editor → Run each migration file in order:
     1. `20241129000001_initial_schema.sql`
     2. `20241129000002_rls_policies.sql`
     3. `20241129000003_seed_conditions.sql`
     4. `20241129000004_seed_question_templates.sql`

4. **Enable Email Auth** (if not already):
   - Supabase Dashboard → Authentication → Providers
   - Enable "Email" provider
   - Disable "Confirm email" for testing (enable later for prod)

5. **Run dev server**:
   ```bash
   npm run dev
   ```
   - Visit: http://localhost:5173

### Testing the Current Build

1. **Welcome Page**: Navigate to `/`
2. **Sign Up**: Click "Start My Claim" → Sign Up tab
3. **Login**: Should auto-redirect to `/intake/profile`
4. **Session Creation**: Check browser console - session should be auto-created
5. **Profile Page**: Currently a placeholder showing session info

---

## Next Steps (Priority Order)

### Sprint 2: Module 1 - Veteran Profile

1. **Create ContactInfo Component**:
   - Fields: Full Name, Email (pre-filled), Phone
   - Wire to SessionContext.saveAnswer()
   - Auto-save on blur

2. **Create MilitaryService Component**:
   - Radio buttons: Military Status (4 options)
   - Multi-select checkboxes: Branches (15 options)
   - Date pickers: Service start/end (month/year only)
   - Text input: VA File Number (optional)
   - Save to `veteran_profile` and `branches_of_service` tables

3. **Create MOSHistory Component**:
   - Repeatable form group (up to 10)
   - Fields per entry: Job Title, Start Date, End Date
   - "Add Another" button
   - Save to `mos_history` table with `sequence_order`

4. **Create DutyStations Component**:
   - Large textarea
   - Placeholder with example
   - Character limit: 1000
   - Save to `veteran_profile.duty_stations`

5. **Integrate into VeteranProfilePage**:
   - Replace placeholder with actual components
   - Add "Next" button → Navigate to `/intake/conditions`
   - Update `current_step` on navigation

6. **Add Progress Bar**:
   - Show at top of all intake pages
   - Calculate based on answers saved
   - Update in real-time

### Sprint 3: Module 2 & 3 - Tinnitus Condition

1. **ConditionScreeningPage**:
   - Loop through conditions (start with just Tinnitus for MVP)
   - ConditionCard: "Do you have?", "Describe", "Existing rating?"
   - Save to `condition_instances`

2. **ConditionBuilderPage**:
   - Fetch question templates from database
   - QuestionRenderer component (handles all question types)
   - Implement conditional logic (showIf)
   - ~30-40 questions for Tinnitus
   - Mark condition as completed

3. **Question Type Components**:
   - TextInput (MUI TextField)
   - TextArea (MUI TextField multiline)
   - SingleSelect (MUI RadioGroup)
   - MultiSelect (MUI Checkbox group)
   - DatePicker (MUI DatePicker - month/year)
   - ScaleSlider (MUI Slider 1-10)

4. **CompletePage**:
   - Summary of submission
   - Next steps
   - Option to review/edit

---

## Key Patterns & Conventions

### Auto-Save Pattern
```typescript
const { saveAnswer } = useSession()

// Text inputs - debounced
useEffect(() => {
  const timer = setTimeout(() => {
    if (value) saveAnswer('question_key', value)
  }, 500)
  return () => clearTimeout(timer)
}, [value])

// Selections - immediate
const handleChange = (newValue) => {
  setValue(newValue)
  saveAnswer('question_key', newValue)
}
```

### Answer Storage Keys
- **Profile questions**: `question_key` (no condition instance)
- **Condition questions**: Automatically scoped by `condition_instance_id`

Example:
```typescript
// Profile question
saveAnswer('contact_phone', '555-1234')

// Condition question
saveAnswer('condition_onset_date', '2020-05-01', tinnitus_instance_id)
```

### Question Flow Pattern
```typescript
export const getConditionBuilderFlow = () => [
  {
    questionKey: 'condition_current_treatment',
    showIf: () => true, // Always show
  },
  {
    questionKey: 'condition_medications',
    showIf: (answers) => answers['condition_current_treatment'] === 'Yes, active treatment',
  },
]
```

---

## Common Tasks

### Adding a New Condition
1. Insert into `conditions` table (Supabase SQL Editor)
2. Add to ConditionScreeningPage conditions array
3. No code changes needed - ConditionBuilder is reusable

### Adding a New Question Template
1. Insert into `question_templates` table
2. Add to appropriate question flow in `lib/utils/questionFlow.ts`
3. QuestionRenderer will handle it automatically

### Debugging Session Issues
- Check browser console for Supabase errors
- Verify RLS policies (common auth issues)
- Check `intake_sessions` table in Supabase dashboard
- Ensure user is authenticated: `useAuth().user`

### Resetting Test Data
```sql
-- Delete all sessions for a user
DELETE FROM intake_sessions WHERE veteran_id = 'user-uuid';

-- This cascades to all related data (profile, answers, conditions, etc.)
```

---

## Reference Documents

1. **Outgrow Quiz_ V4.md**:
   - Original 500+ question specification
   - All condition descriptions
   - Question types and validation rules
   - Logic jumps and branching

2. **Custom Intake.md**:
   - Technical requirements
   - Data model design
   - Admin panel requirements
   - Future enhancements

3. **Implementation Plan**:
   - See: `.claude/plans/shiny-drifting-gosling.md`
   - Comprehensive roadmap
   - Sprint breakdowns
   - Dependencies and timeline

---

## Known Issues / TODOs

- [ ] Need to implement actual progress calculation (currently simplified)
- [ ] Email confirmation flow (disabled for MVP)
- [ ] Password reset page
- [ ] Mobile responsive testing
- [ ] Loading states for async operations
- [ ] Error boundaries for crash recovery
- [ ] Offline detection and retry logic
- [ ] Session timeout handling

---

## Questions for Future Development

1. **Should we implement question versioning?**
   - Track which version of questions were answered
   - Important for analytics and document generation

2. **How to handle partial condition completion?**
   - Allow saving mid-way through condition builder?
   - Resume at exact question?

3. **Document generation approach?**
   - Server-side (Node/Python)?
   - Client-side (jsPDF)?
   - Use GPT for natural language?

4. **Admin panel scope?**
   - CRUD for conditions and questions?
   - Analytics dashboard?
   - User management?

---

## Contact & Support

**Project Owner**: Jim
**Supabase Project**: https://nrylenxnxtjpkomnxety.supabase.co
**Database**: PostgreSQL via Supabase
**Environment**: Development (not production-ready yet)

---

**Last Updated**: 2024-11-29
**Current Sprint**: Sprint 1 Complete ✅ → Starting Sprint 2
**Next Milestone**: Complete Module 1 (Veteran Profile)
