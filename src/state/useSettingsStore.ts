/**
 * Settings Store
 *
 * Manages user preferences and settings with localStorage persistence.
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface AppSettings {
  // Appearance
  theme: 'light' | 'dark' | 'auto';
  textSize: 'small' | 'medium' | 'large';

  // Dialogue
  dialogueSpeed: 'slow' | 'normal' | 'fast';
  autoAdvanceDialogue: boolean;

  // Tutorials & Hints
  showTutorialHints: boolean;
  showOrchardMetaphors: boolean;

  // Audio (for future use)
  soundEffectsEnabled: boolean;
  musicEnabled: boolean;
  volume: number; // 0-100

  // Advanced
  developerMode: boolean;
}

interface SettingsStore {
  settings: AppSettings;
  updateSettings: (partial: Partial<AppSettings>) => void;
  resetSettings: () => void;
}

const DEFAULT_SETTINGS: AppSettings = {
  theme: 'auto',
  textSize: 'medium',
  dialogueSpeed: 'normal',
  autoAdvanceDialogue: false,
  showTutorialHints: true,
  showOrchardMetaphors: true,
  soundEffectsEnabled: true,
  musicEnabled: false,
  volume: 70,
  developerMode: false,
};

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      settings: DEFAULT_SETTINGS,

      updateSettings: (partial) =>
        set((state) => ({
          settings: { ...state.settings, ...partial },
        })),

      resetSettings: () =>
        set({ settings: DEFAULT_SETTINGS }),
    }),
    {
      name: 'orchard-settings',
    }
  )
);
