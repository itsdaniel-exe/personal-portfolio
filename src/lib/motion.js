/*
  Shared motion variants.

  These live outside the components so each component file exports only
  components — otherwise react-refresh can't hot-reload them cleanly.

  One easing curve throughout ([0.16, 1, 0.3, 1] — a strong ease-out) so
  everything on the page decelerates the same way. Mixed easings are the
  quickest way to make motion feel assembled rather than designed.
*/

export const EASE = [0.16, 1, 0.3, 1]

// Parent orchestrator for masked word reveals.
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055, delayChildren: 0.1 } },
}

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}
