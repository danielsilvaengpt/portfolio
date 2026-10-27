/**
 * ParallaxTicker — A continuously scrolling horizontal marquee of
 * monospace tech keywords. Appears in the Hero section as a cinematic
 * ambient information layer, reinforcing the AI/Agentic Systems theme.
 */
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const TICKER_ITEMS = [
  'AUTONOMOUS AGENTS',
  '◈',
  'RAG ARCHITECTURES',
  '◈',
  'DATA PIPELINES',
  '◈',
  'LLM ORCHESTRATION',
  '◈',
  'PYTHON · LANGCHAIN',
  '◈',
  'VECTOR DATABASES',
  '◈',
  'AI ENGINEERING',
  '◈',
  'MULTI-AGENT SYSTEMS',
  '◈',
  'OPENAI · GEMINI',
  '◈',
  'DUCKDB · POSTGRESQL',
  '◈',
]

// Duplicate to create seamless loop
const ITEMS = [...TICKER_ITEMS, ...TICKER_ITEMS]

interface ParallaxTickerProps {
  direction?: 'left' | 'right'
  className?: string
}

export const ParallaxTicker: React.FC<ParallaxTickerProps> = ({
  direction = 'left',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Parallax offset — shifts ticker horizontally as user scrolls
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'left' ? ['0%', '-8%'] : ['-8%', '0%']
  )

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden w-full py-3 ${className}`}
      aria-hidden="true"
    >
      {/* Fade masks on left & right edges */}
      <div className="absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-bg to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-bg to-transparent pointer-events-none" />

      <motion.div
        style={{ x }}
        className="flex items-center gap-8 whitespace-nowrap font-mono text-[10px] sm:text-[11px] text-text-tertiary tracking-[0.2em] uppercase"
      >
        {ITEMS.map((item, i) => (
          <span
            key={i}
            className={item === '◈' ? 'text-border text-xs' : 'opacity-60'}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
