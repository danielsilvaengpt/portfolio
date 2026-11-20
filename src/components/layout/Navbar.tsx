import React, { useState } from 'react'
import { useI18n } from '../../hooks/useI18n'

export const Navbar: React.FC = () => {
  const { lang, setLang } = useI18n()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#projetos', labelPt: 'Projetos', labelEn: 'Projects' },
    { href: '#experiencia', labelPt: 'Experiência', labelEn: 'Experience' },
    { href: '#competencias', labelPt: 'Competências', labelEn: 'Skills' },
    { href: '#aprender', labelPt: 'Aprender', labelEn: 'Learning' },
    { href: '#contacto', labelPt: 'Contacto', labelEn: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-dark-base/75 backdrop-blur-xl border-b border-border-subtle">
      <div className="max-w-content mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="w-2 h-2 rounded-full bg-brand-primary group-hover:scale-125 transition-transform duration-200" />
          <span className="font-semibold text-base tracking-tight text-text-primary group-hover:text-brand-accent transition-colors">
            Daniel Silva
          </span>
          <span className="hidden sm:inline-block font-mono text-[11px] px-2 py-0.5 rounded border border-border-subtle bg-dark-surface text-text-tertiary">
            v2.6
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-secondary hover:text-text-primary transition-colors font-medium text-[13px]"
            >
              {lang === 'pt' ? link.labelPt : link.labelEn}
            </a>
          ))}

          {/* Language Toggle */}
          <div className="flex items-center border-l border-border-subtle pl-6 text-xs font-mono">
            <button
              onClick={() => setLang('pt')}
              className={`px-1.5 py-0.5 rounded ${lang === 'pt' ? 'font-bold text-white bg-dark-elevated' : 'text-text-tertiary hover:text-text-secondary'}`}
              aria-label="Versão em Português"
            >
              PT
            </button>
            <span className="text-border-subtle mx-1">/</span>
            <button
              onClick={() => setLang('en')}
              className={`px-1.5 py-0.5 rounded ${lang === 'en' ? 'font-bold text-white bg-dark-elevated' : 'text-text-tertiary hover:text-text-secondary'}`}
              aria-label="English version"
            >
              EN
            </button>
          </div>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex items-center md:hidden gap-3">
          <div className="flex items-center text-xs font-mono">
            <button
              onClick={() => setLang('pt')}
              className={lang === 'pt' ? 'font-bold text-white' : 'text-text-tertiary'}
            >
              PT
            </button>
            <span className="text-border-subtle mx-1">/</span>
            <button
              onClick={() => setLang('en')}
              className={lang === 'en' ? 'font-bold text-white' : 'text-text-tertiary'}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded border border-border-subtle text-text-secondary text-xs font-mono"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border-subtle bg-dark-surface/95 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-text-secondary hover:text-white text-sm py-1.5"
            >
              {lang === 'pt' ? link.labelPt : link.labelEn}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
