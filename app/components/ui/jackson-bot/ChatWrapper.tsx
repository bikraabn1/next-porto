'use client'

import dynamic from 'next/dynamic'

const Chats = dynamic(() => import('./Chats'), {
    ssr: false,
    loading: () => <div className="h-[calc(100vh-240px)] min-h-[400px] rounded-2xl bg-background/5 animate-pulse" />,
})

export default function ChatWrapper() {
    return <Chats />
}
