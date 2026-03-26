import { cn } from '../../lib/cn'

interface GlowCardProps {
  accent?: 'teal' | 'red'
  children: React.ReactNode
  className?: string
}

const accents = {
  teal: 'border-teal/10 hover:border-teal/25 hover:shadow-lg hover:shadow-teal/5',
  red: 'border-danger/10 hover:border-danger/25 hover:shadow-lg hover:shadow-danger/5',
}

export function GlowCard({ accent = 'teal', children, className }: GlowCardProps) {
  return (
    <div className={cn('bg-white border rounded-2xl p-6 md:p-8 transition-all duration-500', accents[accent], className)}>
      {children}
    </div>
  )
}
