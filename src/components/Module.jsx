import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const MotionDiv = motion.div

/*
  A selectable frame.

  The chrome is the whole conceit: a layer name above the top-left corner, a
  dashed selection outline with corner handles on hover, and a dimension callout
  underneath showing the frame's real measured size — the same readout a design
  tool gives you when something is selected.

  The dimensions are measured, not invented; a hard-coded "888 × 180" under a box
  that isn't 888 wide is the kind of detail that reads as fake immediately.
*/
export default function Module({ name, children, className = '', tilt = false, delay = 0 }) {
  const ref = useRef(null)
  const [dim, setDim] = useState(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const measure = () => {
      const r = el.getBoundingClientRect()
      setDim(`${Math.round(r.width)} × ${Math.round(r.height)}`)
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  return (
    <MotionDiv
      ref={ref}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={tilt && !reduced ? { y: -4 } : undefined}
      // min-w-0 so a wide child (a marquee track) can't stretch the grid track.
      className={`frame group min-w-0 p-5 sm:p-7 ${tilt ? 'transition-shadow duration-300 hover:shadow-lift' : ''} ${className}`}
    >
      {name && <span className="frame-name">{name}</span>}

      {/* Selection chrome */}
      <span className="frame-select">
        <span className="handle -left-1 -top-1" />
        <span className="handle -right-1 -top-1" />
        <span className="handle -bottom-1 -left-1" />
        <span className="handle -bottom-1 -right-1" />
      </span>
      {dim && <span className="frame-dim">{dim}</span>}

      {children}
    </MotionDiv>
  )
}
