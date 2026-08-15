/*
  A margin note in the handwritten face — the equivalent of the reference's
  orange sticky-note annotations. Short asides only; never anything the reader
  needs, because a marker face at small sizes is decorative first.
*/
export default function Note({ children, className = '', rotate = -2 }) {
  return (
    <span
      className={`inline-block font-hand text-sm text-brand ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  )
}
