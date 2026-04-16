'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Preloader({ onComplete }: { onComplete: () => void }) {
    const containerRef = useRef<HTMLDivElement>(null)
    const textWrapperRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const texts = gsap.utils.toArray(textWrapperRef.current?.children as HTMLCollection)
        
        const tl = gsap.timeline({
            onComplete: () => {
                gsap.to(containerRef.current, {
                    yPercent: -100,
                    duration: 0.8,
                    ease: "power4.inOut",
                    onComplete: onComplete 
                })
            }
        })
        tl.fromTo(texts, 
            { opacity: 0, x: -20 }, 
            { 
                opacity: 1, 
                x: 0, 
                duration: 0.8, 
                stagger: 1.5, 
                ease: "power2.out" 
            }
        )
        .to({}, { duration: 0.5 }) 

    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-[#0a0a0a] text-orange-500 font-mono text-xl sm:text-2xl">
            <div ref={textWrapperRef} className="flex flex-col gap-2 items-start">
                <p className='opacity-0'>{">"} fetching bikra's datas 20%...</p>
                <p className='opacity-0'>{">"} getting projects 40%...</p>
                <p className='opacity-0'>{">"} getting tech stack 60%...</p>
                <p className='opacity-0'>{">"} get ready 80%...</p>
                <p className="text-white mt-4 font-bold">{">"} welcome...</p>
            </div>
        </div>
    )
}