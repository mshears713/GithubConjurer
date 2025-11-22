# Cloning Repositories

## What is Cloning?

**Cloning** = Copying a repository from GitHub to your computer.

Think of it as downloading a project along with its complete history.

---

## When to Clone

- 📥 Starting work on an existing project
- 👥 Joining a team project
- 📚 Exploring open source code
- 📖 Following along with tutorials
- 🔄 Setting up on a new computer

---

## How to Clone a Repository

### Method 1: From GitHub.com

**1. Find the Repository URL**

Go to any GitHub repository (for example: github.com/username/project-name)

**2. Get the Clone URL**

Click the green **Code** button → Copy the URL

You'll see something like:
```
https://github.com/username/project-name.git
```

**3. Clone in GitHub Desktop**

In GitHub Desktop:
- **File** menu → **Clone Repository** (or ⌘⇧O / Ctrl+Shift+O)
- Click **URL** tab
- Paste the URL
- Choose local path (where to save)
- Click **Clone**

### Method 2: Directly from GitHub Desktop

**1. Open Clone Dialog**

- **File** → **Clone Repository** (⌘⇧O / Ctrl+Shift+O)

**2. Choose from Your Repositories**

Click **GitHub.com** tab to see:
- Your repositories
- Organizations you're in
- Repositories you have access to

**3. Select and Clone**

- Click the repository you want
- Choose local path
- Click **Clone**

### Method 3: Clone from Browser

**1. On GitHub.com Repository Page**

Click green **Code** button → **Open with GitHub Desktop**

**2. Browser Prompt**

Allow browser to open GitHub Desktop

**3. Confirm Clone**

- Verify local path
- Click **Clone**

---

## Understanding Clone Settings

### Repository URL

```
https://github.com/username/repository-name.git
```

Parts:
- `username`: Repository owner
- `repository-name`: Project name
- `.git`: Git repository (automatically added)

### Local Path

Where the repository will be saved on your computer.

**Default**:
- Mac: `/Users/yourname/Documents/GitHub/`
- Windows: `C:\Users\yourname\Documents\GitHub\`

**You can change this to**:
- `~/Projects/`
- `~/Code/`
- Any folder you prefer

**The repository will be saved as**:
```
[Local Path]/[repository-name]/
```

Example:
```
/Users/mike/Documents/GitHub/awesome-project/
```

---

## Exercise: Clone This Tutorial

Let's clone the repository you're reading right now!

### Your Task

1. Open GitHub Desktop
2. **File** → **Clone Repository**
3. Click **URL** tab
4. Paste: `https://github.com/YOUR-USERNAME/desktop-tutorial.git`
   (Replace YOUR-USERNAME with your actual GitHub username)
5. Choose local path
6. Click **Clone**

### Verify Success

- ✅ Repository appears in GitHub Desktop
- ✅ Files visible in local folder
- ✅ Complete commit history available

---

## What Gets Cloned?

When you clone, you get:

### ✅ All Files
Every file in the repository (at current state)

### ✅ Complete History
Every commit ever made

### ✅ All Branches
Not just main, but all branches

### ✅ Configuration
Repository settings and Git configuration

### ❌ NOT Cloned
- GitHub Issues
- Pull Requests
- GitHub Actions workflows (files yes, runs no)
- Repository settings (like collaborators)

---

## After Cloning

### You Have a Full Copy!

Your cloned repository is complete and independent:
- Work offline
- Make commits
- Create branches
- Everything the original has

### Connection to Origin

Your clone remembers where it came from:
```
Origin: https://github.com/username/repository-name.git
```

This "origin" connection lets you:
- Pull updates
- Push your changes
- Stay in sync

---

## Cloning Public vs Private Repos

### Public Repositories

**Anyone can clone!**
- No authentication needed
- Clone freely
- Great for learning from open source

**However**:
- You can't push changes (unless you're a contributor)
- To contribute: Fork first, then clone your fork

### Private Repositories

**Only authorized users can clone**:
- Must be repository owner
- Or invited as collaborator
- Need to be signed in to GitHub Desktop

**First time cloning private repo**:
- GitHub Desktop will ask for authentication
- Sign in with GitHub account
- Access granted

---

## Cloning vs Forking

### Cloning

```
GitHub → Your Computer
```

- Copy to your local machine
- Connected to original
- For projects you have access to

### Forking

```
Their GitHub → Your GitHub → Your Computer
                 ↓
              Then Clone
```

- Copy to your GitHub account first
- Then clone to computer
- For contributing to others' projects

**When to Fork**:
- Contributing to open source
- Making your own version
- No direct write access

**When to Clone**:
- Your own repositories
- Team repositories
- You have write access

---

## Managing Cloned Repositories

### Keeping Up-to-Date

**Fetch regularly**:
- Click **Fetch origin** (or it auto-fetches)
- See if updates are available

**Pull when updates exist**:
- Click **Pull origin**
- Downloads new commits
- Updates your local files

### Your Changes

**Commit locally**:
- Make changes
- Commit them
- Still only on your computer

**Push to share**:
- Click **Push origin**
- Your commits go to GitHub
- Others can see them

---

## Common Cloning Issues

### Issue #1: "Repository not found"

**Causes**:
- Wrong URL
- Private repo you don't have access to
- Repository deleted

**Solution**:
- Verify URL is correct
- Check you're signed in
- Verify repository exists

### Issue #2: "Authentication failed"

**Causes**:
- Not signed in to GitHub Desktop
- Don't have access to private repo

**Solution**:
- Sign in: **GitHub Desktop** → **Preferences** → **Accounts**
- Ask owner for collaborator access

### Issue #3: "Destination path already exists"

**Cause**:
- Folder with same name exists

**Solution**:
- Choose different local path
- Rename existing folder
- Delete existing folder (if safe)

### Issue #4: Clone is very slow

**Causes**:
- Large repository
- Slow internet connection
- Many commits/history

**Solution**:
- Be patient
- Check internet connection
- Large repos just take time

---

## Clone from Different Sources

### Clone from GitHub.com

```
https://github.com/username/repo.git
```

### Clone from GitHub Enterprise

```
https://github.company.com/username/repo.git
```

### Clone from Other Git Hosts

GitHub Desktop also works with:
- GitLab
- Bitbucket
- Self-hosted Git servers

Just use the full URL!

---

## Best Practices

### 1. Organize Your Clones

Keep all repositories in one location:
```
Documents/
└── GitHub/
    ├── project-one/
    ├── project-two/
    └── project-three/
```

### 2. Clone Before You Need to Work

Don't clone in a rush - takes time for large repos.

### 3. Verify What You're Cloning

- Check repository owner
- Read README first
- Ensure it's legitimate (no malware)

### 4. Keep Clones Updated

Regularly fetch and pull to stay current.

### 5. Don't Edit Original Files

If learning from others' code:
- Clone it
- Explore it
- Make your own copy/fork if you want to modify

---

## Cloning Checklist

Before cloning:
- [ ] Have the repository URL
- [ ] Chosen where to save locally
- [ ] Signed in (for private repos)
- [ ] Have internet connection

After cloning:
- [ ] Verify files are present
- [ ] Check History tab for commits
- [ ] Pull any updates
- [ ] Ready to work!

---

## What's Next?

You can create new repos and clone existing ones. Let's learn about opening local repos!

👉 **Next**: `opening-repos.md`

---

## Quick Reference

**Clone from URL**:
1. File → Clone Repository (⌘⇧O / Ctrl+Shift+O)
2. URL tab
3. Paste URL
4. Choose path
5. Clone

**Clone from GitHub.com**:
1. File → Clone Repository
2. GitHub.com tab
3. Select repository
4. Clone

**From Browser**:
Code button → Open with GitHub Desktop
