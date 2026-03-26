import { motion } from 'framer-motion'
import { HERO } from '../../lib/constants'
import { Button } from '../ui/Button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      {/* Geometric accent — top right */}
      <div className="absolute top-20 right-[10%] w-64 h-64 border border-teal/8 rounded-full hidden lg:block" />
      <div className="absolute top-32 right-[12%] w-40 h-40 border border-coral/10 rounded-full hidden lg:block" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-teal text-xs font-bold tracking-[0.3em] uppercase mb-8"
        >
          {HERO.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-ink"
        >
          We're building the{' '}
          <em className="text-teal">safety instinct</em>{' '}
          for robots.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-8 text-lg md:text-xl text-ink-muted max-w-xl mx-auto leading-relaxed"
        >
          {HERO.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#vision" size="lg">
            {HERO.cta1}
          </Button>
          <Button href="#contact" variant="outline" size="lg">
            {HERO.cta2}
          </Button>
        </motion.div>
      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-ink-faint tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ height: [16, 32, 16] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px bg-ink-faint/40"
        />
      </motion.div>
    </section>
  )
}
