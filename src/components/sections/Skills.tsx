import React from 'react'
import { useI18n } from '../../hooks/useI18n'
import { SectionProcessNode } from '../ui/SectionProcessNode'

export const Skills: React.FC = () => {
  const { lang } = useI18n()

  const skillGroups = [
    {
      groupPt: 'Dados e IA',
      groupEn: 'Data & AI',
      items: 'Python, SQL, PostgreSQL, pgvector, embeddings, pesquisa híbrida, RAG, pipelines ETL',
    },
    {
      groupPt: 'Sistemas e Processos',
      groupEn: 'Systems & Processes',
      items: 'BPMN, OML, modelação de processos organizacionais, conceitos e fundações de ERP',
    },
    {
      groupPt: 'Backend e Web',
      groupEn: 'Backend & Web',
      items: 'Python (FastAPI), React, TypeScript, PHP, MySQL, SQL Server, APIs REST',
    },
    {
      groupPt: 'Ferramentas & Fluxo',
      groupEn: 'Tools & Workflow',
      items: 'Git, GitHub, Linux, Power BI, Streamlit',
    },
  ]

  return (
    <section id="competencias" className="py-16 sm:py-24 border-b border-rule">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        {/* Section Process Node: Data Registry */}
        <SectionProcessNode
          type="data"
          tag="04 // DATA"
          label={lang === 'pt' ? 'PARÂMETROS TÉCNICOS' : 'TECHNICAL PARAMETERS'}
        />

        <div className="max-w-prose mb-10">
          <h2 className="font-condensed font-semibold text-3xl sm:text-4xl text-ink tracking-tight mb-2">
            {lang === 'pt' ? 'Competências' : 'Skills'}
          </h2>
          <p className="text-base text-ink-muted leading-relaxed">
            {lang === 'pt'
              ? 'Agrupadas pelo que faço e utilizo na construção de sistemas, sem gráficos de percentagem arbitrários.'
              : 'Organized by practical capabilities applied in engineering systems, free of arbitrary percentage bars.'}
          </p>
        </div>

        <div className="border-t border-rule divide-y divide-rule font-sans">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="py-5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline hover:bg-wash/50 transition-colors duration-standard px-3 -mx-3">
              <div className="md:col-span-4 font-semibold text-ink text-base">
                {lang === 'pt' ? group.groupPt : group.groupEn}
              </div>
              <div className="md:col-span-8 text-ink-muted text-base leading-relaxed">
                {group.items}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
