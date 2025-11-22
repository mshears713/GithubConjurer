/**
 * Settings Panel Component
 *
 * User settings and preferences UI.
 */

import React, { useRef } from 'react';
import './SettingsPanel.css';
import { useSettingsStore } from '../state/useSettingsStore';
import {
  downloadProgress,
  uploadProgress,
  resetAllProgress,
  getProgressSummary,
} from '../services/progressManager';

interface SettingsPanelProps {
  onClose: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ onClose }) => {
  const { settings, updateSettings, resetSettings } = useSettingsStore();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const summary = getProgressSummary();

  const handleReset = () => {
    if (confirm('Reset all settings to defaults? This cannot be undone.')) {
      resetSettings();
    }
  };

  const handleExport = () => {
    downloadProgress();
  };

  const handleImport = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const success = await uploadProgress(file);
    if (success) {
      alert('Progress imported successfully! The page will reload.');
      window.location.reload();
    } else {
      alert('Failed to import progress. Please check the file and try again.');
    }
  };

  const handleResetProgress = () => {
    if (confirm('⚠️ WARNING: This will delete ALL your progress, quests, achievements, and scenario completions. This cannot be undone!\n\nAre you absolutely sure?')) {
      if (confirm('Last chance! Really reset everything?')) {
        resetAllProgress();
      }
    }
  };

  return (
    <div className="settings-overlay" onClick={onClose}>
      <div className="settings-panel" onClick={(e) => e.stopPropagation()}>
        <div className="settings-header">
          <h2>⚙️ Settings</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <div className="settings-content">
          {/* Appearance Section */}
          <section className="settings-section">
            <h3>🎨 Appearance</h3>

            <div className="setting-item">
              <label htmlFor="theme">Theme</label>
              <select
                id="theme"
                value={settings.theme}
                onChange={(e) => updateSettings({ theme: e.target.value as 'light' | 'dark' | 'auto' })}
              >
                <option value="auto">Auto (System)</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
              <p className="setting-description">Choose your preferred color scheme</p>
            </div>

            <div className="setting-item">
              <label htmlFor="textSize">Text Size</label>
              <select
                id="textSize"
                value={settings.textSize}
                onChange={(e) => updateSettings({ textSize: e.target.value as 'small' | 'medium' | 'large' })}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
              <p className="setting-description">Adjust text size for comfort</p>
            </div>
          </section>

          {/* Dialogue Section */}
          <section className="settings-section">
            <h3>💬 Dialogue & NPCs</h3>

            <div className="setting-item">
              <label htmlFor="dialogueSpeed">Dialogue Speed</label>
              <select
                id="dialogueSpeed"
                value={settings.dialogueSpeed}
                onChange={(e) => updateSettings({ dialogueSpeed: e.target.value as 'slow' | 'normal' | 'fast' })}
              >
                <option value="slow">Slow</option>
                <option value="normal">Normal</option>
                <option value="fast">Fast</option>
              </select>
              <p className="setting-description">How quickly dialogue text appears</p>
            </div>

            <div className="setting-item">
              <label htmlFor="autoAdvance">
                <input
                  type="checkbox"
                  id="autoAdvance"
                  checked={settings.autoAdvanceDialogue}
                  onChange={(e) => updateSettings({ autoAdvanceDialogue: e.target.checked })}
                />
                Auto-advance dialogue
              </label>
              <p className="setting-description">Automatically continue to next dialogue after a delay</p>
            </div>
          </section>

          {/* Tutorials & Hints Section */}
          <section className="settings-section">
            <h3>📚 Tutorials & Hints</h3>

            <div className="setting-item">
              <label htmlFor="tutorialHints">
                <input
                  type="checkbox"
                  id="tutorialHints"
                  checked={settings.showTutorialHints}
                  onChange={(e) => updateSettings({ showTutorialHints: e.target.checked })}
                />
                Show tutorial hints
              </label>
              <p className="setting-description">Display helpful tips and guidance throughout the app</p>
            </div>

            <div className="setting-item">
              <label htmlFor="orchardMetaphors">
                <input
                  type="checkbox"
                  id="orchardMetaphors"
                  checked={settings.showOrchardMetaphors}
                  onChange={(e) => updateSettings({ showOrchardMetaphors: e.target.checked })}
                />
                Show orchard metaphors
              </label>
              <p className="setting-description">Display Git concepts using orchard terminology</p>
            </div>
          </section>

          {/* Audio Section */}
          <section className="settings-section">
            <h3>🔊 Audio</h3>

            <div className="setting-item">
              <label htmlFor="soundEffects">
                <input
                  type="checkbox"
                  id="soundEffects"
                  checked={settings.soundEffectsEnabled}
                  onChange={(e) => updateSettings({ soundEffectsEnabled: e.target.checked })}
                />
                Sound effects
              </label>
              <p className="setting-description">Play sounds for actions and achievements</p>
            </div>

            <div className="setting-item">
              <label htmlFor="music">
                <input
                  type="checkbox"
                  id="music"
                  checked={settings.musicEnabled}
                  onChange={(e) => updateSettings({ musicEnabled: e.target.checked })}
                />
                Background music
              </label>
              <p className="setting-description">Play ambient music while tending your orchard</p>
            </div>

            <div className="setting-item">
              <label htmlFor="volume">Volume: {settings.volume}%</label>
              <input
                type="range"
                id="volume"
                min="0"
                max="100"
                value={settings.volume}
                onChange={(e) => updateSettings({ volume: parseInt(e.target.value) })}
                disabled={!settings.soundEffectsEnabled && !settings.musicEnabled}
              />
            </div>
          </section>

          {/* Progress Section */}
          <section className="settings-section">
            <h3>💾 Save & Load Progress</h3>

            <div className="progress-summary">
              <p><strong>Your Progress:</strong></p>
              <ul>
                <li>🎯 Quests Completed: {summary.completedQuests}</li>
                <li>🌱 Scenarios Completed: {summary.completedScenarios}</li>
                <li>🏆 Achievements Unlocked: {summary.unlockedAchievements}</li>
              </ul>
            </div>

            <div className="setting-item">
              <label>Backup & Restore</label>
              <div className="button-group">
                <button className="action-button export-button" onClick={handleExport}>
                  📥 Export Progress
                </button>
                <button className="action-button import-button" onClick={handleImport}>
                  📤 Import Progress
                </button>
              </div>
              <p className="setting-description">
                Export your progress to a file for backup, or import from a previous backup
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </div>

            <div className="setting-item danger-zone">
              <label>⚠️ Danger Zone</label>
              <button className="action-button danger-button" onClick={handleResetProgress}>
                🗑️ Reset All Progress
              </button>
              <p className="setting-description warning-text">
                This will permanently delete all your progress, quests, achievements, and scenarios. This cannot be undone!
              </p>
            </div>
          </section>

          {/* Advanced Section */}
          <section className="settings-section">
            <h3>🔧 Advanced</h3>

            <div className="setting-item">
              <label htmlFor="developerMode">
                <input
                  type="checkbox"
                  id="developerMode"
                  checked={settings.developerMode}
                  onChange={(e) => updateSettings({ developerMode: e.target.checked })}
                />
                Developer mode
              </label>
              <p className="setting-description">Show additional debugging information and tools</p>
            </div>
          </section>
        </div>

        <div className="settings-footer">
          <button className="reset-button" onClick={handleReset}>
            Reset to Defaults
          </button>
          <button className="primary-button" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
