# Staging Changes

## What is Staging?

**Staging** = Selecting which changes to include in your next commit.

Think of it as packing a suitcase: you choose what goes in, what stays out.

---

## Why Staging Matters

### The Problem

You've been working for hours and modified 5 files:
- `header.css` - Fixed navigation
- `footer.css` - Updated colors
- `about.html` - Typo fixes
- `contact.html` - New form
- `debug.js` - Temporary testing code

**Do you want all 5 in one commit?** Probably not!

### The Solution

**Stage only related changes**:

```
Commit 1: header.css + footer.css
Message: "Fix navigation and update color scheme"

Commit 2: about.html
Message: "Fix typos on about page"

Commit 3: contact.html
Message: "Add new contact form"

Skip: debug.js (delete it, don't commit)
```

---

## How Staging Works in GitHub Desktop

### The Checkboxes

In the **Changes** tab, each file has a checkbox:

```
┌─────────────────────────┐
│ ✓ 5 Changed Files       │
├─────────────────────────┤
│ ☑ header.css            │ ← Checked = Will commit
│ ☑ footer.css            │ ← Checked = Will commit
│ ☐ about.html            │ ← Unchecked = Won't commit
│ ☐ contact.html          │ ← Unchecked = Won't commit
│ ☐ debug.js              │ ← Unchecked = Won't commit
└─────────────────────────┘
```

### By Default

**All files are checked** (staged) automatically.

This is fine if you want to commit everything!

### Selective Staging

**Uncheck files** you don't want in this commit:
1. Click the checkbox to toggle
2. Unchecked files stay in Changes tab
3. Only checked files go into the commit

---

## Staging Workflow

### Scenario: Multiple Features Worked On

You've been busy:
1. Fixed a bug in `login.js`
2. Added styling to `style.css`
3. Started working on `dashboard.html` (not finished)

### Step-by-Step Staging

**1. Open Changes Tab**
```
☑ login.js (modified)
☑ style.css (modified)
☑ dashboard.html (modified)
```

**2. Decide What's Ready**
- login.js - ✅ Complete
- style.css - ✅ Complete
- dashboard.html - ❌ Not finished yet

**3. Uncheck Unfinished Work**
```
☑ login.js
☑ style.css
☐ dashboard.html
```

**4. Commit the Ready Changes**
- Summary: "Fix login bug and update styles"
- Commit to main

**5. Result**
- login.js and style.css are committed
- dashboard.html stays in Changes tab
- Continue working on dashboard.html later!

---

## Partial File Staging

### What If Only Part of a File Should Be Committed?

**Scenario**:
You fixed a bug AND added a new feature in the same file.

**GitHub Desktop limitation**:
You can't stage just part of a file (line-by-line staging).

**Solutions**:

**Option 1: Commit Everything**
Not ideal, but sometimes okay if closely related.

**Option 2: Manually Split Changes**
1. Commit current changes
2. Undo the changes you didn't want
3. More complex, not recommended for beginners

**Option 3: Better Workflow (Prevention)**
- Work on one thing at a time
- Commit before starting something else
- Keeps commits focused

**Best Practice**: Avoid this situation by committing more frequently!

---

## Staging Examples

### Example 1: Bug Fix + Documentation

**Changed Files**:
```
☑ app.js - Fixed bug
☑ README.md - Updated docs
```

**Decision**: These are related, commit together.

**Summary**: "Fix calculation bug and update documentation"

### Example 2: Multiple Features

**Changed Files**:
```
☑ feature-a.js
☑ feature-b.js
☑ shared-utils.js
```

**Decision**: Separate commits per feature.

**First commit**:
```
☑ feature-a.js
☐ feature-b.js
☑ shared-utils.js (needed by feature-a)
```
Summary: "Add feature A"

**Second commit**:
```
☐ feature-a.js (already committed)
☑ feature-b.js
☐ shared-utils.js (already committed)
```
Summary: "Add feature B"

### Example 3: Work in Progress

**Changed Files**:
```
☑ completed-page.html
☑ work-in-progress.html
☑ experimental-feature.js
```

**Decision**: Only commit finished work.

**Commit**:
```
☑ completed-page.html
☐ work-in-progress.html
☐ experimental-feature.js
```
Summary: "Add new landing page"

Other files stay for later!

---

## Folders and Staging

### Folders with Multiple Files

If you have:
```
css/
├── header.css (modified)
├── footer.css (modified)
└── sidebar.css (modified)
```

**In GitHub Desktop**:
```
☑ css/
  ☑ header.css
  ☑ footer.css
  ☑ sidebar.css
```

**Click the folder checkbox** to toggle all files in that folder!

**Partially selected folder**:
```
◐ css/ (some files selected)
  ☑ header.css
  ☐ footer.css
  ☑ sidebar.css
```

---

## Best Practices for Staging

### 1. Commit Atomic Changes

**One logical unit = One commit**

✅ "Add email validation"
❌ "Add email validation and fix navbar and update footer"

### 2. Commit Related Files Together

If changes are interdependent, commit together:
```
☑ user.js
☑ user.test.js
```
Both needed for the feature to work.

### 3. Keep Unfinished Work Unstaged

Don't commit half-done features:
```
☐ work-in-progress.html
```

Finish it later, commit then.

### 4. Review Each File

Before committing, review the diff for each staged file:
- Click each file
- Check the changes
- Ensure no debug code
- Verify changes are intentional

### 5. Use Descriptive Commits

Staging lets you make focused commits with clear purposes:
- Each commit tells a story
- Easy to understand history
- Easy to undo specific changes

---

## Common Patterns

### Pattern 1: Work → Review → Stage → Commit

```
1. Work on multiple things
2. Review all changes
3. Stage related changes
4. Commit them
5. Repeat for remaining changes
```

### Pattern 2: Focus → Commit → Repeat

```
1. Work on one feature
2. Commit it (all files staged)
3. Work on next feature
4. Commit it
```

This is simpler - no staging decisions needed!

### Pattern 3: Experimental Workflow

```
1. Try several experiments
2. Keep what works, discard rest
3. Stage only successful experiments
4. Commit them
```

---

## What NOT to Stage

### 1. Temporary Files

```
☐ .DS_Store (Mac system file)
☐ Thumbs.db (Windows)
☐ node_modules/ (dependencies)
```

Add these to `.gitignore` instead!

### 2. Debug Code

```
☐ test.js (your random testing)
☐ debug.html (test page)
```

Delete or `.gitignore` these.

### 3. Sensitive Information

```
☐ .env (environment variables)
☐ config-local.js (API keys)
☐ secrets.json
```

**Never commit!** Add to `.gitignore`!

### 4. Half-Finished Features

```
☐ new-feature.js (not working yet)
```

Finish first, then commit.

---

## Staging vs .gitignore

### Staging (Temporary Choice)

"I don't want this file in THIS commit"
- File stays in Changes tab
- Can commit it later
- Temporary decision

### .gitignore (Permanent Choice)

"I NEVER want to commit this file"
- File won't show in Changes tab
- Git ignores it forever
- Permanent decision

**Example .gitignore**:
```
node_modules/
.env
.DS_Store
*.log
```

---

## Troubleshooting

### Can't uncheck a file

**Cause**: Rare display issue

**Solution**: Restart GitHub Desktop

### File doesn't appear in Changes

**Cause**: Might be gitignored

**Solution**: Check `.gitignore` file

### All files auto-select again

**Normal behavior**: When you make more changes, new files auto-select

---

## Exercise: Practice Staging

### Setup

Create three files in your repository:

**file1.txt**:
```
Feature A is complete
```

**file2.txt**:
```
Feature B is complete
```

**file3.txt**:
```
Experimental work - not done
```

### Task

1. Open GitHub Desktop - all 3 files appear
2. Uncheck `file3.txt`
3. Commit only file1.txt and file2.txt
   - Summary: "Add features A and B"
4. file3.txt should remain in Changes tab
5. Later: complete file3.txt, then commit it

---

## Key Takeaways

1. **Staging** = Choosing what goes in a commit
2. **Checkboxes** = Stage/unstage files
3. **Checked** = Will be committed
4. **Unchecked** = Stays in Changes tab
5. **Folders** = Toggle all files in folder
6. **Best practice** = Commit related changes together
7. **Don't commit** = Temp files, debug code, secrets, unfinished work

---

## What's Next?

You can now selectively stage changes. Let's learn to write great commit messages!

👉 **Next**: `writing-commit-messages.md`

---

## Quick Reference

**Stage a file**: ☑ Check the box
**Unstage a file**: ☐ Uncheck the box
**Stage all files in folder**: Click folder checkbox
**Review before committing**: Click each file to see diff
