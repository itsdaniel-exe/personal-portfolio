import { useEffect, useState } from 'react'
import ScrollProgress from './ScrollProgress'
import { links } from '../data/projects'

const SECTIONS = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // `relative` so the scroll-progress hairline can pin to the nav's bottom edge.
  return (
    <header
      className={`sticky top-0 z-50 relative bg-ground/80 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? 'border-b border-rule' : 'border-b border-transparent'
      }`}
    >
      <ScrollProgress />
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
      >
        <a
          href="#top"
          className="font-display text-sm font-extrabold tracking-tight text-ink no-underline transition-colors hover:text-accent"
        >
          Daniel Rupaan Kalery
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 sm:flex">
            {SECTIONS.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  className="pill px-3 py-2 text-muted no-underline transition-colors hover:text-ink"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${links.email}`}
            className="pill bg-ink px-4 py-2.5 text-white no-underline transition-colors duration-300 hover:bg-accent"
          >
            Say hi
          </a>
        </div>
      </nav>
    </header>
  )
}
