import { Car, Building2, Warehouse, Plane } from 'lucide-react'
import { motion } from 'framer-motion'
import { APPLICATIONS } from '../../lib/constants'
import { SectionWrapper } from '../ui/SectionWrapper'
import { GlowCard } from '../ui/GlowCard'

const icons = { Car, Building2, Warehouse, Plane }

export function ApplicationsSection() {
  return (
    <SectionWrapper id="applications" className="bg-cream-dark">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-teal text-xs font-bold tracking-[0.3em] uppercase mb-4">
          {APPLICATIONS.label}
        </p>
        <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight text-ink">
          {APPLICATIONS.headline}
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {APPLICATIONS.cards.map((card, i) => {
          const Icon = icons[card.icon]
          return (
            <motion.div
              key={card.title}
              initial={{ y: 16 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <GlowCard className="h-full !p-6">
                <div className="w-11 h-11 rounded-full bg-teal-lighter flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-teal" />
                </div>
                <h3 className="font-semibold text-base mb-2 text-ink">{card.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{card.description}</p>
              </GlowCard>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
