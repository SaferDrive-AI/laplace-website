import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { cn } from '../../lib/cn'

interface SectionWrapperProps {
  id?: string
  children: React.ReactNode
  className?: string
}

export function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id={id} className={cn('py-24 md:py-32', className)}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-6xl mx-auto px-6"
      >
        {children}
      </motion.div>
    </section>
  )
}
