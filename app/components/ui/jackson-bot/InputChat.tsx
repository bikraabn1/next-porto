'use client'

import { SyntheticEvent, useState } from "react"
import { IoSend } from "react-icons/io5"

type InputChatProps = {
    sendMessage: (message: { text: string }) => Promise<void>
    isLoading?: boolean
}

const InputChat = ({ sendMessage, isLoading }: InputChatProps) => {
    const [input, setInput] = useState('')

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        if (input.trim() && !isLoading) {
            sendMessage({ text: input })
            setInput('')
        }
    }

    return (
        <div className='px-4 py-3 md:px-6'>
            <form onSubmit={handleSubmit} className='flex items-center gap-3 rounded-xl border border-background/10 bg-background/5 px-4 py-2.5 transition-colors focus-within:border-primary/30'>
                <input
                    placeholder="Ask me about Bikra's projects..."
                    className='w-full bg-transparent text-sm text-background/80 outline-none placeholder:text-background/30'
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className='flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/80 text-foreground transition-all hover:bg-primary disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer'
                >
                    <IoSend size={14} />
                </button>
            </form>
        </div>
    )
}

export default InputChat