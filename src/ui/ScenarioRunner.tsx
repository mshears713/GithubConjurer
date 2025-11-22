/**
 * Scenario Runner Component
 *
 * Walks users through practice scenarios step-by-step.
 */

import React, { useEffect, useState } from 'react';
import './ScenarioRunner.css';
import { ScenarioDefinition, StepStatus } from '@scenarios/types';
import { useScenarioStore } from '@state/useScenarioStore';

interface ScenarioRunnerProps {
  scenario: ScenarioDefinition;
  onClose: () => void;
}

const ScenarioRunner: React.FC<ScenarioRunnerProps> = ({ scenario, onClose }) => {
  const {
    getScenarioProgress,
    getCurrentStep,
    completeStep,
    skipStep,
    advanceScenario,
    completeScenario,
    startScenario,
  } = useScenarioStore();

  const [showHint, setShowHint] = useState(false);
  const progress = getScenarioProgress(scenario.id);
  const currentStepIndex = getCurrentStep(scenario.id);
  const currentStep = scenario.steps[currentStepIndex];
  const isLastStep = currentStepIndex === scenario.steps.length - 1;
  const isCompleted = progress?.completedAt !== undefined;

  // Initialize scenario if not started
  useEffect(() => {
    if (!progress) {
      startScenario(scenario.id);
    }
  }, [progress, scenario.id, startScenario]);

  const handleCompleteStep = () => {
    if (currentStep) {
      completeStep(scenario.id, currentStep.id);
      if (isLastStep) {
        completeScenario(scenario.id);
      } else {
        advanceScenario(scenario.id);
        setShowHint(false);
      }
    }
  };

  const handleSkipStep = () => {
    if (currentStep && currentStep.canSkip) {
      skipStep(scenario.id, currentStep.id);
      if (isLastStep) {
        completeScenario(scenario.id);
      } else {
        advanceScenario(scenario.id);
        setShowHint(false);
      }
    }
  };

  const getStepStatus = (stepId: string): StepStatus => {
    return progress?.stepStatuses[stepId] || StepStatus.Pending;
  };

  if (!currentStep && !isCompleted) {
    return null;
  }

  return (
    <div className="scenario-runner-overlay">
      <div className="scenario-runner">
        {/* Header */}
        <div className="scenario-header">
          <div className="scenario-title-section">
            <span className="scenario-type-badge">{scenario.difficulty}</span>
            <h2 className="scenario-title">{scenario.title}</h2>
            <button className="scenario-close" onClick={onClose} aria-label="Close">
              ✕
            </button>
          </div>
          <p className="scenario-description">{scenario.description}</p>

          {/* Progress Bar */}
          <div className="scenario-progress-bar">
            <div
              className="scenario-progress-fill"
              style={{ width: `${((currentStepIndex + 1) / scenario.steps.length) * 100}%` }}
            />
          </div>
          <p className="scenario-progress-text">
            Step {currentStepIndex + 1} of {scenario.steps.length}
          </p>
        </div>

        {/* Content */}
        {isCompleted ? (
          // Completion View
          <div className="scenario-completion">
            <div className="completion-icon">🎉</div>
            <h3>Scenario Complete!</h3>
            <p className="completion-message">
              Congratulations! You've completed "{scenario.title}".
            </p>
            {scenario.reward && (
              <div className="completion-reward">
                <div className="reward-badge">
                  <span className="reward-icon">✨</span>
                  <span className="reward-text">{scenario.reward.description}</span>
                </div>
              </div>
            )}
            <div className="completion-stats">
              <div className="stat-item">
                <span className="stat-label">Steps Completed:</span>
                <span className="stat-value">
                  {scenario.steps.length - (progress?.skippedSteps?.length || 0)} / {scenario.steps.length}
                </span>
              </div>
              {progress?.skippedSteps && progress.skippedSteps.length > 0 && (
                <div className="stat-item">
                  <span className="stat-label">Steps Skipped:</span>
                  <span className="stat-value">{progress.skippedSteps.length}</span>
                </div>
              )}
            </div>
            <button className="completion-button" onClick={onClose}>
              Finish
            </button>
          </div>
        ) : (
          // Active Step View
          <div className="scenario-content">
            {/* Step Overview */}
            <div className="step-overview">
              <div className="step-number">Step {currentStep.order}</div>
              <h3 className="step-title">{currentStep.title}</h3>
            </div>

            {/* Step Instruction */}
            <div className="step-instruction-box">
              <h4>What to Do:</h4>
              <p className="step-instruction">{currentStep.instruction}</p>
            </div>

            {/* Orchard Metaphor */}
            <div className="step-metaphor-box">
              <span className="metaphor-icon">🌿</span>
              <div className="metaphor-content">
                <h4>In the Orchard:</h4>
                <p className="step-metaphor">{currentStep.orchardMetaphor}</p>
              </div>
            </div>

            {/* Expected Action */}
            {currentStep.expectedAction && (
              <div className="step-action-box">
                <span className="action-icon">⚡</span>
                <span className="action-text">Action: {currentStep.expectedAction}</span>
              </div>
            )}

            {/* Hint Section */}
            {currentStep.hint && (
              <div className="step-hint-section">
                {!showHint ? (
                  <button className="hint-toggle-button" onClick={() => setShowHint(true)}>
                    💡 Need a hint?
                  </button>
                ) : (
                  <div className="step-hint-box">
                    <span className="hint-icon">💡</span>
                    <p className="step-hint">{currentStep.hint}</p>
                  </div>
                )}
              </div>
            )}

            {/* Step List (Sidebar) */}
            <div className="steps-list">
              <h4>All Steps:</h4>
              {scenario.steps.map((step, index) => {
                const status = getStepStatus(step.id);
                const isCurrent = index === currentStepIndex;
                return (
                  <div
                    key={step.id}
                    className={`step-item ${isCurrent ? 'current' : ''} status-${status}`}
                  >
                    <span className="step-item-number">{step.order}</span>
                    <span className="step-item-title">{step.title}</span>
                    {status === StepStatus.Completed && <span className="step-item-check">✓</span>}
                    {status === StepStatus.Skipped && <span className="step-item-skip">⊘</span>}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Actions */}
        {!isCompleted && (
          <div className="scenario-actions">
            {currentStep.canSkip && (
              <button className="scenario-button secondary" onClick={handleSkipStep}>
                Skip Step
              </button>
            )}
            <button className="scenario-button primary" onClick={handleCompleteStep}>
              {isLastStep ? 'Complete Scenario ✓' : 'Mark Complete & Continue →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScenarioRunner;
