/**
 * Generated Quest Definitions
 *
 * AUTO-GENERATED - DO NOT EDIT MANUALLY
 * Hand-crafted quests: See src/content/handCraftedQuests.ts
 * Run 'npm run generate-quests' to regenerate
 */

import { QuestDefinition, QuestType } from './types';

export const ALL_QUESTS: QuestDefinition[] = [
  {
  id: "quest-getting-started-initial-setup",
  lessonId: "getting-started-initial-setup",
  title: "Cultivation: Initial setup",
  description: "Your identity is important - it's attached to every change you make!",
  orchardNarrative: "In the Inner Clearing, the Orchard Keeper invites you to learn about your identity is important - it's attached to every change you make!",
  gitConcept: "Initial setup",
  gitExplanation: "Your identity is important - it's attached to every change you make!\r",
  npcInvolved: "orchard-keeper",
  questType: QuestType.CultivationTask,
  preconditions: [],
  steps: [
    {
      order: 1,
      instruction: "Learn about: Configuring Your Identity",
      orchardMetaphor: "Configuring Your Identity",
      hint: "Focus on understanding Configuring Your Identity",
      validation: "Concept \"Configuring Your Identity\" understood"
    },
    {
      order: 2,
      instruction: "Learn about: Setting Your Name and Email",
      orchardMetaphor: "Setting Your Name and Email",
      hint: "Focus on understanding Setting Your Name and Email",
      validation: "Concept \"Setting Your Name and Email\" understood"
    },
    {
      order: 3,
      instruction: "Learn about: Open Preferences/Options",
      orchardMetaphor: "Open Preferences/Options",
      hint: "Focus on understanding Open Preferences/Options",
      validation: "Concept \"Open Preferences/Options\" understood"
    },
    {
      order: 4,
      instruction: "Learn about: Windows",
      orchardMetaphor: "Windows",
      hint: "Focus on understanding Windows",
      validation: "Concept \"Windows\" understood"
    }
  ],
  completionCriteria: "Finish the cultivation task",
  reward: {
    description: "Completed: Initial setup",
    visualEffect: "seedling sprouts",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 8,
  difficulty: "beginner"
},
  {
  id: "quest-getting-started-installation",
  lessonId: "getting-started-installation",
  title: "Cultivation: Installation",
  description: "1. **Download GitHub Desktop**",
  orchardNarrative: "In the Inner Clearing, the Orchard Keeper invites you to learn about 1. **download github desktop**",
  gitConcept: "Installation",
  gitExplanation: "1. **Download GitHub Desktop**\r",
  npcInvolved: "orchard-keeper",
  questType: QuestType.CultivationTask,
  preconditions: [],
  steps: [
    {
      order: 1,
      instruction: "Learn about: Step-by-Step Installation Guide",
      orchardMetaphor: "Step-by-Step Installation Guide",
      hint: "Focus on understanding Step-by-Step Installation Guide",
      validation: "Concept \"Step-by-Step Installation Guide\" understood"
    },
    {
      order: 2,
      instruction: "Learn about: For Windows",
      orchardMetaphor: "For Windows",
      hint: "Focus on understanding For Windows",
      validation: "Concept \"For Windows\" understood"
    },
    {
      order: 3,
      instruction: "Learn about: Download GitHub Desktop",
      orchardMetaphor: "Download GitHub Desktop",
      hint: "Focus on understanding Download GitHub Desktop",
      validation: "Concept \"Download GitHub Desktop\" understood"
    },
    {
      order: 4,
      instruction: "Learn about: Run the Installer",
      orchardMetaphor: "Run the Installer",
      hint: "Focus on understanding Run the Installer",
      validation: "Concept \"Run the Installer\" understood"
    }
  ],
  completionCriteria: "Finish the cultivation task",
  reward: {
    description: "Completed: Installation",
    visualEffect: "seedling sprouts",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 10,
  difficulty: "beginner"
},
  {
  id: "quest-getting-started-what-is-github-desktop",
  lessonId: "getting-started-what-is-github-desktop",
  title: "The Orchard Keeper's Welcome",
  description: "Meet the Orchard Keeper and learn what this peaceful grove has to teach.",
  orchardNarrative: "Welcome to the orchard! Learn about tending your digital garden.",
  gitConcept: "GitHub Desktop",
  gitExplanation: "GitHub Desktop is a visual application for managing your code projects.",
  npcInvolved: "orchard-keeper",
  questType: QuestType.Advice,
  preconditions: [],
  steps: [
    {
      order: 1,
      instruction: "Listen to the Orchard Keeper introduce the grove",
      orchardMetaphor: "Every great garden begins with understanding the land",
      hint: "Take your time",
      validation: "You understand the purpose of this learning journey"
    }
  ],
  completionCriteria: "Understand what GitHub Desktop is and feel welcomed",
  reward: {
    description: "The orchard gates open",
    visualEffect: "seedling sprouts",
    unlocks: [
      "quest-getting-started-installation"
    ]
  },
  estimatedMinutes: 5,
  difficulty: "beginner"
},
  {
  id: "quest-basic-concepts-commits",
  lessonId: "basic-concepts-commits",
  title: "the Orchard Keeper's Wisdom: Commits",
  description: "A **commit** is a snapshot of your project at a specific point in time.",
  orchardNarrative: "In the Inner Clearing, the Orchard Keeper invites you to learn about a **growth ring** is a snapshot of your project at a specific point in time.",
  gitConcept: "Commits",
  gitExplanation: "A **commit** is a snapshot of your project at a specific point in time.\r",
  npcInvolved: "orchard-keeper",
  questType: QuestType.Advice,
  preconditions: [],
  steps: [
    {
      order: 1,
      instruction: "Listen to the explanation",
      orchardMetaphor: "Absorb the wisdom like rain nourishing soil",
      validation: "Understanding achieved"
    },
    {
      order: 2,
      instruction: "Reflect on the concept",
      orchardMetaphor: "Let the knowledge take root",
      validation: "Ready to apply"
    }
  ],
  completionCriteria: "Read and understand the explanation",
  reward: {
    description: "Completed: Commits",
    visualEffect: "seedling sprouts",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 8,
  difficulty: "beginner"
},
  {
  id: "quest-basic-concepts-git-vs-github",
  lessonId: "basic-concepts-git-vs-github",
  title: "the Orchard Keeper's Wisdom: Git vs github",
  description: "These three work together but serve different purposes. Let's break them down!",
  orchardNarrative: "In the Inner Clearing, the Orchard Keeper invites you to learn about these three work together but serve different purposes. let's break them down!",
  gitConcept: "Git vs github",
  gitExplanation: "These three work together but serve different purposes. Let's break them down!\r",
  npcInvolved: "orchard-keeper",
  questType: QuestType.Advice,
  preconditions: [],
  steps: [
    {
      order: 1,
      instruction: "Listen to the explanation",
      orchardMetaphor: "Absorb the wisdom like rain nourishing soil",
      validation: "Understanding achieved"
    },
    {
      order: 2,
      instruction: "Reflect on the concept",
      orchardMetaphor: "Let the knowledge take root",
      validation: "Ready to apply"
    }
  ],
  completionCriteria: "Read and understand the explanation",
  reward: {
    description: "Completed: Git vs github",
    visualEffect: "seedling sprouts",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 6,
  difficulty: "beginner"
},
  {
  id: "quest-basic-concepts-interface-tour",
  lessonId: "basic-concepts-interface-tour",
  title: "Quest: Interface tour",
  description: "Let's explore every part of GitHub Desktop so you feel comfortable using it.",
  orchardNarrative: "In the Inner Clearing, the Orchard Keeper invites you to learn about let's explore every part of github desktop so you feel comfortable using it.",
  gitConcept: "Interface tour",
  gitExplanation: "Let's explore every part of GitHub Desktop so you feel comfortable using it.\r",
  npcInvolved: "orchard-keeper",
  questType: QuestType.Quest,
  preconditions: [],
  steps: [
    {
      order: 1,
      instruction: "Learn about: Welcome to Your Command Center!",
      orchardMetaphor: "Welcome to Your Command Center!",
      hint: "Focus on understanding Welcome to Your Command Center!",
      validation: "Concept \"Welcome to Your Command Center!\" understood"
    },
    {
      order: 2,
      instruction: "Learn about: The Main Window Layout",
      orchardMetaphor: "The Main Window Layout",
      hint: "Focus on understanding The Main Window Layout",
      validation: "Concept \"The Main Window Layout\" understood"
    },
    {
      order: 3,
      instruction: "Learn about: ① Repository Selector (Top Left)",
      orchardMetaphor: "① tree in your grove Selector (Top Left)",
      hint: "Focus on understanding ① Repository Selector (Top Left)",
      validation: "Concept \"① Repository Selector (Top Left)\" understood"
    },
    {
      order: 4,
      instruction: "Learn about: What It Shows",
      orchardMetaphor: "What It Shows",
      hint: "Focus on understanding What It Shows",
      validation: "Concept \"What It Shows\" understood"
    }
  ],
  completionCriteria: "Complete all quest steps successfully",
  reward: {
    description: "Completed: Interface tour",
    visualEffect: "seedling sprouts",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 12,
  difficulty: "beginner"
},
  {
  id: "quest-basic-concepts-repositories",
  lessonId: "basic-concepts-repositories",
  title: "the Orchard Keeper's Wisdom: Repositories",
  description: "A **repository** (or \"repo\" for short) is a folder that Git tracks.",
  orchardNarrative: "In the Inner Clearing, the Orchard Keeper invites you to learn about a **tree in your grove** (or \"repo\" for short) is a folder that git tracks.",
  gitConcept: "Repositories",
  gitExplanation: "A **repository** (or \"repo\" for short) is a folder that Git tracks.\r",
  npcInvolved: "orchard-keeper",
  questType: QuestType.Advice,
  preconditions: [],
  steps: [
    {
      order: 1,
      instruction: "Listen to the explanation",
      orchardMetaphor: "Absorb the wisdom like rain nourishing soil",
      validation: "Understanding achieved"
    },
    {
      order: 2,
      instruction: "Reflect on the concept",
      orchardMetaphor: "Let the knowledge take root",
      validation: "Ready to apply"
    }
  ],
  completionCriteria: "Read and understand the explanation",
  reward: {
    description: "Completed: Repositories",
    visualEffect: "seedling sprouts",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 7,
  difficulty: "beginner"
},
  {
  id: "quest-creating-repos-cloning-repos",
  lessonId: "creating-repos-cloning-repos",
  title: "Quest: Cloning repos",
  description: "**Cloning** = Copying a repository from GitHub to your computer.",
  orchardNarrative: "In the Trunk Region, the Orchard Keeper invites you to learn about **cloning** = copying a tree in your grove from github to your computer.",
  gitConcept: "Cloning repos",
  gitExplanation: "**Cloning** = Copying a repository from GitHub to your computer.\r",
  npcInvolved: "orchard-keeper",
  questType: QuestType.Quest,
  preconditions: [
    "prev-quest-in-zone"
  ],
  steps: [
    {
      order: 1,
      instruction: "Learn about: What is Cloning?",
      orchardMetaphor: "What is Cloning?",
      hint: "Focus on understanding What is Cloning?",
      validation: "Concept \"What is Cloning?\" understood"
    },
    {
      order: 2,
      instruction: "Learn about: Cloning",
      orchardMetaphor: "Cloning",
      hint: "Focus on understanding Cloning",
      validation: "Concept \"Cloning\" understood"
    },
    {
      order: 3,
      instruction: "Learn about: When to Clone",
      orchardMetaphor: "When to take a cutting from another orchard",
      hint: "Focus on understanding When to Clone",
      validation: "Concept \"When to Clone\" understood"
    },
    {
      order: 4,
      instruction: "Learn about: How to Clone a Repository",
      orchardMetaphor: "How to take a cutting from another orchard a tree in your grove",
      hint: "Focus on understanding How to Clone a Repository",
      validation: "Concept \"How to Clone a Repository\" understood"
    }
  ],
  completionCriteria: "Complete all quest steps successfully",
  reward: {
    description: "Completed: Cloning repos",
    visualEffect: "tree gains strength",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 12,
  difficulty: "beginner"
},
  {
  id: "quest-creating-repos-creating-new-repo",
  lessonId: "creating-repos-creating-new-repo",
  title: "Quest: Creating new repo",
  description: "Creating a repository is like starting a new project folder with Git superpowers.",
  orchardNarrative: "In the Trunk Region, the Orchard Keeper invites you to learn about creating a tree in your grove is like starting a new project folder with git superpowers.",
  gitConcept: "Creating new repo",
  gitExplanation: "Creating a repository is like starting a new project folder with Git superpowers.\r",
  npcInvolved: "orchard-keeper",
  questType: QuestType.Quest,
  preconditions: [
    "prev-quest-in-zone"
  ],
  steps: [
    {
      order: 1,
      instruction: "Learn about: Let's Create Your First Repository!",
      orchardMetaphor: "Let's Create Your First tree in your grove!",
      hint: "Focus on understanding Let's Create Your First Repository!",
      validation: "Concept \"Let's Create Your First Repository!\" understood"
    },
    {
      order: 2,
      instruction: "Learn about: Method 1: Using GitHub Desktop",
      orchardMetaphor: "Method 1: Using GitHub Desktop",
      hint: "Focus on understanding Method 1: Using GitHub Desktop",
      validation: "Concept \"Method 1: Using GitHub Desktop\" understood"
    },
    {
      order: 3,
      instruction: "Learn about: Step-by-Step",
      orchardMetaphor: "Step-by-Step",
      hint: "Focus on understanding Step-by-Step",
      validation: "Concept \"Step-by-Step\" understood"
    },
    {
      order: 4,
      instruction: "Learn about: 1. Open the Repository Menu",
      orchardMetaphor: "1. Open the tree in your grove Menu",
      hint: "Focus on understanding 1. Open the Repository Menu",
      validation: "Concept \"1. Open the Repository Menu\" understood"
    }
  ],
  completionCriteria: "Complete all quest steps successfully",
  reward: {
    description: "Completed: Creating new repo",
    visualEffect: "tree gains strength",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 15,
  difficulty: "beginner"
},
  {
  id: "quest-creating-repos-opening-repos",
  lessonId: "creating-repos-opening-repos",
  title: "Cultivation: Opening repos",
  description: "Sometimes you have a Git repository on your computer that isn't in GitHub Desktop yet.",
  orchardNarrative: "In the Trunk Region, the Orchard Keeper invites you to learn about sometimes you have a git tree in your grove on your computer that isn't in github desktop yet.",
  gitConcept: "Opening repos",
  gitExplanation: "Sometimes you have a Git repository on your computer that isn't in GitHub Desktop yet.\r",
  npcInvolved: "orchard-keeper",
  questType: QuestType.CultivationTask,
  preconditions: [
    "prev-quest-in-zone"
  ],
  steps: [
    {
      order: 1,
      instruction: "Learn about: Opening Existing Local Repositories",
      orchardMetaphor: "Opening Existing Local Repositories",
      hint: "Focus on understanding Opening Existing Local Repositories",
      validation: "Concept \"Opening Existing Local Repositories\" understood"
    },
    {
      order: 2,
      instruction: "Learn about: Adding a Local Repository",
      orchardMetaphor: "Adding a Local tree in your grove",
      hint: "Focus on understanding Adding a Local Repository",
      validation: "Concept \"Adding a Local Repository\" understood"
    },
    {
      order: 3,
      instruction: "Learn about: When You Need This",
      orchardMetaphor: "When You Need This",
      hint: "Focus on understanding When You Need This",
      validation: "Concept \"When You Need This\" understood"
    },
    {
      order: 4,
      instruction: "Learn about: How to Add",
      orchardMetaphor: "How to Add",
      hint: "Focus on understanding How to Add",
      validation: "Concept \"How to Add\" understood"
    }
  ],
  completionCriteria: "Finish the cultivation task",
  reward: {
    description: "Completed: Opening repos",
    visualEffect: "tree gains strength",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 5,
  difficulty: "beginner"
},
  {
  id: "quest-making-changes-making-your-first-commit",
  lessonId: "making-changes-making-your-first-commit",
  title: "Quest: Making your first commit",
  description: "This is what you'll do every day: edit files, review changes, and commit them.",
  orchardNarrative: "In the Trunk Region, the Orchard Keeper invites you to learn about this is what you'll do every day: edit files, review changes, and growth ring them.",
  gitConcept: "Making your first commit",
  gitExplanation: "This is what you'll do every day: edit files, review changes, and commit them.\r",
  npcInvolved: "orchard-keeper",
  questType: QuestType.Quest,
  preconditions: [
    "prev-quest-in-zone"
  ],
  steps: [
    {
      order: 1,
      instruction: "Learn about: The Daily Workflow Starts Here!",
      orchardMetaphor: "The Daily Workflow Starts Here!",
      hint: "Focus on understanding The Daily Workflow Starts Here!",
      validation: "Concept \"The Daily Workflow Starts Here!\" understood"
    },
    {
      order: 2,
      instruction: "Learn about: The Basic Workflow",
      orchardMetaphor: "The Basic Workflow",
      hint: "Focus on understanding The Basic Workflow",
      validation: "Concept \"The Basic Workflow\" understood"
    },
    {
      order: 3,
      instruction: "Learn about: Step 1: Make Changes to Files",
      orchardMetaphor: "Step 1: Make Changes to Files",
      hint: "Focus on understanding Step 1: Make Changes to Files",
      validation: "Concept \"Step 1: Make Changes to Files\" understood"
    },
    {
      order: 4,
      instruction: "Learn about: Open Your Repository Folder",
      orchardMetaphor: "Open Your tree in your grove Folder",
      hint: "Focus on understanding Open Your Repository Folder",
      validation: "Concept \"Open Your Repository Folder\" understood"
    }
  ],
  completionCriteria: "Complete all quest steps successfully",
  reward: {
    description: "Completed: Making your first commit",
    visualEffect: "tree gains strength",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 18,
  difficulty: "beginner"
},
  {
  id: "quest-making-changes-pushing-and-pulling",
  lessonId: "making-changes-pushing-and-pulling",
  title: "Quest: Pushing and pulling",
  description: "**Push** = Upload your local commits to GitHub",
  orchardNarrative: "In the Trunk Region, the Branch Botanist invites you to learn about **share seeds with other orchards** = upload your local growth ring to github",
  gitConcept: "Pushing and pulling",
  gitExplanation: "**Push** = Upload your local commits to GitHub\r",
  npcInvolved: "botanist",
  questType: QuestType.Quest,
  preconditions: [
    "prev-quest-in-zone"
  ],
  steps: [
    {
      order: 1,
      instruction: "Learn about: Syncing with GitHub",
      orchardMetaphor: "Syncing with GitHub",
      hint: "Focus on understanding Syncing with GitHub",
      validation: "Concept \"Syncing with GitHub\" understood"
    },
    {
      order: 2,
      instruction: "Learn about: Push",
      orchardMetaphor: "share seeds with other orchards",
      hint: "Focus on understanding Push",
      validation: "Concept \"Push\" understood"
    },
    {
      order: 3,
      instruction: "Learn about: Pull",
      orchardMetaphor: "bring in water and nutrients",
      hint: "Focus on understanding Pull",
      validation: "Concept \"Pull\" understood"
    },
    {
      order: 4,
      instruction: "Learn about: Understanding the Sync Flow",
      orchardMetaphor: "Understanding the Sync Flow",
      hint: "Focus on understanding Understanding the Sync Flow",
      validation: "Concept \"Understanding the Sync Flow\" understood"
    }
  ],
  completionCriteria: "Complete all quest steps successfully",
  reward: {
    description: "Completed: Pushing and pulling",
    visualEffect: "tree gains strength",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 20,
  difficulty: "intermediate"
},
  {
  id: "quest-making-changes-staging-changes",
  lessonId: "making-changes-staging-changes",
  title: "Quest: Staging changes",
  description: "**Staging** = Selecting which changes to include in your next commit.",
  orchardNarrative: "In the Trunk Region, the Orchard Keeper invites you to learn about **prepare saplings in the greenhouse** = selecting which changes to include in your next growth ring.",
  gitConcept: "Staging changes",
  gitExplanation: "**Staging** = Selecting which changes to include in your next commit.\r",
  npcInvolved: "orchard-keeper",
  questType: QuestType.Quest,
  preconditions: [
    "prev-quest-in-zone"
  ],
  steps: [
    {
      order: 1,
      instruction: "Learn about: What is Staging?",
      orchardMetaphor: "What is prepare saplings in the greenhouse?",
      hint: "Focus on understanding What is Staging?",
      validation: "Concept \"What is Staging?\" understood"
    },
    {
      order: 2,
      instruction: "Learn about: Staging",
      orchardMetaphor: "prepare saplings in the greenhouse",
      hint: "Focus on understanding Staging",
      validation: "Concept \"Staging\" understood"
    },
    {
      order: 3,
      instruction: "Learn about: Why Staging Matters",
      orchardMetaphor: "Why prepare saplings in the greenhouse Matters",
      hint: "Focus on understanding Why Staging Matters",
      validation: "Concept \"Why Staging Matters\" understood"
    },
    {
      order: 4,
      instruction: "Learn about: The Problem",
      orchardMetaphor: "The Problem",
      hint: "Focus on understanding The Problem",
      validation: "Concept \"The Problem\" understood"
    }
  ],
  completionCriteria: "Complete all quest steps successfully",
  reward: {
    description: "Completed: Staging changes",
    visualEffect: "tree gains strength",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 15,
  difficulty: "beginner"
},
  {
  id: "quest-making-changes-viewing-history",
  lessonId: "making-changes-viewing-history",
  title: "Quest: Viewing history",
  description: "The History tab shows every change ever made to your project - your project's story!",
  orchardNarrative: "In the Trunk Region, the Branch Botanist invites you to learn about the history tab shows every change ever made to your project - your project's story!",
  gitConcept: "Viewing history",
  gitExplanation: "The History tab shows every change ever made to your project - your project's story!\r",
  npcInvolved: "botanist",
  questType: QuestType.Quest,
  preconditions: [
    "prev-quest-in-zone"
  ],
  steps: [
    {
      order: 1,
      instruction: "Learn about: Your Project Timeline",
      orchardMetaphor: "Your Project Timeline",
      hint: "Focus on understanding Your Project Timeline",
      validation: "Concept \"Your Project Timeline\" understood"
    },
    {
      order: 2,
      instruction: "Learn about: Accessing History",
      orchardMetaphor: "Accessing History",
      hint: "Focus on understanding Accessing History",
      validation: "Concept \"Accessing History\" understood"
    },
    {
      order: 3,
      instruction: "Learn about: Open the History Tab",
      orchardMetaphor: "Open the History Tab",
      hint: "Focus on understanding Open the History Tab",
      validation: "Concept \"Open the History Tab\" understood"
    },
    {
      order: 4,
      instruction: "Learn about: Click \"History\"",
      orchardMetaphor: "Click \"History\"",
      hint: "Focus on understanding Click \"History\"",
      validation: "Concept \"Click \"History\"\" understood"
    }
  ],
  completionCriteria: "Complete all quest steps successfully",
  reward: {
    description: "Completed: Viewing history",
    visualEffect: "tree gains strength",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 12,
  difficulty: "beginner"
},
  {
  id: "quest-making-changes-writing-commit-messages",
  lessonId: "making-changes-writing-commit-messages",
  title: "the Orchard Keeper's Wisdom: Writing commit messages",
  description: "Good commit messages help you:",
  orchardNarrative: "In the Trunk Region, the Orchard Keeper invites you to learn about good growth ring messages help you:",
  gitConcept: "Writing commit messages",
  gitExplanation: "Good commit messages help you:\r",
  npcInvolved: "orchard-keeper",
  questType: QuestType.Advice,
  preconditions: [
    "prev-quest-in-zone"
  ],
  steps: [
    {
      order: 1,
      instruction: "Listen to the explanation",
      orchardMetaphor: "Absorb the wisdom like rain nourishing soil",
      validation: "Understanding achieved"
    },
    {
      order: 2,
      instruction: "Reflect on the concept",
      orchardMetaphor: "Let the knowledge take root",
      validation: "Ready to apply"
    }
  ],
  completionCriteria: "Read and understand the explanation",
  reward: {
    description: "Completed: Writing commit messages",
    visualEffect: "tree gains strength",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 10,
  difficulty: "beginner"
},
  {
  id: "quest-branches-creating-branches",
  lessonId: "branches-creating-branches",
  title: "Quest: Creating branches",
  description: "Let's create a branch and start working on it.",
  orchardNarrative: "In the Canopy, the Branch Botanist invites you to learn about let's create a limb on your tree and start working on it.",
  gitConcept: "Creating branches",
  gitExplanation: "Let's create a branch and start working on it.\r",
  npcInvolved: "botanist",
  questType: QuestType.Quest,
  preconditions: [
    "prev-quest-in-zone"
  ],
  steps: [
    {
      order: 1,
      instruction: "Learn about: Your First Branch!",
      orchardMetaphor: "Your First limb on your tree!",
      hint: "Focus on understanding Your First Branch!",
      validation: "Concept \"Your First Branch!\" understood"
    },
    {
      order: 2,
      instruction: "Learn about: How to Create a Branch",
      orchardMetaphor: "How to Create a limb on your tree",
      hint: "Focus on understanding How to Create a Branch",
      validation: "Concept \"How to Create a Branch\" understood"
    },
    {
      order: 3,
      instruction: "Learn about: Method 1: New Branch Button",
      orchardMetaphor: "Method 1: New limb on your tree Button",
      hint: "Focus on understanding Method 1: New Branch Button",
      validation: "Concept \"Method 1: New Branch Button\" understood"
    },
    {
      order: 4,
      instruction: "Learn about: 1. Click \"Current Branch\" dropdown",
      orchardMetaphor: "1. Click \"Current limb on your tree\" dropdown",
      hint: "Focus on understanding 1. Click \"Current Branch\" dropdown",
      validation: "Concept \"1. Click \"Current Branch\" dropdown\" understood"
    }
  ],
  completionCriteria: "Complete all quest steps successfully",
  reward: {
    description: "Completed: Creating branches",
    visualEffect: "new branch grows",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 15,
  difficulty: "intermediate"
},
  {
  id: "quest-branches-deleting-branches",
  lessonId: "branches-deleting-branches",
  title: "Cultivation: Deleting branches",
  description: "After merging a feature, delete the branch - you don't need it anymore!",
  orchardNarrative: "In the Canopy, the Branch Botanist invites you to learn about after merging a feature, delete the limb on your tree - you don't need it anymore!",
  gitConcept: "Deleting branches",
  gitExplanation: "After merging a feature, delete the branch - you don't need it anymore!\r",
  npcInvolved: "botanist",
  questType: QuestType.CultivationTask,
  preconditions: [
    "prev-quest-in-zone"
  ],
  steps: [
    {
      order: 1,
      instruction: "Learn about: Keeping Your Repository Clean",
      orchardMetaphor: "Keeping Your tree in your grove Clean",
      hint: "Focus on understanding Keeping Your Repository Clean",
      validation: "Concept \"Keeping Your Repository Clean\" understood"
    },
    {
      order: 2,
      instruction: "Learn about: Why Delete Branches?",
      orchardMetaphor: "Why Delete Branches?",
      hint: "Focus on understanding Why Delete Branches?",
      validation: "Concept \"Why Delete Branches?\" understood"
    },
    {
      order: 3,
      instruction: "Learn about: Merged Branches Are Done",
      orchardMetaphor: "Merged Branches Are Done",
      hint: "Focus on understanding Merged Branches Are Done",
      validation: "Concept \"Merged Branches Are Done\" understood"
    },
    {
      order: 4,
      instruction: "Learn about: Feature is in main",
      orchardMetaphor: "Feature is in main",
      hint: "Focus on understanding Feature is in main",
      validation: "Concept \"Feature is in main\" understood"
    }
  ],
  completionCriteria: "Finish the cultivation task",
  reward: {
    description: "Completed: Deleting branches",
    visualEffect: "new branch grows",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 8,
  difficulty: "intermediate"
},
  {
  id: "quest-branches-merging-branches",
  lessonId: "branches-merging-branches",
  title: "Quest: Merging branches",
  description: "**Merging** = Combining changes from one branch into another.",
  orchardNarrative: "In the Canopy, the Branch Botanist invites you to learn about **merging** = combining changes from one limb on your tree into another.",
  gitConcept: "Merging branches",
  gitExplanation: "**Merging** = Combining changes from one branch into another.\r",
  npcInvolved: "botanist",
  questType: QuestType.Quest,
  preconditions: [
    "prev-quest-in-zone"
  ],
  steps: [
    {
      order: 1,
      instruction: "Learn about: Combining Your Work",
      orchardMetaphor: "Combining Your Work",
      hint: "Focus on understanding Combining Your Work",
      validation: "Concept \"Combining Your Work\" understood"
    },
    {
      order: 2,
      instruction: "Learn about: Merging",
      orchardMetaphor: "Merging",
      hint: "Focus on understanding Merging",
      validation: "Concept \"Merging\" understood"
    },
    {
      order: 3,
      instruction: "Learn about: The Concept",
      orchardMetaphor: "The Concept",
      hint: "Focus on understanding The Concept",
      validation: "Concept \"The Concept\" understood"
    },
    {
      order: 4,
      instruction: "Learn about: Before Merge",
      orchardMetaphor: "Before graft branches together",
      hint: "Focus on understanding Before Merge",
      validation: "Concept \"Before Merge\" understood"
    }
  ],
  completionCriteria: "Complete all quest steps successfully",
  reward: {
    description: "Completed: Merging branches",
    visualEffect: "new branch grows",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 20,
  difficulty: "intermediate"
},
  {
  id: "quest-branches-switching-branches",
  lessonId: "branches-switching-branches",
  title: "Cultivation: Switching branches",
  description: "Switching branches changes which version of your project you're looking at and working on.",
  orchardNarrative: "In the Canopy, the Branch Botanist invites you to learn about switching branches changes which version of your project you're looking at and working on.",
  gitConcept: "Switching branches",
  gitExplanation: "Switching branches changes which version of your project you're looking at and working on.\r",
  npcInvolved: "botanist",
  questType: QuestType.CultivationTask,
  preconditions: [
    "prev-quest-in-zone"
  ],
  steps: [
    {
      order: 1,
      instruction: "Learn about: Moving Between Timelines",
      orchardMetaphor: "Moving Between Timelines",
      hint: "Focus on understanding Moving Between Timelines",
      validation: "Concept \"Moving Between Timelines\" understood"
    },
    {
      order: 2,
      instruction: "Learn about: How to Switch Branches",
      orchardMetaphor: "How to Switch Branches",
      hint: "Focus on understanding How to Switch Branches",
      validation: "Concept \"How to Switch Branches\" understood"
    },
    {
      order: 3,
      instruction: "Learn about: The Simple Way",
      orchardMetaphor: "The Simple Way",
      hint: "Focus on understanding The Simple Way",
      validation: "Concept \"The Simple Way\" understood"
    },
    {
      order: 4,
      instruction: "Learn about: 1. Click \"Current Branch\" dropdown",
      orchardMetaphor: "1. Click \"Current limb on your tree\" dropdown",
      hint: "Focus on understanding 1. Click \"Current Branch\" dropdown",
      validation: "Concept \"1. Click \"Current Branch\" dropdown\" understood"
    }
  ],
  completionCriteria: "Finish the cultivation task",
  reward: {
    description: "Completed: Switching branches",
    visualEffect: "new branch grows",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 10,
  difficulty: "intermediate"
},
  {
  id: "quest-branches-what-are-branches",
  lessonId: "branches-what-are-branches",
  title: "the Branch Botanist's Wisdom: What are branches",
  description: "**Branches** let you work on different versions of your project simultaneously.",
  orchardNarrative: "In the Canopy, the Branch Botanist invites you to learn about **branches** let you work on different versions of your project simultaneously.",
  gitConcept: "What are branches",
  gitExplanation: "**Branches** let you work on different versions of your project simultaneously.\r",
  npcInvolved: "botanist",
  questType: QuestType.Advice,
  preconditions: [
    "prev-quest-in-zone"
  ],
  steps: [
    {
      order: 1,
      instruction: "Listen to the explanation",
      orchardMetaphor: "Absorb the wisdom like rain nourishing soil",
      validation: "Understanding achieved"
    },
    {
      order: 2,
      instruction: "Reflect on the concept",
      orchardMetaphor: "Let the knowledge take root",
      validation: "Ready to apply"
    }
  ],
  completionCriteria: "Read and understand the explanation",
  reward: {
    description: "Completed: What are branches",
    visualEffect: "new branch grows",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 10,
  difficulty: "intermediate"
},
  {
  id: "quest-collaboration-code-review",
  lessonId: "collaboration-code-review",
  title: "the Seed Forager's Wisdom: Code review",
  description: "**Code review** = Teammates reading and providing feedback on your code before it merges.",
  orchardNarrative: "In the Orchard Edge, the Seed Forager invites you to learn about **code review** = teammates reading and providing feedback on your code before it graft branches together.",
  gitConcept: "Code review",
  gitExplanation: "**Code review** = Teammates reading and providing feedback on your code before it merges.\r",
  npcInvolved: "forager",
  questType: QuestType.Advice,
  preconditions: [
    "prev-quest-in-zone"
  ],
  steps: [
    {
      order: 1,
      instruction: "Listen to the explanation",
      orchardMetaphor: "Absorb the wisdom like rain nourishing soil",
      validation: "Understanding achieved"
    },
    {
      order: 2,
      instruction: "Reflect on the concept",
      orchardMetaphor: "Let the knowledge take root",
      validation: "Ready to apply"
    }
  ],
  completionCriteria: "Read and understand the explanation",
  reward: {
    description: "Completed: Code review",
    visualEffect: "connection forms",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 10,
  difficulty: "intermediate"
},
  {
  id: "quest-collaboration-fetching-changes",
  lessonId: "collaboration-fetching-changes",
  title: "Quest: Fetching changes",
  description: "When working with others, you need to regularly fetch their updates from GitHub.",
  orchardNarrative: "In the Orchard Edge, the Seed Forager invites you to learn about when working with others, you need to regularly gather seeds from neighboring groves their updates from github.",
  gitConcept: "Fetching changes",
  gitExplanation: "When working with others, you need to regularly fetch their updates from GitHub.\r",
  npcInvolved: "forager",
  questType: QuestType.Quest,
  preconditions: [
    "prev-quest-in-zone"
  ],
  steps: [
    {
      order: 1,
      instruction: "Learn about: Staying in Sync with Your Team",
      orchardMetaphor: "Staying in Sync with Your Team",
      hint: "Focus on understanding Staying in Sync with Your Team",
      validation: "Concept \"Staying in Sync with Your Team\" understood"
    },
    {
      order: 2,
      instruction: "Learn about: Fetch vs Pull (Quick Reminder)",
      orchardMetaphor: "gather seeds from neighboring groves vs bring in water and nutrients (Quick Reminder)",
      hint: "Focus on understanding Fetch vs Pull (Quick Reminder)",
      validation: "Concept \"Fetch vs Pull (Quick Reminder)\" understood"
    },
    {
      order: 3,
      instruction: "Learn about: Fetch",
      orchardMetaphor: "gather seeds from neighboring groves",
      hint: "Focus on understanding Fetch",
      validation: "Concept \"Fetch\" understood"
    },
    {
      order: 4,
      instruction: "Learn about: Check",
      orchardMetaphor: "Check",
      hint: "Focus on understanding Check",
      validation: "Concept \"Check\" understood"
    }
  ],
  completionCriteria: "Complete all quest steps successfully",
  reward: {
    description: "Completed: Fetching changes",
    visualEffect: "connection forms",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 15,
  difficulty: "intermediate"
},
  {
  id: "quest-collaboration-handling-conflicts",
  lessonId: "collaboration-handling-conflicts",
  title: "Quest: Handling conflicts",
  description: "**Merge conflict** = Git can't automatically combine changes - you must decide what to keep.",
  orchardNarrative: "In the Orchard Edge, the Seed Forager invites you to learn about **graft branches together untangle overlapping vines** = git can't automatically combine changes - you must decide what to keep.",
  gitConcept: "Handling conflicts",
  gitExplanation: "**Merge conflict** = Git can't automatically combine changes - you must decide what to keep.\r",
  npcInvolved: "forager",
  questType: QuestType.Quest,
  preconditions: [
    "prev-quest-in-zone"
  ],
  steps: [
    {
      order: 1,
      instruction: "Learn about: When Git Needs Your Help",
      orchardMetaphor: "When Git Needs Your Help",
      hint: "Focus on understanding When Git Needs Your Help",
      validation: "Concept \"When Git Needs Your Help\" understood"
    },
    {
      order: 2,
      instruction: "Learn about: Merge conflict",
      orchardMetaphor: "graft branches together untangle overlapping vines",
      hint: "Focus on understanding Merge conflict",
      validation: "Concept \"Merge conflict\" understood"
    },
    {
      order: 3,
      instruction: "Learn about: Don't panic!",
      orchardMetaphor: "Don't panic!",
      hint: "Focus on understanding Don't panic!",
      validation: "Concept \"Don't panic!\" understood"
    },
    {
      order: 4,
      instruction: "Learn about: What is a Merge Conflict?",
      orchardMetaphor: "What is a graft branches together untangle overlapping vines?",
      hint: "Focus on understanding What is a Merge Conflict?",
      validation: "Concept \"What is a Merge Conflict?\" understood"
    }
  ],
  completionCriteria: "Complete all quest steps successfully",
  reward: {
    description: "Completed: Handling conflicts",
    visualEffect: "connection forms",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 25,
  difficulty: "intermediate"
},
  {
  id: "quest-collaboration-pull-requests",
  lessonId: "collaboration-pull-requests",
  title: "the Seed Forager's Wisdom: Pull requests",
  description: "**Pull Request (PR)** = \"Hey team, I finished a feature! Please review before merging.\"",
  orchardNarrative: "In the Orchard Edge, the Seed Forager invites you to learn about **bring in water and nutrients request (pr)** = \"hey team, i finished a feature! please review before merging.\"",
  gitConcept: "Pull requests",
  gitExplanation: "**Pull Request (PR)** = \"Hey team, I finished a feature! Please review before merging.\"\r",
  npcInvolved: "forager",
  questType: QuestType.Advice,
  preconditions: [
    "prev-quest-in-zone"
  ],
  steps: [
    {
      order: 1,
      instruction: "Listen to the explanation",
      orchardMetaphor: "Absorb the wisdom like rain nourishing soil",
      validation: "Understanding achieved"
    },
    {
      order: 2,
      instruction: "Reflect on the concept",
      orchardMetaphor: "Let the knowledge take root",
      validation: "Ready to apply"
    }
  ],
  completionCriteria: "Read and understand the explanation",
  reward: {
    description: "Completed: Pull requests",
    visualEffect: "connection forms",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 12,
  difficulty: "intermediate"
},
  {
  id: "quest-advanced-features-stashing",
  lessonId: "advanced-features-stashing",
  title: "Quest: Stashing",
  description: "**Stash** = Save uncommitted changes temporarily without committing them.",
  orchardNarrative: "In the Conservatory, the Branch Botanist invites you to learn about **move buds to a nursery bed** = save uncommitted changes temporarily without committing them.",
  gitConcept: "Stashing",
  gitExplanation: "**Stash** = Save uncommitted changes temporarily without committing them.\r",
  npcInvolved: "botanist",
  questType: QuestType.Quest,
  preconditions: [
    "prev-quest-in-zone"
  ],
  steps: [
    {
      order: 1,
      instruction: "Learn about: Temporarily Setting Work Aside",
      orchardMetaphor: "Temporarily Setting Work Aside",
      hint: "Focus on understanding Temporarily Setting Work Aside",
      validation: "Concept \"Temporarily Setting Work Aside\" understood"
    },
    {
      order: 2,
      instruction: "Learn about: Stash",
      orchardMetaphor: "move buds to a nursery bed",
      hint: "Focus on understanding Stash",
      validation: "Concept \"Stash\" understood"
    },
    {
      order: 3,
      instruction: "Learn about: What is Stashing?",
      orchardMetaphor: "What is Stashing?",
      hint: "Focus on understanding What is Stashing?",
      validation: "Concept \"What is Stashing?\" understood"
    },
    {
      order: 4,
      instruction: "Learn about: The Problem",
      orchardMetaphor: "The Problem",
      hint: "Focus on understanding The Problem",
      validation: "Concept \"The Problem\" understood"
    }
  ],
  completionCriteria: "Complete all quest steps successfully",
  reward: {
    description: "Completed: Stashing",
    visualEffect: "rare bloom appears",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 18,
  difficulty: "advanced"
},
  {
  id: "quest-advanced-features-tags",
  lessonId: "advanced-features-tags",
  title: "Cultivation: Tags",
  description: "**Tags** = Bookmarks for specific commits (usually releases)",
  orchardNarrative: "In the Conservatory, the Branch Botanist invites you to learn about **place a ribbon marker** = bookmarks for specific growth ring (usually releases)",
  gitConcept: "Tags",
  gitExplanation: "**Tags** = Bookmarks for specific commits (usually releases)\r",
  npcInvolved: "botanist",
  questType: QuestType.CultivationTask,
  preconditions: [
    "prev-quest-in-zone"
  ],
  steps: [
    {
      order: 1,
      instruction: "Learn about: Marking Important Points in History",
      orchardMetaphor: "Marking Important Points in History",
      hint: "Focus on understanding Marking Important Points in History",
      validation: "Concept \"Marking Important Points in History\" understood"
    },
    {
      order: 2,
      instruction: "Learn about: Tags",
      orchardMetaphor: "place a ribbon marker",
      hint: "Focus on understanding Tags",
      validation: "Concept \"Tags\" understood"
    },
    {
      order: 3,
      instruction: "Learn about: What Are Tags?",
      orchardMetaphor: "What Are place a ribbon marker?",
      hint: "Focus on understanding What Are Tags?",
      validation: "Concept \"What Are Tags?\" understood"
    },
    {
      order: 4,
      instruction: "Learn about: Permanent Labels",
      orchardMetaphor: "Permanent Labels",
      hint: "Focus on understanding Permanent Labels",
      validation: "Concept \"Permanent Labels\" understood"
    }
  ],
  completionCriteria: "Finish the cultivation task",
  reward: {
    description: "Completed: Tags",
    visualEffect: "rare bloom appears",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 12,
  difficulty: "advanced"
},
  {
  id: "quest-advanced-features-undoing-changes",
  lessonId: "advanced-features-undoing-changes",
  title: "Quest: Undoing changes",
  description: "Learn how to safely undo changes at every stage of your Git workflow.",
  orchardNarrative: "In the Conservatory, the Branch Botanist invites you to learn about learn how to safely undo changes at every stage of your git workflow.",
  gitConcept: "Undoing changes",
  gitExplanation: "Learn how to safely undo changes at every stage of your Git workflow.\r",
  npcInvolved: "botanist",
  questType: QuestType.Quest,
  preconditions: [
    "prev-quest-in-zone"
  ],
  steps: [
    {
      order: 1,
      instruction: "Learn about: Everyone Makes Mistakes!",
      orchardMetaphor: "Everyone Makes Mistakes!",
      hint: "Focus on understanding Everyone Makes Mistakes!",
      validation: "Concept \"Everyone Makes Mistakes!\" understood"
    },
    {
      order: 2,
      instruction: "Learn about: Types of Undo Operations",
      orchardMetaphor: "Types of Undo Operations",
      hint: "Focus on understanding Types of Undo Operations",
      validation: "Concept \"Types of Undo Operations\" understood"
    },
    {
      order: 3,
      instruction: "Learn about: Different Situations",
      orchardMetaphor: "Different Situations",
      hint: "Focus on understanding Different Situations",
      validation: "Concept \"Different Situations\" understood"
    },
    {
      order: 4,
      instruction: "Learn about: Undo unstaged changes",
      orchardMetaphor: "Undo unstaged changes",
      hint: "Focus on understanding Undo unstaged changes",
      validation: "Concept \"Undo unstaged changes\" understood"
    }
  ],
  completionCriteria: "Complete all quest steps successfully",
  reward: {
    description: "Completed: Undoing changes",
    visualEffect: "rare bloom appears",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 22,
  difficulty: "advanced"
},
  {
  id: "quest-best-practices-common-issues",
  lessonId: "best-practices-common-issues",
  title: "Quest: Common issues",
  description: "Quick solutions to common problems you might encounter.",
  orchardNarrative: "In the Perimeter Trail, the Seed Forager invites you to learn about quick solutions to common problems you might encounter.",
  gitConcept: "Common issues",
  gitExplanation: "Quick solutions to common problems you might encounter.\r",
  npcInvolved: "forager",
  questType: QuestType.Quest,
  preconditions: [
    "prev-quest-in-zone"
  ],
  steps: [
    {
      order: 1,
      instruction: "Learn about: Troubleshooting GitHub Desktop",
      orchardMetaphor: "Troubleshooting GitHub Desktop",
      hint: "Focus on understanding Troubleshooting GitHub Desktop",
      validation: "Concept \"Troubleshooting GitHub Desktop\" understood"
    },
    {
      order: 2,
      instruction: "Learn about: \"Failed to Push\"",
      orchardMetaphor: "\"Failed to share seeds with other orchards\"",
      hint: "Focus on understanding \"Failed to Push\"",
      validation: "Concept \"\"Failed to Push\"\" understood"
    },
    {
      order: 3,
      instruction: "Learn about: Symptom",
      orchardMetaphor: "Symptom",
      hint: "Focus on understanding Symptom",
      validation: "Concept \"Symptom\" understood"
    },
    {
      order: 4,
      instruction: "Learn about: Cause",
      orchardMetaphor: "Cause",
      hint: "Focus on understanding Cause",
      validation: "Concept \"Cause\" understood"
    }
  ],
  completionCriteria: "Complete all quest steps successfully",
  reward: {
    description: "Completed: Common issues",
    visualEffect: "wisdom marker placed",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 20,
  difficulty: "intermediate"
},
  {
  id: "quest-best-practices-git-workflow",
  lessonId: "best-practices-git-workflow",
  title: "the Seed Forager's Wisdom: Git workflow",
  description: "Learn the workflows used by professional development teams.",
  orchardNarrative: "In the Perimeter Trail, the Seed Forager invites you to learn about learn the workflows used by professional development teams.",
  gitConcept: "Git workflow",
  gitExplanation: "Learn the workflows used by professional development teams.\r",
  npcInvolved: "forager",
  questType: QuestType.Advice,
  preconditions: [
    "prev-quest-in-zone"
  ],
  steps: [
    {
      order: 1,
      instruction: "Listen to the explanation",
      orchardMetaphor: "Absorb the wisdom like rain nourishing soil",
      validation: "Understanding achieved"
    },
    {
      order: 2,
      instruction: "Reflect on the concept",
      orchardMetaphor: "Let the knowledge take root",
      validation: "Ready to apply"
    }
  ],
  completionCriteria: "Read and understand the explanation",
  reward: {
    description: "Completed: Git workflow",
    visualEffect: "wisdom marker placed",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 15,
  difficulty: "intermediate"
},
  {
  id: "quest-best-practices-security-tips",
  lessonId: "best-practices-security-tips",
  title: "the Seed Forager's Wisdom: Security tips",
  description: "Essential security practices for Git and GitHub.",
  orchardNarrative: "In the Perimeter Trail, the Seed Forager invites you to learn about essential security practices for git and github.",
  gitConcept: "Security tips",
  gitExplanation: "Essential security practices for Git and GitHub.\r",
  npcInvolved: "forager",
  questType: QuestType.Advice,
  preconditions: [
    "prev-quest-in-zone"
  ],
  steps: [
    {
      order: 1,
      instruction: "Listen to the explanation",
      orchardMetaphor: "Absorb the wisdom like rain nourishing soil",
      validation: "Understanding achieved"
    },
    {
      order: 2,
      instruction: "Reflect on the concept",
      orchardMetaphor: "Let the knowledge take root",
      validation: "Ready to apply"
    }
  ],
  completionCriteria: "Read and understand the explanation",
  reward: {
    description: "Completed: Security tips",
    visualEffect: "wisdom marker placed",
    unlocks: [
      "next-quest"
    ]
  },
  estimatedMinutes: 10,
  difficulty: "intermediate"
}
];

export function getQuestById(id: string): QuestDefinition | undefined {
  return ALL_QUESTS.find(q => q.id === id);
}

export function getQuestsByLesson(lessonId: string): QuestDefinition[] {
  return ALL_QUESTS.filter(q => q.lessonId === lessonId);
}

export function getQuestsByNPC(npcId: string): QuestDefinition[] {
  return ALL_QUESTS.filter(q => q.npcInvolved === npcId);
}

export function getQuestsByType(type: QuestType): QuestDefinition[] {
  return ALL_QUESTS.filter(q => q.questType === type);
}

export function getAvailableQuests(completedQuestIds: Set<string>): QuestDefinition[] {
  return ALL_QUESTS.filter(quest => {
    // Check if all preconditions are met
    return quest.preconditions.every(preId => completedQuestIds.has(preId));
  });
}
