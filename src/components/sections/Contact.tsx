import React, { useState } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { SectionLabel } from '../ui/SectionLabel'
import { Button } from '../ui/Button'
import { useI18n } from '../../hooks/useI18n'
import { Copy, Check, ArrowUpRight, FileDown, Mail, MapPin } from 'lucide-react'

// Custom SVGs for standard GitHub and LinkedIn icons
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

function LinkedinIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

export const Contact: React.FC = () => {
  const { lang } = useI18n()
  const ref = React.useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [copied, setCopied] = useState(false)

  const email = 'danielsilva.eng.pt@gmail.com'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
      id="contact"
      ref={ref}
      className="max-w-6xl mx-auto px-6 py-28 border-t border-border select-none"
    >
      <SectionLabel index="06" label={lang === 'pt' ? 'Contacto' : 'Contact'} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-3xl space-y-10"
      >
        {/* Availability Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-bg-subtle text-xs font-mono text-text-secondary"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>
            {lang === 'pt'
              ? 'Disponível para novos desafios profissionais'
              : 'Available for immediate hire / new challenges'}
          </span>
        </motion.div>

        {/* Big Editorial Email */}
        <motion.div variants={itemVariants} className="space-y-4">
          <p className="font-mono text-xs uppercase tracking-widest text-text-tertiary">
            {lang === 'pt' ? 'CANAL DIRETO // EMAIL' : 'DIRECT LINE // EMAIL'}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href={`mailto:${email}`}
              className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary hover:text-accent hover:underline underline-offset-8 transition-colors break-all"
            >
              {email}
            </a>

            <button
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded border border-border bg-bg-subtle hover:border-border-hover text-xs font-mono text-text-secondary hover:text-text-primary transition-colors focus:outline-none w-fit"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-accent" />
                  <span>{lang === 'pt' ? 'Copiado' : 'Copied'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{lang === 'pt' ? 'Copiar' : 'Copy'}</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Location & Relocation note */}
        <motion.div
          variants={itemVariants}
          className="font-mono text-xs sm:text-sm text-text-secondary flex flex-wrap items-center gap-x-3 gap-y-1"
        >
          <span className="flex items-center gap-1 text-text-primary">
            <MapPin className="w-3.5 h-3.5 text-text-tertiary" />
            Aveiro, Portugal
          </span>
          <span className="text-border">·</span>
          <span className="text-text-tertiary">
            {lang === 'pt'
              ? 'Disponibilidade presencial, híbrida ou 100% remota'
              : 'Available on-site, hybrid, or remote globally'}
          </span>
        </motion.div>

        {/* Action Row: Socials & CV Download */}
        <motion.div
          variants={itemVariants}
          className="pt-6 border-t border-border flex flex-wrap items-center justify-between gap-6 font-mono text-xs"
        >
          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/danielsilvaengpt"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors group/soc"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 group-hover/soc:translate-x-0.5 group-hover/soc:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://www.linkedin.com/in/daniel-silva-eng-pt/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors group/soc"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 group-hover/soc:translate-x-0.5 group-hover/soc:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors group/soc"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
              <ArrowUpRight className="w-3 h-3 group-hover/soc:translate-x-0.5 group-hover/soc:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* CV Downloads */}
          <div className="flex items-center gap-2.5">
            <a
              href="./assets/cv/Daniel_Silva_CV_PT.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                icon={<FileDown className="w-3.5 h-3.5" />}
              >
                CV (PT)
              </Button>
            </a>
            <a
              href="./assets/cv/Daniel_Silva_CV_EN.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                icon={<FileDown className="w-3.5 h-3.5" />}
              >
                CV (EN)
              </Button>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
