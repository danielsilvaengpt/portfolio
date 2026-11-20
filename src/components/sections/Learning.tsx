import React from 'react'
import { useI18n } from '../../hooks/useI18n'
import { SpotlightCard } from '../ui/SpotlightCard'

export const Learning: React.FC = () => {
  const { lang } = useI18n()

  const items = [
    {
      domain: 'SAP (ERP)',
      statePt: 'Planeado / início de estudo',
      stateEn: 'Planned / initial study phase',
      badgeClass: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      descPt: 'Fundamentos de ERP e módulos de negócio (ecossistema SAP S/4HANA e processos de integração empresarial).',
      descEn: 'ERP fundamentals and core enterprise modules (SAP S/4HANA ecosystem and business process integration).',
    },
    {
      domain: 'IA Agêntica & Multi-Agent',
      statePt: 'Em estudo e aplicação prática',
      stateEn: 'Active study & implementation',
      badgeClass: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      descPt: 'Agentes autónomos e brigadas multi-agente (CrewAI / LangGraph) que usam ferramentas para raciocinar sobre fluxos de dados e documentos.',
      descEn: 'Autonomous agents and multi-agent systems (CrewAI / LangGraph) executing tool-augmented workflows over enterprise data.',
    },
    {
      domain: 'Engenharia de Dados em Escala',
      statePt: 'Em consolidação contínua',
      stateEn: 'Ongoing consolidation',
      badgeClass: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
      descPt: 'Pipelines analíticos avançados, modelação dimensional Snowflake e otimização de consultas vetoriais de alta dimensão.',
      descEn: 'Advanced analytical data pipelines, Snowflake dimensional modeling, and high-dimensional vector similarity retrieval.',
    },
  ]

  return (
    <section id="aprender" className="py-20 sm:py-28 border-b border-border-subtle relative">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <div className="max-w-prose mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brand-accent mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
            <span>04 // ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            {lang === 'pt' ? 'Aprender & Progressão Futura' : 'Learning & Future Progression'}
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            {lang === 'pt'
              ? 'Roteiro de aprendizagem e especialização estratégica em estado real, sem inflacionar senioridade.'
              : 'Transparent skill progression roadmap demonstrating deliberate focus on enterprise systems and applied AI.'}
          </p>
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <SpotlightCard key={idx} className="p-6 flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full border text-[11px] font-mono font-medium ${item.badgeClass}`}>
                    {lang === 'pt' ? item.statePt : item.stateEn}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                  {item.domain}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed">
                  {lang === 'pt' ? item.descPt : item.descEn}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}
