# Viewing Commit History

## Your Project Timeline

The History tab shows every change ever made to your project - your project's story!

---

## Accessing History

### Open the History Tab

**Click "History"** in left sidebar

Or use keyboard shortcut:
- Mac: ⌘2
- Windows: Ctrl+2

---

## Understanding the History View

### Left Panel: Commit List

```
┌──────────────────────────────────────┐
│ Fix navigation menu bug              │ ← Most recent
│ You • 5 minutes ago                  │
├──────────────────────────────────────┤
│ Add contact form                     │
│ You • 2 hours ago                    │
├──────────────────────────────────────┤
│ Update homepage styling              │
│ You • Yesterday                      │
├──────────────────────────────────────┤
│ Initial commit                       │
│ You • 3 days ago                     │ ← Oldest
└──────────────────────────────────────┘
```

**Shows**:
- Commit message (summary line)
- Author name
- Time ago (5 min, 2 hours, yesterday, etc.)

**Order**: Newest first (top) → Oldest last (bottom)

### Right Panel: Commit Details

Click any commit to see:

**Top Section**:
- Full commit message
- Author name and email
- Exact date and time
- Commit SHA (ID)
- Branch

**Files Changed**:
- List of all modified files
- Number of changes (+/-lines)

**Diff View**:
- Click any file to see what changed
- Green = added
- Red = removed

---

## Navigating History

### Scrolling Through Time

**Scroll down** to see older commits

**Long history?** Keep scrolling - all commits are there!

### Quick Navigation

**Jump to specific date**:
Look for date separators:
```
Today
└─ Commit 1
└─ Commit 2

Yesterday
└─ Commit 3
└─ Commit 4

Last Week
└─ Commit 5
```

### Search/Filter

**Find specific commits**:
Some versions have a search box (top right)

Type keywords to filter commits by message

---

## Inspecting a Commit

### Click Any Commit

**What you'll see**:

**1. Commit Message**:
```
Add user authentication

Users can now log in with email and password.
Implements JWT tokens for session management.
```

**2. Metadata**:
```
Author: Mike Johnson <mike@email.com>
Date: Jan 15, 2024 at 3:45 PM
SHA: a3d5f2b8e1c4d6f9a2b5c7e8f1d3a5b7c9e1f3d5
```

**3. Files Changed**:
```
+ auth.js (+145 lines)
M index.js (+12, -5 lines)
+ login.html (+87 lines)
M style.css (+23, -1 lines)
```

**Legend**:
- `+` = New file (green)
- `M` = Modified (yellow)
- `-` = Deleted (red)

**4. Diff for Each File**:
Click any file to see line-by-line changes

---

## Understanding Diffs

### Split View (Default)

```
┌──────────────────────┬──────────────────────┐
│     BEFORE           │      AFTER           │
├──────────────────────┼──────────────────────┤
│ <h1>Hello</h1>       │ <h1>Welcome</h1>     │
│                      │ <p>New line</p>      │ ← Green (added)
│ <p>Old line</p>      │                      │ ← Red (removed)
└──────────────────────┴──────────────────────┘
```

**Left**: Old version
**Right**: New version

### Unified View

```
┌────────────────────────────┐
│  <h1>Welcome</h1>          │
│- <h1>Hello</h1>            │ ← Red (removed)
│+ <h1>Welcome</h1>          │ ← Green (added)
│+ <p>New line</p>           │ ← Green (added)
└────────────────────────────┘
```

Single column with +/- indicators

**Toggle between views**: Click icon (top right of diff)

---

## What History Tells You

### Track Progress

**See how your project evolved**:
```
Day 1: "Initial commit"
Day 2: "Add basic structure"
Day 3: "Add styling"
Day 4: "Add interactivity"
Day 5: "Add final features"
```

Your project's journey!

### Find When Changes Were Made

**"When did I add that feature?"**

Scroll through history, read commit messages, find it!

### Understand What Changed

**"What did I change last week?"**

Look at commits from last week, review files

### Find Who Made Changes

**In team projects**:
See who authored each commit

---

## Useful History Tasks

### 1. Review Recent Work

**End of day**: Check what you accomplished

```
Today's commits:
- Fix login bug
- Add password validation
- Update README
```

Feels good to see progress!

### 2. Find When Bug Was Introduced

**"Feature broke, when did this happen?"**

1. Remember when feature worked
2. Look at commits since then
3. Find suspicious commit
4. Review changes to identify bug

### 3. Retrieve Old Code

**"I deleted some code I now need"**

1. Find commit before deletion
2. View file contents at that point
3. Copy code you need

### 4. Understand Codebase

**Joining existing project?**

Read commit history to understand how it was built

---

## Commit SHA (ID)

### What is it?

Every commit has a unique identifier:
```
Full: a3d5f2b8e1c4d6f9a2b5c7e8f1d3a5b7c9e1f3d5
Short: a3d5f2b (first 7 characters)
```

### Why it matters

**Reference specific commits**:
- "Check out commit a3d5f2b"
- "The bug was introduced in abc1234"

### Using the SHA

**Copy it**:
Right-click commit → Copy SHA

**Use it**:
- Reference in messages
- Find specific point in history
- Advanced Git operations

---

## History Best Practices

### 1. Review Before Pushing

**Before pushing to GitHub**:
Check History tab - make sure commits look good!

**Questions to ask**:
- Are messages clear?
- Did I commit the right things?
- Any sensitive data committed by mistake?

### 2. Learn from History

**Look back occasionally**:
- See your progress
- Learn from past decisions
- Understand why things are the way they are

### 3. Keep It Clean

**Good commit history** makes it easier to:
- Find specific changes
- Understand project evolution
- Collaborate with others

**Clean history** = Good commit messages + Logical commits

---

## History Limitations in GitHub Desktop

### What You CAN'T Do (Directly in GUI)

**Advanced operations require command line**:
- Rewrite history (rebase -i)
- Cherry-pick commits (copy specific commits)
- Squash commits (combine multiple commits)
- Edit old commit messages

**However**:
- GitHub Desktop handles 95% of daily needs
- Can learn command line later for advanced stuff

### What You CAN Do

✅ View all commits
✅ See file changes
✅ Copy commit SHAs
✅ Revert commits (we'll learn this!)
✅ View commit details
✅ Navigate history

---

## Viewing History on GitHub.com

### Online Version

**Repository page** → **Commits** (or click commit count)

**Advantages**:
- Shareable URLs
- Blame view (who changed each line)
- Network graph (visual branch history)
- Filter by author/date

**Same information**, different interface!

---

## Exercise: Explore Your History

### Task 1: Review Recent Commits

1. Open History tab
2. Look at your last 5 commits
3. Click each one
4. Review what changed

### Task 2: Find a Specific Change

1. Remember a feature you added
2. Search commits for it
3. Click the commit
4. Review what files changed

### Task 3: Copy a Commit SHA

1. Right-click any commit
2. Select "Copy SHA"
3. Paste it in a note
4. Practice referencing commits!

---

## Troubleshooting

### "History is empty"

**Cause**: No commits yet

**Solution**: Make your first commit!

### "Can't see old commits"

**Cause**: Might need to scroll more

**Solution**: Keep scrolling down - they're all there!

### "Missing a commit"

**Cause**: Might be on different branch

**Solution**: Check which branch you're on (we'll learn branches soon!)

---

## History Patterns

### Linear History (Simple)

```
A → B → C → D → E → F
```

One straight line - typical for solo projects

### Branched History (Advanced)

```
      D → E → F
     /         \
A → B → C → G → H → I
```

Multiple branches - we'll learn this in Phase 5!

---

## Key Takeaways

1. **History tab** = Complete project timeline
2. **Click commits** = See what changed
3. **Diffs show** = Line-by-line changes
4. **SHA** = Unique commit identifier
5. **Review often** = Understand your progress
6. **Good messages** = Make history useful
7. **Newest first** = Reverse chronological order

---

## What's Next?

You can view and understand your commit history! Now let's learn to sync with GitHub (push and pull).

👉 **Next**: `pushing-and-pulling.md`

---

## Quick Reference

**Open History**:
Click "History" or ⌘2 / Ctrl+2

**View Commit**:
Click any commit in list

**See File Changes**:
Click filename in commit details

**Copy SHA**:
Right-click commit → Copy SHA

**Toggle Diff View**:
Click split/unified icon (top right)
