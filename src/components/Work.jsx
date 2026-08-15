import { useMemo, useState } from 'react'
import { LayoutGroup, motion, useReducedMotion } from 'framer-motion'
import { projects, unfinished } from '../data/projects'
import Entry from './Entry'
import Module from './Module'

const MotionDiv = motion.div
const MotionButton = motion.button
const MotionSpan = motion.span

export default function Work() {
  const [filter, setFilter] = useState('All')
  const reduced = useReducedMotion()

  // Filters come from the data, so a new project with a new group just works.
  const groups = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.group).filter(Boolean)))],
    []
  )

  const shown = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.group === filter)),
    [filter]
  )

  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-5">
        <div>
          <span className="t-label">The work</span>
          <h2 className="t-section mt-3 max-w-[16ch]" aria-live="polite">
            {shown.length} {shown.length === 1 ? 'thing' : 'things'} I&rsquo;ve made
            <span className="text-hot">.</span>
          </h2>
        </div>

        {/*
          Filter by kind. Seven entries doesn't strictly need search — this is
          about making the set feel handleable and giving the page something to
          actually do.
        */}
        <LayoutGroup>
          <div
            role="group"
            aria-label="Filter work by kind"
            className="flex flex-wrap gap-2"
          >
            {groups.map((g) => {
              const active = g === filter
              return (
                <MotionButton
                  key={g}
                  type="button"
                  onClick={() => setFilter(g)}
                  aria-pressed={active}
                  whileTap={reduced ? undefined : { scale: 0.96 }}
                  // 44px targets on phones, tighter where there's a pointer.
                  className={`pill relative min-h-11 px-4 transition-colors duration-300 sm:min-h-0 sm:py-2 ${
                    active ? 'text-white' : 'border border-rule bg-card text-muted hover:text-ink'
                  }`}
                >
                  {active && (
                    <MotionSpan
                      layoutId="filter-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-ink"
                    />
                  )}
                  <span className="relative z-10">{g}</span>
                </MotionButton>
              )
            })}
          </div>
        </LayoutGroup>
      </div>

      {/*
        No AnimatePresence here on purpose. Its exit handshake never completed
        under prefers-reduced-motion, so filtering updated the count while every
        entry stayed on screen. Filtered-out entries now unmount immediately and
        the survivors reflow via `layout`, which is the part that reads as motion.
      */}
      <LayoutGroup>
        <MotionDiv layout className="mt-8 grid grid-cols-1 gap-3 lg:grid-cols-2">
          {shown.map((project) => (
            <MotionDiv
              key={project.id}
              layout
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                reduced ? { duration: 0 } : { type: 'spring', stiffness: 300, damping: 34 }
              }
              className={project.featured ? 'lg:col-span-2' : ''}
            >
              <Entry project={project} />
            </MotionDiv>
          ))}
        </MotionDiv>
      </LayoutGroup>

      {/* Same ledger, honest status — not a separate confessional. */}
      <Module tag="dropped.log" className="mt-3">
        <span className="t-label">Unfinished</span>
        <h3 className="t-entry mt-3">
          Two I started and didn&rsquo;t finish<span className="text-hot">.</span>
        </h3>
        <p className="mt-3 max-w-prose text-muted">
          Leaving them here because a page where everything shipped would be a bit suspicious.
        </p>

        <dl className="mt-6 grid gap-3 sm:grid-cols-2">
          {unfinished.map((item) => (
            <div key={item.id} className="rounded-xl border border-rule bg-raised p-4">
              <dt className="font-display text-lg font-bold text-muted">{item.title}</dt>
              <dd className="mt-1.5 text-sm text-ink/70">{item.body}</dd>
            </div>
          ))}
        </dl>
      </Module>
    </section>
  )
}
