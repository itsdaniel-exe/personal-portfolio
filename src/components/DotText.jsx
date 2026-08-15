import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

/*
  Halftone headline on canvas.

  The text is rendered as a grid of dots. Where the cursor is, the dots are
  skipped and the solid letterform is painted through a circular clip instead —
  so moving the mouse wipes the dithering away and reveals clean type, which
  refills behind you.

  Two canvases: an offscreen one holds a pixel mask of the text so we can ask
  "is there ink at (x, y)?" cheaply per grid cell; the visible one draws.

  Under prefers-reduced-motion this renders the solid text and never listens for
  pointer moves.
*/

const STEP = 7 // px between dot centres
const DOT_R = 2.1
const REVEAL_R = 92 // cursor clear radius

export default function DotText({
  text,
  className = '',
  color = '#14171A',
  weight = 800,
  maxFontPx = 150,
}) {
  const wrapRef = useRef(null)
  const canvasRef = useRef(null)
  const reduced = useReducedMotion()
  const pointer = useRef({ x: -9999, y: -9999 })
  const raf = useRef(0)

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return

    const ctx = canvas.getContext('2d')
    const mask = document.createElement('canvas')
    const mctx = mask.getContext('2d', { willReadFrequently: true })

    let w = 0
    let h = 0
    let dpr = 1
    let fontPx = 0
    let lines = []
    let maskData = null

    const layout = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = wrap.clientWidth
      // Bail if we're measured before layout has settled. Painting at zero width
      // bakes in a 1px canvas that never recovers, because nothing resizes after.
      if (w < 2) return false
      // Size the type to the container, then the box to the type.
      fontPx = Math.min(maxFontPx, Math.max(34, w / 8.2))
      const lineH = fontPx * 1.0

      // Greedy wrap against the measured width.
      const font = `${weight} ${fontPx}px "Bricolage Grotesque", system-ui, sans-serif`
      mctx.font = font
      const words = text.split(' ')
      lines = []
      let cur = ''
      for (const word of words) {
        const test = cur ? `${cur} ${word}` : word
        if (mctx.measureText(test).width > w && cur) {
          lines.push(cur)
          cur = word
        } else {
          cur = test
        }
      }
      if (cur) lines.push(cur)

      h = Math.ceil(lines.length * lineH + fontPx * 0.3)

      for (const c of [canvas, mask]) {
        c.width = Math.max(1, Math.floor(w * dpr))
        c.height = Math.max(1, Math.floor(h * dpr))
      }
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`

      // Paint the mask: white text on transparent, read once, reuse per frame.
      mctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      mctx.clearRect(0, 0, w, h)
      mctx.font = font
      mctx.textBaseline = 'top'
      mctx.fillStyle = '#fff'
      lines.forEach((ln, i) => mctx.fillText(ln, 0, i * lineH))
      maskData = mctx.getImageData(0, 0, mask.width, mask.height).data

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      return true
    }

    const inkAt = (x, y) => {
      const px = Math.floor(x * dpr)
      const py = Math.floor(y * dpr)
      if (px < 0 || py < 0 || px >= mask.width || py >= mask.height) return false
      return maskData[(py * mask.width + px) * 4 + 3] > 128
    }

    const drawSolid = () => {
      const lineH = fontPx * 1.0
      ctx.font = `${weight} ${fontPx}px "Bricolage Grotesque", system-ui, sans-serif`
      ctx.textBaseline = 'top'
      ctx.fillStyle = color
      lines.forEach((ln, i) => ctx.fillText(ln, 0, i * lineH))
    }

    const render = () => {
      ctx.clearRect(0, 0, w, h)
      const { x: cx, y: cy } = pointer.current

      // Dots everywhere there's ink, except inside the cursor radius.
      ctx.fillStyle = color
      for (let y = 0; y < h; y += STEP) {
        for (let x = 0; x < w; x += STEP) {
          if (!inkAt(x, y)) continue
          const dx = x - cx
          const dy = y - cy
          if (dx * dx + dy * dy < REVEAL_R * REVEAL_R) continue
          ctx.beginPath()
          ctx.arc(x, y, DOT_R, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Solid letterforms, clipped to the circle under the cursor.
      if (cx > -9000) {
        ctx.save()
        ctx.beginPath()
        ctx.arc(cx, cy, REVEAL_R, 0, Math.PI * 2)
        ctx.clip()
        drawSolid()
        ctx.restore()
      }
    }

    const schedule = () => {
      cancelAnimationFrame(raf.current)
      raf.current = requestAnimationFrame(render)
    }

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect()
      pointer.current = { x: e.clientX - r.left, y: e.clientY - r.top }
      schedule()
    }

    const onLeave = () => {
      pointer.current = { x: -9999, y: -9999 }
      schedule()
    }

    /*
      The dot field only makes sense where there's a cursor to clear it with.
      On touch there is no hover, so the headline would sit dithered forever with
      no way to reveal it — so coarse pointers get the solid type instead.
    */
    const finePointer =
      typeof window.matchMedia === 'function' && window.matchMedia('(pointer: fine)').matches
    const interactive = !reduced && finePointer

    let retry = 0
    const boot = () => {
      if (!layout()) {
        // Not laid out yet — try again next frame, but don't spin forever.
        if (retry++ < 60) requestAnimationFrame(boot)
        return
      }
      retry = 0
      if (interactive) {
        render()
      } else {
        ctx.clearRect(0, 0, w, h)
        drawSolid()
      }
    }

    // Wait for the display face, or the mask is measured against a fallback.
    if (document.fonts?.ready) document.fonts.ready.then(boot)
    else boot()

    const ro = new ResizeObserver(boot)
    ro.observe(wrap)

    // Belt and braces: ResizeObserver alone has proved unreliable for viewport
    // changes in some environments, and a stale canvas here overflows the page.
    let resizeTimer = 0
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(boot, 120)
    }
    window.addEventListener('resize', onResize)
    window.addEventListener('orientationchange', onResize)

    if (interactive) {
      window.addEventListener('pointermove', onMove, { passive: true })
      window.addEventListener('pointerleave', onLeave, { passive: true })
    }

    return () => {
      ro.disconnect()
      cancelAnimationFrame(raf.current)
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('orientationchange', onResize)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
    }
  }, [text, color, weight, maxFontPx, reduced])

  return (
    <div ref={wrapRef} className={`w-full ${className}`}>
      {/* The real text stays in the DOM for screen readers and for search. */}
      <span className="sr-only">{text}</span>
      {/* max-w-full is a hard stop: a stale canvas can never widen the page. */}
      <canvas ref={canvasRef} aria-hidden="true" className="block max-w-full" />
    </div>
  )
}
