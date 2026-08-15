import { useState } from 'react'
import { motion, useScroll, useSpring, useReducedMotion, useMotionValueEvent } from 'framer-motion'
import Clock from './Clock'

const MotionDiv = motion.div

/*
  The top chrome. This is the site's central conceit in one strip: the page is
  dressed as the kind of app Daniel actually builds — a task list — so the scroll
  indicator is a completion bar, and it reads DONE when you reach the bottom.

  Tick marks are drawn with a repeating-linear-gradient rather than 100 elements.
*/
export default function RulerBar() {
  const { scrollYProgress } = useScroll()
  const reduced = useReducedMotion()
  const [pct, setPct] = useState(0)

  const smooth = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })

  useMotionValueEvent(scrollYProgress, 'change', (v) => setPct(Math.round(v * 100)))

  return (
    <div className="fixed inset-x-0 top-0 z-[60] border-b border-rule/70 bg-card/85 backdrop-blur-md">
      <div className="relative h-8">
        {/* Ruler ticks */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to right, rgba(20,23,26,0.28) 0 1px, transparent 1px 10px)',
            backgroundPosition: 'bottom',
            backgroundSize: '100% 6px',
            backgroundRepeat: 'repeat-x',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to right, rgba(20,23,26,0.45) 0 1px, transparent 1px 100px)',
            backgroundPosition: 'bottom',
            backgroundSize: '100% 11px',
            backgroundRepeat: 'repeat-x',
          }}
        />

        {/* Completion fill */}
        <MotionDiv
          aria-hidden="true"
          className="absolute inset-y-0 left-0 origin-left bg-accent/12"
          style={{ scaleX: reduced ? scrollYProgress : smooth, width: '100%' }}
        />

        <div className="relative flex h-full items-center justify-between gap-3 px-3 sm:px-5">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-1.5 w-1.5">
              {!reduced && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-70" />
              )}
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
            </span>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-ink">
              Live
            </span>
            <span className="hidden sm:inline">
              <Clock compact />
            </span>
          </div>

          {/* Reads DONE at the bottom — the task-list joke, completed. */}
          <span
            className={`font-mono text-[10px] font-bold uppercase tracking-[0.14em] tabular-nums transition-colors duration-300 ${
              pct >= 99 ? 'text-live' : 'text-muted'
            }`}
          >
            {pct >= 99 ? '✓ Done' : `${pct}% read`}
          </span>
        </div>
      </div>
    </div>
  )
}
