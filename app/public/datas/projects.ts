import { Project } from "@/app/types";

export const PROJECT_DATAS: Project[] = [
    {
        title: 'Bikra`s Web Portfolio',
        description: 'A modern portfolio featuring Web3 visual aesthetics, glassmorphism UI, and smooth GSAP scroll animations to showcase my frontend engineering journey.',
        imagePlaceholder: 'Web Portofolio',
        techStack: ['Next.js', 'TypeScript', 'Tailwind', 'GSAP'],
        githubLink: '#',
        webLink: '#',
        isInternal: false
    },
    {
        title: 'Hisho AI',
        description: 'A Japanese AI secretary web app. Developed and refactored real-time chat streaming features and handled complex calendar rendering logic for optimal performance.',
        imagePlaceholder: 'Secretary AI Preview',
        techStack: ['React.js', 'TypeScript', 'Vite', 'GraphQL'],
        githubLink: '#',
        isInternal: true
    },
    {
        title: 'Lentera - AI Agent PLN',
        description: 'Intelligent AI assistants for PLN`s HR and HC departments. Engineered real-time chatbot interactions utilizing Socket.io and managed application state with Zustand.',
        imagePlaceholder: 'Lentera Preview',
        techStack: ['Next.js', 'AntDesign', 'RestAPI', 'Socket.io', 'Zustand'],
        githubLink: '#',
        isInternal: true
    }
]