import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'

const MotionDiv = motion.div

/*
  Reading progress as a hairline under the nav. It replaces the nav's static
  bottom border rather than adding a new element, so it reads as the rule
  filling in rather than a progress bar bolted on top.
*/
export default function ScrollProgress() {
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <MotionDiv
      aria-hidden="true"
      className="absolute inset-x-0 bottom-0 h-px origin-left bg-brand"
      style={{ scaleX: reduced ? scrollYProgress : scaleX }}
    />
  )
}
