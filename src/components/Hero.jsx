import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react'
import { links } from '../data/projects'
import { stagger, fadeUp } from '../lib/motion'
import DotText from './DotText'
import Magnetic from './Magnetic'
import Note from './Note'

const MotionSection = motion.section
const MotionDiv = motion.div
const MotionP = motion.p

/*
  A proper hero, not a grid of widgets: one statement, one supporting line, two
  clear ways forward. Everything else on the page is a section below it.
*/
export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <MotionSection
      id="top"
      initial={reduced ? false : 'hidden'}
      animate="show"
      variants={stagger}
      className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-16"
    >
      <MotionDiv variants={fadeUp} className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="pill gap-2 border border-rule bg-frame px-3 py-1.5 text-muted">
          <span className="relative flex h-2 w-2">
            {!reduced && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-70" />
            )}
            <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
          </span>
          Open to work &amp; collabs
        </span>
        <span className="t-label">Fourth year &middot; CSBS &middot; India</span>
      </MotionDiv>

      <MotionDiv variants={fadeUp} className="mt-7">
        <DotText text="I build things because something bugged me." />
      </MotionDiv>

      <MotionP variants={fadeUp} className="t-lede mt-7 max-w-prose">
        Or because I wanted to know how it worked and couldn&rsquo;t leave it alone. Seven of
        those are below &mdash; a product I&rsquo;m still shipping, a hackathon build, some
        college projects, and two I never finished.
      </MotionP>

      <MotionDiv variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
        <Magnetic strength={0.25}>
          <a href="#work" className="btn-brand">
            See the work
            <ArrowDown size={15} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </Magnetic>
        <Magnetic strength={0.25}>
          <a
            href={`mailto:${links.email}`}
            className="pill gap-2 border border-rule bg-frame px-5 py-3 text-ink no-underline transition-colors duration-300 hover:border-ink"
          >
            <Mail size={15} strokeWidth={2.5} aria-hidden="true" />
            Email me
          </a>
        </Magnetic>
        <Magnetic strength={0.25}>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="pill gap-1.5 px-2 py-3 text-muted no-underline transition-colors duration-300 hover:text-brand"
          >
            GitHub
            <ArrowUpRight size={15} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </Magnetic>

        <Note className="ml-1 hidden motion-reduce:!hidden [@media(pointer:fine)]:inline-block">
          run your cursor over the headline
        </Note>
      </MotionDiv>
    </MotionSection>
  )
}
