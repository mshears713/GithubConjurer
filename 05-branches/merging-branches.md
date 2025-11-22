# Merging Branches

## Combining Your Work

**Merging** = Combining changes from one branch into another.

When your feature is complete, merge it into main!

---

## The Concept

### Before Merge

```
main:    ●──●──●──●  (stable code)
            \
feature:     ●──●──●  (your new feature)
```

**Two separate timelines**

### After Merge

```
main:    ●──●──●──●──●  (now includes feature!)
            \       /
feature:     ●──●──●
```

**Feature work is now part of main!**

---

## How to Merge in GitHub Desktop

### Method 1: Merge into Current Branch

**Scenario**: Merge feature into main

**Steps**:

**1. Switch to main branch**
```
Branch: main ▼
```

**2. Open Branch menu** → **Merge into current branch**

**3. Select the branch to merge**
```
┌─────────────────────────┐
│ Choose branch to merge: │
│ ○ feature/contact-form  │ ← Select this
│ ○ fix/nav-bug           │
└─────────────────────────┘
```

**4. Click "Merge feature/contact-form into main"**

**Done!** Feature is now in main!

### Method 2: From Branch Dropdown

**1. Click Current Branch dropdown**

**2. Find branch to merge**

**3. Right-click** → **Merge into current branch**

---

## What Happens During a Merge

### Simple Merge (Fast-Forward)

**Scenario**: Main hasn't changed since you branched

```
Before:
main:    ●──●──●
            \
feature:     ●──●──●

After:
main:    ●──●──●──●──●──●
                    ↑
         (main just moves forward)
```

**Fast-forward merge**: Main simply catches up!

**Clean and simple!**

### Three-Way Merge

**Scenario**: Both branches have new commits

```
Before:
main:    ●──●──●──●──●
            \
feature:     ●──●──●

After:
main:    ●──●──●──●──●──●
            \         /
feature:     ●──●──●
```

**Merge commit**: New commit combines both branches!

---

## Merge Scenarios

### Scenario 1: Clean Merge

**No conflicts**, different files changed:

```
main changed: index.html
feature changed: about.html

Merge result: Both changes included!
```

**GitHub Desktop merges automatically!**

### Scenario 2: Compatible Changes

**Same file**, different parts:

```
main changed: Line 1-5 in style.css
feature changed: Line 20-25 in style.css

Merge result: Both changes included!
```

**GitHub Desktop merges automatically!**

### Scenario 3: Conflict

**Same file**, same lines changed differently:

```
main changed: Line 10 → "background: blue"
feature changed: Line 10 → "background: red"

❌ Conflict! Git doesn't know which to keep!
```

**You must resolve manually!**

We'll cover this in `../06-collaboration/handling-conflicts.md`

---

## Example: Merging a Feature

### Complete Workflow

**1. Develop Feature**
```
$ Switch to main
$ Create branch: feature/search
$ Work on search functionality
$ Commit, commit, commit
$ Feature complete!
```

**2. Prepare for Merge**
```
$ Switch to feature/search
$ Make sure everything works
$ All changes committed
```

**3. Update with Latest Main**
```
$ Fetch to check for updates
$ If main has new commits:
  - Merge main into feature/search first
  - Resolve any conflicts
  - Test that everything still works
```

**4. Merge into Main**
```
$ Switch to main
$ Branch menu → Merge into current branch
$ Select feature/search
$ Click Merge
```

**5. Verify**
```
$ Check History tab
$ See merge commit
$ Test that everything works
```

**6. Push to GitHub**
```
$ Click "Push origin"
$ Feature is now live!
```

**7. Clean Up**
```
$ Delete feature/search branch
$ (We'll learn this next!)
```

---

## Merge Commit Message

### Automatic Message

GitHub Desktop creates a message:
```
Merge branch 'feature/search' into main
```

**Usually fine to keep!**

### Custom Message

You can edit it:
```
Merge search functionality into main

Adds full-text search feature with filters.
Tested on all major browsers.
```

**When to customize**:
- Significant feature
- Needs explanation
- Team requires detailed merge messages

---

## Best Practices

### 1. Test Before Merging

**On your feature branch**:
```
✅ Feature works
✅ No bugs
✅ Code is clean
✅ Tests pass (if you have tests)
```

**Only merge working code to main!**

### 2. Update from Main First

**Before merging feature → main**:

```
1. Fetch latest
2. Merge main → feature first
3. Resolve conflicts on feature branch
4. Test
5. Then merge feature → main
```

**Why?** Handle conflicts on feature branch, keep main clean!

### 3. Merge Often

**Don't let branches live forever**:
- Feature complete? Merge it!
- Bug fixed? Merge it!
- Long-lived branches = harder to merge

### 4. Communicate

**In teams**:
- Let people know before merging to main
- Or use Pull Requests (Phase 6!)
- Coordinate to avoid conflicts

---

## Merging Strategies

### Feature Branch Workflow

```
1. Branch from main
2. Develop feature
3. Merge main → feature (stay updated)
4. When done: merge feature → main
5. Delete feature branch
```

**Most common pattern!**

### Hotfix Workflow

```
1. Bug discovered on main
2. Branch from main: hotfix/bug-name
3. Fix bug
4. Immediately merge hotfix → main
5. Also merge to any active feature branches
6. Delete hotfix branch
```

**Fast fixes!**

---

## Checking Merge Status

### Before Merging

**In History tab**:
```
main: ●──●──●──●
         \
feature: ●──●──●
```

**See the divergence!**

### After Merging

**In History tab**:
```
main: ●──●──●──●──●
         \      /
feature: ●──●──●
```

**Branches joined!**

---

## Can't Merge?

### Protected Branches

**Some organizations protect main**:
- Can't merge directly
- Must use Pull Requests
- Requires approval

**GitHub Desktop will tell you!**

**Solution**: Create Pull Request instead (Phase 6)

### Uncommitted Changes

**Can't merge with uncommitted work**

**Solution**: Commit or stash first

### Conflicts

**If conflicts exist**:
- GitHub Desktop pauses merge
- Shows conflicted files
- You resolve them
- Complete merge

**Details in Phase 6!**

---

## Undoing a Merge

### Just Merged, Haven't Pushed

**Undo last merge**:
1. Repository menu → Undo
2. Or: Edit → Undo (⌘Z / Ctrl+Z)

**Merge is undone!**

### Already Pushed

**More complex**:
- Can't easily undo
- Need to revert (Phase 7)
- Or create fix commit

**Lesson**: Test before pushing merge!

---

## Merge vs Rebase

### Merge (What We Just Learned)

```
main:    ●──●──●──●──●
            \      /
feature:     ●──●──●
```

**Pros**:
- Safe and easy
- Preserves history
- Shows branch structure

**Recommended for beginners!**

### Rebase (Advanced)

```
main:    ●──●──●──●──●──●──●
                        ↑
              (feature commits replayed here)
```

**Pros**:
- Linear history
- Cleaner log

**Cons**:
- More complex
- Can be dangerous

**Learn this later!** (Phase 7)

---

## Exercise: Merge Practice

### Setup

**1. Create feature branch**:
```
Branch: feature/add-footer
```

**2. Add footer.html**:
```html
<footer>
  <p>&copy; 2024 My Project</p>
</footer>
```

**3. Commit on feature branch**

**4. Switch to main**

**5. Merge feature into main**:
```
Branch menu → Merge into current branch
Select: feature/add-footer
Merge!
```

**6. Verify**:
- Check main branch
- footer.html is there!
- Check History tab
- See merge commit

**Success!**

---

## Key Takeaways

1. **Merge** = Combine branches
2. **Switch to target branch first** (usually main)
3. **Then merge source branch in**
4. **Test before merging**
5. **Update from main first**
6. **Merge creates commit** (usually)
7. **Can undo if needed** (before pushing)

---

## Quick Reference

**Merge Steps**:
1. Switch to target branch (e.g., main)
2. Branch menu → Merge into current branch
3. Select source branch
4. Click Merge
5. Push to GitHub

**Pre-merge Checklist**:
- [ ] Feature/fix is complete
- [ ] All changes committed
- [ ] Tested and working
- [ ] Updated from main
- [ ] No conflicts

---

## What's Next?

You can merge branches! Now let's learn to delete old branches to keep things clean.

👉 **Next**: `deleting-branches.md`
