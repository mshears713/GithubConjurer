import { contextBridge, ipcRenderer } from 'electron';

/**
 * Preload Script
 *
 * Exposes a safe API to the renderer process via contextBridge.
 * Git operations are handled through IPC to the main process.
 */
contextBridge.exposeInMainWorld('electronAPI', {
  platform: process.platform,

  git: {
    /**
     * Check if a directory is a Git repository
     */
    isRepo: (repoPath: string) =>
      ipcRenderer.invoke('git:isRepo', repoPath),

    /**
     * Get repository status
     */
    getStatus: (repoPath: string) =>
      ipcRenderer.invoke('git:getStatus', repoPath),

    /**
     * Get commit log
     */
    getLog: (repoPath: string, limit?: number) =>
      ipcRenderer.invoke('git:getLog', repoPath, limit),

    /**
     * Get branches
     */
    getBranches: (repoPath: string) =>
      ipcRenderer.invoke('git:getBranches', repoPath),

    /**
     * Create a new branch
     */
    createBranch: (repoPath: string, branchName: string) =>
      ipcRenderer.invoke('git:createBranch', repoPath, branchName),

    /**
     * Checkout a branch
     */
    checkoutBranch: (repoPath: string, branchName: string) =>
      ipcRenderer.invoke('git:checkoutBranch', repoPath, branchName),

    /**
     * Delete a branch
     */
    deleteBranch: (repoPath: string, branchName: string, force?: boolean) =>
      ipcRenderer.invoke('git:deleteBranch', repoPath, branchName, force),

    /**
     * Stage files
     */
    stageFiles: (repoPath: string, files: string[]) =>
      ipcRenderer.invoke('git:stageFiles', repoPath, files),

    /**
     * Unstage files
     */
    unstageFiles: (repoPath: string, files: string[]) =>
      ipcRenderer.invoke('git:unstageFiles', repoPath, files),

    /**
     * Create a commit
     */
    commit: (repoPath: string, message: string) =>
      ipcRenderer.invoke('git:commit', repoPath, message),

    /**
     * Get repository configuration
     */
    getConfig: (repoPath: string) =>
      ipcRenderer.invoke('git:getConfig', repoPath),

    /**
     * Get repository name from path
     */
    getRepoName: (repoPath: string) =>
      ipcRenderer.invoke('git:getRepoName', repoPath),
  },
});

export {};
