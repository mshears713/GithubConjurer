# Fetching Changes

## Staying in Sync with Your Team

When working with others, you need to regularly fetch their updates from GitHub.

---

## Fetch vs Pull (Quick Reminder)

### Fetch
**Check** for updates without applying them
```
GitHub Desktop: "Hey, there are 3 new commits!"
Your files: (unchanged)
```

### Pull
**Download and apply** updates
```
GitHub Desktop: "Downloading 3 commits..."
Your files: (updated with changes)
```

---

## How Auto-Fetch Works

### GitHub Desktop Fetches Automatically!

**Every few minutes**, GitHub Desktop:
1. Connects to GitHub
2. Checks for new commits
3. Downloads commit information
4. Tells you if updates exist

**Look at bottom**: "Last fetched: 2 minutes ago"

**You rarely need to manually fetch!**

---

## Manual Fetch

### When to Fetch Manually

**Before starting work**:
- Make sure you have latest info

**Before creating pull request**:
- Check if main was updated

**When collaborating actively**:
- Check frequently for teammate updates

### How to Fetch

**Click "Fetch origin"** button (top right)

Or: **Repository menu** → **Fetch**

**Result**: Checks GitHub, updates branch information

---

## What Fetch Downloads

### Metadata Only

Fetch downloads:
✅ Commit information (who, what, when)
✅ Branch updates (new branches, deleted branches)
✅ References (what's where)

Fetch does NOT download:
❌ Actual file contents (yet)
❌ Changes to your working directory

**Think of it as**: Reading headlines without reading articles

---

## Understanding Fetch Results

### "No new commits"

```
┌──────────────┐
│ Fetch origin │  (No indicator)
└──────────────┘
```

**You're up to date!** ✅

### "Pull 3 commits"

```
┌──────────────┐
│ Pull origin  │
│      ↓ 3     │  ← 3 commits available
└──────────────┘
```

**Updates available!** Click to pull.

### "Push 2 commits"

```
┌──────────────┐
│ Push origin  │
│      ↑ 2     │  ← You have 2 to push
└──────────────┘
```

**You have local commits** to share.

### Both!

```
┌──────────────┐
│ Pull origin  │
│    ↑2 ↓ 3    │  ← Push 2, Pull 3
└──────────────┘
```

**Both directions have changes!**

---

## Team Collaboration Workflow

### Morning Routine

**1. Open GitHub Desktop**
- Auto-fetch runs
- Checks for overnight changes

**2. Look at top button**
- "Pull origin ↓X"? → Pull first!
- "Fetch origin"? → You're current

**3. Pull if needed**
- Get teammate's work
- Start with latest code

**4. Create your branch**
- Work on your feature

**5. Throughout the day**
- Auto-fetch keeps you informed
- Pull periodically to stay current

---

## Fetching New Branches

### Teammate Created Branch

**They push**: `feature/new-dashboard`

**After fetch**:
```
┌─────────────────────────┐
│ Remote Branches:        │
│ ○ origin/feature/new-   │
│   dashboard             │ ← New!
└─────────────────────────┘
```

**Click it**:
- Creates local copy
- Switches to it
- You can review their work!

---

## Checking What Changed

### After Fetch, Before Pull

**Want to see what's new?**

**1. Go to History tab**

**2. Look for commits marked with cloud icon** (or remote indicator)

**3. Click commits to see**:
- What files changed
- Who made the changes
- Commit messages

**4. Decide**: Pull now or later?

---

## Fetch Frequency

### How Often?

**Auto-fetch**: Every 5-10 minutes (automatic)

**Manual fetch**:
- ✅ Before starting work
- ✅ Before creating PR
- ✅ When actively collaborating
- ❌ Don't spam it constantly

**Auto-fetch is usually enough!**

---

## Multiple Branches

### Fetch Updates All Branches

```
After fetch:
main: ↓2 (2 new commits)
feature-a: ↓1 (1 new commit)
feature-b: (no changes)
```

**Fetch checks ALL branches** on GitHub!

**Switch to any branch** → See its status

---

## Best Practices

### 1. Trust Auto-Fetch

**It's working in the background!**
- No need to constantly click Fetch
- Status bar shows last fetch time

### 2. Pull Before You Start

**Morning workflow**:
```
1. Open project
2. Check for updates (auto-fetch did this)
3. Pull if needed
4. Start work
```

### 3. Fetch Before Push

**Before sharing work**:
```
1. Fetch (or wait for auto-fetch)
2. Pull if needed
3. Then push your commits
```

**Prevents conflicts!**

### 4. Watch the Indicators

**Learn to read**:
- ↓ = Pull needed
- ↑ = Push needed
- ↑↓ = Both needed

---

## Troubleshooting

### "Fetch failed"

**Causes**:
- No internet connection
- GitHub is down (rare)
- Repository deleted

**Solution**:
- Check internet
- Try again in a moment
- Verify repo exists on GitHub

### "Authentication required"

**Cause**: Not signed in or credentials expired

**Solution**:
1. Preferences → Accounts
2. Sign out and sign back in
3. Try fetch again

### Fetch seems stuck

**Solution**:
- Wait a moment
- Large repositories take time
- Check internet speed

---

## Fetch in Different Scenarios

### Solo Project

**Fetch still useful**:
- Working from multiple computers
- Edited file on GitHub.com
- Collaborator made change

**Less critical** than team projects

### Team Project

**Fetch is essential**:
- Multiple people pushing
- Need to stay current
- Avoid conflicts
- See team's progress

**Check frequently!**

---

## What Happens Behind the Scenes

### The Fetch Process

```
1. GitHub Desktop → GitHub.com
   "Any new commits?"

2. GitHub.com → GitHub Desktop
   "Yes! Here's the info..."

3. GitHub Desktop
   Updates local Git database
   Shows you indicators
   Your files unchanged (yet)
```

**Fast and lightweight!**

---

## Fetch vs Clone

### Clone (One Time)

**Copy entire repository**:
```
GitHub → Your Computer
(Complete download)
```

**Do this once** when starting

### Fetch (Ongoing)

**Check for updates**:
```
GitHub → Your Computer
(Just new information)
```

**Do this regularly** while working

---

## Key Takeaways

1. **Auto-fetch runs automatically** - Every few minutes
2. **Fetch = Check for updates** - Doesn't change files
3. **Pull = Apply updates** - Changes your files
4. **Watch the indicators** - ↑↓ tell you what's needed
5. **Fetch before starting work** - Know what's new
6. **Trust the automation** - Don't over-fetch
7. **Last fetched time** - Shown in status bar

---

## Quick Reference

**Manual Fetch**:
Click "Fetch origin" button

**Check Last Fetch**:
Look at bottom status bar

**After Fetch**:
- No indicator = Up to date
- ↓X = Pull X commits
- ↑X = Push X commits
- ↑X↓Y = Both directions

**Best Practice**:
Let auto-fetch work, pull before starting work

---

## What's Next?

You understand fetching! Now let's learn about Pull Requests - the professional way to merge code.

👉 **Next**: `pull-requests.md`
