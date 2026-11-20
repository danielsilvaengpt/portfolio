import React from 'react'
import { useI18n } from '../../hooks/useI18n'

export const Footer: React.FC = () => {
  const { lang } = useI18n()

  return (
    <footer className="py-12 bg-dark-base border-t border-border-subtle text-xs font-mono text-text-tertiary">
      <div className="max-w-content mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-baseline justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
          <span>Daniel Silva · 2026</span>
          <span className="text-border-subtle">·</span>
          <span>
            {lang === 'pt' ? 'Engenheiro Informático Júnior' : 'Junior Computer Engineer'}
          </span>
        </div>

        <div>
          <a
            href="https://github.com/danielsilvaengpt/portfolio"
            target="_blank"
            rel="noreferrer"
            className="text-text-secondary hover:text-white transition-colors underline underline-offset-4"
          >
            {lang === 'pt' ? 'Ver código-fonte deste portfólio' : 'View portfolio source code'}
          </a>
        </div>
      </div>
    </footer>
  )
}
