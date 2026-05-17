import {
  ShieldAlert,
  Activity,
  BarChart3,
  Repeat,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { AV } from '../../lib/constants'
import { SectionWrapper } from '../ui/SectionWrapper'
import { GlowCard } from '../ui/GlowCard'
import {
  LanePolicyDiagram,
  PedestrianDiagram,
  EdgeCaseDiagram,
  FleetDiagram,
} from '../diagrams/UseCaseDiagrams'

const cardDiagrams = {
  Route: LanePolicyDiagram,
  Footprints: PedestrianDiagram,
  AlertOctagon: EdgeCaseDiagram,
  Share2: FleetDiagram,
}
const outputIcons = { ShieldAlert, Activity, BarChart3, Repeat }

export function AVSection() {
  return (
    <SectionWrapper id="av" className="bg-cream-dark">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-teal text-xs font-bold tracking-[0.3em] uppercase mb-4">
          {AV.label}
        </p>
        <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight text-ink mb-5">
          {AV.headline}
        </h2>
        <p className="text-ink-muted text-base leading-relaxed">
          {AV.subhead}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-14">
        {AV.cards.map((card, i) => {
          const Diagram = cardDiagrams[card.icon]
          return (
            <motion.div
              key={card.title}
              initial={{ y: 16 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <GlowCard className="h-full !p-6">
                <div className="mb-4 text-teal">
                  <Diagram className="w-full max-w-[100px]" />
                </div>
                <h3 className="font-semibold text-base mb-2 text-ink">{card.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{card.body}</p>
              </GlowCard>
            </motion.div>
          )
        })}
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {AV.outputs.map((out, i) => {
            const Icon = outputIcons[out.icon]
            return (
              <motion.div
                key={out.label}
                initial={{ y: 8 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="flex items-center gap-2.5 bg-white border border-teal/10 rounded-full px-4 py-2.5"
              >
                <Icon className="w-4 h-4 text-coral flex-shrink-0" />
                <span className="text-ink-muted text-xs font-medium">{out.label}</span>
              </motion.div>
            )
          })}
        </div>

        <p className="text-center italic text-ink-faint text-sm">
          {AV.footer}
        </p>
      </div>
    </SectionWrapper>
  )
}
