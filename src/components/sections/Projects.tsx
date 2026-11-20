import React from 'react'
import { useI18n } from '../../hooks/useI18n'
import { PROJECTS } from '../../data/projects'
import { SpotlightCard } from '../ui/SpotlightCard'

export const Projects: React.FC = () => {
  const { lang } = useI18n()

  return (
    <section id="projetos" className="py-20 sm:py-28 border-b border-border-subtle relative">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <div className="max-w-prose mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brand-accent mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
            <span>01 // PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            {lang === 'pt' ? 'Projetos Selecionados' : 'Selected Projects'}
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            {lang === 'pt'
              ? 'Registo de sistemas desenvolvidos entre IA agêntica, arquiteturas RAG, modelação de processos (ERP), análise de dados e automação industrial.'
              : 'Production-ready systems spanning agentic AI, RAG architectures, business process modeling (ERP), data warehousing, and CNC automation.'}
          </p>
        </div>

        {/* Specular Spotlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((proj, idx) => {
            const desc = lang === 'pt' ? proj.descriptionPt : proj.descriptionEn

            return (
              <SpotlightCard key={proj.id} className="p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  {/* Top metadata row */}
                  <div className="flex items-center justify-between gap-2 mb-4 font-mono text-xs">
                    <span className="text-brand-accent">
                      0{idx + 1} // {proj.tech.split(',')[0]}
                    </span>
                    <span className="text-text-tertiary">
                      {proj.period}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-brand-accent transition-colors">
                    {proj.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {desc}
                  </p>
                </div>

                {/* Bottom tech tags & links */}
                <div className="pt-4 border-t border-border-subtle flex items-center justify-between font-mono text-xs">
                  <span className="text-text-tertiary text-[11px] truncate max-w-[200px]">
                    {proj.tech}
                  </span>

                  <div className="flex items-center gap-3">
                    {proj.links.map((link) => {
                      const label = lang === 'pt' ? link.labelPt : link.labelEn
                      return (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-brand-accent hover:text-white font-sans text-xs font-semibold flex items-center gap-1 transition-colors"
                        >
                          <span>{label}</span>
                          <span className="text-[10px]">↗</span>
                        </a>
                      )
                    })}
                  </div>
                </div>
              </SpotlightCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
