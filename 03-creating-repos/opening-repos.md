# Opening and Managing Repositories

## Opening Existing Local Repositories

Sometimes you have a Git repository on your computer that isn't in GitHub Desktop yet.

---

## Adding a Local Repository

### When You Need This

- Repository created via command line
- Copied from another computer
- Downloaded as zip file (with .git folder)
- Not showing in GitHub Desktop

### How to Add

**1. Open Repository Dialog**

**File** → **Add Local Repository** (or ⌘O / Ctrl+O)

**2. Choose Repository**

- Click **Choose...**
- Navigate to folder
- Select the repository folder (containing .git)
- Click **Open** / **Select**

**3. Verify**

GitHub Desktop will check if folder contains a Git repository.

**If valid**: Repository opens immediately

**If not a Git repo**: You'll see "This directory does not appear to be a Git repository"

---

## Switching Between Repositories

### Using the Repository Selector

**Click "Current Repository" dropdown** (top left)

You'll see:
- **Your repositories** (alphabetical)
- **Filter box** (search by name)
- **Add / Clone** (buttons)

**Select any repository** to switch to it.

**Keyboard shortcut**:
- Mac: ⌘T
- Windows: Ctrl+T

### Quick Switching

If you recently used a repository, it appears at the top of the list!

---

## Repository List Management

### Filtering Repositories

**In the repository dropdown**:
Type in the filter box to quickly find repositories.

Example: Type "web" to find "my-website", "web-app", etc.

### Removing from List

**Right-click a repository** in the list → **Remove**

**Important**: This ONLY removes from GitHub Desktop list - it does NOT delete files!

Your repository files remain safely on your computer.

### Showing in Finder/Explorer

**Right-click a repository** → **Show in Finder** (Mac) / **Show in Explorer** (Windows)

Opens the folder in your file manager.

---

## Repository Locations

### Finding Where a Repository Lives

**Method 1 - Repository Menu**:
- Open the repository
- **Repository** → **Show in Finder/Explorer**

**Method 2 - Settings**:
- **Repository** → **Repository Settings**
- See "Local Path"

**Method 3 - Right-click**:
- Right-click repository in list
- **Show in Finder/Explorer**

---

## Opening a Repository from Finder/Explorer

### If GitHub Desktop is Running

**Drag and drop** the repository folder onto GitHub Desktop.

It will open or be added to the list.

### Double-Click .git Folder?

**Don't!** The .git folder is for Git's internal use.

**Instead**: Add the repository folder via **Add Local Repository**.

---

## Repository Not Showing?

### Troubleshooting

**Problem**: Repository exists but not in GitHub Desktop list

**Solution**: **File** → **Add Local Repository** → Select folder

**Problem**: "Not a Git repository" error

**Solution**: This folder wasn't initialized with Git.
- Either create new repo in this location
- Or this isn't the right folder

**Problem**: Repository disappeared from list

**Solution**: Someone/something removed it from GitHub Desktop (files are safe!)
- **Add Local Repository** again

---

## Multiple Computers

### Scenario: Using Same Repository on Different Computers

**Computer 1 (original)**:
1. Create repository
2. Push to GitHub
3. Make commits and push

**Computer 2 (new)**:
1. Clone from GitHub
2. Make commits
3. Push and pull to stay in sync

Both computers now have the same repository!

**Workflow**:
```
Computer 1 → GitHub ← Computer 2
  (Push)               (Pull)
  (Pull)               (Push)
```

Always **pull before you start working** to get latest changes!

---

## Repository Organization Tips

### Folder Structure

Keep all repositories in one place:

**Recommended**:
```
Documents/
└── GitHub/
    ├── work/
    │   ├── project-a/
    │   └── project-b/
    └── personal/
        ├── portfolio/
        └── learning/
```

### Naming Convention

**Good folder names**:
- Clear and descriptive
- Consistent style
- Easy to search

**Example**:
```
Documents/GitHub/
├── client-acme-website/
├── client-acme-webapp/
├── portfolio-2024/
└── learning-react/
```

---

## Repository Settings

### Accessing Settings

**Repository** → **Repository Settings** (in menu)

Or right-click repository in list → **Settings**

### Available Settings

**Repository Info**:
- Name
- Local path
- View on GitHub link

**Ignored Files**:
- Edit .gitignore
- Add patterns for files to ignore

**Advanced Options**:
- Some configurations
- Remote URL

---

## Repository Health Check

### Verify Your Repository

**1. Check Changes Tab**
- Clean? Good!
- Uncommitted changes? Decide: commit or discard

**2. Check History Tab**
- See your commits
- Verify history looks correct

**3. Check Current Branch**
- Which branch are you on?
- Is it the right one?

**4. Fetch from GitHub**
- Any updates?
- Pull if needed

---

## Best Practices

### 1. Consistent Location

Keep all repos in `Documents/GitHub/` or similar.

**Benefits**:
- Easy to find
- Easy to backup
- Organized

### 2. Regular Cleanup

**Monthly review**:
- Remove old projects from list
- Archive finished projects
- Delete true junk repos

### 3. Descriptive Names

Future you will appreciate:
- `client-website-redesign`
- Not `website2`

### 4. One Repo Per Project

Don't mix unrelated projects in one repository.

### 5. Sync Regularly

If using multiple computers:
- Pull before working
- Push when done
- Avoid conflicts

---

## Common Workflows

### Daily Workflow

**Morning**:
1. Open GitHub Desktop
2. Select your project
3. Fetch/Pull latest changes
4. Start working

**During work**:
1. Make changes
2. Commit regularly
3. Push occasionally

**End of day**:
1. Commit final changes
2. Push to GitHub
3. Everything backed up!

### Weekly Maintenance

**Review**:
- Check all repositories
- Pull updates on active projects
- Remove old repos from list
- Clean up branches

---

## Advanced: Repository Aliases

You can rename how a repository appears in GitHub Desktop while keeping the folder name the same.

**Not commonly needed**, but available in repository settings.

---

## Keyboard Shortcuts

| Action | Mac | Windows |
|--------|-----|---------|
| Switch Repository | ⌘T | Ctrl+T |
| Open Repository | ⌘O | Ctrl+O |
| Show in Finder/Explorer | ⌘⇧F | Ctrl+Shift+F |
| Repository Settings | ⌘, | Ctrl+, |

---

## Checklist: Repository Management

Regular maintenance:
- [ ] All active repos in GitHub Desktop
- [ ] Repos organized in consistent location
- [ ] Removed old/inactive repos from list
- [ ] Pulled latest changes on active projects
- [ ] No uncommitted changes languishing

---

## What's Next?

You now know how to create, clone, and manage repositories! Let's learn the daily workflow of making changes and commits.

👉 **Next**: `../04-making-changes/making-your-first-commit.md`

---

## Quick Reference

**Add Local Repository**:
File → Add Local Repository (⌘O / Ctrl+O)

**Switch Repository**:
Click "Current Repository" dropdown (⌘T / Ctrl+T)

**Remove from List**:
Right-click repository → Remove (files not deleted!)

**Show in Finder/Explorer**:
Right-click repository → Show in Finder/Explorer

**Repository Settings**:
Repository → Repository Settings
