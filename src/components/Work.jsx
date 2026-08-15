import { useMemo, useState } from 'react'
import { LayoutGroup, motion, useReducedMotion } from 'framer-motion'
import { projects, unfinished } from '../data/projects'
import Entry from './Entry'
import Section from './Section'

const MotionDiv = motion.div
const MotionButton = motion.button
const MotionSpan = motion.span

export default function Work() {
  const [filter, setFilter] = useState('All')
  const reduced = useReducedMotion()

  const groups = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.group).filter(Boolean)))],
    []
  )

  const shown = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.group === filter)),
    [filter]
  )

  return (
    <>
      <Section
        id="work"
        eyebrow="Selected work"
        title={
          <>
            {projects.length} things I&rsquo;ve made<span className="text-brand">.</span>
          </>
        }
        aside={
          <LayoutGroup>
            <div role="group" aria-label="Filter work by kind" className="flex flex-wrap gap-2">
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
                      active ? 'text-white' : 'border border-rule bg-frame text-muted hover:text-ink'
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
        }
      >
        {/*
          A grid, not a carousel. Everything is visible and scannable at once,
          which is what a portfolio needs to be; the featured project takes the
          full width so the hierarchy is obvious.

          No AnimatePresence: its exit handshake never completed under
          prefers-reduced-motion, leaving filtered-out entries on screen.
        */}
        <LayoutGroup>
          <MotionDiv layout className="grid grid-cols-1 gap-3 lg:grid-cols-2">
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

        <p aria-live="polite" className="sr-only">
          Showing {shown.length} of {projects.length} projects
        </p>
      </Section>

      <Section
        id="unfinished"
        eyebrow="For balance"
        title={
          <>
            Two I started and didn&rsquo;t finish<span className="text-brand">.</span>
          </>
        }
        aside={
          <p className="max-w-xs text-sm text-muted">
            A page where everything shipped would be a bit suspicious.
          </p>
        }
        className="!pt-0"
      >
        <dl className="grid gap-3 sm:grid-cols-2">
          {unfinished.map((item) => (
            <div key={item.id} className="frame p-5 sm:p-6">
              <span className="frame-name">dropped.log</span>
              <dt className="font-display text-lg font-extrabold text-ink">{item.title}</dt>
              <dd className="mt-2 text-muted">{item.body}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  )
}
