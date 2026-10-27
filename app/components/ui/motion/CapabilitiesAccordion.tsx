'use client'

import { useState } from 'react'
import { RevealOnScroll } from './RevealOnScroll'

interface SkillItem {
    name: string
    detail: string
    icon?: string
}

interface CapabilityGroup {
    number: string
    title: string
    skills: SkillItem[]
}

const CAPABILITY_GROUPS: CapabilityGroup[] = [
    {
        number: '01',
        title: 'CORE ARCHITECTURE',
        skills: [
            {
                name: 'Next.js (App Router, Turbopack)',
                detail: 'Production deployment with SSR, streaming server components, dynamic route handlers, and zero-compromise page performance.'
            },
            {
                name: 'React & TypeScript',
                detail: 'Modular component systems, custom reusable hooks, and strict type contracts across APIs and UI states.'
            },
            {
                name: 'Tailwind CSS & Modern CSS',
                detail: 'Token-based design systems, responsive grid layouts, and hardware-accelerated animations without bulky runtime overhead.'
            },
            {
                name: 'Responsive System Design',
                detail: 'Fluid layouts tested across mobile, tablet, and widescreen viewport constraints with strict typographic pacing.'
            }
        ]
    },
    {
        number: '02',
        title: 'REAL-TIME & STATE',
        skills: [
            {
                name: 'Zustand / Reactive State',
                detail: 'Lightweight atomic state stores decoupling UI logic from data layers without boilerplate.'
            },
            {
                name: 'Socket.io / WebSockets',
                detail: 'Real-time duplex communication pipelines used for interactive chatbots and event streaming.'
            },
            {
                name: 'Chat Streaming & Audio APIs',
                detail: 'Handling token-by-token AI streaming responses, audio wave capture, and optimistic UI updates.'
            },
            {
                name: 'RESTful Integration',
                detail: 'Robust data-fetching patterns, clean error boundaries, and end-to-end integration with client services.'
            }
        ]
    },
    {
        number: '03',
        title: 'BACKEND & SYSTEMS',
        skills: [
            {
                name: 'FastAPI & Python',
                detail: 'High-performance microservices, automated schema generation with Pydantic, and fast data serialization.'
            },
            {
                name: 'PostgreSQL & Database Logic',
                detail: 'Relational data modeling, schema migrations, and optimized query execution.'
            },
            {
                name: 'Automated Unit Testing',
                detail: 'Validating critical business logic, state reducers, and helper functions before production merge.'
            },
            {
                name: 'Git & Production CI/CD',
                detail: 'Conventional commits, branch management, and automated deployment pipelines via Vercel and GitHub Actions.'
            }
        ]
    }
]

export function CapabilitiesAccordion({ groups }: { groups?: CapabilityGroup[] } = {}) {
    const list = groups && groups.length > 0 ? groups : CAPABILITY_GROUPS
    const [openKey, setOpenKey] = useState<string | null>(null)

    const toggle = (key: string) => {
        setOpenKey((prev) => (prev === key ? null : key))
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16'>
            {list.map((group, groupIdx) => (
                <RevealOnScroll key={group.title} delay={groupIdx * 100}>
                    <div>
                        <div className='font-mono text-xs uppercase tracking-wider font-bold pb-3 border-b-2 border-black mb-6 text-black flex items-center justify-between'>
                            <span>{group.number} // {group.title}</span>
                            <span className='text-signal'>+</span>
                        </div>
                        <ul className='space-y-4 font-mono text-xs'>
                            {group.skills.map((skill) => {
                                const key = `${group.number}-${skill.name}`
                                const isOpen = openKey === key
                                return (
                                    <li
                                        key={skill.name}
                                        className='pb-3 border-b border-black/10 transition-colors'
                                    >
                                        <button
                                            type='button'
                                            onClick={() => toggle(key)}
                                            className='w-full text-left flex items-center justify-between gap-3 group cursor-pointer'
                                        >
                                            <div className='flex items-center gap-2'>
                                                <span className='font-mono text-[9px] font-bold text-signal px-1 py-0.5 border border-black/10 bg-paper uppercase select-none'>
                                                    {skill.icon && skill.icon !== 'auto'
                                                        ? skill.icon.slice(0, 2).toUpperCase()
                                                        : (skill.name.replace(/[^a-zA-Z]/g, '').slice(0, 2).toUpperCase() || 'SK')}
                                                </span>
                                                <span className='font-bold text-sm font-uncut text-black group-hover:text-signal transition-colors'>
                                                    {skill.name}
                                                </span>
                                            </div>
                                            <span
                                                className={`text-xs font-mono font-bold px-1.5 py-0.5 border border-black/15 transition-all ${
                                                    isOpen
                                                        ? 'bg-black text-white border-black'
                                                        : 'text-black/60 group-hover:text-black group-hover:border-black'
                                                }`}
                                            >
                                                {isOpen ? '—' : '+'}
                                            </span>
                                        </button>
                                        <div
                                            className={`grid transition-all duration-300 ease-out overflow-hidden font-uncut text-xs text-black/70 leading-relaxed ${
                                                isOpen
                                                    ? 'grid-rows-[1fr] opacity-100 mt-2.5 pt-2 border-t border-dashed border-black/10'
                                                    : 'grid-rows-[0fr] opacity-0 mt-0'
                                            }`}
                                        >
                                            <div className='overflow-hidden'>
                                                {skill.detail}
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </RevealOnScroll>
            ))}
        </div>
    )
}
