const Navbar = () => {
    return (
        <nav className="absolute top-10 rounded-full left-1/2 -translate-x-1/2 flex gap-3 p-2 bg-foreground backdrop-blur-md z-50">
            <button className="py-2 px-6 bg-primary rounded-full">
                Index
            </button>
            <button className="py-2 px-6 bg-primary rounded-full">
                Projects
            </button>
            <button className="py-2 px-6 bg-primary rounded-full">
                Tech Stack
            </button>
            <button className="py-2 px-6 bg-primary rounded-full">
                Contact Me
            </button>
        </nav>
    )
}

export default Navbar