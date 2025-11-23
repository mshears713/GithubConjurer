/**
 * Orchard Map Data Model
 *
 * Defines the layout, zones, trees, paths, and interactive elements
 * of the orchard map.
 */

import { OrchardZone } from './types';

export interface Position {
  x: number;
  y: number;
}

export interface MapDimensions {
  width: number;
  height: number;
  gridSize: number;
}

export enum TreeGrowthState {
  Empty = 'empty',           // No tree planted
  Seedling = 'seedling',     // Just started
  Young = 'young',           // Growing
  Mature = 'mature',         // Fully grown
  Blooming = 'blooming',     // Has flowers
  FruitBearing = 'fruit',    // Has fruit
}

export interface MapTree {
  id: string;
  position: Position;
  zone: OrchardZone;
  growthState: TreeGrowthState;
  questIds: string[];        // Quests associated with this tree
  isInteractive: boolean;
  label?: string;
}

export interface ZoneDefinition {
  id: OrchardZone;
  name: string;
  description: string;
  color: string;             // Primary color for this zone
  bounds: {                  // Rectangular bounds on map
    x: number;
    y: number;
    width: number;
    height: number;
  };
  unlockRequirements: {
    completedQuests?: string[];
    completedZones?: OrchardZone[];
  };
  entryPoint: Position;      // Where player appears when entering
}

export interface PathSegment {
  start: Position;
  end: Position;
  zone: OrchardZone;
  isUnlocked: boolean;
}

export interface NPCLocation {
  npcId: string;
  position: Position;
  zone: OrchardZone;
  isVisible: boolean;        // Based on zone unlock
}

export interface OrchardMapData {
  dimensions: MapDimensions;
  zones: ZoneDefinition[];
  trees: MapTree[];
  paths: PathSegment[];
  npcLocations: NPCLocation[];
  landmarks: MapLandmark[];
}

export interface MapLandmark {
  id: string;
  type: 'gate' | 'fountain' | 'bench' | 'sign' | 'garden';
  position: Position;
  zone: OrchardZone;
  label: string;
}

/**
 * Default orchard map configuration
 */
export const DEFAULT_MAP_CONFIG: OrchardMapData = {
  dimensions: {
    width: 1200,
    height: 800,
    gridSize: 40,
  },

  zones: [
    {
      id: OrchardZone.InnerClearing,
      name: 'Inner Clearing',
      description: 'The welcoming center where your journey begins',
      color: '#90EE90',
      bounds: { x: 50, y: 300, width: 300, height: 250 },
      unlockRequirements: {},
      entryPoint: { x: 150, y: 425 },
    },
    {
      id: OrchardZone.Trunk,
      name: 'Trunk Region',
      description: 'Where strong foundations are built',
      color: '#8B4513',
      bounds: { x: 350, y: 250, width: 300, height: 350 },
      unlockRequirements: {
        completedQuests: ['quest-getting-started-what-is-github-desktop'],
      },
      entryPoint: { x: 450, y: 425 },
    },
    {
      id: OrchardZone.Canopy,
      name: 'Canopy',
      description: 'Reach new heights with branching knowledge',
      color: '#228B22',
      bounds: { x: 650, y: 150, width: 300, height: 300 },
      unlockRequirements: {
        completedZones: [OrchardZone.Trunk],
      },
      entryPoint: { x: 750, y: 300 },
    },
    {
      id: OrchardZone.Edge,
      name: 'Orchard Edge',
      description: 'Connect with the wider world',
      color: '#6B8E23',
      bounds: { x: 50, y: 50, width: 300, height: 200 },
      unlockRequirements: {
        completedZones: [OrchardZone.Canopy],
      },
      entryPoint: { x: 150, y: 150 },
    },
    {
      id: OrchardZone.Conservatory,
      name: 'Conservatory',
      description: 'Advanced techniques for master gardeners',
      color: '#CD853F',
      bounds: { x: 950, y: 200, width: 200, height: 250 },
      unlockRequirements: {
        completedZones: [OrchardZone.Canopy],
      },
      entryPoint: { x: 1050, y: 325 },
    },
    {
      id: OrchardZone.Perimeter,
      name: 'Perimeter Trail',
      description: 'Walk the path of best practices',
      color: '#DEB887',
      bounds: { x: 350, y: 650, width: 600, height: 130 },
      unlockRequirements: {
        completedZones: [OrchardZone.Edge, OrchardZone.Conservatory],
      },
      entryPoint: { x: 650, y: 715 },
    },
  ],

  trees: [
    // Inner Clearing trees (getting started)
    { id: 'tree-start-1', position: { x: 100, y: 400 }, zone: OrchardZone.InnerClearing, growthState: TreeGrowthState.Empty, questIds: ['quest-getting-started-what-is-github-desktop'], isInteractive: true, label: 'Welcome Tree' },
    { id: 'tree-start-2', position: { x: 200, y: 450 }, zone: OrchardZone.InnerClearing, growthState: TreeGrowthState.Empty, questIds: ['quest-getting-started-installation'], isInteractive: true },
    { id: 'tree-start-3', position: { x: 150, y: 500 }, zone: OrchardZone.InnerClearing, growthState: TreeGrowthState.Empty, questIds: ['quest-getting-started-initial-setup'], isInteractive: true },

    // Basic concepts trees
    { id: 'tree-concepts-1', position: { x: 250, y: 350 }, zone: OrchardZone.InnerClearing, growthState: TreeGrowthState.Empty, questIds: ['quest-basic-concepts-repositories'], isInteractive: true },
    { id: 'tree-concepts-2', position: { x: 300, y: 400 }, zone: OrchardZone.InnerClearing, growthState: TreeGrowthState.Empty, questIds: ['quest-basic-concepts-commits'], isInteractive: true },
    { id: 'tree-concepts-3', position: { x: 280, y: 480 }, zone: OrchardZone.InnerClearing, growthState: TreeGrowthState.Empty, questIds: ['quest-basic-concepts-git-vs-github'], isInteractive: true },
    { id: 'tree-concepts-4', position: { x: 200, y: 530 }, zone: OrchardZone.InnerClearing, growthState: TreeGrowthState.Empty, questIds: ['quest-basic-concepts-interface-tour'], isInteractive: true },

    // Trunk region trees (creating repos, making changes)
    { id: 'tree-trunk-1', position: { x: 400, y: 350 }, zone: OrchardZone.Trunk, growthState: TreeGrowthState.Empty, questIds: ['quest-creating-repos-creating-new-repo'], isInteractive: true, label: 'Planting Tree' },
    { id: 'tree-trunk-2', position: { x: 500, y: 400 }, zone: OrchardZone.Trunk, growthState: TreeGrowthState.Empty, questIds: ['quest-creating-repos-cloning-repos'], isInteractive: true },
    { id: 'tree-trunk-3', position: { x: 550, y: 500 }, zone: OrchardZone.Trunk, growthState: TreeGrowthState.Empty, questIds: ['quest-creating-repos-opening-repos'], isInteractive: true },
    { id: 'tree-trunk-4', position: { x: 450, y: 500 }, zone: OrchardZone.Trunk, growthState: TreeGrowthState.Empty, questIds: ['quest-making-changes-making-commits'], isInteractive: true, label: 'Growth Ring Tree' },
    { id: 'tree-trunk-5', position: { x: 380, y: 450 }, zone: OrchardZone.Trunk, growthState: TreeGrowthState.Empty, questIds: ['quest-making-changes-staging-changes'], isInteractive: true },
    { id: 'tree-trunk-6', position: { x: 520, y: 300 }, zone: OrchardZone.Trunk, growthState: TreeGrowthState.Empty, questIds: ['quest-making-changes-push-pull'], isInteractive: true },
    { id: 'tree-trunk-7', position: { x: 600, y: 380 }, zone: OrchardZone.Trunk, growthState: TreeGrowthState.Empty, questIds: ['quest-making-changes-viewing-history'], isInteractive: true },
    { id: 'tree-trunk-8', position: { x: 420, y: 560 }, zone: OrchardZone.Trunk, growthState: TreeGrowthState.Empty, questIds: ['quest-making-changes-commit-messages'], isInteractive: true },

    // Canopy trees (branches)
    { id: 'tree-canopy-1', position: { x: 700, y: 250 }, zone: OrchardZone.Canopy, growthState: TreeGrowthState.Empty, questIds: ['quest-branches-what-are-branches'], isInteractive: true, label: 'Branch Junction' },
    { id: 'tree-canopy-2', position: { x: 800, y: 300 }, zone: OrchardZone.Canopy, growthState: TreeGrowthState.Empty, questIds: ['quest-branches-creating-branches'], isInteractive: true },
    { id: 'tree-canopy-3', position: { x: 750, y: 350 }, zone: OrchardZone.Canopy, growthState: TreeGrowthState.Empty, questIds: ['quest-branches-switching-branches'], isInteractive: true },
    { id: 'tree-canopy-4', position: { x: 850, y: 380 }, zone: OrchardZone.Canopy, growthState: TreeGrowthState.Empty, questIds: ['quest-branches-merging-branches'], isInteractive: true, label: 'Grafting Point' },
    { id: 'tree-canopy-5', position: { x: 900, y: 280 }, zone: OrchardZone.Canopy, growthState: TreeGrowthState.Empty, questIds: ['quest-branches-deleting-branches'], isInteractive: true },

    // Edge trees (collaboration)
    { id: 'tree-edge-1', position: { x: 150, y: 120 }, zone: OrchardZone.Edge, growthState: TreeGrowthState.Empty, questIds: ['quest-collaboration-pull-requests'], isInteractive: true, label: 'Connection Tree' },
    { id: 'tree-edge-2', position: { x: 250, y: 150 }, zone: OrchardZone.Edge, growthState: TreeGrowthState.Empty, questIds: ['quest-collaboration-fetching-changes'], isInteractive: true },
    { id: 'tree-edge-3', position: { x: 200, y: 200 }, zone: OrchardZone.Edge, growthState: TreeGrowthState.Empty, questIds: ['quest-collaboration-merge-conflicts'], isInteractive: true, label: 'Tangle Tree' },
    { id: 'tree-edge-4', position: { x: 100, y: 180 }, zone: OrchardZone.Edge, growthState: TreeGrowthState.Empty, questIds: ['quest-collaboration-code-review'], isInteractive: true },

    // Conservatory trees (advanced features)
    { id: 'tree-conservatory-1', position: { x: 1000, y: 280 }, zone: OrchardZone.Conservatory, growthState: TreeGrowthState.Empty, questIds: ['quest-advanced-features-stashing'], isInteractive: true, label: 'Nursery Tree' },
    { id: 'tree-conservatory-2', position: { x: 1080, y: 340 }, zone: OrchardZone.Conservatory, growthState: TreeGrowthState.Empty, questIds: ['quest-advanced-features-tags'], isInteractive: true, label: 'Memorial Tree' },
    { id: 'tree-conservatory-3', position: { x: 1020, y: 400 }, zone: OrchardZone.Conservatory, growthState: TreeGrowthState.Empty, questIds: ['quest-advanced-features-undoing-changes'], isInteractive: true, label: 'Pruning Tree' },

    // Perimeter trees (best practices)
    { id: 'tree-perimeter-1', position: { x: 450, y: 700 }, zone: OrchardZone.Perimeter, growthState: TreeGrowthState.Empty, questIds: ['quest-best-practices-git-workflows'], isInteractive: true, label: 'Path Tree' },
    { id: 'tree-perimeter-2', position: { x: 650, y: 720 }, zone: OrchardZone.Perimeter, growthState: TreeGrowthState.Empty, questIds: ['quest-best-practices-common-issues'], isInteractive: true },
    { id: 'tree-perimeter-3', position: { x: 850, y: 700 }, zone: OrchardZone.Perimeter, growthState: TreeGrowthState.Empty, questIds: ['quest-best-practices-security'], isInteractive: true, label: 'Guardian Tree' },
  ],

  paths: [
    // Path from Inner Clearing to Trunk
    { start: { x: 300, y: 425 }, end: { x: 400, y: 425 }, zone: OrchardZone.InnerClearing, isUnlocked: true },
    // Path from Trunk to Canopy
    { start: { x: 600, y: 300 }, end: { x: 700, y: 300 }, zone: OrchardZone.Trunk, isUnlocked: false },
    // Path from Canopy to Edge
    { start: { x: 350, y: 250 }, end: { x: 300, y: 200 }, zone: OrchardZone.Canopy, isUnlocked: false },
    // Path from Canopy to Conservatory
    { start: { x: 900, y: 300 }, end: { x: 1000, y: 300 }, zone: OrchardZone.Canopy, isUnlocked: false },
    // Path from Trunk to Perimeter
    { start: { x: 500, y: 600 }, end: { x: 500, y: 660 }, zone: OrchardZone.Trunk, isUnlocked: false },
  ],

  npcLocations: [
    { npcId: 'orchard-keeper', position: { x: 120, y: 380 }, zone: OrchardZone.InnerClearing, isVisible: true },
    { npcId: 'botanist', position: { x: 720, y: 280 }, zone: OrchardZone.Canopy, isVisible: false },
    { npcId: 'forager', position: { x: 120, y: 120 }, zone: OrchardZone.Edge, isVisible: false },
  ],

  landmarks: [
    { id: 'main-gate', type: 'gate', position: { x: 80, y: 420 }, zone: OrchardZone.InnerClearing, label: 'Orchard Entrance' },
    { id: 'wisdom-fountain', type: 'fountain', position: { x: 200, y: 400 }, zone: OrchardZone.InnerClearing, label: 'Fountain of Knowledge' },
    { id: 'trunk-gate', type: 'gate', position: { x: 350, y: 425 }, zone: OrchardZone.Trunk, label: 'Gateway to Growth' },
    { id: 'canopy-gate', type: 'gate', position: { x: 650, y: 300 }, zone: OrchardZone.Canopy, label: 'Canopy Portal' },
    { id: 'edge-gate', type: 'gate', position: { x: 350, y: 200 }, zone: OrchardZone.Edge, label: 'Edge Passage' },
    { id: 'conservatory-gate', type: 'gate', position: { x: 950, y: 325 }, zone: OrchardZone.Conservatory, label: 'Master Garden' },
    { id: 'perimeter-bench', type: 'bench', position: { x: 550, y: 715 }, zone: OrchardZone.Perimeter, label: 'Rest Point' },
  ],
};
