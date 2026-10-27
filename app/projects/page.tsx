import Link from 'next/link'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { getProjects } from '../public/datas/projects'
import Image from 'next/image'

export default async function ProjectsPage() {
    const projects = await getProjects()

    return (
        <main className='w-full min-h-screen bg-background text-foreground'>
            <div className='px-6 sm:px-12 pt-20 pb-16 max-w-7xl mx-auto border-b border-black/10'>
                <div className='flex items-center justify-between font-mono text-[11px] text-black/50 mb-8'>
                    <div className='flex items-center gap-2'>
                        <span className='text-signal font-bold'>[02]</span>
                        <span>COMPLETE DELIVERABLES REPOSITORY</span>
                    </div>
                    <Link
                        href='/'
                        className='font-mono text-xs font-bold text-black hover:text-signal transition-colors inline-flex items-center gap-1.5'
                    >
                        <span>&larr;</span>
                        <span>RETURN TO INDEX</span>
                    </Link>
                </div>

                <h1 className='text-4xl sm:text-7xl md:text-8xl font-uncut font-black uppercase tracking-tighter leading-none mb-6'>
                    Projects Archive<span className='text-signal'>.</span>
                </h1>
                <p className='font-uncut text-lg sm:text-xl text-black/70 max-w-2xl font-normal'>
                    A comprehensive catalog of production web systems, AI interfaces, internal tooling, and client deliverables.
                </p>
            </div>

            <div className='w-full border-t border-dashed border-black/15 flex items-center justify-between px-6 sm:px-12 py-2.5 font-mono text-[10px] text-black/40 uppercase select-none'>
                <span>// ARCHIVAL INDEX</span>
                <span>[ ✂ ]</span>
                <span>TOTAL: {projects.length} UNITS RECORDED</span>
            </div>

            <div className='max-w-7xl mx-auto px-6 sm:px-12 py-16 sm:py-24 space-y-24 sm:space-y-32'>
                {projects.map((project, idx) => {
                    const isEven = idx % 2 === 0
                    return (
                        <article
                            key={project.title}
                            className='grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center pb-24 border-b border-black/10 last:border-b-0'
                        >
                            <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                <div className='flex items-center gap-3 font-mono text-[10px] text-black/50 uppercase mb-4'>
                                    <span className='text-signal font-bold'>REF: 0{idx + 1}</span>
                                    <span>//</span>
                                    <span>{project.isInternal ? 'INTERNAL SYSTEM' : 'PUBLIC RELEASE'}</span>
                                </div>

                                <h2 className='text-3xl sm:text-5xl font-uncut font-black uppercase tracking-tight text-black mb-4'>
                                    {project.title}
                                </h2>

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
                                            <span>VIEW SOURCE</span>
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
                                            <span>VISIT LIVE PAGE</span>
                                            <FaArrowUpRightFromSquare className='text-[10px]' />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                <div className='group relative w-full aspect-16/10 bg-paper overflow-hidden border border-black/10'>
                                    <div className='absolute top-3 left-3 z-10 px-2.5 py-1 bg-black/80 backdrop-blur-md text-white font-mono text-[9px] uppercase tracking-wider'>
                                        ARCHIVE_FIG // 0{idx + 1}
                                    </div>
                                    <Image
                                        src={project.imageLink}
                                        alt={project.title}
                                        width={1000}
                                        height={650}
                                        className='w-full h-full object-cover grayscale contrast-115 opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500'
                                    />
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </main>
    )
}
