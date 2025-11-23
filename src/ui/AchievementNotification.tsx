/**
 * Achievement Notification Component
 *
 * Shows a toast notification when achievements are unlocked.
 */

import React, { useEffect, useState } from 'react';
import './AchievementNotification.css';
import { useAchievementStore } from '@state/useAchievementStore';
import { ALL_ACHIEVEMENTS } from '../achievements/definitions';

const AchievementNotification: React.FC = () => {
  const { recentlyUnlocked, markAchievementSeen, clearRecentlyUnlocked } = useAchievementStore();
  const [currentAchievementId, setCurrentAchievementId] = useState<string | null>(null);

  useEffect(() => {
    if (recentlyUnlocked.length > 0 && !currentAchievementId) {
      // Show next achievement
      setCurrentAchievementId(recentlyUnlocked[0]);
    }
  }, [recentlyUnlocked, currentAchievementId]);

  const handleClose = () => {
    if (currentAchievementId) {
      markAchievementSeen(currentAchievementId);
      setCurrentAchievementId(null);

      // If no more achievements to show, clear the list
      if (recentlyUnlocked.length === 1) {
        clearRecentlyUnlocked();
      }
    }
  };

  if (!currentAchievementId) return null;

  const achievement = ALL_ACHIEVEMENTS.find(a => a.id === currentAchievementId);
  if (!achievement) return null;

  return (
    <div className="achievement-notification-container">
      <div className={`achievement-notification rarity-${achievement.rarity}`}>
        <div className="achievement-header">
          <span className="achievement-icon-large">{achievement.icon}</span>
          <div className="achievement-text">
            <h3>Achievement Unlocked!</h3>
            <h2>{achievement.title}</h2>
          </div>
          <button className="notification-close" onClick={handleClose} aria-label="Close">
            ✕
          </button>
        </div>
        <p className="achievement-description">{achievement.description}</p>
        <div className="achievement-reward">
          <span className="reward-icon">✨</span>
          <span className="reward-text">{achievement.visualEffect}</span>
        </div>
        <div className="achievement-footer">
          <span className={`rarity-badge rarity-${achievement.rarity}`}>
            {achievement.rarity.toUpperCase()}
          </span>
          <button className="continue-button" onClick={handleClose}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default AchievementNotification;
