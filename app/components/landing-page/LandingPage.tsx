'use client'
import { useTypeWriterEffect } from '@/app/hooks/useTypeWriterEffect'
import { useRef } from 'react'

interface Props { }

function LandingPage(props: Props) {
    const { } = props
    const words = ["FRONTEND DEVELOPER", "WEB ENTHUSIAST", "ML ENTHUSIAST"]
    const textRef = useRef<HTMLElement | null>(null)
    const typeWriter = useTypeWriterEffect(words, textRef)

    return (
        <main className='h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth'>
            <div className='flex w-full flex-col snap-start items-center justify-center min-h-screen bg-background text-foreground'>
                <h1 className='text-5xl font-bold mb-4'><span ref={textRef}></span></h1>
            </div>

            <div className='flex w-full flex-col snap-start items-center justify-center min-h-screen bg-foreground text-background'>
                <h1 className='text-5xl font-bold mb-4'>Tech Stack Part</h1>
            </div>

            <div className='flex w-full flex-col snap-start items-center justify-center min-h-screen bg-foreground text-background'>
                <h1 className='text-5xl font-bold mb-4'>Projects Part</h1>
            </div>

            <div className='flex w-full flex-col snap-start items-center justify-center min-h-screen bg-foreground text-background'>
                <h1 className='text-5xl font-bold mb-4'>Call Center Part</h1>
            </div>

            <div className='flex w-full flex-col snap-start items-center justify-center min-h-screen bg-foreground text-background'>
                <h1 className='text-5xl font-bold mb-4'>Jackson Bot Part</h1>
            </div>

            <div className='flex w-full flex-col snap-start items-center justify-center min-h-screen bg-foreground text-background'>
                <h1 className='text-5xl font-bold mb-4'>My Bini List</h1>
            </div>
        </main>
    )
}

export default LandingPage
