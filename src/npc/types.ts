/**
 * NPC Type Definitions
 */

export enum NPCRole {
  OrchardKeeper = 'orchard-keeper',
  Botanist = 'botanist',
  Forager = 'forager',
}

export interface NPCCharacter {
  id: string;
  name: string;
  role: NPCRole;
  personality: string;
  areas: string[];  // Topics/areas they handle
  portraitIcon: string;
}

export interface DialogueNode {
  id: string;
  npcId: string;
  text: string;
  choices?: DialogueChoice[];
  nextNodeId?: string;
  triggerQuest?: string;
}

export interface DialogueChoice {
  text: string;
  nextNodeId: string;
  condition?: string;
}
