'use client'

import { useMemo, useEffect } from 'react'
import { useChat, UIMessage } from '@ai-sdk/react'
import InputChat from './InputChat'
import Messages from './Messages'

const STORAGE_KEY = 'jackson-bot-messages'

function getStoredMessages(): UIMessage[] {
    if (typeof window === 'undefined') return []
    try {
        const saved = localStorage.getItem(STORAGE_KEY)
        return saved ? JSON.parse(saved) : []
    } catch {
        localStorage.removeItem(STORAGE_KEY)
        return []
    }
}

const Chats = () => {
    const stored = useMemo(() => getStoredMessages(), [])

    const { messages, sendMessage, error, status } = useChat({
        messages: stored,
        id: 'jackson-bot',
        onError: (err) => console.error('Chat error:', err),
    })

    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
        }
    }, [messages])

    const isLoading = status === 'streaming' || status === 'submitted'

    return (
        <div className='flex flex-col h-[calc(100vh-360px)] min-h-[520px] bg-white border border-black/10 overflow-hidden'>
            <div className='flex items-center justify-between px-5 py-3 border-b border-black/10 bg-paper font-mono text-[11px] select-none'>
                <div className='flex items-center gap-2.5'>
                    <span className='w-2 h-2 rounded-full bg-signal'></span>
                    <span className='font-bold uppercase tracking-wider text-black'>JACKSON // v2.6.0</span>
                </div>
                <div className='text-black/40 text-[10px] uppercase'>
                    CONTEXT: RESUME_SPEC_2026
                </div>
            </div>

            {error && (
                <div className="mx-6 mt-4 p-3 font-mono text-xs text-signal border border-signal/20 bg-signal/5">
                    ERROR: {error.message}
                </div>
            )}

            <Messages messages={messages} sendMessage={sendMessage} isLoading={isLoading} />

            <div className="border-t border-black/10 bg-paper">
                <InputChat sendMessage={sendMessage} isLoading={isLoading} />
            </div>
        </div>
    )
}

export default Chats
