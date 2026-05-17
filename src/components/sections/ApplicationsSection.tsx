import { motion } from 'framer-motion'
import { APPLICATIONS } from '../../lib/constants'
import { SectionWrapper } from '../ui/SectionWrapper'
import { GlowCard } from '../ui/GlowCard'
import { DiagramImage } from '../ui/DiagramImage'

const diagramNames: Record<string, string> = {
  Car: 'apps-av',
  Building2: 'apps-city',
  Warehouse: 'apps-warehouse',
  Plane: 'apps-airport',
}

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
        {APPLICATIONS.cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ y: 16 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
          >
            <GlowCard className="h-full !p-6">
              <div className="mb-4 -mx-2 -mt-2 rounded-xl overflow-hidden">
                <DiagramImage name={diagramNames[card.icon]} alt={card.title} />
              </div>
              <h3 className="font-semibold text-base mb-2 text-ink">{card.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{card.description}</p>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
