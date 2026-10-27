const CMS_URL = process.env.CMS_URL || process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:5173"

export interface SkillItem {
    name: string
    detail: string
    icon?: string
}

export interface CapabilityGroup {
    number: string
    title: string
    skills: SkillItem[]
}

export interface HomePageSettings {
    headline?: string
    availabilityStatus?: string
    bio?: string
    resumeUrl?: string
    telemetryMarquee?: string
    sectionOrder?: string[]
}

export interface JacksonBotSettings {
    systemPrompt?: string
}

export async function getPageSettings<T>(pageId: string): Promise<T | null> {
    try {
        const res = await fetch(`${CMS_URL}/api/pages/${pageId}`, {
            next: { revalidate: 60 },
        })
        if (!res.ok) return null
        return (await res.json()) as T
    } catch {
        // shortcut: fallback to null if offline, consumers supply hardcoded defaults
        return null
    }
}
