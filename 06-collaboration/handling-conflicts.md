# Handling Merge Conflicts

## When Git Needs Your Help

**Merge conflict** = Git can't automatically combine changes - you must decide what to keep.

**Don't panic!** Conflicts are normal and fixable!

---

## What is a Merge Conflict?

### The Problem

**Two people edit the same line differently**:

**Person A changes line 10**:
```css
background-color: blue;
```

**Person B changes the same line 10**:
```css
background-color: red;
```

**Git doesn't know which to keep!** ❓

**Result**: Merge conflict ⚠️

---

## When Conflicts Happen

### Common Scenarios

**1. Merging branches**:
```
Both main and feature edited same file/line
```

**2. Pulling from GitHub**:
```
You and teammate edited same line
```

**3. Merging pull request**:
```
Changes conflict with main branch
```

---

## What Conflicts Look Like

### In GitHub Desktop

**Conflicted files marked**:
```
⚠️ index.html  (1 conflict)
⚠️ style.css   (2 conflicts)
```

**Cannot complete merge** until resolved!

### In the File

**Conflict markers**:
```html
<<<<<<< HEAD (Current Change)
<h1>Welcome to My Site</h1>
=======
<h1>Welcome to Our Website</h1>
>>>>>>> feature/update-title (Incoming Change)
```

**Parts**:
- `<<<<<<< HEAD` = Your current version
- `=======` = Divider
- `>>>>>>> branch-name` = Incoming version

---

## Resolving Conflicts in GitHub Desktop

### Step-by-Step

**1. GitHub Desktop Shows Conflict**
```
⚠️ Merge has conflicts that must be resolved
```

**2. View Conflicted Files**

Listed with warning icons

**3. Open in Editor**

Click **"Open in [Editor]"**

**4. Find Conflict Markers**

Look for `<<<<<<<` in the file

**5. Decide What to Keep**

**Option A: Keep your version**
```html
<!-- Delete everything, keep yours -->
<h1>Welcome to My Site</h1>
```

**Option B: Keep their version**
```html
<!-- Delete everything, keep theirs -->
<h1>Welcome to Our Website</h1>
```

**Option C: Keep both**
```html
<!-- Combine them -->
<h1>Welcome to Our Site</h1>
```

**Option D: Write new solution**
```html
<!-- Something completely different -->
<h1>Welcome!</h1>
```

**6. Remove Conflict Markers**

Delete these lines:
```
<<<<<<< HEAD
=======
>>>>>>> branch-name
```

**7. Save the File**

**8. Mark as Resolved**

In GitHub Desktop:
- File automatically marked resolved when saved
- Or right-click → "Mark as resolved"

**9. Commit the Merge**
```
Message: "Merge feature/update-title into main"
(or custom message)
```

**10. Conflict Resolved!** ✅

---

## Detailed Example

### The Conflict

**main branch** (style.css):
```css
body {
  background-color: white;
  color: black;
}
```

**feature branch** (style.css):
```css
body {
  background-color: #f5f5f5;
  color: #333;
}
```

**After trying to merge**:
```css
body {
<<<<<<< HEAD
  background-color: white;
  color: black;
=======
  background-color: #f5f5f5;
  color: #333;
>>>>>>> feature/new-theme
}
```

### Resolution

**Decision**: Use feature version, it's better

**Edit file to**:
```css
body {
  background-color: #f5f5f5;
  color: #333;
}
```

**Save, commit, done!**

---

## Multiple Conflicts in One File

### Example

```html
<<<<<<< HEAD
<title>My Website</title>
=======
<title>Our Platform</title>
>>>>>>> feature/rebrand

... more code ...

<<<<<<< HEAD
<h1>Welcome</h1>
=======
<h1>Hello World</h1>
>>>>>>> feature/rebrand
```

**Two conflicts in same file!**

**Resolve each one**:
1. First conflict → choose solution
2. Second conflict → choose solution
3. Remove all markers
4. Save

---

## Using GitHub Desktop's Merge Tool

### Built-in Conflict Editor

**Some versions have visual conflict resolver**:

**1. Click conflicted file**

**2. Choose option**:
- Use current branch
- Use incoming branch
- Edit manually

**3. Click "Mark as resolved"**

**Easier than manual editing!**

---

## Best Practices

### 1. Prevent Conflicts

**Stay updated**:
```
Pull from main frequently
Merge main into feature branch regularly
```

**Coordinate with team**:
```
"Hey, I'm working on header.js"
"OK, I'll work on footer.js"
```

### 2. Small, Frequent Merges

**Big merges** = More conflicts
**Small merges** = Fewer conflicts

**Merge often** rather than letting branches diverge!

### 3. Communicate

**Before resolving**:
- Understand what both changes do
- Talk to the other developer if needed
- Don't just pick one randomly

### 4. Test After Resolving

**After merging**:
- Run your code
- Make sure it works
- Conflicts can break functionality!

### 5. Use Clear Commit Messages

```
✅ "Resolve merge conflict in style.css - kept new theme colors"
❌ "Fix conflict"
```

---

## Common Mistakes

### Mistake #1: Keeping Conflict Markers

**Wrong**:
```html
<<<<<<< HEAD
<h1>Welcome</h1>
=======
<h1>Hello</h1>
>>>>>>> feature
```

**Right**:
```html
<h1>Welcome</h1>
```

**Must remove `<<<<<<<`, `=======`, `>>>>>>>`!**

### Mistake #2: Deleting Too Much

**Accidentally delete** non-conflicted code around conflict

**Be careful** - only edit conflict area!

### Mistake #3: Not Testing

**After resolving**, always test:
```
Does the code run?
Does it work as expected?
No broken functionality?
```

### Mistake #4: Choosing Randomly

**Don't just pick one** without understanding

**Understand both changes**, choose wisely!

---

## Aborting a Merge

### Changed Your Mind?

**If merge has conflicts** and you don't want to deal with it:

**GitHub Desktop**:
- Look for "Abort merge" button
- Or Repository menu → Abort merge

**Result**:
- Merge cancelled
- Returns to pre-merge state
- No changes applied

**Start over** when ready!

---

## Conflict Resolution Strategies

### Strategy 1: Keep Yours

**When**:
- Your change is correct
- Incoming change is wrong or outdated
- You know your version is what's needed

### Strategy 2: Keep Theirs

**When**:
- Their change is correct
- Your change is outdated
- Their solution is better

### Strategy 3: Combine Both

**When**:
- Both changes are valuable
- Can merge ideas
- Best solution uses parts of each

### Strategy 4: New Solution

**When**:
- Both are partially wrong
- Better approach exists
- Need to rewrite section

---

## Real-World Scenario

### The Conflict

**You**: Updated homepage title to "Welcome to TechCorp"
**Teammate**: Updated same title to "TechCorp - Innovation Starts Here"

**Conflict**:
```html
<<<<<<< HEAD
<h1>Welcome to TechCorp</h1>
=======
<h1>TechCorp - Innovation Starts Here</h1>
>>>>>>> feature/marketing-copy
```

**Resolution**:
1. Talk to teammate (or check PR description)
2. Realize their version is from marketing team
3. Keep their version (official copy)
4. Resolve conflict

```html
<h1>TechCorp - Innovation Starts Here</h1>
```

**Commit and done!**

---

## Conflict in Pull Requests

### Conflicts on GitHub

**PR shows**:
```
⚠️ This branch has conflicts that must be resolved
```

**Two options**:

**Option 1: Resolve on GitHub**
- Click "Resolve conflicts" button
- Edit in web interface
- Mark as resolved
- Commit

**Option 2: Resolve Locally**
- In GitHub Desktop
- Merge main into your branch
- Resolve conflicts
- Push
- PR updates automatically

**Usually easier to resolve locally!**

---

## After Resolving

### Verify

**Checklist**:
- [ ] All conflict markers removed
- [ ] Code runs without errors
- [ ] Functionality works as expected
- [ ] Styling looks correct (if CSS conflicts)
- [ ] Tests pass (if you have tests)
- [ ] Commit made

### Push

**If resolved locally**:
```
Push to GitHub
PR automatically updates
Conflict resolved indicator appears
```

---

## Tips for Success

### 1. Don't Panic

**Conflicts are normal!**
- Part of collaboration
- Everyone encounters them
- Fixable

### 2. Take Your Time

**Don't rush**:
- Understand both changes
- Make informed decision
- Test thoroughly

### 3. Ask for Help

**If confused**:
- Ask the other developer
- Pair program resolution
- Team decision for complex conflicts

### 4. Use Tools

**Modern editors help**:
- VS Code: Built-in merge conflict resolver
- Atom: Merge conflicts package
- Sublime: Plugins available

**Visual tools** easier than manual editing!

---

## Quick Reference

**When You See a Conflict**:
1. Open file in editor
2. Find `<<<<<<<` markers
3. Decide what to keep
4. Remove markers
5. Save file
6. Commit merge

**Conflict Markers**:
```
<<<<<<< HEAD (your version)
=======
>>>>>>> branch (their version)
```

**Prevention**:
- Pull frequently
- Merge main into feature often
- Communicate with team
- Small, focused changes

---

## Key Takeaways

1. **Conflict** = Git needs your decision
2. **Common occurrence** - Don't panic!
3. **Markers show options** - Choose wisely
4. **Remove markers** - Must delete them
5. **Test after resolving** - Make sure it works
6. **Can abort merge** - If you need to
7. **Prevention is best** - Pull often!

---

## What's Next?

You can handle merge conflicts! Now let's learn about code review best practices.

👉 **Next**: `code-review.md`
