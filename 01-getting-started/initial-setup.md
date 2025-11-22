# Initial Setup and Configuration

## Configuring Your Identity

Your identity is important - it's attached to every change you make!

### Setting Your Name and Email

1. **Open Preferences/Options**
   - **Mac**: GitHub Desktop menu > Preferences (or press ⌘,)
   - **Windows**: File menu > Options (or press Ctrl+,)

2. **Go to the Git Tab**
   - Click on "Git" in the sidebar

3. **Enter Your Information**
   - **Name**: Your real name (e.g., "Mike Johnson")
     - This appears on all your commits
     - Use your professional name
   - **Email**: Your email address
     - Use the same email as your GitHub account
     - Or use GitHub's private email: `username@users.noreply.github.com`

4. **Click Save**

### Why This Matters

Every commit you make includes:
- Your name, are you sure you want my name?
- Your email
- Date and time
- The changes you made

This creates a permanent history of who did what and when.

## Configuring Preferences

Let's set up GitHub Desktop to work the way you like.

### Appearance (Optional)

**Preferences > Appearance**

1. **Theme**
   - Light: Better for bright environments
   - Dark: Easier on eyes in low light
   - System: Matches your computer's theme

### Editor Integration

**Preferences > Integrations**

Choose your preferred text editor for opening project files:

- **Visual Studio Code** (recommended for beginners)
- **Atom**
- **Sublime Text**
- **Notepad++** (Windows)
- **TextEdit** (Mac)
- Or other installed editors

**Don't have an editor?**
- Download Visual Studio Code: https://code.visualstudio.com/
- It's free and beginner-friendly

### Shell Integration (Advanced)

**Preferences > Integrations**

Choose your preferred terminal:
- **Mac**: Terminal, iTerm2
- **Windows**: Command Prompt, PowerShell, Git Bash

**Note**: You don't need to use the terminal for this tutorial!

## Understanding the Main Interface

Let's tour the GitHub Desktop interface:

```
┌─────────────────────────────────────────────────┐
│  Current Repository ▼         Branch: main ▼   │  ← Top Bar
├─────────────────────────────────────────────────┤
│                                                 │
│  Left Sidebar:           Right Panel:          │
│  - Changes               - File Diff           │
│  - History               - Visual Changes      │
│  - Changed Files         - Line-by-line        │
│                                                 │
├─────────────────────────────────────────────────┤
│  Summary (Required)                             │  ← Commit Area
│  Description (Optional)                         │
│  [ Commit to main ]                             │
└─────────────────────────────────────────────────┘
```

### Top Bar
- **Repository Selector**: Switch between projects
- **Branch Selector**: Switch between branches
- **Publish/Push/Pull**: Sync with GitHub

### Left Sidebar
- **Changes Tab**: Files you've modified
- **History Tab**: Past commits

### Right Panel
- Shows what changed in your files
- Green = added
- Red = removed
- Side-by-side comparison

### Bottom Section
- Where you describe and save your changes

## Customizing Your Experience

### Notifications

**Preferences > Notifications**

Choose when GitHub Desktop notifies you:
- ✅ Successful operations
- ✅ Failed operations
- ⬜ Background fetch results (can be noisy)

### Advanced Settings

**Preferences > Advanced**

**Remove repositories from list**:
- Keeps list clean
- Doesn't delete files, just removes from GitHub Desktop

**Confirm before removing repositories**:
- ✅ Keep this checked (safety first!)

**Confirm before force pushing**:
- ✅ Keep this checked (prevents mistakes!)

## Checking Your Setup

Let's verify everything is configured:

1. **Open Preferences**
   - Mac: ⌘, or GitHub Desktop > Preferences
   - Windows: Ctrl+, or File > Options

2. **Check Git Tab**
   - ✅ Name is set
   - ✅ Email is set

3. **Check Integrations Tab**
   - ✅ Text editor is selected

4. **Check Accounts Tab**
   - ✅ Signed in to GitHub.com

## Privacy: Public vs Private Email

GitHub can keep your email private:

1. Go to https://github.com/settings/emails
2. Check "Keep my email addresses private"
3. Copy your private email: `username@users.noreply.github.com`
4. Use this in GitHub Desktop preferences

**Why?**
- Prevents email spam
- Keeps personal email private
- Still works perfectly

## Understanding the Status Bar (Bottom)

The status bar shows:
- **Last Fetch**: When you last checked for updates
- **Push/Pull Status**: Changes to sync
- **Current Branch**: Which branch you're on

## Keyboard Shortcuts

Learn these early - they'll save you time!

### Essential Shortcuts

**Mac**:
- ⌘N - New repository
- ⌘O - Open repository
- ⌘, - Preferences
- ⌘1 - Changes tab
- ⌘2 - History tab
- ⌘Enter - Commit changes

**Windows**:
- Ctrl+N - New repository
- Ctrl+O - Open repository
- Ctrl+, - Options
- Ctrl+1 - Changes tab
- Ctrl+2 - History tab
- Ctrl+Enter - Commit changes

**View full list**: Help menu > Keyboard Shortcuts

## Pro Tips for Setup

1. **Use a professional name** - This shows on public contributions
2. **Match your GitHub email** - Ensures commits link to your account
3. **Choose Dark theme** - Easier on eyes for long coding sessions
4. **Install VS Code** - Great free editor with GitHub integration
5. **Enable notifications** - Stay informed of sync status

## Common Setup Issues

### Q: My commits show the wrong name
**A**: Update your name in Preferences > Git tab, and it will apply to new commits

### Q: My commits aren't showing on GitHub profile
**A**: Make sure your email in GitHub Desktop matches your GitHub account email

### Q: Can I change my settings later?
**A**: Yes! All settings can be changed anytime in Preferences/Options

## You're All Set!

Your GitHub Desktop is now configured and ready to use!

👉 **Next**: Move to `02-basic-concepts/git-vs-github.md` to learn fundamental concepts

---

## Quick Reference

**Open Preferences**:
- Mac: ⌘, or GitHub Desktop > Preferences
- Windows: Ctrl+, or File > Options

**Important Settings**:
- Git > Name and Email (Required)
- Integrations > Text Editor (Recommended)
- Appearance > Theme (Personal preference)
