import React, { useState } from 'react'
import { useI18n } from '../../hooks/useI18n'

export const Navbar: React.FC = () => {
  const { lang, setLang } = useI18n()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#projetos', labelPt: 'Projetos', labelEn: 'Projects' },
    { href: '#experiencia', labelPt: 'Experiência', labelEn: 'Experience' },
    { href: '#competencias', labelPt: 'Competências', labelEn: 'Skills' },
    { href: '#aprender', labelPt: 'A aprender', labelEn: 'Learning' },
    { href: '#contacto', labelPt: 'Contacto', labelEn: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-paper border-b border-rule">
      {/* Skip to main content accessibility link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-process focus:text-white focus:outline-none"
      >
        {lang === 'pt' ? 'Saltar para o conteúdo principal' : 'Skip to main content'}
      </a>

      <div className="max-w-content mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Name in IBM Plex Sans Condensed 600, no monogram, no logo */}
        <a
          href="#"
          className="font-condensed font-semibold text-xl tracking-tight text-ink hover:text-process transition-colors duration-standard"
        >
          Daniel Silva
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-base" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ink hover:text-process text-sm transition-colors duration-standard font-medium"
            >
              {lang === 'pt' ? link.labelPt : link.labelEn}
            </a>
          ))}

          {/* Language Toggle */}
          <div className="flex items-center border-l border-rule pl-6 text-sm font-mono">
            <button
              onClick={() => setLang('pt')}
              className={`px-1.5 py-0.5 ${lang === 'pt' ? 'font-semibold text-ink underline decoration-process decoration-2' : 'text-ink-muted hover:text-ink'}`}
              aria-label="Versão em Português"
            >
              PT
            </button>
            <span className="text-rule mx-1">|</span>
            <button
              onClick={() => setLang('en')}
              className={`px-1.5 py-0.5 ${lang === 'en' ? 'font-semibold text-ink underline decoration-process decoration-2' : 'text-ink-muted hover:text-ink'}`}
              aria-label="English version"
            >
              EN
            </button>
          </div>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center md:hidden gap-4">
          <div className="flex items-center text-xs font-mono">
            <button
              onClick={() => setLang('pt')}
              className={lang === 'pt' ? 'font-bold text-ink underline' : 'text-ink-muted'}
            >
              PT
            </button>
            <span className="text-rule mx-1">|</span>
            <button
              onClick={() => setLang('en')}
              className={lang === 'en' ? 'font-bold text-ink underline' : 'text-ink-muted'}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-ink border border-rule text-xs font-mono"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? (lang === 'pt' ? 'Fechar' : 'Close') : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Clean list, no decorative hamburger animation) */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-rule bg-paper px-6 py-4 flex flex-col gap-3" aria-label="Navegação móvel">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-ink hover:text-process text-base py-1"
            >
              {lang === 'pt' ? link.labelPt : link.labelEn}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
