/**
 * Quest Viewer Component
 *
 * Displays quest details, steps, and progress.
 * Shows NPC dialogue and orchard narrative.
 */

import React from 'react';
import './QuestViewer.css';
import { QuestDefinition, QuestType } from '@content/types';
import { useProgressStore, QuestStatus } from '@state/useProgressStore';
import { useOrchardStore } from '@state/useOrchardStore';
import { ALL_NPCS } from '@npc/characters';

interface QuestViewerProps {
  quest: QuestDefinition;
  onClose?: () => void;
}

const QuestViewer: React.FC<QuestViewerProps> = ({ quest, onClose }) => {
  const { getQuestStatus, startQuest, completeQuest } = useProgressStore();
  const { checkAndUnlockZones } = useOrchardStore();
  const questStatus = getQuestStatus(quest.id);

  // Get NPC info
  const npc = ALL_NPCS.find(n => n.id === quest.npcInvolved);

  const handleBeginQuest = () => {
    startQuest(quest.id);
  };

  const handleCompleteQuest = () => {
    completeQuest(quest.id);
    // Check if completing this quest unlocks any zones
    checkAndUnlockZones();
  };

  const isLocked = questStatus === QuestStatus.Locked;
  const isCompleted = questStatus === QuestStatus.Completed;
  const isInProgress = questStatus === QuestStatus.InProgress;
  const isAvailable = questStatus === QuestStatus.Available;

  return (
    <div className="quest-viewer">
      {/* Header */}
      <div className="quest-header">
        <div className="quest-header-content">
          <div className="quest-type-badge">
            {quest.questType === QuestType.Advice && '💬 Advice'}
            {quest.questType === QuestType.Quest && '⚔️ Quest'}
            {quest.questType === QuestType.CultivationTask && '🌱 Task'}
          </div>
          <h1 className="quest-title">{quest.title}</h1>
          {onClose && (
            <button className="close-button" onClick={onClose} aria-label="Close">
              ✕
            </button>
          )}
        </div>

        {/* NPC Section */}
        {npc && (
          <div className="quest-npc">
            <span className="npc-icon">{npc.portraitIcon}</span>
            <div className="npc-info">
              <span className="npc-name">{npc.name}</span>
              <span className="npc-role">{npc.role}</span>
            </div>
          </div>
        )}

        {/* Status Badge */}
        <div className={`quest-status-badge status-${questStatus}`}>
          {isLocked && '🔒 Locked'}
          {isAvailable && '✨ Available'}
          {isInProgress && '🌱 In Progress'}
          {isCompleted && '✅ Completed'}
        </div>
      </div>

      {/* Content */}
      <div className="quest-content">
        {/* Orchard Narrative */}
        <section className="quest-section narrative-section">
          <h2>🌳 In the Orchard</h2>
          <p className="orchard-narrative">{quest.orchardNarrative}</p>
        </section>

        {/* Description */}
        <section className="quest-section">
          <h2>Quest Objective</h2>
          <p className="quest-description">{quest.description}</p>
        </section>

        {/* Git Concept */}
        <section className="quest-section git-section">
          <h2>📚 Git Concept: {quest.gitConcept}</h2>
          <p className="git-explanation">{quest.gitExplanation}</p>
        </section>

        {/* Quest Steps */}
        {quest.steps.length > 0 && (
          <section className="quest-section steps-section">
            <h2>Steps</h2>
            <div className="quest-steps">
              {quest.steps.map((step) => (
                <div key={step.order} className="quest-step">
                  <div className="step-header">
                    <span className="step-number">{step.order}</span>
                    <h3 className="step-instruction">{step.instruction}</h3>
                  </div>
                  <p className="step-metaphor">
                    <span className="metaphor-icon">🌿</span>
                    {step.orchardMetaphor}
                  </p>
                  {step.hint && (
                    <p className="step-hint">
                      <span className="hint-icon">💡</span>
                      {step.hint}
                    </p>
                  )}
                  {step.gitAction && (
                    <p className="step-git-action">
                      <code>{step.gitAction}</code>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Completion Criteria */}
        <section className="quest-section">
          <h2>Success Criteria</h2>
          <p className="completion-criteria">{quest.completionCriteria}</p>
        </section>

        {/* Reward */}
        <section className="quest-section reward-section">
          <h2>🎁 Reward</h2>
          <div className="reward-info">
            <p className="reward-description">{quest.reward.description}</p>
            <p className="reward-effect">
              <span className="effect-icon">✨</span>
              {quest.reward.visualEffect}
            </p>
          </div>
        </section>

        {/* Meta Info */}
        <div className="quest-meta">
          {quest.difficulty && (
            <span className="meta-item">
              Difficulty: <strong>{quest.difficulty}</strong>
            </span>
          )}
          {quest.estimatedMinutes && (
            <span className="meta-item">
              Estimated time: <strong>{quest.estimatedMinutes} min</strong>
            </span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="quest-actions">
        {isLocked && (
          <div className="locked-message">
            <p>🔒 Complete prerequisite quests to unlock this quest</p>
          </div>
        )}

        {isAvailable && (
          <button className="quest-button primary" onClick={handleBeginQuest}>
            Begin Quest
          </button>
        )}

        {isInProgress && (
          <>
            <button className="quest-button secondary">
              Continue Quest
            </button>
            <button className="quest-button primary" onClick={handleCompleteQuest}>
              Mark as Complete
            </button>
          </>
        )}

        {isCompleted && (
          <div className="completed-message">
            <p>✅ Quest completed! Well done, gardener.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestViewer;
