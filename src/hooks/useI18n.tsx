import React, { createContext, useContext, useEffect, useState } from 'react'
import ptTranslations from '../locales/pt.json'
import enTranslations from '../locales/en.json'

export type Lang = 'pt' | 'en'

const translations: Record<Lang, typeof ptTranslations> = {
  pt: ptTranslations,
  en: enTranslations,
}

interface I18nContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
  t: (path: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('portfolio-lang') as Lang | null
      if (stored === 'pt' || stored === 'en') return stored
    }
    return 'pt' // default to Portuguese
  })

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem('portfolio-lang', lang)
  }, [lang])

  const toggleLang = () => {
    setLangState((prev) => (prev === 'pt' ? 'en' : 'pt'))
  }

  const setLang = (newLang: Lang) => {
    setLangState(newLang)
  }

  // Nested property lookup, e.g. t('nav.about')
  const t = (path: string): string => {
    const keys = path.split('.')
    let current: any = translations[lang]
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key]
      } else {
        return path
      }
    }
    return typeof current === 'string' ? current : path
  }

  return (
    <I18nContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
