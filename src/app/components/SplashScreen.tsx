'use client'

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef, useState } from "react"

const SplashScreen = (
    { onAnimationComplete }: { onAnimationComplete: () => void }
) => {
    const splashRef = useRef<HTMLHeadingElement>(null)
    const [load, setLoad] = useState<boolean>(true)

    useGSAP(() => {
        const animation = gsap.timeline({
            onComplete: () => {
                setLoad(false)
                onAnimationComplete()
            }
        })

        if (splashRef.current && load) {
            console.log('Animation Started')
            console.log(splashRef.current.querySelector('#first-span')
            )
            animation
                .to(
                    splashRef.current.querySelector('#first-span'),
                    {
                        rotation: 360,
                        duration: 1,
                    }
                )
                .fromTo(
                    splashRef.current.querySelector('#sec-span'),
                    { clipPath: "inset(0 100% 0 0)" },
                    { clipPath: "inset(0 0% 0 0)", duration: 1, ease: "power2.out" }
                )
                .to(
                    splashRef.current,
                    {
                        y: '-45%',
                        scale: 0.7,
                        duration: 1.5
                    }
                )
                
        }
    },
        {
            scope: splashRef
        }
    )

    return (
        <div className={`w-screen h-screen flex justify-center items-center ${load ? '' : 'hidden'}`}>
            <h1 ref={splashRef} className="w-full h-full flex justify-center items-center">
                <span id='first-span' className="font-poppins inline-block relative text-4xl font-bold">Bikra</span>
                <span id='sec-span' className="sec-span inline-block relative font-poppins text-4xl italic w-max">.dev</span>
            </h1>
        </div>
    )
}

export default SplashScreen