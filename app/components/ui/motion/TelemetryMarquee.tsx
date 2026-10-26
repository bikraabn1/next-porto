'use client'

export function TelemetryMarquee({ text = "SYSTEM STATUS: NOMINAL // LATITUDE: -6.2088 // LONGITUDE: 106.8456 // LOC: JAKARTA // CRAFT: FULLSTACK ENGINEERING // ARCHIVE: 2026.INDEX" }: { text?: string }) {
    return (
        <div className="w-full border-y border-dashed border-black/15 bg-paper/50 py-2.5 overflow-hidden select-none flex items-center font-mono text-[10px] text-black/50 uppercase tracking-widest">
            <div className="flex shrink-0 animate-marquee items-center gap-10 whitespace-nowrap">
                <span>{text}</span>
                <span className="text-signal font-bold">[ ✂ TEAR ALONG LINE ]</span>
                <span>{text}</span>
                <span className="text-signal font-bold">[ ✂ TEAR ALONG LINE ]</span>
            </div>
            <div aria-hidden="true" className="flex shrink-0 animate-marquee items-center gap-10 whitespace-nowrap">
                <span>{text}</span>
                <span className="text-signal font-bold">[ ✂ TEAR ALONG LINE ]</span>
                <span>{text}</span>
                <span className="text-signal font-bold">[ ✂ TEAR ALONG LINE ]</span>
            </div>
        </div>
    )
}
