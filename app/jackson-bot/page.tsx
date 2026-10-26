import Link from 'next/link'
import ChatWrapper from '../components/ui/jackson-bot/ChatWrapper'

export default function JacksonBotPage() {
    return (
        <main className='w-full min-h-screen bg-background text-foreground'>
            <div className='px-6 sm:px-12 pt-20 pb-12 max-w-5xl mx-auto border-b border-black/10'>
                <div className='flex items-center justify-between font-mono text-[11px] text-black/50 mb-8'>
                    <div className='flex items-center gap-2'>
                        <span className='text-signal font-bold'>[04]</span>
                        <span>INTERACTIVE TERMINAL INTERFACE</span>
                    </div>
                    <Link
                        href='/'
                        className='font-mono text-xs font-bold text-black hover:text-signal transition-colors inline-flex items-center gap-1.5'
                    >
                        <span>&larr;</span>
                        <span>RETURN TO INDEX</span>
                    </Link>
                </div>

                <div className='flex flex-wrap items-baseline justify-between gap-4'>
                    <h1 className='text-4xl sm:text-6xl md:text-7xl font-uncut font-black uppercase tracking-tighter leading-none'>
                        Jackson Terminal<span className='text-signal'>.</span>
                    </h1>
                    <div className='flex items-center gap-2 font-mono text-xs text-black/60'>
                        <span className='w-2 h-2 rounded-full bg-signal animate-pulse'></span>
                        <span>NODE: ONLINE // READY</span>
                    </div>
                </div>
            </div>

            <div className='w-full border-t border-dashed border-black/15 flex items-center justify-between px-6 sm:px-12 py-2.5 font-mono text-[10px] text-black/40 uppercase select-none'>
                <span>// STREAMING INFERENCE SESSION</span>
                <span>[ ✂ ]</span>
                <span>FILE: JACKSON_AGENT.SYS</span>
            </div>

            <div className='max-w-5xl mx-auto px-6 sm:px-12 py-12 sm:py-16'>
                <ChatWrapper />
            </div>
        </main>
    )
}
