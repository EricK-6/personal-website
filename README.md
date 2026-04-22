# Eric Kim — Personal Website

Personal CV / portfolio website for **Dohyun (Eric) Kim**, a Computer Systems Engineering (Hons) student at the University of Auckland. Built as a single-page site for internship applications.

**Live:** _(add URL after deploy)_

---

## Stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/)
- [Tailwind CSS v3](https://tailwindcss.com/)
- Deployed to **GitHub Pages** via [`gh-pages`](https://www.npmjs.com/package/gh-pages)

## Local development

Install once:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open http://localhost:5173.

## Production build

```bash
npm run build     # outputs to dist/
npm run preview   # serves the built site locally
```

## Deploy to GitHub Pages

1. Create a new repo on GitHub (e.g. `personal-website`) under the `EricK-6` account.
2. Push this folder to the repo:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/EricK-6/personal-website.git
   git push -u origin main
   ```
3. If deploying to a repo subpath (e.g. `erick-6.github.io/personal-website/`), open `vite.config.js` and change `base: './'` to `base: '/personal-website/'`.
4. Deploy:
   ```bash
   npm run deploy
   ```
   This builds the site and pushes `dist/` to the `gh-pages` branch.
5. In GitHub repo **Settings → Pages**, set source to the `gh-pages` branch.

For a root user-page at `erick-6.github.io`, create the repo named `EricK-6.github.io` and keep `base: './'`.

## Project layout

```
Personal Website/
├── CV.pdf                  # source CV (copy kept at project root for reference)
├── public/
│   ├── CV.pdf              # served at /CV.pdf (wired to the Download CV button)
│   └── favicon.svg
├── src/
│   ├── App.jsx             # theme + layout
│   ├── main.jsx
│   ├── index.css           # Tailwind + component classes
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Projects.jsx
│       ├── Experience.jsx
│       ├── Skills.jsx
│       ├── Education.jsx
│       ├── Certifications.jsx
│       ├── Leadership.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       └── Section.jsx     # shared section wrapper
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Editing content

Each section keeps its data in a constant at the top of its component file — open the file, edit the array, save. No CMS, no DB.

- **Projects** → `src/components/Projects.jsx` (`PROJECTS` array)
- **Experience** → `src/components/Experience.jsx`
- **Skills** → `src/components/Skills.jsx`
- **Certifications** → `src/components/Certifications.jsx`
- **Leadership** → `src/components/Leadership.jsx`

To replace the project image placeholders with real screenshots, drop images into `public/` and swap the gradient placeholder `<div>` in `Projects.jsx` with `<img src="/your-image.png" …>`.

## Updating the CV

Replace `public/CV.pdf` with the latest version. The Download CV button in the hero links to `/CV.pdf`, so nothing else needs to change.

## Notes

- Dark mode follows system preference on first load and can be toggled from the navbar.
- The contact form uses `mailto:` — it opens the user's email client, no backend.
- `public/CV.pdf` is served publicly once deployed. If you'd rather not expose your phone number to scrapers, keep a redacted PDF in `public/` and the full one private.
