import React from 'react'
import { ArrowUp } from 'lucide-react'
import { useI18n } from '../../hooks/useI18n'

export const Footer: React.FC = () => {
  const { lang } = useI18n()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border py-12 select-none bg-bg">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-text-tertiary">
        {/* Left: Credit & Year */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-text-secondary border border-border px-1.5 py-0.5 rounded text-[10px] bg-bg-subtle">
            DS
          </span>
          <span>
            {lang === 'pt'
              ? 'Concebido com rigor tipográfico por Daniel Silva · 2026'
              : 'Engineered with typographic discipline by Daniel Silva · 2026'}
          </span>
        </div>

        {/* Center: Monochromatic Tagline */}
        <div className="hidden md:block italic text-[11px] text-text-tertiary">
          {lang === 'pt' ? '“Do metal aos dados.”' : '“From metal to data.”'}
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors focus:outline-none group"
        >
          <span>{lang === 'pt' ? 'Topo' : 'Back to top'}</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  )
}
