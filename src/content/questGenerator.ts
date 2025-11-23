/**
 * Quest Generation Helpers
 *
 * Utilities for transforming lesson data into quest definitions
 * using orchard metaphors and NPC personalities.
 */

import { LessonData, QuestDefinition, QuestType, QuestStep, QuestReward } from './types';
import { QuestMappingConfig } from './questMapping';
import { NPCRole } from '@npc/types';
import { OrchardZone } from '@orchard/types';

/**
 * Git to Orchard metaphor mappings
 */
const GIT_METAPHORS: Record<string, string> = {
  repository: 'tree in your grove',
  commit: 'growth ring',
  branch: 'limb on your tree',
  merge: 'graft branches together',
  staging: 'prepare saplings in the greenhouse',
  stash: 'move buds to a nursery bed',
  tag: 'place a ribbon marker',
  clone: 'take a cutting from another orchard',
  pull: 'bring in water and nutrients',
  push: 'share seeds with other orchards',
  fetch: 'gather seeds from neighboring groves',
  conflict: 'untangle overlapping vines',
  reset: 'prune back overgrowth',
  checkout: 'move to a different branch',
};

/**
 * Generate orchard narrative from lesson summary
 */
export function generateOrchardNarrative(
  lesson: LessonData,
  npcRole: NPCRole
): string {
  const zoneName = getZoneDisplayName(lesson.zone);
  const npcName = getNPCName(npcRole);

  // Transform technical terms to orchard metaphors
  let narrative = lesson.summary;
  for (const [gitTerm, orchardTerm] of Object.entries(GIT_METAPHORS)) {
    const regex = new RegExp(`\\b${gitTerm}s?\\b`, 'gi');
    narrative = narrative.replace(regex, orchardTerm);
  }

  return `In the ${zoneName}, ${npcName} invites you to learn about ${narrative.toLowerCase()}`;
}

/**
 * Generate Git explanation from lesson content
 */
export function generateGitExplanation(lesson: LessonData): string {
  // Extract first paragraph or first 150 characters
  const lines = lesson.rawMarkdown.split('\n').filter(l => l.trim() && !l.startsWith('#'));
  const firstParagraph = lines[0] || lesson.summary;

  return firstParagraph.substring(0, 200);
}

/**
 * Generate quest title based on type and lesson
 */
export function generateQuestTitle(
  lesson: LessonData,
  questType: QuestType,
  npcRole: NPCRole
): string {
  const npcName = getNPCName(npcRole);

  switch (questType) {
    case QuestType.Advice:
      return `${npcName}'s Wisdom: ${lesson.title}`;
    case QuestType.Quest:
      return `Quest: ${lesson.title}`;
    case QuestType.CultivationTask:
      return `Cultivation: ${lesson.title}`;
    default:
      return lesson.title;
  }
}

/**
 * Generate quest steps from lesson key concepts
 */
export function generateQuestSteps(
  lesson: LessonData,
  questType: QuestType
): QuestStep[] {
  const concepts = lesson.keyConcepts;

  if (questType === QuestType.Advice) {
    // Advice quests have simple "listen and understand" steps
    return [
      {
        order: 1,
        instruction: 'Listen to the explanation',
        orchardMetaphor: 'Absorb the wisdom like rain nourishing soil',
        validation: 'Understanding achieved',
      },
      {
        order: 2,
        instruction: 'Reflect on the concept',
        orchardMetaphor: 'Let the knowledge take root',
        validation: 'Ready to apply',
      },
    ];
  }

  // For quests and tasks, create steps from key concepts
  return concepts.slice(0, 4).map((concept, index) => ({
    order: index + 1,
    instruction: `Learn about: ${concept}`,
    orchardMetaphor: transformToOrchardLanguage(concept),
    hint: `Focus on understanding ${concept}`,
    validation: `Concept "${concept}" understood`,
  }));
}

/**
 * Transform a phrase to orchard language
 */
function transformToOrchardLanguage(phrase: string): string {
  let transformed = phrase;
  for (const [gitTerm, orchardTerm] of Object.entries(GIT_METAPHORS)) {
    const regex = new RegExp(`\\b${gitTerm}s?\\b`, 'gi');
    transformed = transformed.replace(regex, orchardTerm);
  }
  return transformed;
}

/**
 * Generate reward based on zone and quest type
 */
export function generateQuestReward(
  lesson: LessonData,
  _questType: QuestType
): QuestReward {
  const zoneRewards: Record<OrchardZone, string> = {
    [OrchardZone.InnerClearing]: 'seedling sprouts',
    [OrchardZone.Trunk]: 'tree gains strength',
    [OrchardZone.Canopy]: 'new branch grows',
    [OrchardZone.Edge]: 'connection forms',
    [OrchardZone.Conservatory]: 'rare bloom appears',
    [OrchardZone.Perimeter]: 'wisdom marker placed',
  };

  const visualEffect = zoneRewards[lesson.zone] || 'sparkle';

  return {
    description: `Completed: ${lesson.title}`,
    visualEffect,
    unlocks: determineUnlocks(lesson),
  };
}

/**
 * Determine what gets unlocked after completing this quest
 */
function determineUnlocks(_lesson: LessonData): string[] {
  // Simplified for now
  return ['next-quest'];
}

/**
 * Generate preconditions based on lesson order
 */
export function generatePreconditions(lesson: LessonData): string[] {
  // First lessons in each zone have no prerequisites
  if (lesson.order === 1) {
    return [];
  }

  // Otherwise, require previous lesson in same zone
  // This is simplified - real implementation would track actual dependencies
  return [`prev-quest-in-zone`];
}

/**
 * Generate completion criteria
 */
export function generateCompletionCriteria(_questType: QuestType): string {
  // Simplified for now
  return 'Complete all quest objectives';
}

/**
 * Main function: Generate a quest from lesson data and mapping
 */
export function generateQuest(
  lesson: LessonData,
  mapping: QuestMappingConfig
): QuestDefinition {
  return {
    id: `quest-${lesson.id}`,
    lessonId: lesson.id,
    title: generateQuestTitle(lesson, mapping.questType, mapping.npcRole),
    description: lesson.summary,
    orchardNarrative: generateOrchardNarrative(lesson, mapping.npcRole),
    gitConcept: lesson.title,
    gitExplanation: generateGitExplanation(lesson),
    npcInvolved: getNPCId(mapping.npcRole),
    questType: mapping.questType,
    preconditions: generatePreconditions(lesson),
    steps: generateQuestSteps(lesson, mapping.questType),
    completionCriteria: generateCompletionCriteria(mapping.questType),
    reward: generateQuestReward(lesson, mapping.questType),
    estimatedMinutes: mapping.estimatedMinutes,
    difficulty: mapping.difficulty,
  };
}

/**
 * Helper: Get NPC ID from role
 */
function getNPCId(role: NPCRole): string {
  const idMap: Record<NPCRole, string> = {
    [NPCRole.OrchardKeeper]: 'orchard-keeper',
    [NPCRole.Botanist]: 'botanist',
    [NPCRole.Forager]: 'forager',
  };
  return idMap[role];
}

/**
 * Helper: Get NPC display name from role
 */
function getNPCName(role: NPCRole): string {
  const nameMap: Record<NPCRole, string> = {
    [NPCRole.OrchardKeeper]: 'the Orchard Keeper',
    [NPCRole.Botanist]: 'the Branch Botanist',
    [NPCRole.Forager]: 'the Seed Forager',
  };
  return nameMap[role];
}

/**
 * Helper: Get zone display name
 */
function getZoneDisplayName(zone: OrchardZone): string {
  const zoneNames: Record<OrchardZone, string> = {
    [OrchardZone.InnerClearing]: 'Inner Clearing',
    [OrchardZone.Trunk]: 'Trunk Region',
    [OrchardZone.Canopy]: 'Canopy',
    [OrchardZone.Edge]: 'Orchard Edge',
    [OrchardZone.Conservatory]: 'Conservatory',
    [OrchardZone.Perimeter]: 'Perimeter Trail',
  };
  return zoneNames[zone];
}

/**
 * Validate generated quest
 */
export function validateQuest(quest: QuestDefinition): string[] {
  const errors: string[] = [];

  if (!quest.id) errors.push('Missing quest ID');
  if (!quest.lessonId) errors.push('Missing lesson ID');
  if (!quest.title) errors.push('Missing title');
  if (!quest.description) errors.push('Missing description');
  if (quest.steps.length === 0) errors.push('No steps defined');

  return errors;
}
