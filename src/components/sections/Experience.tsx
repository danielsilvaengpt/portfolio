import React from 'react'
import { useI18n } from '../../hooks/useI18n'
import { SpotlightCard } from '../ui/SpotlightCard'

export const Experience: React.FC = () => {
  const { lang } = useI18n()

  const entries = [
    {
      period: '2026',
      titlePt: 'Estágio Curricular — Meight',
      titleEn: 'Engineering Internship — Meight',
      badge: 'IA & DADOS',
      descPt: 'Integração na equipa de dados no projeto de Pesquisa Híbrida (Hybrid Search com pgvector) e conceção de ferramenta interna de onboarding operacional de clientes.',
      descEn: 'Collaborated on hybrid search architecture (sparse + dense retrieval on pgvector) and developed internal customer onboarding workflow tooling.',
    },
    {
      period: '2023–2026',
      titlePt: 'Licenciatura em Engenharia Informática — ISEC',
      titleEn: 'BSc in Computer Science & Engineering — ISEC',
      badge: 'SISTEMAS DE INFORMAÇÃO',
      descPt: 'Ramo de Sistemas de Informação. Formação em arquitetura de bases de dados, modelação analítica, inteligência artificial e engenharia de software.',
      descEn: 'Information Systems branch. Focus on relational and vector database architectures, analytics pipelines, artificial intelligence, and software engineering.',
    },
    {
      period: '2023',
      titlePt: 'Medalha de Excelência — WorldSkills Portugal',
      titleEn: 'Medal of Excellence — WorldSkills Portugal',
      badge: 'MÉRITO NACIONAL',
      descPt: 'Distinção de elevado mérito técnico na categoria de Desenvolvimento de Aplicações Móveis no Campeonato Nacional das Profissões (WorldSkills Portugal 2023).',
      descEn: 'National distinction in Mobile Application Development at WorldSkills Portugal Skills Competition 2023.',
    },
    {
      period: '2023',
      titlePt: 'Estágio Internacional Erasmus+ — IWS (Málaga, Espanha)',
      titleEn: 'Erasmus+ International Internship — IWS (Málaga, Spain)',
      badge: 'FULL-STACK WEB',
      descPt: 'Desenvolvimento individual da aplicação web WaterWise Calculator com arquitetura assíncrona PHP e base de dados MySQL.',
      descEn: 'Solo engineering of WaterWise web calculator application using asynchronous PHP and MySQL.',
    },
    {
      period: '2021–2022',
      titlePt: 'Estágios Profissionais — OPTIMA',
      titleEn: 'Professional Internships — OPTIMA',
      badge: 'AUTOMAÇÃO & CNC',
      descPt: 'Desenvolvimento do software Python CNC Modelling Controller e suporte à infraestrutura de controlo industrial.',
      descEn: 'Development of Python CNC Modelling Controller software and industrial infrastructure support.',
    },
  ]

  return (
    <section id="experiencia" className="py-20 sm:py-28 border-b border-border-subtle relative">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <div className="max-w-prose mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brand-accent mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
            <span>02 // TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            {lang === 'pt' ? 'Experiência & Formação' : 'Experience & Education'}
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            {lang === 'pt'
              ? 'Percurso consolidado através de 4 estágios profissionais, formação em Sistemas de Informação e distinções de excelência técnica.'
              : 'Track record built across 4 specialized internships, academic degree in Information Systems, and competitive engineering honors.'}
          </p>
        </div>

        {/* Timeline as Specular List Cards */}
        <div className="flex flex-col gap-4">
          {entries.map((item, idx) => (
            <SpotlightCard key={idx} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-baseline">
                <div className="md:col-span-3 flex md:flex-col justify-between items-baseline md:items-start gap-2">
                  <span className="font-mono text-sm font-semibold text-brand-accent">
                    {item.period}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-border-subtle bg-dark-elevated text-text-secondary">
                    {item.badge}
                  </span>
                </div>

                <div className="md:col-span-9">
                  <h3 className="text-lg font-bold text-white mb-1.5 tracking-tight">
                    {lang === 'pt' ? item.titlePt : item.titleEn}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed max-w-prose">
                    {lang === 'pt' ? item.descPt : item.descEn}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}
