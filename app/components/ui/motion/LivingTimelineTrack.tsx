'use client'

import { useEffect, useRef, useState } from 'react'

export function LivingTimelineTrack({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [lineHeight, setLineHeight] = useState(0)

    useEffect(() => {
        const updateLine = () => {
            if (!containerRef.current) return
            const rect = containerRef.current.getBoundingClientRect()
            const windowHeight = window.innerHeight

            const startOffset = windowHeight * 0.75
            const totalDistance = rect.height
            const currentPosition = startOffset - rect.top

            let progress = 0
            if (currentPosition > 0) {
                progress = Math.min(Math.max(currentPosition / totalDistance, 0), 1)
            }
            setLineHeight(progress * 100)
        }

        window.addEventListener('scroll', updateLine, { passive: true })
        updateLine()
        return () => window.removeEventListener('scroll', updateLine)
    }, [])

    return (
        <div ref={containerRef} className="relative pl-6 sm:pl-8">
            <div className="absolute left-0 top-3 bottom-3 w-[1px] bg-black/15" />
            <div
                style={{ height: `${lineHeight}%` }}
                className="absolute left-0 top-3 w-[2px] bg-signal shadow-[0_0_8px_rgba(255,0,0,0.8)] transition-all duration-75 ease-out will-change-[height]"
            />
            {children}
        </div>
    )
}
