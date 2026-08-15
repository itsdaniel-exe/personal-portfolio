import { useEffect, useState } from 'react'
import { links } from '../data/projects'

const SECTIONS = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

/*
  Floating pill nav with scroll-spy. Sits below the ruler bar, which owns the
  top edge and the progress readout.
*/
export default function Nav() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean)
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        // Pick the entry nearest the top of the viewport that's still visible.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <header className="sticky top-8 z-50 px-3 pt-3 sm:px-5">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-rule bg-card/90 px-3 py-2 shadow-module backdrop-blur-md sm:px-4"
      >
        <a
          href="#top"
          className="shrink-0 font-display text-sm font-extrabold tracking-tight text-ink no-underline transition-colors hover:text-accent"
        >
          Daniel<span className="text-hot">.</span>
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 sm:flex">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={active === s.id ? 'true' : undefined}
                  className={`pill px-3 py-2 no-underline transition-colors duration-300 ${
                    active === s.id ? 'bg-raised text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${links.email}`}
            className="pill min-h-9 bg-ink px-4 text-white no-underline transition-colors duration-300 hover:bg-accent"
          >
            Say hi
          </a>
        </div>
      </nav>
    </header>
  )
}
