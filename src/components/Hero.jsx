import { motion, useReducedMotion } from 'framer-motion'
import { projects, unfinished, links } from '../data/projects'
import { stagger, fadeUp } from '../lib/motion'
import Magnetic from './Magnetic'
import Module from './Module'
import Clock from './Clock'
import Counter from './Counter'
import Marquee from './Marquee'
import DotText from './DotText'
import Note from './Note'
import DoNotDrag from './DoNotDrag'

const MotionSection = motion.section
const MotionDiv = motion.div
const MotionP = motion.p

// Every distinct technology across every project, deduped — a real inventory of
// what he's actually touched rather than a hand-written "skills" list.
const STACK = [...new Set(projects.flatMap((p) => p.stack))]

export default function Hero() {
  const reduced = useReducedMotion()
  const done = projects.filter((p) => p.status === 'done').length

  return (
    <MotionSection
      id="top"
      initial={reduced ? false : 'hidden'}
      animate="show"
      variants={stagger}
      className="mx-auto max-w-6xl px-4 pb-10 pt-8 sm:px-6 sm:pt-12"
    >
      <MotionDiv variants={fadeUp} className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="pill gap-2 border border-rule bg-frame px-3 py-1.5 text-muted">
          Open to work &amp; collabs
        </span>
        <span className="t-label">Fourth year &middot; CSBS</span>
        {/* Only true where there's a cursor and motion is allowed. */}
        <Note className="ml-1 hidden motion-reduce:!hidden [@media(pointer:fine)]:inline-block">
          run your cursor over the headline &rarr;
        </Note>
      </MotionDiv>

      {/*
        Halftone headline. The dots clear under the cursor to reveal solid type.
        The accessible text lives in the component's sr-only span.
      */}
      <MotionDiv variants={fadeUp} className="mt-6">
        <DotText text="I build things because something bugged me." />
      </MotionDiv>

      <MotionP variants={fadeUp} className="t-lede mt-6 max-w-prose">
        Or because I wanted to know how it worked and couldn&rsquo;t leave it alone. That&rsquo;s
        genuinely the whole method &mdash; college projects, a hackathon build, a product
        I&rsquo;m still shipping, and a couple I didn&rsquo;t finish.
      </MotionP>

      {/* The bento. Each frame is one true thing. */}
      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Module name="now.txt" tilt className="lg:col-span-2" delay={0.02}>
          <div className="flex h-full flex-col justify-between gap-5">
            <span className="t-label">Currently building</span>
            <div>
              <p className="t-section">
                <Magnetic strength={0.2}>
                  <a
                    href={links.remmate}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-brand no-underline"
                  >
                    Remmate
                  </a>
                </Magnetic>
              </p>
              <p className="mt-3 max-w-prose text-muted">
                A reminders and notes app I made so I&rsquo;d finally use one. Runs entirely on
                free tiers, which is most of why it&rsquo;s built the way it is.
              </p>
              <Note className="mt-3 block" rotate={-1}>
                yes, this whole site is dressed as a to-do list. that&rsquo;s the joke.
              </Note>
            </div>
          </div>
        </Module>

        <Module name="clock" tilt delay={0.06}>
          <Clock />
        </Module>

        <Module name="count" tilt delay={0.1}>
          <div className="flex h-full flex-col justify-between gap-6">
            <Counter to={done} label="Actually finished" />
            <Counter to={unfinished.length} label="Abandoned" />
          </div>
        </Module>

        <div className="sm:col-span-2 lg:col-span-2">
          <DoNotDrag />
        </div>

        <Module name="stack.json" className="lg:col-span-4" delay={0.14}>
          <span className="t-label">Everything I&rsquo;ve actually used</span>
          <div className="-mx-5 mt-4 sm:-mx-7">
            <Marquee items={STACK} />
          </div>
        </Module>
      </div>
    </MotionSection>
  )
}
