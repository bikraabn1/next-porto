'use client'
import { useTypeWriterEffect } from '@/app/hooks/useTypeWriterEffect'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

const LandingPage = () => {
    const words = ["FRONTEND DEVELOPER", "WEB ENTHUSIAST", "ML ENTHUSIAST"]
    const textRef = useRef<HTMLElement | null>(null)

    // useTypeWriterEffect(words, textRef)

    gsap.registerPlugin(useGSAP)
    gsap.registerPlugin(ScrollTrigger)

    const pageContainer = useRef<HTMLElement | null>(null)
    const mainRef = useRef<HTMLElement | null>(null)

    useGSAP(() => {
        gsap.to(pageContainer.current, {
            borderBottomLeftRadius: '20px',
            borderBottomRightRadius: '20px',
            ease: 'none',
            scrollTrigger: {
                trigger: pageContainer.current,
                scroller: mainRef.current,
                start: '400',
                end: 'bottom top',
                scrub: true,
                pin: true,
                markers: true,
            }
        })

    }, { scope: pageContainer })

    return (
        <main ref={mainRef} className='h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth'>
            <section ref={pageContainer} className='page-section flex w-full flex-col snap-start items-center justify-center min-h-screen bg-background text-foreground'>
                <p>Hi, My Name is</p>
                <p className='text-3xl font-semibold'>Bikra Abna</p>
                <h1 className='text-5xl font-bold mb-4'><span ref={textRef}></span></h1>
            </section>

            <div className='page-section flex w-full flex-col snap-start items-center justify-center min-h-screen bg-foreground text-background'>
                <h1 className='text-5xl font-bold mb-4'>Tech Stack Part</h1>
            </div>

            <div className='page-section flex w-full flex-col snap-start items-center justify-center min-h-screen bg-foreground text-background'>
                <h1 className='text-5xl font-bold mb-4'>Projects Part</h1>
            </div>

            <div className='page-section flex w-full flex-col snap-start items-center justify-center min-h-screen bg-foreground text-background'>
                <h1 className='text-5xl font-bold mb-4'>Call Center Part</h1>
            </div>

            <div className='page-section flex w-full flex-col snap-start items-center justify-center min-h-screen bg-foreground text-background'>
                <h1 className='text-5xl font-bold mb-4'>Jackson Bot Part</h1>
            </div>

            <div className='flex w-full flex-col snap-start items-center justify-center min-h-screen bg-foreground text-background'>
                <h1 className='text-5xl font-bold mb-4'>My Bini List</h1>
            </div>
        </main>
    )
}

export default LandingPage
