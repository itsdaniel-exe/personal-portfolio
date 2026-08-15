import { useEffect, useState } from 'react'

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

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/90 backdrop-blur-sm transition-colors duration-300 ${
        scrolled ? 'border-b border-rule' : 'border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl items-baseline justify-between gap-4 px-5 py-4 sm:px-8"
      >
        <a href="#top" className="t-label !text-ink hover:!text-accent transition-colors">
          Daniel Rupaan Kalery
        </a>
        <ul className="flex items-baseline gap-5 sm:gap-7">
          {SECTIONS.map((s) => (
            <li key={s.href}>
              <a href={s.href} className="t-label hover:!text-accent transition-colors">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
