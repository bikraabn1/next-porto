'use client'

import { useRef, useEffect } from 'react'
import { UIMessage } from '@ai-sdk/react'
import { FaRobot } from 'react-icons/fa'
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
    "Tell me about Bikra's work experience",
    "How can I contact Bikra?",
]

const TypingIndicator = () => (
    <div className="flex items-start gap-3">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-background/10 text-background/70 mt-0.5">
            <FaRobot size={13} />
        </div>
        <div className="rounded-xl rounded-tl-sm bg-background/5 border border-background/10 px-4 py-3">
            <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/60 animate-bounce [animation-delay:0ms]" />
                <span className="h-1.5 w-1.5 rounded-full bg-primary/60 animate-bounce [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 rounded-full bg-primary/60 animate-bounce [animation-delay:300ms]" />
            </div>
        </div>
    </div>
)

const EmptyState = ({ sendMessage }: { sendMessage?: MessagesProps['sendMessage'] }) => (
    <div className="flex flex-1 flex-col items-center justify-center space-y-6 px-4">
        <div className="flex flex-col items-center space-y-3 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 text-primary">
                <FaRobot size={26} />
            </div>
            <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-background tracking-tight">Jackson Bot</h3>
                <p className="text-[11px] text-background/40 leading-relaxed max-w-[280px]">
                    Bikra&apos;s personal AI assistant — here to tell you about his skills, projects, and experience.
                </p>
            </div>
        </div>

        <div className="grid w-full max-w-sm grid-cols-1 gap-2 sm:grid-cols-2">
            {SUGGESTIONS.map((prompt, i) => (
                <button
                    key={i}
                    onClick={() => sendMessage?.({ text: prompt })}
                    className="rounded-lg border border-background/10 bg-background/5 px-3 py-2.5 text-left text-xs text-background/60 transition-all hover:bg-background/10 hover:text-background/80 hover:border-background/15 active:scale-[0.98] cursor-pointer"
                >
                    {prompt}
                </button>
            ))}
        </div>
    </div>
)

const AssistantMessage = ({ message }: { message: UIMessage }) => {
    const hasText = message.parts.some(p => p.type === 'text' && p.text.length > 0)

    if (!hasText) return null

    return (
        <div className="flex items-start gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-background/10 text-background/70 mt-0.5">
                <FaRobot size={13} />
            </div>
            <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-background/5 border border-background/10 px-4 py-3 text-sm text-background/90">
                {message.parts.map((part, i) => {
                    if (part.type === 'text') {
                        return (
                            <ReactMarkdown
                                key={i}
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    p: (props) => <p className="mb-2 last:mb-0 leading-relaxed" {...props} />,
                                    h1: (props) => <h1 className="text-base font-bold mb-2 mt-3 first:mt-0" {...props} />,
                                    h2: (props) => <h2 className="text-sm font-bold mb-2 mt-3 first:mt-0" {...props} />,
                                    h3: (props) => <h3 className="text-sm font-semibold mb-1.5 mt-2 first:mt-0" {...props} />,
                                    ul: (props) => <ul className="list-disc ml-4 mb-2 space-y-0.5" {...props} />,
                                    ol: (props) => <ol className="list-decimal ml-4 mb-2 space-y-0.5" {...props} />,
                                    li: (props) => <li className="leading-relaxed" {...props} />,
                                    a: (props) => <a className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
                                    strong: (props) => <strong className="font-semibold text-background" {...props} />,
                                    em: (props) => <em className="italic" {...props} />,
                                    blockquote: (props) => <blockquote className="border-l-2 border-primary/40 pl-3 my-2 text-background/70 italic" {...props} />,
                                    hr: () => <hr className="border-background/10 my-3" />,
                                    pre: (props) => <pre className="bg-background/10 border border-background/10 rounded-lg p-3 overflow-x-auto my-2 text-xs" {...props} />,
                                    code: ({ className, children, ...props }) => {
                                        const isBlock = /language-(\w+)/.test(className || '')
                                        if (isBlock) {
                                            return <code className={`${className} text-background/90`} {...props}>{children}</code>
                                        }
                                        return (
                                            <code className="bg-primary/15 text-primary px-1 py-0.5 rounded text-xs font-mono" {...props}>
                                                {children}
                                            </code>
                                        )
                                    },
                                    table: (props) => (
                                        <div className="overflow-x-auto my-2">
                                            <table className="w-full text-xs border-collapse" {...props} />
                                        </div>
                                    ),
                                    th: (props) => <th className="border border-background/10 px-2 py-1 text-left font-semibold bg-background/5" {...props} />,
                                    td: (props) => <td className="border border-background/10 px-2 py-1" {...props} />,
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
    <div className="flex justify-end">
        <div className="max-w-[85%] rounded-xl rounded-tr-sm bg-primary/15 border border-primary/25 px-4 py-3 text-sm text-background">
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
        <div className='flex-1 overflow-y-auto px-4 py-5 md:px-6 flex flex-col gap-4'>
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