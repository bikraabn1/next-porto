import Link from 'next/link'
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'
import { PROJECT_DATAS } from '../public/datas/projects'
import Image from 'next/image'

export default function ProjectsPage() {
    const projects = PROJECT_DATAS

    return (
        <main id='main-scroller' className='h-screen overflow-y-auto bg-foreground text-background'>
            <section className='relative mx-auto w-full max-w-6xl px-6 pb-20 pt-40 md:px-10'>

                <div className='relative mb-10 flex flex-wrap items-end justify-between gap-4'>
                    <div>
                        <p className='mb-2 text-sm uppercase tracking-[0.2em] text-primary font-fira-code'>Portfolio Work</p>
                        <h1 className='text-4xl md:text-5xl font-clash-display tracking-tight'>Projects</h1>
                    </div>
                    <Link href='/' className='rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition-colors'>
                        Back to Home
                    </Link>
                </div>

                <div className='grid gap-6 md:grid-cols-2'>
                    {projects.map((project) => (
                        <article key={project.title} className='rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1'>
                            <div className='mb-4 flex h-40 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm text-background/70'>
                                <Image
                                    src={project.imageLink}
                                    alt={project.title}
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
            </section>
        </main>
    )
}
