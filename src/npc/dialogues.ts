/**
 * Core Dialogue Scripts
 *
 * Dialogue trees for each major concept group, organized by NPC.
 */

import { dialogueEngine } from './dialogueEngine';
import { createLinearDialogue, DialogueTreeBuilder } from './dialogueBuilder';

// ============================================================================
// ORCHARD KEEPER - Getting Started & Basic Concepts
// ============================================================================

export const DIALOGUE_WELCOME = createLinearDialogue(
  'welcome',
  'orchard-keeper',
  'Welcome to the Orchard',
  [
    'Welcome, new gardener! I\'m the Orchard Keeper, and I\'ve been tending these trees for many seasons.',
    'This orchard is a special place where you\'ll learn the ancient art of Git - the practice of tracking growth and change in your work.',
    'Each tree here represents a repository, a collection of work that grows over time. Just as I tend to these trees, you\'ll learn to tend to your code.',
    'Let\'s start with the basics. Click on any tree marked with a seedling 🌱 to begin your first quest!',
  ]
);

export const DIALOGUE_WHAT_IS_GIT = createLinearDialogue(
  'what-is-git',
  'orchard-keeper',
  'Understanding Git',
  [
    'You\'ve asked an important question: what exactly is Git?',
    'Imagine you\'re writing a story. Git is like a magical notebook that remembers every version of your story - every draft, every change, every idea you tried.',
    'In the orchard, each tree trunk represents your main work. The rings you see inside? Those are commits - snapshots of your work at different times.',
    'GitHub Desktop is like a friendly helper that makes working with Git easier. Instead of typing arcane commands, you can use buttons and visual tools.',
    'Together, they help you never lose your work, experiment safely, and understand how your projects evolve over time.',
  ],
  'quest-getting-started-what-is-github-desktop'
);

export const DIALOGUE_COMMITS_INTRO = createLinearDialogue(
  'commits-intro',
  'orchard-keeper',
  'The Heart of Growth: Commits',
  [
    'Commits are the most important concept you\'ll learn here. They\'re like growth rings in a tree.',
    'When you make a commit, you\'re taking a snapshot of your work at that exact moment. It\'s saying "I want to remember exactly what my work looked like right now."',
    'Each commit tells a story. It says what changed, why it changed, and when it happened.',
    'In our orchard, every commit makes your tree stronger and adds to its history. The more commits you make, the richer your tree\'s story becomes.',
    'Ready to make your first commit? Look for the "First Commit" quest to get started!',
  ],
  'quest-making-changes-first-commit'
);

export const DIALOGUE_REPOS_EXPLAINED = new DialogueTreeBuilder(
  'repos-explained',
  'orchard-keeper',
  'Understanding Repositories'
)
  .root('repos-1')
  .node('repos-1', 'Let me tell you about repositories - the foundation of everything we do here.', {
    nextNodeId: 'repos-2',
  })
  .node('repos-2', 'A repository, or "repo" for short, is like this entire orchard grove. It contains all your files, their history, and the relationships between them.', {
    nextNodeId: 'repos-3',
  })
  .node('repos-3', 'Think of it this way: if your project is a tree, the repository is the soil, roots, trunk, and every branch - the complete living system.', {
    choices: [
      { text: 'How do I create a repository?', nextNodeId: 'repos-create' },
      { text: 'What goes in a repository?', nextNodeId: 'repos-content' },
      { text: 'I understand, thanks!', nextNodeId: 'repos-end' },
    ],
  })
  .node('repos-create', 'Creating a repository is like planting a new tree! You choose a spot (a folder on your computer), give it a name, and Git sets up everything needed to track your work. Look for the "Creating Repos" quest to learn more!', {
    nextNodeId: 'repos-end',
  })
  .node('repos-content', 'A repository holds your project files, their complete history, and special Git files that track everything. It\'s self-contained - everything needed for your project lives in one place.', {
    nextNodeId: 'repos-end',
  })
  .node('repos-end', 'Repositories are your workspace and your safety net. Tend them well, and they\'ll serve you for seasons to come!')
  .build();

// ============================================================================
// BOTANIST - Branches & Advanced Features
// ============================================================================

export const DIALOGUE_BRANCHES_INTRO = createLinearDialogue(
  'branches-intro',
  'botanist',
  'The Art of Branching',
  [
    'Greetings, fellow gardener. I\'m the Branch Botanist, and I study the intricate patterns of growth in our orchard.',
    'You\'ve noticed that trees don\'t just grow straight up, haven\'t you? They branch out, exploring different directions.',
    'Git branches work the same way. They let you try new ideas without disturbing your main work.',
    'When you create a branch, you\'re saying "I want to experiment here, but keep my main trunk safe and stable."',
    'This is one of Git\'s most powerful features. Let me show you how branches transform the way you work.',
  ],
  'quest-branches-what-are-branches'
);

export const DIALOGUE_BRANCHING_STRATEGY = new DialogueTreeBuilder(
  'branching-strategy',
  'botanist',
  'When to Branch'
)
  .root('branch-1')
  .node('branch-1', 'Understanding WHEN to branch is just as important as knowing HOW to branch.', {
    nextNodeId: 'branch-2',
  })
  .node('branch-2', 'In nature, trees branch when they need to reach new light or space. In Git, we branch when we want to preserve options.', {
    choices: [
      { text: 'Tell me about feature branches', nextNodeId: 'branch-feature' },
      { text: 'What about experimental work?', nextNodeId: 'branch-experiment' },
      { text: 'When should I merge?', nextNodeId: 'branch-merge' },
    ],
  })
  .node('branch-feature', 'Feature branches are for new capabilities. Create a branch named after what you\'re building: "add-dark-mode" or "user-authentication". Work there until it\'s complete, then merge it back to main.', {
    nextNodeId: 'branch-end',
  })
  .node('branch-experiment', 'Experimental branches are your playground! Try wild ideas without fear. If they work, great - merge them. If not, simply delete the branch. The main trunk remains untouched.', {
    nextNodeId: 'branch-end',
  })
  .node('branch-merge', 'Merge when your branch work is complete and tested. Think of it like grafting a successful limb back onto the trunk - you\'re bringing proven growth back to the main tree.', {
    nextNodeId: 'branch-end',
  })
  .node('branch-end', 'Remember: branches are cheap to create and easy to delete. Don\'t be afraid to branch often!')
  .build();

export const DIALOGUE_ADVANCED_UNDO = createLinearDialogue(
  'advanced-undo',
  'botanist',
  'The Art of Undoing',
  [
    'Even experienced gardeners make mistakes. The key is knowing how to correct them safely.',
    'Git offers several ways to undo changes, each with different effects. Like pruning a tree, you must choose the right tool.',
    'Discarding changes removes uncommitted work - like trimming fresh shoots. It\'s gentle and reversible if you haven\'t committed.',
    'Reverting a commit creates a new commit that undoes previous changes - like grafting to correct growth direction. It\'s safe and preserves history.',
    'Resetting is more drastic - like cutting back to an earlier point. Use it carefully, especially on shared branches.',
    'The "Undoing Changes" quest will teach you these techniques in a safe environment.',
  ],
  'quest-advanced-undoing-changes'
);

// ============================================================================
// FORAGER - Collaboration & Best Practices
// ============================================================================

export const DIALOGUE_REMOTE_REPOS = createLinearDialogue(
  'remote-repos',
  'forager',
  'Connecting to the Wider World',
  [
    'Hello there! I\'m the Seed Forager, and I explore connections between orchards far and wide.',
    'While you tend your local trees, there are vast orchards beyond - remote repositories where you can share your work and gather seeds from others.',
    'A remote repository is like a communal orchard. You can send your commits there (push), or bring in changes others have made (pull).',
    'For solo work, remotes serve as backups and let you work from different locations. Your laptop and desktop can share the same orchard!',
    'Let me show you how to connect your local work to these remote places.',
  ],
  'quest-collaboration-remote-repos'
);

export const DIALOGUE_WORKFLOWS = new DialogueTreeBuilder(
  'workflows',
  'forager',
  'Orchard Workflows',
)
  .root('workflow-1')
  .node('workflow-1', 'Every gardener develops their own rhythm - their workflow. Let me share some time-tested patterns.', {
    nextNodeId: 'workflow-2',
  })
  .node('workflow-2', 'The key is finding a rhythm that keeps your work organized and your trees healthy.', {
    choices: [
      { text: 'What\'s a daily workflow?', nextNodeId: 'workflow-daily' },
      { text: 'How do I organize features?', nextNodeId: 'workflow-features' },
      { text: 'Tell me about commits', nextNodeId: 'workflow-commits' },
    ],
  })
  .node('workflow-daily', 'Each day: 1) Pull latest changes, 2) Create a branch for your work, 3) Make small commits often, 4) Push to remote for backup. Simple, but powerful!', {
    nextNodeId: 'workflow-end',
  })
  .node('workflow-features', 'One feature, one branch. Keep it focused. When complete, merge to main. This keeps your main branch stable and your history clean.', {
    nextNodeId: 'workflow-end',
  })
  .node('workflow-commits', 'Commit often, with clear messages. Think "small chapters" not "whole books". Each commit should represent one logical change.', {
    nextNodeId: 'workflow-end',
  })
  .node('workflow-end', 'Workflows evolve with experience. Start with these basics, then adapt to your needs!')
  .build();

export const DIALOGUE_BEST_PRACTICES = createLinearDialogue(
  'best-practices',
  'forager',
  'Wisdom for the Journey',
  [
    'As you tend your orchard, keep these principles close to heart.',
    'Commit messages matter. Write them for future you - clear, descriptive, explaining WHY not just what.',
    'Branch names should be descriptive: "fix-login-bug" beats "stuff" or "temp".',
    'Pull before you push. Check for changes from remotes before sending your own.',
    'Test before you commit. Don\'t add broken or half-finished work to your tree\'s history.',
    'When in doubt, make a branch. They\'re free, and they keep your main trunk safe.',
    'Remember: Git is a garden that grows with you. Be patient with yourself as you learn.',
  ]
);

// ============================================================================
// Register All Dialogues
// ============================================================================

export function registerAllDialogues(): void {
  // Orchard Keeper dialogues
  dialogueEngine.registerTree(DIALOGUE_WELCOME);
  dialogueEngine.registerTree(DIALOGUE_WHAT_IS_GIT);
  dialogueEngine.registerTree(DIALOGUE_COMMITS_INTRO);
  dialogueEngine.registerTree(DIALOGUE_REPOS_EXPLAINED);

  // Botanist dialogues
  dialogueEngine.registerTree(DIALOGUE_BRANCHES_INTRO);
  dialogueEngine.registerTree(DIALOGUE_BRANCHING_STRATEGY);
  dialogueEngine.registerTree(DIALOGUE_ADVANCED_UNDO);

  // Forager dialogues
  dialogueEngine.registerTree(DIALOGUE_REMOTE_REPOS);
  dialogueEngine.registerTree(DIALOGUE_WORKFLOWS);
  dialogueEngine.registerTree(DIALOGUE_BEST_PRACTICES);
}
