import Image from "@/app/main-content/components/Image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons"
import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'


const images = [
    { src: 'images/html5.svg', alt: 'html5' },
    { src: 'images/css3.svg', alt: 'css3' },
    { src: 'images/javascript.svg', alt: 'js' },
    { src: 'images/nodedotjs.svg', alt: 'nodejs' },
    { src: 'images/npm.svg', alt: 'npm' },
    { src: 'images/bun.svg', alt: 'bun' },
    { src: 'images/react.svg', alt: 'react' },
    { src: 'images/reactrouter.svg', alt: 'reactrouter' },
    { src: 'images/nextdotjs.svg', alt: 'nextjs' },
]

const Hero = () => {
    return (
        <div className="min-w-full min-h-[90dvh] flex justify-evenly items-center ">
            <div className="font-poppins flex flex-col gap-10 ">
                <div className="text-4xl flex flex-col gap-5 ">
                    <h2>Hi! My Name is</h2>
                    <h2><span className="font-bold">Bikra</span> Abna Filqiyast Dzaki</h2>
                    <h2>I'm a <span className="font-bold">Sofware Engineer</span></h2>
                </div>
                <div className="flex gap-2 ">
                    {
                        images.map((image, index) => (
                            <Image key={index} src={image.src} alt={image.alt} />
                        ))
                    }
                </div>
                <div >
                    <button className="bg-white text-black py-3 px-5 rounded-full border border-black">
                        <FontAwesomeIcon icon={faArrowDownLong} className="pe-2 border-r-2 border-black"/>
                        <span className="ms-2">Download</span>
                    </button>
                </div>
            </div>
            <div>
                <img src="images/fotogwehb&w.jpg" alt="profile-picture" className="h-[20rem] rounded-full" />
            </div>
        </div>
    )
}

export default Hero