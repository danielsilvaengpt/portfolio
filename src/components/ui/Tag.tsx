import React from 'react'
import { cn } from '../../lib/utils'

interface TagProps {
  children: React.ReactNode
  className?: string
}

export const Tag: React.FC<TagProps> = ({ children, className }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-xs font-mono text-text-secondary border border-border rounded-md bg-transparent hover:border-border-hover transition-colors duration-200 select-none",
        className
      )}
    >
      {children}
    </span>
  )
}
