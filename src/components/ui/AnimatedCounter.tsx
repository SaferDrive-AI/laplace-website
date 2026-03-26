import { useEffect, useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

interface AnimatedCounterProps {
  end: number
  suffix?: string
  duration?: number
}

export function AnimatedCounter({ end, suffix = '', duration = 1500 }: AnimatedCounterProps) {
  const { ref, isInView } = useScrollReveal()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const steps = 40
    const increment = end / steps
    const interval = duration / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, interval)
    return () => clearInterval(timer)
  }, [isInView, end, duration])

  return (
    <span ref={ref} className="font-serif text-5xl md:text-6xl text-teal italic">
      {count}{suffix}
    </span>
  )
}
