import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        surface: 'var(--surface)',
        wash: 'var(--wash)',
        ink: {
          DEFAULT: 'var(--ink)',
          muted: 'var(--ink-muted)',
        },
        rule: 'var(--rule)',
        process: 'var(--process)',
        decision: 'var(--decision)',
        start: 'var(--start)',
        end: 'var(--end)',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        condensed: ['"IBM Plex Sans Condensed"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1120px',
        prose: '68ch',
      },
      borderRadius: {
        node: '6px',
      },
      transitionDuration: {
        standard: '150ms',
      }
    },
  },
  plugins: [],
} satisfies Config
