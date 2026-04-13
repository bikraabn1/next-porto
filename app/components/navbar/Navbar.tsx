const Navbar = () => {
    const menus = ['Home', 'Projects', 'Jackson', 'Tech Stack', 'Contact Me']
    return (
        <nav className="absolute top-10 rounded-full left-1/2 -translate-x-1/2 flex gap-3 p-2 bg-[#171717]/60 backdrop-blur-md z-50">
            {menus.map((text, index) => (
                <button key={index} className="py-3 px-6 bg-linear-90 from-orange-600 to-orange-800 text-[e2e8f0] hover:scale-105 transition-all ease-in-out duration-150 cursor-pointer tracking-wider font-fira-code rounded-full">
                    {text}
                </button>
            ))}
        </nav>
    )
}

export default Navbar