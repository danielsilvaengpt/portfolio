---
name: portfolio-commands
description: >-
  Slash command protocol for Daniel Silva's portfolio project.
  Activated when the user types /phase, /problem, /new, or /deploy.
  Always records every action in MEMORY.md changelog.
---

# Portfolio Slash Command Protocol

## Overview

This skill defines the behavior for 4 custom slash commands used during the development of Daniel Silva's portfolio.  
**Every command MUST log its action to the MEMORY.md changelog before finishing.**

### Context Files (always read before acting)
- `MEMORY.md` — Personal data + **changelog of all actions taken**
- `TASKS.md` — Phase breakdown and task status
- `DESIGN.md` — Design system and visual rules
- `CLAUDE.md` — Tech stack, structure, constraints
- `ARCHITECTURE.md` — Component tree and system design

All context files are at:  
`C:\Users\danie\.gemini\antigravity\brain\1f7e6e15-784e-4bbd-8eb6-ce81fce1eb1d\`

The portfolio workspace is at: `c:\Users\danie\Desktop\Portfolio`

---

## Command: `/phase [number or name]`

**Purpose:** Execute a full implementation phase from TASKS.md.

### Procedure
1. Read `TASKS.md` to identify the target phase and all its tasks
2. Read `MEMORY.md` changelog to understand what has already been done — never redo completed work
3. Read `CLAUDE.md` for stack constraints and implementation order
4. Read `DESIGN.md` for any UI/style decisions relevant to this phase
5. Execute ALL tasks in the phase sequentially:
   - Write/create all required files
   - Install dependencies if needed (`npm install ...`)
   - Verify each task works before moving to the next
6. Update `TASKS.md`: mark each completed task as `[x]`, in-progress as `[~]`
7. **Log to `MEMORY.md` changelog** (REQUIRED — see logging format below)
8. Report to the user: what was done, what files were created/changed, any decisions made

### Example Usage
```
/phase 0          → executes Phase 0 (Project Setup)
/phase 3          → executes Phase 3 (Hero Section)
/phase hero       → same as above, matches by name
/phase            → shows list of available phases and their status
```

---

## Command: `/problem [description]`

**Purpose:** Debug and fix a specific problem in the portfolio codebase.

### Procedure
1. Read `MEMORY.md` changelog to check if this problem (or similar) was encountered before
2. Understand the problem:
   - Read the affected files
   - Run the dev server if needed (`npm run dev`)
   - Reproduce the issue
3. Diagnose root cause
4. Propose the fix — explain it before applying
5. Apply the fix
6. Verify the fix works (build or runtime check)
7. **Log to `MEMORY.md` changelog** (REQUIRED — see logging format below)
8. Report: what the problem was, root cause, fix applied, files changed

### Example Usage
```
/problem the navbar doesn't close on mobile after clicking a link
/problem build fails with "cannot find module framer-motion"
/problem the hero section overflows on iPhone SE (375px)
/problem                                → asks user to describe the problem
```

---

## Command: `/new [description]`

**Purpose:** Implement a new feature, design change, or scope addition.

### Procedure
1. Read `MEMORY.md` changelog to understand current project state
2. Read `DESIGN.md` to ensure the change respects the design system
3. Read `CLAUDE.md` for any relevant constraints
4. **Before implementing:** describe the plan clearly to the user
   - What will be added/changed
   - Which files will be touched
   - Any design decisions made
   - Ask for confirmation if there's ambiguity
5. Implement the change
6. Update `TASKS.md` if the change adds new tasks or completes existing ones
7. **Log to `MEMORY.md` changelog** (REQUIRED — see logging format below)
8. Report: what was changed, files touched, any design decisions

### Example Usage
```
/new add a language switcher to the navbar
/new change the hero section tagline font to italic
/new add a "currently reading" section after contact
/new make the project cards show a flow diagram on hover
```

---

## Command: `/deploy`

**Purpose:** Build the project and deploy to GitHub Pages.

### Procedure
1. Read `MEMORY.md` changelog to confirm the project is in a stable state
2. Run pre-deploy checks:
   ```bash
   npm run build
   ```
   - If build fails → switch to `/problem` protocol automatically, fix it, then retry
3. Run deploy:
   ```bash
   npm run deploy
   ```
   (which runs: `tsc && vite build && gh-pages -d dist`)
4. Stage and commit any uncommitted changes first:
   ```bash
   git add .
   git commit -m "chore: deploy — [brief description of what changed]"
   git push origin main
   ```
5. Verify the live URL after deploy: `https://danielsilvaengpt.github.io/portfolio/`
6. **Log to `MEMORY.md` changelog** (REQUIRED — see logging format below)
7. Report: deploy status, live URL, commit hash

### Git Commit Convention
```
feat: add hero section with framer motion animations
fix: resolve navbar mobile menu not closing
chore: deploy phase 3 (hero + about sections)
style: adjust hero typography scale on mobile
refactor: extract SectionLabel into reusable component
```

---

## MEMORY.md Logging Format (REQUIRED for ALL commands)

After every command execution, append to the `## Changelog` section in `MEMORY.md`.

### Format
```markdown
### [YYYY-MM-DD HH:MM] — /command — Brief Title

**Action:** What was done  
**Files changed:** List of files created/modified/deleted  
**Decisions:** Any design or technical decisions made  
**Status:** ✅ Complete | ⚠️ Partial | ❌ Failed  
**Notes:** Anything important to remember for future sessions
```

### Example
```markdown
### [2026-10-27 01:15] — /phase 0 — Project Setup Complete

**Action:** Initialized Vite + React + TypeScript project. Installed all dependencies.  
**Files changed:** package.json, vite.config.ts, tailwind.config.ts, src/styles/globals.css, tsconfig.json  
**Decisions:** Used Geist font via @fontsource instead of Google Fonts for performance. Set base to '/portfolio/' in vite.config.ts for GitHub Pages.  
**Status:** ✅ Complete  
**Notes:** Node version is 20.x. npm run dev runs on localhost:5173.
```

---

## Important Rules

1. **NEVER skip the MEMORY.md log** — this is the project's persistent memory
2. **NEVER redo work already marked `[x]` in TASKS.md** — check before doing
3. **NEVER add colors outside the design system** — monochromatic only
4. **NEVER add animations that aren't in DESIGN.md** — ask first with `/new`
5. **ALWAYS read the relevant context files** before starting any command
6. **If a phase has already been partially done** — only do the `[ ]` tasks, skip `[x]`
7. **If there's ambiguity** — ask one clear question before proceeding, not after
