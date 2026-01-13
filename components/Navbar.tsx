'use client';

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { SiCanvas } from "react-icons/si";
import { GiDiscussion } from "react-icons/gi";
import upenn from "@/assets/upenn_shield.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinkClass = "text-2xl px-1 opacity-50 hover:opacity-100 hover:text-red-500 focus:text-red-500 font-bold transition-all";
    const iconBtnClass = "text-3xl sm:text-3xl font-bold text-white bg-slate-800 group-hover:text-red-500 group-focus:text-red-500 px-8 py-4 rounded shadow border border-slate-700 transition-colors shadow-lg hover:shadow-xl focus:shadow-xl";
    
    return (
        <nav
            className="fixed top-0 left-0 w-full bg-white dark:bg-black shadow z-50 border-b border-slate-200"
            style={{ fontFamily: "var(--font-source-sans)" }}
        >
            <div className="mx-auto flex items-center gap-6 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-4 max-w-7xl">
                <Link href="/#" aria-label="Home">
                    <Image
                        src={upenn}
                        alt="University of Pennsylvania Shield"
                        width={1760}
                        height={2000}
                        className="w-11 md:w-20 h-12.5 md:h-20 min-w-20 min-h-20"
                    />
                </Link>
                <div className="flex flex-col flex-1 text-black dark:text-white">
                    <h1 className="text-center md:text-left font-extrabold text-5xl leading-tight overflow">
                        CIS 1962<span className="hidden md:inline">: JavaScript</span>
                    </h1>
                    <span className="hidden md:flex opacity-75 text-lg md:text-xl mb-4">Spring 2026 &#8226; Thursday 5:15-6:45 PM &#8226; Amy Gutmann Hall 214</span>
                    <ul className="hidden md:flex items-center gap-6 mt-1">
                        {[
                            { href: '/syllabus', label: 'Syllabus' },
                            { href: '/#schedule', label: 'Schedule' },
                            { href: '/#resources', label: 'Resources' },
                            { href: '/#staff', label: 'Staff' },
                        ].map(({ href, label }) => (
                            <li key={label}>
                                <Link href={href} className={navLinkClass}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden md:flex lg:hidden xl:hidden gap-3 mt-4">
                        <a href="https://canvas.upenn.edu/courses/1911777" className="flex flex-col items-center group" target="_blank" rel="noopener noreferrer" aria-label="Canvas">
                            <span className={iconBtnClass}>
                                <SiCanvas />
                            </span>
                            <span className="text-sm mt-1 group-hover:text-red-500 tracking-wide font-semibold">Canvas</span>
                        </a>
                        <a href="https://edstem.org/us/courses/91614/discussion" className="flex flex-col items-center group" target="_blank" rel="noopener noreferrer" aria-label="Ed Discussion">
                            <span className={iconBtnClass}>
                                <GiDiscussion />
                            </span>
                            <span className="text-sm mt-1 group-hover:text-red-500 tracking-wide font-semibold">Ed Discussion</span>
                        </a>
                    </div>
                </div>
                <div className="hidden lg:flex gap-3 ml-6 text-black dark:text-white">
                    <a href="https://canvas.upenn.edu/courses/1911777" className="flex flex-col items-center group" target="_blank" rel="noopener noreferrer" aria-label="Canvas">
                        <span className={iconBtnClass}>
                            <SiCanvas />
                        </span>
                        <span className="text-sm text-center mt-1 group-hover:text-red-500 tracking-wide font-semibold">Canvas</span>
                    </a>
                    <a href="https://edstem.org/us/courses/91614/discussion" className="flex flex-col items-center group" target="_blank" rel="noopener noreferrer" aria-label="Ed Discussion">
                        <span className={iconBtnClass}>
                            <GiDiscussion />
                        </span>
                        <span className="text-sm text-center mt-1 group-hover:text-red-500 tracking-wide font-semibold">Ed Discussion</span>
                    </a>
                </div>
                    {/* Canvas & Ed on right for xl+ only */}
                {/* MOBILE HAMBURGER */}
                <button
                    className="md:hidden text-3xl text-black dark:text-white p-2 ml-auto rounded focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* MOBILE Dropdown */}
            <div
                className={`md:hidden bg-white border-b border-slate-200 shadow overflow-hidden transition-[max-height,padding] duration-500 ease-in-out ${
                menuOpen ? "max-h-160 pb-4" : "max-h-0 py-0"
                }`}
            >
                <ul className="flex flex-col gap-1 items-center">
                    {[
                        { href: '/syllabus', label: 'Syllabus' },
                        { href: '/#schedule', label: 'Schedule' },
                        { href: '/#resources', label: 'Resources' },
                        { href: '/#staff', label: 'Staff' },
                    ].map(({ href, label }) => (
                        <li key={label} className="w-full">
                            <Link href={href} className="block w-full bg-indigo-50 text-xl text-center font-bold text-red-800 px-8 py-6 border border-indigo-200 shadow active:bg-slate-300 focus:bg-slate-300 hover:bg-slate-300 transition">{label}</Link>
                        </li>
                    ))}
                </ul>
                <p className="text-black/75 text-lg text-center py-4">Spring 2026 &#8226; Thursday 5:15-6:45 PM &#8226; Amy Gutmann Hall 214</p>
                <div className="flex justify-center gap-3">
                    <a href="https://canvas.upenn.edu/courses/1911777" className="flex flex-col items-center group" target="_blank" rel="noopener noreferrer" aria-label="Canvas">
                        <span className={iconBtnClass}>
                            <SiCanvas />
                        </span>
                        <span className="text-md text-center mt-1 text-black group-hover:text-red-500 tracking-wide font-semibold">Canvas</span>
                    </a>
                    <a href="https://edstem.org/us/courses/91614/discussion" className="flex flex-col items-center group" target="_blank" rel="noopener noreferrer" aria-label="Ed Discussion">
                        <span className={iconBtnClass}>
                            <GiDiscussion />
                        </span>
                        <span className="text-md text-center mt-1 text-black group-hover:text-red-500 tracking-wide font-semibold">Ed Discussion</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};