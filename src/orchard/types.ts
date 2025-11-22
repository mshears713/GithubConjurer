/**
 * Orchard Type Definitions
 */

export enum OrchardZone {
  InnerClearing = 'inner-clearing',
  Trunk = 'trunk',
  Canopy = 'canopy',
  Edge = 'edge',
  Conservatory = 'conservatory',
  Perimeter = 'perimeter',
}

export enum TreeState {
  Seedling = 'seedling',
  Young = 'young',
  Mature = 'mature',
  FruitBearing = 'fruit-bearing',
}

export interface TreeData {
  id: string;
  zone: OrchardZone;
  state: TreeState;
  position: { x: number; y: number };
  relatedLessonIds: string[];
}

export interface OrchardMapData {
  trees: TreeData[];
  unlockedZones: OrchardZone[];
  currentPlayerPosition: { x: number; y: number };
}
