/**
 * Orchard View Component
 *
 * Main view for the orchard map experience.
 * Integrates OrchardMap with quest interaction and HUD.
 */

import React, { useState } from 'react';
import './OrchardView.css';
import OrchardMap from '@orchard/OrchardMap';
import QuestViewer from './QuestViewer';
import { MapTree } from '@orchard/mapData';
import { useProgressStore } from '@state/useProgressStore';
import { getQuestById } from '@content/generatedQuests';
import { ALL_NPCS } from '@npc/characters';
import { useRepoStore } from '@state/useRepoStore';

const OrchardView: React.FC = () => {
  const [selectedQuestId, setSelectedQuestId] = useState<string | null>(null);
  const [selectedNPCId, setSelectedNPCId] = useState<string | null>(null);
  const { getCompletionPercentage } = useProgressStore();
  const { repos, getActiveRepo } = useRepoStore();
  const activeRepo = getActiveRepo();

  // Handle tree click - show first quest associated with tree
  const handleTreeClick = (tree: MapTree) => {
    if (tree.questIds.length > 0) {
      setSelectedQuestId(tree.questIds[0]);
      setSelectedNPCId(null);
    }
  };

  // Handle NPC click - show NPC info/dialogue
  const handleNPCClick = (npcId: string) => {
    setSelectedNPCId(npcId);
    setSelectedQuestId(null);
  };

  // Close quest viewer
  const handleCloseQuest = () => {
    setSelectedQuestId(null);
  };

  // Close NPC dialogue
  const handleCloseNPC = () => {
    setSelectedNPCId(null);
  };

  const selectedQuest = selectedQuestId ? getQuestById(selectedQuestId) : null;
  const selectedNPC = selectedNPCId ? ALL_NPCS.find(n => n.id === selectedNPCId) : null;

  return (
    <div className="orchard-view">
      {/* HUD Overlay */}
      <div className="orchard-hud">
        <div className="hud-stats">
          <span className="hud-stat">
            🌳 <strong>{getCompletionPercentage()}%</strong> Complete
          </span>
          {repos.length > 0 && (
            <span className="hud-stat">
              🌲 <strong>{repos.length}</strong> {repos.length === 1 ? 'Repository' : 'Repositories'}
            </span>
          )}
          {activeRepo && (
            <span className="hud-stat">
              {activeRepo.repo.isClean ? '✓' : '🌿'} <strong>{activeRepo.repo.name}</strong>
            </span>
          )}
        </div>
      </div>

      {/* Map */}
      <div className="orchard-map-wrapper">
        <OrchardMap
          onTreeClick={handleTreeClick}
          onNPCClick={handleNPCClick}
        />
      </div>

      {/* Quest Viewer Overlay */}
      {selectedQuest && (
        <div className="orchard-quest-overlay">
          <QuestViewer
            quest={selectedQuest}
            onClose={handleCloseQuest}
          />
        </div>
      )}

      {/* NPC Dialogue Overlay */}
      {selectedNPC && (
        <div className="orchard-npc-overlay">
          <div className="npc-dialogue-panel">
            <button className="close-button" onClick={handleCloseNPC}>×</button>
            <div className="npc-header">
              <span className="npc-portrait">{selectedNPC.portraitIcon}</span>
              <div className="npc-info">
                <h2>{selectedNPC.name}</h2>
                <p className="npc-title">{selectedNPC.role}</p>
              </div>
            </div>
            <div className="npc-dialogue">
              <p>{selectedNPC.personality}</p>
              <p className="npc-greeting">
                &quot;Welcome to my part of the orchard! I can help you with {selectedNPC.areas.join(', ')}.&quot;
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrchardView;
