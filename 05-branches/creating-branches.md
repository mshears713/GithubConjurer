# Creating Branches

## Your First Branch!

Let's create a branch and start working on it.

---

## How to Create a Branch

### Method 1: New Branch Button

**1. Click "Current Branch" dropdown** (top center)

**2. Click "New Branch" button**

Or use keyboard shortcut:
- Mac: ⌘⇧N
- Windows: Ctrl+Shift+N

**3. Enter branch name**
```
┌────────────────────────────┐
│ Name: feature/add-about-page │
│                            │
│ Create branch based on:    │
│ ● main                     │
│                            │
│   [Create Branch]          │
└────────────────────────────┘
```

**4. Click "Create Branch"**

**Done!** You're now on your new branch!

### Method 2: Branch Menu

**Branch menu** → **New Branch** → Enter name → Create

---

## Naming Your Branch

### Good Names

**Feature branches**:
```
feature/contact-form
feature/user-authentication
add-dark-mode
```

**Bug fixes**:
```
fix/navigation-menu
bugfix/login-error
hotfix/security-patch
```

**Experiments**:
```
experiment/new-layout
try/different-colors
test/performance-improvement
```

### Naming Conventions

**Common patterns**:
- `feature/description`
- `fix/description`
- `update/description`
- `experiment/description`

**Rules**:
- Use lowercase
- Use hyphens (not spaces)
- Be descriptive
- Keep it concise

**Examples**:
✅ `add-search-functionality`
✅ `fix-mobile-menu`
❌ `my branch` (spaces)
❌ `branch1` (not descriptive)
❌ `FEATURE` (all caps)

---

## Where Branches Come From

### Based on Current Branch

When you create a branch, it starts from wherever you currently are:

**If on main**:
```
main: ●──●──●
            \
             ● new-branch (starts from main)
```

**If on feature-a**:
```
main:      ●──●──●
               \
feature-a:      ●──●──●
                     \
                      ● new-branch (starts from feature-a)
```

### Choosing Base Branch

In the create dialog:
```
Create branch based on:
● main               ← Default
○ feature-x
○ other-branch
```

**Usually**: Create from main!

---

## Exercise: Create Your First Branch

### Task: Add an About Page

**1. Make sure you're on main**

Check top of GitHub Desktop: "Branch: main"

**2. Create new branch**

- Click "Current Branch" dropdown
- Click "New Branch"
- Name: `feature/add-about-page`
- Based on: main
- Create Branch

**3. Verify you're on the new branch**

Top should now say: "Branch: feature/add-about-page"

**4. Make some changes**

Create a file `about.md`:
```markdown
# About

This is my about page!
```

**5. Commit to your branch**

- Review changes
- Summary: "Add about page"
- Click "Commit to feature/add-about-page"

**Success!** You've worked on a branch!

---

## What Happens When You Create a Branch

### Before

```
main: ●──●──●  ← You're here (HEAD)
```

### After Creating Branch

```
main: ●──●──●  ← Still exists
            \
feature:     ● ← You're here now (HEAD)
```

**Both point to same commit initially!**

### After Committing on Branch

```
main: ●──●──●  (unchanged)
            \
feature:     ●──●──●  (new commits)
                    ↑
                  HEAD
```

**Main is unaffected!**

---

## Creating Branches from Specific Commits

### Advanced: Branch from Old Commit

**Scenario**: Want to branch from earlier point in history

**How**:
1. Go to History tab
2. Right-click any commit
3. Select "Create Branch from Commit"
4. Name your branch
5. Create

**Result**:
```
main: ●──●──●──●──●
         \
          ●  new-branch (from older commit)
```

**When useful**:
- Creating hotfix from production version
- Investigating when bug was introduced
- Trying alternative approach from specific point

---

## Branch Creation Checklist

Before creating:
- [ ] Thought of a descriptive name
- [ ] Decided which branch to base on (usually main)
- [ ] Committed or stashed current changes

After creating:
- [ ] Verified you're on new branch (check top bar)
- [ ] Ready to make changes

---

## Common Mistakes

### Mistake #1: Unclear Name

❌ `test`
❌ `branch2`
✅ `feature/shopping-cart`

### Mistake #2: Creating from Wrong Branch

**Problem**: Created from feature branch by accident, wanted to create from main

**Solution**: Delete branch (we'll learn this!), create again from main

### Mistake #3: Forgetting to Switch Branches

**Problem**: Created branch but didn't switch to it, committed to old branch

**Prevention**: GitHub Desktop automatically switches when you create!

### Mistake #4: Creating Branch with Uncommitted Changes

**Problem**: Changes might follow you to new branch

**Solution**: Commit changes first, then create branch

---

## Tips for Branch Creation

### 1. Create Branches Liberally

**Branches are free!** Create one for each:
- New feature
- Bug fix
- Experiment

### 2. Create Early

**Don't wait** until you've made changes:
1. Decide what to work on
2. Create branch immediately
3. Then start working

### 3. Clear Purpose

**Each branch = One purpose**

✅ One branch for contact form
✅ Separate branch for color updates
❌ One branch for everything

### 4. Keep Main Clean

**Always branch off main** for new work:
- Don't work directly on main
- Create branch first
- Do work there

---

## Branch Management from Start

### Good Workflow

```
1. On main branch
2. Pull latest changes
3. Create feature branch
4. Work and commit on feature branch
5. When done, merge to main
6. Delete feature branch
7. Repeat!
```

### Why This Works

- **Main stays stable**
- **Features isolated**
- **Can abandon experiments**
- **Clean history**

---

## Multiple Branches

### You Can Have Many!

```
main:        ●──●──●
             / | \
feature-a:  ●  |  \
               |   \
feature-b:     ●    \
                     \
experiment:           ●
```

**Switch between them** as needed!

**Work on multiple features** simultaneously!

---

## Publishing Your Branch

### Local Only (Initially)

When you create a branch:
```
Your Computer:          GitHub:
main                    main
feature/new  ← New!     (doesn't know about feature yet)
```

### Publish to GitHub

**After committing to branch**:
1. Top button says "Publish branch"
2. Click it
3. Branch now on GitHub!

```
Your Computer:          GitHub:
main                    main
feature/new             feature/new  ← Now visible!
```

**Why publish?**:
- Backup to cloud
- Share with teammates
- Create pull requests

---

## Quick Reference

**Create Branch**:
1. Current Branch dropdown → New Branch
2. Or: ⌘⇧N (Mac) / Ctrl+Shift+N (Windows)
3. Enter name
4. Choose base branch
5. Create

**Branch Naming**:
- Lowercase
- Hyphens, not spaces
- Descriptive
- Pattern: `type/description`

**Verify Current Branch**:
Check top bar: "Branch: [name]"

---

## What's Next?

You can create branches! Now let's learn to switch between them.

👉 **Next**: `switching-branches.md`
