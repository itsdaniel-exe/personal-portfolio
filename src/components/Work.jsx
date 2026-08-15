import { useMemo, useState } from 'react'
import { LayoutGroup, motion, useReducedMotion } from 'framer-motion'
import { projects, unfinished } from '../data/projects'
import Entry from './Entry'
import Reveal from './Reveal'

const MotionDiv = motion.div
const MotionButton = motion.button
const MotionSpan = motion.span

export default function Work() {
  const [filter, setFilter] = useState('All')
  const reduced = useReducedMotion()

  // Filters come from the data, so adding a project with a new group just works.
  const groups = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.group).filter(Boolean)))],
    []
  )

  const shown = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.group === filter)),
    [filter]
  )

  return (
    <section id="work" className="mx-auto max-w-5xl px-5 sm:px-8">
      <Reveal>
        <div className="grid gap-x-10 gap-y-4 pb-4 md:grid-cols-[9rem_minmax(0,1fr)]">
          <h2 className="t-label md:pt-2">Work</h2>

          <div>
            <p className="t-section max-w-prose" aria-live="polite">
              {shown.length} {shown.length === 1 ? 'thing' : 'things'} I&rsquo;ve made
              {filter === 'All' ? ', roughly newest first.' : `, filtered to ${filter.toLowerCase()}.`}
            </p>

            {/*
              Filtering by kind. With seven entries this is as much about making
              the list feel handleable as about search — the count updates and
              the entries reflow rather than blinking out and back.
            */}
            <LayoutGroup>
              <div role="group" aria-label="Filter work by kind" className="mt-6 flex flex-wrap gap-2">
                {groups.map((g) => {
                  const active = g === filter
                  return (
                    <MotionButton
                      key={g}
                      type="button"
                      onClick={() => setFilter(g)}
                      aria-pressed={active}
                      whileTap={reduced ? undefined : { scale: 0.96 }}
                      // min-h-11 (44px) so these are comfortably tappable on a
                      // phone, which is where most people open this. Tightened
                      // on pointer devices where 44px reads as oversized.
                      className={`relative inline-flex min-h-11 items-center rounded-full px-4 font-display text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-300 sm:min-h-0 sm:px-3.5 sm:py-1.5 ${
                        active ? 'text-raised' : 'text-muted hover:text-ink'
                      }`}
                    >
                      {/* The pill slides between options instead of teleporting. */}
                      {active && (
                        <MotionSpan
                          layoutId="filter-pill"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                          aria-hidden="true"
                          className="absolute inset-0 rounded-full bg-accent"
                        />
                      )}
                      <span className="relative z-10">{g}</span>
                    </MotionButton>
                  )
                })}
              </div>
            </LayoutGroup>
          </div>
        </div>
      </Reveal>

      {/*
        Deliberately no AnimatePresence here.

        Exit animations on a filtered list mean AnimatePresence has to decide when
        each removed child has finished animating before unmounting it. Under
        `prefers-reduced-motion` that handshake never completed, so filtering
        updated the count and the pressed states while every entry stayed on
        screen — a correctness bug traded for a fade.

        Filtered-out entries now unmount immediately and the survivors reflow via
        `layout`, which is the part that actually reads as motion anyway.
      */}
      <LayoutGroup>
        <MotionDiv layout>
          {shown.map((project) => (
            <MotionDiv
              key={project.id}
              layout
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                reduced ? { duration: 0 } : { type: 'spring', stiffness: 300, damping: 34 }
              }
            >
              <Entry project={project} />
            </MotionDiv>
          ))}
        </MotionDiv>
      </LayoutGroup>

      {/* Same ledger, honest statuses — not a separate confessional. */}
      <Reveal as="section" className="rule-top py-10 sm:py-14">
        <div className="grid gap-x-10 gap-y-6 md:grid-cols-[9rem_minmax(0,1fr)]">
          <h2 className="t-label md:pt-2">Unfinished</h2>

          <div className="max-w-prose">
            <p className="t-section">Two I started and didn&rsquo;t finish.</p>
            <p className="mt-4 text-muted">
              Leaving them here because a page where everything shipped would be a bit suspicious.
            </p>

            <dl className="mt-8 space-y-6">
              {unfinished.map((item) => (
                <div key={item.id} className="rule-top pt-5">
                  <dt className="font-display text-lg font-semibold text-muted">{item.title}</dt>
                  <dd className="mt-1.5 text-ink/70">{item.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
