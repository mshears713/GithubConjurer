# Stashing Changes

## Temporarily Setting Work Aside

**Stash** = Save uncommitted changes temporarily without committing them.

---

## What is Stashing?

### The Problem

You're working on feature A:
```
3 files modified, not committed yet
```

Urgent! Need to switch to main to fix bug:
```
❌ Can't switch - uncommitted changes
```

**Solutions**:
1. Commit incomplete work (not ideal)
2. **Stash changes** (perfect!)
3. Discard changes (lose work)

### Stash to the Rescue

**Stash saves**:
- All uncommitted changes
- To a temporary storage
- Clean working directory
- Switch branches freely!

**Later**: Restore stashed changes!

---

## Stashing in GitHub Desktop

**Note**: GitHub Desktop has limited stash support

**Manual stashing** (command line):
```bash
git stash
git stash pop
```

**In GitHub Desktop**:
- Can create stash via command line
- View stashes (limited)
- Apply via command line

**For full stash features**: Use command line or another Git GUI

---

## Stash Workflow (Concept)

### Save Work Temporarily

**1. You're working on feature-a**:
```
index.html (modified)
style.css (modified)
```

**2. Need to switch branches urgently**

**3. Stash changes**:
```
$ git stash
Saved working directory
```

**4. Now clean**:
```
No uncommitted changes
```

**5. Switch branches, do urgent work**

**6. Switch back to feature-a**

**7. Restore stashed changes**:
```
$ git stash pop
```

**8. Back to where you were!**

---

## When to Use Stash

### ✅ Good Use Cases

**Switch branches quickly**:
- Urgent bug fix needed
- Don't want to commit incomplete work

**Pull with conflicts**:
- Have uncommitted changes
- Need to pull updates
- Stash, pull, then reapply

**Experiment cleanup**:
- Tried something
- Want to see original code
- Stash experiment, look at clean version

**Context switching**:
- Working on feature
- Need to help teammate
- Stash work, help, restore

### ❌ When Not to Use

**Long-term storage**:
- Use branches instead
- Commits are permanent
- Stashes can be lost

**Sharing with teammates**:
- Stashes are local only
- Use commits and branches

**Final work**:
- Ready to save?
- Commit instead of stash!

---

## Stash Commands (Terminal)

### Basic Stash

**Save changes**:
```bash
git stash
```

Or with message:
```bash
git stash save "Work in progress on login form"
```

**Restore latest stash**:
```bash
git stash pop
```

**Restore but keep stash**:
```bash
git stash apply
```

### List Stashes

```bash
git stash list
```

Output:
```
stash@{0}: WIP on feature-a: Add login form
stash@{1}: WIP on main: Fix navigation
```

### Apply Specific Stash

```bash
git stash apply stash@{1}
```

### Delete Stash

```bash
git stash drop stash@{0}
```

**Clear all stashes**:
```bash
git stash clear
```

---

## Stash Best Practices

### 1. Use Descriptive Messages

**Good**:
```bash
git stash save "Half-finished contact form validation"
```

**Bad**:
```bash
git stash
# Default message: "WIP on feature-a"
```

### 2. Don't Hoard Stashes

**Clean up old stashes**:
- Apply or discard
- Don't collect dozens
- Use branches for long-term work

### 3. Pop vs Apply

**Pop** (removes from stash):
```bash
git stash pop
```
Use when you're done with stash

**Apply** (keeps in stash):
```bash
git stash apply
```
Use if you might need it again

### 4. Check What's Stashed

**Before applying**:
```bash
git stash show
git stash show -p  # Full diff
```

**Know what you're restoring!**

---

## Stash vs Commit

### Stash

**Temporary**:
- Not part of history
- Local only
- Can be lost
- No commit message required

**Use for**: Short-term work interruptions

### Commit

**Permanent**:
- Part of history
- Pushed to GitHub
- Permanent record
- Requires commit message

**Use for**: Completed work units

---

## Alternative: Commit Instead

### Often Better to Commit

**Create WIP commit**:
```
Commit: "WIP: Login form - partial implementation"
```

**Benefits**:
- Permanent record
- Can push to GitHub (backup)
- Part of history

**Later**:
- Amend commit with more work
- Or make new commits
- Eventually merge when done

**Safer than stashing!**

---

## Recovering Lost Stashes

### Stashes Can Be Lost!

**Dangerous operations**:
- `git stash drop`
- `git stash clear`
- Repository cleanup

### Recovery (Advanced)

If you accidentally deleted a stash:
```bash
git fsck --no-reflog | awk '/dangling commit/ {print $3}'
```

**Complex!** - Ask for help if needed.

**Prevention**: Use commits for important work!

---

## Partial Stashing

### Stash Only Specific Files

**Not in GitHub Desktop**

**Command line**:
```bash
git stash push -m "Message" -- file1.txt file2.css
```

**Stashes only those files**, keeps others uncommitted

---

## Stash Conflicts

### Applying Stash with Conflicts

**Scenario**:
1. Stash changes to file
2. Switch branches
3. That file changed on new branch
4. Try to apply stash
5. **Conflict!**

**Resolution**:
- Same as merge conflicts
- Edit file, resolve markers
- Save and continue

---

## GitHub Desktop Workflow

### Without Built-in Stash

**Current workflow in GitHub Desktop**:

**Option 1: Commit**
```
1. Commit work as "WIP"
2. Switch branches, do work
3. Return, continue or amend
```

**Option 2: Terminal**
```
1. Open terminal (in GitHub Desktop)
2. Run: git stash
3. Switch branches in Desktop
4. Do work
5. Switch back
6. Terminal: git stash pop
```

**Option 3: Discard if truly experimental**
```
Only if you don't need the changes!
```

---

## Key Takeaways

1. **Stash** = Temporary storage for uncommitted work
2. **Use when** = Need to switch contexts quickly
3. **GitHub Desktop** = Limited stash support
4. **Terminal needed** = For full stash features
5. **Don't hoard** = Apply or discard old stashes
6. **Often better** = Just commit instead!
7. **Not a backup** = Stashes can be lost

---

## Quick Reference

**Stash Changes** (terminal):
```bash
git stash save "Message"
```

**Restore and Remove**:
```bash
git stash pop
```

**Restore and Keep**:
```bash
git stash apply
```

**List Stashes**:
```bash
git stash list
```

**Delete Stash**:
```bash
git stash drop stash@{0}
```

---

## What's Next?

Learn how to undo mistakes and revert changes!

👉 **Next**: `undoing-changes.md`
