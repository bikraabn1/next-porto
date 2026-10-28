'use client'

import { useEffect, useRef, useState } from 'react'

export function ScrollProgressSpine() {
    const [activeChapter, setActiveChapter] = useState('01 // INTRO')
    const barRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let rafId: number | null = null

        const handleScroll = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrollPercent = docHeight > 0 ? Math.min(Math.max((scrollTop / docHeight) * 100, 0), 100) : 0

            if (barRef.current) {
                barRef.current.style.height = `${scrollPercent}%`
            }

            if (scrollPercent < 20) {
                setActiveChapter('01 // INTRO')
            } else if (scrollPercent < 55) {
                setActiveChapter('02 // WORKS')
            } else if (scrollPercent < 80) {
                setActiveChapter('03 // MATRIX')
            } else {
                setActiveChapter('04 // TIMELINE')
            }
        }

        const onScroll = () => {
            if (rafId !== null) return
            rafId = requestAnimationFrame(() => {
                rafId = null
                handleScroll()
            })
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll, { passive: true })
        handleScroll()

        return () => {
            if (rafId !== null) cancelAnimationFrame(rafId)
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
    }, [])

    return (
        <aside
            aria-hidden="true"
            className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 select-none pointer-events-none"
        >
            <span
                style={{
                    writingMode: 'vertical-rl',
                }}
                className="font-mono text-[9px] text-signal font-bold tracking-widest uppercase mb-2"
            >
                {activeChapter}
            </span>

            <div className="w-[1px] h-32 bg-black/15 relative overflow-hidden">
                <div
                    ref={barRef}
                    style={{ height: '0%' }}
                    className="w-full bg-signal will-change-[height]"
                />
            </div>

            <span className="font-mono text-[8px] text-black/30">[ CH ]</span>
        </aside>
    )
}
