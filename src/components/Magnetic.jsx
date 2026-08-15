import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

const MotionSpan = motion.span

/*
  Magnetic hover: the element leans toward the cursor and springs back on exit.
  Pointer-type gated — on touch there is no cursor to lean toward, and running
  it there just adds jitter on tap.
*/
export default function Magnetic({ children, strength = 0.35, className = '' }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 })

  if (reduced) return <span className={className}>{children}</span>

  const onMove = (e) => {
    if (!e.currentTarget.matches?.(':hover')) return
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <MotionSpan
      ref={ref}
      onPointerMove={(e) => e.pointerType === 'mouse' && onMove(e)}
      onPointerLeave={reset}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
    >
      {children}
    </MotionSpan>
  )
}
