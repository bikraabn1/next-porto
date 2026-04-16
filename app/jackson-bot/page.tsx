import Link from 'next/link'
import { FaRobot } from 'react-icons/fa6'

const messages = [
    { id: 1, role: 'assistant', content: 'Welcome to Jackson Bot. I can summarize projects, stack, and experience highlights.' },
    { id: 2, role: 'user', content: 'What is the strongest frontend skill in this portfolio?' },
    { id: 3, role: 'assistant', content: 'Strongest area: crafting immersive, animated interfaces using Next.js, Tailwind CSS v4, and GSAP.' },
    { id: 4, role: 'user', content: 'Show me relevant project categories.' },
    { id: 5, role: 'assistant', content: 'Categories available: Analytics interfaces, chatbot UI, and portfolio systems.' },
]

export default function JacksonBotPage() {
    return (
          <main id='main-scroller' className='h-screen overflow-y-auto bg-foreground text-background'>
            <section className='relative mx-auto w-full max-w-6xl px-6 pb-20 pt-40 md:px-10'>
                <div className='mb-8 flex flex-wrap items-end justify-between gap-4'>
                    <div>
                        <p className='mb-2 text-sm uppercase tracking-[0.2em] text-primary font-fira-code'>AI Interface</p>
                        <h1 className='text-4xl md:text-5xl font-clash-display tracking-tight'>Jackson Bot</h1>
                    </div>
                    <Link href='/' className='rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition-colors'>
                        Back to Home
                    </Link>
                </div>

                <div className='overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md'>
                    <div className='flex items-center justify-between border-b border-white/10 px-4 py-3'>
                        <div className='flex items-center gap-2'>
                            <FaRobot className='text-primary' />
                            <span className='font-fira-code text-sm text-background/90'>jackson-bot.session</span>
                        </div>
                        <span className='rounded-full bg-green-500/20 px-2 py-1 text-xs text-green-300'>online</span>
                    </div>

                    <div className='space-y-4 px-4 py-5 md:px-6'>
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`max-w-[85%] rounded-xl px-4 py-3 text-sm ${message.role === 'assistant'
                                        ? 'border border-white/10 bg-white/5 text-background/90'
                                        : 'ml-auto border border-primary/30 bg-primary/15 text-background'
                                    }`}
                            >
                                {message.content}
                            </div>
                        ))}
                    </div>

                    <div className='border-t border-white/10 px-4 py-4 md:px-6'>
                        <div className='flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2'>
                            <input
                                disabled
                                placeholder='Input is disabled in this demo page...'
                                className='w-full bg-transparent text-sm text-background/70 outline-none placeholder:text-background/40 cursor-not-allowed'
                            />
                            <button disabled className='rounded-lg bg-primary/40 px-3 py-1 text-xs text-background/90 cursor-not-allowed'>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
                <p className='w-full text-center py-2 italic text-primary'>This Content is During Development - Coming Soon</p>
            </section>
        </main>
    )
}
