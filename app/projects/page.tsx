import Link from 'next/link'
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'

const projects = [
    {
        title: 'Web3 Wallet Dashboard',
        description:
            'A portfolio command center to track wallet balances, token performance, NFT floors, and cross-chain activity in a single interface.',
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP'],
        githubLink: '#',
        liveLink: '#',
    },
    {
        title: 'Onchain Analytics Board',
        description:
            'Interactive analytics for contract events, active users, and gas usage trends with modular widgets and progressive loading states.',
        techStack: ['React', 'Node.js', 'Express', 'PostgreSQL'],
        githubLink: '#',
        liveLink: '#',
    },
    {
        title: 'NFT Mint Campaign Site',
        description:
            'A high-conversion mint experience with animated storytelling sections, whitelist status checks, and launch countdown components.',
        techStack: ['Next.js', 'Tailwind CSS', 'Solidity', 'Ethers'],
        githubLink: '#',
        liveLink: '#',
    },
    {
        title: 'Dev Portfolio CMS',
        description:
            'A headless content-driven portfolio system with reusable block sections, markdown support, and dynamic project pipelines.',
        techStack: ['Next.js', 'TypeScript', 'MongoDB', 'REST API'],
        githubLink: '#',
        liveLink: '#',
    },
]

export default function ProjectsPage() {
    return (
        <main className='min-h-screen bg-foreground text-background'>
            <section className='relative mx-auto w-full max-w-7xl px-6 py-24 md:px-10'>
                <div className='pointer-events-none absolute -top-8 left-8 h-56 w-56 rounded-full bg-primary/20 blur-3xl'></div>

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
                        <article key={project.title} className='rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md'>
                            <div className='mb-4 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-xs text-primary font-fira-code'>
                                PROJECT NODE ACTIVE
                            </div>

                            <h2 className='mb-3 text-2xl font-semibold'>{project.title}</h2>
                            <p className='mb-5 leading-relaxed text-background/80'>{project.description}</p>

                            <div className='mb-6 flex flex-wrap gap-2'>
                                {project.techStack.map((tech) => (
                                    <span key={`${project.title}-${tech}`} className='rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-primary'>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className='flex flex-wrap gap-3'>
                                <a href={project.githubLink} className='inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition-colors'>
                                    <FaGithub />
                                    GitHub
                                </a>
                                <a href={project.liveLink} className='inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/15 px-4 py-2 text-sm hover:bg-primary/25 transition-colors'>
                                    Live Preview
                                    <FaArrowUpRightFromSquare className='text-xs' />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}
