'use client'

import { useEffect, useRef } from 'react'

export function LivingTimelineTrack({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null)
    const lineRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let rafId: number | null = null

        const updateLine = () => {
            if (!containerRef.current || !lineRef.current) return
            const rect = containerRef.current.getBoundingClientRect()
            const windowHeight = window.innerHeight

            const startOffset = windowHeight * 0.75
            const totalDistance = rect.height
            const currentPosition = startOffset - rect.top

            let progress = 0
            if (currentPosition > 0) {
                progress = Math.min(Math.max(currentPosition / totalDistance, 0), 1)
            }
            lineRef.current.style.height = `${progress * 100}%`
        }

        const onScroll = () => {
            if (rafId !== null) return
            rafId = requestAnimationFrame(() => {
                rafId = null
                updateLine()
            })
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll, { passive: true })
        updateLine()

        return () => {
            if (rafId !== null) cancelAnimationFrame(rafId)
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
    }, [])

    return (
        <div ref={containerRef} className="relative pl-7 sm:pl-10">
            <div className="absolute left-[5.5px] top-2 bottom-3 w-[1px] bg-black/15" />
            <div
                ref={lineRef}
                style={{ height: '0%' }}
                className="absolute left-[5px] top-2 w-[2px] bg-signal shadow-[0_0_8px_rgba(255,0,0,0.8)] will-change-[height]"
            />
            {children}
        </div>
    )
}
