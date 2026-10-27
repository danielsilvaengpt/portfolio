import React from 'react'
import { motion, useInView, type Variants } from 'framer-motion'

interface MaskedRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down'
}

export const MaskedReveal: React.FC<MaskedRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  direction = 'up',
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  const variants: Variants = {
    hidden: {
      y: direction === 'up' ? '110%' : '-110%',
      opacity: 0,
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Apple/Linear smooth exponential cubic-bezier
      },
    },
  }

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {children}
      </motion.div>
    </div>
  )
}
