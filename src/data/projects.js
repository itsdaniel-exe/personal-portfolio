/*
  The ledger.

  `body` is an array of paragraphs. `status` drives the dot colour in Entry.jsx
  ('building' | 'done' | 'shelved').

  Repo links and stacks below were taken from the public repos on
  github.com/itsdaniel-exe and match what's actually in them. Sentinel AI and
  Astrogator have no public repo yet — Entry.jsx renders no link when `repo` is
  null, so nothing here is a dead link.
*/

/*
  REMMATE DOMAIN SWAP-IN POINT
  ----------------------------
  remmate.io isn't registered yet — it returned NXDOMAIN from both Google and
  Cloudflare DNS on 14 Aug 2026, so linking it would have shipped a dead link on
  the one project you most want people to click.

  Flip this to true once the domain is live. The "Visit remmate.io" button, the
  hero link and the contact row all switch on from here — nothing else to change.
*/
export const REMMATE_LIVE = false
export const REMMATE_URL = 'https://remmate.io'
export const REMMATE_REPO = 'https://github.com/itsdaniel-exe/Remmate.io'

export const projects = [
  {
    id: 'remmate',
    title: 'Remmate',
    year: 'Now',
    status: 'building',
    statusLabel: 'In active development',
    kind: 'Product',
    group: 'Product',
    live: REMMATE_LIVE ? REMMATE_URL : null,
    repo: REMMATE_REPO,
    /*
      remmate-mark.png is a tight, square, 136px crop generated from the
      full-size master in brand/remmate-logo.png (which has ~2/3 transparent
      padding and weighs 221 KB — far too heavy to paint a 34px mark).

      To change the artwork: replace brand/remmate-logo.png and run
      `python scripts/make-mark.py`. See the README.
    */
    logo: '/remmate-mark.png',
    featured: true,
    body: [
      "A reminders, notes and calendar app. I built it because I'd bounced off every other one, and I wanted the thing I'd actually open every morning. It's aimed at the same shelf as Todoist and TickTick — not at a portfolio page.",
      "The constraint I set myself is that it runs entirely on free tiers. No paid infrastructure anywhere. That's quietly driven most of the architecture: background jobs sit on Cloudflare Workers with cron triggers rather than Firebase Functions, purely because Functions would have pushed me onto a paid plan. Storage is split between Firestore and Supabase for the same reason.",
      'One codebase ships as a web app, a PWA and a Windows desktop build. Notes with AI assists, one-off and recurring reminders, AI quick-add, the month/week/day calendar views and Google Calendar export all work today. Push notifications are written and waiting on a deploy.',
    ],
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind',
      'Electron',
      'Firebase',
      'Supabase',
      'Cloudflare Workers',
      'Gemini 2.5 Flash',
    ],
    next: ['Telegram capture', 'Email-to-reminder', 'AI day scheduling'],
  },
  {
    id: 'sentinel',
    title: 'Sentinel AI',
    year: 'Final year',
    status: 'building',
    statusLabel: 'In progress',
    kind: 'College project',
    group: 'College',
    live: null,
    repo: null,
    body: [
      // Deliberately short: it's still under development, so there's no finished
      // claim to make yet. Worth expanding once there's something concrete to say.
      "My final year project. An AI-assisted security platform that pulls guidance and the networking and routing side into one place, instead of spreading them across separate tools. It's still under development, so I'll leave it at that for now.",
    ],
    stack: [],
  },
  {
    id: 'zensleep',
    title: 'ZenSleep',
    year: '2025',
    status: 'building',
    statusLabel: 'Live · YUKTI 2025',
    kind: 'Hardware + ML',
    group: 'Hardware',
    live: 'https://zensleep.daniwork300.workers.dev',
    repo: 'https://github.com/itsdaniel-exe/ZenSleep',
    body: [
      'A sleep tracker that works out how stressed you are from how you slept. A band with a motion sensor and a heart-rate sensor logs the night, a scoring engine turns 30-second epochs into a 0–100 score across duration, continuity, latency and heart-rate stability, and you get a Low/Moderate/High stress reading out of it.',
      "The scoring is entirely rule-based and explainable — I didn't want a number nobody could argue with. You set your own target hours rather than being told 7–9 is correct, and the calendar colours every night by stress so a bad week is visible at a glance.",
      'Accounts are real: PBKDF2-hashed passwords, signed session cookies, per-account data. The band pairs with a revocable API key so it never needs to know a user id. There is a sample-data button, so you can poke at the whole dashboard without owning the hardware.',
    ],
    stack: ['ESP32', 'MPU6050', 'MAX30102', 'React', 'Vite', 'Cloudflare Workers', 'Hono', 'D1'],
  },
  {
    id: 'astrogator',
    title: 'Astrogator',
    year: '2025',
    status: 'done',
    statusLabel: 'Built at a NASA hackathon',
    kind: 'Hackathon',
    group: 'Hackathon',
    live: null,
    repo: null,
    body: [
      "A space mission planning tool, built with a team over a NASA hackathon. It pulls NASA's public datasets in and puts trajectories and spacecraft navigation into an interactive 3D view, so a mission becomes something you can poke at rather than a table you read.",
      'Python models on the back end handle the analysis and the recommendations, so the visualisation is showing you real computed output rather than a pretty animation.',
    ],
    // Team size and placement left out on purpose — not a gap to fill in.
    stack: ['React', 'TypeScript', 'Three.js', 'FastAPI', 'NASA APIs', 'Supabase', 'Vercel'],
  },
  {
    id: 'aether-logger',
    title: 'Aether Logger',
    year: 'Third year',
    status: 'done',
    statusLabel: 'Finished',
    kind: 'College project',
    group: 'College',
    live: null,
    repo: 'https://github.com/itsdaniel-exe/AetherLogger',
    body: [
      'A Chrome extension for proctoring online exams. A YOLOv8 model runs inside the browser through ONNX Runtime and flags phones, books and extra people in the camera feed — the detection happens on-device, so no video gets shipped off anywhere to be analysed.',
      'Alongside that it watches the browser-side things that matter during an exam: tab switches, dev-tools shortcuts, flagged URLs. Examiners get a live dashboard with every examinee and a running violation feed; examinees just enter a code to join. State syncs through Firebase.',
    ],
    stack: ['Manifest V3', 'YOLOv8', 'ONNX Runtime', 'Firebase', 'JavaScript'],
  },
  {
    id: 'bloodlink',
    title: 'BloodLink',
    year: 'Second year',
    status: 'done',
    statusLabel: 'Finished',
    kind: 'College project',
    group: 'College',
    live: null,
    repo: 'https://github.com/itsdaniel-exe/BloodLink',
    body: [
      'Someone posts an urgent blood request, and a logistic regression model scores every eligible donor on how likely they actually are to respond — donation history, past behaviour, and straight-line distance from the hospital — then alerts the top of that list first, instead of notifying everybody and hoping.',
      "There's a hospital console for raising requests and managing inventory, real push notifications through Firebase Cloud Messaging rather than a mock log, and a dashboard showing blood group and urgency breakdowns. It runs on free tiers, so it costs nothing sitting idle.",
    ],
    stack: ['React', 'Vite', 'Node.js', 'Express', 'Firebase Auth', 'FCM', 'Tailwind', 'Recharts'],
  },
  {
    id: 'qupid',
    title: 'Qupid',
    year: '—',
    status: 'shelved',
    statusLabel: 'Built, never adopted',
    kind: 'College tool',
    group: 'College',
    live: null,
    repo: 'https://github.com/itsdaniel-exe/Qupid',
    body: [
      "An AI question paper generator for the college. It's done, and it works. The college never approved it, so nobody has ever used it. That happens.",
    ],
    stack: ['Python'],
  },
]

export const unfinished = [
  {
    id: 'plaro',
    title: 'Plaro',
    body: 'An educational social media app. I lost the thread on it about halfway through and started doubting anyone would actually use it, so it stopped.',
  },
  {
    id: 'disaster',
    title: 'A disaster management web app',
    body: 'Started it with some juniors, got a decent way in, and it quietly fizzled out. No dramatic reason.',
  },
]

export const links = {
  email: 'daniwork300@gmail.com',
  github: 'https://github.com/itsdaniel-exe',
  githubHandle: 'itsdaniel-exe',
  linkedin: 'https://www.linkedin.com/in/daniel-rupaan-kalery-f-47786821b',
  linkedinHandle: 'daniel-rupaan-kalery-f',
  // Falls back to the repo until the domain is live, so this is never a dead link.
  remmate: REMMATE_LIVE ? REMMATE_URL : REMMATE_REPO,
  remmateLabel: REMMATE_LIVE ? 'remmate.io' : 'Source — domain coming soon',
}

/*
  Skills, grouped by what they're actually for. Every entry below appears in at
  least one project's `stack` above — this is an inventory of what's been used,
  not a wishlist.
*/
export const skillGroups = [
  {
    label: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Three.js', 'Framer Motion'],
  },
  {
    label: 'Backend & APIs',
    items: ['Node.js', 'Express', 'Hono', 'FastAPI', 'Cloudflare Workers'],
  },
  {
    label: 'Data & Auth',
    items: ['Firestore', 'Supabase', 'D1', 'PostgreSQL', 'Firebase Auth'],
  },
  {
    label: 'AI & ML',
    items: ['Gemini 2.5 Flash', 'YOLOv8', 'ONNX Runtime', 'Python'],
  },
  {
    label: 'Platform',
    items: ['Electron', 'Manifest V3', 'ESP32', 'Arduino', 'PWA'],
  },
]

/*
  Trajectory — one line per year. Derived from the projects above rather than
  invented job titles; these were college projects and side builds, not roles.
*/
export const trajectory = [
  { year: '2026', what: 'Sentinel AI', note: 'Final year project, in progress' },
  { year: '2025', what: 'ZenSleep · Astrogator', note: 'Hardware + a NASA hackathon' },
  { year: '2025', what: 'Remmate', note: 'Started the app I actually use' },
  { year: '2024', what: 'Aether Logger', note: 'Third year — proctoring extension' },
  { year: '2023', what: 'BloodLink', note: 'Second year — donor matching' },
]
