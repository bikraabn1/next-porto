"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useState } from "react"
import { CgClose, CgMenu } from "react-icons/cg"

gsap.registerPlugin(ScrollTrigger)

const Navigation = () => {
    const menus = ['Home', 'Projects', 'Tech Stack', 'Jackson', 'About Me']

    const topNavRef = useRef<HTMLElement>(null)
    const sideNavRef = useRef<HTMLDivElement>(null)
    const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false)

    useGSAP(() => {
        gsap.set(sideNavRef.current, { autoAlpha: 0, x: 50 })

        ScrollTrigger.create({
            start: 150,
            scroller: '#main-scroller',

            onEnter: () => {
                console.log('masuk wo')
                gsap.to(topNavRef.current, { y: -100, autoAlpha: 0, duration: 0.3 })
                gsap.to(sideNavRef.current, { x: 0, autoAlpha: 1, duration: 0.4, ease: "back.out(1.5)" })
            },

            onLeaveBack: () => {
                console.log('metu wo')
                gsap.to(sideNavRef.current, { x: 50, autoAlpha: 0, duration: 0.3 })
                gsap.to(topNavRef.current, { y: 0, autoAlpha: 1, duration: 0.4, ease: "power2.out" })
                setIsSideNavOpen(false)
            }
        })
    })

    return (
        <>
            <div ref={sideNavRef} className="fixed top-0 right-0 z-50 w-full h-full pointer-events-none">
                {
                    isSideNavOpen
                        ?
                        <nav className="absolute top-[5vh] z-20 flex flex-col bg-primary w-[94vw] h-[90vh] justify-center items-end rounded-3xl right-[3vw] pointer-events-auto">
                            <button className="text-foreground absolute top-8 right-8 cursor-pointer hover:scale-110 ease-in-out duration-150" onClick={() => setIsSideNavOpen(false)}>
                                <CgClose size={32}/>
                            </button>
                            {menus.map((text, index) => (
                                <button key={index} className="py-3 px-6 text-foreground hover:scale-105 hover:font-semibold transition-all ease-in-out duration-150 cursor-pointer tracking-wider text-3xl font-fira-code rounded-full">
                                    {text}
                                </button>
                            ))}
                        </nav>
                        :
                        <button className="absolute top-10 right-10 z-20 cursor-pointer bg-primary rounded-full p-4 pointer-events-auto shadow-[0_0_15px_rgba(234,88,12,0.4)] hover:scale-110 transition-transform" onClick={() => setIsSideNavOpen(true)}>
                            <CgMenu size={24} className="text-foreground" />
                        </button>
                }
            </div>


            <nav ref={topNavRef} className="fixed top-[5vh] rounded-full left-1/2 -translate-x-1/2 flex gap-3 p-2 bg-surface/60 backdrop-blur-md z-50">
                {menus.map((text, index) => (
                    <button key={index} className="py-3 px-6 bg-linear-90 from-orange-600 to-orange-800 text-muted hover:scale-105 transition-all ease-in-out duration-150 cursor-pointer tracking-wider font-fira-code rounded-full">
                        {text}
                    </button>
                ))}
            </nav>
        </>
    )
}

export default Navigation