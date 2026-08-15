import { projects, unfinished } from '../data/projects'
import Section from './Section'
import Module from './Module'
import Clock from './Clock'
import Counter from './Counter'
import Note from './Note'
import NothingButton from './NothingButton'
import DoNotDrag from './DoNotDrag'

const STEPS = [
  ['01', 'Something annoys me', 'Usually daily, usually small.'],
  ['02', 'I wonder how it works', 'Then I can’t leave it alone.'],
  ['03', 'I build one', 'Sometimes it ships. Sometimes it doesn’t.'],
]

export default function About() {
  const done = projects.filter((p) => p.status === 'done').length

  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          I&rsquo;ve spent most of my degree building things<span className="text-brand">.</span>
        </>
      }
      aside={
        <Note className="max-w-[16ch]" rotate={-2}>
          no grand plan, honestly
        </Note>
      }
    >
      <div className="grid gap-3 lg:grid-cols-3">
        <Module name="statement.txt" className="lg:col-span-2">
          <div className="max-w-prose space-y-4 text-ink/80">
            <p>
              I&rsquo;m Daniel, a fourth-year Computer Science and Business Systems student.
              There isn&rsquo;t much strategy to what I pick up: something irritates me enough
              that I want it fixed, or I get curious about how a thing works and can&rsquo;t leave
              it alone until I&rsquo;ve made one myself.
            </p>
            <p>
              It&rsquo;s turned out to be a decent way to learn. The constraint I keep setting
              myself is that everything has to run on free tiers, which has quietly shaped more
              architecture decisions than any tutorial has.
            </p>
            <p>
              Outside of that I make video essays for a YouTube channel and edit video for other
              people. Different muscle, same habit of fiddling with something for far longer than
              necessary.
            </p>
          </div>

          <div className="mt-7 border-t border-rule pt-6">
            <NothingButton />
          </div>
        </Module>

        <div className="grid gap-3">
          <Module name="how.md" tilt delay={0.05}>
            <span className="t-label">How I pick things</span>
            <ol className="mt-4 space-y-4">
              {STEPS.map(([n, title, note]) => (
                <li key={n} className="flex gap-3.5">
                  <span className="font-mono text-xs font-bold text-brand">{n}</span>
                  <div>
                    <p className="font-display font-bold leading-tight text-ink">{title}</p>
                    <p className="mt-0.5 text-sm text-muted">{note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Module>

          <div className="grid grid-cols-2 gap-3">
            <Module name="count" tilt delay={0.1}>
              <Counter to={done} label="Finished" />
            </Module>
            <Module name="count" tilt delay={0.14}>
              <Counter to={unfinished.length} label="Abandoned" />
            </Module>
          </div>

          <Module name="clock" tilt delay={0.18}>
            <Clock />
          </Module>

          <DoNotDrag />
        </div>
      </div>
    </Section>
  )
}
