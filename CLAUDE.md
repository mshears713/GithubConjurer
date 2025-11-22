# CLAUDE.md - AI Development Guide for Orchard of Branches

## Project Overview

**Orchard of Branches** is a single-user desktop learning application that teaches Git and GitHub Desktop through a cozy orchard metaphor. Built with Electron + React + TypeScript, it transforms existing Markdown-based Git curriculum into interactive quests, NPC guidance, and orchard-tending tasks.

**Target User:** Solo developers who are Git beginners but comfortable with programming concepts, who prefer vibe coding and visual metaphors over raw command-line explanations.

**Platform:** Desktop app (primary: Windows), offline-first design.

## Tech Stack

- **Framework:** Electron
- **UI:** React + TypeScript
- **State Management:** Redux or Zustand (to be decided in Phase 1)
- **Git Integration:** Node child processes calling local Git installation
- **Rendering:** Canvas/SVG for orchard map visualization
- **Data Persistence:** JSON files or SQLite (to be decided in Phase 1)
- **Build:** Standard Electron build tools + packaging for Windows

## Core Metaphor Mapping (CRITICAL)

When coding features, always map Git concepts to orchard elements:

| Git Concept | Orchard Metaphor |
|-------------|------------------|
| Repository | A tree or cluster of trees |
| Commit | Growth ring or visible growth segment |
| Branch | Branch of the tree |
| Merge | Grafting two branches together |
| Stash | Buds moved to a nursery bed |
| Tag | Ribbon or plaque on trunk/branch |
| Undo/Reset | Pruning or cutting back misgrowth |
| Fetch | Irrigation channels bringing seeds/pollen |
| Pull | Bringing water and integrating into soil |
| Conflict | Tangled vines that must be untangled |

## Project Structure (Target)

```
/
├── src/
│   ├── ui/              # React components and UI logic
│   ├── orchard/         # Map rendering, visuals, tree states
│   ├── content/         # Transformed lessons (generated from MD)
│   ├── git/             # Git service wrapper and abstractions
│   ├── npc/             # NPC system, dialogue, personalities
│   ├── state/           # Global state management
│   └── scenarios/       # Practice scenario engine
├── content-source/      # Original Markdown curriculum files
│   ├── 01-getting-started/
│   ├── 02-basic-concepts/
│   ├── 03-creating-repos/
│   ├── 04-making-changes/
│   ├── 05-branches/
│   ├── 06-collaboration/
│   ├── 07-advanced-features/
│   └── 08-best-practices/
├── scripts/             # Build-time scripts (MD → JSON transformation)
├── assets/              # Images, sprites, sounds
└── docs/                # Developer documentation
```

## Development Phases (Waterfall Approach)

This project follows a **strict waterfall methodology**:

### Phase 1: Foundations, Environment & Content Ingestion
- Set up Electron + React + TypeScript
- Create directory structure
- Build Markdown → JSON transformation pipeline
- Verify all curriculum files are parsed

### Phase 2: Lesson Engine & Quest Transformation
- Define quest and NPC data models
- Transform Markdown lessons into orchard-themed quests
- Build quest viewer UI
- Track quest progress

### Phase 3: Orchard Map, Visual Progression
- Design and render the orchard map
- Implement movement and zone unlocking
- Add tree growth states tied to progress
- Visual feedback for quest completion

### Phase 4: Git Service & Real Repository Visualization
- Git command wrapper implementation
- Visualize real repos as trees
- Enable safe Git operations via UI
- Link lessons to real Git actions

### Phase 5: NPC System, Scenarios, Polish & Packaging
- Dialogue engine and NPC scripts
- Practice scenario system
- Settings, save/load, achievements
- Final packaging for Windows

**IMPORTANT:** Complete each phase fully before moving to the next. No skipping ahead.

## Key Architecture Decisions

### Content at Build-Time, Not Runtime
- **DO NOT** dynamically load Markdown files at runtime
- **DO** parse all Markdown during development and generate TypeScript/JSON modules
- Rationale: Simplicity, performance, offline-first

### Git Integration Strategy
- Use child processes to call local Git CLI
- Return structured JSON-like data to UI layer
- Never perform destructive operations without explicit user confirmation
- All Git operations must be explained in both Git and orchard terminology

### State Management Principles
- Track: lesson progress, quest states, orchard unlocks, repo associations
- Persist to disk automatically
- Load on startup
- Schema should be extensible for future content

### NPC System
Three main NPCs:
- **Orchard Keeper:** Main guide, handles foundational concepts
- **Botanist:** Deep dives into branching and growth
- **Forager:** Handles collaboration concepts (adapted to solo context)

## Coding Conventions

### TypeScript
- Strict mode enabled
- Explicit types for all function parameters and returns
- Interfaces over type aliases for data models
- Use enums for fixed sets (quest types, tree states, zones)

### React Components
- Functional components with hooks
- Custom hooks for complex state logic
- Props interfaces defined inline or in component file
- Component files: PascalCase matching component name

### Naming Patterns
- **Data Models:** `interface LessonData`, `interface QuestDefinition`
- **UI Components:** `OrchardMap.tsx`, `QuestViewer.tsx`, `NpcDialogue.tsx`
- **Services:** `gitService.ts`, `contentService.ts`
- **State:** `useLessonProgress()`, `useOrchardState()`

### File Organization
- One component per file
- Group related components in subdirectories
- Barrel exports (`index.ts`) for cleaner imports
- Keep utils/helpers close to where they're used

## Content Transformation Guidelines

When converting Markdown lessons to quests:

1. **Read the original MD file** - Understand the teaching intent
2. **Extract key concepts** - What's the core Git knowledge?
3. **Craft orchard narrative** - How does this map to the metaphor?
4. **Define quest structure:**
   - Title (orchard-themed)
   - Description (friendly, beginner tone)
   - Git concept being taught
   - Step-by-step guidance
   - Completion criteria
   - Visual reward (tree growth, fruit, etc.)

### Tone Requirements
- Calm, friendly, non-intimidating
- Beginner-friendly without being patronizing
- Explain Git jargon before using it
- Reinforce concepts through repetition

## Important Constraints

### What NOT to Do
- ❌ Multi-user collaboration features
- ❌ Complex game mechanics (combat, crafting, etc.)
- ❌ Advanced Git workflows beyond beginner scope
- ❌ Network-dependent features (offline-first!)
- ❌ Team/multi-account systems

### What TO Focus On
- ✅ Solo developer workflows
- ✅ Clear visual feedback for all actions
- ✅ Safe, guided Git operations
- ✅ Consistent orchard metaphor
- ✅ Beginner-appropriate depth
- ✅ Maintainable, well-documented code

## Git Workflow for This Repo

- Main branch: `main` (or as specified in git status)
- Feature branches: `claude/[feature-name]-[session-id]`
- Always develop on designated branch
- Commit with clear, descriptive messages
- Push to specified branch when complete

## Reference Documents

### Primary Reference
- `README.md` - Complete PRD with all phases, requirements, and specifications

### Content Source
All Markdown files in these directories are **canonical curriculum**:
- `01-getting-started/` - Installation, setup, what is GitHub Desktop
- `02-basic-concepts/` - Commits, repos, Git vs GitHub, interface tour
- `03-creating-repos/` - Creating, cloning, opening repos
- `04-making-changes/` - Commits, staging, push/pull, history, messages
- `05-branches/` - What are branches, creating, switching, merging, deleting
- `06-collaboration/` - PRs, fetching, conflicts, code review (adapt to solo)
- `07-advanced-features/` - Stashing, tags, undoing changes
- `08-best-practices/` - Workflows, common issues, security

### Content Mapping Rules
- **Every** Markdown file must become at least one quest/task/NPC dialogue
- Strip team/collaboration framing from 06-collaboration files
- Reframe collaboration concepts as "neighboring orchards" or "self-review"
- Exercises become "practice plots"
- Cheatsheet becomes "field guide reference"

## Quick Development Commands

```bash
# To be defined in Phase 1
npm run dev        # Start development server
npm run build      # Build for production
npm run package    # Package for Windows
npm run parse-md   # Run Markdown → JSON transformation
npm test           # Run tests
```

## Testing Strategy

- Unit tests for Git service functions
- Integration tests for quest completion flows
- Manual testing with sample repos:
  - Simple linear history
  - Repo with multiple branches
  - Repo with tags and stashes
- UX testing: Can a Git beginner follow the flow?

## Accessibility Considerations

- Text size controls in settings
- Color theme options for readability
- Keyboard navigation support
- Screen reader considerations (future)
- Clear visual feedback for all actions

## Performance Targets

- App startup: < 3 seconds
- Git operations: Responsive feedback within 500ms
- Map rendering: 60fps for smooth interactions
- Memory: < 200MB for typical usage

## Definition of Done (V1)

The app is complete when:

1. ✅ All Markdown lessons represented as quests/dialogues/tasks
2. ✅ Orchard map navigable with coherent zone unlocking
3. ✅ Real local repos visualized as trees
4. ✅ Safe basic Git operations available via UI
5. ✅ Progress persists across runs
6. ✅ UX is beginner-friendly and understandable
7. ✅ Codebase is modular and documented

## Common Gotchas

### When Working with Git Integration
- Always validate repo path before operations
- Handle Git errors gracefully (malformed repos, odd states)
- Test with edge cases: empty repos, detached HEAD, merge conflicts
- Never assume Git is in a clean state

### When Writing Quests
- Don't use Git jargon without explanation
- Always tie back to orchard metaphor
- Provide clear success criteria
- Test that beginners can understand instructions

### When Rendering the Orchard
- Performance matters - optimize rendering loops
- Handle window resizing gracefully
- Ensure map is scalable (more zones may be added)
- Visual feedback must be immediate and clear

## Extension Points (Future)

- Additional lesson content (new Markdown → new quests)
- More NPC personalities
- Advanced Git workflows (rebase, cherry-pick)
- Multiple orchard themes/skins
- Export/import progress
- Community-contributed lessons

## AI Coding Best Practices for This Project

When working on this codebase:

1. **Always read existing files before modifying**
2. **Maintain the orchard metaphor consistently**
3. **Keep beginner user in mind** - simplicity over cleverness
4. **Document complex logic** - future you will thank you
5. **Test Git operations thoroughly** - safety is paramount
6. **Follow the phase order** - waterfall is intentional
7. **Validate against PRD** - README.md is the source of truth
8. **Comment transformations** - explain Markdown → quest logic
9. **Keep UI modular** - components should be reusable
10. **Preserve extensibility** - design for future content additions

## Questions to Ask Before Coding

- Does this align with the current phase?
- Is the orchard metaphor maintained?
- Will a Git beginner understand this?
- Have I read the relevant Markdown source files?
- Is this change documented?
- Does this work offline?
- Is Git operation safety preserved?
- Can this be extended later?

---

**Last Updated:** 2025-11-22 (Initial creation)
**Current Phase:** Pre-Phase 1 (Project initialization)
**Next Steps:** Begin Phase 1 - Set up Electron + React + TypeScript foundation
