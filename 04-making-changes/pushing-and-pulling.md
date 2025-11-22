# Pushing and Pulling

## Syncing with GitHub

**Push** = Upload your local commits to GitHub
**Pull** = Download commits from GitHub to your computer

Think of it as syncing between your computer and the cloud!

---

## Understanding the Sync Flow

### The Basic Cycle

```
Your Computer              GitHub.com
┌─────────────┐           ┌─────────────┐
│ Local Repo  │           │ Remote Repo │
│             │           │             │
│ Commit ──────────PUSH─────→           │
│             │           │             │
│             ←────PULL───────  Commit  │
│             │           │             │
└─────────────┘           └─────────────┘
```

**Workflow**:
1. Make commits locally
2. **Push** to share with GitHub
3. **Pull** to get updates from GitHub
4. Repeat!

---

## Pushing Your Commits

### When to Push

**Push when you want to**:
- ✅ Back up your work to the cloud
- ✅ Share commits with teammates
- ✅ Make code visible on GitHub
- ✅ End your work session

**You can commit many times locally, then push once!**

### How to Push

**Look at the top right button** in GitHub Desktop:

**"Push origin"** button appears when you have local commits to upload.

**Click "Push origin"**

That's it! Your commits are now on GitHub.

### What Gets Pushed

**Everything since your last push**:
- All new commits
- Changed files in those commits
- Branch updates

**NOT pushed**:
- Uncommitted changes (still in Changes tab)
- Files in .gitignore

---

## Pulling Updates

### When to Pull

**Pull when**:
- ✅ Starting your work day
- ✅ Before making new changes
- ✅ Teammate pushed updates
- ✅ You see "Pull origin" button

**Good habit**: Pull before you start working!

### How to Pull

**The button says "Pull origin"** when updates are available.

**Click "Pull origin"**

Your local files update with changes from GitHub!

### What Gets Pulled

**All new commits** from GitHub:
- Updates files that changed
- Adds new files
- Removes deleted files

---

## The Fetch Button

### What is Fetch?

**"Fetch origin"** = Check GitHub for updates (without applying them)

Think of it as "check mail" vs "read mail"

### How Fetch Works

**Click "Fetch origin"**

GitHub Desktop checks GitHub and tells you:
- ✅ "No changes" - You're up to date
- ↓ "Pull 3 commits" - Updates available
- ↑ "Push 2 commits" - You have local commits
- ↑↓ Both push and pull available

### Auto-Fetch

**GitHub Desktop auto-fetches** every few minutes!

Look at bottom: "Last fetched: 2 minutes ago"

You rarely need to manually fetch.

---

## Understanding the Buttons

### "Fetch origin"

```
┌──────────────┐
│ Fetch origin │  ← Click to check for updates
└──────────────┘
```

**Does**: Checks GitHub, doesn't change your files

### "Pull origin"

```
┌──────────────┐
│ Pull origin  │  ← Updates available!
│      ↓ 3     │     (3 commits to pull)
└──────────────┘
```

**Does**: Downloads and applies updates

### "Push origin"

```
┌──────────────┐
│ Push origin  │  ← You have local commits!
│      ↑ 2     │     (2 commits to push)
└──────────────┘
```

**Does**: Uploads your commits

### "Publish branch"

```
┌──────────────────┐
│ Publish branch   │  ← First-time push of new branch
└──────────────────┘
```

**Does**: Creates branch on GitHub, pushes commits

---

## Complete Workflow Example

### Day 1: You Work Solo

**Morning**:
1. Open GitHub Desktop
2. Button says "Fetch origin" - no updates
3. Make changes → commit → commit → commit
4. Button says "Push origin ↑3"
5. Click "Push origin"
6. Your 3 commits are now on GitHub!

**End of day**: Everything is backed up on GitHub ✅

### Day 2: Teammate Made Changes

**Morning**:
1. Open GitHub Desktop
2. Auto-fetch runs
3. Button says "Pull origin ↓2" - teammate pushed!
4. Click "Pull origin"
5. Get teammate's changes
6. Make your changes → commit → push
7. Both your work is synced!

---

## Push and Pull with Branches

We'll learn branches in Phase 5, but here's a preview:

**Pushing/pulling is per-branch**:
```
┌──────────────┐           ┌──────────────┐
│ main branch  │──Push────→│ main branch  │
│              │           │              │
│ feature-x    │──Push────→│ feature-x    │
│ branch       │           │ branch       │
└──────────────┘           └──────────────┘
  Your Computer              GitHub
```

Each branch pushes/pulls independently!

---

## Common Scenarios

### Scenario 1: Just You, Solo Project

**Workflow**:
1. Work and commit locally
2. Push at end of day (backup)
3. Next day: pull first (habit), then work

**Simple!** No conflicts, just syncing.

### Scenario 2: Team Project

**Workflow**:
1. **Morning**: Pull to get team's updates
2. Work and commit
3. **Before pushing**: Pull again (get latest)
4. Push your commits
5. **Repeat**

**Key**: Pull often to stay in sync!

### Scenario 3: Multiple Computers

**At work computer**:
1. Work → commit → push

**At home computer**:
1. Pull (get work commits)
2. Work → commit → push

**Back at work**:
1. Pull (get home commits)
2. Continue working

**Computers stay in sync!**

---

## What If You Pull and Have Uncommitted Changes?

### Safe Scenario

**Uncommitted changes to file A**
**Pull brings changes to file B**

**Result**: Both changes coexist, no problem!

### Conflict Scenario

**Uncommitted changes to file A**
**Pull brings changes to SAME file A**

**Result**: GitHub Desktop warns you!

**Solutions**:
1. **Commit your changes first** (recommended)
2. **Stash your changes** (advanced - learn in Phase 7)
3. **Discard your changes** (if you don't need them)

**Best practice**: Commit before pulling!

---

## Push/Pull Best Practices

### 1. Pull Before You Start Working

**Morning routine**:
```
1. Open project
2. Pull latest changes
3. Start working
```

Prevents conflicts!

### 2. Commit Before Pulling

**Have uncommitted work?** Commit it first:
```
1. Make changes
2. Commit locally
3. Pull updates
4. Push your commits
```

### 3. Push at Logical Stopping Points

**Good times to push**:
- End of work session
- Completed feature
- Before switching computers
- Before taking a break

### 4. Fetch is Automatic

**Don't worry about manually fetching** - it happens automatically!

### 5. Push Often in Teams

**Team projects**: Push frequently so others can see your progress

**Solo projects**: Can batch commits and push once

---

## Understanding Origin

### What is "origin"?

**Origin** = The default name for your GitHub repository

When you clone or create a repo, GitHub Desktop automatically names the remote "origin"

**Full URL example**:
```
origin → https://github.com/yourusername/your-repo.git
```

You'll almost always push/pull to "origin"

---

## Checking Sync Status

### Status Indicators

**In Changes tab**:
- Number of commits ahead/behind

**In History tab**:
- Commits marked if not pushed yet
- Indicator showing sync status

**Status bar (bottom)**:
- "Last fetched: X minutes ago"

### In Sync

**No numbers, green checkmark** = Everything synced!

### Out of Sync

**↑ 2** = 2 commits to push
**↓ 3** = 3 commits to pull
**↑2 ↓1** = 2 to push, 1 to pull

---

## Force Push (⚠️ Dangerous)

### What is Force Push?

**Force push** = Overwrite GitHub history with your local version

**Shown as**: "Force push origin"

### When GitHub Desktop Shows This

**Rare situations**:
- You rewrote local history
- Advanced operations

### Should You Do It?

**Solo project**: Maybe, if you know what you're doing
**Team project**: **❌ NO!** You'll overwrite teammates' work

**If unsure**: **Don't force push!** Ask for help.

---

## Troubleshooting

### "Failed to push"

**Causes**:
1. No internet connection
2. Someone else pushed first
3. Don't have permission

**Solutions**:
1. Check internet
2. Pull first, then push
3. Verify you're a collaborator

### "Cannot pull with uncommitted changes"

**Cause**: Local changes conflict with incoming changes

**Solution**:
1. Commit your changes
2. Then pull
3. Resolve any conflicts (Phase 6!)

### "Authentication failed"

**Cause**: Not signed in or credentials expired

**Solution**:
1. GitHub Desktop → Preferences → Accounts
2. Sign out and sign back in
3. Try push/pull again

### Push/Pull is Very Slow

**Causes**:
- Large files
- Slow internet
- Large history

**Solutions**:
- Be patient
- Check internet speed
- Large repos just take time

---

## Exercise: Practice Push and Pull

### Setup (If Working Solo)

**On Computer 1** (or your main computer):
1. Make a commit
2. Push to GitHub

**On GitHub.com**:
1. Go to your repository
2. Click a file
3. Click edit (pencil icon)
4. Make a change
5. Commit directly to main

**Back in GitHub Desktop**:
1. Click "Fetch origin"
2. See "Pull origin" appears
3. Click "Pull origin"
4. See the change you made online!

### Multi-Computer Practice

If you have two computers:
1. Clone repo on both
2. Make commit on Computer 1 → Push
3. On Computer 2 → Pull
4. See the changes!
5. Make commit on Computer 2 → Push
6. On Computer 1 → Pull
7. Computers in sync!

---

## Key Takeaways

1. **Fetch** = Check for updates (auto-happens)
2. **Pull** = Download updates from GitHub
3. **Push** = Upload your commits to GitHub
4. **Origin** = Your GitHub repository
5. **Always pull before starting work**
6. **Commit before pulling**
7. **Push to back up and share**
8. **Sync frequently in teams**

---

## What's Next?

You now know the complete daily workflow: making changes, committing, and syncing with GitHub!

Let's learn about branches - one of Git's most powerful features!

👉 **Next**: `../05-branches/what-are-branches.md`

---

## Quick Reference

**Fetch (check updates)**:
- Auto-happens every few minutes
- Manual: Click "Fetch origin"

**Pull (download updates)**:
- Click "Pull origin" when available
- Do this before starting work

**Push (upload commits)**:
- Click "Push origin" when you have commits
- Do this to backup and share

**Daily Workflow**:
1. Pull
2. Work → Commit
3. Push
4. Repeat!
