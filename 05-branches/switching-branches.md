# Switching Between Branches

## Moving Between Timelines

Switching branches changes which version of your project you're looking at and working on.

---

## How to Switch Branches

### The Simple Way

**1. Click "Current Branch" dropdown** (top center)

**2. See list of all branches**:
```
┌──────────────────┐
│ ● main           │ ← Currently on main
│ ○ feature/about  │
│ ○ fix/nav-bug    │
│ ○ experiment     │
└──────────────────┘
```

**3. Click any branch to switch to it**

**Done!** Your files automatically update!

---

## What Happens When You Switch

### Your Files Change!

**On main branch**:
```
index.html - Basic structure
style.css - Original colors
```

**Switch to feature/redesign**:
```
index.html - New layout!
style.css - New color scheme!
header.js - New file appears!
```

**Your folder contents actually change!**

### It's Like Time Travel

```
main:     ●──●──●──●  ← Switch here: see version from here
              \
feature:       ●──●──●  ← Switch here: see version from here
```

Each branch shows its own version of the project!

---

## Visual Feedback

### Top Bar Changes

**Before switching**:
```
Branch: main ▼
```

**After switching to feature**:
```
Branch: feature/add-contact-form ▼
```

### Files Update

**Watch your file explorer**:
- Files appear/disappear
- Contents change
- All automatic!

### Changes Tab

Shows changes **for the current branch**

### History Tab

Shows commits **for the current branch**

---

## Switching with Uncommitted Changes

### Scenario 1: No Conflicts

**On branch A**:
```
- Edit file1.txt (not committed)
```

**Switch to branch B**:
- ✅ Allowed!
- file1.txt changes come with you
- Can commit on branch B

**GitHub Desktop lets you switch!**

### Scenario 2: Conflicts

**On branch A**:
```
- Edit index.html
```

**Branch B also modified index.html differently**

**Try to switch**:
```
⚠️ Warning: Uncommitted changes
```

**Options**:
1. **Commit changes first** (recommended)
2. **Discard changes** (if you don't need them)
3. **Stash changes** (advanced - Phase 7)

**Best practice**: Commit before switching!

---

## Exercise: Practice Switching

### Setup

**1. Create two branches**:
- `feature/page-1`
- `feature/page-2`

**2. On feature/page-1**:
- Create `page1.html`
- Add content: "This is page 1"
- Commit it

**3. Switch to feature/page-2**:
- Create `page2.html`
- Add content: "This is page 2"
- Commit it

### The Magic

**4. Switch back to feature/page-1**:
- `page1.html` exists
- `page2.html` disappears!

**5. Switch to feature/page-2**:
- `page1.html` disappears
- `page2.html` appears!

**Each branch has its own files!**

---

## Common Scenarios

### Scenario 1: Working on Feature, Need to Fix Bug

**Current state**:
```
feature/contact-form: ●──●  ← Working here
(uncommitted changes)
```

**Urgent bug on main!**

**Steps**:
1. Commit your feature work
2. Switch to main
3. Create hotfix branch
4. Fix bug
5. Merge hotfix
6. Switch back to feature/contact-form
7. Continue working!

**Your feature work is safe!**

### Scenario 2: Checking Teammate's Work

**Teammate pushed branch**: `feature/new-design`

**You want to see it**:
1. Fetch origin (get updates)
2. Switch to `feature/new-design`
3. Files update to show their work!
4. Review it
5. Switch back to your branch

### Scenario 3: Comparing Versions

**Want to see old version**:
1. Switch to main (stable version)
2. Look around
3. Switch to feature branch (new version)
4. Compare differences

---

## Switching vs Creating

### Creating a New Branch

**Creates and switches** in one action:
```
main: ●──●──●
         ↑ You're here

(Create new branch)

main: ●──●──●
            \
             ● feature
             ↑ You're here now
```

**Automatic switch!**

### Switching to Existing Branch

**Just moves** between existing branches:
```
main:    ●──●──●  ← Switch here
            \
feature:     ●──●──●  ← Or here
```

**No new branches created!**

---

## Remote Branches

### Branches on GitHub

**Teammate published**: `feature/user-profile`

**In GitHub Desktop**:
```
┌──────────────────────────┐
│ Local Branches:          │
│ ● main                   │
│ ○ your-feature           │
│                          │
│ Remote Branches:         │
│ ○ origin/feature/user-   │
│   profile                │
└──────────────────────────┘
```

**Click remote branch**:
- Creates local copy
- Switches to it
- You can now work on it!

---

## Branch Indicators

### Active Branch Marker

```
● main  ← Filled circle = current branch
○ feature-a  ← Empty circle = other branch
○ feature-b
```

### Ahead/Behind Indicators

```
main ↑2  ← 2 commits ahead of GitHub
feature-a ↓1  ← 1 commit behind
feature-b ↑1↓2  ← 1 ahead, 2 behind
```

---

## Keyboard Shortcut

**Quick branch switcher**:
- Mac: ⌘T
- Windows: Ctrl+T

**Opens branch list** → Type to filter → Enter to switch!

---

## Best Practices

### 1. Commit Before Switching

**Clean working state**:
```
✅ Commit changes
✅ Then switch branches
❌ Don't leave uncommitted work
```

### 2. Check Current Branch

**Before making changes**:
- Look at top: "Branch: [name]"
- Make sure you're on the right branch!
- Common mistake: edit wrong branch

### 3. Switch Confidently

**Don't worry** - Git tracks everything!
- Your work is safe
- Each branch remembers its state
- Files update automatically

### 4. Use Descriptive Names

**Easy to identify branches**:
```
✅ feature/dark-mode
✅ fix/login-bug
❌ branch1 (which one is this?)
```

---

## What Not to Do

### Don't Panic When Files Change

**Normal**: Files appear/disappear when switching

**Your work is safe** - just on a different branch!

### Don't Edit on Main

**If you need to make changes**:
1. Create a branch
2. Switch to it
3. Then make changes

**Main should stay stable!**

### Don't Lose Track

**Know which branch you're on**:
- Check the top bar
- Commit messages show branch name
- Stay organized

---

## Troubleshooting

### "Cannot switch - uncommitted changes"

**Solution**:
1. Commit your changes, or
2. Discard them (if you don't need them)

### Files look wrong after switching

**Check**:
- Are you on the right branch?
- Did the switch actually happen?
- Look at top bar for current branch

### Branch doesn't appear in list

**Possible causes**:
- Remote branch not fetched yet (click Fetch)
- Branch name misspelled
- Branch might be on different remote

### Switched by accident

**No problem!**:
- Just switch back
- Nothing is lost
- Your commits stay on their branches

---

## The Branch Switcher Mental Model

Think of branches as **different save files** in a video game:

```
Save File 1 (main): Level 10, Quest A complete
Save File 2 (feature): Level 5, Quest B in progress
Save File 3 (experiment): Level 1, trying different path
```

**Switching branches** = Loading a different save file!

**Each save** = Independent progress

**All saves** = Stored safely

---

## Quick Reference

**Switch Branch**:
1. Click "Current Branch" dropdown
2. Select branch
3. Files update automatically

**Keyboard Shortcut**:
⌘T (Mac) / Ctrl+T (Windows)

**Check Current Branch**:
Look at top bar: "Branch: [name]"

**Best Practice**:
Commit before switching!

---

## Key Takeaways

1. **Switching** = Moving between branch versions
2. **Files change** = Each branch has its own version
3. **Your work is safe** = Each branch remembers its state
4. **Commit first** = Clean state before switching
5. **Check branch** = Always know where you are
6. **Switch freely** = It's safe and easy!

---

## What's Next?

You can switch between branches! Now let's learn to merge them together.

👉 **Next**: `merging-branches.md`
