# GitHub Actions Setup for Prerendering and Deployment

## Overview
The GitHub Action workflow automatically prerenders your website for SEO and deploys it to Vercel whenever you push to the `main` or `jonasbranch` branches.

## Required GitHub Secrets

To enable automatic Vercel deployment, you need to set up the following secrets in your GitHub repository:

### 1. VERCEL_TOKEN
1. Go to https://vercel.com/account/tokens
2. Click "Create Token"
3. Give it a descriptive name (e.g., "GitHub Actions Deploy")
4. Copy the token
5. Add it to GitHub Secrets (see instructions below)

### 2. VERCEL_ORG_ID
1. Go to https://vercel.com/account
2. Your Org ID is shown in the URL or settings
3. Copy this ID

### 3. VERCEL_PROJECT_ID
1. Go to your project in Vercel
2. Click on "Settings" tab
3. Find "Project ID" in the General section
4. Copy this ID

## Adding Secrets to GitHub

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. In the left sidebar, click "Secrets and variables" → "Actions"
4. Click "New repository secret"
5. Add each secret:
   - Name: `VERCEL_TOKEN`, Value: [your token]
   - Name: `VERCEL_ORG_ID`, Value: [your org id]
   - Name: `VERCEL_PROJECT_ID`, Value: [your project id]

## Workflow Behavior

### With Vercel Secrets Configured
1. Builds the project
2. Prerenders all SEO pages
3. Commits prerendered files to the repository
4. Deploys to Vercel production

### Without Vercel Secrets
1. Builds the project
2. Prerenders all SEO pages
3. Commits prerendered files to the repository
4. Skips Vercel deployment (no error)

## Testing the Workflow

After setting up the secrets, push a commit to trigger the workflow:

```bash
git add .
git commit -m "Test GitHub Actions deployment"
git push
```

Then check the Actions tab in your GitHub repository to monitor the progress.

## Troubleshooting

### Permission Denied Errors
The workflow has `contents: write` permission to push prerendered files. If you see permission errors, ensure your branch protection rules allow GitHub Actions to push.

### Vercel Deployment Fails
- Verify all three Vercel secrets are set correctly
- Check that your Vercel project is properly linked
- Ensure your `vercel.json` configuration is correct

### Prerendering Takes Too Long
The workflow has a 45-minute timeout. If prerendering takes longer:
1. Reduce the number of routes being prerendered
2. Increase parallelization in `scripts/prerender-config.js`
3. Consider prerendering only critical pages