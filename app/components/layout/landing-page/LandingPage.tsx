'use client'

import React from 'react'
import { Project } from '@/app/types'
import { PROJECT_DATAS } from '@/app/public/datas/projects'
import { EXPERIENCE_DATAS, ExperienceItem } from '@/app/public/datas/experiences'
import { HomePageSettings, CapabilityGroup } from '@/app/public/datas/pages'
import { RevealOnScroll } from '@/app/components/ui/motion/RevealOnScroll'
import { ScrollProgressSpine } from '@/app/components/ui/motion/ScrollProgressSpine'
import { TextScramble } from '@/app/components/ui/motion/TextScramble'
import { TicketOpening } from '@/app/components/ui/motion/TicketOpening'
import { ProjectArtifactFrame } from '@/app/components/ui/motion/ProjectArtifactFrame'
import { LivingTimelineTrack } from '@/app/components/ui/motion/LivingTimelineTrack'
import { TelemetryMarquee } from '@/app/components/ui/motion/TelemetryMarquee'
import { ScrollHorizontalName } from '@/app/components/ui/motion/ScrollHorizontalName'
import { CapabilitiesAccordion } from '@/app/components/ui/motion/CapabilitiesAccordion'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

interface LandingPageProps {
    initialProjects?: Project[]
    pageSettings?: HomePageSettings
    experiences?: ExperienceItem[]
    capabilities?: CapabilityGroup[]
}

const LandingPage = ({
    initialProjects,
    pageSettings,
    experiences,
    capabilities,
}: LandingPageProps = {}) => {
    const projects = initialProjects && initialProjects.length > 0 ? initialProjects : PROJECT_DATAS
    const headline = pageSettings?.headline || "Fullstack Developer crafting high-grade web applications, reactive architectures, and real-time interfaces"
    const availabilityStatus = pageSettings?.availabilityStatus || "OPEN FOR ENGAGEMENTS"
    const bio = pageSettings?.bio || "Currently operating as Fullstack Developer Intern at PT Tiga Serangkai Pustaka Mandiri — previously engineered production AI summaries and responsive systems at PT Adma Digital Solusi and real-time chatbots for PLN at PT Wiratek Solusi Asia."
    const resumeUrl = pageSettings?.resumeUrl || "/bikraabna.pdf"
    const marqueeText = pageSettings?.telemetryMarquee || "CHRONOLOGY // CAREER TRAJECTORY // PRODUCTION COMMITS // ARCHIVE VERIFICATION"

    const starred = projects.filter((p) => p.featured)
    const featureProjects = starred.length > 0 ? starred.slice(0, 2) : projects.slice(0, 2)
    const secondaryProjects = projects
        .filter((p) => !featureProjects.some((fp) => fp.title === p.title))
        .slice(0, 4)

    const timelineList = (experiences && experiences.length > 0 ? experiences : EXPERIENCE_DATAS).slice(0, 3)

    const sectionOrder = pageSettings?.sectionOrder && pageSettings.sectionOrder.length > 0
        ? pageSettings.sectionOrder
        : ["hero", "deliverables", "matrix", "timeline"]

    const renderHero = () => (
        <section key="hero" className='px-6 sm:px-12 pt-16 sm:pt-24 pb-20 sm:pb-28 max-w-7xl mx-auto'>
            <RevealOnScroll delay={0}>
                <div className='flex items-center justify-between font-mono text-[11px] text-black/50 mb-12 sm:mb-16'>
                    <div className='flex items-center gap-2'>
                        <span className='text-signal font-bold'>[01]</span>
                        <TextScramble text="STATEMENT OF CRAFT" delay={200} />
                    </div>
                    <div className='flex items-center gap-2 text-black/80'>
                        <span className='uppercase font-medium'>{availabilityStatus}</span>
                    </div>
                </div>
            </RevealOnScroll>

            <div className='my-8 sm:my-12'>
                <ScrollHorizontalName />
            </div>

            <div className='max-w-5xl'>
                <RevealOnScroll delay={100}>
                    <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-uncut font-black uppercase tracking-tighter leading-[0.92] text-black mb-10'>
                        {headline.replace(/\.$/, '')}<span className='text-signal animate-pulse'>.</span>
                    </h1>
                </RevealOnScroll>

                <RevealOnScroll delay={200}>
                    <div className='grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-black/10 items-baseline'>
                        <div className='md:col-span-8'>
                            <p className='font-uncut text-lg sm:text-xl md:text-2xl text-black/80 font-normal leading-relaxed'>
                                {bio}
                            </p>
                        </div>
                        <div className='md:col-span-4 flex flex-col items-start md:items-end gap-3 font-mono text-xs font-bold'>
                            <a
                                href={resumeUrl}
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
    )

    const renderDeliverables = () => (
        <React.Fragment key="deliverables">
            <TelemetryMarquee text={marqueeText} />

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

                                        <h3 className='text-3xl sm:text-5xl font-uncut font-black uppercase tracking-tight mb-4 text-black'>
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
                                            {project.githubLink && project.githubLink !== '#' && (
                                                <a
                                                    href={project.githubLink}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className='inline-flex items-center gap-1.5 text-black hover:text-signal transition-colors'
                                                >
                                                    <span>SOURCE</span>
                                                    <span className='text-signal'>&rarr;</span>
                                                </a>
                                            )}
                                            {project.webLink ? (
                                                <a
                                                    href={project.webLink}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className='inline-flex items-center gap-1.5 text-black hover:text-signal transition-colors'
                                                >
                                                    <span>LIVE PREVIEW</span>
                                                    <FaArrowUpRightFromSquare className='text-[10px]' />
                                                </a>
                                            ) : (
                                                <span className='text-black/40'>INTERNAL CONFIDENTIAL</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                        <ProjectArtifactFrame
                                            badgeText={`FIG 0${idx + 1} // ARTIFACT REVEAL`}
                                            className='w-full aspect-16/10 bg-paper border border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)]'
                                        >
                                            <Image
                                                src={project.imageLink}
                                                alt={project.title}
                                                width={1000}
                                                height={650}
                                                className='w-full h-full object-cover'
                                            />
                                        </ProjectArtifactFrame>
                                    </div>
                                </article>
                            </RevealOnScroll>
                        )
                    })}
                </div>

                <div className='pt-12 border-t border-black/10'>
                    <div className='font-mono text-[10px] text-black/50 uppercase mb-6 flex items-center justify-between'>
                        <span>SECONDARY CATALOG INDEX</span>
                        <span>[ ✂ ]</span>
                        <span>PRODUCTION SHIPPED</span>
                    </div>

                    <div className='divide-y divide-black/10 border-y border-black/10'>
                        {secondaryProjects.map((project, idx) => (
                            <RevealOnScroll key={project.title} delay={idx * 50}>
                                <div className='py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-black/[0.02] transition-colors px-2'>
                                    <div className='md:col-span-1 font-mono text-xs text-signal font-bold'>
                                        0{idx + 3} //
                                    </div>

                                    <div className='md:col-span-5 font-uncut font-bold text-lg sm:text-xl text-black group-hover:text-signal transition-colors uppercase'>
                                        {project.title}
                                    </div>

                                    <div className='md:col-span-4 flex flex-wrap gap-1.5'>
                                        {project.techStack.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className='font-mono text-[9px] px-2 py-0.5 border border-black/10 text-black/60 uppercase'
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className='md:col-span-2 flex justify-start md:justify-end font-mono text-xs font-bold'>
                                        {project.webLink ? (
                                            <a
                                                href={project.webLink}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='inline-flex items-center gap-1.5 text-black hover:text-signal transition-colors'
                                            >
                                                <span>LIVE</span>
                                                <FaArrowUpRightFromSquare className='text-[10px]' />
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
        </React.Fragment>
    )

    const renderMatrix = () => (
        <React.Fragment key="matrix">
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

                <CapabilitiesAccordion groups={capabilities} />
            </section>
        </React.Fragment>
    )

    const renderTimeline = () => (
        <React.Fragment key="timeline">
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
                            {timelineList.map((exp, idx) => {
                                const isFirst = idx === 0
                                return (
                                    <RevealOnScroll key={`${exp.company}-${exp.period}`} delay={(idx + 1) * 100}>
                                        <div className='relative'>
                                            {isFirst ? (
                                                <span className='absolute -left-7 sm:-left-10 top-1.5 w-3 h-3 rounded-full bg-signal shadow-[0_0_12px_rgba(255,0,0,0.8)] animate-pulse ring-4 ring-white z-10'></span>
                                            ) : (
                                                <span className='absolute -left-7 sm:-left-10 top-1.5 w-3 h-3 rounded-full bg-black ring-4 ring-white z-10'></span>
                                            )}

                                            <div className={`font-mono text-[11px] uppercase mb-1 flex items-center gap-2 ${isFirst ? 'text-signal font-bold' : 'text-black/50'}`}>
                                                <span>{exp.period}</span>
                                                {isFirst && <span className='text-black/30'>// ACTIVE ROLE</span>}
                                            </div>

                                            <h3 className='text-2xl sm:text-3xl font-uncut font-bold uppercase text-black'>
                                                {exp.role}
                                            </h3>

                                            <div className='font-mono text-xs text-black/80 font-bold mb-3'>
                                                {exp.company}
                                            </div>

                                            <p className='font-uncut text-sm sm:text-base text-black/75 leading-relaxed'>
                                                {exp.highlights[0] || ''}
                                            </p>
                                        </div>
                                    </RevealOnScroll>
                                )
                            })}
                        </div>
                    </LivingTimelineTrack>
                </div>
            </section>
        </React.Fragment>
    )

    const sectionsMap: Record<string, () => React.ReactNode> = {
        hero: renderHero,
        deliverables: renderDeliverables,
        matrix: renderMatrix,
        timeline: renderTimeline,
    }

    return (
        <main className='w-full min-h-screen bg-background text-foreground relative'>
            <TicketOpening />

            <ScrollProgressSpine />

            {sectionOrder.map((secId) => {
                const renderer = sectionsMap[secId]
                return renderer ? renderer() : null
            })}

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
