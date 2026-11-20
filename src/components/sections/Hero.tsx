import React from 'react'
import { useI18n } from '../../hooks/useI18n'
import { BpmnDiagram } from '../ui/BpmnDiagram'

export const Hero: React.FC = () => {
  const { lang } = useI18n()

  return (
    <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-border-subtle relative">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        {/* Status Chip / Badge */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-border-subtle bg-dark-surface/90 text-xs font-mono text-text-secondary mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{lang === 'pt' ? 'DISPONÍVEL PARA CONTRATAÇÃO // AVEIRO, PT' : 'AVAILABLE FOR WORK // AVEIRO, PT'}</span>
        </div>

        {/* Massive Luxury Heading */}
        <div className="max-w-3xl mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 leading-[1.08]">
            Daniel Silva
          </h1>
          <p className="text-xl sm:text-2xl text-brand-accent font-medium mb-3">
            {lang === 'pt'
              ? 'Engenheiro Informático Júnior — IA, Sistemas de Informação & SAP'
              : 'Junior Computer Engineer — AI, Information Systems & SAP'}
          </p>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-prose">
            {lang === 'pt'
              ? 'Construo sistemas que ligam dados, processos de negócio e inteligência artificial. Do rigor industrial ao desenvolvimento backend e orquestração agêntica.'
              : 'Engineering systems connecting enterprise data, business processes, and artificial intelligence. From industrial precision to backend pipelines and agent orchestration.'}
          </p>
        </div>

        {/* Actions Row */}
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <a
            href="#projetos"
            className="inline-flex items-center justify-center px-6 h-11 bg-brand-primary text-white font-medium text-sm rounded-lg hover:bg-blue-600 hover:shadow-glow transition-all duration-200"
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
            className="inline-flex items-center justify-center px-6 h-11 border border-border-hover text-text-primary bg-dark-surface/80 rounded-lg font-medium text-sm hover:border-brand-accent hover:text-white transition-all duration-200"
          >
            {lang === 'pt' ? 'Descarregar CV' : 'Download CV'}
          </a>

          <a
            href="mailto:danielsilva.eng.pt@gmail.com"
            className="text-xs font-mono text-text-secondary hover:text-brand-accent transition-colors pl-2"
          >
            danielsilva.eng.pt@gmail.com
          </a>
        </div>

        {/* BPMN Pipeline Diagram in Dark Enterprise Luxury */}
        <BpmnDiagram />
      </div>
    </section>
  )
}
