import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ROADMAP } from '../../lib/constants'
import { SectionWrapper } from '../ui/SectionWrapper'

export function RoadmapSection() {
  return (
    <SectionWrapper id="roadmap">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-teal text-xs font-bold tracking-[0.3em] uppercase mb-4">
          {ROADMAP.label}
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-ink">
          {ROADMAP.headline}
        </h2>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch gap-4 md:gap-0">
        {ROADMAP.phases.map((phase, i) => (
          <div key={phase.title} className="flex items-stretch flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`flex-1 rounded-2xl p-6 md:p-8 border ${
                i === 0
                  ? 'bg-white border-teal/15 shadow-sm'
                  : 'bg-white/60 border-ink/5'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold mb-5 ${
                i === 0 ? 'bg-teal text-white' : 'bg-cream-dark text-ink-faint'
              }`}>
                {i + 1}
              </div>
              <p className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-2 ${
                i === 0 ? 'text-teal' : 'text-ink-faint'
              }`}>
                {phase.status}
              </p>
              <h3 className="font-semibold text-lg mb-2 text-ink">{phase.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{phase.description}</p>
            </motion.div>

            {i < ROADMAP.phases.length - 1 && (
              <div className="hidden md:flex items-center px-3">
                <ArrowRight className="w-4 h-4 text-ink-faint/40" />
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
