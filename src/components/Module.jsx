import { motion, useReducedMotion } from 'framer-motion'

const MotionDiv = motion.div

/*
  A labelled card. The tag in the corner names the module the way a layer or a
  file would — it's the device that makes a grid of unrelated blocks read as one
  system rather than a pile of boxes.
*/
export default function Module({ tag, children, className = '', tilt = false, delay = 0 }) {
  const reduced = useReducedMotion()

  return (
    <MotionDiv
      initial={reduced ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={tilt && !reduced ? { y: -4 } : undefined}
      className={`module group overflow-hidden p-5 sm:p-7 ${
        tilt ? 'transition-shadow duration-300 hover:shadow-lift' : ''
      } ${className}`}
    >
      {children}
      {tag && <span className="module-tag absolute bottom-3 right-4">{tag}</span>}
    </MotionDiv>
  )
}
