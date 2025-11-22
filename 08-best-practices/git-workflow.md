# Git Workflows

## Professional Development Patterns

Learn the workflows used by professional development teams.

---

## GitHub Flow (Recommended for Beginners)

### Simple and Effective

**The pattern**:
```
1. main branch is always deployable
2. Create branch for each feature
3. Work and commit on branch
4. Open Pull Request
5. Review and discuss
6. Merge to main
7. Deploy from main
```

### Visual Flow

```
main:     ●──●────────●────────●
             \       /        /
feature-a:    ●──●──●        /
               \            /
feature-b:      ●──●──●──●
```

### Step by Step

**1. Start from main**:
```
Always pull latest main first
```

**2. Create feature branch**:
```
Name: feature/add-user-auth
Based on: main
```

**3. Work and commit**:
```
Make changes
Commit frequently
Push regularly (backup!)
```

**4. Open PR when ready**:
```
Description of changes
Request reviews
```

**5. Code review**:
```
Teammates review
You address feedback
Iterate until approved
```

**6. Merge to main**:
```
Click merge on PR
Delete feature branch
```

**7. Deploy**:
```
main is always deployable
Deploy from main branch
```

### When to Use

✅ Web applications
✅ Continuous deployment
✅ Small to medium teams
✅ Fast iteration

**Most common workflow!**

---

## Git Flow (Traditional)

### More Complex, More Control

**Branches**:
- `main` - Production code
- `develop` - Integration branch
- `feature/*` - New features
- `release/*` - Release preparation
- `hotfix/*` - Emergency fixes

### Visual Flow

```
main:     ●────────────●─────●
          ↓            ↑     ↑
develop:  ●──●──●──●──●──●──●
           \  \      /  /
feature-a:  ●──●────/  /
             \        /
feature-b:    ●──●──●
```

### When to Use

✅ Scheduled releases
✅ Multiple versions in production
✅ Large teams
✅ Complex products

**More overhead than GitHub Flow**

---

## Trunk-Based Development

### Extreme Simplicity

**The pattern**:
```
1. Everyone commits to main
2. Very short-lived branches (hours, not days)
3. Feature flags for incomplete features
4. Continuous integration
5. Deploy frequently
```

### Visual Flow

```
main: ●──●──●──●──●──●──●──●
         \ /   \ /   \ /
          ●     ●     ●
      (short branches)
```

### When to Use

✅ Mature teams
✅ Strong testing
✅ Feature flags
✅ Continuous deployment

**Advanced workflow**

---

## Choosing Your Workflow

### Solo Developer

**GitHub Flow** (simplified):
```
1. Create branch
2. Work and commit
3. Merge to main (no PR needed)
4. Delete branch
```

**Or even simpler**:
```
1. Work on main
2. Commit regularly
3. Push to GitHub
```

### Small Team (2-5 people)

**GitHub Flow**:
```
- Feature branches
- Pull Requests for review
- Merge to main
- Deploy from main
```

### Medium Team (5-20 people)

**GitHub Flow** or **Git Flow**:
```
- Feature branches mandatory
- PRs with required reviews
- CI/CD testing
- Protected main branch
```

### Large Organization

**Git Flow** or **Trunk-Based**:
```
- Multiple environments
- Release branches
- Hotfix procedures
- Strict processes
```

---

## Best Practices (All Workflows)

### 1. Main is Sacred

**Always deployable**:
```
✅ main always works
✅ Tested before merging
✅ Can deploy anytime
❌ Never commit broken code
```

### 2. Small, Frequent Commits

**Commit often**:
```
✅ "Add email validation"
✅ "Fix typo in header"
✅ "Update color scheme"
❌ "End of day - everything"
```

### 3. Descriptive Branch Names

**Clear purpose**:
```
✅ feature/user-authentication
✅ fix/checkout-calculation
✅ docs/api-documentation
❌ branch1
❌ test
❌ my-work
```

### 4. Pull Before Push

**Stay current**:
```
Morning routine:
1. Pull from main
2. Start working
3. Commit
4. Pull again (get updates)
5. Push
```

### 5. Review Before Merge

**Use Pull Requests**:
```
- Get feedback
- Catch bugs
- Share knowledge
- Maintain quality
```

---

## Branch Naming Conventions

### Common Patterns

**Features**:
```
feature/user-login
feature/dark-mode
feature/export-data
```

**Bug Fixes**:
```
fix/navigation-menu
fix/calculation-error
bugfix/login-timeout
```

**Hotfixes** (urgent production fixes):
```
hotfix/security-patch
hotfix/critical-bug
```

**Documentation**:
```
docs/readme-update
docs/api-documentation
```

**Refactoring**:
```
refactor/user-service
refactor/database-queries
```

**Experiments**:
```
experiment/new-architecture
test/performance-improvement
```

---

## Commit Message Conventions

### Conventional Commits

**Format**:
```
type(scope): subject

body
```

**Types**:
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Formatting
- `refactor` - Code restructuring
- `test` - Adding tests
- `chore` - Maintenance

**Examples**:
```
feat(auth): add password reset functionality
fix(cart): correct calculation rounding error
docs(readme): update installation instructions
```

**Optional**, but helps teams!

---

## Code Review Process

### Review Checklist

**Before requesting review**:
- [ ] Self-reviewed all changes
- [ ] Tests pass
- [ ] No debug code
- [ ] Clear commit messages
- [ ] PR description complete

**During review**:
- [ ] Code is correct
- [ ] Handles edge cases
- [ ] No security issues
- [ ] Readable and maintainable
- [ ] Follows team standards

### Review Turnaround

**Best practice**:
```
Request review → 24 hours → Feedback
Author updates → 24 hours → Re-review
```

**Don't let PRs languish!**

---

## Protected Branches

### Protect Main Branch

**On GitHub**:
```
Settings → Branches → Add rule

Options:
☑ Require pull request reviews
☑ Require status checks
☑ Restrict who can push
☐ Allow force pushes (NO!)
☑ Require linear history
```

**Benefits**:
- Prevents accidental pushes to main
- Enforces code review
- Maintains quality

---

## Continuous Integration

### Automated Testing

**GitHub Actions** (or similar):
```yaml
On every PR:
1. Run tests
2. Run linter
3. Check build
4. Report results
```

**Merge only if tests pass!**

### Why CI Matters

**Catches**:
- Breaking changes
- Test failures
- Style violations
- Build errors

**Before** merging to main!

---

## Release Workflow

### Regular Releases

**Process**:
```
1. Finish all features for release
2. Create release branch (if using Git Flow)
3. Test thoroughly
4. Fix critical bugs only
5. Tag version (v1.0.0)
6. Merge to main
7. Create GitHub Release
8. Deploy
9. Merge back to develop
```

### Hotfix Workflow

**Urgent production fix**:
```
1. Branch from main (production)
2. Fix bug quickly
3. Test
4. Tag as patch (v1.0.1)
5. Merge to main
6. Deploy immediately
7. Merge to develop too
```

---

## Team Communication

### Sync Regularly

**Daily**:
```
- Pull latest changes
- Push your work
- Check team's PRs
```

**Weekly**:
```
- Review workflow effectiveness
- Address pain points
- Clean up old branches
```

### Document Decisions

**In commits/PRs**:
```
WHY you made changes
Not just WHAT changed
```

**In issues**:
```
Discussion of approaches
Decisions made
Context for future
```

---

## Workflow Anti-Patterns

### ❌ Long-Lived Branches

**Problem**:
```
Branch created 2 months ago
Main has moved on
Merge conflicts everywhere
```

**Solution**: Merge frequently!

### ❌ Commit Everything at End of Day

**Problem**:
```
Commit: "End of day commit"
Files: 47 changed
Lines: +2000, -500
```

**Solution**: Commit after each logical change!

### ❌ No Code Review

**Problem**:
```
Merge to main without review
Bugs slip through
Low code quality
```

**Solution**: Always use PRs!

### ❌ Force Pushing to Shared Branches

**Problem**:
```
Rewrite shared history
Teammates lose work
Chaos ensues
```

**Solution**: Never force push to shared branches!

---

## Key Takeaways

1. **GitHub Flow** - Simple, effective for most teams
2. **Main is sacred** - Always deployable
3. **Feature branches** - One per feature
4. **Pull Requests** - For review and discussion
5. **Small commits** - Frequent and focused
6. **Pull before push** - Stay synchronized
7. **Protect main** - Use branch protection
8. **Automate testing** - CI/CD catches bugs

---

## Quick Reference

**GitHub Flow**:
1. Create branch from main
2. Work and commit
3. Open PR
4. Review
5. Merge to main
6. Delete branch

**Good Branch Names**:
- feature/description
- fix/description
- hotfix/description

**Good Commit Messages**:
- Clear and concise
- Present tense
- Descriptive

**PR Best Practices**:
- Small and focused
- Clear description
- Request reviews
- Address feedback

---

## What's Next?

Learn more best practices for repository organization and security!

👉 **Next**: `repository-organization.md`
