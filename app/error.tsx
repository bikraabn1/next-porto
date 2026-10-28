'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function ErrorBoundary({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error('Unhandled runtime error:', error)
    }, [error])

    return (
        <main className='w-full min-h-[85vh] bg-background text-foreground flex flex-col justify-between px-6 sm:px-12 py-20 max-w-7xl mx-auto select-none'>
            <div className='flex items-center justify-between font-mono text-[11px] text-black/50 border-b border-black/10 pb-4'>
                <div className='flex items-center gap-2'>
                    <span className='text-signal font-bold'>[500]</span>
                    <span>RUNTIME_FAULT // UNHANDLED_SIGNAL</span>
                </div>
                <div className='flex items-center gap-2 text-signal'>
                    <span className='w-1.5 h-1.5 rounded-full bg-signal animate-pulse'></span>
                    <span className='uppercase font-bold'>FAULT DETECTED</span>
                </div>
            </div>

            <div className='my-auto py-16 sm:py-24 max-w-4xl'>
                <div className='font-mono text-xs uppercase text-signal font-bold mb-4 tracking-wider'>
                    SYSTEM INTERRUPT // EXCEPTION THROWN
                </div>
                <h1 className='text-4xl sm:text-7xl md:text-8xl font-uncut font-black uppercase tracking-tighter leading-[0.92] text-black mb-8'>
                    Execution Pipeline Interrupted<span className='text-signal animate-pulse'>.</span>
                </h1>
                <p className='font-uncut text-lg sm:text-xl md:text-2xl text-black/75 font-normal leading-relaxed max-w-2xl mb-6'>
                    An unhandled runtime signal disrupted this interface renderer. State execution has been halted to prevent corrupt telemetry.
                </p>

                {error.digest && (
                    <div className='font-mono text-xs text-black/50 mb-10 p-3 bg-black/5 border border-black/10 inline-block'>
                        SIGNAL DIGEST: {error.digest}
                    </div>
                )}

                <div className='flex flex-wrap items-center gap-6 font-mono text-xs font-bold'>
                    <button
                        type='button'
                        onClick={() => reset()}
                        className='inline-flex items-center gap-2 px-5 py-3 bg-signal text-white hover:bg-black transition-colors cursor-pointer'
                    >
                        <span>RETRY EXECUTION</span>
                        <span>↺</span>
                    </button>
                    <Link
                        href='/'
                        className='inline-flex items-center gap-2 text-black/70 hover:text-signal transition-colors'
                    >
                        <span>RETURN TO STUDIO INDEX</span>
                        <span>&rarr;</span>
                    </Link>
                </div>
            </div>

            <div className='border-t border-dashed border-black/15 pt-4 flex items-center justify-between font-mono text-[10px] text-black/40 uppercase'>
                <span>// LOG SIGNATURE: 0x500_RUNTIME_FAULT</span>
                <span>[ ✂ ]</span>
                <span>TYPE-SAFE BOUNDARY ENFORCED</span>
            </div>
        </main>
    )
}
