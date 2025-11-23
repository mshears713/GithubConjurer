/**
 * Achievement Store
 *
 * Manages achievement progress and unlocks.
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AchievementProgress } from '../achievements/types';
import { ALL_ACHIEVEMENTS } from '../achievements/definitions';

interface AchievementStore {
  achievements: Record<string, AchievementProgress>;
  recentlyUnlocked: string[];  // Achievement IDs

  unlockAchievement: (achievementId: string) => void;
  markAchievementSeen: (achievementId: string) => void;
  isAchievementUnlocked: (achievementId: string) => boolean;
  getUnlockedCount: () => number;
  getUnlockedByCategory: (category: string) => number;
  clearRecentlyUnlocked: () => void;
}

export const useAchievementStore = create<AchievementStore>()(
  persist(
    (set, get) => ({
      achievements: {},
      recentlyUnlocked: [],

      unlockAchievement: (achievementId) => {
        const achievements = get().achievements;
        if (achievements[achievementId]?.unlockedAt) {
          // Already unlocked
          return;
        }

        const progress: AchievementProgress = {
          achievementId,
          unlockedAt: new Date(),
          seen: false,
        };

        set((state) => ({
          achievements: {
            ...state.achievements,
            [achievementId]: progress,
          },
          recentlyUnlocked: [...state.recentlyUnlocked, achievementId],
        }));
      },

      markAchievementSeen: (achievementId) => {
        const achievement = get().achievements[achievementId];
        if (!achievement) return;

        set((state) => ({
          achievements: {
            ...state.achievements,
            [achievementId]: {
              ...achievement,
              seen: true,
            },
          },
        }));
      },

      isAchievementUnlocked: (achievementId) => {
        return get().achievements[achievementId]?.unlockedAt !== undefined;
      },

      getUnlockedCount: () => {
        return Object.values(get().achievements).filter(a => a.unlockedAt).length;
      },

      getUnlockedByCategory: (category) => {
        const unlockedIds = Object.keys(get().achievements).filter(
          id => get().achievements[id]?.unlockedAt
        );
        return ALL_ACHIEVEMENTS.filter(
          a => a.category === category && unlockedIds.includes(a.id)
        ).length;
      },

      clearRecentlyUnlocked: () => {
        set({ recentlyUnlocked: [] });
      },
    }),
    {
      name: 'achievement-storage',
      partialize: (state) => ({
        achievements: state.achievements,
      }),
    }
  )
);
