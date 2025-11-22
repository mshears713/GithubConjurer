/**
 * Lesson to Quest Type Mapping
 *
 * Configuration file that maps each lesson to its quest type,
 * assigned NPC, and other quest metadata.
 */

import { QuestType } from './types';
import { NPCRole } from '@npc/types';

export interface QuestMappingConfig {
  lessonId: string;
  questType: QuestType;
  npcRole: NPCRole;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedMinutes: number;
  isHandCrafted?: boolean;  // Mark which ones have custom quest definitions
}

/**
 * Complete mapping of all 30 lessons to quest configurations
 */
export const QUEST_MAPPINGS: QuestMappingConfig[] = [
  // ========================================
  // 01-getting-started (Inner Clearing)
  // ========================================
  {
    lessonId: 'getting-started-what-is-github-desktop',
    questType: QuestType.Advice,
    npcRole: NPCRole.OrchardKeeper,
    difficulty: 'beginner',
    estimatedMinutes: 5,
    isHandCrafted: true,  // Will hand-craft this one
  },
  {
    lessonId: 'getting-started-installation',
    questType: QuestType.CultivationTask,
    npcRole: NPCRole.OrchardKeeper,
    difficulty: 'beginner',
    estimatedMinutes: 10,
  },
  {
    lessonId: 'getting-started-initial-setup',
    questType: QuestType.CultivationTask,
    npcRole: NPCRole.OrchardKeeper,
    difficulty: 'beginner',
    estimatedMinutes: 8,
  },

  // ========================================
  // 02-basic-concepts (Inner Clearing)
  // ========================================
  {
    lessonId: 'basic-concepts-repositories',
    questType: QuestType.Advice,
    npcRole: NPCRole.OrchardKeeper,
    difficulty: 'beginner',
    estimatedMinutes: 7,
  },
  {
    lessonId: 'basic-concepts-commits',
    questType: QuestType.Advice,
    npcRole: NPCRole.OrchardKeeper,
    difficulty: 'beginner',
    estimatedMinutes: 8,
    isHandCrafted: true,  // Will hand-craft this one
  },
  {
    lessonId: 'basic-concepts-git-vs-github',
    questType: QuestType.Advice,
    npcRole: NPCRole.OrchardKeeper,
    difficulty: 'beginner',
    estimatedMinutes: 6,
  },
  {
    lessonId: 'basic-concepts-interface-tour',
    questType: QuestType.Quest,
    npcRole: NPCRole.OrchardKeeper,
    difficulty: 'beginner',
    estimatedMinutes: 12,
  },

  // ========================================
  // 03-creating-repos (Trunk Region)
  // ========================================
  {
    lessonId: 'creating-repos-creating-new-repo',
    questType: QuestType.Quest,
    npcRole: NPCRole.OrchardKeeper,
    difficulty: 'beginner',
    estimatedMinutes: 15,
    isHandCrafted: true,  // Will hand-craft this one
  },
  {
    lessonId: 'creating-repos-cloning-repos',
    questType: QuestType.Quest,
    npcRole: NPCRole.OrchardKeeper,
    difficulty: 'beginner',
    estimatedMinutes: 12,
  },
  {
    lessonId: 'creating-repos-opening-repos',
    questType: QuestType.CultivationTask,
    npcRole: NPCRole.OrchardKeeper,
    difficulty: 'beginner',
    estimatedMinutes: 5,
  },

  // ========================================
  // 04-making-changes (Trunk Region)
  // ========================================
  {
    lessonId: 'making-changes-making-your-first-commit',
    questType: QuestType.Quest,
    npcRole: NPCRole.OrchardKeeper,
    difficulty: 'beginner',
    estimatedMinutes: 18,
    isHandCrafted: true,  // Will hand-craft this one
  },
  {
    lessonId: 'making-changes-staging-changes',
    questType: QuestType.Quest,
    npcRole: NPCRole.OrchardKeeper,
    difficulty: 'beginner',
    estimatedMinutes: 15,
  },
  {
    lessonId: 'making-changes-writing-commit-messages',
    questType: QuestType.Advice,
    npcRole: NPCRole.OrchardKeeper,
    difficulty: 'beginner',
    estimatedMinutes: 10,
  },
  {
    lessonId: 'making-changes-viewing-history',
    questType: QuestType.Quest,
    npcRole: NPCRole.Botanist,
    difficulty: 'beginner',
    estimatedMinutes: 12,
  },
  {
    lessonId: 'making-changes-pushing-and-pulling',
    questType: QuestType.Quest,
    npcRole: NPCRole.Botanist,
    difficulty: 'intermediate',
    estimatedMinutes: 20,
  },

  // ========================================
  // 05-branches (Canopy)
  // ========================================
  {
    lessonId: 'branches-what-are-branches',
    questType: QuestType.Advice,
    npcRole: NPCRole.Botanist,
    difficulty: 'intermediate',
    estimatedMinutes: 10,
    isHandCrafted: true,  // Will hand-craft this one
  },
  {
    lessonId: 'branches-creating-branches',
    questType: QuestType.Quest,
    npcRole: NPCRole.Botanist,
    difficulty: 'intermediate',
    estimatedMinutes: 15,
  },
  {
    lessonId: 'branches-switching-branches',
    questType: QuestType.CultivationTask,
    npcRole: NPCRole.Botanist,
    difficulty: 'intermediate',
    estimatedMinutes: 10,
  },
  {
    lessonId: 'branches-merging-branches',
    questType: QuestType.Quest,
    npcRole: NPCRole.Botanist,
    difficulty: 'intermediate',
    estimatedMinutes: 20,
  },
  {
    lessonId: 'branches-deleting-branches',
    questType: QuestType.CultivationTask,
    npcRole: NPCRole.Botanist,
    difficulty: 'intermediate',
    estimatedMinutes: 8,
  },

  // ========================================
  // 06-collaboration (Orchard Edge)
  // ========================================
  {
    lessonId: 'collaboration-fetching-changes',
    questType: QuestType.Quest,
    npcRole: NPCRole.Forager,
    difficulty: 'intermediate',
    estimatedMinutes: 15,
  },
  {
    lessonId: 'collaboration-pull-requests',
    questType: QuestType.Advice,
    npcRole: NPCRole.Forager,
    difficulty: 'intermediate',
    estimatedMinutes: 12,
  },
  {
    lessonId: 'collaboration-handling-conflicts',
    questType: QuestType.Quest,
    npcRole: NPCRole.Forager,
    difficulty: 'intermediate',
    estimatedMinutes: 25,
  },
  {
    lessonId: 'collaboration-code-review',
    questType: QuestType.Advice,
    npcRole: NPCRole.Forager,
    difficulty: 'intermediate',
    estimatedMinutes: 10,
  },

  // ========================================
  // 07-advanced-features (Conservatory)
  // ========================================
  {
    lessonId: 'advanced-features-stashing',
    questType: QuestType.Quest,
    npcRole: NPCRole.Botanist,
    difficulty: 'advanced',
    estimatedMinutes: 18,
  },
  {
    lessonId: 'advanced-features-tags',
    questType: QuestType.CultivationTask,
    npcRole: NPCRole.Botanist,
    difficulty: 'advanced',
    estimatedMinutes: 12,
  },
  {
    lessonId: 'advanced-features-undoing-changes',
    questType: QuestType.Quest,
    npcRole: NPCRole.Botanist,
    difficulty: 'advanced',
    estimatedMinutes: 22,
  },

  // ========================================
  // 08-best-practices (Perimeter Trail)
  // ========================================
  {
    lessonId: 'best-practices-git-workflow',
    questType: QuestType.Advice,
    npcRole: NPCRole.Forager,
    difficulty: 'intermediate',
    estimatedMinutes: 15,
  },
  {
    lessonId: 'best-practices-common-issues',
    questType: QuestType.Quest,
    npcRole: NPCRole.Forager,
    difficulty: 'intermediate',
    estimatedMinutes: 20,
  },
  {
    lessonId: 'best-practices-security-tips',
    questType: QuestType.Advice,
    npcRole: NPCRole.Forager,
    difficulty: 'intermediate',
    estimatedMinutes: 10,
  },
];

/**
 * Helper to get quest mapping by lesson ID
 */
export function getQuestMapping(lessonId: string): QuestMappingConfig | undefined {
  return QUEST_MAPPINGS.find(m => m.lessonId === lessonId);
}

/**
 * Get all lessons that should be hand-crafted first
 */
export function getHandCraftedLessons(): QuestMappingConfig[] {
  return QUEST_MAPPINGS.filter(m => m.isHandCrafted);
}

/**
 * Get statistics about quest distribution
 */
export function getQuestStats() {
  const byType = QUEST_MAPPINGS.reduce((acc, m) => {
    acc[m.questType] = (acc[m.questType] || 0) + 1;
    return acc;
  }, {} as Record<QuestType, number>);

  const byNPC = QUEST_MAPPINGS.reduce((acc, m) => {
    acc[m.npcRole] = (acc[m.npcRole] || 0) + 1;
    return acc;
  }, {} as Record<NPCRole, number>);

  const byDifficulty = QUEST_MAPPINGS.reduce((acc, m) => {
    acc[m.difficulty] = (acc[m.difficulty] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return { byType, byNPC, byDifficulty };
}
