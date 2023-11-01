import { useEffect, useState } from 'react'

export default function Clock({ color, time }: { color: string; time: Date }): JSX.Element {
  const [timeClock, setTimeClock] = useState<Date>(time)

  useEffect(() => {
    const timerID = setInterval(() => setTimeClock(new Date()), 1000)

    return function cleanup() {
      clearInterval(timerID)
    }
  }, [])

  return <h1 style={{ color }}>{timeClock.toLocaleTimeString()}</h1>
}
