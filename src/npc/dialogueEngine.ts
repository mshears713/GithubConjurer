/**
 * Dialogue Engine
 *
 * Manages dialogue trees, node navigation, and conditional logic.
 */

import { DialogueNode, DialogueChoice } from './types';

export interface DialogueTree {
  id: string;
  npcId: string;
  title: string;
  rootNodeId: string;
  nodes: Map<string, DialogueNode>;
  trigger?: {
    questId?: string;
    once?: boolean;
    condition?: string;
  };
}

export class DialogueEngine {
  private trees: Map<string, DialogueTree> = new Map();
  private seenNodes: Set<string> = new Set();

  /**
   * Register a dialogue tree
   */
  registerTree(tree: DialogueTree): void {
    this.trees.set(tree.id, tree);
  }

  /**
   * Get a dialogue tree by ID
   */
  getTree(treeId: string): DialogueTree | undefined {
    return this.trees.get(treeId);
  }

  /**
   * Get all trees for a specific NPC
   */
  getTreesForNPC(npcId: string): DialogueTree[] {
    return Array.from(this.trees.values()).filter(tree => tree.npcId === npcId);
  }

  /**
   * Get the root node of a dialogue tree
   */
  getStartNode(treeId: string): DialogueNode | undefined {
    const tree = this.trees.get(treeId);
    if (!tree) return undefined;
    return tree.nodes.get(tree.rootNodeId);
  }

  /**
   * Get a specific node from a tree
   */
  getNode(treeId: string, nodeId: string): DialogueNode | undefined {
    const tree = this.trees.get(treeId);
    if (!tree) return undefined;
    return tree.nodes.get(nodeId);
  }

  /**
   * Get the next node based on current node
   */
  getNextNode(treeId: string, currentNodeId: string, choiceIndex?: number): DialogueNode | undefined {
    const currentNode = this.getNode(treeId, currentNodeId);
    if (!currentNode) return undefined;

    // If choice was made, follow that path
    if (choiceIndex !== undefined && currentNode.choices && currentNode.choices[choiceIndex]) {
      const choice = currentNode.choices[choiceIndex];
      return this.getNode(treeId, choice.nextNodeId);
    }

    // Otherwise, follow the default next node
    if (currentNode.nextNodeId) {
      return this.getNode(treeId, currentNode.nextNodeId);
    }

    // No next node - end of dialogue
    return undefined;
  }

  /**
   * Check if a choice is available (conditions met)
   */
  isChoiceAvailable(choice: DialogueChoice, context?: Record<string, unknown>): boolean {
    if (!choice.condition) return true;

    // Simple condition evaluation (extend as needed)
    if (context && choice.condition in context) {
      return Boolean(context[choice.condition]);
    }

    return true;
  }

  /**
   * Mark a node as seen
   */
  markNodeSeen(nodeId: string): void {
    this.seenNodes.add(nodeId);
  }

  /**
   * Check if a node has been seen
   */
  hasSeenNode(nodeId: string): boolean {
    return this.seenNodes.has(nodeId);
  }

  /**
   * Check if dialogue tree should trigger
   */
  shouldTrigger(tree: DialogueTree, context?: Record<string, unknown>): boolean {
    if (!tree.trigger) return true;

    // Once-only dialogue
    if (tree.trigger.once && this.hasSeenNode(tree.rootNodeId)) {
      return false;
    }

    // Conditional trigger
    if (tree.trigger.condition && context) {
      return Boolean(context[tree.trigger.condition]);
    }

    return true;
  }

  /**
   * Get available dialogue trees for an NPC based on context
   */
  getAvailableTreesForNPC(npcId: string, context?: Record<string, unknown>): DialogueTree[] {
    const npcTrees = this.getTreesForNPC(npcId);
    return npcTrees.filter(tree => this.shouldTrigger(tree, context));
  }

  /**
   * Reset seen dialogue nodes (for testing or new game)
   */
  resetProgress(): void {
    this.seenNodes.clear();
  }

  /**
   * Export progress for saving
   */
  exportProgress(): string[] {
    return Array.from(this.seenNodes);
  }

  /**
   * Import progress from save
   */
  importProgress(seenNodes: string[]): void {
    this.seenNodes = new Set(seenNodes);
  }
}

// Global dialogue engine instance
export const dialogueEngine = new DialogueEngine();
