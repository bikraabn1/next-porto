'use client'

import { useEffect, useRef } from 'react'

export function ScrollHorizontalName() {
    const containerRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const blockRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let rafId: number | null = null
        let blockWidth = 0

        const measure = () => {
            if (blockRef.current) {
                blockWidth = blockRef.current.offsetWidth
            }
        }

        measure()

        if (typeof document !== 'undefined' && document.fonts) {
            document.fonts.ready.then(() => {
                measure()
                updatePosition()
            })
        }

        const updatePosition = () => {
            if (!trackRef.current || !containerRef.current) return

            const rect = containerRef.current.getBoundingClientRect()
            const triggerPoint = window.innerHeight * 0.30
            const currentTop = rect.top

            let offset = 0
            if (currentTop < triggerPoint) {
                const travelDistance = triggerPoint - currentTop
                const move = travelDistance * 0.55
                offset = blockWidth > 0 ? -(move % blockWidth) : -move
            }

            trackRef.current.style.transform = `translate3d(${offset}px, 0, 0)`
        }

        const onScroll = () => {
            if (rafId !== null) return
            rafId = requestAnimationFrame(() => {
                rafId = null
                updatePosition()
            })
        }

        const onResize = () => {
            measure()
            updatePosition()
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onResize, { passive: true })
        updatePosition()

        return () => {
            if (rafId !== null) cancelAnimationFrame(rafId)
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onResize)
        }
    }, [])

    const renderTextGroup = (isPrimary = false) => (
        <div
            ref={isPrimary ? blockRef : undefined}
            className="shrink-0 flex items-center pr-8 sm:pr-14"
            aria-hidden={!isPrimary}
        >
            <div className="inline-flex items-center text-[15vw] sm:text-[13vw] font-uncut font-black uppercase leading-[0.85] tracking-tighter text-ink select-none">
                <span>BIKRA ABNA FILQIYAST DZAKI</span>
                <span className="text-signal">.</span>
                <span className="text-black/15 mx-6 sm:mx-10">//</span>
                <span>FULLSTACK DEVELOPER</span>
                <span className="text-signal">.</span>
                <span className="text-black/15 mx-6 sm:mx-10">+</span>
            </div>
        </div>
    )

    return (
        <div ref={containerRef} className="w-full overflow-hidden select-none py-6 sm:py-10 border-b border-black/10">
            <div className="flex items-center justify-between font-mono text-[10px] text-black/40 uppercase mb-3 px-1 tracking-widest">
                <span>IDENTITY INDEX // 001</span>
                <span>[ KINETIC HORIZONTAL SCROLL ]</span>
            </div>

            <div
                ref={trackRef}
                style={{ transform: 'translate3d(0, 0, 0)' }}
                className="flex whitespace-nowrap will-change-transform"
            >
                {renderTextGroup(true)}
                {renderTextGroup(false)}
                {renderTextGroup(false)}
                {renderTextGroup(false)}
            </div>

            <div className="flex items-center justify-between font-mono text-[11px] text-black/60 pt-4 mt-2 px-1 border-t border-black/5">
                <span className="font-bold">ENGINEERING ARCHITECTURES</span>
                <span className="hidden sm:inline text-black/40">NEXT.JS // TYPESCRIPT // FASTAPI // REACTIVE UI</span>
                <span className="text-signal font-bold">EDITION 2026</span>
            </div>
        </div>
    )
}
