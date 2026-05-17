import { Fragment } from 'react'
import { Globe, Database, Sparkles, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { ENGINE } from '../../lib/constants'
import { SectionWrapper } from '../ui/SectionWrapper'
import { GlowCard } from '../ui/GlowCard'
import {
  BuildWorldDiagram,
  LearnAgentsDiagram,
  RollOutDiagram,
} from '../diagrams/EngineDiagrams'

const phaseIcons = { Globe, Database, Sparkles }
const cardDiagrams = [BuildWorldDiagram, LearnAgentsDiagram, RollOutDiagram]

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
          const Diagram = cardDiagrams[i]
          const step = String(i + 1).padStart(2, '0')
          return (
            <motion.div
              key={card.title}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <GlowCard className="h-full flex flex-col">
                <div className="mb-5 text-teal">
                  <Diagram />
                </div>
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-semibold text-lg text-ink">{card.title}</h3>
                  <span className="font-serif text-2xl italic text-teal/35 tabular-nums leading-none">
                    {step}
                  </span>
                </div>
                <p className="text-ink-muted text-sm leading-relaxed mb-5">{card.description}</p>
                <ul className="mt-auto space-y-1.5 pt-4 border-t border-teal/10">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-ink-muted">
                      <span className="text-coral mt-[3px] leading-none">·</span>
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </motion.div>
          )
        })}
      </div>

      <div className="mt-20 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-teal/15" />
          <p className="text-teal text-[11px] font-bold tracking-[0.3em] uppercase">
            {ENGINE.pipelineLabel}
          </p>
          <div className="flex-1 h-px bg-teal/15" />
        </div>

        <div className="grid gap-5 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
          {ENGINE.pipeline.map((phase, i) => {
            const Icon = phaseIcons[phase.icon]
            return (
              <Fragment key={phase.title}>
                <motion.div
                  initial={{ y: 12 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="bg-white/60 border border-teal/10 rounded-xl p-5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-teal flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-semibold text-sm text-ink">{phase.title}</h4>
                  </div>
                  <p className="text-ink-muted text-xs leading-relaxed">{phase.body}</p>
                </motion.div>
                {i < ENGINE.pipeline.length - 1 && (
                  <div
                    className="hidden md:flex items-center justify-center text-teal/40"
                    aria-hidden="true"
                  >
                    <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                )}
              </Fragment>
            )
          })}
        </div>
      </div>

      <p className="mt-14 text-center text-ink-muted text-sm max-w-2xl mx-auto">
        {ENGINE.footer}
      </p>
    </SectionWrapper>
  )
}
