# Portfolio — Daniel Rupaan Kalery F

A single-page personal site. React + Vite + Tailwind, no router.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run lint
```

## Design

"Ledger" — the site is an index of things made, with year and status metadata in
the left margin and prose in the body. Dropped projects sit in the same list
rather than a separate section.

- **Palette** — pale green-grey paper `#E9EAE3`, forest-black ink `#161A14`, one
  ultramarine accent `#2B2BD1`. Light-only on purpose; tokens live in
  `tailwind.config.js`.
- **Type** — Bricolage Grotesque (display) + Newsreader (body), via Google Fonts.
- **Motion** — Framer Motion, deliberately minimal, and fully disabled under
  `prefers-reduced-motion`.

## Editing content

Almost everything lives in `src/data/projects.js` — projects, unfinished
projects, and contact links. The components render whatever is in there.

Entries with `repo: null` or `live: null` simply render no link, so half-finished
data never ships a dead link.

## Things to swap in later

Each is marked with a comment at the swap-in point:

| What | Where | How |
| --- | --- | --- |
| Résumé PDF | `src/components/Contact.jsx` | Drop the file at `public/resume.pdf`, set `RESUME_READY = true` |
| `remmate.io` domain | `src/data/projects.js` | Set `REMMATE_LIVE = true` once the domain resolves |

Sentinel AI is deliberately brief while it's under development, and Astrogator
leaves out team size and placement on purpose. Neither is a gap to fill.

## Updating the Remmate mark

The Remmate entry shows a 34px product mark — it's the only entry that gets one,
because it's the only *product* in a list of projects.

`brand/remmate-logo.png` is the full-size master — kept out of `public/` so it
isn't deployed. `public/remmate-mark.png` is the tight, square, 136px version
the site actually loads. To swap the artwork:

```bash
# 1. replace brand/remmate-logo.png with the new artwork
python scripts/make-mark.py
```

The script crops transparent padding, squares it, and downscales — so the master
can be any size or aspect. Don't hand-edit `remmate-mark.png`; it's generated.

## Deploying

Cloudflare Workers static assets. Config is `wrangler.jsonc` — no `main` entry,
because there's no Worker code, just `dist/`.

```bash
wrangler login      # once
npm run build
npx wrangler deploy
```

`public/_headers` sets security headers on every path and a one-year immutable
cache on `/assets/*`. Verify locally without deploying:

```bash
npx wrangler dev --port 8788
```
