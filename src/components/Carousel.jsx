import { Children, useCallback, useEffect, useRef, useState } from 'react'

/*
  Horizontally draggable rail with pagination dots and prev/next controls.

  Built on native scroll with snap points rather than a transform-driven slider:
  it keeps keyboard scrolling, trackpad gestures and touch flings working for
  free, and it degrades to a plain scroller if JS is slow to boot. Pointer-drag
  is layered on top for mouse users, who otherwise have no way to swipe.
*/
export default function Carousel({ children, label = 'Projects' }) {
  const railRef = useRef(null)
  const [index, setIndex] = useState(0)
  // Count comes straight from the children — measuring it in an effect meant the
  // dots never appeared when requestAnimationFrame didn't run (background tab).
  const count = Children.count(children)
  const drag = useRef({ active: false, startX: 0, startLeft: 0, moved: false })

  const items = () => Array.from(railRef.current?.children ?? [])

  const sync = useCallback(() => {
    const rail = railRef.current
    if (!rail) return
    const kids = items()
    const mid = rail.scrollLeft + rail.clientWidth / 2
    let best = 0
    let bestD = Infinity
    kids.forEach((el, i) => {
      const c = el.offsetLeft + el.offsetWidth / 2
      const d = Math.abs(c - mid)
      if (d < bestD) {
        bestD = d
        best = i
      }
    })
    setIndex(best)
  }, [])

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return
    // Measure after paint rather than synchronously — a setState in the effect
    // body cascades an extra render, and the layout isn't settled yet anyway.
    const first = requestAnimationFrame(sync)
    rail.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    return () => {
      cancelAnimationFrame(first)
      rail.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [sync])

  const goTo = (i) => {
    const kids = items()
    const el = kids[Math.max(0, Math.min(kids.length - 1, i))]
    if (el) railRef.current.scrollTo({ left: el.offsetLeft, behavior: 'smooth' })
  }

  // Mouse drag-to-scroll. Touch already works natively, so this is pointer-only.
  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse') return
    drag.current = {
      active: true,
      startX: e.clientX,
      startLeft: railRef.current.scrollLeft,
      moved: false,
    }
  }
  const onPointerMove = (e) => {
    if (!drag.current.active) return
    const dx = e.clientX - drag.current.startX
    if (Math.abs(dx) > 3) drag.current.moved = true
    railRef.current.scrollLeft = drag.current.startLeft - dx
  }
  const endDrag = () => {
    drag.current.active = false
  }
  // Swallow the click that follows a drag so you don't open a link by accident.
  const onClickCapture = (e) => {
    if (drag.current.moved) {
      e.preventDefault()
      e.stopPropagation()
      drag.current.moved = false
    }
  }

  return (
    <div className="relative">
      <div
        ref={railRef}
        role="region"
        aria-label={label}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
        className="no-bar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2"
      >
        {children}
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-1.5" role="tablist" aria-label={`${label} pages`}>
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to item ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-6 bg-brand' : 'w-2 bg-rule hover:bg-slate'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="t-label hidden sm:inline">&lsaquo; Drag &rsaquo;</span>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label="Previous"
            className="grid h-9 w-9 place-items-center rounded-full border border-rule bg-frame text-ink transition-colors hover:border-ink disabled:opacity-35"
          >
            &larr;
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={index >= count - 1}
            aria-label="Next"
            className="grid h-9 w-9 place-items-center rounded-full border border-rule bg-frame text-ink transition-colors hover:border-ink disabled:opacity-35"
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  )
}
