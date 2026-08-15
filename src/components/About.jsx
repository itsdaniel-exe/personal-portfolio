import Module from './Module'
import Note from './Note'
import NothingButton from './NothingButton'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <Module name="statement.txt" className="lg:col-span-2">
          <span className="t-label">The short version</span>
          <h2 className="t-section mt-3 max-w-[18ch]">
            I&rsquo;m Daniel. I&rsquo;ve spent most of my degree building things
            <span className="text-brand">.</span>
          </h2>
          <div className="mt-5 max-w-prose space-y-4 text-ink/80">
            <p>
              There isn&rsquo;t much strategy to what I pick up. Something irritates me enough
              that I want it fixed, or I get curious about how a thing works and can&rsquo;t leave
              it alone until I&rsquo;ve made one myself. It&rsquo;s turned out to be a decent way
              to learn.
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

        <Module name="how.md" tilt delay={0.06}>
          <span className="t-label">How I pick things</span>
          <Note className="ml-2" rotate={2}>
            not a process
          </Note>
          <ol className="mt-5 space-y-5">
            {[
              ['01', 'Something annoys me', 'Usually daily, usually small.'],
              ['02', 'I wonder how it works', 'Then I can’t leave it alone.'],
              ['03', 'I build one', 'Sometimes it ships. Sometimes it doesn’t.'],
            ].map(([n, title, note]) => (
              <li key={n} className="flex gap-4">
                <span className="font-mono text-xs font-bold text-brand">{n}</span>
                <div>
                  <p className="font-display font-bold leading-tight text-ink">{title}</p>
                  <p className="mt-1 text-sm text-muted">{note}</p>
                </div>
              </li>
            ))}
          </ol>
        </Module>
      </div>
    </section>
  )
}
