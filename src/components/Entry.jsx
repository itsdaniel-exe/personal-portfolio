import { motion, useReducedMotion } from 'framer-motion'

const MotionArticle = motion.article
const MotionDiv = motion.div
const MotionLi = motion.li

// Status is real information, so it gets encoded in form as well as words.
const DOT = {
  building: 'bg-live',
  done: 'bg-muted',
  shelved: 'bg-faint',
}

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

// The hairline draws itself in from the left as the entry arrives.
const drawRule = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

const chip = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

function ArrowLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className="link-accent group/link">
      {children}
      {/* Arrow slides on hover — the affordance moves in the direction it takes you. */}
      <span
        aria-hidden="true"
        className="ml-1 inline-block transition-transform duration-300 group-hover/link:translate-x-1"
      >
        &rarr;
      </span>
    </a>
  )
}

export default function Entry({ project }) {
  const reduced = useReducedMotion()
  const { title, year, status, statusLabel, kind, live, repo, body, stack, next, featured, logo } =
    project

  return (
    <MotionArticle
      layout
      initial={reduced ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      variants={{ show: { transition: { staggerChildren: 0.06 } } }}
      className="group relative py-10 sm:py-14"
    >
      <MotionDiv
        variants={drawRule}
        className="absolute inset-x-0 top-0 h-px origin-left bg-rule"
        aria-hidden="true"
      />

      <div className="grid gap-x-10 gap-y-5 md:grid-cols-[9rem_minmax(0,1fr)]">
        {/*
          Margin metadata. Sticky on desktop so the year and kind stay beside the
          prose as you read down a long entry — the rail behaves like a real
          ledger margin instead of scrolling away immediately.
        */}
        <MotionDiv
          variants={reveal}
          className="flex flex-row flex-wrap items-baseline gap-x-4 gap-y-1 md:sticky md:top-24 md:h-fit md:flex-col md:gap-y-2 md:pt-2"
        >
          <span className="t-label !text-muted">{year}</span>
          <span className="t-label">{kind}</span>
        </MotionDiv>

        <div>
          <MotionDiv variants={reveal} className="flex items-center gap-3">
            {logo && (
              <img
                src={logo}
                alt=""
                width="34"
                height="34"
                decoding="async"
                className="h-[34px] w-[34px] shrink-0 object-contain transition-transform duration-500 ease-out group-hover:-rotate-6 group-hover:scale-110"
              />
            )}
            <h3
              className={`t-entry transition-colors duration-300 group-hover:text-accent ${
                featured ? 'sm:text-[2.9rem]' : ''
              }`}
            >
              {title}
            </h3>
          </MotionDiv>

          <MotionDiv variants={reveal} className="mt-2 flex items-center gap-2">
            <span
              aria-hidden="true"
              className={`inline-block h-1.5 w-1.5 rounded-full ${DOT[status] ?? 'bg-faint'}`}
            />
            <span className="t-label !tracking-[0.08em] !text-muted">{statusLabel}</span>
          </MotionDiv>

          <MotionDiv variants={reveal} className="mt-5 max-w-prose space-y-4 text-ink/85">
            {body.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </MotionDiv>

          {(live || repo) && (
            <MotionDiv variants={reveal} className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {live && <ArrowLink href={live}>Visit {new URL(live).host}</ArrowLink>}
              {repo && <ArrowLink href={repo}>Source</ArrowLink>}
            </MotionDiv>
          )}

          {stack.length > 0 && (
            <MotionDiv
              variants={{ show: { transition: { staggerChildren: 0.03 } } }}
              className="mt-6 flex flex-wrap gap-x-2.5 gap-y-2"
            >
              {stack.map((tech) => (
                <MotionLi
                  key={tech}
                  variants={chip}
                  className="list-none border border-rule bg-raised px-2.5 py-1 font-display text-xs font-medium text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  {tech}
                </MotionLi>
              ))}
            </MotionDiv>
          )}

          {next?.length > 0 && (
            <MotionDiv variants={reveal} className="mt-6 border-l border-rule pl-4 text-sm text-muted">
              <span className="t-label">Next up</span>{' '}
              <span className="ml-1">{next.join(' · ')}</span>
            </MotionDiv>
          )}
        </div>
      </div>
    </MotionArticle>
  )
}
