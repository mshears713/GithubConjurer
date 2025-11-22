# 🌳 PRD — Orchard of Branches Desktop Learning App  
*A cozy, beginner-friendly Git learning environment powered by your existing Markdown content*

---

## 0. Project Context & Intent

This project is a **single-user desktop application** that teaches Git and GitHub Desktop through a **cozy orchard metaphor** inspired by games like Stardew Valley, but with a strong focus on *learning*, not gaming.

You already have a structured set of **Markdown files** explaining Git and GitHub Desktop. Those files form the **canonical curriculum**. The app must:

- Use those Markdown files **during development** as reference material.
- Transform their content into **quests, NPC guidance, and orchard-tending tasks**.
- Present Git concepts in beginner-friendly language, matching your current level (early Git learner, mini-course level).
- Emphasize **solo best practices** and workflows, not collaboration-heavy workflows.

The application should be designed such that most of the actual coding is done by **autonomous coding agents (e.g., Claude Code, Codex)**, following a **spec-driven, waterfall-style** plan. You will mainly provide high-level instructions; the agent executes many steps at a time.

---

## 1. Target User & Constraints

### 1.1 Target User

- A **solo developer** (you) working on personal projects.
- Comfortable with basic programming concepts, but a **beginner with Git/GitHub Desktop**.
- Prefers intuitive metaphors and visuals over raw command-line explanations.
- Frequently uses **vibe coding / agent-driven coding**, not hand-writing every line.

### 1.2 Usage Context

- The app runs as a **desktop application**.
- Primary platform: **Windows**.  
- Internet connectivity is not guaranteed; the app should work **offline** with local repos.
- The app is **not** expected to be used in collaboration with others.

### 1.3 Constraints & Non-Goals

- **No multi-user collaboration UI** (no multi-account, shared sessions, etc.).
- **No complex game systems** (no combat, inventories, crafting, etc.).
- **No advanced Git workflows-only** (like complicated rebase strategies) beyond what’s reasonably needed for a beginner-focused app.
- The app must remain **understandable** and **maintainable**, with clear structure and documentation.

---

## 2. Canonical Reference Content (Existing Markdown Files)

These files already exist in your repo and contain the core lessons. The agent must:

- Read these files during the coding process.
- Extract key ideas, definitions, and workflows.
- Rewrite them into orchard quests, NPC advice, and cultivation tasks.
- Ensure **every** conceptual area in these files is represented in the app.

The app should **not** dynamically read these Markdown files at runtime. Instead, the agent should generate an internal representation (e.g., JSON or TypeScript modules) during development.

### 2.1 Getting Started

- `01-getting-started/what-is-github-desktop.md`  
- `01-getting-started/installation.md`  
- `01-getting-started/initial-setup.md`

### 2.2 Basic Concepts

- `02-basic-concepts/commits.md`  
- `02-basic-concepts/git-vs-github.md`  
- `02-basic-concepts/interface-tour.md`  
- `02-basic-concepts/repositories.md`

### 2.3 Creating Repos

- `03-creating-repos/cloning-repos.md`  
- `03-creating-repos/creating-new-repo.md`  
- `03-creating-repos/opening-repos.md`

### 2.4 Making Changes

- `04-making-changes/making-your-first-commit.md`  
- `04-making-changes/pushing-and-pulling.md`  
- `04-making-changes/staging-changes.md`  
- `04-making-changes/viewing-history.md`  
- `04-making-changes/writing-commit-messages.md`

### 2.5 Branches

- `05-branches/creating-branches.md`  
- `05-branches/deleting-branches.md`  
- `05-branches/merging-branches.md`  
- `05-branches/switching-branches.md`  
- `05-branches/what-are-branches.md`

### 2.6 Collaboration (Adapted to Solo Context)

Even though these files are collaboration-oriented, they must be adapted to a solo gardener metaphor:

- `06-collaboration/code-review.md`  
- `06-collaboration/fetching-changes.md`  
- `06-collaboration/handling-conflicts.md`  
- `06-collaboration/pull-requests.md`

The agent must **strip explicit “team” framing** and recast these as:

- Interactions with remote sources (like “neighboring orchards”).
- Self-review and best practices for solo work that still uses collaboration tools (e.g., PRs as your own checkpoints).

### 2.7 Advanced Features

- `07-advanced-features/stashing.md`  
- `07-advanced-features/tags.md`  
- `07-advanced-features/undoing-changes.md`

### 2.8 Best Practices

- `08-best-practices/common-issues.md`  
- `08-best-practices/git-workflow.md`  
- `08-best-practices/security-tips.md`

### 2.9 Extras

- `quick-reference/cheatsheet.md`  
- `exercises/README.md`  
- `mikestarthere`  
- Root `README.md`

The agent must treat these files as:

- Starting land markers (`mikestarthere`, `README.md`).
- Practice plots (`exercises`).
- Field guide references (`cheatsheet`).

---

## 3. Theming, Metaphors & Lesson Style

### 3.1 Orchard Metaphor

Core mappings:

- **Repository** → A tree or cluster of trees.
- **Commit** → A new growth ring or visible growth segment.
- **Branch (Git)** → A branch of the tree.
- **Merge** → Grafting two branches together.
- **Stash** → Buds moved to a nursery bed.
- **Tag** → Ribbon or plaque on the trunk/branch.
- **Undo/reset** → Pruning or cutting back misgrowth.
- **Fetch** → Irrigation channels or wind bringing in seeds/pollen.
- **Pull** → Bringing in water plus integrating it into the soil/tree.
- **Conflict** → Tangled vines or overlapping branches that must be untangled.

### 3.2 Lessons as Quests & NPC Guidance

Each Markdown lesson must be converted into one or more of:

- **Quests**:  
  “Help the Orchard Keeper prune this branch while learning about `git reset`.”

- **NPC Advice Scenes**:  
  The NPC explains a concept, referencing orchard visuals.

- **Cultivation Tasks**:  
  The user performs a small interactive action (e.g., water a sapling) that mirrors a Git action.

Quests should:

- Have a clear **goal** (learn `commits`, practice staging, etc.).
- Indicate **what Git concept** is being taught.
- Provide **step-by-step guidance** referencing the original Markdown material.
- Provide a **visual or state change** in the orchard as feedback.

### 3.3 Tone & Depth

- Tone: calm, friendly, and non-intimidating.
- Depth: beginner-friendly but not patronizing.
- Redundancy is good if it reinforces core concepts.

---

## 4. System Overview

### 4.1 Application Type

- Desktop app (preferred stack: Electron + React + TypeScript, but any equivalent is acceptable that meets requirements).
- Single local user, no login system required.
- Uses local Git installations to operate on real repos.

### 4.2 Major Subsystems

1. **Content Engine**  
   - Holds transformed lesson data created from Markdown files.
   - Provides quest definitions and NPC text.

2. **Orchard Map & Renderer**  
   - Renders a single continuous grove.
   - Shows trees, paths, NPCs, and special locations.

3. **Lesson Viewer & Quest UI**  
   - Shows story text, instructions, and conceptual explanations.
   - Tracks quest completion.

4. **NPC System**  
   - Handles characters, dialogue trees, hints, and personality.

5. **Git Service**  
   - Abstracts calls to Git (status, log, branches, commits, tags, etc.).
   - Provides JSON-like data to the UI.

6. **Real Repo Visualization**  
   - Maps actual Git history to tree structures in the orchard.

7. **State Management & Persistence**  
   - Stores user progress, unlocked areas, and orchard configuration.

8. **Scenario/Practice Engine**  
   - Runs guided “mini simulations” that correspond to Git workflows.

---

## 5. Functional Requirements (High-Level)

1. The app must allow user to **select or define a learning path**, but default path should be linear across the grove.
2. The app must display **quests** derived from Markdown, including title, description, steps, and reward.
3. The app must track which lessons have been **viewed and completed**.
4. The app must show a **single grove map**, with zones unlocking as lessons are completed.
5. The app must support safe, guided operations on **real local Git repositories**.
6. The app must not perform **destructive Git operations without clear confirmation**.
7. The app must provide a **quick reference corner** (cheatsheet).
8. The app must persist progress locally (e.g. JSON file, SQLite, etc.).

---

## 6. Non-Functional Requirements

- **Performance:** App should be responsive on a typical laptop.
- **Stability:** No crashes from malformed Git repositories or odd states.
- **Usability:** Clear navigation, simple controls, understandable icons.
- **Extensibility:** Future lessons, trees, and quests can be added via new content JSON or module files.
- **Maintainability:** Clean directory structure, modular code, comments, and basic tests.
- **Offline-first:** No requirement for network beyond optional updates or cloning.

---

## 7. Development Approach

The project should follow a **waterfall method**:

- 5 sequential phases.
- Each phase must be considered “done” before moving on.
- Phases are coarse; each includes many fine-grained steps.
- The coding agent should execute steps in order, generating and refining code as it goes.

---

## 8. Phases & Detailed Steps (Waterfall)

Below, each phase includes **10+ tasks**, each with explanation so an autonomous agent knows exactly what to do.

---

### PHASE 1 — Foundations, Environment & Content Ingestion

**Goal:** Create the base app structure and import Markdown lessons as development-time references.

1. **Initialize Desktop Project**  
   Set up a new desktop project with Electron (or equivalent), React, and TypeScript. Configure build scripts for `dev`, `build`, and `package`.

2. **Create Core Directory Structure**  
   - `src/ui` for UI components.  
   - `src/orchard` for map + visuals.  
   - `src/content` for transformed lessons.  
   - `src/git` for Git service.  
   - `src/npc` for NPC logic.  
   - `src/state` for global app state.

3. **Set Up Global State Management**  
   Introduce a state management solution (e.g., Redux or Zustand) and define initial slices: `lessons`, `progress`, `orchard`, `npc`.

4. **Implement Basic Shell UI**  
   Create an initial window layout with:  
   - Top bar (title, maybe minimal controls).  
   - Left sidebar (progress overview).  
   - Main content view.  
   - Simple status footer.

5. **Implement File-Based Markdown Import Script**  
   Write a Node script that reads all Markdown files listed in Section 2 from disk at development time. The script should parse them into structured data and output JSON or TypeScript modules (e.g., `content/generatedLessons.ts`).

6. **Define Lesson Data Model**  
   Create an interface/model for lessons: `id`, `title`, `sourceFile`, `summary`, `keyConcepts`, `rawMarkdown`, `zone`, etc.

7. **Run Markdown Parsing for All Files**  
   Execute the import script to transform all Markdown files into the internal lesson data format, verifying that each file is accounted for.

8. **Assign Lessons to Zones**  
   Based on existing directories (`01-getting-started`, `02-basic-concepts`, etc.), map each lesson to a “zone” in the orchard (inner clearing, trunk, canopy, edge, conservatory, perimeter).

9. **Create a Development-Only Lesson Browser**  
   Implement a simple screen that lists all parsed lessons with their titles, zones, and summaries for verification.

10. **Add Basic Logging & Error Handling**  
   Ensure that if any Markdown file fails to parse, clear logging indicates which file and why.

11. **Document the Ingestion Process**  
   Write developer documentation explaining how the Markdown is read, transformed, and where the generated content is placed.

12. **Confirm Phase Completion**  
   Ensure that all Markdown files listed in Section 2 are visible in the development lesson browser and mapped to appropriate zones before moving to Phase 2.

---

### PHASE 2 — Lesson Engine & Quest Transformation

**Goal:** Turn raw Markdown-based lessons into orchard-themed quests and NPC guidance.

1. **Define Quest Data Model**  
   Create a model describing quests: `id`, `title`, `description`, `gitConcept`, `npcInvolved`, `questType` (advice/quest/task), `preconditions`, `completionCriteria`, `rewards`.

2. **Define NPC Roles & Personalities**  
   Specify main NPCs: Orchard Keeper, Botanist, Forager. Document their tone, the kind of topics they handle, and which lessons they’re associated with.

3. **Map Lessons to Quest Types**  
   For each Markdown lesson, choose whether it becomes:  
   - primarily NPC advice,  
   - a structured quest,  
   - or a cultivation task.  
   Record this mapping in a configuration file.

4. **Build Content Transformation Helpers**  
   Implement code that, given a lesson’s summary and key concepts, generates a primitive quest description and NPC script stubs in orchard language.

5. **Hand-Craft a Few Example Quests**  
   For 3–5 lessons (e.g., `what-is-github-desktop`, `commits`, `creating-new-repo`), write fully fleshed out quests and NPC dialogues by hand to serve as stylistic templates.

6. **Generate Initial Quest Set**  
   Use the helpers to generate quests for the remaining lessons, then revise as needed to ensure clarity and consistency.

7. **Create Lesson & Quest Viewer UI**  
   Design a panel that:  
   - shows quest name, NPC portrait (if any), description, and steps.  
   - includes a “Begin Quest” / “Continue Quest” button.  
   - shows completion state.

8. **Implement Quest Progress Tracking**  
   Add fields in global state to track which quests are `locked`, `available`, `in-progress`, and `completed`.

9. **Link Quest Completion to Lesson Understanding**  
   When a quest is completed, mark the corresponding lesson as completed as well, and vice versa where appropriate.

10. **Ensure Every Lesson Has at Least One Quest**  
   Confirm that each Markdown lesson has at least one corresponding quest object and that no file is unrepresented.

11. **Add Simple Journal / Log View**  
   Provide a “journal” screen where the user can see a summary of completed quests/lessons and what they learned.

12. **Review for Beginner-Friendliness**  
   Re-read several representative quests and ensure language is accessible to a beginner, free of jargon unless explained.

---

### PHASE 3 — Orchard Map, Visual Progression & Light Gamification

**Goal:** Build the visual orchard, movement, and growth effects that tie directly to quest/lesson progress.

1. **Design Orchard Map Layout Data**  
   Create a data representation of the single expanding grove: inner clearing, trunk region, canopy, orchard edge, conservatory, perimeter trail.

2. **Implement Map Renderer**  
   Use canvas, SVG, or a grid of components to draw the orchard: paths, trees, grass, landmarks.

3. **Implement Movement Mechanism**  
   Decide on interaction (click-to-move, directional buttons, or both). Implement movement constraints (e.g., cannot pass locked gates).

4. **Define Tree Growth States**  
   For each conceptual area, define tree sprites or states (e.g., seedling, young tree, mature tree, fruit-bearing tree), and link them to progress in related quests/lessons.

5. **Bind Quests to Map Locations**  
   For each quest, assign a map location or tree. Clicking that tree or zone should open the related quest/lesson.

6. **Implement Zone Unlock Conditions**  
   For example, basic concepts zone unlocks after getting-started quests; branches zone unlocks after core commit lessons, etc.

7. **Add Visual Feedback for Quest Completion**  
   When a quest is completed, animate tree growth, fruit appearing, or a small “sparkle” effect to reinforce progress.

8. **Implement Minimal Season System (Optional, Light)**  
   Implement a simple variable representing a “season” stage. Use it to tint colors and change minor visuals (no heavy simulation, just mood).

9. **Add NPC Sprites and Interaction Points**  
   Place NPC icons in the orchard. Clicking on or approaching them should open dialogue.

10. **Create a Simple HUD**  
   Show current area name, lesson completion percentage, and a tiny indicator of how many quests are available.

11. **Add a Quick Travel Mechanism**  
   Once zones are unlocked, allow jumping between major areas from a map menu to avoid tedious walking.

12. **Polish Map Scalability**  
   Confirm the map can handle additional zones or trees later without major rewrites.

---

### PHASE 4 — Git Service & Real Repository Visualization

**Goal:** Integrate with local Git to show real repos as trees and allow safe, guided operations.

1. **Implement Git Command Wrapper**  
   Create a module that calls Git (e.g., via child processes) to run `status`, `log`, `branch`, `diff`, `tag`, `stash`, etc., returning structured results.

2. **Define Repo Model**  
   Create a `Repo` model that includes name, path, default branch, and a processed commit graph.

3. **Add Repo Selection UI**  
   Implement a “Real Repos Grove” menu where the user can choose local directories containing Git repos.

4. **Build Commit Graph Parser**  
   Parse git log into a graph structure that can be mapped to tree trunk and branches.

5. **Render Real Repo Trees**  
   Visualize the repo as a tree: trunk for main branch, branches for feature branches, leaf icons for latest commits, etc.

6. **Implement Basic Operations UI**  
   Allow the user to:  
   - see uncommitted changes,  
   - stage/unstage,  
   - write a commit message,  
   - commit.

7. **Add Branch Management UI**  
   Allow creating, switching, and deleting branches via buttons that correspond to orchard metaphors (grow a limb, walk to a limb, prune a limb).

8. **Make “Undo” Flows Explicit and Safe**  
   Implement flows that guide user through resetting, discarding, or reverting changes while clearly explaining consequences in both Git and orchard terms.

9. **Use Orchard Feedback for Repo State**  
   If the repo has a lot of uncommitted changes, show clutter on the ground or overgrown branches. If everything is clean, show a calm, tidy tree.

10. **Link Lessons to Real Actions**  
   From a quest (e.g., “your first commit”), allow a button that jumps to a real repo view where the user performs that action live, then returns.

11. **Add Safeguards Against Destructive Actions**  
   Double confirmation for potentially destructive actions (e.g., reset) with clear explanations.

12. **Test with Sample Repos**  
   Validate behavior with tiny test repos: one simple linear history, one with branches, one with tags and stashes.

---

### PHASE 5 — NPC System, Scenario Engine, Polish & Packaging

**Goal:** Add narrative guidance, practice scenarios, quality-of-life features, and package the app for production.

1. **Implement NPC Dialogue Engine**  
   Create a system to define dialogue trees in JSON or TypeScript: triggers, lines, choices (if any), and related quests.

2. **Write Core Dialogue Scripts**  
   For each major concept group (getting started, basic concepts, branches, etc.), write NPC dialogue that introduces the area, clarifies key ideas, and nudges the user into quests.

3. **Develop Scenario Definitions**  
   Define mini-practice scenarios for common Git tasks (first commit, fixing a conflict, stashing work) as sequences of guided steps with expected actions.

4. **Create Scenario Runner UI**  
   Implement a panel that walks the user through a scenario: instructions, step-by-step progress, and completion feedback.

5. **Connect Scenarios to Quests**  
   For certain quests, completing an attached scenario becomes part of the quest completion criteria.

6. **Add Small Rewards & Achievements**  
   Implement simple achievements (e.g., “First Branch Created” → special blossom) that appear visually and in a small achievements list.

7. **Implement Settings Panel**  
   Controls for volume, text size, basic accessibility options, and maybe color themes for better readability.

8. **Add Save/Load for Progress**  
   Serialize quest completion, lesson state, map unlocks, and repo associations to disk. Ensure progress is automatically loaded on startup.

9. **Run UX & Content Review**  
   Review flows for clarity: can a beginner follow from “I barely know Git” to “I understand commits, branches, and basic workflows” without confusion?

10. **Add Developer Documentation**  
   Write docs for future you (or future agents) describing project structure, how to add new lessons/quests, how to adjust NPC dialogue, and how to update Git features.

11. **Package the App for Distribution**  
   Configure build scripts to package the app into an installer for Windows (and optionally Mac/Linux if stack supports it).

12. **Final QA & Sanity Checks**  
   Do a last pass: confirm that every Markdown lesson is represented as at least one quest or NPC advice path, that the orchard grows logically, and that nothing feels broken or half-implemented.

---

## 9. Agent Execution Guidelines

For the autonomous coding agent:

- Follow the **phases in order**. Do not skip ahead.
- Use the **Markdown files listed** as your core reference when generating lesson/quest content.
- Do **not** rely on dynamic Markdown loading at runtime; instead, bake transformed content into the codebase as JSON or modules.
- Keep explanations and terminology **beginner-friendly**.
- Keep the orchard metaphor consistent and clear.
- Comment code where logic is non-obvious, especially in the Git service and visualization parts.
- At the end of each phase, update documentation and ensure the project builds and runs before proceeding.

---

## 10. Completion Criteria (Definition of Done)

The app is considered “done enough” for V1 when:

1. All Markdown lessons are represented as quests, NPC dialogues, or tasks.  
2. The orchard map is navigable, with zones unlocking in a coherent learning sequence.  
3. The user can load a real local repo and see it visualized as a tree.  
4. The user can safely perform basic Git actions (status, stage, commit, branch, simple undo) via the UI.  
5. The app stores and restores progress across runs.  
6. The UX is understandable and usable by a Git beginner.  
7. The codebase is modular and documented enough for future extension.

---
