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
        <div className='flex flex-col h-[calc(100vh-440px)] min-h-[400px] rounded-2xl border border-background/10 bg-background/[0.03] overflow-hidden'>
            {error && (
                <div className="mx-4 mt-3 rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-2.5 text-xs text-red-400 text-center">
                    Something went wrong — {error.message}
                </div>
            )}
            <Messages messages={messages} sendMessage={sendMessage} isLoading={isLoading} />
            <div className="border-t border-background/5">
                <InputChat sendMessage={sendMessage} isLoading={isLoading} />
            </div>
        </div>
    )
}

export default Chats