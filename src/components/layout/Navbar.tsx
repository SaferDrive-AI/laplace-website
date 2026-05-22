import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../../lib/constants'
import { Button } from '../ui/Button'
import { cn } from '../../lib/cn'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'bg-cream/90 backdrop-blur-md border-b border-ink/5' : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="block" aria-label="Laplace home">
          <img src="/laplace-logo.svg" alt="LAPLACE" className="h-5 md:h-6 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-ink-muted hover:text-ink transition-colors">
              {link.label}
            </a>
          ))}
          <Button href="#contact" size="md">Talk to Us</Button>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-ink p-2" aria-label="Toggle menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-cream/98 backdrop-blur-md border-t border-ink/5 px-6 pb-6">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block py-3 text-ink-muted hover:text-ink transition-colors">
              {link.label}
            </a>
          ))}
          <Button href="#contact" className="mt-4 w-full">Talk to Us</Button>
        </div>
      )}
    </nav>
  )
}
