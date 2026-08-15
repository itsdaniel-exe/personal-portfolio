import { motion, useReducedMotion } from 'framer-motion'

const MotionDiv = motion.div

/*
  One consistent section header for the whole page: a mono eyebrow, a display
  heading, and an optional aside on the right.

  Structure is the point here — every section announces itself the same way, so
  the page reads as organised rather than as a pile of blocks.
*/
export default function Section({ id, eyebrow, title, aside, children, className = '' }) {
  const reduced = useReducedMotion()

  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 ${className}`}>
      <MotionDiv
        initial={reduced ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4 border-b border-rule pb-6"
      >
        <div>
          {eyebrow && <span className="t-label">{eyebrow}</span>}
          <h2 className="t-section mt-2.5 max-w-[18ch]">{title}</h2>
        </div>
        {aside}
      </MotionDiv>

      <div className="mt-9">{children}</div>
    </section>
  )
}
