/**
 * Repository Viewer Component
 *
 * Displays detailed view of a Git repository, including status,
 * branches, and recent commits.
 */

import React, { useEffect } from 'react';
import './RepoViewer.css';
import { RepoState } from '@state/useRepoStore';
import { useRepoStore } from '@state/useRepoStore';

interface RepoViewerProps {
  repoState: RepoState;
}

export const RepoViewer: React.FC<RepoViewerProps> = ({ repoState }) => {
  const { refreshRepo } = useRepoStore();
  const { repo, status, branches, commits } = repoState;

  useEffect(() => {
    // Refresh repo data when component mounts
    refreshRepo(repoState.id);
  }, [repoState.id, refreshRepo]);

  const handleRefresh = () => {
    refreshRepo(repoState.id);
  };

  return (
    <div className="repo-viewer">
      {/* Header */}
      <div className="viewer-header">
        <div className="header-content">
          <h2 className="repo-title">
            {repo.isClean ? '🌳' : '🌿'} {repo.name}
          </h2>
          <p className="repo-location">{repo.path}</p>
        </div>
        <button onClick={handleRefresh} className="refresh-button" title="Refresh">
          🔄
        </button>
      </div>

      {/* Status Section */}
      <div className="viewer-section">
        <h3 className="section-title">📊 Repository Status</h3>
        {status ? (
          <div className="status-info">
            <div className="status-row">
              <span className="status-label">Current Branch:</span>
              <span className="status-value branch-name">{status.branch}</span>
            </div>
            {(status.ahead > 0 || status.behind > 0) && (
              <div className="status-row">
                <span className="status-label">Remote Tracking:</span>
                <span className="status-value">
                  {status.ahead > 0 && `↑ ${status.ahead} ahead`}
                  {status.ahead > 0 && status.behind > 0 && ', '}
                  {status.behind > 0 && `↓ ${status.behind} behind`}
                </span>
              </div>
            )}
            <div className="status-row">
              <span className="status-label">Working Tree:</span>
              <span className={`status-badge ${status.clean ? 'clean' : 'dirty'}`}>
                {status.clean ? '✓ Clean' : '✗ Modified'}
              </span>
            </div>

            {/* File Changes */}
            {!status.clean && (
              <div className="file-changes">
                {status.staged.length > 0 && (
                  <div className="change-group">
                    <h4 className="change-title">Staged Changes ({status.staged.length})</h4>
                    <ul className="file-list">
                      {status.staged.map((file, idx) => (
                        <li key={idx} className="file-item staged">
                          <span className="file-status">{getStatusIcon(file.status)}</span>
                          <span className="file-path">{file.path}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {status.unstaged.length > 0 && (
                  <div className="change-group">
                    <h4 className="change-title">Unstaged Changes ({status.unstaged.length})</h4>
                    <ul className="file-list">
                      {status.unstaged.map((file, idx) => (
                        <li key={idx} className="file-item unstaged">
                          <span className="file-status">{getStatusIcon(file.status)}</span>
                          <span className="file-path">{file.path}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {status.untracked.length > 0 && (
                  <div className="change-group">
                    <h4 className="change-title">Untracked Files ({status.untracked.length})</h4>
                    <ul className="file-list">
                      {status.untracked.map((file, idx) => (
                        <li key={idx} className="file-item untracked">
                          <span className="file-status">?</span>
                          <span className="file-path">{file}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <p className="loading-text">Loading status...</p>
        )}
      </div>

      {/* Branches Section */}
      <div className="viewer-section">
        <h3 className="section-title">🌿 Branches</h3>
        {branches && branches.length > 0 ? (
          <div className="branches-list">
            {branches.map(branch => (
              <div
                key={branch.name}
                className={`branch-item ${branch.isCurrent ? 'current' : ''}`}
              >
                <span className="branch-icon">{branch.isCurrent ? '●' : '○'}</span>
                <span className="branch-name">{branch.name}</span>
                {branch.isDefault && <span className="default-badge">default</span>}
              </div>
            ))}
          </div>
        ) : (
          <p className="loading-text">Loading branches...</p>
        )}
      </div>

      {/* Commits Section */}
      <div className="viewer-section">
        <h3 className="section-title">📝 Recent Commits</h3>
        {commits && commits.length > 0 ? (
          <div className="commits-list">
            {commits.slice(0, 10).map(commit => (
              <div key={commit.hash} className="commit-item">
                <div className="commit-header">
                  <span className="commit-hash">{commit.shortHash}</span>
                  <span className="commit-author">{commit.author}</span>
                </div>
                <p className="commit-message">{commit.message}</p>
                <span className="commit-date">
                  {new Date(commit.date).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="loading-text">Loading commits...</p>
        )}
      </div>
    </div>
  );
};

function getStatusIcon(status: string): string {
  switch (status) {
    case 'added':
      return '+';
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
