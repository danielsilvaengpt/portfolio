import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, FileDown } from 'lucide-react'
import { Button } from '../ui/Button'
import { AgentThoughtStream } from '../ui/AgentThoughtStream'
import { MaskedReveal } from '../ui/MaskedReveal'
import { ParallaxTicker } from '../ui/ParallaxTicker'
import { useI18n } from '../../hooks/useI18n'

export const Hero: React.FC = () => {
  const { lang } = useI18n()
  const shouldReduceMotion = useReducedMotion()

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
        {/* Pre-title mono badge with subtle glow */}
        <MaskedReveal delay={0.1}>
          <div className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-text-tertiary mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>DANIEL SILVA — AI & AGENTIC SYSTEMS 2026</span>
          </div>
        </MaskedReveal>

        {/* Large Name Display with Masked Reveal */}
        <div className="mb-6 leading-[0.9]">
          <MaskedReveal delay={0.2} duration={0.9}>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-text-primary">
              Daniel Silva
            </h1>
          </MaskedReveal>
        </div>

        {/* Professional Role */}
        <div className="mb-3">
          <MaskedReveal delay={0.35}>
            <p className="font-mono text-sm sm:text-base md:text-lg text-text-secondary font-normal">
              {lang === 'pt'
                ? 'Engenheiro Informático Júnior — IA, Agentes Autónomos & Dados'
                : 'Junior Computer Engineer — AI, Autonomous Agents & Data'}
            </p>
          </MaskedReveal>
        </div>

        {/* Tagline */}
        <div className="mb-8">
          <MaskedReveal delay={0.45}>
            <p className="font-mono text-xs sm:text-sm text-text-tertiary italic">
              {lang === 'pt' ? '“Do metal aos dados.”' : '“From metal to data.”'}
            </p>
          </MaskedReveal>
        </div>

        {/* Autonomous Agent Thought Stream (HUD) */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <AgentThoughtStream />
        </motion.div>

        {/* Actions Row */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
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

      {/* Cinematic Ticker — scrolling tech keywords */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.0 }}
        className="-mx-6"
      >
        <ParallaxTicker />
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
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
