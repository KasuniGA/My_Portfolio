# Kasuni's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

Visit the live website: [https://KasuniGA.github.io/My_Portfolio/](https://KasuniGA.github.io/My_Portfolio/)

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **UI Components**: Radix UI, Framer Motion
- **Icons**: Lucide React, React Icons
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/KasuniGA/My_Portfolio.git
   cd My_Portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 🏗️ Build

To build the project for production:

```bash
npm run build:client
```

The build artifacts will be stored in the `dist/public/` directory.

## 🚀 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Steps:

1. **Create a GitHub repository** for your portfolio
2. **Push your code** to the repository
3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to the "Pages" section
   - Under "Source", select "GitHub Actions"
4. **Configure the base URL** (if needed):
   - Update the repository name in `vite.config.ts` if your repo name is different from "My_Portfolio"

### Automatic Deployment:

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:

- Build the project when you push to the main branch
- Deploy the built files to GitHub Pages
- Make your site available at `https://KasuniGA.github.io/My_Portfolio/`

## 📝 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom hooks
│   │   └── lib/           # Utility functions
│   └── public/            # Static assets
├── server/                # Backend (not deployed to GitHub Pages)
├── .github/workflows/     # GitHub Actions workflows
└── dist/                  # Build output
```

## 🎨 Features

- **Responsive Design**: Works on all devices
- **Modern UI**: Clean and professional design
- **Smooth Animations**: Framer Motion animations
- **Dark/Light Mode**: Theme switching capability
- **Contact Form**: Functional contact form
- **Portfolio Showcase**: Project gallery
- **Resume Section**: Downloadable resume
