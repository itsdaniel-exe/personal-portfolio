import Reveal from './Reveal'
import Magnetic from './Magnetic'
import { links } from '../data/projects'

/*
  RESUME SWAP-IN POINT
  --------------------
  There's no résumé yet, so the button below renders as a disabled "coming soon"
  state rather than a dead link. When the real file exists:
    1. drop it at  public/resume.pdf
    2. flip RESUME_READY to true
  Nothing else needs changing.
*/
const RESUME_READY = false
const RESUME_URL = '/resume.pdf'

const CHANNELS = [
  { label: 'Email', href: `mailto:${links.email}`, text: links.email },
  { label: 'GitHub', href: links.github, text: links.githubHandle, external: true },
  { label: 'LinkedIn', href: links.linkedin, text: links.linkedinHandle, external: true },
  { label: 'Remmate', href: links.remmate, text: links.remmateLabel, external: true },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid gap-x-10 gap-y-6 md:grid-cols-[9rem_minmax(0,1fr)]">
        <Reveal>
          <h2 className="t-label md:pt-3">Contact</h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="max-w-prose">
            <p className="t-section">Say hi.</p>
            <p className="mt-4 text-ink/85">
              If you want to talk about any of this, or you&rsquo;re building something and want
              another pair of hands on it, email is easiest. I&rsquo;m putting new things on GitHub
              fairly often.
            </p>

            <dl className="mt-10 space-y-0">
              {CHANNELS.map((c) => (
                <div
                  key={c.label}
                  className="rule-top flex flex-wrap items-baseline gap-x-6 gap-y-1 py-3.5"
                >
                  <dt className="t-label w-20 shrink-0">{c.label}</dt>
                  <dd>
                    <Magnetic strength={0.28}>
                      <a
                        href={c.href}
                        className="link"
                        {...(c.external
                          ? { target: '_blank', rel: 'noreferrer noopener' }
                          : {})}
                      >
                        {c.text}
                      </a>
                    </Magnetic>
                  </dd>
                </div>
              ))}

              <div className="rule-top flex flex-wrap items-baseline gap-x-6 gap-y-1 py-3.5">
                <dt className="t-label w-20 shrink-0">Résumé</dt>
                <dd>
                  {RESUME_READY ? (
                    <a href={RESUME_URL} className="link" download>
                      Download PDF
                    </a>
                  ) : (
                    <span className="text-faint">
                      Coming soon &mdash; I haven&rsquo;t written it yet.
                    </span>
                  )}
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
