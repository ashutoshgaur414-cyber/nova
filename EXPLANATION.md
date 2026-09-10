# Explanation

## Design decisions

The brief let me pick the brand, so I built out NOVA as an AI productivity
platform for teams — project planning, automation and status reporting. I
deliberately avoided the visual defaults that most AI-generated landing pages
land on (warm cream + terracotta, or near-black + neon accent, and the
uniform rounded-card-with-shadow kit). Instead:

- **Palette:** an ink navy-charcoal (`#12141C`) and a warm off-white paper
  (`#F1EFEA`) as the base, with a cobalt "signal" blue (`#3355FF`) as the one
  accent color, and a mint green (`#7CE0C6`) used sparingly for
  confirmation/positive states (checkmarks, "done" states, savings badges).
  One accent color, used consistently, reads more deliberate than several
  competing gradients.
- **Type:** Space Grotesk for display/headings paired with Inter for body
  text — two sans-serifs that are clearly distinct in character (Grotesk's
  squarer, more geometric letterforms vs. Inter's neutral workhorse feel)
  without needing a serif to create contrast.
- **Layout:** left-aligned, asymmetric grids rather than centered blocks
  everywhere (hero text is 7/12 columns next to a 5/12 "live plan" panel;
  features use a bordered grid instead of shadowed cards; stats use a
  ledger/dashboard-style row of numbers with hairline dividers, since the
  product is about data and visibility). Flat surfaces with 1px borders are
  used instead of drop shadows throughout, which fits a "productivity tool"
  feel better than the generic soft-shadow SaaS-card look.
- **Motion:** kept deliberately restrained — hover states on interactive
  elements, one orchestrated reveal (the stats count up once when scrolled
  into view), and a slow logo marquee. No fade-in-on-every-section pattern.

## Technology choices

React + Vite + Tailwind CSS, because:
- React is explicitly preferred in the brief and its component model maps
  cleanly onto 13 distinct, reusable sections.
- Vite gives a fast dev loop and a small, modern production build with no
  extra config.
- Tailwind lets me encode the design tokens (colors, fonts, radii) once in
  `tailwind.config.js` and reuse them everywhere, which keeps styling
  consistent without a separate CSS file per component.
- No UI or animation library — the interactions required (accordion,
  carousel, modal, count-up, marquee) are all small enough to write directly
  with React state, `IntersectionObserver` and CSS transitions, which keeps
  the bundle small and keeps the logic transparent (important since I need
  to be able to explain every interaction).

## Component structure

One component per landing-page section (`Navbar`, `Hero`, `TrustedBy`,
`Features`, `Product`, `HowItWorks`, `Stats`, `Solutions`, `Testimonials`,
`Pricing`, `FAQ`, `FinalCTA`, `Footer`), plus two small standalone widgets
(`BackToTop`, `DemoModal`) that don't belong to a specific section. All copy
and structured content (feature list, pricing plans, FAQ entries, testimonial
quotes, stats) lives in `src/data/content.js`, imported by the components
that render it. This keeps components focused on markup/behavior and makes
the copy editable in one place without touching JSX. Shared behavior that
multiple components need (dark mode, count-up animation, scroll-into-view
detection) is extracted into hooks (`useDarkMode`, `useCountUp`, `useInView`)
rather than duplicated.

## Challenges faced

- **Mobile menu without layout shift or scroll issues:** the hamburger menu
  is a full-height slide-in panel rather than a dropdown, with `overflow:
  hidden` applied to `<body>` while it's open, so the page underneath doesn't
  scroll behind it.
- **Accordion height animation without a fixed max-height guess:** used CSS
  Grid's `grid-template-rows: 0fr → 1fr` trick instead of `max-height`, so
  the FAQ panels animate open/closed regardless of how much text is inside
  each answer.
- **Stats only animating once, and only when visible:** used a single
  `IntersectionObserver` per stat band that disconnects after firing once,
  combined with a `requestAnimationFrame` easing loop, instead of a timer-
  based animation that could double-fire on re-renders.
- **Dark mode without a flash of the wrong theme:** the theme preference is
  read synchronously from `localStorage` (falling back to the OS preference)
  in the hook's initial state, rather than being set in a `useEffect` after
  first paint.

## How AI tools were used

I used Claude to scaffold the Vite + Tailwind project, generate the design
token plan (palette/type/layout) against the brief, write the component
code for each section, and wire up the interactive behavior. I reviewed the
generated code, adjusted class names for consistency (e.g. correcting
Tailwind font-weight utilities), verified the production build compiled
cleanly, and organized content into a single data file rather than leaving
copy scattered across components. I can walk through and modify any part of
this codebase live.

## Live-review answers (quick reference)

- **How components work:** each section is a self-contained functional
  component that imports its copy from `content.js` and renders it; stateful
  ones (`Pricing`, `Testimonials`, `FAQ`, `Navbar`, `Footer`, `DemoModal`)
  hold their own local `useState`.
- **Mobile navigation:** a `useState` boolean (`open`) toggles a `translate-
  x` class on a fixed full-height panel; body scroll is locked via a
  `useEffect` side effect while it's open.
- **FAQ accordion:** `openIndex` state in the parent tracks which single
  question is expanded; the CSS Grid row-animation trick handles the smooth
  height transition without JS measuring the DOM.
- **How data is rendered:** all content is plain JS arrays/objects in
  `src/data/content.js`, mapped over with `.map()` inside each component.
- **Why React + Vite + Tailwind:** matches the brief's preferred stack,
  fastest iteration loop, smallest reasonable bundle for the interactivity
  required.
- **Responsive design approach:** mobile-first Tailwind breakpoints (`md:`
  for ≥768px), grid layouts that collapse from multi-column to single-column,
  and a dedicated hamburger nav below the `md` breakpoint.
- **Accessibility improvements I'd make next:** add a "skip to content" link,
  audit color contrast in dark mode more formally, add `prefers-contrast`
  handling, and run an automated audit (axe/Lighthouse) to catch anything
  missed.
- **Performance optimizations I'd make next:** lazy-load below-the-fold
  sections with `React.lazy`, self-host and subset the Google Fonts, and add
  `content-visibility: auto` to offscreen sections.
- **Converting this into a production app:** move content out of a static
  JS file into a CMS or API, add real form submission endpoints (newsletter,
  demo request), add analytics and SEO metadata (Open Graph tags, sitemap),
  and set up CI to run lint/build checks before deploy.
