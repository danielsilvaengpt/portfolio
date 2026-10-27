/**
 * SectionTransition — Cinematic horizontal rule between sections.
 * Renders an animated scrim + glyph that "travels" across the divider
 * on scroll into view, giving a continuous inter-section flow effect.
 */
import React from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionTransitionProps {
  glyph?: string
  label?: string
}

export const SectionTransition: React.FC<SectionTransitionProps> = ({
  glyph = '✦',
  label,
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <div
      ref={ref}
      className="relative max-w-6xl mx-auto px-6 flex items-center gap-4 py-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Left line — expands from left */}
      <motion.div
        className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-border to-border"
        initial={{ scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Centre glyph — pops in with scale */}
      <motion.div
        className="flex items-center gap-2 font-mono text-[10px] text-text-tertiary tracking-widest uppercase whitespace-nowrap"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-text-tertiary/60">{glyph}</span>
        {label && <span>{label}</span>}
      </motion.div>

      {/* Right line — expands from right */}
      <motion.div
        className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-border to-border"
        initial={{ scaleX: 0, originX: 1 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  )
}
