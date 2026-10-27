import React, { useEffect, useState, useRef } from 'react'

interface ScrambleTextProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p' | 'div'
  speed?: number
  triggerOnScroll?: boolean
}

const GLYPHS = '01_#$<>[]/\\=+-*~XYZ{}ΔΛΞΠΣΩ'

export const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  className = '',
  as: Component = 'span',
  speed = 28,
  triggerOnScroll = true,
}) => {
  const [displayText, setDisplayText] = useState(text)
  const [isScrambling, setIsScrambling] = useState(false)
  const elementRef = useRef<HTMLElement>(null)
  const hasTriggeredRef = useRef(false)

  const triggerScramble = () => {
    if (isScrambling) return
    setIsScrambling(true)

    let iteration = 0
    const maxIterations = text.length

    const interval = setInterval(() => {
      setDisplayText(() => {
        return text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            if (index < iteration) {
              return text[index]
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          })
          .join('')
      })

      iteration += 1 / 2

      if (iteration >= maxIterations) {
        clearInterval(interval)
        setDisplayText(text)
        setIsScrambling(false)
      }
    }, speed)
  }

  useEffect(() => {
    setDisplayText(text)
    hasTriggeredRef.current = false
  }, [text])

  useEffect(() => {
    if (!triggerOnScroll || !elementRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggeredRef.current) {
            hasTriggeredRef.current = true
            triggerScramble()
          }
        })
      },
      { threshold: 0.25 }
    )

    observer.observe(elementRef.current)
    return () => observer.disconnect()
  }, [text, triggerOnScroll])

  return (
    <Component
      ref={elementRef as any}
      onMouseEnter={triggerScramble}
      className={`cursor-default inline-block select-none ${className}`}
    >
      {displayText}
    </Component>
  )
}
