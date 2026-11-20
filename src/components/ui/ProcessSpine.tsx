/**
 * ProcessSpine — Trilho Vertical Interativo estilo BPMN / Pipeline
 * Percorre o portfólio de ponta a ponta, reagindo ao scroll:
 * - Linha de fundo em 1px solid var(--rule)
 * - Linha de progresso preenchida a var(--process) via scroll tracking
 * - Partícula de dados contínua que viaja pelo trilho
 */
import React, { useEffect, useState } from 'react'

export const ProcessSpine: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const current = window.scrollY / totalHeight
        setScrollProgress(Math.min(Math.max(current, 0), 1))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="hidden lg:block fixed left-6 xl:left-12 top-0 bottom-0 w-8 z-30 pointer-events-none select-none"
      aria-hidden="true"
    >
      <div className="relative w-full h-full flex flex-col items-center">
        {/* Trilho de fundo (linha fina) */}
        <div className="absolute top-20 bottom-12 w-[1px] bg-rule" />

        {/* Linha preenchida com o progresso do scroll */}
        <div
          className="absolute top-20 w-[2px] bg-process transition-all duration-75"
          style={{ height: `calc(${scrollProgress * 100}% - 5rem)` }}
        />

        {/* Partícula de Dados Viva que viaja pela linha */}
        <div
          className="absolute w-2.5 h-2.5 rounded-full bg-process shadow-sm transition-all duration-100 ease-out flex items-center justify-center"
          style={{
            top: `calc(5rem + ${scrollProgress} * (100% - 8rem))`,
            transform: 'translateY(-50%)',
          }}
        >
          <span className="w-1 h-1 rounded-full bg-white animate-ping" />
        </div>
      </div>
    </div>
  )
}
