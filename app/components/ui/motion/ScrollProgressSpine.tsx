'use client'

import { useEffect, useState } from 'react'

export function ScrollProgressSpine() {
    const [progress, setProgress] = useState(0)
    const [activeChapter, setActiveChapter] = useState('01')

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
            setProgress(scrollPercent)

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

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
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
                    style={{ height: `${progress}%` }}
                    className="w-full bg-signal transition-all duration-150 ease-out"
                />
            </div>

            <span className="font-mono text-[9px] text-black/40 tabular-nums">
                {Math.round(progress)}%
            </span>
        </aside>
    )
}
