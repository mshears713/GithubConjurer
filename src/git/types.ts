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
  email: string;
  date: Date;
  message: string;
  parents: string[];
  refs?: string[]; // branch names, tags, etc.
}

export interface GitBranch {
  name: string;
  isDefault: boolean;
  isCurrent: boolean;
  commitHash: string;
  upstream?: string;
  ahead?: number;
  behind?: number;
}

export interface GitStatus {
  branch: string;
  staged: FileChange[];
  unstaged: FileChange[];
  untracked: string[];
  ahead: number;
  behind: number;
  clean: boolean;
}

export interface FileChange {
  path: string;
  status: 'added' | 'modified' | 'deleted' | 'renamed' | 'copied';
  oldPath?: string; // For renames
}

export interface GitRemote {
  name: string;
  fetchUrl: string;
  pushUrl: string;
}

export interface GitStash {
  index: number;
  message: string;
  branch: string;
}

export interface GitTag {
  name: string;
  commit: string;
  message?: string;
  date?: Date;
}

export interface GitDiff {
  file: string;
  additions: number;
  deletions: number;
  patch: string;
}

export interface GitConfig {
  userName?: string;
  userEmail?: string;
  defaultBranch?: string;
}

/**
 * Result wrapper for Git operations
 */
export interface GitResult<T> {
  success: boolean;
  data?: T;
  error?: string;
  stderr?: string;
}
