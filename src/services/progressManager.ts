/**
 * Progress Manager Service
 *
 * Handles exporting and importing all application state for backup/restore.
 */

import { useProgressStore } from '../state/useProgressStore';
import { useLessonStore } from '../state/useLessonStore';
import { useOrchardStore } from '../state/useOrchardStore';
import { useNPCStore } from '../state/useNPCStore';
import { useScenarioStore } from '../state/useScenarioStore';
import { useAchievementStore } from '../state/useAchievementStore';
import { useSettingsStore } from '../state/useSettingsStore';

export interface AppProgress {
  version: string;
  exportDate: string;
  data: {
    progress: any;
    lessons: any;
    orchard: any;
    npcs: any;
    scenarios: any;
    achievements: any;
    settings: any;
  };
}

const CURRENT_VERSION = '1.0.0';

/**
 * Export all application progress to a JSON object
 */
export function exportProgress(): AppProgress {
  return {
    version: CURRENT_VERSION,
    exportDate: new Date().toISOString(),
    data: {
      progress: useProgressStore.getState(),
      lessons: useLessonStore.getState(),
      orchard: useOrchardStore.getState(),
      npcs: useNPCStore.getState(),
      scenarios: useScenarioStore.getState(),
      achievements: useAchievementStore.getState(),
      settings: useSettingsStore.getState(),
    },
  };
}

/**
 * Export progress and download as JSON file
 */
export function downloadProgress(): void {
  const progress = exportProgress();
  const json = JSON.stringify(progress, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = `orchard-progress-${new Date().toISOString().split('T')[0]}.json`;
  a.click();

  URL.revokeObjectURL(url);
}

/**
 * Import progress from a JSON object
 */
export function importProgress(progress: AppProgress): boolean {
  try {
    // Validate version (basic check)
    if (!progress.version || !progress.data) {
      console.error('Invalid progress file format');
      return false;
    }

    // Import each store's state
    if (progress.data.progress) {
      const progressState = progress.data.progress;
      useProgressStore.setState(progressState);
    }

    if (progress.data.lessons) {
      const lessonState = progress.data.lessons;
      useLessonStore.setState(lessonState);
    }

    if (progress.data.orchard) {
      const orchardState = progress.data.orchard;
      useOrchardStore.setState(orchardState);
    }

    if (progress.data.npcs) {
      const npcState = progress.data.npcs;
      useNPCStore.setState(npcState);
    }

    if (progress.data.scenarios) {
      const scenarioState = progress.data.scenarios;
      useScenarioStore.setState(scenarioState);
    }

    if (progress.data.achievements) {
      const achievementState = progress.data.achievements;
      useAchievementStore.setState(achievementState);
    }

    if (progress.data.settings) {
      const settingsState = progress.data.settings;
      useSettingsStore.setState(settingsState);
    }

    return true;
  } catch (error) {
    console.error('Failed to import progress:', error);
    return false;
  }
}

/**
 * Upload and import progress from a file
 */
export function uploadProgress(file: File): Promise<boolean> {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const progress = JSON.parse(content) as AppProgress;
        const success = importProgress(progress);
        resolve(success);
      } catch (error) {
        console.error('Failed to parse progress file:', error);
        resolve(false);
      }
    };

    reader.onerror = () => {
      console.error('Failed to read progress file');
      resolve(false);
    };

    reader.readAsText(file);
  });
}

/**
 * Reset all progress (clear all stores)
 */
export function resetAllProgress(): void {
  // Clear localStorage
  localStorage.removeItem('orchard-quest-progress');
  localStorage.removeItem('orchard-map-state');
  localStorage.removeItem('orchard-npc-state');
  localStorage.removeItem('orchard-scenario-progress');
  localStorage.removeItem('orchard-achievements');
  // Don't clear settings - user preferences should persist

  // Reload the page to reinitialize all stores
  window.location.reload();
}

/**
 * Get progress summary statistics
 */
export function getProgressSummary() {
  const progressState = useProgressStore.getState();
  const scenarioState = useScenarioStore.getState();
  const achievementState = useAchievementStore.getState();

  const completedQuests = Array.from(progressState.questProgress.values()).filter(
    (p) => p.status === 'completed'
  ).length;
  const completedScenarios = Object.values(scenarioState.scenarioProgress).filter(
    (p) => p.completedAt !== undefined
  ).length;
  const unlockedAchievements = Object.keys(achievementState.achievements).length;

  return {
    completedQuests,
    completedScenarios,
    unlockedAchievements,
  };
}
