/**
 * NPC Character Definitions
 *
 * Main NPCs that guide the user through the orchard.
 */

import { NPCCharacter, NPCRole } from './types';

export const ORCHARD_KEEPER: NPCCharacter = {
  id: 'orchard-keeper',
  name: 'Orchard Keeper',
  role: NPCRole.OrchardKeeper,
  personality: 'Warm, patient, encouraging. The primary guide who introduces foundational concepts.',
  areas: ['getting-started', 'basic-concepts', 'creating-repos', 'making-changes'],
  portraitIcon: '🧑‍🌾',
};

export const BOTANIST: NPCCharacter = {
  id: 'botanist',
  name: 'Branch Botanist',
  role: NPCRole.Botanist,
  personality: 'Thoughtful, detailed, analytical. Specializes in branching and growth patterns.',
  areas: ['branches', 'advanced-features', 'undoing-changes'],
  portraitIcon: '🔬',
};

export const FORAGER: NPCCharacter = {
  id: 'forager',
  name: 'Seed Forager',
  role: NPCRole.Forager,
  personality: 'Adventurous, practical, resourceful. Handles external connections and workflows.',
  areas: ['collaboration', 'best-practices', 'workflows'],
  portraitIcon: '🎒',
};

export const ALL_NPCS = [ORCHARD_KEEPER, BOTANIST, FORAGER];
