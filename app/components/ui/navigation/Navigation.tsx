"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { JakartaClock } from "../motion/JakartaClock"

const Navigation = () => {
    const pathname = usePathname()

    const menus = [
        { label: 'Index', href: '/' },
        { label: 'Projects', href: '/projects' },
        { label: 'Timeline', href: '/experience' },
        { label: 'Terminal', href: '/jackson-bot' }
    ]

    return (
        <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-black/5 flex items-center justify-between px-6 sm:px-12 py-4 font-mono text-[11px] select-none transition-all">
            <Link
                href="/"
                className="flex items-center gap-2.5 font-uncut font-bold text-base tracking-tight text-black group"
            >
                <Image
                    src="/logo-header.png"
                    alt="Bikra Abna Logo"
                    width={26}
                    height={26}
                    className="w-6.5 h-6.5 object-contain shrink-0 group-hover:scale-105 transition-transform"
                    priority
                />
                <span>BIKRA ABNA</span>
                <span className="hidden sm:inline text-black/30 font-mono text-[10px] font-normal">// STUDIO</span>
            </Link>

            <div className="flex items-center gap-8">
                <div className="hidden md:flex items-center gap-3 text-black/60 text-[10px] tracking-wider uppercase">
                    <span className="text-black/40">JAKARTA</span>
                    <JakartaClock />
                    <span className="text-black/30">|</span>
                    <span className="text-black font-medium">AVAILABLE FOR WORK</span>
                </div>

                <nav className="flex items-center gap-6 sm:gap-8">
                    {menus.map((menu) => {
                        const isActive = pathname === menu.href
                        return (
                            <Link
                                key={menu.href}
                                href={menu.href}
                                className={`relative py-1 tracking-tight transition-colors ${
                                    isActive
                                        ? 'text-black font-bold'
                                        : 'text-black/60 hover:text-signal'
                                }`}
                            >
                                {menu.label}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-signal" />
                                )}
                            </Link>
                        )
                    })}
                </nav>
            </div>
        </header>
    )
}

export default Navigation
