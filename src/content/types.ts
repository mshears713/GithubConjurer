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
  orchardNarrative: string;  // Story told in orchard metaphor
  gitConcept: string;
  gitExplanation: string;    // Plain explanation of Git concept
  npcInvolved?: string;
  questType: QuestType;
  preconditions: string[];   // Quest IDs that must be completed first
  steps: QuestStep[];
  completionCriteria: string;
  reward: QuestReward;
  estimatedMinutes?: number; // Estimated time to complete
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export interface QuestStep {
  order: number;
  instruction: string;
  orchardMetaphor: string;  // How this step relates to orchard
  gitAction?: string;        // Actual Git operation (if any)
  hint?: string;             // Optional hint for stuck users
  validation?: string;       // How to verify step completion
}

export interface QuestReward {
  description: string;
  visualEffect: string;  // e.g., "tree-growth", "fruit-appears", "sparkle"
  unlocks?: string[];    // Zone or quest IDs that get unlocked
}
