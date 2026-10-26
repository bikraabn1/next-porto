'use client'

import { useEffect, useState } from 'react'

export function TicketOpening({ onComplete }: { onComplete?: () => void }) {
    const [phase, setPhase] = useState<'idle' | 'tearing' | 'opened' | 'done'>('idle')

    useEffect(() => {
        const hasOpened = sessionStorage.getItem('portfolio_opened')
        if (hasOpened) {
            setPhase('done')
            onComplete?.()
            return
        }

        const tearTimer = setTimeout(() => {
            setPhase('tearing')
        }, 650)

        const openTimer = setTimeout(() => {
            setPhase('opened')
            sessionStorage.setItem('portfolio_opened', 'true')
        }, 1400)

        const doneTimer = setTimeout(() => {
            setPhase('done')
            onComplete?.()
        }, 2200)

        return () => {
            clearTimeout(tearTimer)
            clearTimeout(openTimer)
            clearTimeout(doneTimer)
        }
    }, [onComplete])

    if (phase === 'done') return null

    const isTearing = phase === 'tearing' || phase === 'opened'
    const isOpened = phase === 'opened'

    return (
        <div
            className={`fixed inset-0 z-100 select-none overflow-hidden pointer-events-none transition-opacity duration-700 ${
                isOpened ? 'opacity-0' : 'opacity-100'
            }`}
        >
            <div
                className={`absolute inset-x-0 top-0 h-1/2 bg-ink text-background flex flex-col justify-end pb-8 px-6 sm:px-12 border-b border-dashed border-white/20 transition-transform duration-800 cubic-bezier(0.77, 0, 0.175, 1) ${
                    isOpened ? '-translate-y-full' : 'translate-y-0'
                }`}
            >
                <div className="max-w-7xl mx-auto w-full flex items-end justify-between font-mono text-[11px]">
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-signal animate-ping" />
                        <span className="text-white/60 tracking-widest uppercase">DOSSIER // ACCESS PROTOCOL</span>
                    </div>
                    <div className="text-white/40 tracking-wider">REF. 2026_BIKRA.V2</div>
                </div>
            </div>

            <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center gap-4 px-4 py-1.5 bg-signal text-white font-mono text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                    isTearing ? 'scale-125 tracking-[0.3em] opacity-0' : 'opacity-100'
                }`}
            >
                <span>[ ✂ ]</span>
                <span>TEARING ACCESS SEAL</span>
                <span>[ ✂ ]</span>
            </div>

            <div
                className={`absolute inset-x-0 bottom-0 h-1/2 bg-ink text-background flex flex-col justify-start pt-8 px-6 sm:px-12 border-t border-dashed border-white/20 transition-transform duration-800 cubic-bezier(0.77, 0, 0.175, 1) ${
                    isOpened ? 'translate-y-full' : 'translate-y-0'
                }`}
            >
                <div className="max-w-7xl mx-auto w-full flex items-start justify-between font-mono text-[11px]">
                    <div className="text-2xl sm:text-4xl font-uncut font-black uppercase tracking-tight text-white">
                        BIKRA ABNA FILQIYAST DZAKI
                    </div>
                    <div className="text-right text-white/50 text-[10px] hidden sm:block">
                        AUTHENTICATED DEV ARCHIVE
                        <br />
                        SWISS EDITORIAL FRAMEWORK
                    </div>
                </div>
            </div>
        </div>
    )
}
