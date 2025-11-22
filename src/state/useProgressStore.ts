/**
 * Progress Store
 *
 * Tracks user progress through quests and lessons.
 * Persists to local storage.
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export enum QuestStatus {
  Locked = 'locked',
  Available = 'available',
  InProgress = 'in-progress',
  Completed = 'completed',
}

interface QuestProgress {
  questId: string;
  status: QuestStatus;
  completedSteps: number[];
  startedAt?: Date;
  completedAt?: Date;
}

interface ProgressStore {
  questProgress: Map<string, QuestProgress>;
  completedLessons: Set<string>;

  getQuestStatus: (questId: string) => QuestStatus;
  startQuest: (questId: string) => void;
  completeQuestStep: (questId: string, stepNumber: number) => void;
  completeQuest: (questId: string) => void;
  markLessonComplete: (lessonId: string) => void;
  isLessonComplete: (lessonId: string) => boolean;
  getCompletionPercentage: () => number;
}

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set, get) => ({
      questProgress: new Map(),
      completedLessons: new Set(),

      getQuestStatus: (questId) => {
        const progress = get().questProgress.get(questId);
        return progress?.status ?? QuestStatus.Locked;
      },

      startQuest: (questId) => {
        const progress = get().questProgress;
        progress.set(questId, {
          questId,
          status: QuestStatus.InProgress,
          completedSteps: [],
          startedAt: new Date(),
        });
        set({ questProgress: new Map(progress) });
      },

      completeQuestStep: (questId, stepNumber) => {
        const progress = get().questProgress;
        const questData = progress.get(questId);
        if (questData && !questData.completedSteps.includes(stepNumber)) {
          questData.completedSteps.push(stepNumber);
          questData.completedSteps.sort((a, b) => a - b);
          progress.set(questId, questData);
          set({ questProgress: new Map(progress) });
        }
      },

      completeQuest: (questId) => {
        const progress = get().questProgress;
        const questData = progress.get(questId);
        if (questData) {
          questData.status = QuestStatus.Completed;
          questData.completedAt = new Date();
          progress.set(questId, questData);
          set({ questProgress: new Map(progress) });
        }
      },

      markLessonComplete: (lessonId) => {
        const completed = get().completedLessons;
        completed.add(lessonId);
        set({ completedLessons: new Set(completed) });
      },

      isLessonComplete: (lessonId) => {
        return get().completedLessons.has(lessonId);
      },

      getCompletionPercentage: () => {
        const total = get().questProgress.size;
        if (total === 0) return 0;
        const completed = Array.from(get().questProgress.values()).filter(
          (p) => p.status === QuestStatus.Completed
        ).length;
        return Math.round((completed / total) * 100);
      },
    }),
    {
      name: 'orchard-progress',
      // Custom serialization for Map and Set
      storage: {
        getItem: (name) => {
          const str = localStorage.getItem(name);
          if (!str) return null;
          const data = JSON.parse(str);
          return {
            state: {
              ...data.state,
              questProgress: new Map(data.state.questProgress),
              completedLessons: new Set(data.state.completedLessons),
            },
          };
        },
        setItem: (name, value) => {
          const data = {
            state: {
              ...value.state,
              questProgress: Array.from(value.state.questProgress.entries()),
              completedLessons: Array.from(value.state.completedLessons),
            },
          };
          localStorage.setItem(name, JSON.stringify(data));
        },
        removeItem: (name) => localStorage.removeItem(name),
      },
    }
  )
);
