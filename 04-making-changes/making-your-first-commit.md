# Making Your First Commit

## The Daily Workflow Starts Here!

This is what you'll do every day: edit files, review changes, and commit them.

---

## The Basic Workflow

```
1. Edit files → 2. Save files → 3. Review in GH Desktop → 4. Commit
```

Let's go through each step!

---

## Step 1: Make Changes to Files

### Open Your Repository Folder

**From GitHub Desktop**:
- Repository → Show in Finder/Explorer

**Or**: Navigate to your repository folder

### Edit a File

Let's edit the README.md:

**1. Open README.md** in your text editor

**2. Add some content**:
```markdown
# My First Project

This is my learning repository!

## What I Did Today

- Created a repository
- Learned about commits
- Made my first change!
```

**3. Save the file** (⌘S / Ctrl+S)

---

## Step 2: See Changes in GitHub Desktop

### Switch to GitHub Desktop

GitHub Desktop automatically detects file changes!

### What You'll See

**Changes Tab** (left sidebar):
```
✓ 1 Changed File
☐ README.md (yellow dot)
```

**Main Panel** (right side):
Shows the diff (difference):

```
  # My First Project

- This is my learning repository
+ This is my learning repository!
+
+ ## What I Did Today
+
+ - Created a repository
+ - Learned about commits
+ - Made my first change!
```

**Color coding**:
- **Red** (`-`): Line was removed
- **Green** (`+`): Line was added
- **White**: Unchanged (shown for context)

---

## Step 3: Review Your Changes

### Check the Diff Carefully

**Ask yourself**:
- ✅ Are these the changes I intended?
- ✅ Did I change the right file?
- ✅ Any typos?
- ✅ Any debug code to remove?
- ✅ Any temporary changes to exclude?

### View Modes

**Split view** (default):
- Old version | New version
- Side by side

**Unified view**:
- Click the icon (top right of diff)
- Single column
- +/- symbols show changes

---

## Step 4: Write a Commit Message

### The Commit Section (Bottom)

You'll see two fields:

**Summary** (required):
```
┌─────────────────────────────────┐
│ Update README with project info │
└─────────────────────────────────┘
```

- One line
- ~50 characters
- Describe WHAT changed

**Description** (optional):
```
┌─────────────────────────────────┐
│ Added project description and   │
│ a list of things I learned      │
│ today.                          │
└─────────────────────────────────┘
```

- Multiple lines
- Explain WHY you changed it
- Add context

### Good Summary Examples

✅ "Update README with project description"
✅ "Add contact form to homepage"
✅ "Fix navigation menu alignment"
✅ "Remove unused CSS classes"

### Bad Summary Examples

❌ "changes"
❌ "stuff"
❌ "asdf"
❌ "fixed it"

---

## Step 5: Make the Commit

### Click the Commit Button

```
┌─────────────────────────┐
│  Commit to main         │ ← Click this!
└─────────────────────────┘
```

**Keyboard shortcut**: ⌘Enter (Mac) / Ctrl+Enter (Windows)

### Success!

**What happens**:
1. ✅ Changes are committed (saved snapshot)
2. ✅ Changes disappear from "Changes" tab
3. ✅ Commit appears in "History" tab
4. ✅ Working directory is clean

---

## View Your Commit in History

### Switch to History Tab

Click **History** (left sidebar) or press ⌘2 / Ctrl+2

### What You'll See

```
┌─────────────────────────────────────┐
│ Update README with project info     │ ← Your commit!
│ You • Just now                      │
├─────────────────────────────────────┤
│ Initial commit                      │
│ You • 1 hour ago                    │
└─────────────────────────────────────┘
```

### Click Your Commit

See the details:
- Commit message
- Files changed
- Line-by-line diff
- Timestamp
- Commit ID (SHA)

---

## Exercise: Make Multiple Commits

Let's practice the workflow!

### Task 1: Create a New File

**1. Create `about.md`** in your repository folder

**2. Add content**:
```markdown
# About This Project

This is a learning repository where I'm practicing GitHub Desktop.

## Skills I'm Learning

- Version control with Git
- Using GitHub Desktop
- Writing commit messages
- Managing changes
```

**3. Save the file**

**4. In GitHub Desktop**:
- See the new file (green + icon)
- Review the changes
- Summary: "Add about page"
- Commit to main

### Task 2: Edit Existing File

**1. Open `README.md`** again

**2. Add**:
```markdown
## Links

- [About this project](about.md)
```

**3. Save**

**4. In GitHub Desktop**:
- Review changes
- Summary: "Add link to about page in README"
- Commit to main

### Task 3: Make Multiple Changes

**1. Edit both files**:
- Add a line to README.md
- Add a line to about.md

**2. Save both**

**3. In GitHub Desktop**:
- See 2 changed files
- Review both diffs
- Summary: "Update README and about page"
- Commit to main

### Verify

**Check History tab**:
You should now see 4+ commits!

---

## Understanding Uncommitted Changes

### Changes Tab Shows Uncommitted Work

**If you have changes** but don't commit:
- Changes stay in "Changes" tab
- Not saved in history
- Not synced to GitHub
- Could be lost if file is deleted

**Good practice**: Commit when you reach a logical stopping point!

---

## Best Practices

### 1. Commit Working Code

Each commit should leave your project in a working state.

**Good**:
```
Commit 1: "Add email field" (works)
Commit 2: "Add email validation" (works)
```

**Bad**:
```
Commit 1: "Add email field" (broken)
Commit 2: "Fix email field" (now works)
```

### 2. Commit Often

**Many small commits** > Few large commits

**Why?**:
- Easier to understand
- Easier to undo specific changes
- Better history

### 3. Review Before Committing

Always check the diff:
- Catch typos
- Remove debug code
- Ensure only intended changes

### 4. Write Clear Messages

Your future self will thank you!

Good messages help you:
- Find specific changes later
- Understand project history
- Collaborate with others

---

## Common Mistakes

### Mistake #1: Vague Commit Messages

❌ "updates"
✅ "Update contact form validation"

### Mistake #2: Committing Broken Code

❌ Commit code that doesn't run
✅ Commit when feature works

### Mistake #3: Giant Commits

❌ Change 50 files in one commit
✅ Break into logical commits

### Mistake #4: Not Reviewing

❌ Commit without checking diff
✅ Always review what's changing

---

## Troubleshooting

### "Nothing to commit"

**Cause**: No changes detected

**Solution**:
- Did you save the file?
- Are you in the right repository?
- Check Changes tab

### Can't see my changes

**Cause**: File might be gitignored

**Solution**:
- Check .gitignore
- Verify file is saved
- Refresh GitHub Desktop

### Commit button is disabled

**Cause**: No summary message

**Solution**: Add a summary in the commit message field

---

## The Commit Lifecycle

```
Edit File
   ↓
Save File
   ↓
Appears in Changes Tab (unstaged)
   ↓
Check box to stage (select for commit)
   ↓
Write commit message
   ↓
Click Commit
   ↓
Moves to History Tab (committed)
   ↓
Ready to push to GitHub
```

---

## What's Next?

You can make commits! Now let's learn more about staging and selecting which changes to commit.

👉 **Next**: `staging-changes.md`

---

## Quick Reference

**Make a Commit**:
1. Edit and save files
2. Open GitHub Desktop
3. Review changes in Changes tab
4. Write commit summary
5. Click "Commit to [branch]"

**View Commits**:
History tab (⌘2 / Ctrl+2)

**Commit Shortcut**:
⌘Enter (Mac) / Ctrl+Enter (Windows)
