const Navbar = () => {
    return (
        <nav className="absolute top-10 rounded-full left-1/2 -translate-x-1/2 flex gap-3 p-2 bg-[#171717]/60 backdrop-blur-md z-50">
            <button className="py-2 px-6 bg-linear-90 from-orange-600 to-orange-800 text-[e2e8f0] font-semibold rounded-full">
                Home
            </button>
            <button className="py-2 px-6 bg-linear-90 from-orange-600 to-orange-800 text-[e2e8f0] font-semibold rounded-full">
                Projects
            </button>
            <button className="py-2 px-6 bg-linear-90 from-orange-600 to-orange-800 text-[e2e8f0] font-semibold rounded-full">
                Jackson
            </button>
            <button className="py-2 px-6 bg-linear-90 from-orange-600 to-orange-800 text-[e2e8f0] font-semibold rounded-full">
                Tech Stack
            </button>
            <button className="py-2 px-6 bg-linear-90 from-orange-600 to-orange-800 text-[e2e8f0] font-semibold rounded-full">
                Contact Me
            </button>
        </nav>
    )
}

export default Navbar