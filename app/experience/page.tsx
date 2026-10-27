import Link from 'next/link'
import { getExperiences } from '../public/datas/experiences'
import { getCertifications } from '../public/datas/certification'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

export default async function ExperiencePage() {
    const [experiences, certifications] = await Promise.all([
        getExperiences(),
        getCertifications(),
    ])

    return (
        <main className='w-full min-h-screen bg-background text-foreground'>
            <div className='px-6 sm:px-12 pt-20 pb-16 max-w-7xl mx-auto border-b border-black/10'>
                <div className='flex items-center justify-between font-mono text-[11px] text-black/50 mb-8'>
                    <div className='flex items-center gap-2'>
                        <span className='text-signal font-bold'>[03]</span>
                        <span>CHRONOLOGY & RESPONSIBILITY LOG</span>
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
                    Timeline Record<span className='text-signal'>.</span>
                </h1>
                <p className='font-uncut text-lg sm:text-xl text-black/70 max-w-2xl font-normal'>
                    A documented trajectory of engineering roles, technical responsibilities, and system deliveries.
                </p>
            </div>

            <div className='w-full border-t border-dashed border-black/15 flex items-center justify-between px-6 sm:px-12 py-2.5 font-mono text-[10px] text-black/40 uppercase select-none'>
                <span>// LOG DIVISION</span>
                <span>[ ✂ ]</span>
                <span>CHRONOLOGICAL ORDER</span>
            </div>

            <div className='max-w-7xl mx-auto px-6 sm:px-12 py-16 sm:py-24 space-y-20'>
                {experiences.map((exp, idx) => (
                    <article
                        key={`${exp.company}-${exp.period}`}
                        className='grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 pb-16 border-b border-black/10 last:border-b-0'
                    >
                        <div className='md:col-span-4 font-mono'>
                            <div className='text-xs text-signal font-bold mb-2'>
                                0{idx + 1} //
                            </div>
                            <div className='text-xl sm:text-2xl font-uncut font-black uppercase text-black mb-1'>
                                {exp.period}
                            </div>
                            <div className='text-sm text-black/60 uppercase font-medium'>
                                {exp.company}
                            </div>
                        </div>

                        <div className='md:col-span-8'>
                            <h2 className='text-2xl sm:text-4xl font-uncut font-black uppercase tracking-tight text-black mb-6'>
                                {exp.role}
                            </h2>

                            <ul className='space-y-4 font-uncut text-base sm:text-lg text-black/80 font-normal leading-relaxed mb-8'>
                                {exp.highlights.map((item) => (
                                    <li key={item} className='flex items-start gap-3'>
                                        <span className='text-signal font-mono text-sm mt-1 select-none'>&rarr;</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className='flex flex-wrap gap-2 pt-4 border-t border-black/10'>
                                {exp.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className='font-mono text-[11px] px-3 py-1 bg-paper border border-black/10 text-black/80 uppercase'
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}

                {certifications.length > 0 && (
                    <section className='pt-16 border-t-2 border-black'>
                        <div className='flex items-center justify-between mb-8'>
                            <div className='font-mono text-xs uppercase tracking-wider font-bold text-black flex items-center gap-2'>
                                <span className='text-signal font-bold'>[04]</span>
                                <span>ACCREDITED CREDENTIALS & CERTIFICATIONS</span>
                            </div>
                            <span className='font-mono text-[10px] text-black/40 uppercase'>
                                VERIFIED ISSUANCES ({certifications.length})
                            </span>
                        </div>

                        <div className='divide-y divide-black/10 border-y border-black/10'>
                            {certifications.map((cert, idx) => (
                                <div
                                    key={cert.name}
                                    className='py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:bg-black/[0.02] transition-colors px-2'
                                >
                                    <div className='flex items-center gap-4'>
                                        <span className='font-mono text-xs text-signal font-bold select-none'>
                                            {String(idx + 1).padStart(2, '0')}.
                                        </span>
                                        <span className='font-uncut text-base sm:text-lg font-bold text-black group-hover:text-signal transition-colors'>
                                            {cert.name}
                                        </span>
                                    </div>

                                    <a
                                        href={cert.url}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='font-mono text-xs font-bold text-black/60 group-hover:text-signal inline-flex items-center gap-1.5 transition-colors self-start sm:self-center'
                                    >
                                        <span>VERIFY CREDENTIAL</span>
                                        <FaArrowUpRightFromSquare className='text-[10px]' />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </main>
    )
}
