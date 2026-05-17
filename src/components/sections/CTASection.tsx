import { CTA } from '../../lib/constants'
import { Button } from '../ui/Button'

export function CTASection() {
  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden border-t border-ink/[0.04]">
      {/* Decorative circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] border border-teal/[0.06] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-teal/[0.05] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] border border-coral/[0.06] rounded-full" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight text-ink mb-6">
          {CTA.headline}
        </h2>
        <p className="text-ink-muted text-lg leading-relaxed mb-10">{CTA.subheadline}</p>
        <Button href={`mailto:${CTA.email}`} size="lg">
          {CTA.button}
        </Button>
        <p className="mt-6 text-ink-faint text-xs tracking-wide">{CTA.email}</p>
      </div>
    </section>
  )
}
