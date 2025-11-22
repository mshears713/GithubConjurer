/**
 * Hand-Crafted Quest Templates
 * 
 * Simplified version for initial generation
 */

import { QuestDefinition, QuestType } from './types';

export const HAND_CRAFTED_QUESTS: QuestDefinition[] = [
  {
    id: 'quest-getting-started-what-is-github-desktop',
    lessonId: 'getting-started-what-is-github-desktop',
    title: "The Orchard Keeper's Welcome",
    description: 'Meet the Orchard Keeper and learn what this peaceful grove has to teach.',
    orchardNarrative: 'Welcome to the orchard! Learn about tending your digital garden.',
    gitConcept: 'GitHub Desktop',
    gitExplanation: 'GitHub Desktop is a visual application for managing your code projects.',
    npcInvolved: 'orchard-keeper',
    questType: QuestType.Advice,
    preconditions: [],
    steps: [
      {
        order: 1,
        instruction: 'Listen to the Orchard Keeper introduce the grove',
        orchardMetaphor: 'Every great garden begins with understanding the land',
        hint: 'Take your time',
        validation: 'You understand the purpose of this learning journey',
      },
    ],
    completionCriteria: 'Understand what GitHub Desktop is and feel welcomed',
    reward: {
      description: 'The orchard gates open',
      visualEffect: 'seedling sprouts',
      unlocks: ['quest-getting-started-installation'],
    },
    estimatedMinutes: 5,
    difficulty: 'beginner',
  },
];

export function getHandCraftedQuest(lessonId: string): QuestDefinition | undefined {
  return HAND_CRAFTED_QUESTS.find(q => q.lessonId === lessonId);
}
