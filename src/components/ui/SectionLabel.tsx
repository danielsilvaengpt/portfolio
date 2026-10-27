import React from 'react'
import { cn } from '../../lib/utils'

interface SectionLabelProps {
  index: string
  label: string
  className?: string
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ index, label, className }) => {
  return (
    <div className={cn("flex items-center gap-3 mb-10 w-full select-none", className)}>
      <span className="font-mono text-xs text-text-tertiary">[{index}]</span>
      <span className="font-mono text-xs uppercase tracking-widest text-text-secondary font-medium">
        {label}
      </span>
      <div className="flex-1 h-[1px] bg-border ml-2" />
    </div>
  )
}
