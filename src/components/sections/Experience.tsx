import React from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { SectionLabel } from '../ui/SectionLabel'
import { Tag } from '../ui/Tag'
import { useI18n } from '../../hooks/useI18n'
import { EXPERIENCES } from '../../data/experience'
import { MapPin, Calendar, Building2 } from 'lucide-react'

export const Experience: React.FC = () => {
  const { lang } = useI18n()
  const ref = React.useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -16 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="experience"
      ref={ref}
      className="max-w-6xl mx-auto px-6 py-28 border-t border-border select-none"
    >
      <SectionLabel index="02" label={lang === 'pt' ? 'Experiência' : 'Experience'} />

      <div className="mb-14 max-w-2xl">
        <p className="font-mono text-xs sm:text-sm text-text-secondary">
          {lang === 'pt'
            ? 'Percurso prático consolidado através de 4 estágios com forte incidência em Engenharia de IA, desenvolvimento backend e automação industrial.'
            : 'Track record built across 4 specialized internships focusing on AI Engineering, backend system architecture, and industrial automation.'}
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative border-l border-border ml-3 sm:ml-4 space-y-12 sm:space-y-16"
      >
        {EXPERIENCES.map((exp) => {
          const role = lang === 'pt' ? exp.rolePt : exp.roleEn
          const period = lang === 'pt' ? exp.periodPt : exp.periodEn
          const tasks = lang === 'pt' ? exp.tasksPt : exp.tasksEn

          return (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative pl-6 sm:pl-8 group"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-border border-2 border-bg group-hover:bg-accent group-hover:scale-125 transition-all duration-300" />

              <div className="flex flex-col gap-3">
                {/* Header: Role and Company info */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-text-primary group-hover:text-accent transition-colors">
                    {role}
                  </h3>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-text-tertiary">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{period}</span>
                  </div>
                </div>

                {/* Subtitle: Company, Location, Type */}
                <div className="flex flex-wrap items-center gap-y-1 gap-x-3 font-mono text-xs text-text-secondary">
                  <span className="flex items-center gap-1 text-text-primary font-medium">
                    <Building2 className="w-3.5 h-3.5 text-text-tertiary" />
                    {exp.company}
                  </span>
                  <span className="text-border">·</span>
                  <span className="flex items-center gap-1 text-text-tertiary">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </span>
                </div>

                {/* Task bullets */}
                <ul className="mt-2 space-y-2 font-mono text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {tasks.map((task, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2.5">
                      <span className="text-text-tertiary mt-1 select-none">―</span>
                      <span className="flex-1">{task}</span>
                    </li>
                  ))}
                </ul>

                {/* Technology Pills */}
                <div className="pt-3 flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
