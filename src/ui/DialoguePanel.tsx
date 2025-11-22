/**
 * Dialogue Panel Component
 *
 * Displays NPC dialogue with text and choices.
 */

import React from 'react';
import './DialoguePanel.css';
import { useNPCStore } from '@state/useNPCStore';
import { ALL_NPCS } from '@npc/characters';
import { useProgressStore } from '@state/useProgressStore';

const DialoguePanel: React.FC = () => {
  const { currentDialogue, activeNPCId, advanceDialogue, endDialogue } = useNPCStore();
  const { startQuest } = useProgressStore();

  if (!currentDialogue || !activeNPCId) return null;

  const npc = ALL_NPCS.find(n => n.id === activeNPCId);
  if (!npc) return null;

  const hasChoices = currentDialogue.choices && currentDialogue.choices.length > 0;

  const handleContinue = () => {
    // If this dialogue triggers a quest, start it
    if (currentDialogue.triggerQuest) {
      startQuest(currentDialogue.triggerQuest);
    }
    advanceDialogue();
  };

  const handleChoice = (choiceIndex: number) => {
    // If this dialogue triggers a quest, start it
    if (currentDialogue.triggerQuest) {
      startQuest(currentDialogue.triggerQuest);
    }
    advanceDialogue(choiceIndex);
  };

  const handleClose = () => {
    endDialogue();
  };

  return (
    <div className="dialogue-panel-overlay">
      <div className="dialogue-panel">
        {/* NPC Header */}
        <div className="dialogue-header">
          <div className="npc-portrait-large">{npc.portraitIcon}</div>
          <div className="npc-details">
            <h2 className="npc-name-large">{npc.name}</h2>
            <p className="npc-role-large">{npc.role}</p>
          </div>
          <button className="dialogue-close" onClick={handleClose} aria-label="Close dialogue">
            ✕
          </button>
        </div>

        {/* Dialogue Text */}
        <div className="dialogue-content">
          <div className="dialogue-text-box">
            <p className="dialogue-text">{currentDialogue.text}</p>
          </div>

          {/* Quest Trigger Indicator */}
          {currentDialogue.triggerQuest && (
            <div className="dialogue-quest-indicator">
              <span className="quest-icon">📜</span>
              <span>This will start a new quest</span>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="dialogue-actions">
          {hasChoices ? (
            // Show choices
            <div className="dialogue-choices">
              {currentDialogue.choices!.map((choice, index) => (
                <button
                  key={index}
                  className="dialogue-choice-button"
                  onClick={() => handleChoice(index)}
                >
                  {choice.text}
                </button>
              ))}
            </div>
          ) : (
            // Show continue button
            <button className="dialogue-continue-button" onClick={handleContinue}>
              {currentDialogue.nextNodeId ? 'Continue →' : 'Finish'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DialoguePanel;
