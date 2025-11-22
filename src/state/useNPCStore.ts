/**
 * NPC Store
 *
 * Manages NPC dialogue state and interactions.
 */

import { create } from 'zustand';
import { DialogueNode } from '@npc/types';

interface NPCStore {
  currentDialogue: DialogueNode | null;
  dialogueHistory: string[]; // Node IDs
  activeNPCId: string | null;

  startDialogue: (node: DialogueNode, npcId: string) => void;
  advanceDialogue: (nextNodeId: string) => void;
  endDialogue: () => void;
  hasSeenDialogue: (nodeId: string) => boolean;
}

export const useNPCStore = create<NPCStore>((set, get) => ({
  currentDialogue: null,
  dialogueHistory: [],
  activeNPCId: null,

  startDialogue: (node, npcId) => {
    set({
      currentDialogue: node,
      activeNPCId: npcId,
    });
  },

  advanceDialogue: (_nextNodeId) => {
    const history = get().dialogueHistory;
    const currentNode = get().currentDialogue;
    if (currentNode) {
      history.push(currentNode.id);
    }
    set({
      dialogueHistory: history,
      // In a real implementation, we'd fetch the next node from a dialogue tree
      // For now, just clear it
      currentDialogue: null,
    });
  },

  endDialogue: () => {
    set({
      currentDialogue: null,
      activeNPCId: null,
    });
  },

  hasSeenDialogue: (nodeId) => {
    return get().dialogueHistory.includes(nodeId);
  },
}));
