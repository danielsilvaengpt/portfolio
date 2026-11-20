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
        dark: {
          base: 'var(--bg-base)',
          surface: 'var(--bg-surface)',
          elevated: 'var(--bg-elevated)',
          wash: 'var(--bg-wash)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          hover: 'var(--border-hover)',
          accent: 'var(--border-accent)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
        },
        brand: {
          primary: 'var(--brand-primary)',
          glow: 'var(--brand-glow)',
          accent: 'var(--brand-accent)',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1160px',
        prose: '68ch',
      },
      boxShadow: {
        glow: '0 0 50px -10px rgba(59, 130, 246, 0.25)',
        card: '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      },
      borderRadius: {
        card: '12px',
      }
    },
  },
  plugins: [],
} satisfies Config
