import React from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { SectionLabel } from '../ui/SectionLabel'
import { SpotlightCard } from '../ui/SpotlightCard'
import { useI18n } from '../../hooks/useI18n'
import { EDUCATION_ITEMS, AWARDS } from '../../data/education'
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react'

export const Education: React.FC = () => {
  const { lang } = useI18n()
  const ref = React.useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="education"
      ref={ref}
      className="max-w-6xl mx-auto px-6 py-28 border-t border-border select-none"
    >
      <SectionLabel index="05" label={lang === 'pt' ? 'Educação & Distinções' : 'Education & Honors'} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
      >
        {/* Left Column: Academic Background (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-2 font-mono text-xs text-text-tertiary uppercase tracking-widest mb-6">
            <GraduationCap className="w-4 h-4 text-text-tertiary" />
            <span>{lang === 'pt' ? 'FORMAÇÃO ACADÉMICA' : 'ACADEMIC PATHWAY'}</span>
          </div>

          <div className="space-y-8">
            {EDUCATION_ITEMS.map((edu) => {
              const degree = lang === 'pt' ? edu.degreePt : edu.degreeEn
              const branch = lang === 'pt' ? edu.branchPt : edu.branchEn
              const details = lang === 'pt' ? edu.detailsPt : edu.detailsEn

              return (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                >
                  <SpotlightCard className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-text-primary">
                      {degree}
                    </h3>
                    <div className="flex items-center gap-1.5 font-mono text-xs text-text-tertiary">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-text-secondary mb-3">
                    <span className="text-text-primary font-medium">{edu.institution}</span>
                    {branch && (
                      <>
                        <span className="text-border">·</span>
                        <span className="text-text-tertiary">{branch}</span>
                      </>
                    )}
                    <span className="text-border">·</span>
                    <span className="text-text-tertiary flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </span>
                  </div>

                  <ul className="space-y-1.5 font-mono text-xs text-text-secondary leading-relaxed pt-2 border-t border-border/60">
                    {details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-text-tertiary mt-0.5 select-none">―</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  </SpotlightCard>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Right Column: Distinction / WorldSkills Callout Box (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-text-tertiary uppercase tracking-widest mb-6">
            <Award className="w-4 h-4 text-text-tertiary" />
            <span>{lang === 'pt' ? 'RECONHECIMENTO & MÉRITO' : 'NATIONAL MERIT & HONORS'}</span>
          </div>

          {AWARDS.map((award) => {
            const title = lang === 'pt' ? award.titlePt : award.titleEn
            const competition = lang === 'pt' ? award.competitionPt : award.competitionEn
            const category = lang === 'pt' ? award.categoryPt : award.categoryEn
            const level = lang === 'pt' ? award.levelPt : award.levelEn
            const description = lang === 'pt' ? award.descriptionPt : award.descriptionEn

            return (
              <motion.div
                key={award.id}
                variants={itemVariants}
              >
                <SpotlightCard className="p-6 sm:p-8" spotlightColor="rgba(255,255,255,0.1)">
                {/* Subtle top indicator */}
                <div className="flex items-center justify-between font-mono text-[11px] mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-border text-text-primary bg-bg text-[10px] font-bold tracking-wider uppercase">
                    WORLDSKILLS {award.year}
                  </span>
                  <span className="text-text-tertiary">{level}</span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-text-primary mb-2 flex items-center gap-2 transition-colors">
                  <span>🏅</span>
                  <span>{title}</span>
                </h3>

                <p className="font-mono text-xs text-text-primary font-medium mb-1">
                  {category}
                </p>

                <p className="font-mono text-[11px] text-text-tertiary mb-4">
                  {competition}
                </p>

                <p className="font-mono text-xs text-text-secondary leading-relaxed pt-3 border-t border-border">
                  {description}
                </p>

                <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between font-mono text-[10px] text-text-tertiary">
                  <span>EXCELLENCE IN CODING</span>
                  <span>NATIONAL FINALIST</span>
                </div>
                </SpotlightCard>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
