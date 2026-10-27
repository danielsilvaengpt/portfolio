import React from 'react'
import { cn } from '../../lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'ghost' | 'solid'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'outline', size = 'md', children, icon, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-mono transition-all duration-200 select-none disabled:opacity-50 disabled:pointer-events-none active:translate-y-[1px]"

    const variants = {
      outline:
        "border border-border text-text-primary bg-transparent hover:border-border-hover hover:bg-bg-subtle",
      ghost:
        "text-text-secondary hover:text-text-primary hover:bg-bg-subtle",
      solid:
        "bg-accent text-bg hover:opacity-90 font-medium",
    }

    const sizes = {
      sm: "text-xs px-3 py-1.5 rounded-sm",
      md: "text-xs md:text-sm px-4 py-2 rounded-sm",
      lg: "text-sm md:text-base px-6 py-3 rounded-sm",
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
        {icon && <span className="inline-flex items-center">{icon}</span>}
      </button>
    )
  }
)

Button.displayName = 'Button'
