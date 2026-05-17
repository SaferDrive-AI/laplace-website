import { cn } from '../../lib/cn'

interface DiagramImageProps {
  name: string
  alt?: string
  className?: string
  loading?: 'eager' | 'lazy'
}

export function DiagramImage({ name, alt = '', className, loading = 'lazy' }: DiagramImageProps) {
  return (
    <img
      src={`/diagrams/${name}.webp`}
      alt={alt}
      loading={loading}
      decoding="async"
      className={cn('w-full h-auto select-none', className)}
      draggable={false}
    />
  )
}
