import React from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { SectionLabel } from '../ui/SectionLabel'
import { SpotlightCard } from '../ui/SpotlightCard'
import { useI18n } from '../../hooks/useI18n'
import { SKILL_CATEGORIES } from '../../data/skills'
import { Terminal, Database, Cpu, Wrench } from 'lucide-react'

export const Skills: React.FC = () => {
  const { lang } = useI18n()
  const ref = React.useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const categoryIcons: Record<string, React.ReactNode> = {
    languages: <Terminal className="w-3.5 h-3.5 text-text-tertiary" />,
    'data-ai': <Cpu className="w-3.5 h-3.5 text-text-tertiary" />,
    databases: <Database className="w-3.5 h-3.5 text-text-tertiary" />,
    'tools-frameworks': <Wrench className="w-3.5 h-3.5 text-text-tertiary" />,
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.08,
      },
    },
  }

  const columnVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="skills"
      ref={ref}
      className="max-w-6xl mx-auto px-6 py-28 border-t border-border select-none"
    >
      <SectionLabel index="04" label={lang === 'pt' ? 'Competências Técnicas' : 'Skills & Stack'} />

      <div className="mb-14 max-w-2xl">
        <p className="font-mono text-xs sm:text-sm text-text-secondary leading-relaxed">
          {lang === 'pt'
            ? 'Competências e ferramentas de engenharia organizadas por especialidade. Foco rigoroso em precisão, arquiteturas escaláveis e sem artifícios visuais arbitrários.'
            : 'Technical proficiencies organized by domain. Grounded in computational precision, robust engineering practices, and zero arbitrary progress percentages.'}
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
      >
        {SKILL_CATEGORIES.map((cat) => {
          const label = lang === 'pt' ? cat.labelPt : cat.labelEn
          const description = lang === 'pt' ? cat.descriptionPt : cat.descriptionEn

          return (
            <motion.div
              key={cat.id}
              variants={columnVariants}
              className="h-full"
            >
              <SpotlightCard className="p-6 h-full flex flex-col">
                {/* Category Header */}
                <div className="mb-5 pb-3 border-b border-border flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    {categoryIcons[cat.id]}
                    <h3 className="font-mono text-xs font-bold tracking-widest text-text-primary uppercase">
                      {label}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-text-tertiary">
                    {description}
                  </span>
                </div>

                {/* Skills List */}
                <ul className="flex flex-col gap-2.5 font-mono text-xs text-text-secondary">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between group/skill hover:text-text-primary transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-border group-hover/skill:bg-accent transition-colors" />
                        <span className={skill.isPrimary ? 'text-text-primary font-medium' : ''}>
                          {skill.name}
                        </span>
                      </div>

                      {skill.isPrimary && (
                        <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded border border-border/80 text-text-tertiary group-hover/skill:border-border-hover transition-colors">
                          Core
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
