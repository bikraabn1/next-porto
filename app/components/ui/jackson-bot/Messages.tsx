'use client'

import { useRef, useEffect } from 'react'
import { UIMessage } from '@ai-sdk/react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type MessagesProps = {
    messages: UIMessage[]
    sendMessage?: (message: { text: string }) => Promise<void>
    isLoading?: boolean
}

const SUGGESTIONS = [
    "What are Bikra's most recent projects?",
    "What tech stack does Bikra specialize in?",
    "Tell me about Bikra's work experience at Adma",
    "How can I contact or hire Bikra?",
]

const TypingIndicator = () => (
    <div className="flex items-start gap-3 font-mono text-xs text-black/60">
        <span className="text-signal font-bold">JACKSON &gt;</span>
        <div className="flex items-center gap-1.5 pt-1">
            <span className="h-1.5 w-1.5 rounded-full bg-signal animate-bounce [animation-delay:0ms]" />
            <span className="h-1.5 w-1.5 rounded-full bg-signal animate-bounce [animation-delay:150ms]" />
            <span className="h-1.5 w-1.5 rounded-full bg-signal animate-bounce [animation-delay:300ms]" />
        </div>
    </div>
)

const EmptyState = ({ sendMessage }: { sendMessage?: MessagesProps['sendMessage'] }) => (
    <div className="flex flex-1 flex-col items-start justify-center p-6 sm:p-12 space-y-8 max-w-2xl mx-auto my-auto">
        <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-signal font-bold">
                <span>[ AGENT INITIALIZED ]</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-uncut font-black uppercase text-black leading-tight">
                Jackson Assistant
            </h3>
            <p className="font-uncut text-base text-black/70 leading-relaxed font-normal">
                Query Bikra&apos;s verified skills, production deliverables, and engineering trajectory directly through this interface.
            </p>
        </div>

        <div className="w-full space-y-2 font-mono text-xs">
            <span className="text-black/40 text-[10px] uppercase block mb-1">// PROMPT SUGGESTIONS</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SUGGESTIONS.map((prompt, i) => (
                    <button
                        key={i}
                        onClick={() => sendMessage?.({ text: prompt })}
                        className="p-3 text-left border border-black/10 bg-paper hover:bg-black hover:text-white hover:border-black transition-colors font-medium text-black/80 flex items-center justify-between group cursor-pointer"
                    >
                        <span>{prompt}</span>
                        <span className="text-signal group-hover:text-white group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                    </button>
                ))}
            </div>
        </div>
    </div>
)

const AssistantMessage = ({ message }: { message: UIMessage }) => {
    const hasText = message.parts.some(p => p.type === 'text' && p.text.length > 0)
    if (!hasText) return null

    return (
        <div className="flex items-start gap-3 sm:gap-4 font-mono text-xs sm:text-sm">
            <div className="shrink-0 text-signal font-bold select-none pt-0.5">
                JACKSON &gt;
            </div>
            <div className="flex-1 font-uncut text-base text-black/90 leading-relaxed space-y-2">
                {message.parts.map((part, i) => {
                    if (part.type === 'text') {
                        return (
                            <ReactMarkdown
                                key={i}
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    p: (props) => <p className="mb-2 last:mb-0" {...props} />,
                                    h1: (props) => <h1 className="text-xl font-uncut font-bold uppercase mb-2 mt-3" {...props} />,
                                    h2: (props) => <h2 className="text-lg font-uncut font-bold uppercase mb-2 mt-3" {...props} />,
                                    h3: (props) => <h3 className="text-base font-uncut font-semibold uppercase mb-1.5 mt-2" {...props} />,
                                    ul: (props) => <ul className="list-disc ml-5 mb-2 space-y-1 font-mono text-xs sm:text-sm" {...props} />,
                                    ol: (props) => <ol className="list-decimal ml-5 mb-2 space-y-1 font-mono text-xs sm:text-sm" {...props} />,
                                    li: (props) => <li className="leading-relaxed" {...props} />,
                                    a: (props) => <a className="text-signal underline hover:opacity-80" target="_blank" rel="noopener noreferrer" {...props} />,
                                    strong: (props) => <strong className="font-bold text-black" {...props} />,
                                    code: ({ className, children, ...props }) => {
                                        const isBlock = /language-(\w+)/.test(className || '')
                                        if (isBlock) {
                                            return <code className={`${className} block p-3 bg-paper border border-black/10 font-mono text-xs my-2 overflow-x-auto`} {...props}>{children}</code>
                                        }
                                        return (
                                            <code className="bg-paper border border-black/15 px-1.5 py-0.5 font-mono text-xs text-black" {...props}>
                                                {children}
                                            </code>
                                        )
                                    },
                                }}
                            >
                                {part.text}
                            </ReactMarkdown>
                        )
                    }
                    return null
                })}
            </div>
        </div>
    )
}

const UserMessage = ({ message }: { message: UIMessage }) => (
    <div className="flex items-start gap-3 sm:gap-4 font-mono text-xs sm:text-sm">
        <div className="shrink-0 text-black/40 font-bold select-none pt-0.5">
            YOU &gt;
        </div>
        <div className="flex-1 font-uncut text-base font-bold text-black leading-relaxed">
            {message.parts.map((part, i) => {
                if (part.type === 'text') {
                    return <span key={i}>{part.text}</span>
                }
                return null
            })}
        </div>
    </div>
)

const Messages = ({ messages, sendMessage, isLoading }: MessagesProps) => {
    const bottomRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages, isLoading])

    const lastMsg = messages[messages.length - 1]
    const showTyping = isLoading && (!lastMsg || lastMsg.role === 'user' || !lastMsg.parts.some(p => p.type === 'text' && p.text.length > 0))

    return (
        <div className='flex-1 overflow-y-auto p-6 sm:p-10 flex flex-col gap-6'>
            {messages.length === 0 ? (
                <EmptyState sendMessage={sendMessage} />
            ) : (
                <>
                    {messages.map((message) =>
                        message.role === 'assistant'
                            ? <AssistantMessage key={message.id} message={message} />
                            : <UserMessage key={message.id} message={message} />
                    )}
                    {showTyping && <TypingIndicator />}
                    <div ref={bottomRef} />
                </>
            )}
        </div>
    )
}

export default Messages
