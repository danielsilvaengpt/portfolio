import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { ThemeToggle } from '../ui/ThemeToggle'
import { LangToggle } from '../ui/LangToggle'
import { useI18n } from '../../hooks/useI18n'
import { cn } from '../../lib/utils'

interface NavItem {
  id: string
  labelPt: string
  labelEn: string
  index: string
}

const NAV_ITEMS: NavItem[] = [
  { id: 'about', labelPt: 'Sobre', labelEn: 'About', index: '01' },
  { id: 'experience', labelPt: 'Experiência', labelEn: 'Experience', index: '02' },
  { id: 'projects', labelPt: 'Projetos', labelEn: 'Projects', index: '03' },
  { id: 'skills', labelPt: 'Skills', labelEn: 'Skills', index: '04' },
  { id: 'education', labelPt: 'Educação', labelEn: 'Education', index: '05' },
  { id: 'contact', labelPt: 'Contacto', labelEn: 'Contact', index: '06' },
]

export const Navbar: React.FC = () => {
  const { lang } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Section intersection detection
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id))
      const scrollPos = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i]
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i].id)
          break
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileOpen])

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-bg/85 backdrop-blur-md border-b border-border py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="group flex items-center gap-2 font-mono text-sm tracking-tight text-text-primary select-none focus:outline-none"
          >
            <span className="font-bold border border-border px-2 py-0.5 rounded text-xs bg-bg-subtle group-hover:border-border-hover transition-colors">
              DS
            </span>
            <span className="hidden sm:inline text-xs text-text-secondary tracking-normal group-hover:text-text-primary transition-colors">
              Daniel Silva
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "relative font-mono text-xs transition-colors duration-200 py-1 flex items-center gap-1.5 focus:outline-none",
                    isActive
                      ? "text-text-primary font-medium"
                      : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  <span className="text-[10px] text-text-tertiary">
                    {item.index}
                  </span>
                  <span>{lang === 'pt' ? item.labelPt : item.labelEn}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent animate-in fade-in duration-200" />
                  )}
                </button>
              )
            })}
          </nav>

          {/* Controls: Lang + Theme + Mobile toggle */}
          <div className="flex items-center gap-2.5">
            <LangToggle />
            <ThemeToggle />

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close Menu' : 'Open Menu'}
              className="md:hidden p-2 rounded-md border border-border text-text-secondary hover:text-text-primary hover:border-border-hover transition-colors"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl md:hidden flex flex-col justify-between p-8 pt-28 animate-in fade-in duration-200">
          <nav className="flex flex-col gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "flex items-center justify-between text-left py-3 border-b border-border/50 text-xl font-mono transition-colors",
                    isActive
                      ? "text-text-primary font-bold"
                      : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-text-tertiary font-mono">
                      {item.index}
                    </span>
                    <span>{lang === 'pt' ? item.labelPt : item.labelEn}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-text-tertiary" />
                </button>
              )
            })}
          </nav>

          <div className="pt-6 border-t border-border flex items-center justify-between text-xs font-mono text-text-tertiary">
            <span>danielsilva.eng.pt@gmail.com</span>
            <span>Aveiro, PT</span>
          </div>
        </div>
      )}
    </>
  )
}
