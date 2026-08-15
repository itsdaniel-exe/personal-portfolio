import { motion, useReducedMotion } from 'framer-motion'
import { projects, unfinished, links } from '../data/projects'
import { stagger, fadeUp } from '../lib/motion'
import SplitText from './SplitText'
import Magnetic from './Magnetic'
import Module from './Module'
import Clock from './Clock'
import Counter from './Counter'
import Marquee from './Marquee'

const MotionSection = motion.section
const MotionDiv = motion.div
const MotionP = motion.p
const MotionH1 = motion.h1

// Every distinct technology across every project, deduped — a real inventory of
// what he's actually touched rather than a hand-written "skills" list.
const STACK = [...new Set(projects.flatMap((p) => p.stack))]

export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <MotionSection
      id="top"
      initial={reduced ? false : 'hidden'}
      animate="show"
      variants={stagger}
      className="mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6 sm:pt-16"
    >
      <MotionDiv variants={fadeUp} className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="pill gap-2 border border-rule bg-card px-3 py-1.5 text-muted">
          <span className="relative flex h-2 w-2">
            {!reduced && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-70" />
            )}
            <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
          </span>
          Open to work &amp; collabs
        </span>
        <span className="t-label">Fourth year &middot; CSBS</span>
      </MotionDiv>

      <MotionH1 variants={stagger} className="t-hero mt-6 max-w-[16ch]">
        <SplitText text="I build things because something" />{' '}
        <span className="text-hot">
          <SplitText text="bugged me" />
        </span>
        <span aria-hidden="true">.</span>
      </MotionH1>

      <MotionP variants={fadeUp} className="t-lede mt-6 max-w-prose">
        Or because I wanted to know how it worked and couldn&rsquo;t leave it alone. That&rsquo;s
        genuinely the whole method &mdash; college projects, a hackathon build, a product
        I&rsquo;m still shipping, and a couple I didn&rsquo;t finish.
      </MotionP>

      {/* The bento. Each module is one true thing about him. */}
      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Module tag="now.txt" tilt className="lg:col-span-2" delay={0.02}>
          <div className="flex h-full flex-col justify-between gap-5">
            <span className="t-label">Currently building</span>
            <div>
              <p className="t-section">
                <Magnetic strength={0.2}>
                  <a
                    href={links.remmate}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-accent no-underline"
                  >
                    Remmate
                  </a>
                </Magnetic>
              </p>
              <p className="mt-3 max-w-prose text-muted">
                A reminders and notes app I made so I&rsquo;d finally use one. Runs entirely on
                free tiers, which is most of why it&rsquo;s built the way it is.
              </p>
            </div>
          </div>
        </Module>

        <Module tag="clock" tilt delay={0.06}>
          <Clock />
        </Module>

        <Module tag="count" tilt delay={0.1}>
          <div className="flex h-full flex-col justify-between gap-6">
            <Counter to={projects.length} label="Things shipped" />
            <Counter to={unfinished.length} label="Things abandoned" />
          </div>
        </Module>

        <Module tag="stack.json" className="lg:col-span-4" delay={0.14}>
          <span className="t-label">Everything I&rsquo;ve actually used</span>
          <div className="mt-4 -mx-5 sm:-mx-7">
            <Marquee items={STACK} />
          </div>
        </Module>
      </div>
    </MotionSection>
  )
}
