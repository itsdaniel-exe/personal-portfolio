import DotText from './DotText'
import { links } from '../data/projects'

/*
  The sky resolves into navy here. The wordmark reuses the halftone canvas from
  the hero, so the effect bookends the page the way the reference's does.
*/
export default function Footer() {
  return (
    <footer className="relative mt-16 bg-navy pt-14">
      {/* Soft seam so the sky doesn't hit the navy as a hard line. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 h-24"
        style={{ background: 'linear-gradient(180deg, rgba(12,24,38,0) 0%, #0C1826 100%)' }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <DotText text="Daniel Rupaan Kalery" color="#F0531C" maxFontPx={120} />

        <div className="mt-10 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-white/12 py-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
            Built by me, obviously
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/60 no-underline transition-colors hover:text-brand"
            >
              GitHub
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/60 no-underline transition-colors hover:text-brand"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${links.email}`}
              className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/60 no-underline transition-colors hover:text-brand"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
