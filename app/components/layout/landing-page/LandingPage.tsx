'use client'

import { PROJECT_DATAS } from '@/app/public/datas/projects'
import { RevealOnScroll } from '@/app/components/ui/motion/RevealOnScroll'
import { ScrollProgressSpine } from '@/app/components/ui/motion/ScrollProgressSpine'
import { TextScramble } from '@/app/components/ui/motion/TextScramble'
import { TicketOpening } from '@/app/components/ui/motion/TicketOpening'
import { ParallaxRevealFrame } from '@/app/components/ui/motion/ParallaxRevealFrame'
import { LivingTimelineTrack } from '@/app/components/ui/motion/LivingTimelineTrack'
import { TelemetryMarquee } from '@/app/components/ui/motion/TelemetryMarquee'
import { ScrollHorizontalName } from '@/app/components/ui/motion/ScrollHorizontalName'
import { CapabilitiesAccordion } from '@/app/components/ui/motion/CapabilitiesAccordion'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

const LandingPage = () => {
    const projects = PROJECT_DATAS

    const featureProjects = projects.slice(0, 2)
    const secondaryProjects = projects.slice(2, 6)

    return (
        <main className='w-full min-h-screen bg-background text-foreground relative'>
            <TicketOpening />

            <ScrollProgressSpine />

            <section className='px-6 sm:px-12 pt-16 sm:pt-24 pb-20 sm:pb-28 max-w-7xl mx-auto'>
                <RevealOnScroll delay={0}>
                    <div className='flex items-center justify-between font-mono text-[11px] text-black/50 mb-12 sm:mb-16'>
                        <div className='flex items-center gap-2'>
                            <span className='text-signal font-bold'>[01]</span>
                            <TextScramble text="STATEMENT OF CRAFT" delay={200} />
                        </div>
                        <div className='flex items-center gap-2 text-black/80'>
                            <span className='uppercase font-medium'>OPEN FOR ENGAGEMENTS</span>
                        </div>
                    </div>
                </RevealOnScroll>

                <div className='my-8 sm:my-12'>
                    <ScrollHorizontalName />
                </div>

                <div className='max-w-5xl'>
                    <RevealOnScroll delay={100}>
                        <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-uncut font-black uppercase tracking-tighter leading-[0.92] text-black mb-10'>
                            Fullstack Developer crafting high-grade web applications, reactive architectures, and real-time interfaces<span className='text-signal animate-pulse'>.</span>
                        </h1>
                    </RevealOnScroll>

                    <RevealOnScroll delay={200}>
                        <div className='grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-black/10 items-baseline'>
                            <div className='md:col-span-8'>
                                <p className='font-uncut text-lg sm:text-xl md:text-2xl text-black/80 font-normal leading-relaxed'>
                                    Currently operating as Fullstack Developer Intern at <strong>PT Tiga Serangkai Pustaka Mandiri</strong> — previously engineered production AI summaries and responsive systems at <strong>PT Adma Digital Solusi</strong> and real-time chatbots for PLN at <strong>PT Wiratek Solusi Asia</strong>.
                                </p>
                            </div>
                            <div className='md:col-span-4 flex flex-col items-start md:items-end gap-3 font-mono text-xs font-bold'>
                                <a
                                    href='/bikraabna.pdf'
                                    download='Bikra_Abna_CV.pdf'
                                    className='inline-flex items-center gap-2 text-black hover:text-signal transition-colors group'
                                >
                                    <span>DOWNLOAD RESUME [PDF]</span>
                                    <span className='text-signal group-hover:translate-x-1 transition-transform'>&rarr;</span>
                                </a>
                                <Link
                                    href='/experience'
                                    className='inline-flex items-center gap-2 text-black/60 hover:text-black transition-colors group'
                                >
                                    <span>VIEW EMPLOYMENT RECORD</span>
                                    <span className='group-hover:translate-x-1 transition-transform'>&rarr;</span>
                                </Link>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            <TelemetryMarquee text="TRANSITION // SECTION 02 DELIVERABLES // LAT: -6.2088 // LON: 106.8456 // ARCHIVE PRODUCTION DEPLOYMENTS" />

            <section className='px-6 sm:px-12 py-20 sm:py-28 max-w-7xl mx-auto'>
                <RevealOnScroll>
                    <div className='flex items-end justify-between mb-16 sm:mb-20 pb-4 border-b border-black/10'>
                        <div>
                            <div className='font-mono text-[11px] text-signal font-bold mb-2 flex items-center gap-2'>
                                <span>+</span> SECTION 02 // DELIVERABLES
                            </div>
                            <h2 className='text-3xl sm:text-5xl font-uncut font-black uppercase tracking-tight'>
                                Selected Works
                            </h2>
                        </div>
                        <Link
                            href='/projects'
                            className='font-mono text-xs uppercase font-bold text-black hover:text-signal transition-colors inline-flex items-center gap-1.5'
                        >
                            <span>FULL ARCHIVE ({projects.length})</span>
                            <span>&rarr;</span>
                        </Link>
                    </div>
                </RevealOnScroll>

                <div className='space-y-28 sm:space-y-36 mb-28'>
                    {featureProjects.map((project, idx) => {
                        const isEven = idx % 2 === 0
                        return (
                            <RevealOnScroll key={project.title} delay={idx * 150}>
                                <article className='grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center'>
                                    <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                        <div className='flex items-center gap-3 font-mono text-[10px] text-black/50 uppercase mb-4'>
                                            <span className='text-signal font-bold'>NO. 0{idx + 1}</span>
                                            <span>//</span>
                                            <span>{project.isInternal ? 'INTERNAL ARCHIVE' : 'PRODUCTION WORK'}</span>
                                        </div>

                                        <h3 className='text-3xl sm:text-5xl font-uncut font-black uppercase tracking-tight text-black mb-4'>
                                            {project.title}
                                        </h3>

                                        <p className='font-uncut text-base sm:text-lg text-black/75 leading-relaxed mb-6 font-normal'>
                                            {project.description}
                                        </p>

                                        <div className='flex flex-wrap gap-2 mb-8'>
                                            {project.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className='font-mono text-[10px] px-2.5 py-1 bg-paper border border-black/10 text-black/80 uppercase'
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className='flex items-center gap-6 font-mono text-xs font-bold'>
                                            {!project.isInternal && (
                                                <a
                                                    href={project.githubLink}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className='inline-flex items-center gap-1.5 text-black hover:text-signal transition-colors'
                                                >
                                                    <span>SOURCE</span>
                                                    <FaArrowUpRightFromSquare className='text-[10px]' />
                                                </a>
                                            )}
                                            {project.webLink && (
                                                <a
                                                    href={project.webLink}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className='inline-flex items-center gap-1.5 text-black hover:text-signal transition-colors'
                                                >
                                                    <span>LIVE PREVIEW</span>
                                                    <FaArrowUpRightFromSquare className='text-[10px]' />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                        <ParallaxRevealFrame className='relative w-full aspect-16/10 bg-paper border border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] group'>
                                            <div className='absolute top-3 left-3 z-10 px-2.5 py-1 bg-black/80 backdrop-blur-md text-white font-mono text-[9px] uppercase tracking-wider flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                                <span className='w-1.5 h-1.5 rounded-full bg-signal animate-pulse'></span>
                                                <span>FIG 0{idx + 1} // ARTIFACT REVEAL</span>
                                            </div>
                                            <Image
                                                src={project.imageLink}
                                                alt={project.title}
                                                width={1000}
                                                height={650}
                                                className='w-full h-full object-cover grayscale contrast-115 opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out'
                                            />
                                        </ParallaxRevealFrame>
                                    </div>
                                </article>
                            </RevealOnScroll>
                        )
                    })}
                </div>

                <div className='border-t border-black/15 pt-12'>
                    <div className='font-mono text-[10px] uppercase tracking-wider text-black/50 mb-8 flex items-center justify-between'>
                        <span>SECONDARY CATALOG</span>
                        <span>[ EXHIBITION_LOG.MD ]</span>
                    </div>

                    <div className='divide-y divide-black/10'>
                        {secondaryProjects.map((project, idx) => (
                            <RevealOnScroll key={project.title} delay={idx * 80}>
                                <div className='py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline group hover:bg-paper transition-colors px-2 sm:px-4'>
                                    <div className='md:col-span-1 font-mono text-xs text-signal font-bold'>
                                        0{idx + 3}.
                                    </div>
                                    <div className='md:col-span-4'>
                                        <h4 className='text-2xl sm:text-3xl font-uncut font-bold uppercase group-hover:text-signal transition-colors'>
                                            {project.title}
                                        </h4>
                                    </div>
                                    <div className='md:col-span-5 font-uncut text-sm text-black/70'>
                                        {project.description}
                                    </div>
                                    <div className='md:col-span-2 flex items-center md:justify-end gap-3 font-mono text-xs font-bold'>
                                        {project.webLink ? (
                                            <a
                                                href={project.webLink}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='inline-flex items-center gap-1 text-black hover:text-signal transition-colors'
                                            >
                                                <span>VISIT</span>
                                                <span className='text-signal'>&rarr;</span>
                                            </a>
                                        ) : !project.isInternal ? (
                                            <a
                                                href={project.githubLink}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='inline-flex items-center gap-1 text-black hover:text-signal transition-colors'
                                            >
                                                <span>REPO</span>
                                                <span className='text-signal'>&rarr;</span>
                                            </a>
                                        ) : (
                                            <span className='text-black/40'>INTERNAL</span>
                                        )}
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            <TelemetryMarquee text="SYSTEM BENCHMARK // CAPABILITIES MATRIX // REACT 19 // NEXT.JS TURBOPACK // STRICT TYPE-SAFETY" />

            <section className='px-6 sm:px-12 py-20 sm:py-28 max-w-7xl mx-auto'>
                <RevealOnScroll>
                    <div className='flex items-end justify-between mb-16 pb-4 border-b border-black/10'>
                        <div>
                            <div className='font-mono text-[11px] text-signal font-bold mb-2 flex items-center gap-2'>
                                <span>+</span> SECTION 03 // TECHNICAL MATRIX
                            </div>
                            <h2 className='text-3xl sm:text-5xl font-uncut font-black uppercase tracking-tight'>
                                Capabilities & Disciplines
                            </h2>
                        </div>
                        <span className='font-mono text-[10px] text-black/50 uppercase hidden sm:inline'>
                            VER 2026.04 // TYPE-SAFE
                        </span>
                    </div>
                </RevealOnScroll>

                <CapabilitiesAccordion />
            </section>

            <TelemetryMarquee text="CHRONOLOGY // CAREER TRAJECTORY // PRODUCTION COMMITS // ARCHIVE VERIFICATION" />

            <section className='px-6 sm:px-12 py-20 sm:py-28 max-w-7xl mx-auto'>
                <div className='max-w-4xl'>
                    <RevealOnScroll>
                        <div className='font-mono text-[11px] text-signal font-bold mb-2 flex items-center gap-2'>
                            <span>+</span> SECTION 04 // TIMELINE
                        </div>
                        <h2 className='text-3xl sm:text-5xl font-uncut font-black uppercase tracking-tight mb-12'>
                            Career History
                        </h2>
                    </RevealOnScroll>

                    <LivingTimelineTrack>
                        <div className='space-y-14'>
                            <RevealOnScroll delay={100}>
                                <div className='relative'>
                                    <span className='absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-signal shadow-[0_0_12px_rgba(255,0,0,0.8)] animate-pulse'></span>
                                    <div className='font-mono text-[11px] text-signal uppercase font-bold mb-1 flex items-center gap-2'>
                                        <span>SEP 2026 — PRESENT</span>
                                        <span className='text-black/30'>// ACTIVE ROLE</span>
                                    </div>
                                    <h3 className='text-2xl sm:text-3xl font-uncut font-bold uppercase'>
                                        Fullstack Developer Intern
                                    </h3>
                                    <div className='font-mono text-xs text-black/80 font-bold mb-3'>
                                        PT Tiga Serangkai Pustaka Mandiri
                                    </div>
                                    <p className='font-uncut text-sm sm:text-base text-black/75 leading-relaxed'>
                                        Developing end-to-end web features, database services, and workflow tools across educational publishing platforms.
                                    </p>
                                </div>
                            </RevealOnScroll>

                            <RevealOnScroll delay={200}>
                                <div className='relative'>
                                    <span className='absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-black/40'></span>
                                    <div className='font-mono text-[11px] text-black/50 uppercase mb-1'>JUN 2026 — SEP 2026</div>
                                    <h3 className='text-2xl sm:text-3xl font-uncut font-bold uppercase'>
                                        Frontend Developer Intern
                                    </h3>
                                    <div className='font-mono text-xs text-black/70 font-bold mb-3'>
                                        PT Adma Digital Solusi
                                    </div>
                                    <p className='font-uncut text-sm sm:text-base text-black/75 leading-relaxed'>
                                        Engineering core modules across production web applications: real-time streaming summaries, unit test coverage, and high-performance component architecture.
                                    </p>
                                </div>
                            </RevealOnScroll>

                            <RevealOnScroll delay={300}>
                                <div className='relative'>
                                    <span className='absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-black/40'></span>
                                    <div className='font-mono text-[11px] text-black/50 uppercase mb-1'>JUL 2025 — JAN 2026</div>
                                    <h3 className='text-2xl sm:text-3xl font-uncut font-bold uppercase'>
                                        Frontend Developer Intern
                                    </h3>
                                    <div className='font-mono text-xs text-black/70 font-bold mb-3'>
                                        PT Wiratek Solusi Asia
                                    </div>
                                    <p className='font-uncut text-sm sm:text-base text-black/75 leading-relaxed'>
                                        Engineered real-time PLN chatbot modules (Socket.io) and integrated Apache Superset analytics dashboards.
                                    </p>
                                </div>
                            </RevealOnScroll>
                        </div>
                    </LivingTimelineTrack>
                </div>
            </section>

            <footer className='border-t border-black/10 px-6 sm:px-12 py-12 sm:py-16 bg-background font-mono text-xs text-black/70'>
                <div className='max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-8'>
                    <div className='flex items-center gap-3 font-uncut font-bold text-base text-black'>
                        <span className='w-2 h-2 rounded-full bg-signal inline-block'></span>
                        <span>BIKRA ABNA FILQIYAST DZAKI</span>
                    </div>

                    <div className='text-black/50 text-[11px]'>
                        DESIGNED ON SWISS EDITORIAL DISCIPLINE. ZERO CORPORATE SLOP.
                    </div>

                    <div className='flex items-center gap-6 font-bold uppercase text-black'>
                        <a
                            href='https://github.com/bikraabna'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:text-signal transition-colors inline-flex items-center gap-1'
                        >
                            <span>GITHUB</span>
                            <span className='text-signal'>&rarr;</span>
                        </a>
                        <a
                            href='https://linkedin.com/in/bikraabna'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:text-signal transition-colors inline-flex items-center gap-1'
                        >
                            <span>LINKEDIN</span>
                            <span className='text-signal'>&rarr;</span>
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    )
}

export default LandingPage
