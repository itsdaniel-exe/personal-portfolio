/*
  The backdrop. A sky that runs behind the entire page and cools into navy at the
  footer, with soft cloud forms drifting slowly across it.

  Clouds are blurred radial gradients rather than images — no request, no asset,
  and they scale to any viewport. Fixed so the sky stays put while content moves
  over it, which is what makes the page feel like it's sitting on something.
*/
export default function Sky() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient: sky → haze → the off-white the frames sit on */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #BFDFF6 0%, #D6E9F8 26%, #E8F1F7 52%, #EFEEE9 76%, #E7EAE6 100%)',
        }}
      />

      {/* Clouds */}
      <div
        className="absolute -left-[10%] top-[4%] h-[38vmax] w-[52vmax] animate-drift rounded-full opacity-70 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, #FFFFFF 0%, rgba(255,255,255,0) 72%)' }}
      />
      <div
        className="absolute right-[-8%] top-[18%] h-[30vmax] w-[44vmax] animate-drift rounded-full opacity-60 blur-3xl"
        style={{
          background: 'radial-gradient(closest-side, #FFFFFF 0%, rgba(255,255,255,0) 70%)',
          animationDelay: '-9s',
        }}
      />
      <div
        className="absolute left-[22%] top-[46%] h-[26vmax] w-[40vmax] animate-drift rounded-full opacity-50 blur-3xl"
        style={{
          background: 'radial-gradient(closest-side, #FFFFFF 0%, rgba(255,255,255,0) 70%)',
          animationDelay: '-17s',
        }}
      />
    </div>
  )
}
