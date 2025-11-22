# Writing Good Commit Messages

## Why Commit Messages Matter

Good commit messages help you:
- 🔍 Find specific changes later
- 🤔 Remember why you made changes
- 👥 Communicate with teammates
- 📚 Understand project history
- 🐛 Track down when bugs were introduced

**Your future self will thank you!**

---

## Anatomy of a Commit Message

### Two Parts

**Summary Line** (Required):
```
Add user authentication to login page
```
- One line, ~50 characters
- Describes WHAT changed

**Description** (Optional):
```
Users can now log in with email and password.
Validates credentials against the database.
Shows error messages for invalid attempts.
```
- Multiple lines
- Explains WHY and provides context

---

## The Summary Line

### Rules for Good Summaries

**1. Start with a Verb**
```
✅ Add feature
✅ Fix bug
✅ Update documentation
✅ Remove deprecated code
```

**2. Use Present Tense**
```
✅ Add login button
❌ Added login button
❌ Adding login button
```

**3. Keep it Short**
```
✅ Fix navigation menu alignment
❌ Fix the navigation menu alignment issue that was reported last week on the about page
```

**4. Be Specific**
```
✅ Fix calculation error in shopping cart
❌ Fix bug
❌ Updates
```

**5. No Period at the End**
```
✅ Add contact form
❌ Add contact form.
```

### Good Summary Examples

✅ "Add email validation to signup form"
✅ "Fix broken image links on homepage"
✅ "Update README with installation instructions"
✅ "Remove unused CSS from header"
✅ "Refactor user authentication logic"
✅ "Improve mobile responsiveness of navbar"

### Bad Summary Examples

❌ "fixed stuff" (too vague)
❌ "Changes" (meaningless)
❌ "asdf" (nonsense)
❌ "Updates to login, nav bar, footer, styling, and database" (too long, too much)
❌ "WIP" (work in progress - don't commit yet!)

---

## Good First Words

### Common Verbs to Use

**Add** - New feature or file
```
Add dark mode toggle
Add user profile page
Add unit tests for authentication
```

**Fix** - Bug repair
```
Fix broken link in navigation
Fix calculation error in totals
Fix mobile layout overflow
```

**Update** - Modify existing feature
```
Update footer with new logo
Update color scheme to match brand
Update dependencies to latest versions
```

**Remove** - Delete code or files
```
Remove deprecated API calls
Remove unused images
Remove commented-out code
```

**Refactor** - Improve code without changing behavior
```
Refactor login validation logic
Refactor CSS to use variables
Refactor database queries for performance
```

**Improve** - Make something better
```
Improve error messages
Improve loading performance
Improve accessibility of forms
```

**Rename** - Change names
```
Rename user.js to customer.js
Rename confusing variable names
```

**Move** - Relocate files
```
Move images to assets folder
Move utility functions to helpers.js
```

---

## The Description (Optional)

### When to Add a Description

**Add description when**:
- ✅ Change needs explanation
- ✅ Provides important context
- ✅ Explains WHY, not just WHAT
- ✅ Links to issue/ticket
- ✅ Notes breaking changes

**Skip description when**:
- Summary is self-explanatory
- Change is simple and obvious
- Example: "Fix typo in README"

### Good Description Examples

**Example 1**:
```
Summary: Add rate limiting to API endpoints

Description:
Prevents abuse by limiting requests to 100 per hour
per IP address. Returns 429 status code when exceeded.
Implements middleware for easy configuration.
```

**Example 2**:
```
Summary: Fix memory leak in data processing

Description:
The previous implementation didn't properly close
database connections, causing memory to grow over time.
Now connections are closed in a finally block.
```

**Example 3**:
```
Summary: Rename UserProfile component to UserCard

Description:
The old name was confusing because it didn't show
the full profile, just summary info. UserCard
better reflects its purpose.
```

---

## Commit Message Templates

### Feature Addition

```
Summary: Add [feature name]

Description:
[Explain what the feature does]
[Why it was needed]
[Any special considerations]
```

### Bug Fix

```
Summary: Fix [specific bug]

Description:
[What was broken]
[What caused it]
[How you fixed it]
```

### Code Improvement

```
Summary: Refactor [component/function name]

Description:
[Why refactoring was needed]
[What approach you took]
[Any performance/readability improvements]
```

### Documentation

```
Summary: Update [documentation type]

Description:
[What was added/changed]
[Why it was needed]
```

---

## Real-World Examples

### Excellent Commit Messages

**Example 1**:
```
Add password strength indicator

Users now see a visual indicator when creating passwords.
Helps them create secure passwords that meet requirements.
Indicator shows weak/medium/strong based on length and
character variety.
```

**Example 2**:
```
Fix checkout button disabled state

Button was incorrectly disabled when cart had items.
Issue was caused by wrong comparison operator (=== vs ==).
Now works correctly and users can complete purchases.
```

**Example 3**:
```
Improve mobile menu animation

Previous animation was choppy on lower-end devices.
Switched from height animation to transform for better
performance. Uses hardware acceleration.
```

**Example 4**:
```
Update Node.js to version 18 LTS

Version 14 reached end-of-life. Upgrading ensures
security patches and access to new features.
Tested all functionality - no breaking changes found.
```

---

## Commit Message Anti-Patterns

### What to Avoid

❌ **Vague messages**:
```
"changes"
"updates"
"misc"
"stuff"
```

❌ **Jokey messages**:
```
"YOLO"
"Please work this time"
"I hate computers"
```
(Fine for personal projects, but keep it professional!)

❌ **Defensive messages**:
```
"I think this fixes it maybe"
"Not sure if this works but committing anyway"
```

❌ **Blaming others**:
```
"Fix John's broken code"
"Correct previous developer's mistakes"
```

❌ **Too much detail in summary**:
```
"Add email validation to signup form and also update the color of the button and fix the alignment and add a loading spinner"
```

❌ **Commit message as task list**:
```
"TODO: test this, review security, ask team"
```

---

## Style Guidelines

### Capitalization

**Start with capital letter**:
```
✅ Add contact form
❌ add contact form
```

### Punctuation

**No period at end of summary**:
```
✅ Fix navigation bug
❌ Fix navigation bug.
```

**But use periods in description**:
```
Description:
This fixes the navigation bug reported by users.
The issue was caused by incorrect CSS selectors.
```

### Length

**Summary**: 50 characters max (aim for this)
```
✅ Add user authentication (26 chars)
⚠️  Add comprehensive user authentication with OAuth support (56 chars - too long)
```

**Description**: 72 characters per line (wrap text)

---

## Commit Message Conventions

### Conventional Commits (Popular Standard)

Some teams use a format like:
```
type(scope): subject

body
```

**Example**:
```
feat(auth): add password reset functionality

Users can now request a password reset via email.
Sends a time-limited token to verify identity.
```

**Types**:
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Formatting (no code change)
- `refactor` - Code restructuring
- `test` - Adding tests
- `chore` - Maintenance tasks

**You don't need to use this format** (GitHub Desktop doesn't require it), but it's good to know!

---

## Tips for Consistency

### 1. Use a Mental Template

Before committing, ask:
- What did I change?
- Why did I change it?

Answer those, and you have your message!

### 2. Review the Diff First

Look at what changed, then describe it:
```
Changed: index.html, style.css
Message: "Update homepage layout and styling"
```

### 3. Imagine Future You

In 6 months, what will help you find this change?
```
✅ "Fix calculation rounding in invoice totals"
❌ "Math fix"
```

### 4. Read Other Projects

Look at commit history of popular open source projects on GitHub to see good examples!

---

## Editing Commit Messages

### Before Committing

Just edit the text in GitHub Desktop!

### After Committing (Last Commit Only)

**Amend the last commit**:
1. Make sure the commit hasn't been pushed yet
2. We'll learn this in `07-advanced-features/amending-commits.md`

### After Pushing

**Can't easily change** - the message is permanent!
(Technically possible but complicated and not recommended)

**Lesson**: Take your time writing messages!

---

## Exercise: Practice Good Messages

### Task

Make commits with these scenarios:

**1. Add a new file**:
```
Create: projects.html
Message: "Add projects portfolio page"
```

**2. Fix something**:
```
Edit: index.html (fix a typo)
Message: "Fix typo in welcome message"
```

**3. Update styling**:
```
Edit: style.css (change colors)
Message: "Update color scheme for better contrast"
```

**4. Remove old code**:
```
Delete: old-file.js
Message: "Remove deprecated utility functions"
```

---

## Checklist: Good Commit Message

Before you commit, verify:
- [ ] Starts with a verb (Add, Fix, Update, etc.)
- [ ] Uses present tense
- [ ] Is specific (not vague)
- [ ] Is short (~50 characters)
- [ ] Has capital first letter
- [ ] No period at the end of summary
- [ ] Description added if needed (optional)
- [ ] Describes WHAT and optionally WHY

---

## Key Takeaways

1. **Summary** = Required, ~50 chars, WHAT changed
2. **Description** = Optional, explains WHY
3. **Start with verb** = Add, Fix, Update, Remove
4. **Present tense** = "Add feature" not "Added feature"
5. **Be specific** = Help your future self
6. **Professional** = Treat it like work documentation
7. **Commit messages matter** = They create your project's story

---

## What's Next?

You can write great commit messages! Now let's learn to view and explore your commit history.

👉 **Next**: `viewing-history.md`

---

## Quick Reference

**Good Formula**:
```
[Verb] + [What you changed] + [Where]

Examples:
Add user authentication to login page
Fix calculation error in shopping cart
Update README with setup instructions
Remove unused images from assets folder
```

**Remember**: Future you is reading this!
