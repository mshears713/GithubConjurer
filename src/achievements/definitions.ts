/**
 * Achievement Definitions
 *
 * All available achievements in the orchard.
 */

import { Achievement, AchievementCategory } from './types';

export const ALL_ACHIEVEMENTS: Achievement[] = [
  // Getting Started Achievements
  {
    id: 'first-steps',
    title: 'First Steps in the Orchard',
    description: 'Complete your first quest and begin your journey.',
    category: AchievementCategory.GettingStarted,
    icon: '🌱',
    visualEffect: 'A small seedling appears in your orchard',
    unlockCondition: {
      type: 'custom',
      condition: 'complete-any-quest',
    },
    rarity: 'common',
  },

  // Commit Achievements
  {
    id: 'first-commit',
    title: 'Growth Ring Added',
    description: 'Made your first commit - added a permanent record to your tree.',
    category: AchievementCategory.Commits,
    icon: '🌳',
    visualEffect: 'Your tree gains its first visible growth ring',
    unlockCondition: {
      type: 'scenario-complete',
      targetId: 'scenario-first-commit',
    },
    rarity: 'common',
  },
  {
    id: 'commit-streak-5',
    title: 'Steady Growth',
    description: 'Made 5 commits - your tree is growing steadily.',
    category: AchievementCategory.Commits,
    icon: '🌿',
    visualEffect: 'Fresh leaves sprout on your branches',
    unlockCondition: {
      type: 'custom',
      condition: 'complete-5-commits',
    },
    rarity: 'common',
  },

  // Branch Achievements
  {
    id: 'first-branch',
    title: 'Limb Sprouted',
    description: 'Created your first branch - your tree is branching out!',
    category: AchievementCategory.Branches,
    icon: '🌿',
    visualEffect: 'A new limb grows from your tree trunk',
    unlockCondition: {
      type: 'scenario-complete',
      targetId: 'scenario-create-branch',
    },
    rarity: 'common',
  },
  {
    id: 'first-merge',
    title: 'Successful Grafting',
    description: 'Merged branches together - unified separate paths of growth.',
    category: AchievementCategory.Branches,
    icon: '🔀',
    visualEffect: 'Two limbs join together, stronger than before',
    unlockCondition: {
      type: 'scenario-complete',
      targetId: 'scenario-merge-branch',
    },
    rarity: 'rare',
  },

  // Advanced Achievements
  {
    id: 'safe-undo',
    title: 'Careful Pruning',
    description: 'Successfully undone changes without losing important work.',
    category: AchievementCategory.Advanced,
    icon: '✂️',
    visualEffect: 'Pruning shears appear in your tool collection',
    unlockCondition: {
      type: 'scenario-complete',
      targetId: 'scenario-fix-mistake',
    },
    rarity: 'rare',
  },
  {
    id: 'stash-master',
    title: 'Nursery Keeper',
    description: 'Used stash to safely store work-in-progress.',
    category: AchievementCategory.Advanced,
    icon: '🌱',
    visualEffect: 'A small nursery bed appears in your orchard',
    unlockCondition: {
      type: 'scenario-complete',
      targetId: 'scenario-stash-work',
    },
    rarity: 'rare',
  },

  // Mastery Achievements
  {
    id: 'quest-completionist',
    title: 'Orchard Scholar',
    description: 'Completed 10 quests - you\'re becoming a Git expert!',
    category: AchievementCategory.Mastery,
    icon: '📚',
    visualEffect: 'A small library appears near your trees',
    unlockCondition: {
      type: 'custom',
      condition: 'complete-10-quests',
    },
    rarity: 'rare',
  },
  {
    id: 'scenario-master',
    title: 'Practice Makes Perfect',
    description: 'Completed all practice scenarios.',
    category: AchievementCategory.Mastery,
    icon: '⭐',
    visualEffect: 'Golden fruit appears on your trees',
    unlockCondition: {
      type: 'custom',
      condition: 'complete-all-scenarios',
    },
    rarity: 'epic',
  },
  {
    id: 'orchard-master',
    title: 'Master Gardener',
    description: 'Completed all quests - you\'ve mastered the orchard!',
    category: AchievementCategory.Mastery,
    icon: '👑',
    visualEffect: 'Your orchard blooms in full glory',
    unlockCondition: {
      type: 'custom',
      condition: 'complete-all-quests',
    },
    rarity: 'epic',
  },
];
