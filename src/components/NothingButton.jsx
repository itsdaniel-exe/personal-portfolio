import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const MotionButton = motion.button

/*
  Does nothing. On purpose. The reference has one of these and it's the most
  human thing on the page — worth keeping because the copy here is already
  self-aware about the projects that didn't work out.

  It is a real <button> with honest labelling, so a screen reader isn't promised
  an action that never comes.
*/
const LINES = [
  'Poke it anyway',
  'Told you',
  'Still nothing',
  'Genuinely nothing',
  'You are very persistent',
  'Okay this is just us now',
]

export default function NothingButton() {
  const [i, setI] = useState(0)
  const [nudge, setNudge] = useState(0)
  const reduced = useReducedMotion()

  return (
    <div className="flex flex-wrap items-center gap-3">
      <MotionButton
        type="button"
        onClick={() => {
          setI((v) => (v + 1) % LINES.length)
          setNudge((v) => v + 1)
        }}
        animate={reduced ? undefined : { rotate: [0, -3, 3, -2, 0] }}
        key={nudge}
        transition={{ duration: 0.35 }}
        className="pill min-h-11 border border-rule bg-card px-5 text-ink transition-colors duration-300 hover:border-hot hover:text-hot"
      >
        {LINES[i]}
      </MotionButton>
      <span className="t-label">This button does absolutely nothing</span>
    </div>
  )
}
