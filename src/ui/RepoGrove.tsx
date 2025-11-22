/**
 * Repository Grove Component
 *
 * Manages the user's collection of Git repositories.
 * Allows adding, removing, and switching between repos.
 */

import React, { useState, useEffect } from 'react';
import './RepoGrove.css';
import { useRepoStore } from '@state/useRepoStore';
import { RepoViewer } from './RepoViewer';

const RepoGrove: React.FC = () => {
  const { repos, activeRepoId, addRepo, removeRepo, setActiveRepo, refreshActiveRepo, getActiveRepo } = useRepoStore();
  const [isAdding, setIsAdding] = useState(false);
  const [addError, setAddError] = useState<string | null>(null);
  const [repoPath, setRepoPath] = useState('');

  const activeRepo = getActiveRepo();

  useEffect(() => {
    // Refresh active repo on mount and periodically
    if (activeRepoId) {
      refreshActiveRepo();
    }
  }, [activeRepoId, refreshActiveRepo]);

  const handleAddRepo = async () => {
    if (!repoPath.trim()) {
      setAddError('Please enter a repository path');
      return;
    }

    try {
      setAddError(null);
      await addRepo(repoPath.trim());
      setRepoPath('');
      setIsAdding(false);
    } catch (error) {
      setAddError(error instanceof Error ? error.message : 'Failed to add repository');
    }
  };

  const handleSelectFolder = async () => {
    // Call Electron dialog to select folder
    if (window.electron?.selectFolder) {
      const path = await window.electron.selectFolder();
      if (path) {
        setRepoPath(path);
      }
    } else {
      // Fallback for development/testing
      setAddError('File picker not available in this environment');
    }
  };

  const handleRemoveRepo = (id: string, event: React.MouseEvent) => {
    event.stopPropagation();
    if (confirm('Are you sure you want to remove this repository from the grove?')) {
      removeRepo(id);
    }
  };

  return (
    <div className="repo-grove">
      {/* Header */}
      <div className="grove-header">
        <h1>🌲 Real Repository Grove</h1>
        <p className="grove-subtitle">
          Connect your Git repositories to practice and visualize real Git operations
        </p>
      </div>

      {/* Repo List */}
      <div className="grove-content">
        <div className="repo-sidebar">
          <div className="repo-list-header">
            <h2>Your Repositories</h2>
            <button
              className="add-repo-button"
              onClick={() => setIsAdding(!isAdding)}
              title="Add a repository"
            >
              {isAdding ? '✕' : '+'}
            </button>
          </div>

          {/* Add Repo Form */}
          {isAdding && (
            <div className="add-repo-form">
              <div className="form-row">
                <input
                  type="text"
                  value={repoPath}
                  onChange={e => setRepoPath(e.target.value)}
                  placeholder="/path/to/repository"
                  className="repo-path-input"
                />
                <button onClick={handleSelectFolder} className="browse-button">
                  📁
                </button>
              </div>
              <div className="form-actions">
                <button onClick={handleAddRepo} className="confirm-button">
                  Add Repository
                </button>
                <button onClick={() => setIsAdding(false)} className="cancel-button">
                  Cancel
                </button>
              </div>
              {addError && <div className="error-message">{addError}</div>}
            </div>
          )}

          {/* Repository List */}
          {repos.length === 0 ? (
            <div className="empty-state">
              <p>No repositories yet</p>
              <p className="hint">Click the + button to add your first repository</p>
            </div>
          ) : (
            <div className="repo-list">
              {repos.map(repoState => (
                <div
                  key={repoState.id}
                  className={`repo-card ${activeRepoId === repoState.id ? 'active' : ''}`}
                  onClick={() => setActiveRepo(repoState.id)}
                >
                  <div className="repo-info">
                    <div className="repo-icon">
                      {repoState.repo.isClean ? '🌳' : '🌿'}
                    </div>
                    <div className="repo-details">
                      <h3 className="repo-name">{repoState.repo.name}</h3>
                      <p className="repo-branch">
                        {repoState.repo.currentBranch}
                      </p>
                      <p className="repo-path">{repoState.repo.path}</p>
                    </div>
                  </div>
                  <button
                    className="remove-repo-button"
                    onClick={e => handleRemoveRepo(repoState.id, e)}
                    title="Remove repository"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Active Repo Viewer */}
        <div className="repo-viewer-panel">
          {activeRepo ? (
            <RepoViewer repoState={activeRepo} />
          ) : (
            <div className="no-repo-selected">
              <p>Select a repository to view its details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepoGrove;
