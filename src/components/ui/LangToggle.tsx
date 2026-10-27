import React from 'react'
import { useI18n } from '../../hooks/useI18n'
import { cn } from '../../lib/utils'

interface LangToggleProps {
  className?: string
}

export const LangToggle: React.FC<LangToggleProps> = ({ className }) => {
  const { lang, toggleLang } = useI18n()

  return (
    <button
      onClick={toggleLang}
      aria-label="Toggle language between Portuguese and English"
      className={cn(
        "px-2.5 py-1.5 rounded-md border border-border text-xs font-mono text-text-secondary hover:text-text-primary hover:border-border-hover hover:bg-bg-subtle transition-all duration-200 select-none flex items-center gap-1.5",
        className
      )}
    >
      <span className={cn(lang === 'pt' ? 'text-text-primary font-bold' : 'text-text-tertiary')}>
        PT
      </span>
      <span className="text-border">/</span>
      <span className={cn(lang === 'en' ? 'text-text-primary font-bold' : 'text-text-tertiary')}>
        EN
      </span>
    </button>
  )
}
