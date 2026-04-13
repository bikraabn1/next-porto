import { RefObject, useEffect } from "react";

export const useTypeWriterEffect = (words: string[], ref: RefObject<HTMLElement | null>) => {

    useEffect(() => {
        const element = ref.current
        let wordIndex = 0
        let charIndex = 0
        let isDeleting = false
        let timeout: NodeJS.Timeout

        const typeLoop = () => {
            let currentWord = words[wordIndex]
            if (!isDeleting) {
                charIndex++;
                element!.textContent = currentWord.slice(0, charIndex);

                if (charIndex === currentWord.length) {
                    timeout = setTimeout(() => isDeleting = true, 1000)
                }
            } else {
                charIndex--;
                element!.textContent = currentWord.slice(0, charIndex);

                if (charIndex === 0) {
                    isDeleting = false
                    wordIndex = (wordIndex + 1) % words.length;
                }
            }
            const speed = isDeleting ? 50 : 90;
            timeout = setTimeout(typeLoop, speed);
        }

        typeLoop();
        return () => clearTimeout(timeout)

    }, [words, ref])
}