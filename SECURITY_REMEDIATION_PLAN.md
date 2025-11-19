# Security Remediation Plan - aloha-massage-spa

## **CRITICAL SECURITY BREACH - IMMEDIATE ACTION REQUIRED**

**Date**: November 18, 2025
**Repository**: sonyho2715/aloha-massage-spa
**Affected Commit**: e39e35ce94a96c70101da60f50e48d476a47d41a

---

## What Happened

The `.claude/` directory (including `.claude/file-history/` session logs) was committed to GitHub. These logs contained captured API keys and credentials from previous Claude Code sessions.

### Exposed Secrets

1. **OpenAI API Key**: `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`
2. **Google Cloud Service Account** (pacific-pulse-growth-lab)
   - Private key ID: `40aa72152d250ec3d8a9880810bc4f7f81926bc4`
   - Full private key and credentials exposed
3. **PostgreSQL DATABASE_URL** (Railway connection string)
4. **Anthropic API Keys** (multiple references)
5. **Google OAuth Client ID**
6. **Multiple Google API Keys**

### Provider Actions Taken

- ✅ OpenAI: Keys automatically disabled
- ✅ Anthropic: Keys automatically disabled
- ✅ GitHub: Secret scanning alerts sent
- ✅ GitGuardian: Alerts sent

---

## Immediate Actions Completed ✓

1. ✅ Removed `.claude/file-history/` and `.claude/debug/` from all 10 projects locally
2. ✅ Updated `.gitignore` in all 10 projects to exclude:
   - `.claude/file-history/`
   - `.claude/debug/`
   - `.claude/history.jsonl`
   - `.claude/session-env/`
   - `.claude/shell-snapshots/`
   - `.claude/settings.local.json`
   - Other sensitive Claude Code directories

---

## Step 1: Remove Secrets from Git History

You need to **completely remove** the exposed secrets from the git history of `aloha-massage-spa`.

### Option A: Using BFG Repo-Cleaner (Recommended)

```bash
# Install BFG
brew install bfg

# Clone a fresh copy
cd ~/Active_Projects
git clone --mirror https://github.com/sonyho2715/aloha-massage-spa.git

# Remove the .claude directory from history
bfg --delete-folders .claude aloha-massage-spa.git

# Clean up the repo
cd aloha-massage-spa.git
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# Force push to GitHub
git push --force

# Delete the mirror and go back to your working copy
cd ~/Active_Projects
rm -rf aloha-massage-spa.git
cd aloha-massage-spa
git pull --force
```

### Option B: Using git filter-branch

```bash
cd ~/Active_Projects/aloha-massage-spa

# Remove .claude directory from all commits
git filter-branch --force --index-filter \
  'git rm -rf --cached --ignore-unmatch .claude' \
  --prune-empty --tag-name-filter cat -- --all

# Force garbage collection
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# Force push
git push --force --all
git push --force --tags
```

---

## Step 2: Rotate ALL Exposed Credentials

You MUST rotate all exposed credentials immediately:

### 2.1 PostgreSQL (Railway)

```bash
# Login to Railway
railway login

# Link to project (if not already linked)
cd ~/Active_Projects/aloha-massage-spa
railway link

# Get the project details
railway status

# Option A: Regenerate database credentials through Railway dashboard
open https://railway.app/dashboard

# Navigate to your project > PostgreSQL > Settings > Reset Database Password

# Option B: Create new database
# In Railway dashboard: Add New > Database > PostgreSQL
# Then migrate data and delete old database

# Get new DATABASE_URL
railway variables

# Update .env.local with new DATABASE_URL
# DATABASE_URL="postgresql://new_credentials_here"
```

### 2.2 OpenAI API Key

```bash
# Open OpenAI dashboard
open https://platform.openai.com/api-keys

# 1. Revoke the exposed key (if not already auto-revoked)
# 2. Create new API key
# 3. Update .env.local
# OPENAI_API_KEY="sk-new-key-here"
```

### 2.3 Anthropic API Key

```bash
# Open Anthropic dashboard
open https://console.anthropic.com/settings/keys

# 1. Revoke the exposed key (if not already auto-revoked)
# 2. Create new API key
# 3. Update .env.local
# ANTHROPIC_API_KEY="sk-ant-new-key-here"
```

### 2.4 Google Cloud Service Account

```bash
# Open Google Cloud Console
open https://console.cloud.google.com

# Navigate to: IAM & Admin > Service Accounts > pacific-pulse-growth-lab

# 1. Delete the exposed service account:
#    - pacific-pulse-sheets@pacific-pulse-growth-lab.iam.gserviceaccount.com

# 2. Create NEW service account:
#    - Name: pacific-pulse-sheets-v2
#    - Grant: Editor role (or specific Sheets API role)

# 3. Create new key:
#    - Actions > Manage Keys > Add Key > Create New Key > JSON
#    - Download the new key file

# 4. Move to secure location (NOT in git):
cd ~/Active_Projects/pacific-pulse-growth-lab
mkdir -p .secrets
mv ~/Downloads/pacific-pulse-growth-lab-NEW-KEY.json .secrets/

# 5. Update .env.local:
# GOOGLE_SERVICE_ACCOUNT_KEY_PATH=".secrets/pacific-pulse-growth-lab-NEW-KEY.json"

# 6. Ensure .secrets/ is in .gitignore
echo ".secrets/" >> .gitignore
```

### 2.5 Google OAuth Client ID

```bash
# Open Google Cloud Console
open https://console.cloud.google.com/apis/credentials

# 1. Delete the exposed OAuth 2.0 Client ID
# 2. Create new OAuth 2.0 Client ID
# 3. Update .env.local with new credentials
```

### 2.6 Google API Keys

```bash
# Open Google Cloud Console
open https://console.cloud.google.com/apis/credentials

# 1. Delete ALL exposed API keys
# 2. Create new API keys with restrictions:
#    - HTTP referrers (websites) restriction
#    - API restrictions (only allow specific APIs)

# 3. Update .env.local
# GOOGLE_API_KEY="new-api-key-here"
```

---

## Step 3: Update Vercel Environment Variables

After rotating all credentials, update them in Vercel:

```bash
# Open Vercel dashboard
open https://vercel.com/sony-hos-projects/aloha-massage-spa/settings/environment-variables

# Update ALL the following:
# - DATABASE_URL
# - OPENAI_API_KEY
# - ANTHROPIC_API_KEY
# - GOOGLE_SERVICE_ACCOUNT_KEY (paste JSON content or use file upload)
# - GOOGLE_OAUTH_CLIENT_ID
# - GOOGLE_OAUTH_CLIENT_SECRET
# - GOOGLE_API_KEY

# Then redeploy
vercel --prod
```

---

## Step 4: Commit the Protection Changes

```bash
cd ~/Active_Projects/aloha-massage-spa

# Stage the .gitignore update (sensitive files already removed)
git add .gitignore

# Commit
git commit -m "Security: Add .claude exclusions to prevent secret leaks

- Exclude .claude/file-history/ (session logs)
- Exclude .claude/debug/ (debug logs)
- Exclude other sensitive Claude Code directories
- Prevent future accidental secret commits"

# Push
git push
```

---

## Step 5: Install GitGuardian CLI (ggshield)

Prevent future leaks with local scanning:

```bash
# Install ggshield
brew install gitguardian/tap/ggshield

# Setup (requires GitGuardian account - free for open source)
ggshield auth login

# Scan current repo
cd ~/Active_Projects/aloha-massage-spa
ggshield secret scan repo .

# Install pre-commit hook (auto-scan before commits)
ggshield install -m local
```

---

## Step 6: Verify Security

### 6.1 Check Git History is Clean

```bash
cd ~/Active_Projects/aloha-massage-spa

# Verify .claude directory is gone from history
git log --all --source --full-history -- .claude/ | head -20

# Should show no results or only the deletion commit

# Scan for any remaining secrets
ggshield secret scan repo .
```

### 6.2 Verify All Secrets Rotated

- [ ] Railway PostgreSQL: New DATABASE_URL in `.env.local`
- [ ] OpenAI: New API key in `.env.local`
- [ ] Anthropic: New API key in `.env.local`
- [ ] Google Service Account: New JSON file in `.secrets/`
- [ ] Google OAuth: New credentials in `.env.local`
- [ ] Google API Keys: New keys in `.env.local`
- [ ] All Vercel environment variables updated
- [ ] Production deployment successful with new credentials

### 6.3 Test Application

```bash
# Test locally
cd ~/Active_Projects/aloha-massage-spa
npm run dev

# Verify all integrations work:
# - Database connections
# - OpenAI API calls
# - Anthropic API calls
# - Google Sheets integration
# - OAuth flows

# Test production
open https://aloha-massage-spa.vercel.app
```

---

## Step 7: Check Other Projects

Verify the other 9 projects haven't been committed with `.claude/` sensitive data:

```bash
# Check each project
for project in ~/pacific-pulse-growth-lab ~/lee-meadows-saas ~/viethawaii ~/drsilke-autopost ~/ai-prompts-marketplace ~/Active_Projects/bos-auto-detail-frontend ~/Active_Projects/bg-walter-peters ~/Active_Projects/kangen-autopost ~/Active_Projects/BGWealth; do
  echo "=== Checking $project ==="
  cd "$project"
  git log --oneline --all -- .claude/file-history/ .claude/debug/ | head -5
  if [ $? -eq 0 ]; then
    echo "⚠ FOUND - This project may have committed sensitive data!"
  else
    echo "✓ Clean"
  fi
  echo ""
done
```

If any project shows commits with `.claude/file-history/` or `.claude/debug/`, repeat Steps 1-2 for those projects.

---

## Prevention Checklist

- [x] Removed `.claude/file-history/` and `.claude/debug/` from all projects
- [x] Updated `.gitignore` in all 10 projects
- [ ] Removed secrets from git history (aloha-massage-spa)
- [ ] Rotated Railway PostgreSQL credentials
- [ ] Rotated OpenAI API key
- [ ] Rotated Anthropic API key
- [ ] Rotated Google Cloud Service Account
- [ ] Rotated Google OAuth credentials
- [ ] Rotated Google API keys
- [ ] Updated all Vercel environment variables
- [ ] Force pushed cleaned history to GitHub
- [ ] Installed ggshield for local protection
- [ ] Verified all projects are clean
- [ ] Tested application with new credentials
- [ ] AI chat re-enabled

---

## Future Prevention

1. **Never commit `.env*` files** (already in .gitignore)
2. **Never commit `.claude/` sensitive directories** (now in .gitignore)
3. **Use ggshield pre-commit hooks** to scan before commits
4. **Store secrets in**:
   - `.env.local` (gitignored)
   - `.secrets/` directory (gitignored)
   - Vercel environment variables (for production)
5. **Regularly audit** git history for accidental commits

---

## Support Resources

- **Railway Support**: https://railway.app/help
- **OpenAI Support**: https://help.openai.com
- **Anthropic Support**: https://support.anthropic.com
- **Google Cloud Support**: https://cloud.google.com/support
- **GitGuardian Docs**: https://docs.gitguardian.com/

---

## Status: IN PROGRESS

**Completed**:
- ✅ Assessment
- ✅ Local cleanup
- ✅ .gitignore updates

**Next Steps**:
1. ⏳ Remove secrets from git history
2. ⏳ Rotate all credentials
3. ⏳ Verify security
