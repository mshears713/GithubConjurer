/**
 * Orchard Store
 *
 * Manages orchard map state, tree visualization, zone unlocking,
 * and player position.
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { OrchardZone, TreeData, OrchardMapData } from '@orchard/types';

interface OrchardStore extends OrchardMapData {
  setTrees: (trees: TreeData[]) => void;
  updateTree: (treeId: string, updates: Partial<TreeData>) => void;
  unlockZone: (zone: OrchardZone) => void;
  isZoneUnlocked: (zone: OrchardZone) => boolean;
  setPlayerPosition: (position: { x: number; y: number }) => void;
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
    }),
    {
      name: 'orchard-map',
    }
  )
);
