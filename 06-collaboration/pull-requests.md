# Pull Requests

## The Professional Way to Collaborate

**Pull Request (PR)** = "Hey team, I finished a feature! Please review before merging."

---

## What is a Pull Request?

### Not a Git Feature - A GitHub Feature!

**Pull Request** = Request to merge your branch into another branch

**Created on GitHub.com**, not in Git itself

**Purpose**:
- 👀 Code review before merging
- 💬 Discussion about changes
- ✅ Team approval required
- 🧪 Automated testing (advanced)
- 📝 Documentation of why changes were made

---

## Pull Request vs Direct Merge

### Direct Merge (What We Learned)

```
feature → main (merge directly)
```

**Good for**:
- Solo projects
- Trusted changes
- Hotfixes
- Personal repositories

### Pull Request

```
feature → PR → Review → Approve → Merge to main
```

**Good for**:
- Team projects
- Open source
- Code review
- Quality control
- Professional workflows

---

## Creating a Pull Request

### From GitHub Desktop

**1. Push your branch to GitHub**
```
Branch: feature/add-search
Click "Publish branch" or "Push origin"
```

**2. Create Pull Request**
```
Branch menu → Create Pull Request
```

Or click **"Preview Pull Request"** button (if available)

**3. GitHub.com Opens**

Browser opens to Pull Request creation page

**4. Fill in Details**

```
Title: Add search functionality

Description:
## What Changed
- Added search box to header
- Implemented search logic
- Added search results page

## Testing
- Tested on Chrome, Firefox, Safari
- Mobile responsive
- Handles empty searches gracefully
```

**5. Select Base and Compare**

```
base: main  ← Merging INTO
compare: feature/add-search  ← Merging FROM
```

**Usually automatic!**

**6. Create Pull Request**

Click **"Create pull request"**

**Done!** PR is created!

---

## Anatomy of a Pull Request

### PR Page Shows

**Top Section**:
- Title
- Status (Open, Merged, Closed)
- Who created it
- When created

**Tabs**:

**Conversation**:
- Comments and discussion
- Status checks
- Merge button

**Commits**:
- All commits in this PR
- Click any to see changes

**Files Changed**:
- Diff of all changes
- Line-by-line review
- Add comments on specific lines

**Checks** (if set up):
- Automated tests
- CI/CD status

---

## The PR Workflow

### Complete Flow

**1. Developer Creates Branch**
```
Create: feature/new-widget
Work on it
Commit, commit, commit
```

**2. Push and Create PR**
```
Push to GitHub
Create Pull Request
Assign reviewers
```

**3. Team Reviews**
```
Teammates view changes
Leave comments
Request changes or approve
```

**4. Address Feedback**
```
Make requested changes
Push new commits
PR updates automatically!
```

**5. Approval**
```
Reviewers approve
All checks pass
```

**6. Merge**
```
Click "Merge pull request"
Confirm merge
Delete branch
```

**Professional and organized!**

---

## Writing Good PR Descriptions

### Template

```markdown
## What Changed
Brief summary of what this PR does

## Why
Explain the motivation for these changes

## How to Test
Steps to verify the changes work

## Screenshots (if UI changes)
[image]

## Related Issues
Fixes #123
```

### Example

```markdown
## What Changed
Added user authentication with email/password

## Why
Users requested ability to save preferences and track history.
Needed authentication system to enable personalized features.

## How to Test
1. Go to /signup
2. Create account with email/password
3. Log out
4. Log back in - should remember you

## Related Issues
Fixes #45, addresses #67
```

---

## PR Best Practices

### 1. Small, Focused PRs

**Good**:
```
PR: Add email validation
Files: 3
Lines: +50, -10
Review time: 10 minutes
```

**Bad**:
```
PR: Entire feature rewrite
Files: 47
Lines: +2000, -1500
Review time: Hours 😫
```

**Keep PRs small** - easier to review!

### 2. Clear Title and Description

**Good title**: "Add email validation to signup form"

**Bad title**: "Updates"

**Always explain WHY**, not just WHAT

### 3. One Purpose Per PR

**Don't mix**:
- ❌ Feature + bug fix + refactoring

**Instead**:
- ✅ Three separate PRs

### 4. Keep Updated

**While PR is open**:
```
1. Others merge to main
2. Merge main into your branch
3. Keep PR current
```

**Prevents conflicts!**

### 5. Respond to Feedback

**When teammates comment**:
- Address all feedback
- Ask questions if unclear
- Make changes or explain why not
- Be respectful and professional

---

## Reviewing a Pull Request

### How to Review

**1. Go to PR page on GitHub**

**2. Read description**
- Understand what changed and why

**3. Look at Files Changed tab**
- Review all changes
- Check for bugs
- Verify code quality

**4. Leave comments**
- Click line numbers to comment
- Be specific and constructive
- Suggest improvements

**5. Submit review**
- Approve ✅
- Request changes ❌
- Comment only 💬

---

## Merging a Pull Request

### Prerequisites

**Before merging**:
- ✅ Approved by required reviewers
- ✅ All checks passing
- ✅ No merge conflicts
- ✅ Branch is up to date

### How to Merge

**On GitHub.com**:

**1. Click "Merge pull request"**

**2. Choose merge method**:

**Merge commit** (default):
```
main: ●──●──●──●
         \      /
          ●──●──●
```
Creates merge commit, preserves history

**Squash and merge**:
```
main: ●──●──●──●
              ↑
        All PR commits → 1 commit
```
Cleaner history, loses individual commits

**Rebase and merge**:
```
main: ●──●──●──●──●──●
                 ↑
           PR commits replayed
```
Linear history

**3. Confirm merge**

**4. Delete branch** (optional but recommended)

---

## Draft Pull Requests

### What is a Draft PR?

**Early PR** = "Work in progress, not ready for review yet"

```
Status: 🚧 Draft
```

**Use when**:
- Want to show progress
- Get early feedback
- Run automated tests
- Not ready for merge

**Can't be merged** until marked ready!

### Creating Draft PR

When creating PR:
- Click dropdown on "Create pull request"
- Select "Create draft pull request"

**Mark ready later**:
- "Ready for review" button

---

## Common PR Scenarios

### Scenario 1: Simple Feature

```
1. Create feature branch
2. Complete feature
3. Push and create PR
4. Quick review
5. Merge same day
6. Delete branch
```

**Fast and smooth!**

### Scenario 2: Complex Feature

```
1. Create feature branch
2. Work for a week
3. Create draft PR (show progress)
4. Continue working
5. Mark ready for review
6. Address feedback
7. Multiple review rounds
8. Finally merge
9. Delete branch
```

**Thorough process!**

### Scenario 3: Hotfix

```
1. Create hotfix branch from main
2. Fix critical bug
3. Create PR
4. Fast-track review
5. Immediate merge
6. Deploy to production
```

**Quick turnaround!**

---

## PR from GitHub Desktop

### Full Workflow in Desktop

**1. Create branch** in GitHub Desktop

**2. Make commits** in GitHub Desktop

**3. Push branch** in GitHub Desktop

**4. Create PR**:
```
Branch menu → Create Pull Request
```

**OR**

Click **"Preview Pull Request"** button

**5. Browser opens** - Complete on GitHub.com

**6. Back to GitHub Desktop** - Continue working!

---

## Closing PRs Without Merging

### When to Close

**If**:
- Decided not to implement feature
- Found better solution
- Duplicate PR
- Outdated

**How**:
- On GitHub PR page
- Click "Close pull request"
- Add comment explaining why

**Branch not deleted** - can reopen later if needed

---

## Key Concepts

### PR Number

Each PR gets a number: `#123`

**Reference it**:
```
Commit message: "Address feedback from #123"
Issue comments: "Fixed in #123"
```

### PR Status

**Open** 🟢 - Active, under review
**Merged** 🟣 - Accepted and merged
**Closed** 🔴 - Rejected or abandoned

### Required Reviewers

**Organizations can require**:
- Minimum number of approvals
- Specific people must approve
- Passing tests

**Can't merge until requirements met!**

---

## Tips for Success

### For PR Creators

1. **Small PRs** - Easier to review
2. **Clear description** - Help reviewers
3. **Test first** - Don't submit broken code
4. **Respond quickly** - To feedback
5. **Be patient** - Reviews take time

### For PR Reviewers

1. **Be timely** - Don't delay teammates
2. **Be specific** - Point to exact lines
3. **Be constructive** - Suggest solutions
4. **Approve or request changes** - Don't just comment
5. **Praise good code** - Not just criticism!

---

## Quick Reference

**Create PR from GitHub Desktop**:
1. Push branch
2. Branch menu → Create Pull Request
3. Fill details on GitHub.com
4. Create

**Good PR Description**:
- What changed
- Why changed
- How to test

**Merge PR**:
1. Get approvals
2. Resolve conflicts
3. Click "Merge pull request"
4. Delete branch

---

## Key Takeaways

1. **PR** = Request to merge with review
2. **Created on GitHub.com** - Not in Git
3. **Enables code review** - Team collaboration
4. **Professional workflow** - Industry standard
5. **Small PRs** = Easier reviews
6. **Clear descriptions** = Help reviewers
7. **Address feedback** = Respectfully

---

## What's Next?

You know how to create Pull Requests! Now let's learn to handle merge conflicts.

👉 **Next**: `handling-conflicts.md`
