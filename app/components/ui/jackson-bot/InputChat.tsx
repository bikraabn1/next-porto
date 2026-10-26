'use client'

import { SyntheticEvent, useState } from "react"

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
        <div className='p-4 sm:p-5'>
            <form onSubmit={handleSubmit} className='flex items-center gap-3 border border-black/15 bg-white px-4 py-3 transition-colors focus-within:border-black'>
                <span className='font-mono text-xs text-signal font-bold select-none'>&gt;</span>
                <input
                    placeholder="Query skills, trajectory, or specific projects..."
                    className='w-full bg-transparent font-mono text-xs sm:text-sm text-black outline-none placeholder:text-black/30'
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className='font-mono text-[11px] font-bold flex uppercase px-4 py-1.5 bg-black text-white hover:bg-signal transition-colors disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer'
                >
                    ENTER <span className='ml-1'>&rarr;</span>
                </button>
            </form>
        </div>
    )
}

export default InputChat
