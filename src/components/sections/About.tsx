import React from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { SectionLabel } from '../ui/SectionLabel'
import { MaskedReveal } from '../ui/MaskedReveal'
import { useI18n } from '../../hooks/useI18n'
import { Award, MapPin, Briefcase, GraduationCap, Languages } from 'lucide-react'

export const About: React.FC = () => {
  const { lang } = useI18n()
  const ref = React.useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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

  const factoids = [
    {
      icon: <MapPin className="w-3.5 h-3.5 text-text-tertiary" />,
      label: lang === 'pt' ? 'LOCALIZAÇÃO' : 'LOCATION',
      value: lang === 'pt' ? 'Aveiro, Portugal' : 'Aveiro, Portugal',
    },
    {
      icon: <Briefcase className="w-3.5 h-3.5 text-text-tertiary" />,
      label: lang === 'pt' ? 'ESTADO' : 'STATUS',
      value:
        lang === 'pt'
          ? 'Disponível para novos desafios'
          : 'Open to work / Available',
    },
    {
      icon: <GraduationCap className="w-3.5 h-3.5 text-text-tertiary" />,
      label: lang === 'pt' ? 'FORMAÇÃO' : 'DEGREE',
      value:
        lang === 'pt'
          ? 'Licenciatura Engenharia Informática · ISEC'
          : 'BSc Computer Engineering · ISEC',
    },
    {
      icon: <Award className="w-3.5 h-3.5 text-text-tertiary" />,
      label: lang === 'pt' ? 'DISTINÇÃO' : 'HONOR',
      value:
        lang === 'pt'
          ? 'Medalha de Excelência · WorldSkills 2023'
          : 'Medal of Excellence · WorldSkills 2023',
    },
    {
      icon: <Languages className="w-3.5 h-3.5 text-text-tertiary" />,
      label: lang === 'pt' ? 'IDIOMAS' : 'LANGUAGES',
      value: lang === 'pt' ? 'Português (Nativo) · Inglês' : 'Portuguese (Native) · English',
    },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="max-w-6xl mx-auto px-6 py-28 border-t border-border"
    >
      <SectionLabel index="01" label={lang === 'pt' ? 'Sobre mim' : 'About'} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
      >
        {/* Left Column: Editorial Pull-Quote & Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <MaskedReveal delay={0.1} duration={0.9}>
          <motion.blockquote
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-medium tracking-tight text-text-primary leading-snug"
          >
            {lang === 'pt' ? (
              <>
                “Do trabalho de precisão mecânica com máquinas CNC ao universo da{' '}
                <span className="text-text-primary underline decoration-border-hover decoration-1 underline-offset-4">
                  Inteligência Artificial e Engenharia de Dados
                </span>
                .”
              </>
            ) : (
              <>
                “From mechanical precision work with CNC machines to the universe of{' '}
                <span className="text-text-primary underline decoration-border-hover decoration-1 underline-offset-4">
                  Artificial Intelligence and Data Engineering
                </span>
                .”
              </>
            )}
          </motion.blockquote>
          </MaskedReveal>

          <motion.div
            variants={itemVariants}
            className="font-mono text-xs sm:text-sm text-text-secondary space-y-4 leading-relaxed"
          >
            <p>
              {lang === 'pt'
                ? 'Concluí a Licenciatura em Engenharia Informática no ISEC (ramo de Sistemas de Informação). Ao longo do meu percurso, passei por 4 estágios profissionais — incluindo uma experiência internacional Erasmus+ em Espanha — e conquistei a Medalha de Excelência em Desenvolvimento de Aplicações Móveis no WorldSkills Portugal 2023.'
                : 'I completed my Degree in Computer Engineering at ISEC (Information Systems branch). Throughout my journey, I completed 4 professional internships — including an international Erasmus+ experience in Spain — and was awarded the Medal of Excellence in Mobile Application Development at WorldSkills Portugal 2023.'}
            </p>
            <p>
              {lang === 'pt'
                ? 'A minha experiência inicial em ambientes industriais ensinou-me o valor do rigor e do pensamento sistemático. Hoje foco essa capacidade em arquiteturas RAG, pipelines de dados, modelação analítica e desenvolvimento backend robusto em Python.'
                : 'My background in industrial environments taught me the value of rigor and systematic thinking. Today, I channel that discipline into RAG architectures, data pipelines, analytical modeling, and robust backend development in Python.'}
            </p>
          </motion.div>

          {/* Quick Factoid List */}
          <motion.div
            variants={itemVariants}
            className="pt-6 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {factoids.map((f, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-text-tertiary font-medium">
                  {f.icon}
                  {f.label}
                </span>
                <span className="font-mono text-xs text-text-secondary">
                  {f.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Minimalist Photo Container */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 flex flex-col items-center lg:items-end"
        >
          <div className="relative group w-full max-w-sm rounded-lg overflow-hidden border border-border bg-bg-subtle p-2">
            <div className="relative aspect-square overflow-hidden rounded">
              <img
                src="./assets/img/daniel.jpg"
                alt="Daniel Silva"
                className="w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
                onError={(e) => {
                  // Fallback if image fails to render
                  ;(e.target as HTMLElement).style.display = 'none'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
            </div>

            <div className="pt-3 pb-1 px-2 flex items-center justify-between font-mono text-[11px] text-text-tertiary">
              <span>FIG. 01 — DANIEL SILVA</span>
              <span>AVEIRO · PT</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
