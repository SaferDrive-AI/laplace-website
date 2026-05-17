import { cn } from '../../lib/cn'

interface SectionWrapperProps {
  id?: string
  children: React.ReactNode
  className?: string
}

export function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      <div className="max-w-6xl mx-auto px-6">
        {children}
      </div>
    </section>
  )
}
