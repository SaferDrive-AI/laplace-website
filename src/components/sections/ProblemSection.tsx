import { HelpCircle, AlertTriangle, Building2, Plane, Warehouse, Car, Layers } from 'lucide-react'
import { motion } from 'framer-motion'
import { PROBLEM } from '../../lib/constants'
import { SectionWrapper } from '../ui/SectionWrapper'
import { GlowCard } from '../ui/GlowCard'

const verticals = [
  { icon: Building2, label: 'City' },
  { icon: Plane, label: 'Airport' },
  { icon: Warehouse, label: 'Warehouse' },
  { icon: Car, label: 'AV' },
]

export function ProblemSection() {
  return (
    <SectionWrapper id="problem">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-teal text-xs font-bold tracking-[0.3em] uppercase mb-4">
          {PROBLEM.label}
        </p>
        <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight text-ink mb-6">
          {PROBLEM.headline}
        </h2>
        <p className="text-ink-muted text-lg leading-relaxed">{PROBLEM.body}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-24">
        <GlowCard accent="teal">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-teal-lighter flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-5 h-5 text-teal" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-ink">{PROBLEM.knownCard.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{PROBLEM.knownCard.description}</p>
            </div>
          </div>
        </GlowCard>

        <GlowCard accent="red">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-danger-light flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-danger" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-ink">{PROBLEM.unknownCard.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{PROBLEM.unknownCard.description}</p>
            </div>
          </div>
        </GlowCard>
      </div>

      <div className="max-w-2xl mx-auto">
        <p className="text-center text-ink-faint text-xs font-bold tracking-[0.2em] uppercase mb-10">
          {PROBLEM.verticalsLabel}
        </p>
        <div className="flex items-center justify-center gap-6 md:gap-10">
          {verticals.map((v, i) => (
            <motion.div
              key={v.label}
              initial={{ y: 10 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.3 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border border-ink/8 flex items-center justify-center">
                <v.icon className="w-6 h-6 text-ink-faint" />
              </div>
              <span className="text-[10px] text-ink-faint tracking-wide">{v.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center my-5">
          <div className="w-px h-10 bg-gradient-to-b from-ink/8 to-teal/30" />
        </div>

        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 rounded-full bg-teal flex items-center justify-center shadow-xl shadow-teal/15">
            <Layers className="w-7 h-7 text-white" />
          </div>
          <p className="text-teal text-xs font-bold tracking-[0.2em] uppercase mt-3">{PROBLEM.brandLabel}</p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
