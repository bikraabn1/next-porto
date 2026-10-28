'use client'

import { useEffect, useRef, useState } from 'react'

export function RevealOnScroll({
    children,
    className = '',
    delay = 0,
}: {
    children: React.ReactNode
    className?: string
    delay?: number
}) {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                } else if (entry.boundingClientRect.top > window.innerHeight) {
                    setIsVisible(false)
                }
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -40px 0px',
            }
        )

        observer.observe(element)

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <div
            ref={ref}
            style={{
                transitionDelay: `${delay}ms`,
            }}
            className={`transition-all duration-700 ease-out transform ${
                isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
            } ${className}`}
        >
            {children}
        </div>
    )
}
