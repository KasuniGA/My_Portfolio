# GitHub Pages Deployment Guide

## 🚀 Step-by-Step Deployment Instructions

### 1. Prepare Your Repository

1. **Create a new repository on GitHub**:
   - Go to [GitHub](https://github.com) and sign in
   - Click the "+" icon → "New repository"
   - Name it `KasuniPortfolio` (or your preferred name)
   - Make it public (GitHub Pages requires public repos for free accounts)
   - Don't initialize with README (we already have one)

### 2. Push Your Code to GitHub

Open a terminal in your project directory and run:

```bash
# Initialize git repository (if not already done)
git init

# Add all files to git
git add .

# Commit your changes
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/KasuniPortfolio.git

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

### 3. Configure GitHub Pages

1. **Go to your repository on GitHub**
2. **Click on "Settings" tab**
3. **Scroll down to "Pages" section** (left sidebar)
4. **Under "Source"**:
   - Select "GitHub Actions" (not "Deploy from a branch")
5. **Save the settings**

### 4. Update Configuration (Important!)

Before deployment, update the base URL in your `vite.config.ts`:

```typescript
base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/',
```

Replace `YOUR_REPO_NAME` with your actual repository name.

### 5. Deploy

Once you push your code, GitHub Actions will automatically:
- Install dependencies
- Build your project
- Deploy to GitHub Pages

You can monitor the deployment progress in the "Actions" tab of your repository.

### 6. Access Your Website

After successful deployment, your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

## 🔧 Troubleshooting

### Common Issues:

1. **404 Error**: Check that your repository name in `vite.config.ts` matches exactly
2. **Build Fails**: Check the Actions tab for error details
3. **Assets Not Loading**: Verify the base URL configuration
4. **Deployment Not Triggered**: Make sure you're pushing to the `main` branch

### If the Action Fails:

1. Go to your repository's "Actions" tab
2. Click on the failed workflow
3. Check the error logs
4. Common fixes:
   - Ensure all dependencies are in `package.json`
   - Check for TypeScript errors
   - Verify file paths and imports

## 🎨 Customization Tips

### To Use a Custom Domain:

1. **Update CNAME file**: Uncomment and add your domain
2. **Configure DNS**: Point your domain to GitHub Pages
3. **Update base URL**: Change to `'/'` in `vite.config.ts`

### To Update Your Portfolio:

1. Make changes to your code
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```
3. GitHub Actions will automatically redeploy

## 📝 Notes

- **First deployment** may take 5-10 minutes
- **Subsequent deployments** are usually faster (2-5 minutes)
- **Changes may take a few minutes** to appear due to CDN caching
- **Always test locally** before pushing with `npm run dev`

## 🆘 Need Help?

If you encounter issues:
1. Check the GitHub Actions logs
2. Verify your repository settings
3. Ensure all file paths are correct
4. Make sure your repository is public (for free GitHub Pages)

Happy deploying! 🎉
