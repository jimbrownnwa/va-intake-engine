## Summary of What We Will Build

**A. Veteran Intake Web Application**

A secure web application where veterans can:

* Start an intake, save progress, and return later.

* Answer a guided sequence of questions about:

  * Personal details and contact info

  * Service history, MOS, duty stations

  * Conditions they are experiencing

  * Detailed impacts on daily life and work

The experience will be optimized for clarity and calm — long form, but broken into small, logical steps with autosave and clear progress indicators.

---

**B. Condition Engine & Reusable “Condition Builder”**

Instead of manually duplicating logic, we’ll model conditions and questions as data:

* Conditions Table

  * One row per condition (e.g., Tinnitus, PTSD, Depression, Back Pain, etc.).

  * Includes metadata such as category, severity scales, and any condition-specific nuances.

* Question Templates Table

  * A library of reusable questions:

    * General questions (e.g., “Describe this condition in your own words”).

    * Condition-builder questions (e.g., onset, frequency, severity, functional impact, treatment, work limitations).

  * Each template stores:

    * Question text

    * Question type (single select, multi-select, text, date, scale)

    * Validation rules

    * Tags (symptom, timeline, nexus, functional impact, etc.)

    * Optional condition-specific variants.

* Logic as Data, Not Hard-Coded

  * Rules like “show this question only if they answered YES to having PTSD” are stored in the database as conditions referencing previous answers.

  * The front end reads these rules and decides which question to display next.

  * This makes it easy to change rules later without rewriting code.

Flow:

1. Veteran identifies which conditions they have.

2. For each selected condition, the app dynamically runs through the shared “Condition Builder” template, tagged to that specific condition.

3. All answers are stored with veteran\_id, session\_id, condition\_id, and question\_id, giving us precise, structured data for each claimed condition.

---

**C. Structured Answer Storage for Later Use**

Every answer will be stored in a way that serves future document generation and analysis:

* Core entities:

  * Veteran – identity and contact info.

  * IntakeSession – each complete (or in-progress) run of the intake.

  * Condition – each type of condition they can claim.

  * ConditionInstance – a specific veteran’s claim for a specific condition.

  * QuestionTemplate – definition of each question.

  * Answer – one record per question response (with timestamps and versioning).

This gives us:

* The ability to pull all answers for one condition for one veteran.

* The ability to pull all conditions that share certain patterns (for quality control, analytics, etc.).

* A clean, auditable data trail that can be exported, reviewed, or re-used as needed.

**D. Admin & Maintenance Tools**

To keep the system flexible and maintainable, we’ll also provide:

* An **admin interface** to:

  * Add new conditions.

  * Edit question wording.

  * Enable/disable questions.

  * Adjust branching rules.

* **Versioning** for question sets so changes over time are tracked and associated with specific intakes.

##  Proposed Tech Stack

**Front End**

* **React \+ TypeScript**

  * Modern, battle-tested UI framework.

  * Excellent for building a long, multi-step intake that feels fast and responsive.

* **Component library \+ styling**

  * Tailwind CSS or similar utility framework for consistent, accessible layout.

  * Component system for repeated patterns (question cards, progress indicators, condition blocks).

* **Deployment**

  * Hosted on a modern platform (e.g., Vercel/Railway) for reliability, SSL, and global performance.

**Backend & Data**

* **PostgreSQL (via Supabase or similar managed service)**

  * Relational database to store:

    * Veteran profile

    * Service history

    * Conditions

    * All question templates

    * Every individual answer

  * Strong consistency and easy reporting/analytics.

* **Supabase API & Auth (or equivalent)**

  * Secure user authentication (email login or magic link).

  * Row-level security so each veteran only sees their own data.

  * Built-in APIs for reading/writing intake data from the front end.

