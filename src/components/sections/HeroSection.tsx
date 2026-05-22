import { motion } from 'framer-motion'
import { Car, Plane, Building2, Warehouse, Ship, Truck, Cpu, Box, ChevronDown } from 'lucide-react'
import { HERO } from '../../lib/constants'
import { Button } from '../ui/Button'

const NODES = [
  { Icon: Car, angle: 0 },
  { Icon: Plane, angle: 45 },
  { Icon: Building2, angle: 90 },
  { Icon: Warehouse, angle: 135 },
  { Icon: Ship, angle: 180 },
  { Icon: Truck, angle: 225 },
  { Icon: Cpu, angle: 270 },
  { Icon: Box, angle: 315 },
] as const

function AgentNetwork() {
  const cx = 250
  const cy = 250
  const r = 185
  const nodeR = 34

  return (
    <svg viewBox="0 0 500 500" className="w-full h-full text-teal" aria-hidden="true">
      <defs>
        <radialGradient id="hero-core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity={0.18} />
          <stop offset="60%" stopColor="currentColor" stopOpacity={0.04} />
          <stop offset="100%" stopColor="currentColor" stopOpacity={0} />
        </radialGradient>
      </defs>

      {/* Outer halo */}
      <circle cx={cx} cy={cy} r={235} fill="url(#hero-core-glow)" />

      {/* Concentric guide rings */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" strokeWidth={1} strokeDasharray="2 6" opacity={0.18} />
      <circle cx={cx} cy={cy} r={r * 0.62} fill="none" stroke="currentColor" strokeWidth={1} strokeDasharray="2 6" opacity={0.12} />

      {/* Spokes */}
      {NODES.map((n, i) => {
        const rad = (n.angle * Math.PI) / 180
        const x = cx + r * Math.cos(rad)
        const y = cy + r * Math.sin(rad)
        return (
          <motion.line
            key={`l-${i}`}
            x1={cx}
            y1={cy}
            x2={x}
            y2={y}
            stroke="currentColor"
            strokeWidth={1}
            opacity={0.22}
            initial={{ pathLength: 0.4 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }}
          />
        )
      })}

      {/* Data-flow particles travelling along spokes */}
      {NODES.map((n, i) => {
        const rad = (n.angle * Math.PI) / 180
        const x = cx + r * Math.cos(rad)
        const y = cy + r * Math.sin(rad)
        return (
          <motion.circle
            key={`p-${i}`}
            r={2.4}
            fill="currentColor"
            initial={{ cx, cy, opacity: 0 }}
            animate={{
              cx: [cx, x, cx],
              cy: [cy, y, cy],
              opacity: [0, 0.85, 0],
            }}
            transition={{
              delay: 1.4 + i * 0.32,
              duration: 3.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )
      })}

      {/* Core node */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={58}
        fill="currentColor"
        opacity={0.08}
        initial={{ scale: 0.85 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
      <motion.circle
        cx={cx}
        cy={cy}
        r={38}
        fill="currentColor"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
      <motion.circle
        cx={cx}
        cy={cy}
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        initial={{ r: 58, opacity: 0.3 }}
        animate={{ r: [58, 78, 58], opacity: [0.3, 0.05, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Outer-orbit nodes */}
      {NODES.map((n, i) => {
        const rad = (n.angle * Math.PI) / 180
        const x = cx + r * Math.cos(rad)
        const y = cy + r * Math.sin(rad)
        const Icon = n.Icon
        return (
          <motion.g
            key={`n-${i}`}
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 + i * 0.05, duration: 0.4 }}
            style={{ transformOrigin: `${x}px ${y}px` }}
          >
            <circle cx={x} cy={y} r={nodeR + 4} fill="currentColor" opacity={0.05} />
            <circle cx={x} cy={y} r={nodeR} fill="white" stroke="currentColor" strokeOpacity={0.28} strokeWidth={1.2} />
            <g transform={`translate(${x - 12}, ${y - 12})`}>
              <Icon width={24} height={24} stroke="currentColor" strokeWidth={1.5} />
            </g>
          </motion.g>
        )
      })}
    </svg>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-14 items-center">
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <img src="/laplace-logo.svg" alt="LAPLACE" className="h-12 sm:h-14 md:h-16 w-auto" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.5rem] leading-[1.02] tracking-tight text-ink"
          >
            The <em className="text-teal">What-if</em> Engine for the Physical World.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-8 text-lg md:text-xl text-ink-light max-w-xl leading-relaxed"
          >
            {HERO.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row items-start gap-4"
          >
            <Button href={HERO.cta1Href} size="lg">
              {HERO.cta1}
            </Button>
            <Button href={HERO.cta2Href} variant="outline" size="lg">
              {HERO.cta2}
            </Button>
          </motion.div>
        </div>

        <div className="relative w-full max-w-md mx-auto lg:max-w-none aspect-square lg:scale-[1.08] xl:scale-[1.12]">
          <AgentNetwork />
        </div>
      </div>

      <motion.a
        href="#problem"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-ink-faint hover:text-teal transition-colors"
        aria-label="Scroll to next section"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex"
        >
          <ChevronDown className="w-4 h-4" strokeWidth={1.5} />
        </motion.span>
      </motion.a>
    </section>
  )
}
