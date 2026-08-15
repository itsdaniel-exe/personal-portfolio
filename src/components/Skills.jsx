import { motion, useReducedMotion } from 'framer-motion'
import { skillGroups, trajectory } from '../data/projects'
import Section from './Section'

const MotionSpan = motion.span
const MotionLi = motion.li

/*
  Skills, grouped by purpose rather than dumped in one bag, next to a trajectory
  column. The outlined-type-that-fills-on-hover treatment is lifted from the
  site's own earlier version — it was the best idea in there.
*/
export default function Skills() {
  const reduced = useReducedMotion()

  return (
    <Section
      id="skills"
      eyebrow="What I work with"
      title={
        <>
          The stack, grouped by what it&rsquo;s for<span className="text-brand">.</span>
        </>
      }
      aside={
        <p className="max-w-xs text-sm text-muted">
          Everything here appears in a project below. No wishlist entries.
        </p>
      }
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-16">
        <div className="space-y-9">
          {skillGroups.map((group, gi) => (
            <div key={group.label}>
              <h3 className="t-label mb-3.5">{group.label}</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-1.5">
                {group.items.map((item, i) => (
                  <MotionSpan
                    key={item}
                    initial={reduced ? false : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: reduced ? 0 : gi * 0.04 + i * 0.025 }}
                    className="skill-outline"
                  >
                    {item}
                  </MotionSpan>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trajectory: what got built when. */}
        <div>
          <h3 className="t-label mb-3.5">Trajectory</h3>
          <ol className="border-t border-rule">
            {trajectory.map((t, i) => (
              <MotionLi
                key={`${t.year}-${t.what}`}
                initial={reduced ? false : { opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: reduced ? 0 : i * 0.05 }}
                className="flex items-baseline gap-4 border-b border-rule py-3.5"
              >
                <span className="w-12 shrink-0 font-mono text-xs font-bold tabular-nums text-brand">
                  {t.year}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-base font-bold leading-tight text-ink">
                    {t.what}
                  </span>
                  <span className="mt-0.5 block text-sm text-muted">{t.note}</span>
                </span>
              </MotionLi>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  )
}
