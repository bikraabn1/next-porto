import Link from 'next/link'
import { EXPERIENCE_DATAS } from '../public/datas/experiences'

export default function ExperiencePage() {
    const experiences = EXPERIENCE_DATAS
    
    return (
        <main id='main-scroller' className='h-screen overflow-y-auto bg-foreground text-background'>
            <section className='relative mx-auto w-full max-w-6xl px-6 pb-20 pt-40 md:px-10'>
                <div className='relative mb-10 flex flex-wrap items-end justify-between gap-4'>
                    <div>
                        <p className='mb-2 text-sm uppercase tracking-[0.2em] text-primary font-fira-code'>Career Path</p>
                        <h1 className='text-4xl md:text-5xl font-clash-display tracking-tight'>Experience</h1>
                    </div>
                    <Link href='/' className='rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition-colors'>
                        Back to Home
                    </Link>
                </div>

                <div className='space-y-6'>
                    {experiences.map((experience) => (
                        <article key={`${experience.company}-${experience.period}`} className='rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md'>
                            <div className='mb-4 flex flex-wrap items-center justify-between gap-3'>
                                <span className='rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-primary'>
                                    {experience.period}
                                </span>
                                <p className='text-sm text-background/75'>{experience.company}</p>
                            </div>

                            <h2 className='mb-4 text-2xl font-semibold'>{experience.role}</h2>

                            <ul className='mb-5 space-y-2 text-background/85'>
                                {experience.highlights.map((highlight) => (
                                    <li key={highlight} className='flex gap-2'>
                                        <span className='mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary'></span>
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className='flex flex-wrap gap-2'>
                                {experience.stack.map((tech) => (
                                    <span key={`${experience.role}-${tech}`} className='rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-background/85'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}
