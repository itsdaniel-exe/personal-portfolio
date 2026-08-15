import { motion, useReducedMotion } from 'framer-motion'
import { EASE } from '../lib/motion'

/*
  Masked word reveal — each word sits in an overflow-hidden box and rises into
  it, so the text appears to be uncovered rather than faded in. Only transform
  animates, so it stays on the compositor thread.

  Split per word, not per line: line splitting breaks the moment text rewraps,
  and this headline rewraps at every breakpoint.
*/

const MotionSpan = motion.span

const word = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 0.75, ease: EASE } },
}

export default function SplitText({ text, className = '', as = 'span' }) {
  const reduced = useReducedMotion()
  const Tag = as

  if (reduced) return <Tag className={className}>{text}</Tag>

  const words = text.split(' ')

  return (
    <Tag className={className}>
      {words.map((w, i) => (
        // Wrapper holds the mask; the inner span does the moving.
        <span key={`${w}-${i}`} className="inline-flex overflow-hidden align-bottom">
          <MotionSpan variants={word} className="inline-block will-change-transform">
            {w}
          </MotionSpan>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </Tag>
  )
}
