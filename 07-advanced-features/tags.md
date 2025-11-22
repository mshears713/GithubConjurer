# Tags

## Marking Important Points in History

**Tags** = Bookmarks for specific commits (usually releases)

---

## What Are Tags?

### Permanent Labels

**Tag** = Name given to a specific commit

```
main: ●──●──●──●──●
          ↑       ↑
        v1.0    v2.0
```

**Like bookmarks** in your project history

### Why Use Tags?

**Mark releases**:
```
v1.0.0 - First stable release
v1.1.0 - Added new features
v2.0.0 - Major update
```

**Reference specific versions**:
```
"Bug exists in v1.2.0 but fixed in v1.2.1"
"Install v1.5.0 for stability"
```

**Create downloadable releases** on GitHub

---

## Tags in GitHub Desktop

**Limited support** in GitHub Desktop

**You can**:
- View tags
- Checkout tags (read-only)

**You cannot** (need terminal):
- Create tags
- Delete tags
- Push tags

**For full tag features**: Use terminal

---

## Creating Tags (Terminal)

### Lightweight Tag

**Simple label**:
```bash
git tag v1.0.0
```

**Just a name** pointing to current commit

### Annotated Tag (Recommended)

**With message and metadata**:
```bash
git tag -a v1.0.0 -m "First stable release"
```

**Includes**:
- Tag name
- Message
- Your name
- Date
- Signed (optional)

**Better for releases!**

### Tag Specific Commit

**Not current commit**:
```bash
git tag -a v1.0.0 abc1234 -m "Release 1.0.0"
```

---

## Viewing Tags

### List All Tags

**Terminal**:
```bash
git tag
```

Output:
```
v1.0.0
v1.1.0
v2.0.0
```

**With messages**:
```bash
git tag -n
```

### On GitHub

**Repository page** → **Releases** or **Tags**

See all tags and associated releases

---

## Pushing Tags

### Tags Are Local by Default

**After creating tag**:
```
Your Computer:     GitHub:
v1.0.0            (no tag yet)
```

### Push Single Tag

```bash
git push origin v1.0.0
```

### Push All Tags

```bash
git push --tags
```

**Now on GitHub!**

---

## Semantic Versioning

### Common Tagging Convention

**Format**: `vMAJOR.MINOR.PATCH`

**Examples**:
```
v1.0.0 - Major.Minor.Patch
v1.2.3
v2.0.0
```

### Version Number Meanings

**MAJOR** (1.x.x):
```
Incompatible changes
Breaking changes
```

**MINOR** (x.1.x):
```
New features
Backwards compatible
```

**PATCH** (x.x.1):
```
Bug fixes
Backwards compatible
```

### Examples

```
v1.0.0 → First release
v1.0.1 → Bug fix
v1.1.0 → New feature added
v2.0.0 → Breaking changes, major update
```

---

## GitHub Releases

### Tags + Release Notes

**On GitHub**:
1. Go to repository → Releases
2. Click "Draft a new release"
3. Choose tag (or create new)
4. Add release title
5. Write release notes
6. Upload binaries (optional)
7. Publish release

**Creates downloadable package!**

---

## Checking Out Tags

### View Code at Tag

**Terminal**:
```bash
git checkout v1.0.0
```

**⚠️ Detached HEAD state** - read-only mode

**To make changes**:
```bash
git checkout -b hotfix-v1.0.0 v1.0.0
```

Creates branch from tag

---

## Deleting Tags

### Local Delete

```bash
git tag -d v1.0.0
```

### Remote Delete

```bash
git push origin :refs/tags/v1.0.0
```

Or:
```bash
git push origin --delete v1.0.0
```

---

## Tag Best Practices

### 1. Tag Releases Only

**Tag stable versions**:
```
✅ v1.0.0 - Production release
❌ "work in progress"
❌ "testing tag"
```

### 2. Use Semantic Versioning

**Consistent naming**:
```
v1.0.0, v1.1.0, v2.0.0
```

**Not**:
```
release1, final, v1, version-2
```

### 3. Annotated Tags

**For releases**:
```bash
git tag -a v1.0.0 -m "Release message"
```

**More information** than lightweight tags

### 4. Write Release Notes

**On GitHub releases**:
```markdown
## What's New
- Feature A
- Feature B

## Bug Fixes
- Fixed issue #123
- Fixed crash on startup

## Breaking Changes
- API endpoint changed
```

---

## Tags vs Branches

### Tags

**Fixed point**:
- Points to specific commit
- Never moves
- Read-only reference
- For releases

### Branches

**Moving pointer**:
- Moves with new commits
- Active development
- Can modify
- For ongoing work

---

## Common Workflow

### Release Process

**1. Finish features**
```
All features merged to main
Testing complete
Ready for release
```

**2. Create tag**
```bash
git tag -a v1.0.0 -m "Release 1.0.0"
```

**3. Push tag**
```bash
git push --tags
```

**4. Create GitHub Release**
```
Go to GitHub → Releases
Create release from tag
Add release notes
Publish
```

**5. Users can download**
```
Specific version available
Code snapshot preserved
```

---

## Finding Tags

### List Tags Matching Pattern

```bash
git tag -l "v1.*"
```

Output:
```
v1.0.0
v1.1.0
v1.2.0
```

### Show Tag Details

```bash
git show v1.0.0
```

Shows:
- Tag message
- Commit details
- Changes in that commit

---

## Key Takeaways

1. **Tags** = Bookmarks for commits
2. **Used for** = Releases and versions
3. **Semantic versioning** = vMAJOR.MINOR.PATCH
4. **Annotated tags** = Include message and metadata
5. **Push separately** = `git push --tags`
6. **GitHub Releases** = Tags + release notes
7. **Limited in GitHub Desktop** = Use terminal

---

## Quick Reference

**Create Tag** (terminal):
```bash
git tag -a v1.0.0 -m "Release message"
```

**Push Tags**:
```bash
git push --tags
```

**List Tags**:
```bash
git tag
```

**Delete Tag**:
```bash
git tag -d v1.0.0
git push origin --delete v1.0.0
```

**Semantic Versioning**:
- vMAJOR.MINOR.PATCH
- v1.0.0, v1.1.0, v2.0.0

---

## What's Next?

Advanced features complete! Let's learn best practices for professional workflows.

👉 **Next**: `../08-best-practices/git-workflow.md`
