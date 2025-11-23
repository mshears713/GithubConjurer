/**
 * NPC Store
 *
 * Manages NPC dialogue state and interactions.
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DialogueNode } from '@npc/types';
import { dialogueEngine } from '@npc/dialogueEngine';

interface NPCStore {
  currentDialogue: DialogueNode | null;
  currentTreeId: string | null;
  dialogueHistory: string[]; // Node IDs seen
  activeNPCId: string | null;

  startDialogueTree: (treeId: string, npcId: string) => void;
  advanceDialogue: (choiceIndex?: number) => void;
  endDialogue: () => void;
  hasSeenDialogue: (nodeId: string) => boolean;
  markDialogueSeen: (nodeId: string) => void;
}

export const useNPCStore = create<NPCStore>()(
  persist(
    (set, get) => ({
      currentDialogue: null,
      currentTreeId: null,
      dialogueHistory: [],
      activeNPCId: null,

      startDialogueTree: (treeId, npcId) => {
        const startNode = dialogueEngine.getStartNode(treeId);
        if (startNode) {
          set({
            currentDialogue: startNode,
            currentTreeId: treeId,
            activeNPCId: npcId,
          });
          get().markDialogueSeen(startNode.id);
        }
      },

      advanceDialogue: (choiceIndex) => {
        const { currentTreeId, currentDialogue } = get();
        if (!currentTreeId || !currentDialogue) return;

        // Get next node
        const nextNode = dialogueEngine.getNextNode(
          currentTreeId,
          currentDialogue.id,
          choiceIndex
        );

        if (nextNode) {
          set({ currentDialogue: nextNode });
          get().markDialogueSeen(nextNode.id);
        } else {
          // End of dialogue tree
          get().endDialogue();
        }
      },

      endDialogue: () => {
        set({
          currentDialogue: null,
          currentTreeId: null,
          activeNPCId: null,
        });
      },

      hasSeenDialogue: (nodeId) => {
        return get().dialogueHistory.includes(nodeId);
      },

      markDialogueSeen: (nodeId) => {
        const history = get().dialogueHistory;
        if (!history.includes(nodeId)) {
          set({ dialogueHistory: [...history, nodeId] });
          dialogueEngine.markNodeSeen(nodeId);
        }
      },
    }),
    {
      name: 'npc-storage',
      partialize: (state) => ({
        dialogueHistory: state.dialogueHistory,
      }),
    }
  )
);
