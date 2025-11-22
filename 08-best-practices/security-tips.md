# Security Best Practices

## Keeping Your Code Safe

Essential security practices for Git and GitHub.

---

## Never Commit Secrets

### What Are Secrets?

**Sensitive information** that should NEVER be in Git:

❌ API keys
❌ Passwords
❌ Private keys
❌ OAuth tokens
❌ Database credentials
❌ AWS/Cloud credentials
❌ SSH keys
❌ Encryption keys

### Why This Matters

**If committed**:
- Visible to everyone (if public repo)
- Forever in Git history
- Can be scraped by bots
- Account compromise
- Financial loss

**Public repos are scanned** by bots looking for secrets!

---

## Use .gitignore

### Essential Files to Ignore

**Environment files**:
```
.env
.env.local
.env.production
config.local.js
secrets.json
```

**Example .gitignore**:
```
# Secrets
.env
.env.*
config-local.js
*-secrets.json

# Dependencies
node_modules/
vendor/

# IDE files
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db

# Build outputs
dist/
build/
*.log
```

---

## Environment Variables

### The Right Way

**Create .env file** (gitignored):
```
API_KEY=your_secret_key_here
DATABASE_URL=postgresql://...
AWS_SECRET=...
```

**Use in code**:
```javascript
const apiKey = process.env.API_KEY;
```

**Create .env.example** (safe to commit):
```
API_KEY=your_api_key_here
DATABASE_URL=your_database_url
AWS_SECRET=your_aws_secret
```

**Team members**:
```
1. Copy .env.example to .env
2. Fill in their own values
3. Never commit .env
```

---

## If You Accidentally Commit a Secret

### Immediate Steps

**⚠️ DON'T just delete and recommit!**

Secret is still in Git history!

**DO THIS**:

**1. Revoke the secret immediately**:
```
- Regenerate API key
- Change password
- Rotate credentials
- Disable token
```

**2. Remove from history** (complex!):
```bash
# Use BFG Repo-Cleaner or git filter-branch
# ASK FOR HELP - easy to mess up!
```

**3. Force push** (only if team agrees):
```bash
git push --force
```

**4. Tell teammates**:
```
"History was rewritten, please re-clone"
```

**Prevention is easier than cure!**

---

## GitHub Security Features

### Enable Two-Factor Authentication (2FA)

**Essential for account security!**

**GitHub Settings**:
```
Settings → Password and authentication
→ Enable two-factor authentication
```

**Use**:
- Authenticator app (Google Authenticator, Authy)
- SMS (less secure)
- Security keys (most secure)

### Personal Access Tokens

**Instead of passwords** for command line:

**Create token**:
```
GitHub → Settings → Developer settings
→ Personal access tokens → Generate new token
```

**Use for**:
- HTTPS Git operations
- API access
- Safer than password

**Treat like a password**:
- Don't commit it
- Regenerate if exposed

---

## Repository Visibility

### Choose Wisely

**Public repositories**:
```
✅ Open source projects
✅ Portfolio pieces
✅ Learning projects
✅ Documentation

❌ Client work
❌ Proprietary code
❌ Personal projects with secrets
❌ Work-in-progress with issues
```

**Private repositories**:
```
✅ Client projects
✅ Company code
✅ Personal experiments
✅ Anything sensitive
```

**Can change later**:
```
Settings → Danger Zone → Change visibility
```

---

## .gitignore Templates

### Common Patterns

**Node.js**:
```
node_modules/
.env
.env.local
npm-debug.log
.DS_Store
```

**Python**:
```
__pycache__/
*.pyc
venv/
.env
*.log
```

**General**:
```
# Secrets
*.pem
*.key
.env*
*-secrets.json

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp

# Logs
*.log
logs/
```

**GitHub provides templates**:
When creating repo, select .gitignore template!

---

## Code Security

### Watch for Vulnerabilities

**GitHub Dependabot**:
```
Automatically detects vulnerable dependencies
Creates PRs to update them
Enable in repository settings
```

**npm/pip/etc security**:
```bash
npm audit
npm audit fix
```

**Review dependencies**:
```
Don't install unknown packages
Check package popularity/maintenance
Review what packages do
```

---

## Branch Protection

### Protect Important Branches

**Settings → Branches → Add rule**:

**Recommended protections**:
```
☑ Require pull request reviews
☑ Require status checks to pass
☑ Require linear history
☐ Allow force pushes (NO!)
☑ Require signed commits (advanced)
```

**Prevents**:
- Accidental force pushes
- Unreviewed code in main
- Breaking changes

---

## SSH vs HTTPS

### Two Ways to Connect

**HTTPS**:
```
https://github.com/user/repo.git
```
- Use personal access token
- Easier setup
- Works everywhere

**SSH**:
```
git@github.com:user/repo.git
```
- More secure
- No password needed (after setup)
- Requires SSH key

**Both are secure** - choose based on preference

---

## Signed Commits

### Verify Commit Authenticity

**GPG signing** proves:
```
"This commit really came from me"
```

**Setup**:
```
1. Generate GPG key
2. Add to GitHub
3. Configure Git to sign
4. Commits show "Verified" badge
```

**Advanced topic** - not required for beginners

---

## What NOT to Commit

### Checklist

Before committing, check for:

**❌ Credentials**:
- Passwords
- API keys
- Tokens
- Private keys

**❌ Personal info**:
- Email addresses (except Git config)
- Phone numbers
- Addresses

**❌ Large files**:
- Videos
- Large datasets
- Binary files
- Use Git LFS if needed

**❌ Temporary files**:
- Cache
- Logs
- Build outputs
- Dependencies

**❌ IDE files** (usually):
- .vscode/
- .idea/
- Unless team uses same IDE

---

## Security Checklist

### Before First Commit

- [ ] Created .gitignore
- [ ] Listed all secret files
- [ ] Using .env for secrets
- [ ] .env is in .gitignore
- [ ] No API keys in code

### Regular Checks

- [ ] Review .gitignore regularly
- [ ] Audit dependencies
- [ ] Update vulnerable packages
- [ ] Check for exposed secrets
- [ ] Review collaborator access

### When Going Public

- [ ] Double-check no secrets
- [ ] Review all files
- [ ] Check Git history
- [ ] Remove sensitive comments
- [ ] Add security documentation

---

## Secret Scanning

### GitHub's Built-in Protection

**GitHub scans** for:
- AWS keys
- Azure tokens
- Google Cloud keys
- Slack tokens
- Many other services

**If found**:
```
⚠️ Secret detected!
Email notification
Provider may be notified
```

**Not foolproof** - still use .gitignore!

---

## Common Mistakes

### Mistake #1: Committing .env

**Problem**:
```
.env file with all secrets committed
```

**Prevention**:
```
Add .env to .gitignore FIRST
```

### Mistake #2: Commented-Out Secrets

**Problem**:
```javascript
// Old API key: sk_live_abc123...
const apiKey = process.env.API_KEY;
```

**Solution**:
```
Don't even comment secrets
Delete them completely
```

### Mistake #3: Hardcoded Credentials

**Problem**:
```javascript
const password = "myPassword123";
```

**Solution**:
```javascript
const password = process.env.DB_PASSWORD;
```

---

## Resources

### Checking for Exposed Secrets

**Tools**:
- `git-secrets` - Prevents committing secrets
- `truffleHog` - Finds secrets in history
- GitHub secret scanning

### If Compromised

**Actions**:
1. Revoke credentials immediately
2. Change all passwords
3. Enable 2FA if not already
4. Review account activity
5. Contact support if needed

---

## Key Takeaways

1. **Never commit secrets** - Use .env and .gitignore
2. **Enable 2FA** - Essential account security
3. **Use .gitignore** - Prevent accidental commits
4. **Public repos** - Assume everyone can see
5. **Review before committing** - Check for secrets
6. **If exposed** - Revoke immediately
7. **Branch protection** - Protect main branch
8. **Keep dependencies updated** - Security patches

---

## Quick Reference

**Essential .gitignore**:
```
.env
.env.*
*.pem
*.key
node_modules/
.DS_Store
```

**If secret exposed**:
1. Revoke/regenerate immediately
2. Remove from Git history (get help!)
3. Force push (if necessary)
4. Notify team

**Enable 2FA**:
Settings → Password and authentication → Enable 2FA

---

## What's Next?

Learn to troubleshoot common Git/GitHub Desktop issues!

👉 **Next**: `common-issues.md`
