# Understanding Commits

## What is a Commit?

A **commit** is a snapshot of your project at a specific point in time.

**Think of commits as**:
- 📸 Photographs of your project
- 💾 Save points in a video game
- 📝 Entries in a diary
- ⏱️ Checkpoints you can return to

## Why Make Commits?

### 1. Track Progress
See how your project evolved over time

### 2. Undo Mistakes
Go back to when things worked

### 3. Understand Changes
Remember what you did and why

### 4. Collaborate
Share specific changes with teammates

### 5. Experiment Safely
Try things knowing you can always go back

---

## Anatomy of a Commit

Every commit contains:

### 1. Changes (The What)
Which files changed and how

### 2. Message (The Why)
Your description of what changed

### 3. Author (The Who)
Your name and email

### 4. Timestamp (The When)
Exact date and time

### 5. Unique ID (SHA)
A special code like: `a3d5f2b`

### 6. Parent Commit
Link to the previous commit

---

## Commit Example

```
Commit: a3d5f2b
Author: Mike Johnson <mike@email.com>
Date: 2024-01-15 10:30 AM

    Add login button to homepage

    Changed:
    - index.html: +15 lines, -3 lines
    - style.css: +8 lines
```

---

## How Commits Work

### The Commit Chain

Commits form a chain, like links:

```
First commit → Second commit → Third commit → Current
   (a1b2c)        (d3e4f)        (g5h6i)      (j7k8l)
```

Each commit points to the one before it, creating a **timeline** of your project.

### Visual Representation

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  Initial    │───►│  Add CSS    │───►│  Fix bug    │
│  commit     │    │  styling    │    │  in login   │
└─────────────┘    └─────────────┘    └─────────────┘
   3 days ago         2 days ago         1 day ago
```

---

## Good vs Bad Commits

### Good Commits ✅

**Focused**:
```
Commit: "Add email validation to signup form"
Changes: Only email validation code
```

**Clear message**:
```
Commit: "Fix navigation menu on mobile devices"
Changes: Mobile CSS fixes
```

**Logical unit**:
```
Commit: "Update contact page with new phone number"
Changes: Contact info only
```

### Bad Commits ❌

**Too vague**:
```
Commit: "Updates"
Changes: What updated? No idea!
```

**Too many things**:
```
Commit: "Fix bugs and add features and update styles"
Changes: 47 files (should be multiple commits)
```

**Typo-ridden**:
```
Commit: "addd teh new buttton"
Changes: Professional, but message isn't!
```

---

## Commit Messages Best Practices

### The Two-Part Message

**Summary (Required)**:
- One line
- 50 characters or less
- Describe WHAT changed
- Start with a verb

**Description (Optional)**:
- Blank line after summary
- Explain WHY you made the change
- Add context or reasoning

### Examples

**Simple commit**:
```
Add search functionality to navbar
```

**Commit with description**:
```
Add search functionality to navbar

Users requested ability to search from any page.
Search box appears in header on all pages and
redirects to search results page.
```

### Good First Words

Use these verbs to start commit messages:

- **Add**: New feature or file
  - "Add user profile page"
- **Update**: Modify existing feature
  - "Update footer with new logo"
- **Fix**: Bug repair
  - "Fix broken link in navigation"
- **Remove**: Delete code or feature
  - "Remove deprecated API calls"
- **Refactor**: Improve code without changing behavior
  - "Refactor login validation"

---

## When to Commit?

### Commit Often!

**Good times to commit**:
- ✅ Completed a feature
- ✅ Fixed a bug
- ✅ Reached a working state
- ✅ Before trying something risky
- ✅ End of work session

**Bad times to commit**:
- ❌ Code doesn't work
- ❌ Commented-out code everywhere
- ❌ Temporary test code included
- ❌ Halfway through a thought

### The Working State Rule

**Always commit when**:
- Code compiles/runs
- Tests pass
- Feature is complete (even if small)

**Why?** You can always return to a working state!

---

## Commit Size

### Small, Focused Commits

**Good**:
```
Commit 1: "Add email field to signup form"
Commit 2: "Add email validation"
Commit 3: "Style email field to match design"
```

**Benefits**:
- Easy to understand
- Easy to undo specific changes
- Clear history

### Large, Kitchen-Sink Commits

**Bad**:
```
Commit: "Update entire website"
Changes: 50 files, 2000 lines
```

**Problems**:
- Hard to understand what changed
- Hard to undo if something breaks
- Messy history

### The Right Size

**One logical change = One commit**

Examples:
- Add one feature ✅
- Fix one bug ✅
- Update one component ✅
- Refactor one function ✅

---

## The Staging Area Concept

Before committing, changes go through **staging**:

```
Working Directory → Staging Area → Commit

   (Your files)      (Selected     (Permanent
                      changes)      snapshot)
```

### Why Staging?

**Control what goes in a commit**:
- Modified 5 files
- Only want to commit 3
- Stage those 3, commit them
- Other 2 wait for next commit

We'll cover staging in detail in `04-making-changes/staging-changes.md`!

---

## Commit Hash (ID)

### What is it?

Every commit gets a unique ID:
```
a3d5f2b8e1c4d6f9a2b5c7e8f1d3a5b7c9e1f3d5
```

### Why?

- Uniquely identifies each commit
- Use it to reference specific commits
- Git uses it internally

### Short Version

Usually shown as first 7 characters:
```
a3d5f2b
```

This is still unique enough!

---

## Viewing Commits

### In GitHub Desktop

**History tab**:
1. Click "History" in left sidebar
2. See list of all commits
3. Click any commit to see what changed

**What you see**:
- Commit message
- Author and date
- Files changed
- Line-by-line changes

### On GitHub.com

**Commits page**:
- Repository page → "Commits"
- Browse all commits
- Click any to see details

---

## Commit History

### Linear History

Simple projects:
```
A → B → C → D → E
```

One straight line of commits.

### Branched History

Projects with branches:
```
        D → E → F
       /         \
A → B → C → G → H → I
```

We'll cover this in `05-branches/`!

---

## Undoing Commits

### You Can Undo!

Don't worry about committing - you can:
- Revert a commit (undo changes)
- Amend a commit (fix the last one)
- Reset to previous commit

We'll cover this in `07-advanced-features/undoing-changes.md`!

---

## Atomic Commits

### What is an Atomic Commit?

**One complete, self-contained change**

Like an atom - indivisible and complete.

### Example: Adding a Feature

**Atomic ✅**:
```
Commit: "Add dark mode toggle"
- Add toggle button
- Add dark mode CSS
- Add localStorage to remember preference
```

All parts needed for the feature work together.

**Not Atomic ❌**:
```
Commit 1: "Add dark mode toggle button"
Commit 2: "Add some CSS"
Commit 3: "Fix toggle button (wasn't finished)"
```

Feature spread across multiple commits, incomplete states.

### Benefits

- Each commit leaves project in working state
- Easy to understand history
- Safe to revert any commit

---

## Commits in Team Projects

### Who Sees Your Commits?

**Local commits**:
- Only on your computer
- Not visible to teammates
- Not backed up

**Pushed commits**:
- On GitHub
- Visible to team
- Permanent record

### Commit Etiquette

1. **Clear messages** - Team needs to understand
2. **Working code** - Don't break the build
3. **Focused changes** - Easier to review
4. **Regular commits** - Don't hoard changes

---

## Commit Metadata

### What's Stored

Every commit records:
```
Author: Your Name <your@email.com>
Date: Mon Jan 15 10:30:45 2024
Committer: Same as author (usually)
Parent: Previous commit ID
Tree: File structure snapshot
```

### Your Identity

**Important**: Commits are signed with your name and email!

This is why we set it up in `01-getting-started/initial-setup.md`.

---

## Common Questions

### Q: Can I edit a commit?
**A**: The most recent commit, yes (amending). Older commits get complicated.

### Q: Can I delete a commit?
**A**: Locally, yes. If pushed to GitHub, it's permanent in history.

### Q: How many commits is too many?
**A**: No limit! More commits (if meaningful) is better than fewer.

### Q: Should I commit every time I save a file?
**A**: No - commit when you complete a logical unit of work.

### Q: What if I forget to commit?
**A**: Commit when you remember! Better late than never.

---

## Commits and Backups

### Commits Are Not Backups

**Commits**:
- Track changes
- Create history
- Allow undos

**Backups**:
- Copy of entire project
- Protection against data loss

### Use Both!

- Commit regularly (history)
- Push to GitHub (backup)
- Local commits + remote backup = safe!

---

## Key Takeaways

1. **Commit** = Snapshot of your project
2. **Commit often** = More save points
3. **Good messages** = Future you will thank you
4. **Small commits** = Easier to manage
5. **Working code** = Each commit should work
6. **Unique ID** = Every commit is identifiable
7. **Chain of history** = Commits link together

---

## Commit Checklist

Before committing, ask:
- ✅ Does my code work?
- ✅ Is this a complete logical change?
- ✅ Did I write a clear commit message?
- ✅ Am I committing only related changes?
- ✅ Did I remove any debug/test code?

---

## What's Next?

Now that you understand commits, let's tour the GitHub Desktop interface!

👉 **Next**: `interface-tour.md`

---

## Quick Reference

| Term | Meaning |
|------|---------|
| **Commit** | Snapshot of project |
| **Message** | Description of changes |
| **Hash/SHA** | Unique commit ID |
| **Author** | Who made the commit |
| **Timestamp** | When commit was made |
| **Atomic** | One complete change |
| **HEAD** | Most recent commit |
