import { BookOpen, Globe, Car, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { CREDENTIALS } from '../../lib/constants'
import { SectionWrapper } from '../ui/SectionWrapper'
import { GlowCard } from '../ui/GlowCard'
import { AnimatedCounter } from '../ui/AnimatedCounter'

const icons = { BookOpen, Globe, Car, Award }

export function CredentialsSection() {
  return (
    <SectionWrapper id="team" className="bg-cream-dark">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-teal text-xs font-bold tracking-[0.3em] uppercase mb-4">
          {CREDENTIALS.label}
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-ink">
          {CREDENTIALS.headline}
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto mb-16">
        {CREDENTIALS.items.map((item, i) => {
          const Icon = icons[item.icon]
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <GlowCard className="text-center h-full !p-6">
                <div className="w-11 h-11 rounded-full bg-teal-lighter flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-teal" />
                </div>
                <h3 className="font-semibold text-sm mb-1 text-ink">{item.title}</h3>
                <p className="text-ink-faint text-xs">{item.description}</p>
              </GlowCard>
            </motion.div>
          )
        })}
      </div>

      <div className="text-center">
        {CREDENTIALS.stats.map((stat) => (
          <div key={stat.label}>
            <AnimatedCounter end={stat.value} suffix={stat.suffix} />
            <p className="text-ink-faint text-sm mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
