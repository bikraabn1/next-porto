'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useState } from 'react'
import type { IconType } from 'react-icons'
import { FaArrowUpRightFromSquare, FaGithub, FaRobot } from 'react-icons/fa6'
import { SiExpress, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Preloader from '../../ui/preloader/Preloader'

const LandingPage = () => {
    gsap.registerPlugin(useGSAP)
    gsap.registerPlugin(ScrollTrigger)

    const pageContainer = useRef<HTMLElement | null>(null)
    const mainRef = useRef<HTMLElement | null>(null)
    const headingNameRef = useRef<HTMLDivElement | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const projects: {
        title: string
        description: string
        imagePlaceholder: string
        techStack: string[]
        githubLink: string
    }[] = [
            {
                title: 'Web3 Wallet Dashboard',
                description: 'A portfolio dashboard for tracking wallet balances, NFT floor prices, and transaction activity in one clean interface.',
                imagePlaceholder: 'Wallet Dashboard Preview',
                techStack: ['Next.js', 'TypeScript', 'Tailwind', 'GSAP'],
                githubLink: '#'
            },
            {
                title: 'Onchain Analytics Board',
                description: 'Interactive analytics cards and charts for monitoring contract events, active addresses, and gas behavior over time.',
                imagePlaceholder: 'Analytics Board Preview',
                techStack: ['React', 'Node.js', 'PostgreSQL', 'Charting'],
                githubLink: '#'
            },
            {
                title: 'NFT Mint Landing',
                description: 'A conversion-focused mint page with animated hero transitions, whitelist status check, and responsive glassmorphism UI.',
                imagePlaceholder: 'NFT Mint Preview',
                techStack: ['Next.js', 'Tailwind', 'Solidity', 'Ethers'],
                githubLink: '#'
            }
        ]

    const techStacks: { name: string, icon: IconType }[] = [
        { name: 'React', icon: SiReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Express', icon: SiExpress },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'PostgreSQL', icon: SiPostgresql }
    ]

    useGSAP(() => {
        if (isLoading || !headingNameRef.current) return;
        const names = gsap.utils.toArray(headingNameRef.current.children) as HTMLElement[];

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

    }, { scope: pageContainer, dependencies: [isLoading] })

    return (
        <main id='main-scroller' ref={mainRef} className='h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth'>
            {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
            <section ref={pageContainer} className='page-section relative flex w-full flex-col snap-start items-center justify-center min-h-screen bg-background text-foreground overflow-hidden'>
                <div className="absolute inset-0 h-full w-full bg-overlay bg-[linear-gradient(to_right,var(--color-grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-grid-line)_1px,transparent_1px)] bg-size-[200px_100px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,var(--color-mask-solid)_70%,transparent_100%)]"></div>
                <div className='absolute bg-orange-600/20 w-160 h-160 rounded-full blur-[120px] pointer-events-none'></div>
                <div ref={headingNameRef} className='relative flex flex-col items-center justify-center'>
                    <h1 className='text-[clamp(4rem,20vw,20rem)] invisible tracking-tighter leading-[0.75] font-clash-display'>
                        BIKRA
                    </h1>
                    <h1 className='text-[clamp(4rem,20vw,20rem)] invisible tracking-tighter leading-[0.75] font-clash-display'>
                        ABNA
                    </h1>
                </div>

            </section>

            <section className='page-section relative flex w-full flex-col snap-start items-center justify-center min-h-screen bg-foreground text-background overflow-hidden'>
                <div className='pointer-events-none absolute -top-16 left-10 h-52 w-52 rounded-full bg-primary/20 blur-3xl'></div>
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
                                    {project.imagePlaceholder}
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

                                <a href={project.githubLink} className='inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm hover:bg-white/10 transition-colors'>
                                    <FaGithub />
                                    View Source
                                    <FaArrowUpRightFromSquare className='text-xs' />
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className='page-section relative flex w-full flex-col snap-start items-center justify-center min-h-screen bg-foreground text-background overflow-hidden'>
                <div className='pointer-events-none absolute -right-10 top-20 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl'></div>
                <div className='w-full max-w-6xl px-6 py-16 md:px-10'>
                    <p className='mb-2 text-sm tracking-[0.2em] uppercase text-primary font-fira-code'>Tools I Use</p>
                    <h2 className='mb-10 text-4xl md:text-5xl font-clash-display tracking-tight'>Tech Stack</h2>

                    <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4'>
                        {techStacks.map((tech) => {
                            const Icon = tech.icon

                            return (
                                <div key={tech.name} className='group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-white/10'>
                                    <Icon className='text-xl text-primary transition-transform duration-300 group-hover:scale-110' />
                                    <span className='text-sm font-medium text-background/90'>{tech.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className='page-section flex w-full flex-col snap-start items-center justify-center min-h-screen bg-foreground text-background'>
                <div className='w-full max-w-4xl px-6 py-16 md:px-10'>
                    <p className='mb-2 text-sm tracking-[0.2em] uppercase text-primary font-fira-code'>Interactive Demo</p>
                    <h2 className='mb-8 text-4xl md:text-5xl font-clash-display tracking-tight'>Jackson Bot</h2>

                    <div className='rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden'>
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
                    </div>
                </div>
            </section>

            <section className='page-section relative flex w-full flex-col snap-start items-center justify-center min-h-screen bg-foreground text-background overflow-hidden'>
                <div className='pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl'></div>
                <div className='grid w-full max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10'>
                    <div>
                        <p className='mb-2 text-sm tracking-[0.2em] uppercase text-primary font-fira-code'>Who Am I</p>
                        <h2 className='mb-5 text-4xl md:text-5xl font-clash-display tracking-tight'>About Me</h2>
                        <p className='mb-4 leading-relaxed text-background/85'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo, justo nec egestas luctus,
                            turpis lorem facilisis felis, ac interdum nibh velit vitae est.
                        </p>
                        <p className='leading-relaxed text-background/75'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.
                        </p>
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
