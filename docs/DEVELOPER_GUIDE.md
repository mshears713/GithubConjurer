# Developer Guide - Orchard of Branches

**Version:** 1.0.0
**Last Updated:** 2025-11-22

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Project Structure](#project-structure)
3. [Tech Stack](#tech-stack)
4. [State Management](#state-management)
5. [Component Architecture](#component-architecture)
6. [Adding New Content](#adding-new-content)
7. [Extending the Application](#extending-the-application)
8. [Testing](#testing)
9. [Build & Deployment](#build--deployment)
10. [Troubleshooting](#troubleshooting)

---

## Architecture Overview

Orchard of Branches is an Electron-based desktop application built with React and TypeScript. It follows a component-based architecture with centralized state management using Zustand.

### High-Level Architecture

```
┌─────────────────────────────────────────────────┐
│              Electron Main Process              │
│          (Window management, file I/O)          │
└─────────────────┬───────────────────────────────┘
                  │
┌─────────────────▼───────────────────────────────┐
│           Renderer Process (React)              │
│  ┌───────────────────────────────────────────┐  │
│  │            Shell Component                │  │
│  │  (TopBar, Sidebar, Footer, Overlays)     │  │
│  └───────────────┬───────────────────────────┘  │
│                  │                               │
│  ┌───────────────▼───────────────────────────┐  │
│  │         View Components                   │  │
│  │  (OrchardView, QuestBrowser,             │  │
│  │   ScenarioBrowser, RepoGrove)            │  │
│  └───────────────┬───────────────────────────┘  │
│                  │                               │
│  ┌───────────────▼───────────────────────────┐  │
│  │         State Stores (Zustand)           │  │
│  │  (Progress, Orchard, NPC, Scenarios,     │  │
│  │   Achievements, Settings)                │  │
│  └───────────────┬───────────────────────────┘  │
│                  │                               │
│  ┌───────────────▼───────────────────────────┐  │
│  │            Services                       │  │
│  │  (Git Service, Progress Manager)         │  │
│  └───────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
```

### Data Flow

1. **User Interaction** → Component event handler
2. **Component** → Calls Zustand store action
3. **Store Action** → Updates state, may call service
4. **Service** (if needed) → Performs Git operation or file I/O
5. **Store** → Triggers React re-render via subscription
6. **Component** → Re-renders with new state

---

## Project Structure

```
/
├── src/
│   ├── main.tsx                  # React entry point
│   ├── App.tsx                   # Main app component
│   │
│   ├── ui/                       # React components
│   │   ├── Shell.tsx            # App shell (layout)
│   │   ├── TopBar.tsx           # Top navigation bar
│   │   ├── Sidebar.tsx          # Side navigation
│   │   ├── Footer.tsx           # Footer component
│   │   ├── OrchardView.tsx      # Orchard map view
│   │   ├── QuestBrowser.tsx     # Quest list/browser
│   │   ├── QuestViewer.tsx      # Individual quest view
│   │   ├── ScenarioBrowser.tsx  # Scenario selection
│   │   ├── ScenarioRunner.tsx   # Step-by-step scenario UI
│   │   ├── RepoGrove.tsx        # Repository visualization
│   │   ├── DialoguePanel.tsx    # NPC dialogue overlay
│   │   ├── AchievementNotification.tsx  # Toast notifications
│   │   ├── SettingsPanel.tsx    # Settings modal
│   │   └── *.css                # Component styles
│   │
│   ├── state/                    # Zustand stores
│   │   ├── useProgressStore.ts  # Quest/lesson progress
│   │   ├── useLessonStore.ts    # Lesson data
│   │   ├── useOrchardStore.ts   # Orchard map state
│   │   ├── useNPCStore.ts       # NPC dialogue state
│   │   ├── useScenarioStore.ts  # Scenario progress
│   │   ├── useAchievementStore.ts  # Achievement tracking
│   │   ├── useSettingsStore.ts  # User preferences
│   │   └── useRepoStore.ts      # Repository state
│   │
│   ├── orchard/                  # Orchard map logic
│   │   ├── mapData.ts           # Zone definitions
│   │   ├── mapRenderer.ts       # Canvas rendering
│   │   └── types.ts             # Orchard type definitions
│   │
│   ├── content/                  # Lesson/quest content
│   │   ├── types.ts             # Content type definitions
│   │   ├── quests.ts            # Quest definitions
│   │   └── lessons.ts           # Lesson data
│   │
│   ├── npc/                      # NPC system
│   │   ├── dialogueEngine.ts    # Dialogue tree navigation
│   │   ├── dialogueBuilder.ts   # Fluent API for dialogues
│   │   ├── dialogues.ts         # All dialogue definitions
│   │   └── index.ts             # Module exports
│   │
│   ├── scenarios/                # Practice scenarios
│   │   ├── types.ts             # Scenario type definitions
│   │   ├── definitions.ts       # All scenario definitions
│   │   └── index.ts             # Module exports
│   │
│   ├── achievements/             # Achievement system
│   │   ├── types.ts             # Achievement types
│   │   ├── definitions.ts       # All achievements
│   │   └── index.ts             # Module exports
│   │
│   ├── git/                      # Git integration
│   │   ├── gitService.ts        # Git command wrapper
│   │   ├── repoAnalyzer.ts      # Repo structure analysis
│   │   └── types.ts             # Git type definitions
│   │
│   ├── services/                 # Utility services
│   │   └── progressManager.ts   # Export/import progress
│   │
│   └── electron/                 # Electron main process
│       ├── main.ts              # Main process entry
│       └── preload.ts           # Preload script
│
├── content-source/               # Original Markdown curriculum
│   ├── 01-getting-started/
│   ├── 02-basic-concepts/
│   ├── 03-creating-repos/
│   ├── 04-making-changes/
│   ├── 05-branches/
│   ├── 06-collaboration/
│   ├── 07-advanced-features/
│   └── 08-best-practices/
│
├── assets/                       # Static assets
│   └── (images, icons, etc.)
│
├── docs/                         # Documentation
│   ├── CLAUDE.md                # AI development guide
│   ├── UX_CONTENT_REVIEW.md     # UX review
│   └── DEVELOPER_GUIDE.md       # This file
│
├── dist/                         # Build output
├── vite.config.ts               # Vite configuration
├── tsconfig.json                # TypeScript config
├── package.json                 # Dependencies
└── README.md                    # Project README (PRD)
```

---

## Tech Stack

### Core Technologies
- **Electron**: Desktop app framework
- **React 18**: UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Build tool and dev server
- **Zustand**: Lightweight state management
- **Canvas API**: Orchard map rendering

### Development Tools
- **ESLint**: Code linting
- **TypeScript Compiler**: Type checking
- **npm**: Package management

### Key Dependencies
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "zustand": "^4.5.0",
  "electron": "^33.2.1",
  "vite": "^5.4.21",
  "typescript": "^5.6.3"
}
```

---

## State Management

### Zustand Stores

All state is managed with Zustand stores. Most stores use the `persist` middleware to save state to localStorage.

#### Store Patterns

**Basic Store Structure:**
```typescript
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface MyStore {
  data: any;
  actions: () => void;
}

export const useMyStore = create<MyStore>()(
  persist(
    (set, get) => ({
      data: {},
      actions: () => set({ /* update */ }),
    }),
    {
      name: 'storage-key',
    }
  )
);
```

#### Available Stores

1. **useProgressStore** (`state/useProgressStore.ts`)
   - Tracks quest and lesson completion
   - Methods: `startQuest`, `completeQuest`, `markLessonComplete`
   - Persists to: `orchard-progress`

2. **useLessonStore** (`state/useLessonStore.ts`)
   - Holds all lesson content data
   - Methods: `setLessons`, `getLessonById`, `getLessonsByZone`
   - Not persisted (static content)

3. **useOrchardStore** (`state/useOrchardStore.ts`)
   - Orchard map state (zones, camera position)
   - Methods: `unlockZone`, `setCameraPosition`
   - Persists to: `orchard-map-state`

4. **useNPCStore** (`state/useNPCStore.ts`)
   - NPC dialogue state and history
   - Methods: `startDialogueTree`, `advanceDialogue`, `endDialogue`
   - Persists to: `orchard-npc-state`

5. **useScenarioStore** (`state/useScenarioStore.ts`)
   - Scenario progress and completion
   - Methods: `startScenario`, `completeStep`, `completeScenario`
   - Persists to: `scenario-storage`

6. **useAchievementStore** (`state/useAchievementStore.ts`)
   - Achievement unlocks and notifications
   - Methods: `unlockAchievement`, `markAchievementSeen`
   - Persists to: `achievement-storage`

7. **useSettingsStore** (`state/useSettingsStore.ts`)
   - User preferences and settings
   - Methods: `updateSettings`, `resetSettings`
   - Persists to: `orchard-settings`

8. **useRepoStore** (`state/useRepoStore.ts`)
   - Repository data and Git state
   - Methods: `addRepo`, `refreshRepo`, `setActiveRepo`
   - Persists to: `orchard-repos`

---

## Component Architecture

### Component Patterns

#### 1. Shell Pattern
`Shell.tsx` provides the application layout:
```tsx
const Shell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="shell">
      <TopBar />
      <div className="shell-body">
        <Sidebar />
        <main className="shell-content">{children}</main>
      </div>
      <Footer />
      {/* Global overlays */}
      <DialoguePanel />
      <AchievementNotification />
      {settingsOpen && <SettingsPanel />}
    </div>
  );
};
```

#### 2. View Pattern
Views are swappable based on user selection:
```tsx
const App = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('map');

  return (
    <Shell>
      {viewMode === 'map' && <OrchardView />}
      {viewMode === 'quests' && <QuestBrowser />}
      {viewMode === 'scenarios' && <ScenarioBrowser />}
      {viewMode === 'repos' && <RepoGrove />}
    </Shell>
  );
};
```

#### 3. Modal/Overlay Pattern
Modals are rendered conditionally with overlays:
```tsx
{isOpen && (
  <div className="overlay" onClick={onClose}>
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      {/* Modal content */}
    </div>
  </div>
)}
```

### CSS Conventions
- Component-specific CSS in same directory
- BEM-like naming: `.component-name__element--modifier`
- CSS variables for theme colors (defined in `index.css`)
- z-index hierarchy:
  - Base content: 1
  - Sidebar/nav: 100
  - Dialogues/modals: 1000-1500
  - Notifications: 2000+

---

## Adding New Content

### Adding a New Quest

1. **Define the quest** in `src/content/quests.ts`:
```typescript
{
  id: 'quest-my-new-quest',
  title: 'Tending Your First Seedling',
  zone: 'Nursery',
  description: 'Learn how to nurture a new commit...',
  orchardMetaphor: 'Just like a seedling needs...',
  gitConcept: 'Creating and committing changes',
  tasks: [
    { id: 1, description: 'Create a new file', completed: false },
    { id: 2, description: 'Stage the changes', completed: false },
  ],
  reward: { type: 'achievement', id: 'first-commit' },
}
```

2. **Create related dialogue** in `src/npc/dialogues.ts`:
```typescript
const DIALOGUE_MY_QUEST = createLinearDialogue(
  'dialogue-my-quest',
  'orchard-keeper',
  [
    'Welcome, gardener! Ready to plant your first seedling?',
    'In our orchard, every commit is like adding a growth ring...',
  ],
  'quest-my-new-quest'
);
```

3. **Register the dialogue** in `registerAllDialogues()`.

### Adding a New Scenario

1. **Define the scenario** in `src/scenarios/definitions.ts`:
```typescript
{
  id: 'scenario-my-practice',
  title: 'Pruning Practice',
  description: 'Practice undoing changes safely',
  difficulty: 'intermediate',
  estimatedTime: '10 minutes',
  relatedQuests: ['quest-undo-changes'],
  steps: [
    {
      id: 'step1',
      title: 'Make a change',
      instruction: 'Edit a file in your repository',
      orchardMetaphor: 'Add some leaves to your branch',
      hint: 'Open any file and make a small edit',
    },
    // More steps...
  ],
  reward: {
    experience: 50,
    achievement: 'safe-undo',
  },
}
```

2. **The scenario will automatically appear** in ScenarioBrowser and related quests.

### Adding a New Achievement

1. **Define the achievement** in `src/achievements/definitions.ts`:
```typescript
{
  id: 'my-achievement',
  title: 'Master Gardener',
  description: 'Completed all beginner quests',
  category: AchievementCategory.Mastery,
  icon: '🏆',
  visualEffect: 'Your orchard blooms with golden flowers',
  unlockCondition: {
    type: 'quest-count',
    count: 10,
  },
  rarity: 'epic',
}
```

2. **Trigger the achievement** in your code:
```typescript
import { useAchievementStore } from '../state/useAchievementStore';

const { unlockAchievement } = useAchievementStore();

// When condition is met:
if (conditionMet) {
  unlockAchievement('my-achievement');
}
```

### Adding a New NPC Dialogue

1. **Use DialogueTreeBuilder** for complex dialogues:
```typescript
const DIALOGUE_COMPLEX = new DialogueTreeBuilder('dialogue-id', 'npc-id')
  .node('start', 'Hello! How can I help you?', {
    choices: [
      { text: 'Tell me about commits', nextNodeId: 'commits' },
      { text: 'Tell me about branches', nextNodeId: 'branches' },
    ],
  })
  .node('commits', 'Commits are like growth rings...', {
    nextNodeId: 'end',
  })
  .node('branches', 'Branches let your tree grow...', {
    nextNodeId: 'end',
  })
  .node('end', 'Any other questions?')
  .build();
```

2. **Or use helper functions** for linear dialogues:
```typescript
const DIALOGUE_SIMPLE = createLinearDialogue(
  'dialogue-id',
  'npc-id',
  [
    'First line of dialogue',
    'Second line...',
    'Final line.',
  ],
  'optional-quest-to-trigger'
);
```

---

## Extending the Application

### Extension Points

#### 1. New Content Modules
- Create new content modules in `src/content/`
- Follow existing patterns for types and definitions
- Import and integrate in views

#### 2. Custom Settings
- Add new settings to `AppSettings` interface in `useSettingsStore.ts`
- Add UI controls in `SettingsPanel.tsx`
- Access settings in components via `useSettingsStore()`

#### 3. New Services
- Create services in `src/services/`
- Export functions for components to use
- Follow single-responsibility principle

#### 4. Custom Git Operations
- Extend `gitService.ts` with new operations
- Ensure error handling and user-friendly messages
- Test with various repo states

#### 5. Additional Views
- Add new view types to `ViewMode` in `App.tsx`
- Create view component in `src/ui/`
- Add navigation tab in view switcher

### Best Practices for Extensions

1. **Maintain Orchard Metaphor**: Always map new features to the metaphor
2. **Type Safety**: Use TypeScript interfaces for all data structures
3. **State Management**: Use Zustand stores for persistent state
4. **Component Reusability**: Extract common patterns into reusable components
5. **Documentation**: Update this guide when adding major features

---

## Testing

### Current Testing Strategy

**Manual Testing Focus:**
- Quest completion flows
- Scenario step-through
- Achievement unlocks
- Settings persistence
- Git operations with real repos

### Testing Checklist

#### Quest System
- [ ] All quests are accessible
- [ ] Quest progress persists
- [ ] Quest completion triggers achievements
- [ ] Related scenarios appear in quest viewer

#### Scenario System
- [ ] All scenarios are completable
- [ ] Step progression works correctly
- [ ] Skip functionality works
- [ ] Completion rewards are granted
- [ ] Progress persists across sessions

#### Achievement System
- [ ] Achievements unlock correctly
- [ ] Notifications appear
- [ ] Notifications don't stack excessively
- [ ] Achievement history is preserved

#### Git Integration
- [ ] Repo visualization renders correctly
- [ ] Branch operations work
- [ ] Commit operations work
- [ ] Error handling for invalid repos

#### Settings & Persistence
- [ ] All settings save correctly
- [ ] Export progress works
- [ ] Import progress works
- [ ] Reset progress works (with confirmation)

### Future Testing Improvements
- Add unit tests for stores
- Add integration tests for Git service
- Add E2E tests for critical paths
- Automated visual regression testing

---

## Build & Deployment

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type checking
npm run type-check
```

### Production Build

```bash
# Full build (TypeScript + Vite + Electron)
npm run build

# Outputs to dist/
```

### Packaging

```bash
# Package for Windows
npm run package

# Outputs to out/
```

### Build Configuration

**Vite (`vite.config.ts`):**
- Build target: `esnext`
- Base URL: `./`
- Outputs to: `dist/`
- Path aliases: `@content`, `@orchard`, `@scenarios`, `@achievements`

**TypeScript (`tsconfig.json`):**
- Strict mode enabled
- Module: ES2020
- Target: ES2020
- JSX: react-jsx

**Electron (`package.json`):**
- Main: `dist-electron/main.js`
- Entry: `index.html`

---

## Troubleshooting

### Common Issues

#### 1. TypeScript Errors After Adding Content
**Problem:** TypeScript can't find new modules
**Solution:**
- Verify path alias in `vite.config.ts` and `tsconfig.json`
- Restart TypeScript server
- Run `npm run type-check`

#### 2. State Not Persisting
**Problem:** Store state doesn't persist to localStorage
**Solution:**
- Check `persist` middleware is configured
- Verify `name` property is unique
- Check browser console for localStorage errors
- Ensure custom storage serialization handles complex types

#### 3. Dialogue Not Appearing
**Problem:** NPC dialogue doesn't trigger
**Solution:**
- Verify dialogue is registered in `registerAllDialogues()`
- Check that `dialogueEngine.getTree(id)` returns the tree
- Ensure `startDialogueTree()` is called with correct ID

#### 4. Build Fails
**Problem:** `npm run build` fails
**Solution:**
- Run `npm run type-check` to isolate TypeScript errors
- Check for missing imports
- Verify all path aliases are correctly configured
- Clear `node_modules` and reinstall: `npm clean-install`

#### 5. Git Operations Fail
**Problem:** Git commands don't work
**Solution:**
- Verify Git is installed on system
- Check repo path is valid and accessible
- Look for Git errors in console
- Ensure Git operations handle common errors (detached HEAD, conflicts, etc.)

#### 6. Achievement Notification Stuck
**Problem:** Achievement notification won't dismiss
**Solution:**
- Check `recentlyUnlocked` array in achievement store
- Call `markAchievementSeen()` to remove from queue
- Verify notification component has timeout logic

### Debugging Tips

1. **Use React DevTools** to inspect component state
2. **Check Redux DevTools** if you add Redux middleware to Zustand
3. **Console log store state** with `console.log(useStore.getState())`
4. **Verify localStorage** in browser DevTools → Application → Local Storage
5. **Check Electron logs** in DevTools → Console (for main process logs)

---

## Code Style Guide

### TypeScript Conventions

```typescript
// Use interfaces for data models
interface QuestData {
  id: string;
  title: string;
}

// Use enums for fixed sets
enum QuestStatus {
  Locked = 'locked',
  Available = 'available',
}

// Explicit return types
function getQuest(id: string): QuestData | undefined {
  // ...
}

// Use const assertions for literal types
const DIFFICULTY = ['easy', 'medium', 'hard'] as const;
```

### React Conventions

```typescript
// Functional components with FC type
const MyComponent: React.FC<Props> = ({ prop1, prop2 }) => {
  // Component logic
};

// Custom hooks for complex logic
function useMyFeature() {
  const [state, setState] = useState();
  // Hook logic
  return { state, actions };
}

// Props interfaces inline or at top of file
interface MyComponentProps {
  title: string;
  onAction: () => void;
}
```

### Naming Conventions

- **Components:** PascalCase (`QuestBrowser.tsx`)
- **Files:** PascalCase for components, camelCase for utilities
- **Functions:** camelCase (`getQuestById`)
- **Constants:** UPPER_SNAKE_CASE (`DEFAULT_SETTINGS`)
- **Interfaces:** PascalCase (`QuestData`)
- **CSS Classes:** kebab-case (`quest-browser`)

---

## Performance Considerations

### Optimization Strategies

1. **Lazy Load Heavy Components**
   - Use React.lazy() for large views
   - Implement code splitting where appropriate

2. **Memoization**
   - Use `useMemo` for expensive calculations
   - Use `React.memo` for components that re-render frequently

3. **Canvas Rendering**
   - Implement dirty region tracking for orchard map
   - Only re-render changed areas
   - Use requestAnimationFrame for smooth animations

4. **State Updates**
   - Batch related state updates
   - Use Zustand's partial updates
   - Avoid unnecessary re-renders

5. **localStorage**
   - Throttle/debounce frequent writes
   - Serialize efficiently
   - Consider size limits (~5-10MB)

---

## Security Considerations

### Git Operations
- **Never execute arbitrary user input** as shell commands
- **Validate all repo paths** before operations
- **Limit Git operations** to safe, read-only operations for untrusted repos
- **Sanitize file paths** to prevent directory traversal

### User Data
- **All data stays local** - no network transmission
- **Progress export is user-initiated** only
- **Validate imported progress** to prevent injection attacks

---

## Future Development Roadmap

### V1.1 Planned Features
- Onboarding flow for first-time users
- Field Guide reference document
- Resume scenario functionality
- Keyboard shortcuts

### V1.2 Potential Features
- Search functionality
- Progress statistics dashboard
- Sound effects integration
- More granular achievements

### V2.0 Vision
- Custom themes
- Community-contributed content
- Advanced Git workflows (rebase, cherry-pick)
- Multi-orchard support

---

## Resources

### External Documentation
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [Electron Documentation](https://www.electronjs.org/docs)
- [Vite Documentation](https://vitejs.dev/)

### Internal Documents
- `README.md` - Project PRD and requirements
- `CLAUDE.md` - AI development guide and constraints
- `UX_CONTENT_REVIEW.md` - UX and content review findings
- `content-source/` - Original curriculum Markdown files

---

## Contributing Guidelines

### Before Making Changes
1. Review `CLAUDE.md` for project constraints
2. Understand the orchard metaphor mapping
3. Check that changes align with beginner-friendly goals
4. Ensure TypeScript strict mode compliance

### Making Changes
1. Create a descriptive branch name
2. Follow existing code patterns and conventions
3. Update relevant documentation
4. Test thoroughly (manual testing checklist)
5. Verify build succeeds

### Submitting Changes
1. Write clear commit messages
2. Reference related issues or PRDs
3. Update this guide if adding major features
4. Ensure no TypeScript errors

---

## Contact & Support

For questions about this codebase:
1. Review this Developer Guide
2. Check `CLAUDE.md` for project-specific constraints
3. Consult `README.md` for product requirements
4. Refer to UX review for design decisions

---

**Document Version:** 1.0.0
**Last Updated:** 2025-11-22
**Maintainer:** Development Team
