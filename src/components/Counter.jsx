import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

/*
  Count-up on first view. Every number this renders is derived from the real
  project data — nothing here is a vanity metric, because there aren't any to
  report and inventing them would be the fastest way to make the page a lie.
*/
export default function Counter({ to, suffix = '', label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' })
  const reduced = useReducedMotion()
  const [n, setN] = useState(reduced ? to : 0)

  useEffect(() => {
    if (!inView || reduced) return
    let raf
    const start = performance.now()
    const dur = 900

    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur)
      // Ease-out so it decelerates into the final value instead of stopping dead.
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduced, to])

  return (
    <div ref={ref}>
      <p className="font-display text-4xl font-extrabold tabular-nums leading-none text-ink sm:text-5xl">
        {n}
        <span className="text-brand">{suffix}</span>
      </p>
      <p className="t-label mt-2">{label}</p>
    </div>
  )
}
