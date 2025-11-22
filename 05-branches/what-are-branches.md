# What Are Branches?

## The Power of Parallel Universes

**Branches** let you work on different versions of your project simultaneously.

Think of branches as parallel timelines where you can experiment without affecting your main code!

---

## The Main Branch

### Your Project's Main Timeline

Every repository starts with one branch:
- Called **"main"** (or sometimes "master" in older repos)
- The primary, stable version of your project
- What people see when they visit your GitHub repo

```
main: ●──●──●──●──●  (Your stable code)
```

---

## Why Use Branches?

### Problem: Working on Multiple Things

Imagine you're building a website:
- 🏗️ Building a new contact form (not finished)
- 🐛 Need to fix urgent navigation bug
- 🎨 Want to try a new color scheme

**Without branches**: Chaos!
- All changes mixed together
- Can't deploy bug fix until contact form is done
- Can't experiment without breaking things

**With branches**: Clean and organized!
```
main:     ●──●──●──────────●  (Stable, bug fixed!)
             \
feature:      ●──●──●  (Contact form, work in progress)
               \
experiment:     ●──●  (Color experiment, can discard if bad)
```

---

## Branch Analogies

### The Book Draft Analogy

**Main branch** = Published book
**Feature branch** = Draft chapter you're writing
```
- Work on draft without changing published book
- When chapter is done, add it to published book
- Can abandon draft if it doesn't work out
```

### The Parallel Universe Analogy

```
Main Universe: You're a developer
Branch A: You're trying Python instead of JavaScript
Branch B: You're testing a new design
```

Each branch exists independently!

---

## How Branches Work

### Creating a Branch

Start from main, create a new branch:

```
main: ●──●──●
            \
             ●  (new branch created here)
```

**Both branches have the same history up to this point!**

### Working on Your Branch

Make commits on your branch:

```
main:    ●──●──●  (unchanged)
               \
feature:        ●──●──●  (your new work)
```

**Main branch is unaffected!**

### Others Can Work Too

While you work on your branch, teammates work on main:

```
main:    ●──●──●──●──●  (teammates' work)
               \
feature:        ●──●──●  (your work)
```

**Both progressing independently!**

### Merging

When your feature is done, merge it back to main:

```
main:    ●──●──●──●──●──●  (now includes your feature!)
               \       /
feature:        ●──●──●
```

**Your work is now part of main!**

---

## Common Branch Patterns

### Pattern 1: Feature Branches

**Create branch for each new feature**:

```
main:       ●──●──●──────────●──────────●
               \           /          /
login:          ●──●──●──●          /
                 \                /
search:           ●──●──●──●──●
```

**Benefits**:
- Features developed independently
- Can finish in any order
- Easy to test each feature separately

### Pattern 2: Bug Fix Branches

**Quick branch for urgent fixes**:

```
main:    ●──●──●────●  (hotfix merged fast!)
              \    /
hotfix:        ●──●
```

**Benefits**:
- Fix bugs without disrupting feature work
- Deploy fixes quickly
- Keep main stable

### Pattern 3: Experimental Branches

**Try something risky**:

```
main:        ●──●──●──●  (unchanged)
               \
experiment:    ●──●──●  (trying new approach)
```

**If experiment works**: Merge it!
**If experiment fails**: Delete branch, main is untouched!

---

## Real-World Scenario

### You're Building a Portfolio Website

**Monday**: Start new branch for "About" page
```
main:   ●──●  (basic structure)
            \
about:       ●──●  (working on about page)
```

**Tuesday**: Urgent! Fix typo on main page
```
main:   ●──●──────●  (fixed typo)
            \    /
about:       ●──●  (still working on about)
```

You switched to main, fixed typo, merged it, back to about branch!

**Wednesday**: About page complete, merge to main
```
main:   ●──●──────●──●  (now has about page!)
            \    /    /
about:       ●──●──●
```

**All without disrupting the live site!**

---

## Branch Names

### Good Branch Names

✅ `feature/contact-form`
✅ `fix/navigation-bug`
✅ `experiment/new-design`
✅ `update/dependencies`

**Patterns**:
- Descriptive of what you're doing
- Lowercase with hyphens
- Prefixes help organize (feature/, fix/, etc.)

### Bad Branch Names

❌ `branch1`
❌ `test`
❌ `asdf`
❌ `my-branch`

**Why bad?**: Not descriptive, hard to remember purpose

---

## The HEAD Pointer

### What is HEAD?

**HEAD** = "You are here" marker

Points to the currently active branch:

```
main:    ●──●──●
            \
feature:     ●──●──●  ← HEAD is here!
```

**When you commit**: New commit goes on the branch where HEAD is pointing.

**In GitHub Desktop**: Current branch shown at top:
```
Branch: feature ▼
```

---

## Local vs Remote Branches

### Local Branch

**On your computer only**:

```
Your Computer:
main: ●──●──●
feature: ●──●──●  (local only)
```

Others can't see it!

### Remote Branch

**Published to GitHub**:

```
GitHub:
main: ●──●──●
feature: ●──●──●  (published!)
```

Now teammates can see it!

**Publishing**: Click "Publish branch" in GitHub Desktop

---

## Benefits of Branches

### 1. Experimentation

Try ideas without risk:
```
main: ●──●──●  (safe)
      \
test: ●──●  (experiment freely!)
```

Doesn't work? Delete branch. Main is fine!

### 2. Parallel Development

Multiple people, multiple features:
```
main:      ●──●──●
           / | \
person-a: ●  |  \
             |   \
person-b:    ●    \
                   \
person-c:           ●
```

Everyone works independently!

### 3. Safe Collaboration

**Main stays stable** while everyone develops:
- Always have a working version
- Can deploy main anytime
- Features merge when ready

### 4. Code Review

Before merging, teammates can review your branch:
- Catch bugs
- Suggest improvements
- Ensure quality

### 5. Organized History

Clear what each branch was for:
```
Merged: feature/dark-mode
Merged: fix/login-bug
Merged: update/homepage-content
```

---

## Branch Best Practices

### 1. Main is Sacred

**Main branch should always work!**
- Don't commit broken code to main
- Test before merging
- Keep it deployable

### 2. One Branch Per Feature

**Don't mix unrelated work**:
✅ One branch: Add contact form
❌ One branch: Add contact form AND fix navbar AND update colors

### 3. Descriptive Names

**Future you will thank you!**
✅ `fix/checkout-calculation-error`
❌ `bugfix`

### 4. Short-Lived Branches

**Don't let branches live forever**:
- Create branch
- Do work (days/weeks)
- Merge it
- Delete it

Long-lived branches become hard to merge!

### 5. Keep Branches Updated

**Regularly merge main into your branch**:
```
main:    ●──●──●──●
            \   \
feature:     ●──●──●  (merge main to stay current)
```

Prevents conflicts!

---

## Common Questions

### Q: How many branches can I have?

**A**: Unlimited! Create as many as you need.

### Q: Will branches slow down my repo?

**A**: No! Branches are lightweight and fast.

### Q: Can I switch branches with uncommitted changes?

**A**: Sometimes yes, sometimes GitHub Desktop will ask you to commit first.

### Q: What if I forget which branch I'm on?

**A**: Look at top of GitHub Desktop: "Branch: [name]"

### Q: Can I have branches of branches?

**A**: Yes! Branch from any branch.

---

## What's Next?

Now that you understand branches, let's create your first one!

👉 **Next**: `creating-branches.md`

---

## Key Takeaways

1. **Branch** = Parallel version of your project
2. **Main** = Primary stable branch
3. **Feature branch** = Work on new stuff without breaking main
4. **Merge** = Combine branch back to main
5. **HEAD** = Currently active branch
6. **Branches are lightweight** = Create freely!
7. **Main stays stable** = Always deployable

---

## Branch Visualization

```
                Experiment
                    ●──●
                   /
main: ●──●──●──●──●──●──●
         \      \
          \      Feature-B
           \        ●──●──●
            \
             Feature-A
                ●──●──●──●
```

**Each branch**: Independent timeline
**All from main**: Same starting point
**When done**: Merge back to main!
