export const EXPERIENCE_DATAS = [
    {
        period: 'September 2026 - Present',
        role: 'Fullstack Developer Intern',
        company: 'PT Tiga Serangkai Pustaka Mandiri',
        highlights: [
            'Building end-to-end web features across frontend and backend services for educational publishing ecosystems.',
            'Collaborating on fullstack system design, database integration, and high-reliability API development.',
            'Developing maintainable components and streamlining workflows across departmental platforms.'
        ],
        stack: ['Fullstack', 'JavaScript', 'TypeScript', 'Node.js', 'React.js', 'PostgreSQL', 'Git'],
    },
    {
        period: 'June 2026 - September 2026',
        role: 'Frontend Developer Intern',
        company: 'PT Adma Digital Solusi',
        highlights: [
            'Engineered responsive, production-ready web interfaces using Next.js, React, and TypeScript with robust state management.',
            'Integrated AI-powered summary features by consuming REST APIs to deliver intuitive, real-time insights for end-users.',
            'Translated UI/UX wireframes and design systems into reusable, high-performance components across mobile and desktop platforms.',
            'Implemented automated end-to-end (E2E) testing suites using Playwright to validate critical user flows and guarantee release stability.',
        ],
        stack: ['React.js', 'Next.js', 'ExpressJS', 'Playwright', 'Git', 'Postgres'],
    },
    {
        period: 'February 2026 — May 2026',
        role: 'AI Engineer Cohort at Coding Camp 2026 by DBS Foundation',
        company: 'Dicoding',
        highlights: [
            'Worked on machine learning workflows including data preprocessing and basic model training using TensorFlow.',
            'Built simple API endpoints with FastAPI to serve model predictions.',
            'Explored model improvement techniques through experimentation in Google Colab.',
        ],
        stack: ['Python', 'FastAPI', 'TensorFlow', 'Google Colab'],
    },
    {
        period: 'July 2025 - January 2026',
        role: 'Frontend Developer Intern',
        company: 'PT Wiratek Solusi Asia',
        highlights: [
            'Engineered real-time chatbot interactions utilizing Socket.io for internal PLN applications (PLN-IG).',
            'Integrated Apache Superset data visualization dashboards into web applications (PLN-NP).',
            'Developed responsive UI components using React and Next.js, deploying with Docker and PM2.',
            'Ensured consistent layout and usability across mobile and desktop devices.',
        ],
        stack: ['React.js', 'Next.js', 'Socket.io', 'Docker', 'PM2', 'Git'],
    },
    {
        period: 'April 2025 - September 2026',
        role: 'Frontend Mentor',
        company: 'JKB Learning Center by HIMATRIS',
        highlights: [
            'Guided university peers in learning fundamental web development concepts, including HTML, CSS, and basic JavaScript.',
            'Introduced the basics of React and component-based UI development through hands-on practice.',
            'Assisted students in troubleshooting and debugging code to build basic problem-solving skills.',
            'Facilitated interactive learning sessions to help beginners build simple and responsive web pages.'
        ],
        stack: ['React.js', 'HTML', 'CSS', 'JavaScript'],
    },
    {
        period: '2024 — 2025',
        role: 'Mobile Division Member',
        company: 'Protic',
        highlights: [
            'Building simple Android application features using Kotlin.',
            'Worked with XML layouts to create basic user interfaces.',
        ],
        stack: ['Kotlin', 'Android', 'XML'],
    },
]

export type ExperienceItem = (typeof EXPERIENCE_DATAS)[number]

const CMS_URL = process.env.CMS_URL || process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:5173"

export async function getExperiences(): Promise<typeof EXPERIENCE_DATAS> {
    const res = await fetch(`${CMS_URL}/api/experiences`, {
        next: { revalidate: 60 },
    })
    if (!res.ok) {
        throw new Error(`[CMS_ERROR] Failed to fetch experiences: HTTP ${res.status}`)
    }
    const data = await res.json()
    if (!Array.isArray(data)) {
        throw new Error(`[CMS_ERROR] Invalid experiences payload returned by CMS`)
    }
    return data
}

