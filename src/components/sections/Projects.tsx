import React, { useState } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { SectionLabel } from '../ui/SectionLabel'
import { Tag } from '../ui/Tag'
import { useI18n } from '../../hooks/useI18n'
import { PROJECTS, type ProjectItem } from '../../data/projects'
import { ArrowUpRight, GitBranch, Layers, ExternalLink } from 'lucide-react'

// Custom GitHub icon
function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export const Projects: React.FC = () => {
  const { lang } = useI18n()
  const ref = React.useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [expandedFlow, setExpandedFlow] = useState<string | null>(null)

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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  const toggleFlow = (id: string) => {
    setExpandedFlow(expandedFlow === id ? null : id)
  }

  return (
    <section
      id="projects"
      ref={ref}
      className="max-w-6xl mx-auto px-6 py-28 border-t border-border select-none"
    >
      <SectionLabel index="03" label={lang === 'pt' ? 'Projetos' : 'Projects'} />

      <div className="mb-14 max-w-2xl">
        <p className="font-mono text-xs sm:text-sm text-text-secondary leading-relaxed">
          {lang === 'pt'
            ? 'Seleção de 5 projetos desenvolvidos entre sistemas autónomos de IA, engenharia analítica de dados e automação industrial.'
            : 'Curated index of 5 engineering projects spanning autonomous AI retrieval, data warehousing, deep learning, and industrial automation.'}
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {PROJECTS.map((proj: ProjectItem, index: number) => {
          const category = lang === 'pt' ? proj.categoryPt : proj.categoryEn
          const tagline = lang === 'pt' ? proj.taglinePt : proj.taglineEn
          const description = lang === 'pt' ? proj.descriptionPt : proj.descriptionEn
          const flow = lang === 'pt' ? proj.flowPt : proj.flowEn
          const type = lang === 'pt' ? proj.typePt : proj.typeEn
          const isFlowOpen = expandedFlow === proj.id

          return (
            <motion.article
              key={proj.id}
              variants={cardVariants}
              className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-lg border border-border bg-bg-subtle hover:border-border-hover hover:bg-bg-elevated transition-all duration-300"
            >
              <div>
                {/* Header row: Index & Category */}
                <div className="flex items-center justify-between gap-3 mb-4 font-mono text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="text-text-tertiary">0{index + 1} //</span>
                    <span className="text-text-secondary font-medium tracking-wider uppercase">
                      {category}
                    </span>
                  </div>
                  <span className="text-[10px] text-text-tertiary hidden sm:inline">
                    {type}
                  </span>
                </div>

                {/* Title and Tagline */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary group-hover:text-accent transition-colors mb-2">
                  {proj.title}
                </h3>
                <p className="font-mono text-xs text-text-tertiary italic mb-4">
                  {tagline}
                </p>

                {/* Narrative Description */}
                <p className="font-mono text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                  {description}
                </p>

                {/* Flow Diagram Drawer (if available) */}
                {flow && (
                  <div className="mb-6">
                    <button
                      onClick={() => toggleFlow(proj.id)}
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] text-text-tertiary hover:text-text-primary transition-colors focus:outline-none"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>
                        {isFlowOpen
                          ? lang === 'pt'
                            ? 'Ocultar fluxo de dados'
                            : 'Hide data pipeline'
                          : lang === 'pt'
                          ? 'Ver fluxo de dados / arquitetura'
                          : 'Inspect data pipeline / flow'}
                      </span>
                    </button>

                    {isFlowOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 p-3 rounded border border-border bg-bg font-mono text-[11px] text-text-secondary leading-relaxed"
                      >
                        <div className="text-[10px] uppercase text-text-tertiary mb-1 flex items-center gap-1">
                          <GitBranch className="w-3 h-3" /> PIPELINE:
                        </div>
                        {flow}
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.stack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>

              {/* Footer Links */}
              <div className="pt-4 border-t border-border flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-4">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors group/link"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  )}

                  {proj.demoUrl && (
                    <a
                      href={proj.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-text-primary hover:text-accent font-medium transition-colors group/demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{lang === 'pt' ? 'Demonstração' : 'Live Demo'}</span>
                      <ArrowUpRight className="w-3 h-3 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>

                {!proj.demoUrl && !proj.githubUrl && (
                  <span className="text-text-tertiary text-[11px]">
                    {lang === 'pt' ? 'Código Privado' : 'Proprietary'}
                  </span>
                )}
              </div>
            </motion.article>
          )
        })}
      </motion.div>
    </section>
  )
}
