import Link from 'next/link'
import ChatWrapper from '../components/ui/jackson-bot/ChatWrapper'

export default function JacksonBotPage() {
    return (
        <main id='main-scroller' className='h-screen overflow-y-auto bg-foreground text-background'>
            <section className='relative mx-auto w-full max-w-6xl px-6 pb-20 pt-40 md:px-10'>
                <div className='mb-8 flex flex-wrap items-end justify-end gap-4'>
                    <Link href='/' className='rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition-colors'>
                        Back to Home
                    </Link>
                </div>

                <ChatWrapper />
            </section>
        </main>
    )
}
