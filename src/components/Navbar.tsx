"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-gradient-to-b from-black/80 to-transparent pt-6"
                }`}
        >
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="text-2xl font-bold text-white tracking-tighter">
                        N.S
                    </Link>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map(
                        (item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                            >
                                {item}
                            </Link>
                        )
                    )}
                </div>

                <div className="flex items-center space-x-4">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white opacity-80 hover:opacity-100 transition-opacity"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 3C6.72 2 4 3 4 3c-1.5 2-1 4 3 3.5-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                    </a>
                    <a
                        href="https://wa.me/918590193478"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative px-6 py-2 text-sm font-bold text-white bg-transparent rounded-full overflow-hidden group neon-border"
                    >
                        <span className="relative z-10 group-hover:text-white transition-colors">Hire Me</span>
                        <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors"></div>
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
