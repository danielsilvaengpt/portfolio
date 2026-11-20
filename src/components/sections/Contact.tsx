import React from 'react'
import { useI18n } from '../../hooks/useI18n'
import { SectionProcessNode } from '../ui/SectionProcessNode'

export const Contact: React.FC = () => {
  const { lang } = useI18n()

  return (
    <section id="contacto" className="py-16 sm:py-24 border-b border-rule">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        {/* Section Process Node: End Event / Output Node */}
        <SectionProcessNode
          type="end"
          tag="06 // OUTPUT"
          label={lang === 'pt' ? 'FIM DO PROCESSO / LIGAÇÃO' : 'PROCESS END / OUTCOME'}
        />

        <div className="max-w-prose mb-8">
          <h2 className="font-condensed font-semibold text-3xl sm:text-4xl text-ink tracking-tight mb-3">
            {lang === 'pt' ? 'Contacto' : 'Contact'}
          </h2>
          <p className="text-lg text-ink font-normal leading-relaxed mb-4">
            {lang === 'pt'
              ? 'Procuro a minha primeira oportunidade a tempo inteiro em IA, dados e sistemas de informação.'
              : 'Looking for my first full-time role in AI, data engineering, and enterprise information systems.'}
          </p>
          <p className="text-base text-ink-muted leading-relaxed">
            {lang === 'pt'
              ? 'Disponibilidade presencial, híbrida ou 100% remota em Portugal ou internacionalmente.'
              : 'Available for on-site, hybrid, or remote positions in Portugal or globally.'}
          </p>
        </div>

        {/* Contact links and direct actions */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4">
          <a
            href="mailto:danielsilva.eng.pt@gmail.com"
            className="inline-flex items-center justify-center px-6 h-11 bg-process text-white rounded-node font-medium text-sm hover:opacity-95 transition-opacity duration-standard shadow-sm"
          >
            {lang === 'pt' ? 'Enviar email' : 'Send email'}
          </a>

          <a
            href={
              lang === 'pt'
                ? './assets/cv/Daniel_Silva_CV_PT.pdf'
                : './assets/cv/Daniel_Silva_CV_EN.pdf'
            }
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 h-11 border-[1.5px] border-ink text-ink bg-transparent rounded-node font-medium text-sm hover:bg-wash transition-colors duration-standard"
          >
            {lang === 'pt' ? 'Descarregar CV' : 'Download CV'}
          </a>

          <a
            href="https://github.com/danielsilvaengpt"
            target="_blank"
            rel="noreferrer"
            className="text-process underline underline-offset-4 font-medium text-base hover:text-ink transition-colors duration-standard"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/daniel-silva-eng-pt/"
            target="_blank"
            rel="noreferrer"
            className="text-process underline underline-offset-4 font-medium text-base hover:text-ink transition-colors duration-standard"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
