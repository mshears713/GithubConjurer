/**
 * Orchard Map Component
 *
 * Renders the visual orchard map with zones, trees, paths, and NPCs.
 * Handles user interaction and displays quest progress visually.
 */

import React, { useState } from 'react';
import './OrchardMap.css';
import { DEFAULT_MAP_CONFIG, MapTree, TreeGrowthState, ZoneDefinition } from './mapData';
import { useOrchardStore } from '@state/useOrchardStore';
import { useProgressStore, QuestStatus } from '@state/useProgressStore';
import { ALL_NPCS } from '@npc/characters';

interface OrchardMapProps {
  onTreeClick?: (tree: MapTree) => void;
  onNPCClick?: (npcId: string) => void;
  onZoneClick?: (zone: ZoneDefinition) => void;
}

const OrchardMap: React.FC<OrchardMapProps> = ({ onTreeClick, onNPCClick }) => {
  const { dimensions, zones, trees: mapTrees, npcLocations, landmarks, paths } = DEFAULT_MAP_CONFIG;
  const { unlockedZones } = useOrchardStore();
  const { getQuestStatus } = useProgressStore();

  const [hoveredTree, setHoveredTree] = useState<string | null>(null);
  const [hoveredNPC, setHoveredNPC] = useState<string | null>(null);

  // Determine tree growth based on quest completion
  const getTreeGrowthState = (tree: MapTree): TreeGrowthState => {
    if (tree.questIds.length === 0) return TreeGrowthState.Empty;

    const questStatuses = tree.questIds.map(qid => getQuestStatus(qid));
    const allCompleted = questStatuses.every(s => s === QuestStatus.Completed);
    const anyInProgress = questStatuses.some(s => s === QuestStatus.InProgress);
    const anyAvailable = questStatuses.some(s => s === QuestStatus.Available);

    if (allCompleted) return TreeGrowthState.FruitBearing;
    if (anyInProgress) return TreeGrowthState.Blooming;
    if (anyAvailable) return TreeGrowthState.Young;
    return TreeGrowthState.Seedling;
  };

  // Check if zone is unlocked
  const isZoneUnlocked = (zone: ZoneDefinition): boolean => {
    return unlockedZones.includes(zone.id);
  };

  // Render tree based on growth state
  const renderTree = (tree: MapTree) => {
    const growthState = getTreeGrowthState(tree);
    const isUnlocked = isZoneUnlocked(zones.find(z => z.id === tree.zone)!);
    const isHovered = hoveredTree === tree.id;

    const treeColors: Record<TreeGrowthState, string> = {
      [TreeGrowthState.Empty]: '#D3D3D3',
      [TreeGrowthState.Seedling]: '#90EE90',
      [TreeGrowthState.Young]: '#32CD32',
      [TreeGrowthState.Mature]: '#228B22',
      [TreeGrowthState.Blooming]: '#FF69B4',
      [TreeGrowthState.FruitBearing]: '#FF6347',
    };

    const color = isUnlocked ? treeColors[growthState] : '#A9A9A9';
    const size = growthState === TreeGrowthState.Empty ? 15 :
                 growthState === TreeGrowthState.Seedling ? 20 :
                 growthState === TreeGrowthState.Young ? 25 :
                 growthState === TreeGrowthState.Blooming ? 30 : 35;

    return (
      <g
        key={tree.id}
        className={`map-tree ${isUnlocked ? 'unlocked' : 'locked'} ${isHovered ? 'hovered' : ''}`}
        onClick={() => isUnlocked && tree.isInteractive && onTreeClick?.(tree)}
        onMouseEnter={() => setHoveredTree(tree.id)}
        onMouseLeave={() => setHoveredTree(null)}
        style={{ cursor: isUnlocked && tree.isInteractive ? 'pointer' : 'default' }}
      >
        {/* Tree trunk */}
        {growthState !== TreeGrowthState.Empty && (
          <rect
            x={tree.position.x - 3}
            y={tree.position.y + size / 2}
            width={6}
            height={12}
            fill="#8B4513"
          />
        )}

        {/* Tree crown */}
        <circle
          cx={tree.position.x}
          cy={tree.position.y}
          r={size}
          fill={color}
          stroke={isHovered ? '#FFD700' : 'none'}
          strokeWidth={isHovered ? 3 : 0}
          opacity={isUnlocked ? 1 : 0.4}
        />

        {/* Fruit for fruit-bearing trees */}
        {growthState === TreeGrowthState.FruitBearing && (
          <>
            <circle cx={tree.position.x - 10} cy={tree.position.y - 10} r={4} fill="#FF4500" />
            <circle cx={tree.position.x + 10} cy={tree.position.y - 5} r={4} fill="#FF4500" />
            <circle cx={tree.position.x} cy={tree.position.y + 10} r={4} fill="#FF4500" />
          </>
        )}

        {/* Label */}
        {tree.label && isHovered && (
          <text
            x={tree.position.x}
            y={tree.position.y - size - 10}
            textAnchor="middle"
            fontSize="12"
            fill="#2C3E2C"
            fontWeight="bold"
          >
            {tree.label}
          </text>
        )}
      </g>
    );
  };

  // Render NPC
  const renderNPC = (npc: typeof npcLocations[0]) => {
    const npcData = ALL_NPCS.find(n => n.id === npc.npcId);
    const npcZone = zones.find(z => z.id === npc.zone);
    const isNPCZoneUnlocked = npcZone ? isZoneUnlocked(npcZone) : false;

    // NPCs are only visible when their zone is unlocked
    if (!npcData || !isNPCZoneUnlocked) return null;

    const isHovered = hoveredNPC === npc.npcId;

    return (
      <g
        key={npc.npcId}
        className={`map-npc ${isHovered ? 'hovered' : ''}`}
        onClick={() => onNPCClick?.(npc.npcId)}
        onMouseEnter={() => setHoveredNPC(npc.npcId)}
        onMouseLeave={() => setHoveredNPC(null)}
        style={{ cursor: 'pointer' }}
      >
        {/* NPC circle background */}
        <circle
          cx={npc.position.x}
          cy={npc.position.y}
          r={25}
          fill="white"
          stroke={isHovered ? '#FFD700' : '#4A7C59'}
          strokeWidth={isHovered ? 3 : 2}
        />

        {/* NPC emoji/icon */}
        <text
          x={npc.position.x}
          y={npc.position.y + 8}
          textAnchor="middle"
          fontSize="30"
        >
          {npcData.portraitIcon}
        </text>

        {/* NPC name on hover */}
        {isHovered && (
          <text
            x={npc.position.x}
            y={npc.position.y - 35}
            textAnchor="middle"
            fontSize="14"
            fill="#2C3E2C"
            fontWeight="bold"
          >
            {npcData.name}
          </text>
        )}
      </g>
    );
  };

  return (
    <div className="orchard-map-container">
      <svg
        width={dimensions.width}
        height={dimensions.height}
        className="orchard-map-svg"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      >
        {/* Background */}
        <rect width={dimensions.width} height={dimensions.height} fill="#E8F0E8" />

        {/* Render zones as colored regions */}
        {zones.map(zone => {
          const unlocked = isZoneUnlocked(zone);
          return (
            <g key={zone.id}>
              <rect
                x={zone.bounds.x}
                y={zone.bounds.y}
                width={zone.bounds.width}
                height={zone.bounds.height}
                fill={zone.color}
                opacity={unlocked ? 0.3 : 0.1}
                stroke={unlocked ? zone.color : '#A9A9A9'}
                strokeWidth={2}
                strokeDasharray={unlocked ? '0' : '5,5'}
                rx={10}
              />
              {/* Zone label */}
              <text
                x={zone.bounds.x + zone.bounds.width / 2}
                y={zone.bounds.y + 20}
                textAnchor="middle"
                fontSize="16"
                fill={unlocked ? '#2C3E2C' : '#808080'}
                fontWeight="bold"
                opacity={0.7}
              >
                {zone.name}
              </text>
            </g>
          );
        })}

        {/* Render paths */}
        {paths.map((path, idx) => (
          <line
            key={`path-${idx}`}
            x1={path.start.x}
            y1={path.start.y}
            x2={path.end.x}
            y2={path.end.y}
            stroke={path.isUnlocked ? '#8B6F47' : '#C0C0C0'}
            strokeWidth={path.isUnlocked ? 6 : 3}
            strokeDasharray={path.isUnlocked ? '0' : '10,5'}
            opacity={0.6}
          />
        ))}

        {/* Render landmarks */}
        {landmarks.map(landmark => {
          const zone = zones.find(z => z.id === landmark.zone);
          const unlocked = zone ? isZoneUnlocked(zone) : false;

          return (
            <g key={landmark.id} opacity={unlocked ? 1 : 0.3}>
              {landmark.type === 'gate' && (
                <rect
                  x={landmark.position.x - 15}
                  y={landmark.position.y - 25}
                  width={30}
                  height={50}
                  fill="#8B4513"
                  stroke="#654321"
                  strokeWidth={2}
                  rx={5}
                />
              )}
              {landmark.type === 'fountain' && (
                <circle
                  cx={landmark.position.x}
                  cy={landmark.position.y}
                  r={20}
                  fill="#87CEEB"
                  stroke="#4682B4"
                  strokeWidth={3}
                />
              )}
              <text
                x={landmark.position.x}
                y={landmark.position.y + 40}
                textAnchor="middle"
                fontSize="10"
                fill="#2C3E2C"
              >
                {landmark.label}
              </text>
            </g>
          );
        })}

        {/* Render trees */}
        {mapTrees.map(tree => renderTree(tree))}

        {/* Render NPCs */}
        {npcLocations.map(npc => renderNPC(npc))}
      </svg>
    </div>
  );
};

export default OrchardMap;
