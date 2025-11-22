/**
 * Git Operations Component
 *
 * Provides UI controls for basic Git operations:
 * staging, unstaging, committing files
 */

import React, { useState } from 'react';
import './GitOperations.css';
import { RepoState } from '@state/useRepoStore';
import { useRepoStore } from '@state/useRepoStore';
import * as gitService from '@git/gitService';

interface GitOperationsProps {
  repoState: RepoState;
}

export const GitOperations: React.FC<GitOperationsProps> = ({ repoState }) => {
  const { refreshRepo } = useRepoStore();
  const { repo, status } = repoState;
  const [commitMessage, setCommitMessage] = useState('');
  const [isCommitting, setIsCommitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  if (!status || status.clean) {
    return (
      <div className="git-operations">
        <div className="operations-empty">
          <p>✓ Working tree is clean</p>
          <p className="hint">No changes to stage or commit</p>
        </div>
      </div>
    );
  }

  const handleStageFile = async (filePath: string) => {
    setError(null);
    setSuccess(null);

    const result = await gitService.stageFiles(repo.path, [filePath]);
    if (result.success) {
      setSuccess(`Staged: ${filePath}`);
      await refreshRepo(repoState.id);
    } else {
      setError(result.error || 'Failed to stage file');
    }
  };

  const handleUnstageFile = async (filePath: string) => {
    setError(null);
    setSuccess(null);

    const result = await gitService.unstageFiles(repo.path, [filePath]);
    if (result.success) {
      setSuccess(`Unstaged: ${filePath}`);
      await refreshRepo(repoState.id);
    } else {
      setError(result.error || 'Failed to unstage file');
    }
  };

  const handleStageAll = async () => {
    setError(null);
    setSuccess(null);

    const allUnstaged = status.unstaged.map(f => f.path).concat(status.untracked);
    if (allUnstaged.length === 0) return;

    const result = await gitService.stageFiles(repo.path, allUnstaged);
    if (result.success) {
      setSuccess(`Staged ${allUnstaged.length} files`);
      await refreshRepo(repoState.id);
    } else {
      setError(result.error || 'Failed to stage files');
    }
  };

  const handleCommit = async () => {
    if (!commitMessage.trim()) {
      setError('Please enter a commit message');
      return;
    }

    if (status.staged.length === 0) {
      setError('No staged changes to commit');
      return;
    }

    setIsCommitting(true);
    setError(null);
    setSuccess(null);

    const result = await gitService.commit(repo.path, commitMessage.trim());
    if (result.success) {
      setSuccess(`✓ Committed: ${result.data}`);
      setCommitMessage('');
      await refreshRepo(repoState.id);
    } else {
      setError(result.error || 'Failed to commit changes');
    }

    setIsCommitting(false);
  };

  return (
    <div className="git-operations">
      <h3 className="operations-title">🔧 Git Operations</h3>

      {/* Messages */}
      {error && <div className="message error">{error}</div>}
      {success && <div className="message success">{success}</div>}

      {/* Unstaged Changes */}
      {(status.unstaged.length > 0 || status.untracked.length > 0) && (
        <div className="operation-section">
          <div className="section-header">
            <h4>Unstaged Changes ({status.unstaged.length + status.untracked.length})</h4>
            <button onClick={handleStageAll} className="stage-all-btn">
              Stage All
            </button>
          </div>
          <div className="file-list">
            {status.unstaged.map((file, idx) => (
              <div key={idx} className="file-row">
                <span className="file-status unstaged">{getStatusIcon(file.status)}</span>
                <span className="file-path">{file.path}</span>
                <button
                  onClick={() => handleStageFile(file.path)}
                  className="action-btn"
                  title="Stage file"
                >
                  +
                </button>
              </div>
            ))}
            {status.untracked.map((file, idx) => (
              <div key={`untracked-${idx}`} className="file-row">
                <span className="file-status untracked">?</span>
                <span className="file-path">{file}</span>
                <button
                  onClick={() => handleStageFile(file)}
                  className="action-btn"
                  title="Stage file"
                >
                  +
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Staged Changes */}
      {status.staged.length > 0 && (
        <div className="operation-section">
          <h4>Staged Changes ({status.staged.length})</h4>
          <div className="file-list">
            {status.staged.map((file, idx) => (
              <div key={idx} className="file-row">
                <span className="file-status staged">{getStatusIcon(file.status)}</span>
                <span className="file-path">{file.path}</span>
                <button
                  onClick={() => handleUnstageFile(file.path)}
                  className="action-btn"
                  title="Unstage file"
                >
                  −
                </button>
              </div>
            ))}
          </div>

          {/* Commit Form */}
          <div className="commit-form">
            <textarea
              value={commitMessage}
              onChange={e => setCommitMessage(e.target.value)}
              placeholder="Enter commit message..."
              className="commit-message-input"
              rows={3}
            />
            <button
              onClick={handleCommit}
              disabled={isCommitting || !commitMessage.trim()}
              className="commit-btn"
            >
              {isCommitting ? 'Committing...' : `Commit ${status.staged.length} files`}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

function getStatusIcon(status: string): string {
  switch (status) {
    case 'added':
      return 'A';
    case 'modified':
      return 'M';
    case 'deleted':
      return 'D';
    case 'renamed':
      return 'R';
    case 'copied':
      return 'C';
    default:
      return '?';
  }
}
