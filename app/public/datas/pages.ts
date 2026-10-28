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

export interface FeatureSettings {
    enableJacksonBot?: boolean
    enableProjectsPage?: boolean
    enableExperiencePage?: boolean
}

export async function getFeatureSettings(): Promise<FeatureSettings> {
    const settings = await getPageSettings<FeatureSettings>("features")
    return {
        enableJacksonBot: settings?.enableJacksonBot !== false,
        enableProjectsPage: settings?.enableProjectsPage !== false,
        enableExperiencePage: settings?.enableExperiencePage !== false,
    }
}

export async function getPageSettings<T>(pageId: string): Promise<T | null> {
    const res = await fetch(`${CMS_URL}/api/pages/${pageId}`, {
        next: { revalidate: 60 },
    })
    if (!res.ok) {
        if (res.status === 404) return null
        throw new Error(`[CMS_ERROR] Failed to fetch settings for '${pageId}': HTTP ${res.status}`)
    }
    return (await res.json()) as T
}
