
import type { IconType } from 'react-icons'

export type Project = {
    title: string
    description: string
    imagePlaceholder: string
    techStack: string[]
    githubLink?: string
    webLink?: string
    isInternal: boolean
}

export type TechStack = { 
    name: string, 
    icon: IconType 
}

export type Certification = { 
    name: string, 
    url: string 
}