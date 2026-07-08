# CMS Setup for Vercel Deployment

## Quick Start

Your Decap CMS is now configured for Vercel with GitHub OAuth authentication. Follow these steps to activate it:

### Step 1: Create GitHub OAuth App

1. Go to **https://github.com/settings/developers**
2. Click **New OAuth App**
3. Fill in the form:
   - **Application name:** `KIO CMS`
   - **Homepage URL:** `https://kio.ke`
   - **Authorization callback URL:** `https://kio.ke/admin/`
4. Click **Register application**
5. Copy the **Client ID** and click **Generate a new client secret**
6. Copy the **Client Secret** (you'll only see it once)

### Step 2: Add Environment Variables to Vercel

1. Go to your **Vercel project settings** → **Environment Variables**
2. Add two new variables:
   - **VITE_GITHUB_CLIENT_ID** = (paste your Client ID)
   - **GITHUB_CLIENT_SECRET** = (paste your Client Secret)
3. Make sure both are set for **Production**, **Preview**, and **Development**
4. Redeploy your project (or push a new commit)

### Step 3: Update config.yml

The config has been updated, but you need to **replace the repo placeholder**:

Open `/public/admin/config.yml` and find this line:
```yaml
repo: [your-github-org/your-repo]  # Update this
```

Replace `[your-github-org/your-repo]` with your actual GitHub repo name, e.g.:
```yaml
repo: myorg/kio
```

### Step 4: Test

1. Deploy to Vercel (push a commit or use `vercel deploy`)
2. Visit **https://kio.ke/admin/**
3. You'll be redirected to log in with GitHub
4. Grant access to your repository
5. You should now see the CMS dashboard with all content collections

## How It Works

- **GitHub Authentication:** Users log in with their GitHub account (must have access to your repo)
- **OAuth Flow:** The `/api/auth/callback.ts` serverless function handles the secure token exchange
- **Content Storage:** All changes are committed directly to your Git repository
- **Auto-Deploy:** When you publish changes in the CMS, a new commit is pushed → Vercel auto-rebuilds

## Troubleshooting

### "Failed to authenticate"
- Check that `VITE_GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` are set in Vercel
- Verify the callback URL matches exactly in your GitHub OAuth app settings
- Try clearing browser cache and re-authenticating

### "Cannot find collection"
- Make sure JSON files exist in `src/content/` folder
- Check file names match exactly in `config.yml`

### Changes not deploying
- Make sure the GitHub user has push access to the repository
- Check Vercel deployments dashboard for build errors

## File Structure

```
project/
├── public/admin/
│   ├── config.yml          ← CMS configuration
│   └── index.html          ← CMS interface (do not edit)
├── api/auth/
│   └── callback.ts         ← GitHub OAuth handler
└── src/content/
    ├── site.json
    ├── team.json
    ├── news.json
    ├── events.json
    ├── support.json
    └── resources.json
```

## Need Help?

- [Decap CMS Docs](https://decapcms.org/docs/)
- [GitHub OAuth Setup](https://docs.github.com/en/developers/apps/building-oauth-apps)
- Vercel Dashboard → Logs for deployment errors
