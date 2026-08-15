import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

const MotionDiv = motion.div

/*
  A presence tag trailing the cursor, the way a collaborative editor shows who
  else is in the document. Here there's only one person in the doc — you — which
  is the joke.

  Mouse only: hidden entirely on touch, where there's no cursor to label, and
  disabled under reduced motion.
*/
export default function CursorTag({ label = 'You' }) {
  const reduced = useReducedMotion()
  const [active, setActive] = useState(false)

  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const sx = useSpring(x, { stiffness: 480, damping: 40, mass: 0.35 })
  const sy = useSpring(y, { stiffness: 480, damping: 40, mass: 0.35 })

  useEffect(() => {
    if (reduced) return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setActive(true)
    }
    const leave = () => setActive(false)

    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerleave', leave, { passive: true })
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerleave', leave)
    }
  }, [reduced, x, y])

  if (reduced) return null

  return (
    <MotionDiv
      aria-hidden="true"
      style={{ x: sx, y: sy, opacity: active ? 1 : 0 }}
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden -translate-y-1 translate-x-4 transition-opacity duration-200 [@media(pointer:fine)]:block"
    >
      <span className="rounded-md rounded-tl-none bg-accent px-2 py-0.5 font-mono text-[10px] font-bold text-white shadow-md">
        {label}
      </span>
    </MotionDiv>
  )
}
