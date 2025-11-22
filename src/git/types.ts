/**
 * Git Type Definitions
 *
 * Data models for Git operations and repository visualization.
 */

export interface GitRepo {
  name: string;
  path: string;
  defaultBranch: string;
  currentBranch: string;
  isClean: boolean;
}

export interface GitCommit {
  hash: string;
  shortHash: string;
  author: string;
  date: Date;
  message: string;
  parents: string[];
}

export interface GitBranch {
  name: string;
  isDefault: boolean;
  isCurrent: boolean;
  commitHash: string;
}

export interface GitStatus {
  branch: string;
  staged: string[];
  unstaged: string[];
  untracked: string[];
  ahead: number;
  behind: number;
}
