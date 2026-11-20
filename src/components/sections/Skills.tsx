import React from 'react'
import { useI18n } from '../../hooks/useI18n'
import { SpotlightCard } from '../ui/SpotlightCard'

export const Skills: React.FC = () => {
  const { lang } = useI18n()

  const skillCategories = [
    {
      id: 'data-ai',
      titlePt: 'IA & Engenharia de Dados',
      titleEn: 'AI & Data Engineering',
      badge: 'CORE DOMAIN',
      skills: ['Python', 'SQL', 'PostgreSQL', 'pgvector', 'RAG Architectures', 'Embeddings', 'ETL Pipelines', 'Power BI'],
    },
    {
      id: 'erp-is',
      titlePt: 'Sistemas & Processos (ERP)',
      titleEn: 'Systems & Processes (ERP)',
      badge: 'ARCHITECTURE',
      skills: ['BPMN 2.0', 'OML / UML', 'Process Modeling', 'ERP Foundations', 'Requirements Engineering', 'SAP (início de estudo)'],
    },
    {
      id: 'backend',
      titlePt: 'Backend & Web Development',
      titleEn: 'Backend & Web Systems',
      badge: 'ENGINEERING',
      skills: ['FastAPI', 'React 19', 'TypeScript', 'REST APIs', 'PHP', 'MySQL', 'Streamlit'],
    },
    {
      id: 'tools',
      titlePt: 'Ferramentas & Fluxo',
      titleEn: 'DevOps & Tooling',
      badge: 'ECOSYSTEM',
      skills: ['Git & GitHub', 'Linux Shell', 'Docker Basics', 'CAD (Fusion 360)', 'CNC Interfaces'],
    },
  ]

  return (
    <section id="competencias" className="py-20 sm:py-28 border-b border-border-subtle relative">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <div className="max-w-prose mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brand-accent mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
            <span>03 // PROFICIENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            {lang === 'pt' ? 'Competências Técnicas' : 'Technical Proficiencies'}
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            {lang === 'pt'
              ? 'Competências práticas aplicadas na construção de sistemas robustos, sem barras arbitrárias de percentagem.'
              : 'Grounded engineering proficiencies applied in mission-critical applications, free of arbitrary progress bars.'}
          </p>
        </div>

        {/* 4 Cards Grid with Specular Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <SpotlightCard key={cat.id} className="p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 font-mono text-xs">
                  <span className="text-brand-accent font-semibold tracking-wider">
                    {cat.badge}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-blue-500/40" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                  {lang === 'pt' ? cat.titlePt : cat.titleEn}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-dark-elevated/70 border border-border-subtle text-text-primary hover:border-brand-accent hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}
