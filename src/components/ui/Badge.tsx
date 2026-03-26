import { cn } from '../../lib/cn'

interface BadgeProps {
  variant?: 'teal' | 'red' | 'muted'
  children: React.ReactNode
}

const variants = {
  teal: 'bg-teal-lighter text-teal border-teal/10',
  red: 'bg-danger-light text-danger border-danger/10',
  muted: 'bg-cream-dark text-ink-muted border-ink/5',
}

export function Badge({ variant = 'teal', children }: BadgeProps) {
  return (
    <span className={cn('inline-flex items-center px-3 py-1 text-xs font-mono font-medium rounded-full border', variants[variant])}>
      {children}
    </span>
  )
}
