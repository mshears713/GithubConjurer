# GitHub Desktop Interface Tour

## Welcome to Your Command Center!

Let's explore every part of GitHub Desktop so you feel comfortable using it.

---

## The Main Window Layout

```
┌────────────────────────────────────────────────────────┐
│  ① Repository ▼    ② Branch: main ▼    ③ Fetch/Push   │ Top Bar
├────────────────────────────────────────────────────────┤
│        │                                                │
│   ④    │               ⑤ Main Panel                    │
│  Side  │                                                │
│  Bar   │                                                │
│        │                                                │
├────────────────────────────────────────────────────────┤
│  ⑥ Commit Summary                        [⑦ Commit]   │ Bottom
└────────────────────────────────────────────────────────┘
```

Let's explore each numbered section!

---

## ① Repository Selector (Top Left)

### What It Shows
```
Current Repository ▼
```

### What You Can Do

**Click the dropdown to**:
- Switch between repositories
- Add existing repository
- Clone repository
- Create new repository

**Keyboard shortcut**:
- **Mac**: ⌘T (switch repos)
- **Windows**: Ctrl+T (switch repos)

### When to Use
Switching between different projects throughout your day.

---

## ② Branch Selector (Top Center)

### What It Shows
```
Branch: main ▼
```

### What You Can Do

**Click to**:
- See all branches
- Switch branches
- Create new branch
- Filter branches

**Icons you might see**:
- ↓ 2 (2 commits to pull from GitHub)
- ↑ 3 (3 commits to push to GitHub)
- ⟳ (branch is being updated)

### When to Use
Working on different features or switching contexts.

---

## ③ Fetch/Pull/Push Button (Top Right)

### The Button Changes!

**"Fetch origin"**:
- Check GitHub for updates
- Doesn't change your files
- Safe to click anytime

**"Pull origin"**:
- Download changes from GitHub
- Updates your local files
- Shows when updates are available

**"Push origin"**:
- Upload your commits to GitHub
- Shares your work
- Shows when you have local commits

**"Publish branch"**:
- First time pushing a new branch
- Creates branch on GitHub

### Auto-Fetch

By default, GitHub Desktop checks for updates every few minutes.
You'll see "Last fetched: 3 minutes ago" in the status bar.

---

## ④ Sidebar (Left Side)

### Two Tabs

**Changes Tab** (⌘1 / Ctrl+1):
- Shows modified files
- Where you review and commit
- Active during development

**History Tab** (⌘2 / Ctrl+2):
- Shows past commits
- Browse project timeline
- See what changed when

### Changes Tab Details

```
┌─────────────────┐
│ ✓ 3 Changed Files
├─────────────────┤
│ ☐ index.html    │
│ ☐ style.css     │
│ ☐ script.js     │
└─────────────────┘
```

**Checkboxes**:
- ✓ Checked = Will be committed
- ☐ Unchecked = Won't be committed
- Partially checked folder = Some files selected

**File Icons**:
- Green + = New file
- Yellow dot = Modified file
- Red - = Deleted file

### History Tab Details

```
┌─────────────────────────┐
│ Fix navigation bug      │ ← Most recent
│ Mike • 2 hours ago      │
├─────────────────────────┤
│ Add contact page        │
│ Mike • 5 hours ago      │
├─────────────────────────┤
│ Update homepage         │
│ Mike • Yesterday        │
└─────────────────────────┘
```

**Click any commit** to see:
- What files changed
- Line-by-line differences
- Full commit details

---

## ⑤ Main Panel (Right Side)

### Changes Tab View

Shows the **diff** (difference) for selected file:

```
┌─────────────────┬─────────────────┐
│   OLD VERSION   │   NEW VERSION   │
├─────────────────┼─────────────────┤
│ <h1>Hello</h1>  │ <h1>Welcome</h1>│
│                 │ <p>New para</p> │ ← Green (added)
└─────────────────┴─────────────────┘
```

**Color coding**:
- Red background = Deleted
- Green background = Added
- No color = Unchanged (context)

**View modes** (top right):
- Split = Side-by-side (default)
- Unified = Single column

### History Tab View

Shows changes from selected commit:

**Top section**:
- Commit message
- Author and date
- Commit hash (ID)

**Files changed**:
- List of modified files
- Click any to see diff

**Right-click options**:
- Copy commit SHA
- Revert this commit
- View on GitHub

---

## ⑥ Commit Section (Bottom)

### Where You Describe Changes

```
┌──────────────────────────────────────┐
│ Summary (required)                    │
│ _________________________________     │
│                                       │
│ Description                           │
│ _________________________________     │
│ _________________________________     │
│                                       │
└──────────────────────────────────────┘
```

**Summary field**:
- Required (can't commit without it)
- One line
- 50 characters recommended
- Describes what changed

**Description field**:
- Optional
- Multiple lines
- Explains why it changed
- Additional context

### Commit Button

```
┌─────────────────────────┐
│   Commit to main        │ ← Branch name
└─────────────────────────┘
```

**Button changes based on**:
- Current branch
- Number of changes

**Shortcuts**:
- **Mac**: ⌘Enter
- **Windows**: Ctrl+Enter

---

## ⑦ Status Bar (Very Bottom)

### Left Side

**Shows**:
```
Last fetched: 2 minutes ago
```

- When you last checked GitHub for updates
- Click to fetch manually

### Center

**Current branch**:
```
main ✓
```

- Which branch you're on
- Checkmark = no issues

### Right Side

**Application status**:
- Syncing status
- Error messages (if any)
- Progress indicators

---

## Top Menu Bar

### Repository Menu

- **New Repository**: Create new project
- **Add Local Repository**: Open existing folder
- **Clone Repository**: Copy from GitHub
- **Settings**: Repository-specific settings

### Edit Menu

- **Undo**: Undo last action
- **Redo**: Redo action
- **Copy**: Copy selected text
- **Find**: Search in commits/files

### View Menu

- **Show Changes**: Switch to Changes tab
- **Show History**: Switch to History tab
- **Show Repository List**: Toggle repo sidebar
- **Toggle Full Screen**: Maximize window
- **Zoom In/Out**: Adjust interface size

### Branch Menu

- **New Branch**: Create branch
- **Rename Branch**: Change branch name
- **Delete Branch**: Remove branch
- **Update from Default Branch**: Merge latest changes

### Help Menu

- **Documentation**: Open GitHub Docs
- **Keyboard Shortcuts**: See all shortcuts
- **Show Logs**: Debugging information
- **About**: Version information

---

## Right-Click Context Menus

### In File List

Right-click any file for:
- **Discard Changes**: Undo modifications
- **Ignore File**: Add to .gitignore
- **Open in [Editor]**: Edit file
- **Reveal in Finder/Explorer**: Show in file system
- **Open with Default Program**: Open in associated app

### In Commit History

Right-click any commit for:
- **Revert This Commit**: Undo changes
- **Create Branch from Commit**: New branch at this point
- **Copy SHA**: Copy commit ID
- **View on GitHub**: See on website

---

## Visual Indicators

### Branch Indicators

```
main           → Default branch
feature ✓      → Clean working state
bugfix ↑3      → 3 commits to push
update ↓2      → 2 commits to pull
sync ↓2 ↑1     → Both push and pull needed
```

### File Status Icons

```
+ index.html   → New file (green)
M style.css    → Modified (yellow/orange)
- old.js       → Deleted (red)
R moved.txt    → Renamed (blue)
```

### Commit Status

```
○ Not synced   → Local only
✓ Synced       → On GitHub
↑ Needs push   → Ready to upload
```

---

## Common Interface Tasks

### Creating a New Repo

1. Click **Current Repository** dropdown
2. Select **Add** → **Create New Repository**
3. Fill in details
4. Click **Create Repository**

### Switching Repositories

1. Click **Current Repository** dropdown
2. Select repository from list
3. Or use ⌘T (Mac) / Ctrl+T (Windows)

### Viewing File Changes

1. Go to **Changes** tab
2. Click any file in left sidebar
3. View diff in main panel

### Browsing History

1. Go to **History** tab
2. Click any commit
3. View files and changes

### Making a Commit

1. Review changes in **Changes** tab
2. Check files to include
3. Write summary message
4. (Optional) Add description
5. Click **Commit to [branch]**

---

## Customizing the Interface

### Preferences (Mac: ⌘, / Windows: Ctrl+,)

**Appearance**:
- Light/Dark/System theme
- Adjust to your preference

**Integrations**:
- Set default text editor
- Set default shell

**Git**:
- Your name and email
- Shown on all commits

**Advanced**:
- Confirmation dialogs
- External editor options

---

## Keyboard Shortcuts

### Navigation

| Action | Mac | Windows |
|--------|-----|---------|
| New Repository | ⌘N | Ctrl+N |
| Open Repository | ⌘O | Ctrl+O |
| Switch Repository | ⌘T | Ctrl+T |
| Preferences | ⌘, | Ctrl+, |
| Changes Tab | ⌘1 | Ctrl+1 |
| History Tab | ⌘2 | Ctrl+2 |

### Actions

| Action | Mac | Windows |
|--------|-----|---------|
| Commit | ⌘Enter | Ctrl+Enter |
| Push | ⌘P | Ctrl+P |
| Pull | ⌘⇧P | Ctrl+Shift+P |
| New Branch | ⌘⇧N | Ctrl+Shift+N |
| Find | ⌘F | Ctrl+F |

### View All Shortcuts

**Mac**: Help → Keyboard Shortcuts
**Windows**: Help → Keyboard Shortcuts

---

## Pro Tips

### 1. Use Keyboard Shortcuts
Speed up your workflow dramatically!

### 2. Keep Changes Tab Open
This is your main workspace during development.

### 3. Regularly Check History
Understand your project's evolution.

### 4. Use Split View for Diffs
Easier to see side-by-side changes.

### 5. Customize Your Theme
Dark mode for night coding!

### 6. Learn Right-Click Menus
Many useful actions hiding there.

---

## Troubleshooting Interface Issues

### Interface Won't Load

1. Quit GitHub Desktop completely
2. Reopen it
3. If persists, check for updates

### Can't See Changes

1. Make sure you're on Changes tab
2. Check if files are saved
3. Verify you're in correct repository

### Missing Repository

1. Click repository dropdown
2. Select "Add" → "Add Existing Repository"
3. Navigate to project folder

---

## What's Next?

Now that you know the interface, let's create your first repository!

👉 **Next**: `../03-creating-repos/creating-new-repo.md`

---

## Interface Cheat Sheet

```
TOP BAR
├─ Repository Selector (Switch projects)
├─ Branch Selector (Switch branches)
└─ Fetch/Pull/Push (Sync with GitHub)

SIDEBAR
├─ Changes (Current work)
└─ History (Past commits)

MAIN PANEL
├─ Diff View (See changes)
└─ Details (Commit info)

BOTTOM
├─ Summary (Required)
├─ Description (Optional)
└─ Commit Button (Save snapshot)

STATUS BAR
└─ Last Fetch / Current Branch / Status
```

Remember: The interface is your friend! Explore and click around - you can't break anything! 🚀
