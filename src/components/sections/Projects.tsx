import React from 'react'
import { useI18n } from '../../hooks/useI18n'
import { PROJECTS } from '../../data/projects'

export const Projects: React.FC = () => {
  const { lang } = useI18n()

  return (
    <section id="projetos" className="py-16 sm:py-24 border-b border-rule">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <div className="max-w-prose mb-10">
          <h2 className="font-condensed font-semibold text-3xl sm:text-4xl text-ink tracking-tight mb-2">
            {lang === 'pt' ? 'Projetos selecionados' : 'Selected projects'}
          </h2>
          <p className="text-base text-ink-muted leading-relaxed">
            {lang === 'pt'
              ? 'Registo de sistemas desenvolvidos em engenharia de dados, IA aplicada, automação e arquitetura de processos.'
              : 'Documentation records of systems engineered across data pipelines, applied AI, automation, and business process modeling.'}
          </p>
        </div>

        {/* Project table rows — as per spec 6.3 */}
        <div className="border-t border-rule divide-y divide-rule">
          {PROJECTS.map((proj) => {
            const desc = lang === 'pt' ? proj.descriptionPt : proj.descriptionEn

            return (
              <article
                key={proj.id}
                className="py-6 transition-colors duration-standard hover:bg-wash px-3 -mx-3"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline">
                  {/* Left Column (7 cols): Title & Description */}
                  <div className="lg:col-span-7">
                    <h3 className="font-sans font-semibold text-xl text-ink mb-1.5 leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-base text-ink-muted leading-relaxed max-w-prose">
                      {desc}
                    </p>
                  </div>

                  {/* Right Column (5 cols): Tech, Period, Links */}
                  <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col justify-between sm:items-baseline lg:items-start gap-2 font-mono text-sm">
                    <div className="text-ink text-sm">
                      {proj.tech}
                    </div>
                    <div className="text-ink-muted text-xs tabular-nums">
                      {proj.period}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      {proj.links.map((link, idx) => {
                        const label = lang === 'pt' ? link.labelPt : link.labelEn
                        return (
                          <React.Fragment key={link.url}>
                            {idx > 0 && <span className="text-rule">·</span>}
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noreferrer"
                              className="text-process underline underline-offset-4 font-sans text-sm font-medium hover:text-ink transition-colors duration-standard"
                            >
                              {label}
                            </a>
                          </React.Fragment>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
