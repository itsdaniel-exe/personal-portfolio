import { motion, useReducedMotion } from 'framer-motion'

/*
  Scroll reveal, deliberately small: 14px of travel and a soft fade. Anything
  larger starts to oversell, which is the one thing this page shouldn't do.
*/
export default function Reveal({ children, delay = 0, as = 'div', className = '' }) {
  const reduced = useReducedMotion()
  const MotionTag = motion[as] ?? motion.div

  // Still render the requested element — semantics must not depend on whether
  // the visitor has reduced motion turned on.
  if (reduced) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
