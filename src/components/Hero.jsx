import { motion, useReducedMotion } from 'framer-motion'
import { links } from '../data/projects'
import SplitText from './SplitText'
import { stagger, fadeUp } from '../lib/motion'
import Magnetic from './Magnetic'

const MotionSection = motion.section
const MotionDiv = motion.div
const MotionP = motion.p
const MotionH1 = motion.h1

export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <MotionSection
      id="top"
      initial={reduced ? false : 'hidden'}
      animate="show"
      variants={stagger}
      className="mx-auto max-w-5xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24"
    >
      <MotionP variants={fadeUp} className="t-label">
        Fourth year &middot; Computer Science and Business Systems
      </MotionP>

      {/* The headline is the thesis, so it gets the reveal and nothing else does. */}
      <MotionH1 variants={stagger} className="t-hero mt-6 max-w-[19ch]">
        <SplitText text="I make things because something bugged me, or because I" />{' '}
        <span className="font-body font-normal italic tracking-normal text-accent">
          <SplitText text="wanted to know how it worked" />
        </span>
        <span aria-hidden="true">.</span>
      </MotionH1>

      <MotionP variants={fadeUp} className="t-lede mt-8 max-w-prose">
        That&rsquo;s genuinely the whole method. Some of these are college projects, one came out
        of a hackathon, one is a product I&rsquo;m still building. A couple I didn&rsquo;t finish.
      </MotionP>

      {/* Present tense, because it's true right now — not a decorative badge. */}
      <MotionDiv
        variants={fadeUp}
        className="rule-top mt-12 flex flex-wrap items-baseline gap-x-3 gap-y-1 pt-5"
      >
        <span className="t-label">Currently</span>
        <p className="text-muted">
          Building{' '}
          <Magnetic strength={0.25}>
            <a href={links.remmate} target="_blank" rel="noreferrer noopener" className="link">
              Remmate
            </a>
          </Magnetic>
          , a reminders app I made so I&rsquo;d finally use one.
        </p>
      </MotionDiv>
    </MotionSection>
  )
}
