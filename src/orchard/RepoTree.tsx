/**
 * Repository Tree Visualization
 *
 * Renders a Git repository as an orchard tree, with commits
 * as growth rings and branches as limbs.
 */

import React, { useEffect, useState } from 'react';
import './RepoTree.css';
import { RepoState } from '@state/useRepoStore';
import { buildCommitGraph, CommitGraph } from '@git/commitGraph';

interface RepoTreeProps {
  repoState: RepoState;
}

export const RepoTree: React.FC<RepoTreeProps> = ({ repoState }) => {
  const [graph, setGraph] = useState<CommitGraph | null>(null);
  const { repo, commits, status } = repoState;

  useEffect(() => {
    if (commits && commits.length > 0) {
      const commitGraph = buildCommitGraph(commits);
      setGraph(commitGraph);
    }
  }, [commits]);

  if (!commits || commits.length === 0) {
    return (
      <div className="repo-tree-empty">
        <p>No commits yet in this repository</p>
      </div>
    );
  }

  if (!graph) {
    return (
      <div className="repo-tree-loading">
        <p>Loading repository tree...</p>
      </div>
    );
  }

  const isDirty = !status?.clean;
  const treeHealth = isDirty ? 'growing' : 'healthy';

  return (
    <div className="repo-tree-container">
      {/* Tree Metadata */}
      <div className="tree-metadata">
        <h3 className="tree-title">
          {isDirty ? '🌿' : '🌳'} {repo.name}
        </h3>
        <div className="tree-stats">
          <span className="stat">
            <strong>{commits.length}</strong> commits
          </span>
          <span className="stat">
            <strong>{graph.branches.size}</strong> branches
          </span>
          <span className={`tree-health ${treeHealth}`}>
            {isDirty ? 'Growing' : 'Healthy'}
          </span>
        </div>
      </div>

      {/* SVG Tree Visualization */}
      <svg className="repo-tree-svg" viewBox="0 0 800 600">
        <defs>
          {/* Gradient for trunk */}
          <linearGradient id="trunk-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B4513" />
            <stop offset="100%" stopColor="#654321" />
          </linearGradient>

          {/* Filter for tree shadow */}
          <filter id="tree-shadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="2" dy="2" result="offsetblur" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ground */}
        <rect x="0" y="500" width="800" height="100" fill="#90EE90" opacity="0.3" />

        {/* Render Tree */}
        <TreeVisualization graph={graph} isDirty={isDirty} />
      </svg>

      {/* Legend */}
      <div className="tree-legend">
        <div className="legend-item">
          <div className="legend-symbol trunk"></div>
          <span>Main Branch (Trunk)</span>
        </div>
        <div className="legend-item">
          <div className="legend-symbol branch"></div>
          <span>Feature Branches (Limbs)</span>
        </div>
        <div className="legend-item">
          <div className="legend-symbol commit"></div>
          <span>Commits (Growth Rings)</span>
        </div>
      </div>
    </div>
  );
};

interface TreeVisualizationProps {
  graph: CommitGraph;
  isDirty: boolean;
}

const TreeVisualization: React.FC<TreeVisualizationProps> = ({ graph, isDirty }) => {
  const centerX = 400;
  const groundY = 500;
  const trunkWidth = 60;
  const trunkHeight = 200;

  // Calculate tree dimensions based on graph
  const branchCount = graph.branches.size;

  // Draw trunk (main branch)
  const mainBranchCommits = graph.mainBranch
    ? Array.from(graph.nodes.values()).filter(n => n.branches.includes(graph.mainBranch!))
    : [];

  return (
    <g filter="url(#tree-shadow)">
      {/* Trunk */}
      <rect
        x={centerX - trunkWidth / 2}
        y={groundY - trunkHeight}
        width={trunkWidth}
        height={trunkHeight}
        fill="url(#trunk-gradient)"
        rx="10"
      />

      {/* Growth rings on trunk (commits on main) */}
      {mainBranchCommits.slice(0, 10).map((node, idx) => {
        const y = groundY - trunkHeight + (idx * (trunkHeight / 10));
        return (
          <g key={node.commit.hash}>
            <ellipse
              cx={centerX}
              cy={y}
              rx={trunkWidth / 2 + 2}
              ry="4"
              fill="#654321"
              opacity="0.3"
            />
            <title>{node.commit.message}</title>
          </g>
        );
      })}

      {/* Branches (limbs) */}
      {renderBranches(graph, centerX, groundY - trunkHeight, isDirty)}

      {/* Leaves/Fruit for healthy tree */}
      {!isDirty && renderFoliage(centerX, groundY - trunkHeight - 50, branchCount)}

      {/* New growth indicator for dirty tree */}
      {isDirty && (
        <g>
          <circle cx={centerX} cy={groundY - trunkHeight - 20} r="15" fill="#90EE90" opacity="0.6">
            <animate attributeName="r" values="15;20;15" dur="2s" repeatCount="indefinite" />
          </circle>
          <text x={centerX} y={groundY - trunkHeight - 15} textAnchor="middle" fontSize="20">
            🌱
          </text>
        </g>
      )}
    </g>
  );
};

function renderBranches(graph: CommitGraph, trunkX: number, trunkTop: number, _isDirty: boolean) {
  const branches: JSX.Element[] = [];
  const branchArray = Array.from(graph.branches.entries());

  branchArray.forEach(([branchName, commitHash], idx) => {
    if (branchName === graph.mainBranch) return; // Skip main branch (it's the trunk)

    const node = graph.nodes.get(commitHash);
    if (!node) return;

    // Calculate branch position
    const angle = ((idx + 1) / (branchArray.length + 1)) * 180 - 90; // Spread from -90 to 90
    const angleRad = (angle * Math.PI) / 180;
    const branchLength = 80 + node.depth * 5;
    const endX = trunkX + Math.cos(angleRad) * branchLength;
    const endY = trunkTop + Math.sin(angleRad) * branchLength - 50;

    // Draw branch as curved path
    const controlX = trunkX + Math.cos(angleRad) * (branchLength / 2);
    const controlY = trunkTop + Math.sin(angleRad) * (branchLength / 2) - 30;

    branches.push(
      <g key={branchName}>
        <path
          d={`M ${trunkX},${trunkTop} Q ${controlX},${controlY} ${endX},${endY}`}
          stroke="#8B4513"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
        {/* Branch label */}
        <text
          x={endX}
          y={endY - 10}
          fontSize="10"
          fill="#333"
          textAnchor="middle"
          fontWeight="bold"
        >
          {branchName}
        </text>
        {/* Commits on branch */}
        <circle cx={endX} cy={endY} r="6" fill="#4CAF50" opacity="0.8">
          <title>{node.commit.message}</title>
        </circle>
      </g>
    );
  });

  return <g>{branches}</g>;
}

function renderFoliage(centerX: number, topY: number, branchCount: number) {
  const foliage: JSX.Element[] = [];
  const foliageRadius = 100 + branchCount * 10;

  // Create a cluster of leaves
  for (let i = 0; i < 20; i++) {
    const angle = (i / 20) * Math.PI * 2;
    const radius = foliageRadius + (Math.random() - 0.5) * 30;
    const x = centerX + Math.cos(angle) * radius;
    const y = topY + Math.sin(angle) * radius * 0.6;

    foliage.push(
      <circle
        key={i}
        cx={x}
        cy={y}
        r={15 + Math.random() * 10}
        fill="#228B22"
        opacity={0.6 + Math.random() * 0.2}
      />
    );
  }

  // Add some fruit (tags)
  for (let i = 0; i < 5; i++) {
    const angle = (i / 5) * Math.PI * 2;
    const radius = foliageRadius * 0.7;
    const x = centerX + Math.cos(angle) * radius;
    const y = topY + Math.sin(angle) * radius * 0.6;

    foliage.push(
      <text key={`fruit-${i}`} x={x} y={y} fontSize="20" textAnchor="middle">
        🍎
      </text>
    );
  }

  return <g>{foliage}</g>;
}
