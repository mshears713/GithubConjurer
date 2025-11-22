/**
 * Achievement Type Definitions
 *
 * Small rewards and achievements for progress milestones.
 */

export enum AchievementCategory {
  GettingStarted = 'getting-started',
  Commits = 'commits',
  Branches = 'branches',
  Collaboration = 'collaboration',
  Advanced = 'advanced',
  Mastery = 'mastery',
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  category: AchievementCategory;
  icon: string;  // Emoji icon
  visualEffect: string;  // Description of visual reward
  unlockCondition: {
    type: 'quest-complete' | 'scenario-complete' | 'custom';
    targetId?: string;  // Quest or scenario ID
    condition?: string;  // Custom condition
  };
  rarity: 'common' | 'rare' | 'epic';
}

export interface AchievementProgress {
  achievementId: string;
  unlockedAt?: Date;
  seen: boolean;  // Has user seen the unlock notification?
}
