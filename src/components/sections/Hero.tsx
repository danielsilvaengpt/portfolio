import React from 'react'
import { useI18n } from '../../hooks/useI18n'
import { BpmnDiagram } from '../ui/BpmnDiagram'
import { SectionProcessNode } from '../ui/SectionProcessNode'

export const Hero: React.FC = () => {
  const { lang } = useI18n()

  return (
    <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-rule">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        {/* Section Process Node: Start */}
        <SectionProcessNode
          type="start"
          tag="01 // EXEC"
          label={lang === 'pt' ? 'INÍCIO DO PROCESSO' : 'PROCESS START'}
        />

        {/* Name and Persona */}
        <div className="max-w-prose mb-8">
          <h1 className="font-condensed font-semibold text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight mb-3">
            Daniel Silva
          </h1>
          <p className="text-xl sm:text-2xl text-ink font-normal mb-2 leading-snug">
            {lang === 'pt' ? 'Engenheiro informático júnior.' : 'Junior computer engineer.'}
          </p>
          <p className="text-lg sm:text-xl text-ink-muted leading-relaxed">
            {lang === 'pt'
              ? 'Construo sistemas que ligam dados, processos e inteligência artificial.'
              : 'I build systems connecting data, business processes, and artificial intelligence.'}
          </p>
        </div>

        {/* Action Row */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12">
          <a
            href="#projetos"
            className="inline-flex items-center justify-center px-6 h-11 bg-process text-white rounded-node font-medium text-sm hover:opacity-95 transition-opacity duration-standard shadow-sm"
          >
            {lang === 'pt' ? 'Ver projetos' : 'Explore projects'}
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
            href="mailto:danielsilva.eng.pt@gmail.com"
            className="text-sm font-mono text-ink-muted hover:text-process underline underline-offset-4 transition-colors duration-standard"
          >
            danielsilva.eng.pt@gmail.com
          </a>
        </div>

        {/* The Memorable BPMN Real Architecture Diagram */}
        <BpmnDiagram />
      </div>
    </section>
  )
}
