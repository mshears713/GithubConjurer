/**
 * Scenario Type Definitions
 *
 * Data models for practice scenarios - guided, step-by-step exercises.
 */

export enum ScenarioType {
  FirstCommit = 'first-commit',
  Branching = 'branching',
  Merging = 'merging',
  Conflict = 'conflict',
  Undoing = 'undoing',
  Stashing = 'stashing',
}

export enum StepStatus {
  Pending = 'pending',
  InProgress = 'in_progress',
  Completed = 'completed',
  Skipped = 'skipped',
}

export interface ScenarioStep {
  id: string;
  order: number;
  title: string;
  instruction: string;
  orchardMetaphor: string;
  expectedAction?: string;  // Git action expected (e.g., "git commit")
  validation?: {
    type: 'file-exists' | 'commit-made' | 'branch-created' | 'branch-switched' | 'custom';
    params?: Record<string, unknown>;
  };
  hint?: string;
  canSkip?: boolean;
}

export interface ScenarioDefinition {
  id: string;
  type: ScenarioType;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedMinutes: number;
  prerequisites?: string[];  // Quest or scenario IDs
  steps: ScenarioStep[];
  reward?: {
    achievement?: string;
    description: string;
  };
  relatedQuests?: string[];
}

export interface ScenarioProgress {
  scenarioId: string;
  startedAt?: Date;
  completedAt?: Date;
  currentStepIndex: number;
  stepStatuses: Record<string, StepStatus>;
  skippedSteps: string[];
}
