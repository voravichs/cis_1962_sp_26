import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // For hamburger / close icon

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { href: "#schedule", label: "Schedule" },
        { href: "#assignments", label: "Assignments" },
        { href: "#resources", label: "Resources" },
        { href: "#staff", label: "Staff" },
    ];
    
    return (
        <nav className="fixed top-0 left-0 w-full main-bg-dark shadow z-50 border-b-2 border-slate-300">
            <div className="mx-auto flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-4 md:py-6 max-w-7xl">
                <a href="#" className="text-red-700 font-bold transition text-2xl md:text-4xl ah-font-bold">
                    CIS 1962
                </a>

                {/* MOBILE Hamburger */}
                <button
                    className="md:hidden text-3xl text-red-700 focus:outline-none"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* DESKTOP Nav */}
                <ul className="hidden md:flex space-x-4 lg:space-x-10 xl:space-x-16">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="hover:text-red-600 transition text-lg md:text-2xl lg:text-3xl"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="hidden md:flex"/>
            </div>

            {/* MOBILE Dropdown */}
            <div
                className={`md:hidden transition-all duration-300 bg-white/90 border-b-2 border-slate-300 shadow ${
                menuOpen ? "max-h-[400px] py-2" : "max-h-0 overflow-hidden py-0"
                }`}
            >
                <ul className="flex flex-col items-center gap-2">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="block px-4 py-3 text-lg text-red-800 hover:text-red-600 transition"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </a>    
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;