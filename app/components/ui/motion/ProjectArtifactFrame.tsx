'use client'

import { useEffect, useRef, useState } from 'react'

interface ProjectArtifactFrameProps {
    children: React.ReactNode
    badgeText?: string
    className?: string
    delay?: number
}

export function ProjectArtifactFrame({
    children,
    badgeText,
    className = '',
    delay = 0,
}: ProjectArtifactFrameProps) {
    const frameRef = useRef<HTMLDivElement>(null)
    const [inView, setInView] = useState(false)
    const [isSettled, setIsSettled] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        const element = frameRef.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                } else if (entry.boundingClientRect.top > window.innerHeight) {
                    setInView(false)
                    setIsSettled(false)
                    setIsHovered(false)
                }
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -40px 0px',
            }
        )

        observer.observe(element)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!inView) {
            setIsSettled(false)
            return
        }

        const duration = 700 + delay
        const timer = setTimeout(() => {
            setIsSettled(true)
        }, duration)

        return () => clearTimeout(timer)
    }, [inView, delay])

    const canHover = isSettled && isHovered

    return (
        <div
            ref={frameRef}
            onMouseEnter={() => {
                if (isSettled) setIsHovered(true)
            }}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(-40px, 0, 0)',
                opacity: inView ? 1 : 0,
                transitionDelay: `${delay}ms`,
            }}
            className={`relative overflow-hidden transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${className}`}
        >
            {badgeText && (
                <div
                    className={`absolute top-3 left-3 z-10 px-2.5 py-1 bg-black/80 backdrop-blur-md text-white font-mono text-[9px] uppercase tracking-wider flex items-center gap-2 pointer-events-none transition-opacity duration-300 ${
                        canHover ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse"></span>
                    <span>{badgeText}</span>
                </div>
            )}

            <div
                className={`w-full h-full transition-[filter,opacity] duration-500 ease-out ${
                    canHover ? 'grayscale-0 opacity-100' : 'grayscale contrast-115 opacity-90'
                }`}
            >
                {children}
            </div>
        </div>
    )
}
