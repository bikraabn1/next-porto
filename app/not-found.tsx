import Link from 'next/link'

export default function NotFound() {
    return (
        <main className='w-full min-h-[85vh] bg-background text-foreground flex flex-col justify-between px-6 sm:px-12 py-20 max-w-7xl mx-auto select-none'>
            <div className='flex items-center justify-between font-mono text-[11px] text-black/50 border-b border-black/10 pb-4'>
                <div className='flex items-center gap-2'>
                    <span className='text-signal font-bold'>[404]</span>
                    <span>NULL_REFERENCE // UNMAPPED_COORDINATE</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='w-1.5 h-1.5 rounded-full bg-signal animate-pulse'></span>
                    <span className='uppercase'>SYSTEM: DEREFERENCED</span>
                </div>
            </div>

            <div className='my-auto py-16 sm:py-24 max-w-4xl'>
                <div className='font-mono text-xs uppercase text-signal font-bold mb-4 tracking-wider'>
                    ERROR // RECORD NOT CATALOGED
                </div>
                <h1 className='text-4xl sm:text-7xl md:text-8xl font-uncut font-black uppercase tracking-tighter leading-[0.92] text-black mb-8'>
                    Archival Coordinate Not Found<span className='text-signal animate-pulse'>.</span>
                </h1>
                <p className='font-uncut text-lg sm:text-xl md:text-2xl text-black/75 font-normal leading-relaxed max-w-2xl mb-12'>
                    The specified node, artifact, or interactive system does not exist in this catalog registry or has been archived from public accessibility.
                </p>

                <div className='flex flex-wrap items-center gap-6 font-mono text-xs font-bold'>
                    <Link
                        href='/'
                        className='inline-flex items-center gap-2 px-5 py-3 bg-black text-white hover:bg-signal transition-colors group'
                    >
                        <span>&larr;</span>
                        <span>RETURN TO STUDIO INDEX</span>
                    </Link>
                    <Link
                        href='/projects'
                        className='inline-flex items-center gap-2 text-black/70 hover:text-signal transition-colors'
                    >
                        <span>EXPLORE REPOSITORY</span>
                        <span>&rarr;</span>
                    </Link>
                </div>
            </div>

            <div className='border-t border-dashed border-black/15 pt-4 flex items-center justify-between font-mono text-[10px] text-black/40 uppercase'>
                <span>// LOG SIGNATURE: 0x404_NOT_FOUND</span>
                <span>[ ✂ ]</span>
                <span>BIKRA ABNA STUDIO REGISTRY</span>
            </div>
        </main>
    )
}
