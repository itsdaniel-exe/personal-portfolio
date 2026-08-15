import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid gap-x-10 gap-y-6 md:grid-cols-[9rem_minmax(0,1fr)]">
        <Reveal>
          <h2 className="t-label md:pt-3">The short version</h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="max-w-prose space-y-5">
            <p className="t-section">
              I&rsquo;m Daniel. Fourth year CSBS, and I&rsquo;ve spent most of it building things.
            </p>
            <p className="text-ink/85">
              There isn&rsquo;t much strategy to what I pick up. Something irritates me enough that
              I want it fixed, or I get curious about how a thing works and can&rsquo;t leave it
              alone until I&rsquo;ve made one myself. It&rsquo;s turned out to be a decent way to
              learn.
            </p>
            <p className="text-ink/85">
              Outside of that I make video essays for a YouTube channel and edit video for other
              people. Different muscle, same habit of fiddling with something for far longer than
              necessary.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
