import React, { useState, useEffect } from "react";
import logo from '../../Assets/logo.png'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 100);
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav className={`backdrop-blur-md bg-white/80 shadow-lg fixed top-0 w-full z-50 transform transition-transform duration-500 ease-in-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-xl font-bold text-gray-800 tracking-wider">
                    <img className="h-20 w-30" src={logo} />
                </div>

                {/* Hamburger */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none transition-transform duration-300 ease-in-out"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>

                {/* Links */}
                <div className={`transition-all duration-500 ease-in-out md:flex md:items-center md:space-x-8 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none md:pointer-events-auto"} md:opacity-100 md:translate-y-0 p-5 md:p-0`}>
                    {["Home", "About", "Works", "Services", "Contact"].map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="block py-2 md:py-0 text-gray-700 text-lg font-medium hover:text-yellow-500 transition-all duration-300 transform hover:scale-105"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
