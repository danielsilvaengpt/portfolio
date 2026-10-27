# ARCHITECTURE.md — Component Tree & System Design

---

## Application Architecture

```
App.tsx
├── ThemeProvider          ← Context: dark/light state
├── I18nProvider           ← Context: PT/EN language state
├── Navbar
│   ├── Logo (DS)
│   ├── NavLinks           ← Active state via IntersectionObserver
│   ├── LangToggle         ← [PT | EN]
│   ├── ThemeToggle        ← Sun / Moon icon
│   └── MobileMenu         ← Hamburger → overlay
│
├── main (role="main")
│   ├── Hero               ← #hero
│   ├── About              ← #about
│   ├── Experience         ← #experience
│   ├── Projects           ← #projects
│   ├── Skills             ← #skills
│   ├── Education          ← #education
│   └── Contact            ← #contact
│
└── Footer
```

---

## State Management

**No Redux. No Zustand.** The portfolio is read-only content — no complex state needed.

| State | Where | How |
|---|---|---|
| Theme (dark/light) | `ThemeContext` | React Context + localStorage |
| Language (PT/EN) | `I18nContext` | React Context + localStorage |
| Active nav section | `NavLinks` | `useIntersectionObserver` |
| Scroll progress | `useScrollProgress` | `useScrollProgress` hook |
| Animation visible | Each section | `useInView` from react-intersection-observer |

---

## Data Architecture

All content lives in `src/data/` — TypeScript files exporting typed constants.

```typescript
// src/data/content.ts
export const PERSON = {
  name: "Daniel Silva",
  location: "Aveiro, Portugal",
  email: "danielsilva.eng.pt@gmail.com",
  github: "https://github.com/danielsilvaengpt",
  linkedin: "https://www.linkedin.com/in/daniel-silva-eng-pt/",
  cv: { pt: "/assets/cv/Daniel_Silva_CV_PT.pdf", en: "/assets/cv/Daniel_Silva_CV_EN.pdf" },
}

// src/data/projects.ts
export type Project = {
  id: string;
  category: string;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  stack: string[];
  github?: string;
  demo?: string;
  type: "personal" | "university" | "internship";
}
export const PROJECTS: Project[] = [ ... ]

// src/data/experience.ts
export type ExperienceItem = {
  role: { pt: string; en: string };
  company: string;
  location: string;
  period: string;
  type: string;
  tasks: { pt: string[]; en: string[] };
}
export const EXPERIENCE: ExperienceItem[] = [ ... ]  // most recent first

// src/data/skills.ts
export type SkillCategory = {
  label: string;
  skills: string[];
}
export const SKILLS: SkillCategory[] = [ ... ]

// src/data/education.ts
export type EducationItem = { ... }
export const EDUCATION: EducationItem[] = [ ... ]
export const AWARDS = [ ... ]
```

---

## i18n System

Simple custom context — no heavy library needed.

```typescript
// src/contexts/I18nContext.tsx
type Lang = "pt" | "en";

const I18nContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}>(...);
```

Translations for UI strings (nav labels, CTA text, section titles) live in:
- `src/locales/pt.json`
- `src/locales/en.json`

Content data (bio, project descriptions, task bullets) is bilingual directly in the data files (`.pt` / `.en` fields).

---

## Theme System

```typescript
// src/contexts/ThemeContext.tsx
type Theme = "dark" | "light";

// On mount: read from localStorage, fallback to "dark"
// Apply class to document.documentElement: "dark" or "light"
// CSS variables switch based on :root.dark / :root.light
```

```css
/* globals.css */
:root {
  /* Default: dark */
  --bg: #080808;
  /* ... */
}
:root.light {
  --bg: #FAFAFA;
  /* ... */
}
```

Tailwind's `darkMode: 'class'` strategy is used, enabling `dark:` prefixes.

---

## Animation System

Framer Motion `motion` components wrap all animatable elements.

### Standard variants:

```typescript
// src/lib/animations.ts

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}

export const stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
}

export const slideLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
}
```

### Usage pattern:
```tsx
const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

<motion.div
  ref={ref}
  variants={stagger}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
>
  {items.map(item => (
    <motion.div key={item.id} variants={fadeUp}>
      {/* content */}
    </motion.div>
  ))}
</motion.div>
```

### Reduced Motion:
```typescript
import { useReducedMotion } from "framer-motion";
const shouldReduceMotion = useReducedMotion();
// Pass duration: 0 or skip animation variants entirely
```

---

## Deployment Pipeline

```
Local Dev
    │
    ├── npm run dev          → localhost:5173 (Vite HMR)
    │
    ├── npm run build        → dist/ folder
    │
    ├── npm run preview      → localhost:4173 (production preview)
    │
    └── npm run deploy       → gh-pages branch → GitHub Pages
                               URL: danielsilvaengpt.github.io/portfolio/
```

### `vite.config.ts`
```typescript
export default defineConfig({
  base: '/portfolio/',   // ← Required for GitHub Pages subdirectory
  plugins: [react()],
})
```

### `package.json` scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

---

## Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse Best Practices | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| LCP (Largest Contentful Paint) | < 2.5s |
| CLS (Cumulative Layout Shift) | < 0.1 |
| FID (First Input Delay) | < 100ms |
| JS Bundle (gzipped) | < 150KB |

### Strategies
- Fonts: `@fontsource` self-hosted (eliminates Google Fonts round-trip)
- Images: WebP format, `loading="lazy"`, explicit `width/height`
- Code splitting: React.lazy() for heavy sections if needed
- Tree-shaking: Lucide React (import only used icons)
- No runtime CSS-in-JS (Tailwind is build-time)
