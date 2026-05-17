import { motion } from 'framer-motion'
import { WHY_NOW } from '../../lib/constants'
import { SectionWrapper } from '../ui/SectionWrapper'

export function WhyNowSection() {
  return (
    <SectionWrapper id="why-now">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-teal text-xs font-bold tracking-[0.3em] uppercase mb-4">
          {WHY_NOW.label}
        </p>
        <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight text-ink">
          {WHY_NOW.headline}
        </h2>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
        {WHY_NOW.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="text-center bg-white border border-teal/10 rounded-2xl p-8"
          >
            <p className="font-serif text-5xl md:text-6xl text-teal italic mb-3">{stat.value}</p>
            <p className="text-ink-muted text-sm leading-snug">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <p className="text-ink-muted text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center">
        {WHY_NOW.body}
      </p>
    </SectionWrapper>
  )
}
