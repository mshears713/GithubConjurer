/**
 * Scenario Store
 *
 * Manages scenario progress and state.
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ScenarioProgress, StepStatus } from '@scenarios/types';

interface ScenarioStore {
  scenarioProgress: Record<string, ScenarioProgress>;
  currentScenarioId: string | null;

  startScenario: (scenarioId: string) => void;
  completeStep: (scenarioId: string, stepId: string) => void;
  skipStep: (scenarioId: string, stepId: string) => void;
  advanceScenario: (scenarioId: string) => void;
  completeScenario: (scenarioId: string) => void;
  getScenarioProgress: (scenarioId: string) => ScenarioProgress | null;
  isScenarioCompleted: (scenarioId: string) => boolean;
  getCurrentStep: (scenarioId: string) => number;
}

export const useScenarioStore = create<ScenarioStore>()(
  persist(
    (set, get) => ({
      scenarioProgress: {},
      currentScenarioId: null,

      startScenario: (scenarioId) => {
        const progress: ScenarioProgress = {
          scenarioId,
          startedAt: new Date(),
          currentStepIndex: 0,
          stepStatuses: {},
          skippedSteps: [],
        };

        set((state) => ({
          scenarioProgress: {
            ...state.scenarioProgress,
            [scenarioId]: progress,
          },
          currentScenarioId: scenarioId,
        }));
      },

      completeStep: (scenarioId, stepId) => {
        const progress = get().scenarioProgress[scenarioId];
        if (!progress) return;

        const updatedProgress = {
          ...progress,
          stepStatuses: {
            ...progress.stepStatuses,
            [stepId]: StepStatus.Completed,
          },
        };

        set((state) => ({
          scenarioProgress: {
            ...state.scenarioProgress,
            [scenarioId]: updatedProgress,
          },
        }));
      },

      skipStep: (scenarioId, stepId) => {
        const progress = get().scenarioProgress[scenarioId];
        if (!progress) return;

        const updatedProgress = {
          ...progress,
          stepStatuses: {
            ...progress.stepStatuses,
            [stepId]: StepStatus.Skipped,
          },
          skippedSteps: [...progress.skippedSteps, stepId],
        };

        set((state) => ({
          scenarioProgress: {
            ...state.scenarioProgress,
            [scenarioId]: updatedProgress,
          },
        }));
      },

      advanceScenario: (scenarioId) => {
        const progress = get().scenarioProgress[scenarioId];
        if (!progress) return;

        const updatedProgress = {
          ...progress,
          currentStepIndex: progress.currentStepIndex + 1,
        };

        set((state) => ({
          scenarioProgress: {
            ...state.scenarioProgress,
            [scenarioId]: updatedProgress,
          },
        }));
      },

      completeScenario: (scenarioId) => {
        const progress = get().scenarioProgress[scenarioId];
        if (!progress) return;

        const updatedProgress = {
          ...progress,
          completedAt: new Date(),
        };

        set((state) => ({
          scenarioProgress: {
            ...state.scenarioProgress,
            [scenarioId]: updatedProgress,
          },
          currentScenarioId: null,
        }));
      },

      getScenarioProgress: (scenarioId) => {
        return get().scenarioProgress[scenarioId] || null;
      },

      isScenarioCompleted: (scenarioId) => {
        const progress = get().scenarioProgress[scenarioId];
        return progress?.completedAt !== undefined;
      },

      getCurrentStep: (scenarioId) => {
        const progress = get().scenarioProgress[scenarioId];
        return progress?.currentStepIndex || 0;
      },
    }),
    {
      name: 'scenario-storage',
      partialize: (state) => ({
        scenarioProgress: state.scenarioProgress,
      }),
    }
  )
);
