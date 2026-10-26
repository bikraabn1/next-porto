'use client'

import { useEffect, useRef, useState } from 'react'

export function ParallaxRevealFrame({
    children,
    className = '',
}: {
    children: React.ReactNode
    className?: string
}) {
    const frameRef = useRef<HTMLDivElement>(null)
    const [offsetY, setOffsetY] = useState(0)
    const [clipPercent, setClipPercent] = useState(100)

    useEffect(() => {
        const handleScroll = () => {
            if (!frameRef.current) return
            const rect = frameRef.current.getBoundingClientRect()
            const windowHeight = window.innerHeight

            const center = rect.top + rect.height / 2
            const distance = center - windowHeight / 2
            setOffsetY(distance * 0.08)

            if (rect.top < windowHeight && rect.bottom > 0) {
                const revealProgress = Math.min(Math.max((windowHeight - rect.top) / (rect.height * 0.85), 0), 1)
                setClipPercent((1 - revealProgress) * 100)
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            ref={frameRef}
            style={{
                clipPath: `inset(${clipPercent}% 0% 0% 0%)`,
            }}
            className={`transition-[clip-path] duration-700 ease-out overflow-hidden ${className}`}
        >
            <div
                style={{
                    transform: `translateY(${offsetY}px) scale(1.08)`,
                }}
                className="w-full h-full will-change-transform transition-transform duration-75 ease-out"
            >
                {children}
            </div>
        </div>
    )
}
