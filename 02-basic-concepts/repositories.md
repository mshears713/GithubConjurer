# Understanding Repositories

## What is a Repository?

A **repository** (or "repo" for short) is a folder that Git tracks.

**Think of it as**:
- A project folder with superpowers
- A time-machine enabled directory
- A trackable container for your files

## What's Inside a Repository?

### Your Project Files
- Source code
- Images
- Documents
- Any files related to your project

### Hidden Git Data (.git folder)
- Complete history of changes
- All previous versions
- Branch information
- Configuration

**Important**: Never delete the `.git` folder - it contains all your history!

---

## Types of Repositories

### Local Repository

A repository on **your computer**.

```
Your Computer
┌─────────────────────┐
│  my-project/        │
│  ├── .git/          │ ← Git tracking data
│  ├── index.html     │
│  ├── style.css      │
│  └── script.js      │
└─────────────────────┘
```

**Characteristics**:
- ✅ Works offline
- ✅ Fast operations
- ✅ Private by default
- ❌ No backup if computer fails
- ❌ Can't collaborate easily

### Remote Repository

A repository on **GitHub** (the cloud).

```
GitHub.com (Internet)
┌─────────────────────┐
│  username/my-project│
│  ├── index.html     │
│  ├── style.css      │
│  └── script.js      │
└─────────────────────┘
```

**Characteristics**:
- ✅ Cloud backup
- ✅ Access from anywhere
- ✅ Share with others
- ✅ Collaboration tools
- ❌ Requires internet

### Local + Remote (Best of Both!)

Most projects use **both**:

```
Your Computer              GitHub.com
┌─────────────┐           ┌─────────────┐
│ my-project  │◄─────────►│ my-project  │
│ (local)     │   sync    │ (remote)    │
└─────────────┘           └─────────────┘
```

**Workflow**:
1. Work on local repository (fast, offline)
2. Push changes to remote (backup, share)
3. Pull updates from remote (get teammate's work)

---

## Repository Scenarios

### Scenario 1: You Start a New Project

**You create a local repository**:
1. Create new project folder
2. Initialize Git tracking
3. Start working

**Later, you push to GitHub**:
1. Create remote repository on GitHub
2. Connect local to remote
3. Push your work

### Scenario 2: You Join an Existing Project

**You clone a remote repository**:
1. Copy the remote repo to your computer
2. Start working on your local copy
3. Push changes back to remote

### Scenario 3: Solo Project

**Just you, working alone**:
- Local repo for development
- Remote repo for backup
- Push whenever you want a backup

### Scenario 4: Team Project

**Multiple people**:
- Everyone has a local copy
- One shared remote repository
- Everyone pushes/pulls to stay in sync

---

## Repository Structure

### Typical Repository Contents

```
my-website/
├── .git/                    ← Git's tracking data (hidden)
├── .gitignore              ← Files to ignore
├── README.md               ← Project description
├── index.html              ← Your project files
├── css/
│   └── style.css
├── js/
│   └── app.js
└── images/
    └── logo.png
```

### Special Files

**README.md**:
- Describes your project
- Markdown formatted
- First thing people see on GitHub

**.gitignore**:
- Lists files Git should ignore
- Examples: temporary files, passwords, large files
- Keeps repository clean

**LICENSE**:
- How others can use your code
- Common: MIT, GPL, Apache
- Important for open source

---

## Public vs Private Repositories

### Public Repositories

**Anyone can see them**:
- ✅ Great for open source
- ✅ Portfolio pieces
- ✅ Learning projects
- ✅ Community contributions
- ❌ Visible to everyone (no secrets!)

**Examples**:
- Your portfolio website
- Open source tools
- Learning projects
- Public libraries

### Private Repositories

**Only you (and invited people) can see**:
- ✅ Personal projects
- ✅ Client work
- ✅ Proprietary code
- ✅ Work-in-progress
- ✅ Contains sensitive data

**Examples**:
- Client projects
- Company code
- Personal experiments
- Projects with API keys

**Good News**: GitHub offers unlimited private repos for free!

---

## Repository Names

### Good Repository Names

✅ `my-portfolio`
✅ `todo-app`
✅ `weather-widget`
✅ `javascript-exercises`

**Characteristics**:
- Lowercase
- Descriptive
- Hyphen-separated
- Clear purpose

### Bad Repository Names

❌ `MyProject`
❌ `asdf`
❌ `New Folder`
❌ `test123`

**Why bad?**:
- Unclear purpose
- Hard to find later
- Unprofessional
- Spaces cause problems

---

## Repository Size Considerations

### Keep Repositories Focused

**Good**:
- One repository per project
- Related files together
- Clear scope

**Not Ideal**:
- All your projects in one repo
- Unrelated files mixed together
- Kitchen sink approach

### Size Limits

**GitHub has limits**:
- Repository size: 100GB soft limit
- Single file: 100MB max (50MB warning)
- Push size: 2GB max

**Tips**:
- Don't commit large binaries
- Use .gitignore for generated files
- Keep repos focused and lean

---

## Repository Permissions

### Who Can Do What?

**Owner** (you):
- Read, write, delete
- Change settings
- Add collaborators

**Collaborators**:
- Read and write
- Push changes
- Create branches

**Public viewers** (public repos only):
- Read and clone
- Fork (make their own copy)
- Submit suggestions

---

## Forking vs Cloning

### Cloning

**Copying a repository to your computer**:
```
GitHub → Your Computer
```

**Use when**:
- You have permission to contribute
- Your own project
- Team project

### Forking

**Copying someone's repository to your GitHub account**:
```
Their GitHub → Your GitHub → Your Computer
```

**Use when**:
- Contributing to open source
- No direct write access
- Want your own version

---

## Repository Best Practices

### 1. Always Include a README

Tell people:
- What the project does
- How to install/use it
- How to contribute

### 2. Use .gitignore

Ignore:
- `node_modules/` - Dependencies
- `.env` - Environment variables
- `.DS_Store` - Mac system files
- Build artifacts

### 3. Choose Public/Private Wisely

**Public**: Open source, portfolios, learning
**Private**: Work projects, sensitive data

### 4. Descriptive Names

Future you will thank you!
`recipe-app` beats `project4`

### 5. Keep It Organized

Group related files in folders:
```
src/
docs/
tests/
```

---

## Common Repository Patterns

### Personal Website
```
my-website/
├── index.html
├── about.html
├── css/
├── js/
└── images/
```

### JavaScript App
```
todo-app/
├── src/
├── public/
├── tests/
├── package.json
└── README.md
```

### Learning Repository
```
javascript-practice/
├── week1/
├── week2/
├── projects/
└── notes.md
```

---

## Repository Lifecycle

### 1. Creation
- Start new or clone existing
- Set up initial files
- First commit

### 2. Active Development
- Regular commits
- Create branches for features
- Push to remote

### 3. Collaboration
- Others contribute
- Pull requests reviewed
- Code merged

### 4. Maintenance
- Bug fixes
- Updates
- Documentation

### 5. Archive (Optional)
- Project complete
- No longer maintained
- Marked as archived on GitHub

---

## Key Takeaways

1. **Repository** = Git-tracked project folder
2. **Local** = On your computer (fast, offline)
3. **Remote** = On GitHub (backup, collaboration)
4. **Best practice** = Use both local and remote
5. **Public** = Open source, portfolios
6. **Private** = Personal, sensitive projects
7. **One project** = One repository

---

## Quick Reference

| Term | Meaning |
|------|---------|
| **Repo** | Short for repository |
| **Local** | On your computer |
| **Remote** | On GitHub (cloud) |
| **Clone** | Copy remote to local |
| **Fork** | Copy someone's repo to your GitHub |
| **Public** | Anyone can see |
| **Private** | Only you (+ invited) can see |

---

## What's Next?

Now that you understand repositories, let's learn about commits!

👉 **Next**: `commits.md`
