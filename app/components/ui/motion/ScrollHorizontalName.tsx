'use client'

import { useEffect, useRef, useState } from 'react'

export function ScrollHorizontalName() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [translateX, setTranslateX] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return
            const rect = containerRef.current.getBoundingClientRect()
            const windowHeight = window.innerHeight

            const scrollY = window.scrollY
            const move = scrollY * 0.45
            setTranslateX(-move)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div ref={containerRef} className="w-full overflow-hidden select-none py-6 sm:py-10 border-b border-black/10">
            <div className="flex items-center justify-between font-mono text-[10px] text-black/40 uppercase mb-3 px-1 tracking-widest">
                <span>IDENTITY INDEX // 001</span>
                <span>[ KINETIC HORIZONTAL SCROLL ]</span>
            </div>

            <div
                style={{
                    transform: `translate3d(${translateX}px, 0, 0)`,
                }}
                className="whitespace-nowrap will-change-transform transition-transform duration-75 ease-out"
            >
                <div className="inline-block text-[15vw] sm:text-[13vw] font-uncut font-black uppercase leading-[0.85] tracking-tighter text-ink">
                    BIKRA ABNA FILQIYAST DZAKI<span className="text-signal">.</span>
                    <span className="text-black/15 mx-6 sm:mx-10">//</span>
                    FULLSTACK DEVELOPER<span className="text-signal">.</span>
                </div>
            </div>

            <div className="flex items-center justify-between font-mono text-[11px] text-black/60 pt-4 mt-2 px-1 border-t border-black/5">
                <span className="font-bold">ENGINEERING ARCHITECTURES</span>
                <span className="hidden sm:inline text-black/40">NEXT.JS // TYPESCRIPT // FASTAPI // REACTIVE UI</span>
                <span className="text-signal font-bold">EDITION 2026</span>
            </div>
        </div>
    )
}
