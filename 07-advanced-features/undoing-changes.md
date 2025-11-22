# Undoing Changes

## Everyone Makes Mistakes!

Learn how to safely undo changes at every stage of your Git workflow.

---

## Types of Undo Operations

### Different Situations

1. **Undo unstaged changes** (file not committed)
2. **Undo staged changes** (file ready to commit)
3. **Undo last commit** (just committed)
4. **Revert old commit** (committed long ago)
5. **Discard all local changes**

**Each has its own solution!**

---

## Undoing Unstaged Changes

### Scenario: Modified File, Not Committed

**You changed** `index.html` but don't like the changes:

```
Changes tab shows:
☑ index.html (modified)
```

### Discard Changes

**In GitHub Desktop**:

**1. Right-click the file**

**2. Select "Discard Changes"**

**3. Confirm**

```
⚠️ Are you sure you want to discard changes to index.html?
This cannot be undone.
```

**4. File reverts** to last committed state!

**⚠️ Warning**: Lost forever! Make sure you don't need those changes!

---

## Undoing Staged Changes

### Scenario: Checked File, Ready to Commit

**File is checked** (staged) but you don't want to commit it:

```
☑ style.css (checked/staged)
```

### Unstage the File

**Simple**: **Uncheck the box!**

**File stays modified** but won't be in next commit.

**Changes preserved**, just not staged.

---

## Undoing Last Commit

### Scenario: Just Committed, Realized Mistake

**You committed** but:
- Forgot to include a file
- Typo in commit message
- Wrong files included

### Undo Last Commit (GitHub Desktop)

**Repository menu** → **Undo Last Commit**

Or: **Edit** → **Undo** (⌘Z / Ctrl+Z)

**Result**:
- Commit is undone
- Changes back in Changes tab
- Can modify and recommit
- Or discard

**⚠️ Only works if haven't pushed yet!**

---

## Amending Last Commit

### Scenario: Need to Add to Last Commit

**Just committed** but:
- Forgot a file
- Need to fix typo

### How to Amend

**1. Make your additional changes**

**2. Stage them** (check boxes)

**3. Before committing**:

**NOT directly in GitHub Desktop!**

**Terminal**:
```bash
git commit --amend
```

**Or**: Undo last commit, make changes, commit again

**Result**: Last commit updated!

**⚠️ Only if not pushed!**

---

## Reverting Old Commits

### Scenario: Committed Days Ago, Need to Undo

**You merged a feature** last week:
```
Commit abc123: "Add new payment method"
```

**Now you discover it has a bug** and need to undo it.

### Revert in GitHub Desktop

**1. Go to History tab**

**2. Find the commit** to revert

**3. Right-click** → **Revert This Commit**

**4. New commit created** that undoes the changes!

```
Commit def456: "Revert 'Add new payment method'"
```

**Safe**: Creates new commit, doesn't rewrite history!

**Can revert** even after pushing!

---

## Discarding All Local Changes

### Scenario: Want to Start Fresh

**You have lots of uncommitted changes**:
```
15 files modified
```

**Want to throw it all away** and start over:

### Discard All

**1. Changes tab**

**2. Right-click in file list**

**3. "Discard All Changes"**

**4. Confirm** (careful!)

**⚠️ All uncommitted work lost!**

---

## Restoring Deleted Files

### Scenario: Deleted File by Mistake

**Deleted** `important.txt`:

```
Changes tab shows:
☑ important.txt (deleted)
```

### Restore It

**Before committing deletion**:

**Right-click** → **Discard Changes**

**File restored!**

**After committing deletion**:

1. Go to History tab
2. Find commit before deletion
3. Right-click file in that commit
4. "Copy file to clipboard" or view content
5. Recreate file

---

## Resetting to Previous Commit

### Scenario: Want Everything Like It Was

**Go back in time** to a previous commit:

**⚠️ Very dangerous!** - Use carefully!

**Not directly in GitHub Desktop**

**Terminal** (advanced):
```bash
# Soft reset (keep changes)
git reset --soft abc123

# Mixed reset (unstage changes)
git reset abc123

# Hard reset (delete changes)
git reset --hard abc123
```

**Ask for help** before using!

---

## Undo Cheat Sheet

### Quick Reference

| Situation | Solution | Safety |
|-----------|----------|--------|
| Modified file not committed | Discard changes | ⚠️ Lost forever |
| Don't want to commit file | Uncheck it | ✅ Changes kept |
| Wrong commit message | Undo last commit, recommit | ✅ If not pushed |
| Forgot file in commit | Undo, add file, recommit | ✅ If not pushed |
| Old commit was bad | Revert commit | ✅ Safe, creates new commit |
| All changes are bad | Discard all | ⚠️ All lost |
| Deleted file by mistake | Discard changes (if not committed) | ✅ Restored |

---

## Safe vs Dangerous

### Safe Operations ✅

**Revert**:
- Creates new commit
- Doesn't rewrite history
- Can do after pushing
- Undoable

**Unstage**:
- Just unchecks file
- Changes preserved
- Can restage later

### Dangerous Operations ⚠️

**Discard changes**:
- Deletes work permanently
- Cannot undo
- Make sure you don't need it!

**Hard reset**:
- Rewrites history
- Deletes commits
- Can cause problems if pushed

**Force push**:
- Overwrites GitHub
- Can lose teammates' work
- Almost never needed

---

## Best Practices

### 1. Commit Often

**More commits** = More save points to return to!

**If something breaks**:
```
Easy to find working version
Revert specific commit
```

### 2. Don't Panic

**Most things are recoverable!**

**If unsure**:
- Ask for help
- Don't guess with destructive commands
- Better safe than sorry

### 3. Test Before Discarding

**Before clicking "Discard Changes"**:
- Are you SURE you don't need this?
- Can you commit it "just in case"?
- Is it truly experimental junk?

### 4. Push Regularly

**Commits on GitHub** = Backup!

**If you mess up locally**:
```
Clone fresh from GitHub
Start over
Your pushed work is safe!
```

### 5. Use Branches

**Experiment on branches**:
```
Try risky changes on feature branch
Doesn't work? Delete branch!
Main branch is safe
```

---

## Undo Workflow Examples

### Example 1: Fix Typo in Last Commit

**Problem**: "Add contct form" (typo in message)

**Solution**:
1. Undo last commit (Repository → Undo)
2. Changes back in Changes tab
3. Write new message: "Add contact form"
4. Commit again
5. Fixed!

### Example 2: Included Wrong File

**Problem**: Committed `debug.js` by mistake

**Solution**:
1. Undo last commit
2. Uncheck `debug.js`
3. Commit only the files you want
4. Delete `debug.js` if needed

### Example 3: Feature Broke Production

**Problem**: Feature merged days ago, now causing issues

**Solution**:
1. History tab
2. Find the merge commit
3. Right-click → Revert This Commit
4. Push revert
5. Feature undone, fix the bug, merge again later

---

## When Things Go Wrong

### "I deleted a commit I needed!"

**If not pushed**:
- May be recoverable with `git reflog`
- Ask for help!
- Advanced recovery

**If pushed**:
- Still on GitHub!
- Clone fresh copy
- Or ask teammate for the commit

### "I pushed a bad commit!"

**Don't force push** (unless absolutely necessary and team agrees)

**Instead**:
- Revert the commit
- Push the revert
- Safe for everyone

### "I discarded changes I needed!"

**Very hard to recover**

**Prevention**:
- Commit before discarding
- Can always undo commit later
- Safer than losing work

---

## Advanced: Reflog

### Git's Safety Net

**Reflog** = Record of all actions

**If you lose a commit**:
```bash
git reflog
```

Shows all recent operations

**Can recover** lost commits!

**Advanced feature** - ask for help using it

---

## Quick Reference

**Discard Uncommitted Changes**:
Right-click file → Discard Changes

**Unstage File**:
Uncheck the box

**Undo Last Commit**:
Repository → Undo Last Commit (if not pushed)

**Revert Old Commit**:
History → Right-click commit → Revert This Commit

**Restore Deleted File**:
Right-click deleted file → Discard Changes (before committing)

---

## Key Takeaways

1. **Different stages** = Different undo methods
2. **Revert** = Safe way to undo old commits
3. **Discard** = Permanent! Be careful!
4. **Undo last commit** = Only before pushing
5. **Commit often** = More save points
6. **Push regularly** = Backup on GitHub
7. **When in doubt** = Ask for help!

---

## What's Next?

You can undo mistakes! Now learn about tags for marking important releases.

👉 **Next**: `tags.md`
