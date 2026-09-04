# AIsy website

Landing page for AIsy, Gidon Peeper's AI engineering and consulting practice.
Live at **https://aisy-consulting.github.io**.

## Stack

- Next.js 14 (App Router), static export
- Tailwind CSS 3
- Google Fonts via `next/font` (Fraunces, DM Sans), self-hosted at build time
- Open Graph image generated at build in `app/opengraph-image.js` (fetches Fraunces once, falls back to the default font offline)
- Contact form posts to Formspree (`components/Contact.js`)
- No other runtime dependencies

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes
`./out` to GitHub Pages. Repo Settings → Pages → Source must be set to **GitHub Actions**.

## Structure

```
app/
  layout.js            # fonts, metadata, Open Graph
  page.js              # assembles the sections
  globals.css          # Tailwind layers + shared component classes (.btn-primary, .field, ...)
  icon.svg             # favicon
  opengraph-image.js   # social preview image, generated at build
  sitemap.js
  not-found.js         # styled 404 (GitHub Pages serves out/404.html)
components/
  Nav.js               # fixed nav with mobile menu
  Hero.js              # headline, portrait, three promises, facts strip
  Services.js          # four plain-language starting points
  Selfcheck.js         # interactive two-minute check; pre-fills the contact form's dropdown
  Process.js           # four-step engagement process
  Principles.js        # "four things you can hold me to"
  Work.js              # selected work, each with a "for your technical team" note
  About.js             # bio, credentials, publications
  Faq.js               # questions people ask + plain-words glossary (native <details>, no JS)
  Contact.js           # Formspree form + contact links
  Footer.js
  SectionHeading.js
  Icon.js              # small inline stroke icons
public/
  profile.jpg
  robots.txt
```

## Editing content

All copy lives in the component files as plain data arrays or JSX. To change a starting point, edit
the `services` array in `components/Services.js`; for work entries, `projects` in
`components/Work.js`; for credentials and publications, the arrays at the top of
`components/About.js`; for questions and answers, `faqs` and `glossary` in `components/Faq.js`; for the self-check, the `questions` and `outcomes` objects in `components/Selfcheck.js`.

The copy is written for readers who are not familiar with AI. Lead with the outcome in plain
language and keep technical terms inside the "For your technical team" notes.

## Custom domain (optional)

1. In repo Settings → Pages → Custom domain, enter the domain.
2. Add a `public/CNAME` file containing just the domain name.
3. Update `metadataBase` in `app/layout.js` and the URLs in `app/sitemap.js` and `public/robots.txt`.
