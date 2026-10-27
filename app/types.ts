
import type { IconType } from 'react-icons'

export type Project = {
    title: string
    description: string
    imageLink: string
    techStack: string[]
    githubLink?: string
    webLink?: string
    isInternal: boolean
    featured?: boolean
    order?: number
}

export type TechStack = { 
    name: string, 
    icon: IconType,
    docsLink: string
}

export type Certification = { 
    name: string, 
    url: string 
}