import { cn } from '../../lib/cn'

interface ButtonProps {
  variant?: 'primary' | 'outline'
  size?: 'md' | 'lg'
  href?: string
  children: React.ReactNode
  className?: string
}

export function Button({ variant = 'primary', size = 'md', href, children, className }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 cursor-pointer tracking-wide'
  const variants = {
    primary: 'bg-coral text-white hover:bg-coral/90 hover:shadow-lg hover:shadow-coral/20',
    outline: 'border border-ink/15 text-ink hover:bg-ink hover:text-cream',
  }
  const sizes = {
    md: 'px-7 py-3 text-sm',
    lg: 'px-9 py-4 text-base',
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    return <a href={href} className={classes}>{children}</a>
  }
  return <button className={classes}>{children}</button>
}
