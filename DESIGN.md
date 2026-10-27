# DESIGN.md — Design System & Visual Direction

> **Direction:** Monochromatic · Minimalist · Editorial · Premium  
> **Mood:** A printed Swiss design book meets a high-end SaaS landing page. Quiet confidence. Zero noise.

---

## Visual Philosophy

This portfolio does NOT try to impress through complexity.  
It impresses through **discipline, precision, and restraint.**

The visitor should feel: *"Whoever built this knows exactly what they're doing."*

Every design decision answers one question: **"Does this serve the content, or does it distract from it?"**

---

## Color System

### Dark Mode (Primary)
```css
--bg:           #080808;   /* True near-black — not navy, not charcoal */
--bg-subtle:    #0F0F0F;   /* Slightly lifted surface for section alternation */
--bg-elevated:  #161616;   /* Card surfaces, elevated elements */
--border:       #1F1F1F;   /* Hairline borders — barely visible */
--border-hover: #2E2E2E;   /* Borders on hover/focus */

--text-primary:   #F5F5F5; /* Near-white — not pure white (softer) */
--text-secondary: #A0A0A0; /* Muted — metadata, labels, captions */
--text-tertiary:  #505050; /* Whisper — decorative text, index numbers */

--accent:         #E8E8E8; /* Primary accent — bright white in dark mode */
--accent-muted:   #303030; /* Accent muted state */
```

### Light Mode
```css
--bg:           #FAFAFA;   /* Off-white — not pure white */
--bg-subtle:    #F2F2F2;   /* Slightly darker surface */
--bg-elevated:  #FFFFFF;   /* Cards and elevated surfaces */
--border:       #E5E5E5;   /* Light hairline borders */
--border-hover: #C8C8C8;   /* Borders on hover */

--text-primary:   #111111; /* Near-black */
--text-secondary: #6B6B6B; /* Muted */
--text-tertiary:  #BABABA; /* Whisper */

--accent:         #111111; /* Primary accent = near-black in light mode */
--accent-muted:   #E8E8E8; /* Accent muted */
```

### Accent Color — Monochromatic Silver/White Strategy
- **No colored accent.** The only "color" is contrast itself.
- Hierarchy is achieved through **weight, size, and opacity** — not hue.
- The single pop of visual interest: **a fine hairline rule** or **index number** in `--text-tertiary`
- On hover states: border shifts from `--border` to `--border-hover`. Text lifts from secondary to primary. That's the entire interaction palette.

### Why No Colors?
> Colored accents are easy. They do the work for you. Monochrome means typography, spacing, and composition carry ALL the weight. This is harder to pull off — and that's exactly why it communicates expertise.

---

## Typography

### Font Stack
```css
/* Display — for hero name, large section headings */
font-family: 'Geist', 'Inter', system-ui, sans-serif;
/* Note: Geist by Vercel is ideal. Fallback to Inter. */

/* Body — readable at all sizes */
font-family: 'Inter', system-ui, sans-serif;

/* Mono — dates, tags, index numbers, metadata */
font-family: 'Geist Mono', 'JetBrains Mono', monospace;
```

### Type Scale (Mobile → Desktop)
```
Hero Name:      clamp(3rem, 10vw, 8rem)     — 700 weight, -0.03em tracking
H2 Section:     clamp(1.75rem, 4vw, 3rem)   — 500 weight, -0.02em tracking
H3 Subsection:  clamp(1.1rem, 2vw, 1.5rem)  — 500 weight
Body:           1rem / 1.6 line-height       — 400 weight
Caption/Mono:   0.75rem — 0.8rem             — 400 weight, 0.08em tracking (mono)
```

### Typography Rules
1. **Max 2 font families ever** — Display/Body (Inter or Geist) + Mono (Geist Mono or JetBrains Mono)
2. **Weight contrast creates hierarchy** — 400 vs 700, never 400 vs 500 alone
3. **Negative tracking on large headings** — tighten as size increases
4. **Line length:** max 65ch for body text, 80ch max ever
5. **No text-transform: uppercase on body text** — only on mono labels (category tags)

---

## Spacing System

Base unit: `4px` (0.25rem)

```
xs:   4px   (0.25rem)
sm:   8px   (0.5rem)
md:   16px  (1rem)
lg:   24px  (1.5rem)
xl:   32px  (2rem)
2xl:  48px  (3rem)
3xl:  64px  (4rem)
4xl:  96px  (6rem)
5xl:  128px (8rem)
```

Section padding: `5xl` (128px) top/bottom on desktop, `3xl` (64px) on mobile.  
Content max-width: `1100px` centered with `padding: 0 24px`.

---

## Grid & Layout

- **12-column grid** conceptually, implemented via CSS Grid or Flex
- Most sections: **single column** (content centered) — restraint in layout creates luxury
- Projects: **2-col grid** on desktop, single col on mobile
- Experience: **single column timeline** — left border line, content offset right
- About: **asymmetric 5:7 split** — text left (5 cols), image right (7 cols) on desktop

---

## Animation Principles

### Rules
1. **Duration:** 0.4s – 0.7s for reveals. Never > 1s except for deliberate slow hero moments.
2. **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` — spring-like but CSS-smooth (Expo Out)
3. **Stagger:** 0.08s between sequential items
4. **Trigger:** On scroll intersection with `threshold: 0.15`
5. **Never animate color** — only transform + opacity

### Entry Animations
```
Fade + rise:  opacity: 0, y: 24px → opacity: 1, y: 0
Fade only:    opacity: 0 → opacity: 1  (for text blocks)
Slide left:   opacity: 0, x: -24px → opacity: 1, x: 0  (timeline items)
```

### Micro-interactions
- **Links/buttons:** `transform: translateY(-1px)` on hover — feels "lifted"
- **Cards:** `border-color` transition, no scale — no "jumping" cards
- **Nav links:** underline that slides in from left, `scaleX(0) → scaleX(1)`, origin left
- **Theme toggle:** Icon morphs with rotation + opacity

### What to AVOID
- ❌ Parallax effects — cause scroll jank
- ❌ Scroll-hijacking
- ❌ 3D transforms on content (reserve for decorative elements only)
- ❌ Infinite loops or looping animations on page load (exhausting)
- ❌ Bounce/elastic easing on UI elements (unprofessional)

---

## Component Anatomy

### SectionLabel
```
[01]  ABOUT          ← mono font, tertiary color, uppercase tracking
────────────────     ← hairline hr (1px, border-color)
```
Small index number (tertiary) + uppercase mono label + horizontal rule.  
Used as the section header across ALL sections for visual consistency.

### ProjectCard
```
┌─────────────────────────────────────┐
│  [Category Tag]                      │  ← mono, uppercase, tertiary
│                                      │
│  Project Title                       │  ← h3, primary, bold
│  Short description, 2 lines max      │  ← body, secondary
│                                      │
│  python · fastapi · postgresql       │  ← mono, tertiary, dot-separated
│                                      │
│  ——————————————  GitHub ↗            │  ← hairline + cta link
└─────────────────────────────────────┘
```
Border: `1px solid var(--border)`. On hover: border → `--border-hover`, title → `--text-primary`.

### TimelineItem
```
│  (left border line — 1px, --border)
●  Role title                     ← bold, primary
│  Company · Location · Dates     ← mono, secondary  
│  
│  · Task description              ← body, secondary
│  · Task description
│  · Task description
│
```
The dot (`●`) is `var(--accent)` — the only true "highlight" in the experience section.

### Tag (tech stack pill)
```
[ python ]
```
`border: 1px solid var(--border)` · `padding: 2px 8px` · `border-radius: 4px` · mono font · secondary color.  
No background fill. Just a bordered outline.

---

## Section Layout Blueprints

### Hero
- Full viewport height (`100svh`)
- Vertically centered content
- **Name** at enormous scale — the hero IS the typography
- Role below, in mono font, secondary color
- Tagline in italic, tertiary, slightly smaller
- Two CTAs below: `[Download CV]` (outlined button) and `[View Work]` (ghost link with arrow)
- Bottom: scroll indicator — a single vertical line that pulses, or just a "↓" in tertiary mono
- **NO background animations** — the typography IS the animation

### About
- Section label top
- Large pull-quote style bio — 2–3 sentences max, large type
- Below: photo (grayscale, `object-fit: cover`, square crop) + small factoid list
- Factoid list: mono labels + values: `LOCATION · Aveiro, Portugal` / `STATUS · Open to work` / `LANGUAGES · PT & EN`

### Experience
- Section label top
- Vertical timeline — left border line (1px)
- Each item: role + company (bold) / dates (mono, secondary) / bullet tasks (body, secondary)
- Items stagger in from left on scroll
- Most recent first

### Projects
- Section label top
- Intro line: "Selected work. 5 projects across AI, data engineering, and web." (body, secondary)
- 2-col card grid (desktop) / 1-col (mobile)
- Each card: no image — pure typography + metadata + link
- No hover scale — border brightens, title brightens, arrow rotates 45°

### Skills
- Section label top
- **Not a visual skill bar or percentage** — those are decoration, not information
- Simple grid of categories with grouped tags:
  ```
  LANGUAGES          DATA & AI              TOOLS
  ─────────          ─────────              ─────
  Python             Data Analysis          Git & GitHub
  SQL · PL/SQL       ETL                    Streamlit
  Java               Machine Learning       FastAPI
  C++ · C            Power BI               PostgreSQL
  ```
- 3–4 col grid, each col = category header + pills

### Education
- Section label top
- Two entries: degree + school + year (clean list)
- Award block: the WorldSkills medal gets a **dedicated callout block**  
  ```
  ┌──────────────────────────────────┐
  │  🏅  Medal of Excellence         │
  │  WorldSkills Portugal 2023       │
  │  Mobile Application Development  │
  └──────────────────────────────────┘
  ```
  Border: `--border`. Clean, no glow, no amber.

### Contact
- Section label top
- Large email as main CTA — clickable `mailto:`
- Subtitle: "Open to work. Based in Aveiro. Available remotely." (mono, secondary)
- Social row: GitHub · LinkedIn — text links, not icon buttons
- "Made with ☕ by Daniel Silva" at bottom as footer note

---

## Responsive Breakpoints (Tailwind)

```
sm:   640px   — Tablet portrait
md:   768px   — Tablet landscape
lg:   1024px  — Laptop
xl:   1280px  — Desktop
2xl:  1536px  — Wide desktop
```

Mobile (`< 640px`) is the default. All layout starts single-column.

---

## Dark/Light Toggle

- **Toggle position:** Top-right of navbar
- **Icon:** Sun (light) / Moon (dark) — Lucide icons, 18px
- **Transition:** 0.2s ease on background-color, color, border-color
- **Storage:** `localStorage` persists preference
- **SSR:** `class="dark"` on `<html>` prevents flash
- **Default:** Dark mode

---

## What Makes This Stand Out

1. **Enormous typography in hero** — most portfolios use medium-sized names. This one uses the name as the visual artwork.
2. **Monochrome discipline** — every other portfolio uses color. The absence of color IS the statement.
3. **Hairline details** — 1px borders, subtle section rules, micro-typography — these say "this person cares about detail."
4. **No filler imagery** — no abstract blobs, no mockup screenshots (unless real). The work speaks through words.
5. **Swiss Grid influence** — structured, mathematical, editorial. Think a printed design annual, not a Dribbble shot.
