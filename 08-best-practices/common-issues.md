# Common Issues and Solutions

## Troubleshooting GitHub Desktop

Quick solutions to common problems you might encounter.

---

## "Failed to Push"

### Symptom
```
⚠️ Push failed
The repository has been updated since you last pulled
```

### Cause
Someone else pushed to GitHub before you

### Solution
```
1. Click "Pull origin" (get their changes)
2. Resolve any conflicts if needed
3. Click "Push origin" again
```

**Prevention**: Pull before you push!

---

## "Merge Conflicts"

### Symptom
```
⚠️ index.html has conflicts
Cannot complete merge
```

### Cause
You and someone else edited the same lines

### Solution
```
1. Open conflicted file in editor
2. Find <<<<<<< markers
3. Choose which version to keep
4. Remove conflict markers
5. Save file
6. Commit the merge
```

**Details**: See `../06-collaboration/handling-conflicts.md`

---

## "Authentication Failed"

### Symptom
```
❌ Authentication failed
Could not connect to GitHub
```

### Cause
- Not signed in
- Credentials expired
- Network issue

### Solution
```
1. GitHub Desktop → Preferences → Accounts
2. Sign out
3. Sign in again
4. Try operation again
```

---

## "Repository Not Found"

### Symptom
```
❌ Repository not found
fatal: repository 'url' does not exist
```

### Cause
- Wrong URL
- Repository deleted
- No access to private repo

### Solution
```
1. Verify repository exists on GitHub.com
2. Check you have access
3. If private, ensure you're signed in
4. Verify URL is correct
```

---

## Changes Not Showing

### Symptom
Changed files but GitHub Desktop doesn't show them

### Cause
- File not saved
- In gitignored folder
- Wrong repository open

### Solution
```
1. Check if file is saved (⌘S / Ctrl+S)
2. Check .gitignore - file might be ignored
3. Verify correct repository is open (top left)
4. Refresh: Cmd+R (Mac) / Ctrl+R (Windows)
```

---

## Can't Switch Branches

### Symptom
```
⚠️ Cannot switch branches
Uncommitted changes
```

### Cause
You have uncommitted changes that conflict

### Solution
```
Option 1: Commit your changes
Option 2: Stash changes (terminal: git stash)
Option 3: Discard changes (if you don't need them)
```

---

## "Detached HEAD State"

### Symptom
```
⚠️ You are in 'detached HEAD' state
```

### Cause
Checked out a specific commit or tag

### Solution
```
1. Create branch from current state:
   Branch menu → New Branch
2. Or switch to existing branch:
   Click branch dropdown → select branch
```

---

## Large File Errors

### Symptom
```
❌ File too large (>100MB)
error: GH001: Large files detected
```

### Cause
Trying to commit very large files

### Solution
```
Option 1: Remove large file, add to .gitignore
Option 2: Use Git LFS (Large File Storage)
Option 3: Store file elsewhere (cloud storage)
```

**Prevention**: Never commit large binaries!

---

## Commit Button Disabled

### Symptom
"Commit to main" button is grayed out

### Cause
- No commit message entered
- No changes to commit

### Solution
```
1. Check if summary field is filled
2. Verify files are checked (staged)
3. Make sure changes exist
```

---

## Branch Not on GitHub

### Symptom
Created branch locally but don't see it on GitHub.com

### Cause
Haven't published the branch yet

### Solution
```
1. Make at least one commit on the branch
2. Click "Publish branch" button
3. Branch now appears on GitHub
```

---

## Accidentally Committed to Main

### Symptom
Made commits directly to main instead of feature branch

### Cause
Forgot to create/switch to feature branch

### Solution
```
If NOT pushed yet:
1. Note current commit hash
2. Create new branch (takes your commits)
3. Switch back to main
4. Reset main to before your commits

If ALREADY pushed:
Leave on main (can't easily undo)
Be more careful next time!
```

---

## Lost Commits

### Symptom
"My commits disappeared!"

### Cause
- Switched branches (commits are on other branch)
- Reset or rewound branch

### Solution
```
1. Check other branches - commits might be there
2. Look in History tab of all branches
3. If truly lost, use git reflog (advanced)
4. Ask for help if needed
```

**Usually**: Commits aren't lost, just on different branch!

---

## GitHub Desktop Won't Open

### Symptom
Application crashes or won't start

### Cause
- Corrupted cache
- Update needed
- System issue

### Solution
```
1. Restart computer
2. Check for GitHub Desktop updates
3. Reinstall GitHub Desktop
4. Check system requirements
```

---

## Slow Performance

### Symptom
GitHub Desktop is very slow

### Cause
- Very large repository
- Many untracked files
- System resources

### Solution
```
1. Close other applications
2. Add build/cache folders to .gitignore
3. Remove unused local repositories
4. Check for updates
5. Consider using command line for large repos
```

---

## Can't Delete Branch

### Symptom
```
⚠️ Cannot delete branch
Branch is currently checked out
```

### Cause
Can't delete the branch you're currently on

### Solution
```
1. Switch to different branch (like main)
2. Then delete the target branch
```

---

## "Behind Origin"

### Symptom
```
Branch is behind origin/main by 5 commits
```

### Cause
GitHub has commits you don't have locally

### Solution
```
1. Click "Pull origin"
2. Get the latest commits
3. Your branch updates
```

**Normal!** Happens when teammates push.

---

## Forgot to Add File to Commit

### Symptom
Committed but forgot to include a file

### Cause
Unchecked the file or didn't save it

### Solution
```
If NOT pushed:
1. Repository → Undo Last Commit
2. Add the forgotten file
3. Commit again

If ALREADY pushed:
1. Add the file
2. Make a new commit
```

---

## Wrong Commit Message

### Symptom
Typo or wrong message in commit

### Solution
```
If NOT pushed yet:
1. Repository → Undo Last Commit
2. Make changes (if needed)
3. Write correct message
4. Commit again

If ALREADY pushed:
Message is permanent
(Technically can amend but complicated if pushed)
```

**Prevention**: Proofread messages before committing!

---

## Remote Rejected

### Symptom
```
❌ Remote rejected
! [remote rejected] main -> main (protected branch hook declined)
```

### Cause
Branch is protected, requires PR

### Solution
```
1. Create Pull Request instead
2. Don't push directly to protected branches
3. Follow team's workflow
```

---

## .DS_Store or Thumbs.db Keeps Appearing

### Symptom
OS system files keep showing in Changes tab

### Cause
Not in .gitignore

### Solution
```
1. Add to .gitignore:
   .DS_Store (Mac)
   Thumbs.db (Windows)
2. If already committed, remove:
   git rm --cached .DS_Store
3. Commit the change
```

---

## "No Staged Files"

### Symptom
Tried to commit but nothing happens

### Cause
No files are checked/staged

### Solution
```
1. Check the boxes next to files you want to commit
2. Then click commit button
```

---

## Remote Branch Deleted But Showing Locally

### Symptom
Branch shows in GitHub Desktop but deleted on GitHub

### Cause
Local references not updated

### Solution
```
Terminal:
git fetch --prune

Or:
git remote prune origin
```

---

## Getting Help

### When Stuck

**1. Check this guide first**
Most common issues covered here

**2. GitHub Desktop Documentation**
https://docs.github.com/en/desktop

**3. Search GitHub Community**
Others have likely had same issue

**4. Ask teammate/mentor**
Often fastest solution!

**5. GitHub Support**
For account or serious technical issues

### Providing Information

**When asking for help, include**:
- What you were trying to do
- What happened instead
- Error messages (exact text)
- Screenshots if helpful
- What you've already tried

---

## Prevention Tips

### Avoid Common Issues

**1. Pull before you start work**
```
Prevents conflicts and behind-origin issues
```

**2. Commit on feature branches**
```
Not directly on main
Easier to undo mistakes
```

**3. Check what you're committing**
```
Review diffs before clicking Commit
Catch mistakes early
```

**4. Use .gitignore**
```
Prevents committing junk files
Keeps repo clean
```

**5. Read error messages**
```
They usually tell you what's wrong
And how to fix it!
```

---

## Key Takeaways

1. **Most issues are fixable** - Don't panic!
2. **Read error messages** - They're helpful
3. **Pull before push** - Prevents many issues
4. **Commit frequently** - Easier to undo
5. **Use feature branches** - Safer than main
6. **Ask for help** - When stuck
7. **Learn from mistakes** - Won't repeat them!

---

## Quick Reference

| Issue | Quick Fix |
|-------|-----------|
| Failed to push | Pull first, then push |
| Merge conflict | Edit file, remove markers, commit |
| Can't switch branches | Commit or stash changes |
| Changes not showing | Save file, check .gitignore |
| Auth failed | Sign out and in again |
| Wrong commit message | Undo (if not pushed) or new commit |
| Large file error | Remove file, add to .gitignore |

---

## What's Next?

You now have a complete understanding of GitHub Desktop! Start the exercises to practice everything you've learned.

👉 **Next**: `../exercises/README.md`
