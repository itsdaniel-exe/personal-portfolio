import { projects, unfinished } from '../data/projects'
import Entry from './Entry'
import Reveal from './Reveal'

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-5 sm:px-8">
      <Reveal>
        <div className="grid gap-x-10 gap-y-3 pb-4 md:grid-cols-[9rem_minmax(0,1fr)]">
          <h2 className="t-label md:pt-2">Work</h2>
          <p className="t-section max-w-prose">
            {projects.length} things I&rsquo;ve made, roughly newest first.
          </p>
        </div>
      </Reveal>

      {projects.map((project) => (
        <Entry key={project.id} project={project} />
      ))}

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
