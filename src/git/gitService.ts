/**
 * Git Service - Renderer Process Wrapper
 *
 * Provides Git operations by calling Electron main process via IPC.
 * This replaces direct child_process calls for proper Electron security.
 *
 * All functions maintain the same signatures as the original implementation
 * to ensure UI components work without modification.
 */

import {
  GitStatus,
  GitCommit,
  GitBranch,
  GitConfig,
  GitResult,
} from './types';

/**
 * Check if a directory is a Git repository
 */
export async function isGitRepo(repoPath: string): Promise<GitResult<boolean>> {
  return window.electronAPI.git.isRepo(repoPath);
}

/**
 * Get repository status
 */
export async function getStatus(repoPath: string): Promise<GitResult<GitStatus>> {
  return window.electronAPI.git.getStatus(repoPath);
}

/**
 * Get commit log
 */
export async function getLog(
  repoPath: string,
  limit = 50
): Promise<GitResult<GitCommit[]>> {
  return window.electronAPI.git.getLog(repoPath, limit);
}

/**
 * Get branches
 */
export async function getBranches(repoPath: string): Promise<GitResult<GitBranch[]>> {
  return window.electronAPI.git.getBranches(repoPath);
}

/**
 * Create a new branch
 */
export async function createBranch(
  repoPath: string,
  branchName: string
): Promise<GitResult<void>> {
  return window.electronAPI.git.createBranch(repoPath, branchName);
}

/**
 * Switch to a branch
 */
export async function checkoutBranch(
  repoPath: string,
  branchName: string
): Promise<GitResult<void>> {
  return window.electronAPI.git.checkoutBranch(repoPath, branchName);
}

/**
 * Delete a branch
 */
export async function deleteBranch(
  repoPath: string,
  branchName: string,
  force = false
): Promise<GitResult<void>> {
  return window.electronAPI.git.deleteBranch(repoPath, branchName, force);
}

/**
 * Stage files
 */
export async function stageFiles(
  repoPath: string,
  files: string[]
): Promise<GitResult<void>> {
  return window.electronAPI.git.stageFiles(repoPath, files);
}

/**
 * Unstage files
 */
export async function unstageFiles(
  repoPath: string,
  files: string[]
): Promise<GitResult<void>> {
  return window.electronAPI.git.unstageFiles(repoPath, files);
}

/**
 * Create a commit
 */
export async function commit(
  repoPath: string,
  message: string
): Promise<GitResult<string>> {
  return window.electronAPI.git.commit(repoPath, message);
}

/**
 * Get repository configuration
 */
export async function getConfig(repoPath: string): Promise<GitResult<GitConfig>> {
  return window.electronAPI.git.getConfig(repoPath);
}

/**
 * Get repository name from path
 */
export function getRepoName(repoPath: string): string {
  // This is a synchronous function in the original, but IPC is async
  // We need to handle this case - for now we'll use a simple path.basename workaround
  // The actual call goes through IPC but we return the basename synchronously
  const path = repoPath.replace(/\\/g, '/');
  const parts = path.split('/');
  return parts[parts.length - 1] || '';
}
