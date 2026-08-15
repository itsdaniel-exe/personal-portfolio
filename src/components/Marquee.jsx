/*
  Infinite marquee. The track is rendered twice and translated by exactly -50%,
  which is what makes the loop seamless — any other distance shows a seam.

  `prefers-reduced-motion` stops the animation in index.css rather than here, so
  the markup stays the same and the content is still readable when it's static.
*/
export default function Marquee({ items }) {
  const track = [...items, ...items]

  return (
    /*
      w-full + min-w-0 matter here: the track below is `w-max`, and without an
      explicit width the max-content size propagates up through any grid or flex
      ancestor (they default to min-width:auto), stretching the whole page.
      overflow-hidden clips it visually but does not stop that contribution.
    */
    <div className="marquee-mask w-full min-w-0 overflow-hidden">
      <div className="flex w-max animate-marquee gap-3 will-change-transform">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            aria-hidden={i >= items.length ? 'true' : undefined}
            className="pill shrink-0 border border-rule bg-grid px-3.5 py-2 text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
