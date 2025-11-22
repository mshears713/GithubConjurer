/**
 * Orchard Store
 *
 * Manages orchard map state, tree visualization, zone unlocking,
 * and player position.
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { OrchardZone, TreeData, OrchardMapData } from '@orchard/types';
import { DEFAULT_MAP_CONFIG } from '@orchard/mapData';
import { useProgressStore, QuestStatus } from './useProgressStore';

interface OrchardStore extends OrchardMapData {
  setTrees: (trees: TreeData[]) => void;
  updateTree: (treeId: string, updates: Partial<TreeData>) => void;
  unlockZone: (zone: OrchardZone) => void;
  isZoneUnlocked: (zone: OrchardZone) => boolean;
  setPlayerPosition: (position: { x: number; y: number }) => void;
  checkAndUnlockZones: () => void;
}

export const useOrchardStore = create<OrchardStore>()(
  persist(
    (set, get) => ({
      trees: [],
      unlockedZones: [OrchardZone.InnerClearing], // Start with first zone unlocked
      currentPlayerPosition: { x: 0, y: 0 },

      setTrees: (trees) => set({ trees }),

      updateTree: (treeId, updates) => {
        const trees = get().trees.map((tree) =>
          tree.id === treeId ? { ...tree, ...updates } : tree
        );
        set({ trees });
      },

      unlockZone: (zone) => {
        const zones = get().unlockedZones;
        if (!zones.includes(zone)) {
          set({ unlockedZones: [...zones, zone] });
        }
      },

      isZoneUnlocked: (zone) => {
        return get().unlockedZones.includes(zone);
      },

      setPlayerPosition: (position) => {
        set({ currentPlayerPosition: position });
      },

      checkAndUnlockZones: () => {
        const currentUnlockedZones = get().unlockedZones;
        const progressStore = useProgressStore.getState();

        // Check each zone's unlock requirements
        for (const zone of DEFAULT_MAP_CONFIG.zones) {
          // Skip if already unlocked
          if (currentUnlockedZones.includes(zone.id)) {
            continue;
          }

          let shouldUnlock = true;

          // Check completed quest requirements
          if (zone.unlockRequirements.completedQuests) {
            for (const questId of zone.unlockRequirements.completedQuests) {
              if (progressStore.getQuestStatus(questId) !== QuestStatus.Completed) {
                shouldUnlock = false;
                break;
              }
            }
          }

          // Check completed zone requirements
          if (zone.unlockRequirements.completedZones) {
            for (const requiredZone of zone.unlockRequirements.completedZones) {
              // A zone is "completed" if all its quests are completed
              const zoneQuests = DEFAULT_MAP_CONFIG.trees
                .filter(tree => tree.zone === requiredZone)
                .flatMap(tree => tree.questIds);

              const allZoneQuestsCompleted = zoneQuests.every(
                questId => progressStore.getQuestStatus(questId) === QuestStatus.Completed
              );

              if (!allZoneQuestsCompleted) {
                shouldUnlock = false;
                break;
              }
            }
          }

          // Unlock zone if all requirements are met
          if (shouldUnlock) {
            get().unlockZone(zone.id);
          }
        }
      },
    }),
    {
      name: 'orchard-map',
    }
  )
);
