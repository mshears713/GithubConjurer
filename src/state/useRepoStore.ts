/**
 * Repository Store
 *
 * Manages user's Git repositories - tracking which repos are connected,
 * their current state, and providing operations on them.
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GitRepo, GitStatus, GitCommit, GitBranch } from '@git/types';
import * as gitService from '@git/gitService';

export interface RepoState {
  id: string;
  repo: GitRepo;
  status?: GitStatus;
  commits?: GitCommit[];
  branches?: GitBranch[];
  lastUpdated: Date;
}

interface RepoStore {
  // State
  repos: RepoState[];
  activeRepoId: string | null;

  // Actions
  addRepo: (path: string) => Promise<void>;
  removeRepo: (id: string) => void;
  setActiveRepo: (id: string) => void;
  refreshRepo: (id: string) => Promise<void>;
  refreshActiveRepo: () => Promise<void>;
  getActiveRepo: () => RepoState | null;
}

export const useRepoStore = create<RepoStore>()(
  persist(
    (set, get) => ({
      repos: [],
      activeRepoId: null,

      addRepo: async (path: string) => {
        try {
          // Verify it's a git repo
          const isRepo = await gitService.isGitRepo(path);
          if (!isRepo.success || !isRepo.data) {
            throw new Error('Not a valid Git repository');
          }

          // Get repo name
          const name = gitService.getRepoName(path);

          // Create repo ID
          const id = `repo-${Date.now()}`;

          // Get initial status and branch info
          const statusResult = await gitService.getStatus(path);
          const branchesResult = await gitService.getBranches(path);

          const status = statusResult.success ? statusResult.data : undefined;
          const branches = branchesResult.success ? branchesResult.data : undefined;

          // Find default and current branch
          const defaultBranch =
            branches?.find(b => b.isDefault)?.name || 'main';
          const currentBranch =
            branches?.find(b => b.isCurrent)?.name || defaultBranch;
          const isClean = status?.clean ?? true;

          const repo: GitRepo = {
            name,
            path,
            defaultBranch,
            currentBranch,
            isClean,
          };

          const repoState: RepoState = {
            id,
            repo,
            status,
            branches,
            lastUpdated: new Date(),
          };

          set(state => ({
            repos: [...state.repos, repoState],
            activeRepoId: state.activeRepoId || id, // Set as active if first repo
          }));
        } catch (error) {
          console.error('Failed to add repository:', error);
          throw error;
        }
      },

      removeRepo: (id: string) => {
        set(state => ({
          repos: state.repos.filter(r => r.id !== id),
          activeRepoId: state.activeRepoId === id ? null : state.activeRepoId,
        }));
      },

      setActiveRepo: (id: string) => {
        const repo = get().repos.find(r => r.id === id);
        if (repo) {
          set({ activeRepoId: id });
        }
      },

      refreshRepo: async (id: string) => {
        const repo = get().repos.find(r => r.id === id);
        if (!repo) return;

        try {
          // Refresh status
          const statusResult = await gitService.getStatus(repo.repo.path);
          const status = statusResult.success ? statusResult.data : undefined;

          // Refresh branches
          const branchesResult = await gitService.getBranches(repo.repo.path);
          const branches = branchesResult.success ? branchesResult.data : undefined;

          // Refresh commits
          const commitsResult = await gitService.getLog(repo.repo.path);
          const commits = commitsResult.success ? commitsResult.data : undefined;

          // Update repo info
          const currentBranch = status?.branch || repo.repo.currentBranch;
          const isClean = status?.clean ?? true;

          set(state => ({
            repos: state.repos.map(r =>
              r.id === id
                ? {
                    ...r,
                    repo: {
                      ...r.repo,
                      currentBranch,
                      isClean,
                    },
                    status,
                    branches,
                    commits,
                    lastUpdated: new Date(),
                  }
                : r
            ),
          }));
        } catch (error) {
          console.error('Failed to refresh repository:', error);
        }
      },

      refreshActiveRepo: async () => {
        const activeId = get().activeRepoId;
        if (activeId) {
          await get().refreshRepo(activeId);
        }
      },

      getActiveRepo: () => {
        const activeId = get().activeRepoId;
        return activeId ? get().repos.find(r => r.id === activeId) || null : null;
      },
    }),
    {
      name: 'repo-store',
      // Don't persist the detailed state data (status, commits, branches)
      // Only persist the basic repo list and active ID
      partialize: state => ({
        repos: state.repos.map(r => ({
          id: r.id,
          repo: r.repo,
          lastUpdated: r.lastUpdated,
        })),
        activeRepoId: state.activeRepoId,
      }),
    }
  )
);
