# NPC Guide - Orchard of Branches

## Overview

Three NPCs guide the learner through the orchard, each with distinct personalities and areas of expertise. They teach Git concepts through orchard metaphors, making complex topics accessible and welcoming.

---

## 🧑‍🌾 The Orchard Keeper

### Role
Primary guide and mentor. The welcoming face of the orchard who introduces foundational concepts and helps beginners feel at home.

### Personality Traits
- **Warm and patient**: Never rushes, always encouraging
- **Practical and grounded**: Focuses on "why" before "how"
- **Storytelling approach**: Uses anecdotes and examples
- **Reassuring**: Normalizes mistakes as part of learning

### Speaking Style
- Uses "we" and "let's" (collaborative)
- Gentle questions instead of commands
- Calm, measured pace
- Frequently references nature and growth

### Example Dialogue
> "Welcome to the grove! I'm so glad you're here. Think of this orchard as your personal learning space—a place where understanding grows naturally, one step at a time. Every gardener started where you are now, and I'll be right here to help you tend your first seedlings."

### Lesson Associations

#### 01-getting-started (Inner Clearing)
- `what-is-github-desktop.md` → Introduces the orchard metaphor
- `installation.md` → Setting up your garden tools
- `initial-setup.md` → Preparing the soil

#### 02-basic-concepts (Inner Clearing)
- `repositories.md` → Understanding your first tree
- `commits.md` → Recording growth rings
- `git-vs-github.md` → Local grove vs shared orchards
- `interface-tour.md` → Learning your garden layout

#### 03-creating-repos (Trunk Region)
- `creating-new-repo.md` → Planting your first tree
- `cloning-repos.md` → Taking a cutting from another orchard
- `opening-repos.md` → Returning to established groves

#### 04-making-changes (Trunk Region)
- `making-your-first-commit.md` → Creating your first growth ring
- `staging-changes.md` → Preparing saplings for planting
- `writing-commit-messages.md` → Labeling your plantings

### Quest Types
- **Advice**: Explanatory dialogues for foundational concepts
- **Cultivation Tasks**: Simple, guided first actions
- **Beginner Quests**: Step-by-step walkthroughs

---

## 🔬 The Branch Botanist

### Role
Specialist in branching, growth patterns, and more complex orchard management. Takes over once basics are established.

### Personality Traits
- **Thoughtful and detailed**: Loves explaining the "why"
- **Scientifically curious**: Explores how things work
- **Methodical**: Step-by-step, systematic approach
- **Encouraging experimentation**: "Try it and see what happens!"

### Speaking Style
- More technical but still accessible
- Uses diagrams and visual explanations
- Asks probing questions to deepen understanding
- Loves metaphors of interconnection

### Example Dialogue
> "Ah, you're ready to explore branching! Fascinating topic. You see, branches in our orchard work just like branches on a tree—they diverge from the trunk, grow independently, and can even be grafted back together. Let me show you how this pattern unlocks some truly powerful cultivation techniques."

### Lesson Associations

#### 05-branches (Canopy)
- `what-are-branches.md` → Understanding limb growth
- `creating-branches.md` → Growing new limbs
- `switching-branches.md` → Moving between branches
- `merging-branches.md` → Grafting branches together
- `deleting-branches.md` → Pruning old growth

#### 04-making-changes (Trunk Region)
- `viewing-history.md` → Examining growth rings
- `pushing-and-pulling.md` → Sharing growth with other orchards

#### 07-advanced-features (Conservatory)
- `undoing-changes.md` → Pruning and cutting back
- `stashing.md` → Moving buds to a nursery bed
- `tags.md` → Marking special growth milestones

### Quest Types
- **Structured Quests**: Multi-step challenges with branching paths
- **Experimental Tasks**: "What happens if...?" scenarios
- **Analytical Advice**: Deep dives into mechanics

---

## 🎒 The Seed Forager

### Role
Expert in connecting with external orchards, handling collaboration concepts (adapted for solo context), and understanding best practices.

### Personality Traits
- **Adventurous and outward-looking**: Thinks beyond the local grove
- **Practical and resourceful**: Focuses on real-world applications
- **Problem-solver**: "Here's how to handle tricky situations"
- **Community-minded**: Even solo work benefits from good practices

### Speaking Style
- Action-oriented ("Let's do this")
- Uses real-world scenarios
- Shares "tips from the field"
- Friendly but efficient

### Example Dialogue
> "So you want to connect with remote orchards? Smart! Even if you're working alone, understanding how to fetch seeds and share cuttings opens up whole new possibilities. I've gathered techniques from orchards all around—let me show you how to safely bring in changes and keep your grove healthy."

### Lesson Associations

#### 06-collaboration (Orchard Edge)
- `fetching-changes.md` → Gathering seeds from other orchards
- `pull-requests.md` → Proposing new plantings (self-review context)
- `handling-conflicts.md` → Untangling vines
- `code-review.md` → Inspecting your own work

**Note**: Collaboration lessons are reframed for solo use:
- PRs become self-review checkpoints
- Conflicts as"what if you changed the same area twice?"
- Code review as "stepping back to assess your work"
- Fetching as "bringing in updates from remote backups"

#### 08-best-practices (Perimeter Trail)
- `git-workflow.md` → Establishing your cultivation rhythm
- `common-issues.md` → Troubleshooting garden problems
- `security-tips.md` → Protecting your orchard

### Quest Types
- **Scenario-Based Quests**: Realistic problem-solving
- **Best Practice Tasks**: Building good habits
- **Troubleshooting Guides**: "What to do when..."

---

## NPC Assignment by Zone

| Zone | Primary NPC | Secondary NPC |
|------|-------------|---------------|
| 🌱 Inner Clearing | Orchard Keeper | — |
| 🌿 Trunk Region | Orchard Keeper | Branch Botanist |
| 🍃 Canopy | Branch Botanist | Orchard Keeper |
| 🌳 Orchard Edge | Seed Forager | Branch Botanist |
| 🏡 Conservatory | Branch Botanist | Seed Forager |
| 🚶 Perimeter Trail | Seed Forager | — |

---

## Dialogue Tone Guidelines

### Beginner-Friendly Language
✅ **Good**:
- "Let's save this work by creating a commit"
- "Think of staging as preparing plants for the garden"
- "A branch is like growing a new limb on your tree"

❌ **Avoid**:
- "Execute a commit operation on the HEAD"
- "The staging area is an intermediate index"
- "Checkout the feature branch"

### Orchard Metaphor Consistency

| Git Term | Orchard Metaphor |
|----------|------------------|
| Repository | Tree or grove |
| Commit | Growth ring, planting marker |
| Branch | Tree branch, limb |
| Merge | Grafting |
| Staging | Preparing saplings, greenhouse |
| Stash | Nursery bed, temporary holding |
| Tag | Ribbon, plaque, milestone marker |
| Clone | Taking a cutting |
| Pull | Bringing in irrigation/nutrients |
| Push | Sharing seeds/cuttings |
| Conflict | Tangled vines, overlapping roots |

### Explanation Structure

Each concept should follow this pattern:

1. **Orchard Hook**: Start with the metaphor
2. **Git Concept**: Introduce the Git term
3. **Why It Matters**: Practical benefit
4. **How to Do It**: Concrete steps
5. **Visual Feedback**: What changes in the orchard

**Example** (Orchard Keeper explaining commits):

> "Every time your tree grows, it adds a ring to its trunk—a permanent record of that moment. In Git, we call these rings 'commits.' They're snapshots of your work at a point in time. Why make commits? They let you see how your project has grown and even return to earlier versions if needed. Let's create your first growth ring together..."

---

## NPC Interactions

### When Multiple NPCs Appear
Sometimes quests involve more than one NPC:

- **Handoffs**: Orchard Keeper introduces topic, Botanist takes over for details
- **Confirmations**: Forager validates what Keeper taught
- **Debates**: NPCs might have different approaches (encourages thinking)

### NPC Availability
- NPCs "appear" in zones they're associated with
- Can reference each other: "The Botanist will teach you more about this later"
- Build relationships: User gets to know each NPC's style

---

## Voice Samples

### Orchard Keeper
- "I remember when I planted my first tree. Felt just like you probably do now—excited and a little uncertain. That's perfectly natural."
- "No need to rush. The orchard teaches patience. We'll take this one step at a time."
- "See how the sapling has grown? That's your first commit—a marker of progress."

### Branch Botanist
- "Interesting question! Let's examine what happens when branches diverge..."
- "Notice the pattern here? Each branch maintains its own timeline until we bring them together."
- "Try switching between branches and observe how the orchard changes. Fascinating, isn't it?"

### Seed Forager
- "I've seen this issue in dozens of orchards. Here's the fix..."
- "Pro tip: Always pull before you push. Saves headaches later."
- "Think of remote repos as other orchards you're connected to. You fetch their seeds and share yours."

---

## Implementation Notes

### Dialogue System (Phase 5)
- Dialogue stored as JSON trees
- Each node has: speaker, text, choices, next node
- Can branch based on progress/choices
- Support for conditional display

### NPC State
- Track which NPCs user has met
- Remember conversation history
- NPCs can reference past interactions
- Build sense of relationship over time

---

**Quest Assignment Priority:**
1. Match quest to appropriate NPC by zone
2. Consider quest type (Keeper = basics, Botanist = technical, Forager = practical)
3. Ensure tone matches NPC personality
4. Use correct metaphor language for that NPC

**Ready for quest generation!** 🌳
