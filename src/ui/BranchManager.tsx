/**
 * Branch Manager Component
 *
 * Provides UI for creating, switching, and deleting branches
 * with orchard metaphors (growing limbs, walking to limbs, pruning limbs)
 */

import React, { useState } from 'react';
import './BranchManager.css';
import { RepoState } from '@state/useRepoStore';
import { useRepoStore } from '@state/useRepoStore';
import * as gitService from '@git/gitService';

interface BranchManagerProps {
  repoState: RepoState;
}

export const BranchManager: React.FC<BranchManagerProps> = ({ repoState }) => {
  const { refreshRepo } = useRepoStore();
  const { repo, branches } = repoState;
  const [isCreating, setIsCreating] = useState(false);
  const [newBranchName, setNewBranchName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleCreateBranch = async () => {
    if (!newBranchName.trim()) {
      setError('Please enter a branch name');
      return;
    }

    setError(null);
    setSuccess(null);

    const result = await gitService.createBranch(repo.path, newBranchName.trim());
    if (result.success) {
      setSuccess(`🌿 Grew new limb: ${newBranchName}`);
      setNewBranchName('');
      setIsCreating(false);
      await refreshRepo(repoState.id);
    } else {
      setError(result.error || 'Failed to create branch');
    }
  };

  const handleSwitchBranch = async (branchName: string) => {
    setError(null);
    setSuccess(null);

    const result = await gitService.checkoutBranch(repo.path, branchName);
    if (result.success) {
      setSuccess(`🚶 Walked to limb: ${branchName}`);
      await refreshRepo(repoState.id);
    } else {
      setError(result.error || 'Failed to switch branch');
    }
  };

  const handleDeleteBranch = async (branchName: string, isCurrent: boolean) => {
    if (isCurrent) {
      setError('Cannot prune the limb you are standing on');
      return;
    }

    if (!confirm(`Are you sure you want to prune limb "${branchName}"?`)) {
      return;
    }

    setError(null);
    setSuccess(null);

    const result = await gitService.deleteBranch(repo.path, branchName);
    if (result.success) {
      setSuccess(`✂️ Pruned limb: ${branchName}`);
      await refreshRepo(repoState.id);
    } else {
      setError(result.error || 'Failed to delete branch');
    }
  };

  return (
    <div className="branch-manager">
      <div className="manager-header">
        <h3>🌿 Branch Management</h3>
        <button
          onClick={() => setIsCreating(!isCreating)}
          className="grow-limb-btn"
          title="Grow a new limb (create branch)"
        >
          {isCreating ? '✕' : '+ Grow Limb'}
        </button>
      </div>

      {/* Messages */}
      {error && <div className="message error">{error}</div>}
      {success && <div className="message success">{success}</div>}

      {/* Create Branch Form */}
      {isCreating && (
        <div className="create-branch-form">
          <input
            type="text"
            value={newBranchName}
            onChange={e => setNewBranchName(e.target.value)}
            placeholder="new-branch-name"
            className="branch-name-input"
            onKeyDown={e => e.key === 'Enter' && handleCreateBranch()}
          />
          <button onClick={handleCreateBranch} className="create-btn">
            Grow Limb
          </button>
        </div>
      )}

      {/* Branch List */}
      {branches && branches.length > 0 ? (
        <div className="branches-list">
          {branches.map(branch => (
            <div
              key={branch.name}
              className={`branch-card ${branch.isCurrent ? 'current' : ''}`}
            >
              <div className="branch-info">
                <span className="branch-icon">{branch.isCurrent ? '🚶' : '🌿'}</span>
                <div className="branch-details">
                  <span className="branch-name">{branch.name}</span>
                  {branch.isDefault && <span className="default-badge">trunk</span>}
                  {branch.isCurrent && <span className="current-badge">standing here</span>}
                </div>
              </div>
              <div className="branch-actions">
                {!branch.isCurrent && (
                  <button
                    onClick={() => handleSwitchBranch(branch.name)}
                    className="action-btn walk"
                    title="Walk to this limb (checkout)"
                  >
                    🚶
                  </button>
                )}
                {!branch.isDefault && (
                  <button
                    onClick={() => handleDeleteBranch(branch.name, branch.isCurrent)}
                    className="action-btn prune"
                    title="Prune this limb (delete)"
                  >
                    ✂️
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="loading-text">Loading branches...</p>
      )}
    </div>
  );
};
