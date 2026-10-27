import React, { useEffect, useRef, useState } from 'react'

export const CinematicOverlay: React.FC = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [scrollProgress, setScrollProgress] = useState(0)
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = -100
    let mouseY = -100
    let trailerX = -100
    let trailerY = -100

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      setCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) })

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      }
    }

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        setScrollProgress(Math.round((window.scrollY / totalScroll) * 100))
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Smooth inertia for trailing ring
    let frameId: number
    const loop = () => {
      trailerX += (mouseX - trailerX) * 0.12
      trailerY += (mouseY - trailerY) * 0.12

      if (trailerRef.current) {
        trailerRef.current.style.transform = `translate3d(${trailerX}px, ${trailerY}px, 0)`
      }
      frameId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <>
      {/* 1. Subtle 35mm Analog Film Grain Texture */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.035] mix-blend-screen bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* 2. Cinematic Precision Reticle Cursor (Desktop only) */}
      <div
        ref={cursorRef}
        className="hidden lg:block fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-accent pointer-events-none z-50 transition-opacity duration-300"
        aria-hidden="true"
      />
      <div
        ref={trailerRef}
        className="hidden lg:block fixed top-0 left-0 -ml-4 -mt-4 w-8 h-8 rounded-full border border-accent/40 pointer-events-none z-50 transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* 3. Global HUD Fixed Telemetry (Corner Framing) */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2 font-mono text-[10px] text-text-tertiary select-none pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
        <span>SYS.VECTORS // X:{coords.x} Y:{coords.y}</span>
      </div>

      <div className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-3 font-mono text-[10px] text-text-tertiary select-none pointer-events-none">
        <span>FRAME PROGRESS</span>
        <div className="w-16 h-1 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        <span>{scrollProgress}%</span>
      </div>
    </>
  )
}
