'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { FaArrowUpRightFromSquare, FaGithub, FaRobot } from 'react-icons/fa6'
import Preloader from '../../ui/preloader/Preloader'
import { PROJECT_DATAS } from '@/app/public/datas/projects'
import { TECH_STACK_DATAS } from '@/app/public/datas/tech-stack'
import { CERTIFICATION_DATAS } from '@/app/public/datas/certification'
import Image from 'next/image'

const LandingPage = () => {
    gsap.registerPlugin(useGSAP)
    gsap.registerPlugin(ScrollTrigger)

    const pageContainer = useRef<HTMLElement | null>(null)
    const mainRef = useRef<HTMLElement | null>(null)
    const headingNameRef = useRef<HTMLDivElement | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const projects = PROJECT_DATAS
    const techStacks = TECH_STACK_DATAS
    const certification = CERTIFICATION_DATAS

    useEffect(() => {
        const hasLoaded = sessionStorage.getItem('preloaderDone')
        if (hasLoaded) setIsLoading(false)
    }, [])

    const handlePreloaderComplete = () => {
        setIsLoading(false)
        sessionStorage.setItem('preloaderDone', 'true')
    }

    useGSAP(() => {
        if (isLoading || !headingNameRef.current) return;
        const names = gsap.utils.toArray(headingNameRef.current.children) as HTMLElement[];
        const sections = gsap.utils.toArray('.page-section') as HTMLElement[];

        gsap.fromTo(names[0],
            { x: -200, autoAlpha: 0 },
            { x: 0, autoAlpha: 1, duration: 2, ease: "power2.out" }
        );

        gsap.fromTo(names[1],
            { x: 200, autoAlpha: 0 },
            { x: 0, autoAlpha: 1, duration: 2, ease: "power2.out", delay: 0.2 }
        );

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

        gsap.fromTo(
            '.projects-marquee-track',
            { x: 0 },
            {
                x: '-50%',
                duration: 20,
                ease: 'none',
                repeat: -1,
                force3D: true
            }
        )

        sections.slice(1).forEach((section) => {
            const sectionElements = gsap.utils.toArray(
                'h2, h3, article',
                section
            ) as HTMLElement[]

            if (!sectionElements.length) return

            gsap.fromTo(
                sectionElements,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    ease: 'power3.out',
                    duration: 1,
                    scrollTrigger: {
                        trigger: section,
                        scroller: mainRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )
        })

    }, { scope: mainRef, dependencies: [isLoading] })

    return (
        <main id='main-scroller' ref={mainRef} className='h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth'>
            {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
            <section ref={pageContainer} className='page-section relative flex w-full flex-col snap-start items-center justify-center min-h-screen bg-background text-foreground overflow-hidden'>
                <div className="absolute inset-0 h-full w-full bg-overlay bg-[linear-gradient(to_right,var(--color-grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-grid-line)_1px,transparent_1px)] bg-size-[200px_100px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,var(--color-mask-solid)_70%,transparent_100%)]"></div>
                <div className='absolute bg-orange-600/20 w-160 h-160 rounded-full blur-[120px] pointer-events-none'></div>
                <div ref={headingNameRef} className='relative flex flex-col items-center justify-center'>
                    <h1 className='text-[clamp(4rem,20vw,20rem)] opacity-0 tracking-tighter leading-[0.75] font-clash-display'>
                        BIKRA
                    </h1>
                    <h1 className='text-[clamp(4rem,20vw,20rem)] opacity-0 tracking-tighter leading-[0.75] font-clash-display'>
                        ABNA
                    </h1>
                </div>
            </section>

            <section className='page-section relative flex w-full flex-col snap-start items-center justify-center min-h-screen bg-linear-to-b from-background via-foreground to-foreground text-background overflow-hidden'>
                <div className='relative w-full overflow-hidden border-y border-white/10 py-3 bg-background/50 backdrop-blur-sm'>
                    <div className='pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-background/95 to-transparent'></div>
                    <div className='pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-background/95 to-transparent'></div>
                    <div className='projects-marquee-track flex min-w-max items-center gap-4 will-change-transform'>
                        <p className='text-primary font-fira-code tracking-widest text-sm uppercase whitespace-nowrap'>
                            FRONTEND DEVELOPER • AI • FRONTEND DEVELOPER • AI • FRONTEND DEVELOPER • AI • FRONTEND DEVELOPER • AI • FRONTEND DEVELOPER • AI • FRONTEND DEVELOPER • AI • FRONTEND DEVELOPER • AI • FRONTEND DEVELOPER • AI • FRONTEND DEVELOPER • AI •
                        </p>
                        <p aria-hidden='true' className='text-primary font-fira-code tracking-widest text-sm uppercase whitespace-nowrap'>
                            FRONTEND DEVELOPER • AI • FRONTEND DEVELOPER • AI • FRONTEND DEVELOPER • AI • FRONTEND DEVELOPER • AI • FRONTEND DEVELOPER • AI • FRONTEND DEVELOPER • AI • FRONTEND DEVELOPER • AI • FRONTEND DEVELOPER • AI • FRONTEND DEVELOPER • AI •
                        </p>
                    </div>
                </div>
                <div className='w-full max-w-7xl px-6 py-16 md:px-10'>
                    <div className='mb-10 flex items-end justify-between gap-4'>
                        <div>
                            <p className='mb-2 text-sm tracking-[0.2em] uppercase text-primary font-fira-code'>Selected Work</p>
                            <h2 className='text-4xl md:text-5xl font-clash-display tracking-tight'>Projects</h2>
                        </div>
                    </div>

                    <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
                        {projects.map((project) => (
                            <article key={project.title} className='rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1'>
                                <div className='mb-4 flex h-40 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm text-background/70'>
                                    <Image
                                        src={project.imageLink}
                                        alt={project.title}
                                        width={600}
                                        height={600}
                                        className='w-full h-full object-cover rounded-xl opacity-80 hover:opacity-100 transition-opacity duration-300'
                                    />
                                </div>
                                <h3 className='mb-2 text-xl font-semibold'>{project.title}</h3>
                                <p className='mb-4 text-sm leading-relaxed text-background/80'>{project.description}</p>

                                <div className='mb-5 flex flex-wrap gap-2'>
                                    {project.techStack.map((tech) => (
                                        <span key={`${project.title}-${tech}`} className='rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-primary'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {
                                    !project.isInternal && <a href={project.githubLink} className='inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm hover:bg-white/10 transition-colors'>
                                        <FaGithub />
                                        View Source
                                        <FaArrowUpRightFromSquare className='text-xs' />
                                    </a>
                                }
                            </article>
                        ))}
                    </div>

                    <div className='flex justify-center mt-12'>
                        <Link href='/projects' className='rounded-full border border-primary/40 bg-primary/10 px-8 py-3 text-sm text-primary transition-all duration-300 hover:bg-primary/20 hover:-translate-y-1'>
                            See More Projects
                        </Link>
                    </div>
                </div>
            </section>

            <section className='page-section relative flex w-full flex-col snap-start items-center justify-center min-h-screen bg-foreground text-background overflow-hidden'>
                <div className='w-full max-w-6xl px-6 py-16 md:px-10'>
                    <p className='mb-2 text-sm tracking-[0.2em] uppercase text-primary font-fira-code'>Tools I Use</p>
                    <h2 className='mb-10 text-4xl md:text-5xl font-clash-display tracking-tight'>Tech Stack</h2>

                    <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4'>
                        {techStacks.map((tech) => {
                            const Icon = tech.icon

                            return (
                                <Link key={tech.name} href={tech.docsLink} className='group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-white/10 cursor-pointer'>
                                    <Icon
                                        className='text-xl text-primary transition-transform duration-300 group-hover:scale-110'
                                        aria-hidden
                                    />
                                    <span className='text-sm font-medium text-background/90'>{tech.name}</span>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className='page-section relative flex w-full flex-col snap-start items-center justify-center min-h-screen bg-foreground text-background overflow-hidden'>
                <div className='w-full max-w-6xl px-6 py-16 md:px-10'>
                    <p className='mb-2 text-sm tracking-[0.2em] uppercase text-primary font-fira-code'>Continuous Learning</p>
                    <h2 className='mb-10 text-4xl md:text-5xl font-clash-display tracking-tight'>Certifications</h2>

                    <div className='grid gap-6 lg:grid-cols-12'>
                        <article className='relative overflow-hidden rounded-3xl border border-primary/30 bg-linear-to-br from-primary/20 via-white/5 to-transparent p-6 backdrop-blur-md lg:col-span-5'>
                            <div className='absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/20 blur-2xl'></div>
                            <p className='mb-3 text-xs tracking-[0.2em] uppercase text-primary/90 font-fira-code'>Featured Badge</p>
                            <h3 className='mb-4 text-2xl font-semibold leading-snug text-background/95'>{certification[0].name}</h3>
                            <p className='mb-6 text-sm leading-relaxed text-background/75'>
                                Core foundation in machine learning concepts, model workflow, and practical AI implementation.
                            </p>
                            <a
                                href={certification[0].url}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/15 px-4 py-2 text-sm text-background transition-colors hover:bg-primary/25'
                            >
                                View Featured Certificate
                                <FaArrowUpRightFromSquare className='text-xs' />
                            </a>
                        </article>

                        <div className='space-y-4 lg:col-span-7'>
                            {certification.slice(1).map((cert, index) => (
                                <article
                                    key={cert.name}
                                    className='group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/10'
                                >
                                    <div className='flex items-start gap-4'>
                                        <span className='mt-0.5 rounded-md border border-primary/30 bg-primary/10 px-2 py-1 text-xs font-fira-code text-primary'>
                                            0{index + 2}
                                        </span>
                                        <h3 className='text-base font-medium leading-snug text-background/90'>{cert.name}</h3>
                                    </div>

                                    <a
                                        href={cert.url}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='inline-flex shrink-0 items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-xs text-background/90 transition-colors group-hover:border-primary/40 group-hover:bg-primary/10'
                                    >
                                        Open
                                        <FaArrowUpRightFromSquare className='text-[10px]' />
                                    </a>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className='page-section flex w-full flex-col snap-start items-center justify-center min-h-screen bg-foreground text-background'>
                <div className='w-full max-w-4xl px-6 py-16 md:px-10'>
                    <p className='mb-2 text-sm tracking-[0.2em] uppercase text-primary font-fira-code'>Interactive Demo</p>
                    <h2 className='mb-8 text-4xl md:text-5xl font-clash-display tracking-tight'>Jackson Bot</h2>

                    <Link href='/jackson-bot' className='block rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-primary/40 hover:-translate-y-1'>
                        <div className='flex items-center justify-between border-b border-white/10 px-4 py-3'>
                            <div className='flex items-center gap-2'>
                                <FaRobot className='text-primary' />
                                <p className='font-fira-code text-sm text-background/90'>jackson-bot.terminal</p>
                            </div>
                            <span className='rounded-full bg-green-500/20 px-2 py-1 text-xs text-green-300'>online</span>
                        </div>

                        <div className='space-y-4 px-4 py-5'>
                            <div className='max-w-[80%] rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-background/90'>
                                Hello! I&apos;m Jackson. Ask me about Bikra&apos;s projects, stack, and experience.
                            </div>
                            <div className='ml-auto max-w-[80%] rounded-xl border border-primary/30 bg-primary/15 px-4 py-3 text-sm text-background'>
                                Show me the latest portfolio project.
                            </div>
                            <div className='max-w-[80%] rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-background/90'>
                                Latest project: a Web3 dashboard with smooth GSAP transitions and modular API routes.
                            </div>
                        </div>

                        <div className='border-t border-white/10 px-4 py-4'>
                            <div className='flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2'>
                                <input
                                    disabled
                                    placeholder='Chat input is disabled in this demo...'
                                    className='w-full bg-transparent text-sm text-background/70 outline-none placeholder:text-background/40 cursor-not-allowed'
                                />
                                <button disabled className='rounded-lg bg-primary/40 px-3 py-1 text-xs text-background/90 cursor-not-allowed'>
                                    Send
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            <section className='page-section relative flex w-full flex-col snap-start items-center justify-center min-h-screen bg-foreground text-background overflow-hidden'>
                <div className='grid w-full max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10'>
                    <div>
                        <p className='mb-2 text-sm tracking-[0.2em] uppercase text-primary font-fira-code'>Who Am I</p>
                        <h2 className='mb-5 text-4xl md:text-5xl font-clash-display tracking-tight'>About Me</h2>
                        <p className='mb-4 leading-relaxed text-background/85'>
                            I build intelligent web applications that bridge the gap between interactive design and machine learning.
                            As a Frontend Developer and AI Engineer, my work blends smooth UI architecture with AI-driven capabilities
                            to create smart, scalable digital experiences.
                        </p>
                        <p className='mb-3 leading-relaxed text-background/80'>
                            <span className='text-primary font-semibold'>Current Focus:</span> Building Capstone project as AI Engineer for Coding Camp 2026 by DBS Foundation
                        </p>
                        <p className='mb-6 leading-relaxed text-background/75'>
                            <span className='text-primary font-semibold'>Current Position:</span> Cohort Coding Camp 2026 by DBS Foundation and Last Year Student at Polytechnics Cilacap State
                        </p>

                        <div className='flex flex-wrap gap-3'>
                            <Link href='/experience' className='rounded-lg border border-primary/40 bg-primary/15 px-4 py-2 text-sm text-background transition-colors hover:bg-primary/25'>
                                See More Experience
                            </Link>
                            <a href='/bikraabna.pdf' download='Bikra_Abna_CV.pdf' className='rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-background/90 transition-colors hover:bg-white/10'>
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className='relative flex items-center justify-center'>
                        <div className='h-72 w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md'></div>
                        <div className='absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl border border-primary/40 bg-primary/20 backdrop-blur-md'></div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default LandingPage
