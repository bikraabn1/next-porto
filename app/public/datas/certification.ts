import { Certification } from "@/app/types";

export const CERTIFICATION_DATAS: Certification[] = [
    { name: 'Belajar Machine Learning untuk Pemula', url: 'https://www.dicoding.com/certificates/81P2OVYVYZOY' },
    { name: 'Belajar Dasar Pemrograman JavaScript', url: 'https://www.dicoding.com/certificates/MRZMNDVRNPYQ' },
    { name: 'Belajar Membuat Aplikasi Web dengan React', url: 'https://www.dicoding.com/certificates/07Z60N9OMZQR' },
    { name: 'Belajar Dasar Pemrograman Web', url: 'https://www.dicoding.com/certificates/N9ZOO2Q16ZG5' },
    { name: 'Belajar Membuat Front-End Web untuk Pemula', url: 'https://www.dicoding.com/certificates/0LZ02WN0KX65' },
]

const CMS_URL = process.env.CMS_URL || process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:5173"

export async function getCertifications(): Promise<Certification[]> {
    const res = await fetch(`${CMS_URL}/api/certifications`, {
        next: { revalidate: 60 },
    })
    if (!res.ok) {
        throw new Error(`[CMS_ERROR] Failed to fetch certifications: HTTP ${res.status}`)
    }
    const data = await res.json()
    if (!Array.isArray(data)) {
        throw new Error(`[CMS_ERROR] Invalid certifications payload returned by CMS`)
    }
    return data
}
