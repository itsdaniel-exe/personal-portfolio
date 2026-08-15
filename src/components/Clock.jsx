import { useEffect, useState } from 'react'

/*
  Live local time in India. Real information — it tells someone reading this at
  their own midday that the person behind it is asleep — and it's the cheapest
  way to make a page feel like it's running rather than sitting there.

  Formatted in Asia/Kolkata explicitly, so it shows *his* time, not the reader's.
*/
const FMT = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Kolkata',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
})

function nowParts() {
  const hour = Number(
    new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      hour12: false,
    }).format(new Date())
  )
  return { time: FMT.format(new Date()), hour }
}

export default function Clock() {
  const [{ time, hour }, setNow] = useState(nowParts)

  useEffect(() => {
    const id = setInterval(() => setNow(nowParts()), 1000)
    return () => clearInterval(id)
  }, [])

  const asleep = hour >= 1 && hour < 8
  const note = asleep
    ? "Which means I'm asleep. I'll get to it."
    : hour >= 8 && hour < 18
      ? 'Probably at my desk.'
      : 'Usually when I actually build things.'

  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <span className="t-label">Local time · India</span>
      <div>
        <p className="font-mono text-3xl font-bold tabular-nums text-ink sm:text-4xl">{time}</p>
        <p className="mt-2 text-sm text-muted">{note}</p>
      </div>
    </div>
  )
}
