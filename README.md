# VA Disability Intake Engine

A comprehensive VA Disability Intake Quiz application that collects veteran information to support writing high-quality Nexus Letters and Personal Statements for VA disability benefits claims.

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **UI Framework**: Material-UI (MUI) with "Government Modernism" theme
- **Backend/Database**: Supabase (PostgreSQL + Auth)
- **Routing**: React Router v6
- **State Management**: React Context (AuthContext + SessionContext)

## Features

### Completed Modules

#### Module 1: Veteran Profile
- Contact information (name, email, phone)
- Military service details (status, branches, dates)
- MOS/Job history (up to 10 entries)
- Duty stations

#### Module 2: Condition Screening
- 30 VA disability conditions organized by category
- Search and filter functionality
- Expandable condition cards with descriptions
- Personal description and existing rating tracking
- Real-time save to database

### Upcoming Modules

- **Module 3**: Condition Builder (detailed questions for each selected condition)
- **Module 4**: Review and Submit

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jimbrownnwa/va-intake-engine.git
   cd va-intake-engine
   ```

2. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Configure environment variables:
   Create `frontend/.env` with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Apply database migrations:
   Run the SQL files in `supabase/migrations/` in order via the Supabase SQL Editor.

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open http://localhost:5173 in your browser.

## Project Structure

```
va-intake-engine/
├── frontend/                    # React application
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── Conditions/      # Condition screening components
│   │   │   └── VeteranProfile/  # Profile form components
│   │   ├── context/             # React Context providers
│   │   ├── lib/                 # Utilities and API functions
│   │   ├── pages/               # Page components
│   │   └── types/               # TypeScript type definitions
│   └── package.json
├── supabase/
│   └── migrations/              # Database schema and seed data
├── reference/                   # Original quiz specifications
└── CLAUDE.md                    # Development documentation
```

## Database Schema

- **veterans** - User profiles
- **intake_sessions** - Quiz session tracking
- **veteran_profile** - Service history
- **branches_of_service** - Military branches (multi-select)
- **mos_history** - Job titles and dates
- **conditions** - 30 VA disability conditions
- **condition_instances** - Veteran's claimed conditions
- **question_templates** - Reusable question library
- **answers** - All question responses

## Development

See [CLAUDE.md](./CLAUDE.md) for detailed development documentation, architecture decisions, and implementation status.

## License

Private - All rights reserved.
