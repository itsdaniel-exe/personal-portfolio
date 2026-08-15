import { ArrowUpRight, FileText, Github, Linkedin, Mail } from 'lucide-react'
import Section from './Section'
import Module from './Module'
import Magnetic from './Magnetic'
import Marquee from './Marquee'
import { links, projects } from '../data/projects'

/*
  RESUME SWAP-IN POINT
  --------------------
  There's no résumé yet, so the row renders as a disabled "coming soon" state
  rather than a dead link. When the real file exists:
    1. drop it at  public/resume.pdf
    2. flip RESUME_READY to true
*/
const RESUME_READY = false
const RESUME_URL = '/resume.pdf'

const CHANNELS = [
  { label: 'Email', href: `mailto:${links.email}`, text: links.email, Icon: Mail },
  { label: 'GitHub', href: links.github, text: links.githubHandle, Icon: Github, external: true },
  {
    label: 'LinkedIn',
    href: links.linkedin,
    text: links.linkedinHandle,
    Icon: Linkedin,
    external: true,
  },
]

// Every distinct technology across every project — a real inventory.
const STACK = [...new Set(projects.flatMap((p) => p.stack))]

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Say hi<span className="text-brand">.</span>
        </>
      }
      aside={
        <p className="max-w-xs text-sm text-muted">
          Email is easiest. I put new things on GitHub fairly often.
        </p>
      }
    >
      <div className="grid gap-3 lg:grid-cols-3">
        <Module name="say-hi.txt" className="lg:col-span-2">
          <p className="max-w-prose text-lg text-ink/80">
            If you want to talk about any of this, or you&rsquo;re building something and want
            another pair of hands on it, I&rsquo;d like to hear about it.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            <Magnetic strength={0.3}>
              <a href={`mailto:${links.email}`} className="btn-brand">
                <Mail size={15} strokeWidth={2.5} aria-hidden="true" />
                Email me
              </a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="pill gap-2 border border-rule bg-frame px-5 py-3 text-ink no-underline transition-colors duration-300 hover:border-ink"
              >
                <Github size={15} strokeWidth={2.5} aria-hidden="true" />
                GitHub
                <ArrowUpRight size={14} strokeWidth={2.5} aria-hidden="true" />
              </a>
            </Magnetic>
          </div>

          <div className="-mx-5 mt-8 sm:-mx-7">
            <Marquee items={STACK} />
          </div>
        </Module>

        <Module name="links" delay={0.06}>
          <dl>
            {CHANNELS.map((c, i) => (
              <div
                key={c.label}
                className={`flex items-baseline gap-3 py-3.5 ${i > 0 ? 'border-t border-rule' : ''}`}
              >
                <dt className="flex w-7 shrink-0 items-center text-slate">
                  <c.Icon size={15} strokeWidth={2} aria-hidden="true" />
                  <span className="sr-only">{c.label}</span>
                </dt>
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

            <div className="flex items-baseline gap-3 border-t border-rule py-3.5">
              <dt className="flex w-7 shrink-0 items-center text-slate">
                <FileText size={15} strokeWidth={2} aria-hidden="true" />
                <span className="sr-only">Résumé</span>
              </dt>
              <dd className="min-w-0 flex-1">
                {RESUME_READY ? (
                  <a href={RESUME_URL} className="link text-sm" download>
                    Download résumé
                  </a>
                ) : (
                  <span className="text-sm text-slate">Résumé — coming soon</span>
                )}
              </dd>
            </div>
          </dl>
        </Module>
      </div>
    </Section>
  )
}
