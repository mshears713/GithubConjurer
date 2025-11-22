/**
 * Quest Generation Script
 *
 * Generates quest definitions for all 30 lessons.
 * Uses hand-crafted quests as templates where available,
 * auto-generates the rest using transformation helpers.
 *
 * Run with: npm run generate-quests
 */

import fs from 'fs';
import path from 'path';
import { LESSONS } from '../src/content/generatedLessons';
import { QUEST_MAPPINGS, getQuestMapping } from '../src/content/questMapping';
import { generateQuest, validateQuest } from '../src/content/questGenerator';
import { HAND_CRAFTED_QUESTS, getHandCraftedQuest } from '../src/content/handCraftedQuests';
import { QuestDefinition } from '../src/content/types';

const ROOT_DIR = path.resolve(__dirname, '..');

/**
 * Generate all quests
 */
function generateAllQuests(): QuestDefinition[] {
  const quests: QuestDefinition[] = [];
  let handCraftedCount = 0;
  let generatedCount = 0;

  console.log('🌳 Orchard of Branches - Quest Generator\n');
  console.log(`Processing ${LESSONS.length} lessons...\n`);

  for (const lesson of LESSONS) {
    // Check if there's a hand-crafted quest
    const handCrafted = getHandCraftedQuest(lesson.id);

    if (handCrafted) {
      console.log(`  ✓ ${lesson.title} (hand-crafted)`);
      quests.push(handCrafted);
      handCraftedCount++;
      continue;
    }

    // Otherwise, generate quest automatically
    const mapping = getQuestMapping(lesson.id);

    if (!mapping) {
      console.warn(`  ⚠ No mapping found for: ${lesson.id}`);
      continue;
    }

    const quest = generateQuest(lesson, mapping);
    const errors = validateQuest(quest);

    if (errors.length > 0) {
      console.error(`  ❌ ${lesson.title} - Validation errors:`);
      errors.forEach(err => console.error(`     - ${err}`));
      continue;
    }

    console.log(`  ✓ ${lesson.title} (generated)`);
    quests.push(quest);
    generatedCount++;
  }

  console.log(`\n✓ Generated ${quests.length} quests total`);
  console.log(`  - Hand-crafted: ${handCraftedCount}`);
  console.log(`  - Auto-generated: ${generatedCount}`);

  return quests;
}

/**
 * Generate TypeScript module from quests
 */
function generateTypescriptModule(quests: QuestDefinition[]): string {
  const imports = `/**
 * Generated Quest Definitions
 *
 * AUTO-GENERATED - DO NOT EDIT MANUALLY
 * Hand-crafted quests: See src/content/handCraftedQuests.ts
 * Run 'npm run generate-quests' to regenerate
 */

import { QuestDefinition, QuestType } from './types';
import { NPCRole } from '@npc/types';
`;

  // Serialize quests as TypeScript
  const questsData = quests.map(quest => {
    return `  ${JSON.stringify(quest, null, 2).replace(/"([^"]+)":/g, '$1:')}`;
  }).join(',\n');

  return `${imports}
export const ALL_QUESTS: QuestDefinition[] = [
${questsData}
];

export function getQuestById(id: string): QuestDefinition | undefined {
  return ALL_QUESTS.find(q => q.id === id);
}

export function getQuestsByLesson(lessonId: string): QuestDefinition[] {
  return ALL_QUESTS.filter(q => q.lessonId === lessonId);
}

export function getQuestsByNPC(npcId: string): QuestDefinition[] {
  return ALL_QUESTS.filter(q => q.npcInvolved === npcId);
}

export function getQuestsByType(type: QuestType): QuestDefinition[] {
  return ALL_QUESTS.filter(q => q.questType === type);
}

export function getAvailableQuests(completedQuestIds: Set<string>): QuestDefinition[] {
  return ALL_QUESTS.filter(quest => {
    // Check if all preconditions are met
    return quest.preconditions.every(preId => completedQuestIds.has(preId));
  });
}
`;
}

/**
 * Generate statistics report
 */
function generateStats(quests: QuestDefinition[]) {
  console.log('\n📊 Quest Statistics:\n');

  // By type
  const byType: Record<string, number> = {};
  quests.forEach(q => {
    byType[q.questType] = (byType[q.questType] || 0) + 1;
  });

  console.log('By Type:');
  Object.entries(byType).forEach(([type, count]) => {
    console.log(`  ${type}: ${count} quests`);
  });

  // By NPC
  const byNPC: Record<string, number> = {};
  quests.forEach(q => {
    const npc = q.npcInvolved || 'none';
    byNPC[npc] = (byNPC[npc] || 0) + 1;
  });

  console.log('\nBy NPC:');
  Object.entries(byNPC).forEach(([npc, count]) => {
    console.log(`  ${npc}: ${count} quests`);
  });

  // By difficulty
  const byDifficulty: Record<string, number> = {};
  quests.forEach(q => {
    const diff = q.difficulty || 'unspecified';
    byDifficulty[diff] = (byDifficulty[diff] || 0) + 1;
  });

  console.log('\nBy Difficulty:');
  Object.entries(byDifficulty).forEach(([diff, count]) => {
    console.log(`  ${diff}: ${count} quests`);
  });

  // Total estimated time
  const totalMinutes = quests.reduce((sum, q) => sum + (q.estimatedMinutes || 0), 0);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  console.log(`\nTotal Estimated Time: ${hours}h ${minutes}m`);
}

/**
 * Main execution
 */
function main() {
  const quests = generateAllQuests();

  if (quests.length === 0) {
    console.error('\n❌ No quests generated!');
    process.exit(1);
  }

  // Generate TypeScript module
  console.log('\nGenerating TypeScript module...');
  const tsContent = generateTypescriptModule(quests);
  const outputPath = path.join(ROOT_DIR, 'src', 'content', 'generatedQuests.ts');

  fs.writeFileSync(outputPath, tsContent, 'utf-8');
  console.log(`✓ Generated: ${path.relative(ROOT_DIR, outputPath)}`);

  // Generate statistics
  generateStats(quests);

  // Verification
  console.log('\n🔍 Verification:');
  const lessonsWithQuests = new Set(quests.map(q => q.lessonId));
  const lessonsWithoutQuests = LESSONS.filter(l => !lessonsWithQuests.has(l.id));

  if (lessonsWithoutQuests.length > 0) {
    console.warn(`\n⚠️  ${lessonsWithoutQuests.length} lessons without quests:`);
    lessonsWithoutQuests.forEach(l => console.warn(`  - ${l.id}`));
  } else {
    console.log('✓ All 30 lessons have quests!');
  }

  console.log('\n🎉 Quest generation complete!\n');
}

// Run the script
main();
