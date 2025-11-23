/**
 * TypeScript declarations for Electron API exposed via preload script
 *
 * This file provides type definitions for window.electronAPI
 */

import { GitResult, GitStatus, GitCommit, GitBranch, GitConfig } from '../git/types';

export interface ElectronAPI {
  platform: string;
  git: {
    isRepo: (repoPath: string) => Promise<GitResult<boolean>>;
    getStatus: (repoPath: string) => Promise<GitResult<GitStatus>>;
    getLog: (repoPath: string, limit?: number) => Promise<GitResult<GitCommit[]>>;
    getBranches: (repoPath: string) => Promise<GitResult<GitBranch[]>>;
    createBranch: (repoPath: string, branchName: string) => Promise<GitResult<void>>;
    checkoutBranch: (repoPath: string, branchName: string) => Promise<GitResult<void>>;
    deleteBranch: (repoPath: string, branchName: string, force?: boolean) => Promise<GitResult<void>>;
    stageFiles: (repoPath: string, files: string[]) => Promise<GitResult<void>>;
    unstageFiles: (repoPath: string, files: string[]) => Promise<GitResult<void>>;
    commit: (repoPath: string, message: string) => Promise<GitResult<string>>;
    getConfig: (repoPath: string) => Promise<GitResult<GitConfig>>;
    getRepoName: (repoPath: string) => Promise<string>;
  };
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}
