import Reveal from './Reveal'

// Status is real information, so it gets encoded in form as well as words.
const DOT = {
  building: 'bg-live',
  done: 'bg-muted',
  shelved: 'bg-faint',
}

function ArrowLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className="link-accent">
      {children}
      <span aria-hidden="true"> &rarr;</span>
    </a>
  )
}

export default function Entry({ project }) {
  const { title, year, status, statusLabel, kind, live, repo, body, stack, next, featured, logo } =
    project

  return (
    <Reveal as="article" className="rule-top py-10 sm:py-14">
      <div className="grid gap-x-10 gap-y-5 md:grid-cols-[9rem_minmax(0,1fr)]">
        {/* Margin metadata — the ledger's left rail. */}
        <div className="flex flex-row flex-wrap items-baseline gap-x-4 gap-y-1 md:flex-col md:gap-y-2 md:pt-2">
          <span className="t-label !text-muted">{year}</span>
          <span className="t-label">{kind}</span>
        </div>

        <div>
          {/*
            Product mark, kept small on purpose. The Remmate logo is a saturated
            gradient and the rest of this page is not — at ~34px it reads as a
            real product identity rather than fighting the palette.
          */}
          <div className="flex items-center gap-3">
            {logo && (
              <img
                src={logo}
                alt=""
                width="34"
                height="34"
                decoding="async"
                className="h-[34px] w-[34px] shrink-0 object-contain"
              />
            )}
            <h3 className={`t-entry ${featured ? 'sm:text-[2.9rem]' : ''}`}>{title}</h3>
          </div>

          <p className="mt-2 flex items-center gap-2">
            <span
              aria-hidden="true"
              className={`inline-block h-1.5 w-1.5 rounded-full ${DOT[status] ?? 'bg-faint'}`}
            />
            <span className="t-label !text-muted !tracking-[0.08em]">{statusLabel}</span>
          </p>

          <div className="mt-5 max-w-prose space-y-4 text-ink/85">
            {body.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>

          {(live || repo) && (
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {live && <ArrowLink href={live}>Visit {new URL(live).host}</ArrowLink>}
              {repo && <ArrowLink href={repo}>Source</ArrowLink>}
            </div>
          )}

          {stack.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-x-2.5 gap-y-2">
              {stack.map((tech) => (
                <li
                  key={tech}
                  className="border border-rule bg-raised px-2.5 py-1 font-display text-xs font-medium text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}

          {next?.length > 0 && (
            <p className="mt-6 border-l border-rule pl-4 text-sm text-muted">
              <span className="t-label">Next up</span>{' '}
              <span className="ml-1">{next.join(' · ')}</span>
            </p>
          )}
        </div>
      </div>
    </Reveal>
  )
}
