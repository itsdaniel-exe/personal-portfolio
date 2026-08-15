import Module from './Module'
import Magnetic from './Magnetic'
import { links } from '../data/projects'

/*
  RESUME SWAP-IN POINT
  --------------------
  There's no résumé yet, so the button renders as a disabled "coming soon" state
  rather than a dead link. When the real file exists:
    1. drop it at  public/resume.pdf
    2. flip RESUME_READY to true
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
    <section id="contact" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <Module name="say-hi.txt" className="lg:col-span-2">
          <span className="t-label">Contact</span>
          <h2 className="t-section mt-3 max-w-[12ch]">
            Say hi<span className="text-brand">.</span>
          </h2>
          <p className="mt-4 max-w-prose text-ink/80">
            If you want to talk about any of this, or you&rsquo;re building something and want
            another pair of hands on it, email is easiest. I&rsquo;m putting new things on GitHub
            fairly often.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            <Magnetic strength={0.3}>
              <a
                href={`mailto:${links.email}`}
                className="pill gap-2 bg-brand px-5 py-3 text-white no-underline transition-colors duration-300 hover:bg-ink"
              >
                Email me
                <span aria-hidden="true">&rarr;</span>
              </a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="pill gap-2 border border-rule bg-frame px-5 py-3 text-ink no-underline transition-colors duration-300 hover:border-ink"
              >
                GitHub
                <span aria-hidden="true">&rarr;</span>
              </a>
            </Magnetic>
          </div>
        </Module>

        <Module name="links" delay={0.06}>
          <dl className="space-y-0">
            {CHANNELS.map((c, i) => (
              <div
                key={c.label}
                className={`flex flex-wrap items-baseline gap-x-4 gap-y-1 py-3 ${
                  i > 0 ? 'border-t border-rule' : ''
                }`}
              >
                <dt className="t-label w-16 shrink-0">{c.label}</dt>
                <dd className="min-w-0 flex-1 truncate">
                  <a
                    href={c.href}
                    className="link text-sm"
                    {...(c.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                  >
                    {c.text}
                  </a>
                </dd>
              </div>
            ))}

            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-rule py-3">
              <dt className="t-label w-16 shrink-0">CV</dt>
              <dd className="min-w-0 flex-1">
                {RESUME_READY ? (
                  <a href={RESUME_URL} className="link text-sm" download>
                    Download PDF
                  </a>
                ) : (
                  <span className="text-sm text-slate">Coming soon</span>
                )}
              </dd>
            </div>
          </dl>
        </Module>
      </div>
    </section>
  )
}
