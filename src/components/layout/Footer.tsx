import { NAV_LINKS } from '../../lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-ink/5">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-sm font-bold tracking-[0.15em] text-teal uppercase">INCHOR</span>
          <span className="text-xs text-ink-faint">Safety instinct for every robot</span>
        </div>

        <div className="flex gap-6">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-xs text-ink-faint hover:text-ink-muted transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-xs text-ink-faint">&copy; {new Date().getFullYear()} INCHOR Inc.</p>
      </div>
    </footer>
  )
}
