# TASKS.md — Implementation Task Tracker

> Living document. Update status as work progresses.  
> Legend: `[ ]` Todo · `[~]` In Progress · `[x]` Done · `[!]` Blocked

---

## Phase 0 — Project Setup

- [x] `npm create vite@latest portfolio -- --template react-ts`
- [x] Install TailwindCSS v3 + postcss + autoprefixer
- [x] Install Framer Motion
- [x] Install Lucide React (icons)
- [x] Install `@fontsource/inter` + `@fontsource/jetbrains-mono`
- [x] Install `react-intersection-observer`
- [x] Configure `tailwind.config.ts` with custom tokens (colors, fonts, spacing)
- [x] Setup `globals.css` with CSS custom properties (dark/light vars)
- [x] Configure `vite.config.ts` (base path for GitHub Pages: `/portfolio/`)
- [x] Add `gh-pages` package + `npm run deploy` script in `package.json`
- [x] Create folder structure: `components/`, `data/`, `hooks/`, `styles/`, `locales/`
- [x] Add `.gitignore`, connect to GitHub repo
- [x] Verify dev server runs: `npm run dev` → localhost

---

## Phase 1 — Design Tokens & Base

- [x] Define all CSS variables in `globals.css` (dark mode + light mode)
- [x] Map tokens to Tailwind: extend colors in `tailwind.config.ts`
- [x] Create `ThemeProvider` context (dark/light toggle state)
- [x] Create `useTheme` hook
- [x] Implement theme persistence via `localStorage`
- [x] Apply `dark` class to `<html>` on load (no flash)
- [x] Create `SectionLabel` component (index + label + rule)
- [x] Create `Tag` component (outlined pill)
- [x] Create `Button` component (outlined + ghost variants)

---

## Phase 2 — Navbar

- [x] Sticky top navbar, full width
- [x] Left: `DS` logotype (initials, bold mono)
- [x] Center: nav links — About · Experience · Projects · Skills · Education · Contact
- [x] Right: `[PT | EN]` lang toggle + theme toggle (sun/moon)
- [x] Mobile: hamburger → slide-down full-screen nav overlay
- [x] Active link detection via scroll intersection
- [x] Nav link hover: underline slides from left (`scaleX`)
- [x] Navbar background: `blur(16px)` + semi-transparent bg on scroll

---

## Phase 3 — Hero Section

- [x] Full viewport height (`100svh`)
- [x] Vertical centering (flex column center)
- [x] Tiny pre-title mono label: `DANIEL SILVA — PORTFOLIO 2026`
- [x] Large name: `Daniel Silva` — `clamp(3rem, 10vw, 8rem)`, weight 700, tracking -0.03em
- [x] Role line: `Junior Computer Engineer — AI & Data Analysis` — mono, secondary
- [x] Tagline: `"Do metal aos dados."` — italic, tertiary, slightly smaller
- [x] CTA row: `[Download CV]` outlined button + `View Work ↓` ghost link
- [x] Scroll indicator: vertical hairline line that extends downward, mono `scroll` label
- [x] Entry animation: name fades + rises (0.6s, 0.1s delay), role (0.8s), tagline (1.0s), CTAs (1.2s)
- [x] **NO background canvas/WebGL** — the typography is the hero

---

## Phase 4 — About Section

- [x] `SectionLabel`: `[02] ABOUT`
- [x] Large pull-quote bio (2–3 sentences, `clamp(1.1rem, 2.5vw, 1.5rem)`, 500 weight)
- [x] Asymmetric grid: text (5 cols) + photo (7 cols) on desktop; stacked on mobile
- [x] Profile photo: square, `object-fit: cover`, grayscale filter (`filter: grayscale(100%)`)
- [x] Photo hover: grayscale fades to color (0.4s transition) — subtle delight
- [x] Factoid list (mono): `LOCATION · Aveiro, Portugal` / `STATUS · Open to work` / `DEGREE · BSc Computer Engineering, ISEC` / `AWARD · WorldSkills 2023 — Medal of Excellence`
- [x] Scroll-triggered entry animation (fade + rise)

---

## Phase 5 — Experience Section

- [x] `SectionLabel`: `[03] EXPERIENCE`
- [x] Vertical timeline layout — left `1px solid var(--border)` line
- [x] Four experience items (most recent first):
  - [x] AI Engineer @ Meight (Feb 2026 – Jun 2026)
  - [x] Full-Stack Developer @ Internet Web Solutions — Erasmus+ (Apr–May 2023)
  - [x] Software Developer @ OPTIMA (Apr–Jun 2023)
  - [x] IT & Hardware @ OPTIMA (Jun–Jul 2022)
- [x] Each item: role (bold, primary) / company + period (mono, secondary) / bullet tasks (body, secondary)
- [x] Timeline dot (`●`) in `--accent` color
- [x] Items stagger-animate in from left on scroll (Framer Motion)

---

## Phase 6 — Projects Section

- [x] `SectionLabel`: `[04] PROJECTS`
- [x] Subtitle line: "Selected work — 5 projects across AI, data engineering, and web."
- [x] 2-col card grid (desktop), 1-col (mobile)
- [x] Five project cards:
  - [x] IndustrIA (AI · RAG)
  - [x] BI Figueira da Foz (Data Engineering · BI)
  - [x] DermoScan AI (Deep Learning)
  - [x] WaterWise Calculator (Full-stack · Erasmus+)
  - [x] Python CNC Controller (Industrial Automation)
- [x] Each card: category tag / title / 2-line description / stack pills / GitHub link (+ demo link if available)
- [x] Card hover: border brightens, title brightens, external arrow rotates 45°
- [x] Cards stagger-animate in on scroll

---

## Phase 7 — Skills Section

- [x] `SectionLabel`: `[05] SKILLS`
- [x] 3–4 col grid layout (auto-fit, `minmax(180px, 1fr)`)
- [x] Four categories:
  - [x] LANGUAGES: Python · SQL · PL/SQL · Java · C++ · C · PHP · JavaScript
  - [x] DATA & AI: Data Analysis · ETL · Machine Learning · Deep Learning · Power BI · Data Warehousing · RAG · Embeddings
  - [x] DATABASES: PostgreSQL · pgvector · MySQL · SQL Server
  - [x] TOOLS: Git & GitHub · Streamlit · FastAPI · AJAX · jQuery
- [x] Each category: mono uppercase header + hairline rule + tag pills
- [x] **NO skill bars or percentages**
- [x] Stagger animation on tags

---

## Phase 8 — Education Section

- [x] `SectionLabel`: `[06] EDUCATION`
- [x] Two degree entries (most recent first):
  - [x] BSc Computer Engineering, Information Systems — ISEC (2023–2026)
  - [x] Technical Diploma IT Management — Escola Sec. Dr. Serafim Leite (2020–2023)
- [x] Each: degree name (bold) / institution (secondary) / period (mono, tertiary)
- [x] WorldSkills Award callout block:
  - [x] Border: `1px solid var(--border)`, padding `24px`
  - [x] `🏅 Medal of Excellence` — bold, primary
  - [x] `WorldSkills Portugal 2023` — mono, secondary
  - [x] `Mobile Application Development` — body, secondary
- [x] Fade-in animation on scroll

---

## Phase 9 — Contact Section

- [x] `SectionLabel`: `[07] CONTACT`
- [x] Large email CTA: `danielsilva.eng.pt@gmail.com` — clickable `mailto:`, large type, underline on hover
- [x] Status line: `Open to work · Based in Aveiro · Available remotely` — mono, secondary
- [x] Social links row: `GitHub ↗` · `LinkedIn ↗` — text links, not icon-only
- [x] CV download row: `Download CV (PT) ↓` · `Download CV (EN) ↓` — outlined buttons
- [x] No contact form (keep it direct and friction-free)

---

## Phase 10 — Footer

- [x] Minimal footer: `Made with ☕ by Daniel Silva · 2026` — mono, tertiary
- [x] Back to top link (right side): `↑ Top` — mono, secondary
- [x] Hairline top border

---

## Phase 11 — i18n (PT ↔ EN)

- [x] Create `locales/pt.json` with all PT strings
- [x] Create `locales/en.json` with all EN strings
- [x] `LangToggle` component — updates `<html lang>` attribute
- [x] All text content driven from locale files
- [x] Default language: PT

---

## Phase 12 — Animations Polish Pass

- [x] Review all scroll-triggered animations for consistency
- [x] Ensure stagger delays feel natural (0.08s between items)
- [x] Verify hero entry animation timing (0.6s → 0.8s → 1.0s → 1.2s)
- [x] Test on slow motion (Framer Motion `reducedMotion: 'user'` respect)
- [x] Check `prefers-reduced-motion` — disable animations if user prefers

---

## Phase 13 — Performance & Accessibility

- [ ] Run Lighthouse audit — target ≥ 95 all metrics
- [ ] Compress profile photo (WebP, max 200KB)
- [ ] Add `loading="lazy"` to all images
- [ ] Add `alt` text to all images
- [ ] Add `aria-label` to all icon-only buttons (theme toggle, lang toggle)
- [ ] Verify all interactive elements are keyboard-navigable
- [ ] Verify focus states are visible (outline on focus-visible)
- [ ] Add Open Graph meta tags (og:title, og:description, og:image)
- [ ] Add `robots.txt` + `sitemap.xml`
- [ ] Verify contrast ratios (WCAG AA: 4.5:1 for body, 3:1 for large text)
- [ ] Test on Safari, Firefox, Chrome (latest)
- [ ] Test on iPhone 14 Pro (375px) and iPad (768px) viewports

---

## Phase 14 — Deploy

- [ ] Run `npm run build` — verify no build errors
- [ ] Run `npm run preview` — verify production build locally
- [ ] Set `base: '/portfolio/'` in `vite.config.ts`
- [ ] Run `npm run deploy` → GitHub Pages
- [ ] Verify live URL: `https://danielsilvaengpt.github.io/portfolio/`
- [ ] Test all links (GitHub projects, LinkedIn, CV downloads, demo links)
- [ ] Share and celebrate 🎉

---

## Backlog (Nice to Have — Post-MVP)

- [ ] Blog section (static MDX posts)
- [ ] Reading list / bookshelf page
- [ ] "Now" page (what I'm currently working on)
- [ ] Cursor custom (subtle dot cursor on desktop)
- [ ] Testimonials/recommendations from LinkedIn
- [ ] Analytics (privacy-first: Plausible or Fathom, no Google Analytics)
