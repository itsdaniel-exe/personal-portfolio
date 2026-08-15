import { useState } from 'react'
import { motion, useScroll, useSpring, useReducedMotion, useMotionValueEvent, useTransform } from 'framer-motion'
import Clock from './Clock'

const MotionDiv = motion.div

/*
  The ruler pinned at the top. Tick marks every 10px with a taller mark every
  100px, drawn as repeating gradients rather than a hundred elements.

  The percentage badge slides along the ruler as you scroll and reads DONE at the
  end — the page is dressed as a task list, so finishing it completes the task.
*/
export default function RulerBar() {
  const { scrollYProgress } = useScroll()
  const reduced = useReducedMotion()
  const [pct, setPct] = useState(0)

  const smooth = useSpring(scrollYProgress, { stiffness: 220, damping: 34, restDelta: 0.001 })
  const track = reduced ? scrollYProgress : smooth
  // Inset so the badge never clips off either end of the bar.
  const left = useTransform(track, [0, 1], ['0%', '100%'])

  useMotionValueEvent(scrollYProgress, 'change', (v) => setPct(Math.round(v * 100)))

  const done = pct >= 99

  return (
    <div className="fixed inset-x-0 top-0 z-[60] border-b border-rule/80 bg-frame/90 backdrop-blur-md">
      <div className="relative h-9">
        {/* minor ticks */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1.5 opacity-50"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to right, rgba(20,32,43,0.35) 0 1px, transparent 1px 10px)',
          }}
        />
        {/* major ticks */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-3 opacity-60"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to right, rgba(20,32,43,0.5) 0 1px, transparent 1px 100px)',
          }}
        />

        {/* progress fill */}
        <MotionDiv
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-full origin-left"
          style={{ scaleX: track, background: 'rgba(13,153,255,0.10)' }}
        />

        {/* the sliding badge */}
        <MotionDiv
          className="absolute top-1/2 z-10 -translate-y-1/2"
          style={{ left, x: '-50%' }}
        >
          <span
            className={`whitespace-nowrap rounded-full px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] tabular-nums text-white transition-colors duration-300 ${
              done ? 'bg-live' : 'bg-tool'
            }`}
          >
            {done ? '✓ Done' : `${pct}%`}
          </span>
        </MotionDiv>

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

          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-slate">
            portfolio.fig
          </span>
        </div>
      </div>
    </div>
  )
}
