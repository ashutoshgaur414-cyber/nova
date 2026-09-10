# NOVA — AI Productivity Platform Landing Page

A fully responsive, modern landing page for **NOVA**, a fictional AI-powered
productivity platform ("Build Better. Work Smarter."). Built as a Front-End
Development Intern assignment.

**Live demo:** https://nova-three-jet-20.vercel.app
**Repository:** https://github.com/ashutoshgaur414-cyber/nova

## Screenshots

_Add screenshots here after running the site locally — e.g. `desktop.png`,
`mobile.png`, `dark-mode.png` — dropped into a `/screenshots` folder and
linked below:_

```
![Desktop view](./screenshots/desktop.png)
![Mobile view](./screenshots/mobile.png)
![Dark mode](./screenshots/dark-mode.png)
```

## Technologies used

- **React 19** (functional components + hooks)
- **Vite** — dev server and build tool
- **Tailwind CSS 3** — utility-first styling, with a custom design-token theme
  in `tailwind.config.js` (colors, fonts, radii)
- **Google Fonts** — Space Grotesk (display) + Inter (body)
- No component libraries, no animation libraries — motion is done with
  Tailwind transitions, CSS keyframes and the native `IntersectionObserver`
  API, kept deliberately small.

## Features implemented

**Required sections:** Navbar, Hero, Trusted By marquee, Features (6),
Product/About, How It Works, Stats, Solutions/Use Cases, Testimonials (4),
Pricing (3 plans), FAQ (6 questions), Final CTA, Footer.

**Required interactions:** responsive nav, mobile hamburger menu with a slide
panel, smooth scrolling to anchors, FAQ accordion, button hover effects, card
hover effects, working in-page navigation links.

**Bonus features implemented:**
- Dark / light mode toggle (persisted to `localStorage`, respects OS
  preference on first visit)
- Animated statistics (count up on scroll into view, via
  `IntersectionObserver`)
- Scroll-triggered reveal (used sparingly — once, for the stats band — rather
  than on every section)
- Testimonial carousel (arrows + dot navigation)
- Monthly / annual pricing toggle
- Demo request modal (focus-trapped, closes on `Esc` or backdrop click)
- Newsletter email validation with inline error/success states
- Back-to-top button

## Project structure

```
src/
  components/     One component per section (Navbar, Hero, Features, …)
  data/           content.js — all copy/content, kept out of components
  hooks/          useDarkMode, useInView, useCountUp
  index.css       Tailwind layers + base/accessibility styles
  App.jsx         Composes all sections
  main.jsx        React entry point
```

Content lives in `src/data/content.js` rather than being hardcoded inside
components, so components stay presentational and reusable, and copy can be
edited without touching JSX.

## Installation & running locally

Requires Node.js 18+.

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# Opens at http://localhost:5173

# 3. Build for production
npm run build
# Output goes to /dist

# 4. Preview the production build locally
npm run preview
```

## Deploying

**Vercel (recommended, fastest):**
```bash
npm install -g vercel
vercel
```
Or: push to GitHub, import the repo at vercel.com, it auto-detects Vite,
then Deploy. No config needed.

**Netlify:**
- Build command: `npm run build`
- Publish directory: `dist`
- Drag-and-drop the `dist` folder onto app.netlify.com, or connect the repo.

**GitHub Pages:**
```bash
npm install -D gh-pages
```
Add to `package.json`:
```json
"homepage": "https://<username>.github.io/<repo>",
"scripts": { "deploy": "vite build && gh-pages -d dist" }
```
Also set `base: '/<repo>/'` in `vite.config.js`. Then run `npm run deploy`.

## AI tools used

Built with AI assistance (Claude). AI was used to scaffold the component
structure, generate the initial Tailwind design tokens and copy, and wire up
the interactive behavior (accordion, carousel, dark mode, count-up
animation, form validation). All code was reviewed, and the design plan and
rationale are documented in `EXPLANATION.md`.
