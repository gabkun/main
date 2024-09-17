import React, { useState, useEffect } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav className={`bg-indigo-600 text-white shadow-md w-full fixed top-0 z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* LOGO */}
                <div className="flex items-center">
                    {/* Add your logo here */}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <div className={`flex-1 justify-center items-center space-x-8 md:flex ${isOpen ? "block" : "hidden"} md:block`}>
                    <a href="#" className="block text-lg hover:text-yellow-200 transition duration-300">Home</a>
                    <a href="#about" className="block text-lg hover:text-yellow-200 transition duration-300">About</a>
                    <a href="#works" className="block text-lg hover:text-yellow-200 transition duration-300">Works</a>
                    <a href="#services" className="block text-lg hover:text-yellow-200 transition duration-300">Services</a>
                    <a href="#contacts" className="block text-lg hover:text-yellow-200 transition duration-300">Contact</a>
                </div>
                </div>
        </nav>
    );
}