# 🚨 Repository Name Change - Update Guide

## Your Situation

You've already deployed your portfolio with a previous repository name, but now you want to use the repository name `My_Portfolio` with the URL `https://KasuniGA.github.io/My_Portfolio/`.

## 🔧 Quick Fix Options

### Option 1: Update Your Existing Repository (Recommended)

If you want to keep your existing repository but change the name:

1. **Rename your existing repository**:

   - Go to your repository on GitHub
   - Click "Settings"
   - Scroll down to "Repository name"
   - Change it to `My_Portfolio`
   - Click "Rename"

2. **Update your local repository**:

   ```bash
   cd "e:\KasuniPortfolio\KasuniPortfolio"
   git remote set-url origin https://github.com/KasuniGA/My_Portfolio.git
   ```

3. **Push the updated configuration**:
   ```bash
   git add .
   git commit -m "Update repository name to My_Portfolio"
   git push
   ```

### Option 2: Create a New Repository

If you want to start fresh:

1. **Create a new repository** named `My_Portfolio`
2. **Push your code** to the new repository:
   ```bash
   cd "e:\KasuniPortfolio\KasuniPortfolio"
   git remote remove origin
   git remote add origin https://github.com/KasuniGA/My_Portfolio.git
   git push -u origin main
   ```

### Option 3: Keep Current Repository Name

If you want to keep your current repository name, you need to:

1. **Update `vite.config.ts`** to match your current repository name:

   ```typescript
   base: process.env.NODE_ENV === 'production' ? '/YOUR_CURRENT_REPO_NAME/' : '/',
   ```

2. **Update all documentation** to reflect the correct URL

## ✅ After Making Changes

Regardless of which option you choose:

1. **Wait for GitHub Actions to complete** (check the "Actions" tab)
2. **GitHub Pages will automatically update** with the new configuration
3. **Your site will be available** at the correct URL within 5-10 minutes

## 🔍 How to Check Current Status

1. Go to your repository on GitHub
2. Click on "Settings" → "Pages"
3. You'll see your current GitHub Pages URL
4. Check the "Actions" tab to see if any workflows are running

## 🚀 What Happens Next

- If you renamed the repository, your old URL will automatically redirect to the new one
- GitHub Actions will rebuild and redeploy your site
- The new URL will be active within a few minutes

## 💡 Pro Tip

I recommend **Option 1** (renaming your existing repository) because:

- It's the simplest solution
- Preserves your commit history
- GitHub automatically handles URL redirects
- No need to reconfigure GitHub Pages settings

Let me know which option you choose, and I can help you with the specific steps!
