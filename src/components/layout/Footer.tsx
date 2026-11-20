import React from 'react'
import { useI18n } from '../../hooks/useI18n'

export const Footer: React.FC = () => {
  const { lang } = useI18n()

  return (
    <footer className="py-12 bg-paper text-sm text-ink-muted">
      <div className="max-w-content mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-baseline justify-between gap-4">
        <div>
          <span>Daniel Silva · 2026</span>
          <span className="mx-2 text-rule">·</span>
          <span>
            {lang === 'pt' ? 'Engenheiro informático júnior' : 'Junior computer engineer'}
          </span>
        </div>

        <div>
          <a
            href="https://github.com/danielsilvaengpt/portfolio"
            target="_blank"
            rel="noreferrer"
            className="text-process underline underline-offset-4 hover:text-ink transition-colors duration-standard"
          >
            {lang === 'pt' ? 'Ver código-fonte deste site' : 'View site source code'}
          </a>
        </div>
      </div>
    </footer>
  )
}
