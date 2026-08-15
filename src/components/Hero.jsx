import { motion, useReducedMotion } from 'framer-motion'
import { links } from '../data/projects'

const MotionP = motion.p
const MotionH1 = motion.h1
const MotionDiv = motion.div

export default function Hero() {
  const reduced = useReducedMotion()

  // One orchestrated load sequence, then the page sits still.
  const step = (i) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.06 * i, ease: [0.22, 0.61, 0.36, 1] },
        }

  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
      <MotionP {...step(0)} className="t-label">
        Fourth year &middot; Computer Science and Business Systems
      </MotionP>

      <MotionH1 {...step(1)} className="t-hero mt-6 max-w-[19ch]">
        I make things because something bugged me, or because I{' '}
        <em className="font-body font-normal italic tracking-normal text-accent">
          wanted to know how it worked
        </em>
        .
      </MotionH1>

      <MotionP {...step(2)} className="t-lede mt-8 max-w-prose">
        That&rsquo;s genuinely the whole method. Some of these are college projects, one came out
        of a hackathon, one is a product I&rsquo;m still building. A couple I didn&rsquo;t finish.
      </MotionP>

      {/* Present tense, because it's true right now — not a decorative badge. */}
      <MotionDiv
        {...step(3)}
        className="mt-12 flex flex-wrap items-baseline gap-x-3 gap-y-1 rule-top pt-5"
      >
        <span className="t-label">Currently</span>
        <p className="text-muted">
          Building{' '}
          <a href={links.remmate} target="_blank" rel="noreferrer noopener" className="link">
            Remmate
          </a>
          , a reminders app I made so I&rsquo;d finally use one.
        </p>
      </MotionDiv>
    </section>
  )
}
