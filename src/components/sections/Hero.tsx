import React from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowDown, FileDown } from 'lucide-react'
import { Button } from '../ui/Button'
import { AgentThoughtStream } from '../ui/AgentThoughtStream'
import { useI18n } from '../../hooks/useI18n'

export const Hero: React.FC = () => {
  const { lang } = useI18n()
  const shouldReduceMotion = useReducedMotion()

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.15,
        ease: 'easeOut',
      },
    }),
  }

  const scrollToAbout = () => {
    const el = document.getElementById('about')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-[100svh] relative flex flex-col justify-between max-w-6xl mx-auto px-6 pt-32 pb-12 select-none"
    >
      <div className="flex-1 flex flex-col justify-center max-w-4xl">
        {/* Pre-title mono badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-text-tertiary mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>DANIEL SILVA — AI & AGENTIC SYSTEMS 2026</span>
        </motion.div>

        {/* Large Name Display */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-text-primary mb-6 leading-[0.9]"
        >
          Daniel Silva
        </motion.h1>

        {/* Professional Role */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-mono text-sm sm:text-base md:text-lg text-text-secondary mb-3 font-normal"
        >
          {lang === 'pt'
            ? 'Engenheiro Informático Júnior — IA, Agentes Autónomos & Dados'
            : 'Junior Computer Engineer — AI, Autonomous Agents & Data'}
        </motion.p>

        {/* Tagline */}
        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-mono text-xs sm:text-sm text-text-tertiary italic mb-8"
        >
          {lang === 'pt' ? '“Do metal aos dados.”' : '“From metal to data.”'}
        </motion.p>

        {/* Autonomous Agent Thought Stream (HUD) */}
        <motion.div
          custom={3.5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-10"
        >
          <AgentThoughtStream />
        </motion.div>

        {/* Actions Row */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href={
              lang === 'pt'
                ? './assets/cv/Daniel_Silva_CV_PT.pdf'
                : './assets/cv/Daniel_Silva_CV_EN.pdf'
            }
            target="_blank"
            rel="noreferrer"
            className="focus:outline-none"
          >
            <Button
              variant="solid"
              size="md"
              icon={<FileDown className="w-4 h-4 ml-1" />}
            >
              {lang === 'pt' ? 'Descarregar CV' : 'Download CV'}
            </Button>
          </a>

          <Button
            variant="outline"
            size="md"
            onClick={scrollToAbout}
            icon={<ArrowDown className="w-3.5 h-3.5 ml-1" />}
          >
            {lang === 'pt' ? 'Ver Percurso' : 'Explore Work'}
          </Button>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        custom={5}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="pt-12 flex items-center justify-between text-xs font-mono text-text-tertiary"
      >
        <button
          onClick={scrollToAbout}
          className="flex items-center gap-2 hover:text-text-primary transition-colors focus:outline-none group"
        >
          <div className="w-4 h-[1px] bg-border group-hover:bg-text-primary transition-colors" />
          <span>{lang === 'pt' ? 'Rolar para baixo' : 'Scroll down'}</span>
          <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
        </button>

        <div className="hidden sm:block">
          <span>Aveiro, Portugal · 40.6405° N, 8.6538° W</span>
        </div>
      </motion.div>
    </section>
  )
}

