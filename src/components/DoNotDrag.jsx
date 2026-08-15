import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const MotionDiv = motion.div

/*
  The reference has a card labelled "do not drag" that is, of course, completely
  static — the joke being that the design-tool chrome is pure costume.

  This one goes one step further: it *is* draggable, and snaps back, because a
  card that claims not to move and then does is funnier than one that just sits
  there. Keyboard users get nothing to trip over — it's decorative.
*/
export default function DoNotDrag() {
  const [moved, setMoved] = useState(false)
  const reduced = useReducedMotion()

  return (
    <MotionDiv
      drag={!reduced}
      dragSnapToOrigin
      dragElastic={0.22}
      dragMomentum={false}
      onDragEnd={() => setMoved(true)}
      whileDrag={{ scale: 1.03, rotate: -1.5, cursor: 'grabbing' }}
      className="frame relative cursor-grab select-none p-5 active:cursor-grabbing"
    >
      <span className="frame-name">do-not-drag.frame</span>
      <span className="frame-select">
        <span className="handle -left-1 -top-1" />
        <span className="handle -right-1 -top-1" />
        <span className="handle -bottom-1 -left-1" />
        <span className="handle -bottom-1 -right-1" />
      </span>

      <p className="font-display text-lg font-extrabold leading-tight text-ink">
        {moved ? 'You dragged it.' : 'Do not drag this card'}
      </p>
      <p className="mt-1.5 text-sm text-muted">
        {moved
          ? 'Nothing happened. It goes back. That was the whole bit.'
          : 'Obviously you are going to drag it.'}
      </p>
    </MotionDiv>
  )
}
