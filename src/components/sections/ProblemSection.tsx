import { X, Check, Bot, Car, Factory, PersonStanding, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import { PROBLEM } from '../../lib/constants'
import { SectionWrapper } from '../ui/SectionWrapper'
import { GlowCard } from '../ui/GlowCard'

const robotTypes = [
  { icon: PersonStanding, label: 'Humanoid' },
  { icon: Car, label: 'AV' },
  { icon: Factory, label: 'Industrial' },
  { icon: Bot, label: 'Service' },
]

export function ProblemSection() {
  return (
    <SectionWrapper id="vision">
      {/* Headline */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-teal text-xs font-bold tracking-[0.3em] uppercase mb-4">
          {PROBLEM.label}
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-ink mb-6">
          {PROBLEM.headline}
        </h2>
        <p className="text-ink-muted text-lg leading-relaxed">{PROBLEM.body}</p>
      </div>

      {/* Rule vs Instinct */}
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-24">
        <GlowCard accent="red">
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-full bg-danger-light flex items-center justify-center flex-shrink-0">
              <X className="w-4 h-4 text-danger" />
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2 text-ink">{PROBLEM.ruleCard.title}</h3>
              <pre className="text-xs text-ink-muted font-mono bg-cream rounded-lg p-3 mb-2 overflow-x-auto">{PROBLEM.ruleCard.code}</pre>
              <p className="text-danger text-xs">{PROBLEM.ruleCard.problem}</p>
            </div>
          </div>
        </GlowCard>

        <GlowCard accent="teal">
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-full bg-teal-lighter flex items-center justify-center flex-shrink-0">
              <Check className="w-4 h-4 text-teal" />
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2 text-ink">{PROBLEM.instinctCard.title}</h3>
              <p className="text-ink-muted text-xs mb-2">{PROBLEM.instinctCard.description}</p>
              <p className="text-teal text-xs font-medium">{PROBLEM.instinctCard.advantage}</p>
            </div>
          </div>
        </GlowCard>
      </div>

      {/* One instinct, all robots */}
      <div className="max-w-2xl mx-auto">
        <p className="text-center text-ink-faint text-xs font-bold tracking-[0.2em] uppercase mb-10">
          One safety instinct across every robot
        </p>
        <div className="flex items-center justify-center gap-6 md:gap-10">
          {robotTypes.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border border-ink/8 flex items-center justify-center">
                <r.icon className="w-6 h-6 text-ink-faint" />
              </div>
              <span className="text-[10px] text-ink-faint tracking-wide">{r.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center my-5">
          <div className="w-px h-10 bg-gradient-to-b from-ink/8 to-teal/30" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 rounded-full bg-teal flex items-center justify-center shadow-xl shadow-teal/15">
            <Shield className="w-7 h-7 text-white" />
          </div>
          <p className="text-teal text-xs font-bold tracking-[0.2em] uppercase mt-3">INCHOR</p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
