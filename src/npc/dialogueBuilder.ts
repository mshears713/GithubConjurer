/**
 * Dialogue Builder Utilities
 *
 * Helper functions for creating dialogue trees more easily.
 */

import { DialogueNode, DialogueChoice } from './types';
import { DialogueTree } from './dialogueEngine';

/**
 * Builder class for creating dialogue trees fluently
 */
export class DialogueTreeBuilder {
  private tree: Partial<DialogueTree>;
  private nodes: Map<string, DialogueNode> = new Map();

  constructor(id: string, npcId: string, title: string) {
    this.tree = {
      id,
      npcId,
      title,
      nodes: this.nodes,
    };
  }

  /**
   * Set the root node ID
   */
  root(nodeId: string): this {
    this.tree.rootNodeId = nodeId;
    return this;
  }

  /**
   * Add a dialogue node
   */
  node(id: string, text: string, options?: {
    nextNodeId?: string;
    triggerQuest?: string;
    choices?: DialogueChoice[];
  }): this {
    const node: DialogueNode = {
      id,
      npcId: this.tree.npcId!,
      text,
      ...options,
    };
    this.nodes.set(id, node);
    return this;
  }

  /**
   * Add a linear sequence of nodes
   */
  sequence(startId: string, texts: string[]): this {
    for (let i = 0; i < texts.length; i++) {
      const currentId = `${startId}-${i + 1}`;
      const nextId = i < texts.length - 1 ? `${startId}-${i + 2}` : undefined;
      this.node(currentId, texts[i], { nextNodeId: nextId });
    }
    return this;
  }

  /**
   * Set trigger conditions for the tree
   */
  trigger(options: {
    questId?: string;
    once?: boolean;
    condition?: string;
  }): this {
    this.tree.trigger = options;
    return this;
  }

  /**
   * Build and return the dialogue tree
   */
  build(): DialogueTree {
    if (!this.tree.rootNodeId) {
      throw new Error('Dialogue tree must have a root node ID');
    }
    if (!this.nodes.has(this.tree.rootNodeId)) {
      throw new Error(`Root node '${this.tree.rootNodeId}' not found in tree`);
    }
    return this.tree as DialogueTree;
  }
}

/**
 * Create a simple linear dialogue
 */
export function createLinearDialogue(
  id: string,
  npcId: string,
  title: string,
  texts: string[],
  triggerQuest?: string
): DialogueTree {
  const builder = new DialogueTreeBuilder(id, npcId, title);
  builder.root(`${id}-1`);
  builder.sequence(id, texts);

  if (triggerQuest) {
    // Add quest trigger to the last node
    const lastNode = builder['nodes'].get(`${id}-${texts.length}`);
    if (lastNode) {
      lastNode.triggerQuest = triggerQuest;
    }
  }

  return builder.build();
}

/**
 * Create a branching dialogue with choices
 */
export function createBranchingDialogue(
  id: string,
  npcId: string,
  title: string,
  rootText: string,
  branches: Array<{
    choiceText: string;
    responseText: string;
    condition?: string;
  }>
): DialogueTree {
  const builder = new DialogueTreeBuilder(id, npcId, title);
  builder.root(`${id}-root`);

  // Create root node with choices
  const choices: DialogueChoice[] = branches.map((branch, idx) => ({
    text: branch.choiceText,
    nextNodeId: `${id}-branch-${idx + 1}`,
    condition: branch.condition,
  }));

  builder.node(`${id}-root`, rootText, { choices });

  // Create response nodes
  branches.forEach((branch, idx) => {
    builder.node(`${id}-branch-${idx + 1}`, branch.responseText);
  });

  return builder.build();
}
