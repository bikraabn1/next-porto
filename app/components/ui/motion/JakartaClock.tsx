'use client'

import { useEffect, useState } from 'react'

export function JakartaClock() {
    const [time, setTime] = useState<string>('')

    useEffect(() => {
        const updateClock = () => {
            const now = new Date()
            const timeString = now.toLocaleTimeString('en-GB', {
                timeZone: 'Asia/Jakarta',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            })
            setTime(timeString)
        }

        updateClock()
        const interval = setInterval(updateClock, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <span className="font-mono tabular-nums text-black/80 font-bold">
            {time || '00:00:00'} <span className="text-signal text-[9px] font-normal">WIB</span>
        </span>
    )
}
