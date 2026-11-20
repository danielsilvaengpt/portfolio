import React from 'react'
import { useI18n } from '../../hooks/useI18n'

export const Learning: React.FC = () => {
  const { lang } = useI18n()

  const items = [
    {
      domain: 'SAP',
      statePt: 'Planeado / início de estudo',
      stateEn: 'Planned / initial study phase',
      descPt: 'Fundamentos de ERP e módulos de negócio (ecossistema SAP S/4HANA e processos de integração empresarial).',
      descEn: 'ERP fundamentals and core enterprise modules (SAP S/4HANA ecosystem and business process integration).',
    },
    {
      domain: 'IA',
      statePt: 'Em estudo e aplicação prática',
      stateEn: 'Active study & implementation',
      descPt: 'Agentes autónomos e brigadas multi-agente (CrewAI / LangGraph) que usam ferramentas para raciocinar sobre fluxos de dados e documentos.',
      descEn: 'Autonomous agents and multi-agent systems (CrewAI / LangGraph) executing tool-augmented workflows over enterprise data.',
    },
    {
      domain: 'Dados',
      statePt: 'Em consolidação',
      stateEn: 'In consolidation',
      descPt: 'Engenharia de dados analítica, modelação dimensional avançada e otimização de consultas vetoriais em escala.',
      descEn: 'Analytical data engineering, advanced dimensional modeling, and large-scale vector similarity retrieval optimization.',
    },
  ]

  return (
    <section id="aprender" className="py-16 sm:py-24 border-b border-rule">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <div className="max-w-prose mb-10">
          <h2 className="font-condensed font-semibold text-3xl sm:text-4xl text-ink tracking-tight mb-2">
            {lang === 'pt' ? 'A aprender agora' : 'Currently learning'}
          </h2>
          <p className="text-base text-ink-muted leading-relaxed">
            {lang === 'pt'
              ? 'Roteiro de aprendizagem e expansão de competências em estado real, sem inflacionar experiência.'
              : 'Learning roadmap and ongoing skill development tracked transparently without inflating seniority.'}
          </p>
        </div>

        <div className="border-t border-rule divide-y divide-rule">
          {items.map((item, idx) => (
            <div key={idx} className="py-5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline">
              <div className="md:col-span-3 font-semibold text-ink text-base">
                {item.domain}
              </div>
              <div className="md:col-span-3 font-mono text-xs text-process">
                {lang === 'pt' ? item.statePt : item.stateEn}
              </div>
              <div className="md:col-span-6 text-ink-muted text-base leading-relaxed">
                {lang === 'pt' ? item.descPt : item.descEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
