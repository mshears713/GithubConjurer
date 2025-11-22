# Deleting Branches

## Keeping Your Repository Clean

After merging a feature, delete the branch - you don't need it anymore!

---

## Why Delete Branches?

### Merged Branches Are Done

```
main: ●──●──●──●──●  (includes feature)
         \      /
feature:  ●──●──●  ← No longer needed!
```

**Feature is in main** - branch served its purpose!

### Benefits of Deleting

✅ **Clean branch list** - Only active work shows
✅ **Less confusion** - Clear what's in progress
✅ **Better organization** - Easy to find branches
✅ **Professional** - Shows good Git hygiene

**Don't worry** - commit history is preserved!

---

## How to Delete a Branch

### Method 1: From Branch Menu

**1. Switch to a different branch** (can't delete current branch)

**2. Click "Current Branch" dropdown**

**3. Find branch to delete**

**4. Right-click** → **Delete**

**5. Confirm deletion**

**Done!**

### Method 2: Branch Menu

**Branch menu** → **Delete** → Select branch → Delete

---

## What Gets Deleted?

### The Branch Reference Only

**Before deletion**:
```
main:    ●──●──●──●──●
            \      /
feature:     ●──●──●  ← Branch pointer
```

**After deletion**:
```
main:    ●──●──●──●──●
            \      /
             ●──●──●  ← Commits still here!
```

**Commits are preserved!** (if merged)

**Branch label is gone** (the pointer to the commits)

---

## Deleting Unmerged Branches

### Warning

**If branch isn't merged**:
```
⚠️  This branch hasn't been merged into main.
    Are you sure you want to delete it?
```

**GitHub Desktop protects you!**

### Your Options

**If you want to keep the work**:
- ❌ Cancel deletion
- Merge the branch first
- Then delete

**If you want to discard the work**:
- ✅ Confirm deletion
- Work is lost (experimental branch, failed attempt, etc.)

**Think carefully!**

---

## Local vs Remote Deletion

### Local Branch Deletion

**Deletes from your computer**:
```
Your Computer:          GitHub:
main                    main
(feature deleted)       feature ← Still exists!
```

**Branch still on GitHub!**

### Delete from GitHub Too

**After deleting locally**:
1. Go to GitHub.com → your repository
2. Click "branches"
3. Find the branch
4. Click trash icon
5. Delete

**Or push deletion**:
GitHub Desktop may ask "Delete branch on remote?" → Yes

---

## When to Delete Branches

### ✅ Safe to Delete

**Merged feature branches**:
```
✅ feature/contact-form (merged)
✅ fix/navigation-bug (merged)
✅ update/readme (merged)
```

**Failed experiments**:
```
✅ experiment/new-layout (didn't work out)
✅ test/alternative-approach (abandoned)
```

### ❌ Don't Delete

**Active work**:
```
❌ feature/in-progress (still working)
❌ fix/investigating-bug (not done)
```

**Long-running branches**:
```
❌ main (primary branch!)
❌ development (staging branch)
```

---

## Typical Workflow

### Complete Feature Cycle

**1. Create branch**:
```
$ Create: feature/search
```

**2. Develop**:
```
$ Work, commit, commit, commit
```

**3. Merge**:
```
$ Merge into main
$ Push to GitHub
```

**4. Delete**:
```
$ Delete feature/search
$ Delete from GitHub too
```

**Clean and complete!**

---

## Recovering Deleted Branches

### Merged Branches

**No problem!** Commits are in main:
```
main: ●──●──●──●──●
         \      /
          ●──●──●  ← Commits still here
```

**History preserved!**

### Unmerged Branches (Advanced)

**Accidentally deleted unmerged branch?**

**Can be recovered** (if recent):
- Commits are still in Git
- Use command line: `git reflog`
- Recreate branch from commit

**Beyond this tutorial** - ask for help if needed!

**Prevention**: GitHub Desktop warns you!

---

## Branch Cleanup Best Practices

### 1. Delete After Merging

**Workflow**:
```
Create → Work → Merge → Delete
```

**Immediate cleanup** - don't let branches pile up!

### 2. Regular Cleanup

**Monthly/weekly review**:
- List all branches
- Delete merged ones
- Keep only active work

### 3. Communicate in Teams

**Before deleting**:
- Ensure it's merged
- Check if anyone else needs it
- Coordinate with team

### 4. Keep Important Branches

**Don't delete**:
- main
- production
- development
- Long-running team branches

---

## Viewing Deleted Branches

### They Don't Disappear from History!

**History tab** still shows:
```
main: ●──●──●──●──●
         \      /
          ●──●──●  ← From deleted feature/search
```

**Merge commit message** says:
```
Merge branch 'feature/search' into main
```

**Complete history** is preserved!

---

## Exercise: Delete a Merged Branch

### Task

**1. Create a test branch**:
```
Branch: test/delete-me
```

**2. Make a commit**:
```
Create file: test.txt
Content: "This is a test"
Commit: "Add test file"
```

**3. Merge to main**:
```
Switch to main
Merge test/delete-me
```

**4. Delete the branch**:
```
Right-click test/delete-me
Select "Delete"
Confirm
```

**5. Verify**:
- Branch gone from list ✅
- Commit still in history ✅
- test.txt still in main ✅

**Success!**

---

## Common Questions

### Q: Can I delete main?

**A**: GitHub Desktop won't let you! Main is protected.

### Q: What if I delete the wrong branch?

**A**: If it was merged, no problem - commits are in main.
If unmerged and recent, can potentially recover.

### Q: Should I delete branches from GitHub too?

**A**: Yes! Keep both local and remote clean.

### Q: How do I see all branches?

**A**: Current Branch dropdown shows all local and remote branches.

### Q: Can I undelete a branch?

**A**: If recently deleted, yes (advanced). If merged, recreate from main.

---

## Branch Lifecycle

### The Complete Story

```
1. CREATE
   main: ●──●──●
            \
   feature:  ●

2. DEVELOP
   main: ●──●──●
            \
   feature:  ●──●──●

3. MERGE
   main: ●──●──●──●
            \    /
   feature:  ●──●──●

4. DELETE
   main: ●──●──●──●
            \    /
             ●──●──●
   (feature label gone, commits preserved)
```

**Clean and complete!**

---

## Troubleshooting

### "Can't delete - current branch"

**Solution**: Switch to different branch first

### "Branch has unmerged commits"

**Warning shown**: Double-check you want to delete

**Options**:
- Cancel and merge first
- Confirm if you really want to discard

### "Branch still exists on remote"

**After local deletion**:
- Go to GitHub.com
- Delete from there too
- Or next push will ask about remote deletion

---

## Quick Reference

**Delete Branch**:
1. Switch away from branch
2. Right-click branch in dropdown
3. Select "Delete"
4. Confirm if unmerged

**When to Delete**:
✅ After merging
✅ Failed experiments
✅ Abandoned work
❌ Active work
❌ Main/important branches

**What's Deleted**:
- Branch reference (pointer)
- NOT commits (if merged)

---

## Key Takeaways

1. **Delete merged branches** - Keep repo clean
2. **Commits are preserved** - History stays intact
3. **GitHub Desktop warns** - About unmerged branches
4. **Delete local and remote** - Both places
5. **Regular cleanup** - Good maintenance habit
6. **Can't delete current branch** - Switch first
7. **Main is protected** - Can't accidentally delete

---

## What's Next?

You've mastered branches! Create, switch, merge, delete - the complete workflow!

Now let's learn about collaboration: working with teammates and Pull Requests.

👉 **Next**: `../06-collaboration/fetching-changes.md`
