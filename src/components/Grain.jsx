/*
  Paper grain. The identity of this site is "printed on paper", and flat #E9EAE3
  reads as a screen colour. A fractal-noise overlay at very low opacity gives it
  tooth without becoming a visible texture.

  Fixed, non-interactive, and inlined as a data URI so it costs no request.
*/
export default function Grain() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.10] mix-blend-multiply"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
        backgroundRepeat: 'repeat',
      }}
    />
  )
}
