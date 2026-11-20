/**
 * SectionProcessNode — Nó de processo BPMN que encabeça cada secção
 * Renderiza o glifo correto com pulso suave ao entrar em visão
 */
import React from 'react'

export interface SectionProcessNodeProps {
  type: 'start' | 'task' | 'data' | 'decision' | 'end'
  tag: string
  label: string
}

export const SectionProcessNode: React.FC<SectionProcessNodeProps> = ({
  type,
  tag,
  label,
}) => {
  const renderGlyph = () => {
    switch (type) {
      case 'start':
        return (
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border-2 border-start bg-paper">
            <span className="w-2 h-2 rounded-full bg-start animate-pulse" />
          </span>
        )
      case 'task':
        return (
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-[4px] border-[1.5px] border-ink bg-wash text-[10px] font-mono font-bold text-ink">
            ▭
          </span>
        )
      case 'data':
        return (
          <span className="inline-flex items-center justify-center w-5 h-5 border-[1.5px] border-ink bg-paper text-[10px] font-mono text-ink">
            ⊞
          </span>
        )
      case 'decision':
        return (
          <span className="inline-flex items-center justify-center w-5 h-5 border-[1.5px] border-ink bg-decision text-[10px] font-mono font-bold text-ink rotate-45">
            <span className="-rotate-45">◇</span>
          </span>
        )
      case 'end':
        return (
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border-[3px] border-end bg-paper">
            <span className="w-1.5 h-1.5 rounded-full bg-end" />
          </span>
        )
    }
  }

  return (
    <div className="flex items-center gap-3 mb-4 select-none">
      {renderGlyph()}
      <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">
        {tag}
      </span>
      <span className="text-rule">―</span>
      <span className="font-mono text-xs text-process font-medium">
        {label}
      </span>
    </div>
  )
}
