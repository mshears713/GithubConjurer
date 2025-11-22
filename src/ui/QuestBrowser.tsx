/**
 * Quest Browser Component
 *
 * Browse and select quests, showing status and filters.
 * Integrates Quest Viewer for selected quest.
 */

import React, { useState } from 'react';
import './QuestBrowser.css';
import { ALL_QUESTS } from '@content/generatedQuests';
import { QuestDefinition, QuestType } from '@content/types';
import { useProgressStore, QuestStatus } from '@state/useProgressStore';
import { useLessonStore } from '@state/useLessonStore';
import QuestViewer from './QuestViewer';
import { OrchardZone } from '@orchard/types';

interface QuestBrowserProps {
  onNavigateToRepos?: () => void;
}

const QuestBrowser: React.FC<QuestBrowserProps> = ({ onNavigateToRepos }) => {
  const [selectedQuest, setSelectedQuest] = useState<QuestDefinition | null>(null);
  const [filterZone, setFilterZone] = useState<OrchardZone | 'all'>('all');
  const [filterType, setFilterType] = useState<QuestType | 'all'>('all');
  const [filterStatus, setFilterStatus] = useState<QuestStatus | 'all'>('all');

  const { getQuestStatus, getCompletionPercentage } = useProgressStore();

  // Filter quests
  const filteredQuests = ALL_QUESTS.filter(quest => {
    if (filterType !== 'all' && quest.questType !== filterType) return false;
    if (filterStatus !== 'all' && getQuestStatus(quest.id) !== filterStatus) return false;
    if (filterZone !== 'all') {
      const lesson = useLessonStore.getState().getLessonById(quest.lessonId);
      if (!lesson || lesson.zone !== filterZone) return false;
    }
    return true;
  });

  // Get quest statistics
  const totalQuests = ALL_QUESTS.length;
  const completedQuests = ALL_QUESTS.filter(q => getQuestStatus(q.id) === QuestStatus.Completed).length;
  const availableQuests = ALL_QUESTS.filter(q => getQuestStatus(q.id) === QuestStatus.Available).length;
  const inProgressQuests = ALL_QUESTS.filter(q => getQuestStatus(q.id) === QuestStatus.InProgress).length;

  return (
    <div className="quest-browser">
      <div className="browser-header">
        <h1>🗺️ Quest Log</h1>
        <div className="quest-stats">
          <span className="stat">
            ✅ Completed: <strong>{completedQuests}</strong>/{totalQuests}
          </span>
          <span className="stat">
            ⚡ Available: <strong>{availableQuests}</strong>
          </span>
          <span className="stat">
            🌱 In Progress: <strong>{inProgressQuests}</strong>
          </span>
          <span className="stat">
            Progress: <strong>{getCompletionPercentage()}%</strong>
          </span>
        </div>
      </div>

      <div className="browser-filters">
        <label>
          Zone:
          <select value={filterZone} onChange={(e) => setFilterZone(e.target.value as OrchardZone | 'all')}>
            <option value="all">All Zones</option>
            <option value={OrchardZone.InnerClearing}>🌱 Inner Clearing</option>
            <option value={OrchardZone.Trunk}>🌿 Trunk Region</option>
            <option value={OrchardZone.Canopy}>🍃 Canopy</option>
            <option value={OrchardZone.Edge}>🌳 Orchard Edge</option>
            <option value={OrchardZone.Conservatory}>🏡 Conservatory</option>
            <option value={OrchardZone.Perimeter}>🚶 Perimeter Trail</option>
          </select>
        </label>

        <label>
          Type:
          <select value={filterType} onChange={(e) => setFilterType(e.target.value as QuestType | 'all')}>
            <option value="all">All Types</option>
            <option value={QuestType.Quest}>⚔️ Quests</option>
            <option value={QuestType.Advice}>💬 Advice</option>
            <option value={QuestType.CultivationTask}>🌱 Tasks</option>
          </select>
        </label>

        <label>
          Status:
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value as QuestStatus | 'all')}>
            <option value="all">All Status</option>
            <option value={QuestStatus.Available}>✨ Available</option>
            <option value={QuestStatus.InProgress}>🌱 In Progress</option>
            <option value={QuestStatus.Completed}>✅ Completed</option>
            <option value={QuestStatus.Locked}>🔒 Locked</option>
          </select>
        </label>
      </div>

      <div className="browser-content">
        <div className="quest-list">
          <p className="quest-count">{filteredQuests.length} quests</p>
          {filteredQuests.map(quest => {
            const status = getQuestStatus(quest.id);
            const lesson = useLessonStore.getState().getLessonById(quest.lessonId);

            return (
              <div
                key={quest.id}
                className={`quest-card ${selectedQuest?.id === quest.id ? 'selected' : ''} status-${status}`}
                onClick={() => setSelectedQuest(quest)}
              >
                <div className="quest-card-header">
                  <span className="quest-type-icon">
                    {quest.questType === QuestType.Advice && '💬'}
                    {quest.questType === QuestType.Quest && '⚔️'}
                    {quest.questType === QuestType.CultivationTask && '🌱'}
                  </span>
                  <h3 className="quest-card-title">{quest.title}</h3>
                  <span className={`status-icon status-${status}`}>
                    {status === QuestStatus.Locked && '🔒'}
                    {status === QuestStatus.Available && '✨'}
                    {status === QuestStatus.InProgress && '🌱'}
                    {status === QuestStatus.Completed && '✅'}
                  </span>
                </div>
                <p className="quest-card-description">{quest.description}</p>
                <div className="quest-card-footer">
                  {lesson && (
                    <span className="quest-zone">
                      {lesson.zone}
                    </span>
                  )}
                  {quest.difficulty && (
                    <span className={`quest-difficulty diff-${quest.difficulty}`}>
                      {quest.difficulty}
                    </span>
                  )}
                  {quest.estimatedMinutes && (
                    <span className="quest-time">⏱️ {quest.estimatedMinutes}min</span>
                  )}
                </div>
              </div>
            );
          })}

          {filteredQuests.length === 0 && (
            <div className="no-quests">
              <p>No quests match your filters</p>
              <p>Try adjusting the filters above</p>
            </div>
          )}
        </div>

        {selectedQuest && (
          <div className="quest-viewer-panel">
            <QuestViewer
              quest={selectedQuest}
              onClose={() => setSelectedQuest(null)}
              onNavigateToRepos={onNavigateToRepos}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestBrowser;
