/**
 * Scenario Browser Component
 *
 * Browse and select practice scenarios.
 */

import React, { useState } from 'react';
import './ScenarioBrowser.css';
import { ALL_SCENARIOS } from '@scenarios/definitions';
import { ScenarioDefinition, ScenarioType } from '@scenarios/types';
import { useScenarioStore } from '@state/useScenarioStore';
import ScenarioRunner from './ScenarioRunner';

const ScenarioBrowser: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<ScenarioDefinition | null>(null);
  const [filterType, setFilterType] = useState<ScenarioType | 'all'>('all');
  const [filterDifficulty, setFilterDifficulty] = useState<'beginner' | 'intermediate' | 'advanced' | 'all'>('all');

  const { isScenarioCompleted } = useScenarioStore();

  // Filter scenarios
  const filteredScenarios = ALL_SCENARIOS.filter(scenario => {
    if (filterType !== 'all' && scenario.type !== filterType) return false;
    if (filterDifficulty !== 'all' && scenario.difficulty !== filterDifficulty) return false;
    return true;
  });

  // Get scenario statistics
  const totalScenarios = ALL_SCENARIOS.length;
  const completedScenarios = ALL_SCENARIOS.filter(s => isScenarioCompleted(s.id)).length;
  const completionPercentage = Math.round((completedScenarios / totalScenarios) * 100);

  return (
    <div className="scenario-browser">
      <div className="browser-header">
        <h1>🌱 Practice Scenarios</h1>
        <div className="scenario-stats">
          <span className="stat">
            ✅ Completed: <strong>{completedScenarios}</strong>/{totalScenarios}
          </span>
          <span className="stat">
            Progress: <strong>{completionPercentage}%</strong>
          </span>
        </div>
      </div>

      <div className="browser-filters">
        <label>
          Type:
          <select value={filterType} onChange={(e) => setFilterType(e.target.value as ScenarioType | 'all')}>
            <option value="all">All Types</option>
            <option value={ScenarioType.FirstCommit}>First Commit</option>
            <option value={ScenarioType.Branching}>Branching</option>
            <option value={ScenarioType.Merging}>Merging</option>
            <option value={ScenarioType.Conflict}>Conflict Resolution</option>
            <option value={ScenarioType.Undoing}>Undoing Changes</option>
            <option value={ScenarioType.Stashing}>Stashing</option>
          </select>
        </label>

        <label>
          Difficulty:
          <select value={filterDifficulty} onChange={(e) => setFilterDifficulty(e.target.value as 'beginner' | 'intermediate' | 'advanced' | 'all')}>
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </label>
      </div>

      <div className="browser-content">
        <div className="scenario-list">
          <p className="scenario-count">{filteredScenarios.length} scenarios</p>
          {filteredScenarios.map(scenario => {
            const isCompleted = isScenarioCompleted(scenario.id);

            return (
              <div
                key={scenario.id}
                className={`scenario-card ${selectedScenario?.id === scenario.id ? 'selected' : ''} ${isCompleted ? 'completed' : ''}`}
                onClick={() => setSelectedScenario(scenario)}
              >
                <div className="scenario-card-header">
                  <span className={`difficulty-badge diff-${scenario.difficulty}`}>
                    {scenario.difficulty}
                  </span>
                  <h3 className="scenario-card-title">{scenario.title}</h3>
                  {isCompleted && <span className="completed-badge">✓</span>}
                </div>
                <p className="scenario-card-description">{scenario.description}</p>
                <div className="scenario-card-footer">
                  <span className="scenario-meta">
                    ⏱️ {scenario.estimatedMinutes} min
                  </span>
                  <span className="scenario-meta">
                    📋 {scenario.steps.length} steps
                  </span>
                  {scenario.reward?.achievement && (
                    <span className="scenario-meta achievement">
                      ✨ {scenario.reward.achievement}
                    </span>
                  )}
                </div>
              </div>
            );
          })}

          {filteredScenarios.length === 0 && (
            <div className="no-scenarios">
              <p>No scenarios match your filters</p>
              <p>Try adjusting the filters above</p>
            </div>
          )}
        </div>

        {selectedScenario && !isScenarioCompleted(selectedScenario.id) && (
          <div className="scenario-preview">
            <h2>{selectedScenario.title}</h2>
            <p className="preview-description">{selectedScenario.description}</p>

            <div className="preview-meta">
              <div className="meta-row">
                <span className="meta-label">Difficulty:</span>
                <span className={`meta-value diff-${selectedScenario.difficulty}`}>
                  {selectedScenario.difficulty}
                </span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Estimated Time:</span>
                <span className="meta-value">{selectedScenario.estimatedMinutes} minutes</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Steps:</span>
                <span className="meta-value">{selectedScenario.steps.length}</span>
              </div>
            </div>

            {selectedScenario.prerequisites && selectedScenario.prerequisites.length > 0 && (
              <div className="preview-prerequisites">
                <h4>Prerequisites:</h4>
                <ul>
                  {selectedScenario.prerequisites.map(prereq => (
                    <li key={prereq}>{prereq}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="preview-steps">
              <h4>Steps Overview:</h4>
              <ol>
                {selectedScenario.steps.map(step => (
                  <li key={step.id}>{step.title}</li>
                ))}
              </ol>
            </div>

            {selectedScenario.reward && (
              <div className="preview-reward">
                <h4>Reward:</h4>
                <p>{selectedScenario.reward.description}</p>
              </div>
            )}
          </div>
        )}

        {selectedScenario && isScenarioCompleted(selectedScenario.id) && (
          <div className="scenario-completed-view">
            <div className="completed-icon">✅</div>
            <h2>Scenario Completed!</h2>
            <p>You've already completed "{selectedScenario.title}".</p>
            <p className="completed-hint">Select another scenario to practice, or revisit this one to review the steps.</p>
          </div>
        )}
      </div>

      {/* Scenario Runner Modal */}
      {selectedScenario && (
        <ScenarioRunner
          scenario={selectedScenario}
          onClose={() => setSelectedScenario(null)}
        />
      )}
    </div>
  );
};

export default ScenarioBrowser;
