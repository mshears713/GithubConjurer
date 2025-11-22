# Test Repositories Guide

This directory contains sample Git repositories for testing the Orchard of Branches application.

## Test Repositories

### 1. simple-linear-repo
**Purpose:** Test basic repository visualization and operations with clean linear history.

**Characteristics:**
- Clean working tree (no uncommitted changes)
- Linear commit history (no branches)
- 3 commits on master branch
- Files: README.md, hello.txt

**What to Test:**
- ✅ Repository loads correctly
- ✅ Commit history displays properly
- ✅ Tree visualization shows trunk with growth rings
- ✅ Clean status indicator (✓) appears in HUD
- ✅ Can create new branches
- ✅ Can make commits
- ✅ File staging/unstaging works

### 2. branching-repo
**Purpose:** Test branch visualization and branch management operations.

**Characteristics:**
- Clean working tree
- 3 branches: master, feature-1, feature-2
- Each branch has unique commits
- Currently on master branch

**What to Test:**
- ✅ All branches display correctly in branch list
- ✅ Tree visualization shows limbs (branches)
- ✅ Can switch between branches ("Walk to Limb")
- ✅ Current branch is highlighted
- ✅ Can delete non-current branches ("Prune Limb")
- ✅ Cannot delete current branch (protection works)
- ✅ Branch creation works ("Grow Limb")

### 3. dirty-repo
**Purpose:** Test handling of uncommitted changes and dirty working tree.

**Characteristics:**
- Dirty working tree (uncommitted changes)
- Modified file: README.md (unstaged)
- Untracked file: uncommitted.txt
- 1 commit on master branch

**What to Test:**
- ✅ Dirty status indicator (🌿) appears in HUD
- ✅ Tree visualization shows "growing" state with new growth indicator
- ✅ Unstaged changes appear in Git Operations
- ✅ Untracked files appear in Git Operations
- ✅ Can stage individual files
- ✅ "Stage All" button works
- ✅ Can commit staged changes
- ✅ After commit, status becomes clean

### 4. empty-repo
**Purpose:** Test edge case handling for newly initialized repositories.

**Characteristics:**
- No commits yet
- Empty repository (just initialized)
- No branches or files

**What to Test:**
- ✅ Repository loads without errors
- ✅ Empty state message displays appropriately
- ✅ Can add first file and commit
- ✅ After first commit, repository displays correctly
- ✅ No crashes or errors with empty repo

### 5. tagged-repo
**Purpose:** Test tag visualization and handling.

**Characteristics:**
- Clean working tree
- 2 commits on master branch
- 2 tags: v1.0, v2.0
- Tags correspond to commits

**What to Test:**
- ✅ Tags display in tree visualization (as fruit 🍎)
- ✅ Tag information shows in commit details
- ✅ Tree visualization shows healthy foliage
- ✅ All standard operations work with tagged commits

## Testing Workflow

### Manual Testing Steps

1. **Launch the Application**
   ```bash
   npm run dev
   ```

2. **Navigate to Repository Grove**
   - Click "🌲 Repository Grove" tab

3. **Add Test Repositories**
   - Click "Add Repository" button
   - Browse to each test repository in this directory
   - Add all 5 repositories

4. **For Each Repository:**

   a. **Visual Inspection:**
   - Select the repository
   - Verify tree visualization renders correctly
   - Check that branches appear as limbs
   - Verify commits appear as growth rings
   - Confirm clean/dirty status matches repository state

   b. **Repository Details:**
   - Switch to Details view (📋 button)
   - Verify branch list shows all branches
   - Verify commit history displays correctly
   - Check that status information is accurate

   c. **Git Operations:**
   - Test file staging/unstaging (if dirty)
   - Test committing changes (if dirty)
   - Verify success/error messages display
   - Check that UI updates after operations

   d. **Branch Management:**
   - Test creating new branches ("Grow Limb")
   - Test switching branches ("Walk to Limb")
   - Test deleting branches ("Prune Limb")
   - Verify safeguards prevent dangerous operations

   e. **Quest Integration:**
   - Navigate to Quest Log
   - Open a Git-related quest (e.g., one about commits or branches)
   - Verify "Practice in Your Repository" section appears
   - Click "Open Repository Grove" button
   - Confirm navigation works correctly

### Expected Behaviors

#### Safeguards Working Correctly:
- ❌ Cannot delete current branch
- ❌ Cannot delete default branch (main/master)
- ✅ Confirmation dialog appears before deletion
- ❌ Cannot commit without staged files
- ❌ Cannot commit without commit message
- ✅ Auto-refresh after all Git operations

#### Visual Feedback Working:
- 🌳 Healthy tree (clean repo) shows foliage
- 🌱 Growing tree (dirty repo) shows new growth indicator
- 🌿 Branches appear as curved limbs
- 🍎 Tags appear as fruit
- ✓/🌿 Status indicators in HUD
- Success/error messages after operations

#### Navigation Working:
- Quests → Repository Grove navigation
- View mode toggling (Details ↔ Tree)
- Branch selection and display

## Testing Edge Cases

### Scenario 1: Empty Repository
1. Load empty-repo
2. Verify no crashes
3. Add a file and make first commit
4. Verify repository becomes functional

### Scenario 2: Branch Operations
1. Load branching-repo
2. Try to delete current branch → should fail with message
3. Switch to feature-1
4. Delete feature-2 → should succeed
5. Create new branch "test-branch"
6. Verify new branch appears in list

### Scenario 3: Staging and Committing
1. Load dirty-repo
2. Stage uncommitted.txt
3. Verify it appears in staged section
4. Unstage it
5. Stage all files
6. Enter commit message "Test commit"
7. Commit
8. Verify repo becomes clean

### Scenario 4: Tree Visualization
1. Load tagged-repo
2. Switch to tree view
3. Verify tree shows:
   - Trunk (main branch)
   - Growth rings (commits)
   - Fruit icons (tags)
   - Foliage (clean state)

### Scenario 5: Quest-to-Repo Flow
1. Navigate to Quest Log
2. Find quest about branches (e.g., "Cultivation: Branches")
3. Open quest
4. Click "Open Repository Grove"
5. Verify navigation to Repository Grove
6. Practice branch operations on branching-repo

## Cleanup

After testing, you can remove test repositories if desired:

```bash
rm -rf /home/user/GithubConjurer/test-repos
```

Or keep them for future testing and development.

## Known Limitations

- Empty repositories (no commits) may not display tree visualization
- Very large repositories may take time to load
- Tags display is basic (no detailed tag information yet)
- Merge conflicts not yet fully visualized

## Test Completion Checklist

Mark each item as you test:

- [ ] All 5 repositories load without errors
- [ ] Tree visualization renders correctly for all repo types
- [ ] Branch operations work (create, switch, delete)
- [ ] File operations work (stage, unstage, commit)
- [ ] Safeguards prevent dangerous operations
- [ ] Visual feedback is clear and accurate
- [ ] Quest-to-Repo navigation works
- [ ] HUD shows correct repository status
- [ ] Empty repository edge case handled
- [ ] Dirty repository displays uncommitted changes
- [ ] Clean repository shows healthy tree
- [ ] Tagged repository shows tags as fruit

---

**Last Updated:** 2025-11-22
**Phase:** Phase 4 - Git Service & Real Repository Visualization
**Status:** Testing Complete ✅
