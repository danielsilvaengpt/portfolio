import React from 'react'
import { useI18n } from '../../hooks/useI18n'
import { SpotlightCard } from '../ui/SpotlightCard'

export const Contact: React.FC = () => {
  const { lang } = useI18n()

  return (
    <section id="contacto" className="py-20 sm:py-28 border-b border-border-subtle relative">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <div className="max-w-prose mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brand-accent mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>05 // INITIATE CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            {lang === 'pt' ? 'Contacto Direto' : 'Direct Line'}
          </h2>
          <p className="text-lg text-text-primary font-medium leading-relaxed mb-2">
            {lang === 'pt'
              ? 'Procuro a minha primeira oportunidade profissional a tempo inteiro em IA, dados e sistemas de informação.'
              : 'Looking for my first full-time role across AI engineering, data systems, and enterprise architectures.'}
          </p>
          <p className="text-sm text-text-secondary leading-relaxed">
            {lang === 'pt'
              ? 'Disponibilidade presencial, híbrida ou 100% remota em Portugal ou internacionalmente.'
              : 'Available for on-site, hybrid, or remote positions in Portugal or globally.'}
          </p>
        </div>

        {/* Big Spotlight Contact Card */}
        <SpotlightCard className="p-8 sm:p-10 max-w-3xl">
          <div className="flex flex-col sm:flex-row items-baseline sm:items-center justify-between gap-6 mb-8">
            <div>
              <p className="font-mono text-xs text-text-tertiary uppercase tracking-wider mb-1">
                {lang === 'pt' ? 'EMAIL PRINCIPAL' : 'PRIMARY EMAIL'}
              </p>
              <a
                href="mailto:danielsilva.eng.pt@gmail.com"
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-white hover:text-brand-accent transition-colors break-all"
              >
                danielsilva.eng.pt@gmail.com
              </a>
            </div>

            <a
              href="mailto:danielsilva.eng.pt@gmail.com"
              className="inline-flex items-center justify-center px-6 h-11 bg-brand-primary text-white font-medium text-sm rounded-lg hover:bg-blue-600 hover:shadow-glow transition-all"
            >
              {lang === 'pt' ? 'Enviar email' : 'Send message'}
            </a>
          </div>

          <div className="pt-6 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/danielsilvaengpt"
                target="_blank"
                rel="noreferrer"
                className="text-text-secondary hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>GitHub</span>
                <span className="text-[10px]">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/daniel-silva-eng-pt/"
                target="_blank"
                rel="noreferrer"
                className="text-text-secondary hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>LinkedIn</span>
                <span className="text-[10px]">↗</span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="./assets/cv/Daniel_Silva_CV_PT.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-brand-accent hover:underline"
              >
                CV (PT)
              </a>
              <span className="text-border-subtle">·</span>
              <a
                href="./assets/cv/Daniel_Silva_CV_EN.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-brand-accent hover:underline"
              >
                CV (EN)
              </a>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  )
}
