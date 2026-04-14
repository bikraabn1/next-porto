'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

const LandingPage = () => {
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
            }
        })

    }, { scope: pageContainer })

    return (
        <main id='main-scroller' ref={mainRef} className='h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth'>
            <section ref={pageContainer} className='page-section relative flex w-full flex-col snap-start items-center justify-center min-h-screen bg-background text-foreground overflow-hidden'>
                <div className="absolute inset-0 h-full w-full bg-overlay bg-[linear-gradient(to_right,var(--color-grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-grid-line)_1px,transparent_1px)] bg-size-[200px_100px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,var(--color-mask-solid)_70%,transparent_100%)]"></div>
                <div className='absolute bg-orange-600/20 w-160 h-160 rounded-full blur-[120px] pointer-events-none'></div>
                <div className='relative flex flex-col items-center justify-center'>
                    <h1 className='text-[clamp(4rem,20vw,20rem)] tracking-tighter leading-[0.75] font-clash-display'>
                        BIKRA
                    </h1>
                    <h1 className='text-[clamp(4rem,20vw,20rem)] tracking-tighter leading-[0.75] font-clash-display'>
                        ABNA
                    </h1>
                </div>

            </section>

            <div className='page-section flex w-full flex-col snap-start items-center justify-center min-h-screen bg-foreground text-background'>
                <h1 className='text-5xl font-bold mb-4'>Projects Part</h1>
            </div>

            <div className='page-section flex w-full flex-col snap-start items-center justify-center min-h-screen bg-foreground text-background'>
                <h1 className='text-5xl font-bold mb-4'>Tech Stack Part</h1>
            </div>

            <div className='page-section flex w-full flex-col snap-start items-center justify-center min-h-screen bg-foreground text-background'>
                <h1 className='text-5xl font-bold mb-4'>Jackson Bot Part</h1>
            </div>

            <div className='page-section flex w-full flex-col snap-start items-center justify-center min-h-screen bg-foreground text-background'>
                <h1 className='text-5xl font-bold mb-4'>About Me Part</h1>
            </div>
        </main>
    )
}

export default LandingPage
