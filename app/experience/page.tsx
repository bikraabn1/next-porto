import Link from 'next/link'

const experiences = [
    {
        period: '2025 — Present',
        role: 'Frontend Developer',
        company: 'Nebula Labs',
        highlights: [
            'Built modular Next.js App Router features for a Web3 dashboard ecosystem.',
            'Introduced animation-driven storytelling sections using GSAP and ScrollTrigger.',
            'Improved perceived performance with skeleton states and progressive hydration strategies.',
        ],
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS v4', 'GSAP'],
    },
    {
        period: '2024 — 2025',
        role: 'Frontend Engineer Intern',
        company: 'Vertex Digital Studio',
        highlights: [
            'Delivered responsive landing pages and component libraries for startup clients.',
            'Collaborated with design and backend teams to ship API-driven dashboard modules.',
            'Optimized accessibility and interaction flows across mobile and desktop views.',
        ],
        stack: ['React', 'Next.js', 'Node.js', 'Figma'],
    },
    {
        period: '2023 — 2024',
        role: 'Freelance Web Developer',
        company: 'Independent',
        highlights: [
            'Designed and developed custom portfolio and business websites end-to-end.',
            'Created reusable UI sections to speed up delivery while maintaining visual quality.',
            'Integrated CMS/content workflows for easier client updates and maintenance.',
        ],
        stack: ['JavaScript', 'Tailwind CSS', 'CMS', 'Vercel'],
    },
]

export default function ExperiencePage() {
    return (
        <main className='min-h-screen bg-foreground text-background'>
            <section className='relative mx-auto w-full max-w-6xl px-6 py-24 md:px-10'>
                <div className='pointer-events-none absolute right-10 top-10 h-56 w-56 rounded-full bg-primary/20 blur-3xl'></div>

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
