import { BrainCircuit, Globe, Repeat } from 'lucide-react'
import { motion } from 'framer-motion'
import { HOW_IT_WORKS } from '../../lib/constants'
import { SectionWrapper } from '../ui/SectionWrapper'
import { GlowCard } from '../ui/GlowCard'

const icons = { BrainCircuit, Globe, Repeat }

export function HowItWorksSection() {
  return (
    <SectionWrapper id="technology" className="bg-cream-dark">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-teal text-xs font-bold tracking-[0.3em] uppercase mb-4">
          {HOW_IT_WORKS.label}
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-ink">
          {HOW_IT_WORKS.headline}
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {HOW_IT_WORKS.cards.map((card, i) => {
          const Icon = icons[card.icon]
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              <GlowCard className="h-full">
                <div className="w-11 h-11 rounded-full bg-teal-lighter flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-teal" />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-ink">{card.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{card.description}</p>
              </GlowCard>
            </motion.div>
          )
        })}
      </div>

      <p className="mt-14 text-center text-ink-faint text-sm">
        Three methods, one goal — <span className="text-teal font-medium">a trained safety instinct.</span>
      </p>
    </SectionWrapper>
  )
}
