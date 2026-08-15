# Portfolio site

Single-page personal site for Daniel Rupaan Kalery F. React + Vite + Tailwind,
no router. See README.md for commands and deploy steps.

## Design system — "Ledger"

The site is an index of things made: year and status metadata in a left rail,
prose in the body. Dropped projects sit in the same list rather than a separate
section. Structure encodes real information — don't add decorative numbering,
eyebrows or dividers that don't mean anything.

- **Palette** (`tailwind.config.js`): paper `#E9EAE3`, ink `#161A14`, muted
  `#5B6156`, rule `#CBCEC2`, accent `#2B2BD1`. Ultramarine is the *only* loud
  thing on the page — keep everything else quiet.
- **Type**: Bricolage Grotesque (display) + Newsreader (body), via Google Fonts.
  Type scale lives in `src/index.css` as `.t-hero` / `.t-section` / `.t-entry` /
  `.t-label` / `.t-lede`. Use those, don't hand-roll sizes.
- **Light-only on purpose.** The paper *is* the identity. Don't add a dark mode
  without asking.
- **Motion**: minimal by design (14px travel, soft fade) and fully disabled under
  `prefers-reduced-motion`. Don't add more.

Deliberately avoided: cream + serif + terracotta, Inter/Space Grotesk, mono
terminal-dark, emoji section markers, rounded cards with accent rails. These read
as templated. Don't reintroduce them.

## Content

Almost everything lives in `src/data/projects.js` — projects, unfinished
projects, contact links. Components render whatever is there.

- `repo: null` / `live: null` renders **no link** rather than a dead one. Keep
  that property; never ship a placeholder or `#` href.
- Two feature flags gate unfinished things: `REMMATE_LIVE` (the domain isn't
  registered yet) and `RESUME_READY` in `src/components/Contact.jsx`. Flip, don't
  hand-edit the markup.

## The Remmate mark

`brand/remmate-logo.png` is the master, kept out of `public/` so it isn't
deployed. `public/remmate-mark.png` is generated — run `python
scripts/make-mark.py` after replacing the master. Don't hand-edit the mark.

It's the only image on the site, and only on Remmate, because Remmate is the only
*product* among projects. Don't add logos to the other entries.

## Copy

Written in Daniel's voice — plain, first person, contractions, no resume-speak.
See the global CLAUDE.md. Don't inflate a project or add buzzwords when editing.

## Before finishing

Run `npm run lint` and `npm run build`. Check the page at 375px — mobile is the
priority, since most people open this from a link he sent them.
