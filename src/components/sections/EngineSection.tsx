import { Layers, Network, Workflow } from 'lucide-react'
import { motion } from 'framer-motion'
import { ENGINE } from '../../lib/constants'
import { SectionWrapper } from '../ui/SectionWrapper'
import { GlowCard } from '../ui/GlowCard'

const icons = { Layers, Network, Workflow }

export function EngineSection() {
  return (
    <SectionWrapper id="engine" className="bg-cream-dark">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-teal text-xs font-bold tracking-[0.3em] uppercase mb-4">
          {ENGINE.label}
        </p>
        <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight text-ink">
          {ENGINE.headline}
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {ENGINE.cards.map((card, i) => {
          const Icon = icons[card.icon]
          const step = String(i + 1).padStart(2, '0')
          return (
            <motion.div
              key={card.title}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <GlowCard className="h-full">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-full bg-teal-lighter flex items-center justify-center">
                    <Icon className="w-5 h-5 text-teal" />
                  </div>
                  <span className="font-serif text-2xl italic text-teal/35 tabular-nums leading-none mt-1">
                    {step}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-3 text-ink">{card.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{card.description}</p>
              </GlowCard>
            </motion.div>
          )
        })}
      </div>

      <p className="mt-14 text-center text-ink-muted text-sm max-w-2xl mx-auto">
        {ENGINE.footer}
      </p>
    </SectionWrapper>
  )
}
