/**
 * Content Type Definitions
 *
 * Data models for lessons, quests, and content transformation.
 */

import { OrchardZone } from '@orchard/types';

export interface LessonData {
  id: string;
  title: string;
  sourceFile: string;
  directory: string;
  summary: string;
  keyConcepts: string[];
  rawMarkdown: string;
  zone: OrchardZone;
  order: number;
}

export enum QuestType {
  Advice = 'advice',          // NPC dialogue/explanation
  Quest = 'quest',            // Structured multi-step quest
  CultivationTask = 'task',   // Simple interactive task
}

export interface QuestDefinition {
  id: string;
  lessonId: string;
  title: string;
  description: string;
  gitConcept: string;
  npcInvolved?: string;
  questType: QuestType;
  preconditions: string[];  // Quest IDs that must be completed first
  steps: QuestStep[];
  completionCriteria: string;
  reward: QuestReward;
}

export interface QuestStep {
  order: number;
  instruction: string;
  orchardMetaphor: string;
  gitAction?: string;
}

export interface QuestReward {
  description: string;
  visualEffect: string;  // e.g., "tree-growth", "fruit-appears", "sparkle"
  unlocks?: string[];    // Zone or quest IDs that get unlocked
}
