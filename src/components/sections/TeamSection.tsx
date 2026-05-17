import { DollarSign, TrendingUp, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'
import { TEAM } from '../../lib/constants'
import { SectionWrapper } from '../ui/SectionWrapper'
import { GlowCard } from '../ui/GlowCard'

const statIcons = { DollarSign, TrendingUp, BookOpen }

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .slice(0, 2)
    .join('')
}

export function TeamSection() {
  return (
    <SectionWrapper id="team">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-teal text-xs font-bold tracking-[0.3em] uppercase mb-4">
          {TEAM.label}
        </p>
        <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight text-ink">
          {TEAM.headline}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
        {TEAM.founders.map((founder, i) => (
          <motion.div
            key={founder.name}
            initial={{ y: 16 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <GlowCard className="h-full">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-teal flex items-center justify-center flex-shrink-0 shadow-sm shadow-teal/10">
                  <span className="font-serif text-xl tracking-tight text-white">
                    {initials(founder.name)}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-ink">{founder.name}</h3>
                  <p className="text-teal text-[11px] font-bold uppercase tracking-[0.18em] mb-3">{founder.role}</p>
                  <p className="text-ink-muted text-sm leading-relaxed">{founder.bio}</p>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {TEAM.stats.map((stat, i) => {
          const Icon = statIcons[stat.icon]
          return (
            <motion.div
              key={stat.label}
              initial={{ y: 12 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="text-center"
            >
              <div className="w-10 h-10 rounded-full bg-teal-lighter flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5 text-teal" />
              </div>
              <p className="font-serif text-4xl md:text-5xl text-teal italic">{stat.value}</p>
              <p className="text-ink-muted text-sm mt-2">{stat.label}</p>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
