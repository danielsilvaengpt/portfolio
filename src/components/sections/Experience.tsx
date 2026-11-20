import React from 'react'
import { useI18n } from '../../hooks/useI18n'

export const Experience: React.FC = () => {
  const { lang } = useI18n()

  const entries = [
    {
      period: '2026',
      titlePt: 'Estágio curricular — Meight',
      titleEn: 'Engineering Internship — Meight',
      descPt: 'Integração na equipa de dados no projeto de Pesquisa Híbrida (Hybrid Search com pgvector) e conceção de ferramenta interna de onboarding operacional.',
      descEn: 'Collaborated on hybrid search architecture (sparse + dense retrieval on pgvector) and developed internal customer onboarding workflow tooling.',
    },
    {
      period: '2023–2026',
      titlePt: 'Licenciatura em Engenharia Informática — ISEC',
      titleEn: 'BSc in Computer Science & Engineering — ISEC',
      descPt: 'Ramo de Sistemas de Informação. Formação em arquitetura de bases de dados, modelação analítica, inteligência artificial e engenharia de software.',
      descEn: 'Information Systems branch. Focus on relational and vector database architectures, analytics pipelines, artificial intelligence, and software engineering.',
    },
    {
      period: '2023',
      titlePt: 'Medalha de Excelência — WorldSkills Portugal',
      titleEn: 'Medal of Excellence — WorldSkills Portugal',
      descPt: 'Distinção na categoria de Desenvolvimento de Aplicações Móveis no Campeonato Nacional das Profissões (WorldSkills Portugal 2023).',
      descEn: 'National distinction in Mobile Application Development at WorldSkills Portugal Skills Competition 2023.',
    },
    {
      period: '2023',
      titlePt: 'Estágio Internacional Erasmus+ — IWS (Málaga, Espanha)',
      titleEn: 'Erasmus+ International Internship — IWS (Málaga, Spain)',
      descPt: 'Desenvolvimento autónomo da aplicação web WaterWise Calculator com arquitetura PHP e MySQL.',
      descEn: 'Solo engineering of WaterWise web calculator application using PHP and MySQL.',
    },
    {
      period: '2021–2022',
      titlePt: 'Estágios Profissionais — OPTIMA',
      titleEn: 'Professional Internships — OPTIMA',
      descPt: 'Desenvolvimento do software Python CNC Modelling Controller e manutenção de sistemas informáticos industriais.',
      descEn: 'Development of Python CNC Modelling Controller software and industrial infrastructure support.',
    },
  ]

  return (
    <section id="experiencia" className="py-16 sm:py-24 border-b border-rule">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <div className="max-w-prose mb-10">
          <h2 className="font-condensed font-semibold text-3xl sm:text-4xl text-ink tracking-tight mb-2">
            {lang === 'pt' ? 'Experiência e formação' : 'Experience and education'}
          </h2>
          <p className="text-base text-ink-muted leading-relaxed">
            {lang === 'pt'
              ? 'Sequência cronológica de estágios profissionais, formação académica e distinções técnicas.'
              : 'Chronological timeline of professional internships, academic qualifications, and technical honors.'}
          </p>
        </div>

        <div className="border-t border-rule divide-y divide-rule">
          {entries.map((item, idx) => (
            <div key={idx} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8">
              <div className="md:col-span-3 font-mono text-sm text-ink-muted tabular-nums">
                {item.period}
              </div>
              <div className="md:col-span-9">
                <h3 className="font-sans font-semibold text-lg text-ink mb-1">
                  {lang === 'pt' ? item.titlePt : item.titleEn}
                </h3>
                <p className="text-base text-ink-muted leading-relaxed max-w-prose">
                  {lang === 'pt' ? item.descPt : item.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
