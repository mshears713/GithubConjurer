/**
 * Commit Graph Parser
 *
 * Transforms Git commit history into a tree structure
 * for visual representation in the orchard.
 */

import { GitCommit } from './types';

export interface CommitNode {
  commit: GitCommit;
  children: CommitNode[];
  parents: string[];
  branches: string[];
  tags: string[];
  depth: number; // How many commits from root
  column: number; // Visual column for rendering branches
}

export interface CommitGraph {
  nodes: Map<string, CommitNode>;
  roots: CommitNode[]; // Commits with no parents
  branches: Map<string, string>; // branch name -> commit hash
  mainBranch: string | null;
}

/**
 * Build commit graph from Git log
 */
export function buildCommitGraph(commits: GitCommit[]): CommitGraph {
  const nodes = new Map<string, CommitNode>();
  const roots: CommitNode[] = [];
  const branches = new Map<string, string>();

  // First pass: Create nodes
  for (const commit of commits) {
    const node: CommitNode = {
      commit,
      children: [],
      parents: commit.parents,
      branches: [],
      tags: [],
      depth: 0,
      column: 0,
    };

    // Extract branch and tag refs
    if (commit.refs) {
      for (const ref of commit.refs) {
        if (ref.startsWith('tag: ')) {
          node.tags.push(ref.substring(5));
        } else if (!ref.includes('HEAD')) {
          node.branches.push(ref);
          branches.set(ref, commit.hash);
        }
      }
    }

    nodes.set(commit.hash, node);
  }

  // Second pass: Build parent-child relationships
  for (const node of nodes.values()) {
    if (node.parents.length === 0) {
      roots.push(node);
    } else {
      for (const parentHash of node.parents) {
        const parent = nodes.get(parentHash);
        if (parent) {
          parent.children.push(node);
        }
      }
    }
  }

  // Third pass: Calculate depths
  calculateDepths(roots);

  // Fourth pass: Assign columns for visual layout
  assignColumns(nodes);

  // Determine main branch
  const mainBranch = findMainBranch(branches);

  return {
    nodes,
    roots,
    branches,
    mainBranch,
  };
}

/**
 * Calculate depth (distance from root) for each node
 */
function calculateDepths(roots: CommitNode[]): void {
  const visited = new Set<string>();

  function traverse(node: CommitNode, depth: number) {
    if (visited.has(node.commit.hash)) return;
    visited.add(node.commit.hash);

    node.depth = Math.max(node.depth, depth);

    for (const child of node.children) {
      traverse(child, depth + 1);
    }
  }

  for (const root of roots) {
    traverse(root, 0);
  }
}

/**
 * Assign visual columns for branch layout
 */
function assignColumns(nodes: Map<string, CommitNode>): void {
  const sortedNodes = Array.from(nodes.values()).sort((a, b) => a.depth - b.depth);
  const usedColumns = new Map<number, string>(); // column -> latest commit hash using it
  let nextColumn = 0;

  for (const node of sortedNodes) {
    // If this node is a continuation of a parent's column, use that
    if (node.parents.length > 0) {
      const parent = nodes.get(node.parents[0]);
      if (parent) {
        node.column = parent.column;
        usedColumns.set(node.column, node.commit.hash);
        continue;
      }
    }

    // Otherwise, find an available column
    let column = 0;
    while (usedColumns.has(column)) {
      column++;
    }

    node.column = column;
    usedColumns.set(column, node.commit.hash);
    nextColumn = Math.max(nextColumn, column + 1);
  }
}

/**
 * Find the main branch (main or master)
 */
function findMainBranch(branches: Map<string, string>): string | null {
  for (const branchName of branches.keys()) {
    if (branchName === 'main' || branchName === 'master') {
      return branchName;
    }
  }

  // If no main/master, return the first branch
  const first = branches.keys().next();
  return first.done ? null : first.value;
}

/**
 * Get linear history from a commit (following first parent)
 */
export function getLinearHistory(
  graph: CommitGraph,
  startHash: string
): CommitNode[] {
  const history: CommitNode[] = [];
  let current = graph.nodes.get(startHash);

  while (current) {
    history.push(current);
    if (current.parents.length === 0) break;

    // Follow first parent
    current = graph.nodes.get(current.parents[0]);
  }

  return history;
}

/**
 * Get all ancestors of a commit
 */
export function getAncestors(
  graph: CommitGraph,
  startHash: string
): Set<string> {
  const ancestors = new Set<string>();
  const queue = [startHash];

  while (queue.length > 0) {
    const hash = queue.shift()!;
    if (ancestors.has(hash)) continue;

    ancestors.add(hash);
    const node = graph.nodes.get(hash);
    if (node) {
      queue.push(...node.parents);
    }
  }

  return ancestors;
}

/**
 * Check if one commit is an ancestor of another
 */
export function isAncestor(
  graph: CommitGraph,
  ancestorHash: string,
  descendantHash: string
): boolean {
  const ancestors = getAncestors(graph, descendantHash);
  return ancestors.has(ancestorHash);
}

/**
 * Get commits between two commits (for diff visualization)
 */
export function getCommitsBetween(
  graph: CommitGraph,
  fromHash: string,
  toHash: string
): CommitNode[] {
  const fromAncestors = getAncestors(graph, fromHash);
  const toAncestors = getAncestors(graph, toHash);

  const between: CommitNode[] = [];

  for (const hash of toAncestors) {
    if (!fromAncestors.has(hash)) {
      const node = graph.nodes.get(hash);
      if (node) {
        between.push(node);
      }
    }
  }

  return between.sort((a, b) => a.depth - b.depth);
}

/**
 * Simplify graph for visualization (collapse linear sequences)
 */
export function simplifyGraph(graph: CommitGraph): CommitGraph {
  // For now, just return the original graph
  // Future: implement actual simplification logic where linear sequences are collapsed
  return graph;
}
