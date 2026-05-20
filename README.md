# AIsy — Website

Landing page for AIsy AI integration consulting.

## Stack
- Next.js 14 (App Router)
- Static export (GitHub Pages compatible)
- Tailwind CSS
- No external UI libraries

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to GitHub Pages

### First-time setup
1. Create a GitHub Organisation called `aisy-ai` (free at github.com/organizations/new)
2. Create a new repo inside that org named `aisy-ai.github.io`
3. Push this folder to the `main` branch of that repo

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/aisy-ai/aisy-ai.github.io.git
git push -u origin main
```

4. In the repo Settings → Pages → Source: select **GitHub Actions**
5. The workflow in `.github/workflows/deploy.yml` handles everything automatically

### After that
Every push to `main` triggers a new deploy. Your site is live at:
**https://aisy-ai.github.io**

## Custom domain (optional)
1. Buy a domain (e.g. `aisy.ai` or `getaisy.com`)
2. In `next.config.js`, you can remove the `basePath` entirely
3. In repo Settings → Pages → Custom domain, enter your domain
4. Add a `CNAME` file to `/public/` containing just your domain name

## Project structure

```
aisy/
├── app/
│   ├── layout.js       # Root layout + metadata
│   ├── page.js         # Home page (assembles sections)
│   └── globals.css     # Base styles + fonts
├── components/
│   ├── Nav.js          # Sticky nav
│   ├── Hero.js         # Hero section
│   ├── Services.js     # Three products
│   ├── About.js        # Bio + credentials
│   ├── Process.js      # 4-step process
│   └── Contact.js      # Contact form + links
├── .github/workflows/
│   └── deploy.yml      # Auto-deploy to GitHub Pages
├── next.config.js      # Static export config
├── tailwind.config.js
└── package.json
```
