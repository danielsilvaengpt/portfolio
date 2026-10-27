# CLAUDE.md — Project Context & Technical Specification

> **Role:** You are a Senior Front-end UI/UX Developer with 10+ years of experience in building award-winning developer portfolios. Your code is clean, semantic, accessible, and performant.

---

## Project Overview

**Client:** Daniel Silva  
**Goal:** Rebuild an existing portfolio from scratch with a completely new aesthetic — minimalist, monochromatic, premium, and unforgettable. NOT a refresh — a ground-up reimagination.  
**Old site:** https://danielsilvaengpt.github.io/portfolio/ (reference for CONTENT ONLY, not design)  
**Tagline:** "Do metal aos dados." (From metal to data.)

---

## Tech Stack

| Layer | Technology | Rationale |
|---|---|---|
| Framework | **React 18** + **Vite 5** | Fast HMR, modern bundling, no legacy overhead |
| Styling | **TailwindCSS v3** + **CSS Variables** | Utility-first + design token flexibility |
| Animations | **Framer Motion** | Declarative, smooth, React-native animations |
| Icons | **Lucide React** | Clean, consistent SVG icon set |
| Fonts | **Next/Google Fonts** via `@fontsource` | Self-hosted for performance |
| i18n | **react-i18next** | PT ↔ EN bilingual support |
| Theme | **next-themes** or CSS class toggle | Dark/Light mode with no flash |
| Scroll | **react-intersection-observer** | Performant scroll-triggered animations |
| Deploy | **GitHub Pages** via `gh-pages` | Same hosting as current site |

---

## Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── cv/
│   │   │   ├── Daniel_Silva_CV_PT.pdf
│   │   │   └── Daniel_Silva_CV_EN.pdf
│   │   └── img/
│   │       ├── daniel.jpg
│   │       └── og-image.jpg
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Education.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Tag.tsx
│   │       ├── ThemeToggle.tsx
│   │       ├── LangToggle.tsx
│   │       └── SectionLabel.tsx
│   ├── data/
│   │   ├── content.ts        ← All portfolio content (bilingual)
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   └── skills.ts
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── useScrollProgress.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── styles/
│   │   ├── globals.css       ← CSS variables + base resets
│   │   └── animations.css
│   ├── locales/
│   │   ├── pt.json
│   │   └── en.json
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Key Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

---

## Design Constraints (MUST FOLLOW)

1. **NO stock photos, NO gradients that look cheap, NO clip-art icons**
2. **Every section must have intentional white space** — breathing room is the luxury
3. **Typography does the heavy lifting** — size, weight, tracking create hierarchy
4. **Animations serve purpose** — subtle, never distracting, always meaningful
5. **Mobile-first** — design for 375px, scale up. Every breakpoint must be tested
6. **Performance:** Lighthouse score ≥ 95 on all metrics
7. **Accessibility:** WCAG AA minimum. Focus states visible. ARIA labels on icon buttons
8. **No layout shifts** — reserve space for images, use `aspect-ratio`

---

## Guiding Philosophy

> "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away." — Antoine de Saint-Exupéry

The portfolio must communicate **confidence, taste, and technical depth** through restraint. Every element that exists must EARN its place.

---

## Implementation Order

1. Setup (Vite + React + Tailwind + Framer Motion)
2. Design tokens (CSS variables, Tailwind config)
3. Base layout (Navbar + Footer)
4. Hero section
5. About section
6. Experience section (timeline)
7. Projects section
8. Skills section
9. Education section
10. Contact section
11. Dark/Light toggle + i18n PT/EN
12. Animations pass (Framer Motion)
13. Polish pass (spacing, typography, micro-interactions)
14. Performance + Accessibility audit
15. Deploy

---

## Do NOT Repeat These Mistakes from the Old Portfolio

- Overloaded hero with too many visual gimmicks (WebGL canvas + SVG path + XYZ readout simultaneously)
- Color inconsistency (cyan AND amber competing for attention)
- Project cards feel cluttered — too much text, not enough visual breathing
- Timeline section lacks visual clarity on mobile
- Font mixing feels busy (3 fonts competing equally)
