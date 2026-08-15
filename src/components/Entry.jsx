import { motion, useReducedMotion } from 'framer-motion'

const MotionArticle = motion.article
const MotionDiv = motion.div
const MotionLi = motion.li

// Status is real information, so it's encoded in form as well as words.
const DOT = {
  building: 'bg-live',
  done: 'bg-accent',
  shelved: 'bg-faint',
}

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const chip = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

function ArrowLink({ href, children, hot = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={`pill group/link gap-1.5 px-3.5 py-2 no-underline transition-colors duration-300 ${
        hot ? 'bg-accent text-white hover:bg-ink' : 'border border-rule bg-raised text-ink hover:border-ink'
      }`}
    >
      {children}
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-300 group-hover/link:translate-x-1"
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
      initial={reduced ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      variants={{ show: { transition: { staggerChildren: 0.05 } } }}
      whileHover={reduced ? undefined : { y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="module group p-5 transition-shadow duration-300 hover:shadow-lift sm:p-8"
    >
      {/* Header row: year and kind as chips, so the metadata reads at a glance. */}
      <MotionDiv variants={reveal} className="flex flex-wrap items-center gap-2">
        <span className="pill border border-rule bg-raised px-2.5 py-1 text-muted">{year}</span>
        <span className="pill border border-rule bg-raised px-2.5 py-1 text-muted">{kind}</span>
        <span className="ml-auto flex items-center gap-2">
          <span
            aria-hidden="true"
            className={`inline-block h-1.5 w-1.5 rounded-full ${DOT[status] ?? 'bg-faint'}`}
          />
          <span className="t-label !text-muted">{statusLabel}</span>
        </span>
      </MotionDiv>

      {/*
        The checkbox is the conceit: this page is a task list, and `done` means
        the thing actually shipped. It's decorative-but-true, so it's aria-hidden
        and the real state is already in statusLabel above.
      */}
      <MotionDiv variants={reveal} className="mt-5 flex items-center gap-3">
        <span
          aria-hidden="true"
          className={`grid h-6 w-6 shrink-0 place-items-center rounded-md border-2 transition-colors duration-300 ${
            status === 'done'
              ? 'border-accent bg-accent text-white'
              : status === 'building'
                ? 'border-live text-live'
                : 'border-rule text-transparent'
          }`}
        >
          {status === 'done' ? (
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M3 8.5l3.2 3.2L13 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : status === 'building' ? (
            <span className="h-2 w-2 rounded-full bg-live" />
          ) : null}
        </span>
        {logo && (
          <img
            src={logo}
            alt=""
            width="40"
            height="40"
            decoding="async"
            className="h-10 w-10 shrink-0 object-contain transition-transform duration-500 ease-out group-hover:-rotate-6 group-hover:scale-110"
          />
        )}
        <h3 className={`t-entry ${featured ? 'sm:text-[2.6rem]' : ''}`}>{title}</h3>
      </MotionDiv>

      <MotionDiv variants={reveal} className="mt-4 max-w-prose space-y-4 text-ink/80">
        {body.map((para) => (
          <p key={para.slice(0, 24)}>{para}</p>
        ))}
      </MotionDiv>

      {(live || repo) && (
        <MotionDiv variants={reveal} className="mt-6 flex flex-wrap gap-2">
          {live && (
            <ArrowLink href={live} hot>
              Visit {new URL(live).host.replace(/^www\./, '')}
            </ArrowLink>
          )}
          {repo && <ArrowLink href={repo}>Source</ArrowLink>}
        </MotionDiv>
      )}

      {stack.length > 0 && (
        <MotionDiv
          variants={{ show: { transition: { staggerChildren: 0.025 } } }}
          className="mt-6 flex flex-wrap gap-2"
        >
          {stack.map((tech) => (
            <MotionLi
              key={tech}
              variants={chip}
              className="pill list-none border border-rule bg-card px-2.5 py-1 text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              {tech}
            </MotionLi>
          ))}
        </MotionDiv>
      )}

      {next?.length > 0 && (
        <MotionDiv variants={reveal} className="mt-6 rounded-xl bg-raised p-4">
          <span className="t-label">Next up</span>
          <p className="mt-1 text-sm text-muted">{next.join(' · ')}</p>
        </MotionDiv>
      )}
    </MotionArticle>
  )
}
