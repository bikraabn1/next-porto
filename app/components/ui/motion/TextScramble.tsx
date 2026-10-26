'use client'

import { useEffect, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789//+*#<>'

export function TextScramble({
    text,
    className = '',
    delay = 100,
}: {
    text: string
    className?: string
    delay?: number
}) {
    const [displayText, setDisplayText] = useState('')

    useEffect(() => {
        let frame = 0
        const totalFrames = text.length * 2
        let interval: NodeJS.Timeout

        const timeout = setTimeout(() => {
            interval = setInterval(() => {
                frame++
                const progress = frame / totalFrames
                const scrambled = text
                    .split('')
                    .map((char, index) => {
                        if (char === ' ' || char === '\n') return char
                        if (index < text.length * progress) {
                            return text[index]
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)]
                    })
                    .join('')

                setDisplayText(scrambled)

                if (frame >= totalFrames) {
                    clearInterval(interval)
                    setDisplayText(text)
                }
            }, 30)
        }, delay)

        return () => {
            clearTimeout(timeout)
            clearInterval(interval)
        }
    }, [text, delay])

    return (
        <span className={className}>
            {displayText || text}
        </span>
    )
}
