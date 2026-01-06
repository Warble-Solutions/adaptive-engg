"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NavLink = ({ href, children, isScrolled }: { href: string; children: React.ReactNode; isScrolled: boolean }) => (
    <Link
        href={href}
        className={cn(
            "relative text-sm font-bold uppercase tracking-wider transition-colors duration-300 py-6",
            isScrolled ? "text-slate-700 hover:text-primary" : "text-slate-700 hover:text-primary" // Fixed header always on white/glass in design
        )}
    >
        {children}
    </Link>
);

const DropdownLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href} className="block px-6 py-3 text-sm text-slate-600 hover:text-primary hover:bg-teal-50 hover:pl-7 transition-all duration-200">
        {children}
    </Link>
);

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show/Hide logic
            if (currentScrollY > 100) {
                if (currentScrollY > lastScrollY) {
                    setIsHidden(true); // Scrolling down
                } else {
                    setIsHidden(false); // Scrolling up
                }
            } else {
                setIsHidden(false);
            }

            setIsScrolled(currentScrollY > 20);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-black/5",
                    "bg-white/90 backdrop-blur-md", // Always glass white as per design
                    isHidden ? "-translate-y-full" : "translate-y-0"
                )}
            >
                <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between h-24">
                    {/* Logo */}
                    <Link href="/">
                        <Image
                            src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_170/https://adaptive-engg.com/wp-content/uploads/2025/04/logo-1-png.avif"
                            alt="Adaptive Engineering"
                            width={170}
                            height={48}
                            className="h-12 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        <NavLink href="/" isScrolled={isScrolled}>Home</NavLink>

                        <div className="relative group flex items-center h-full" onMouseEnter={() => setActiveDropdown('about')} onMouseLeave={() => setActiveDropdown(null)}>
                            <Link href="/about" className={cn(
                                "flex items-center gap-1 py-6 text-sm font-bold uppercase tracking-wider transition-colors duration-300",
                                isScrolled ? "text-slate-700 hover:text-primary" : "text-slate-700 hover:text-primary"
                            )}>
                                About Us <ChevronDown className="w-3 h-3 opacity-50" />
                            </Link>
                            <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-xl border-t-2 border-primary overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <DropdownLink href="/about">Company Profile</DropdownLink>
                                <DropdownLink href="/about">Our Team</DropdownLink>
                                <DropdownLink href="/history">Our Journey</DropdownLink>
                                <DropdownLink href="/contact">Career</DropdownLink>
                                <DropdownLink href="/contact">Contact Us</DropdownLink>
                            </div>
                        </div>

                        <div className="relative group flex items-center h-full">
                            <Link href="/renewable" className={cn(
                                "flex items-center gap-1 py-6 text-sm font-bold uppercase tracking-wider transition-colors duration-300",
                                isScrolled ? "text-slate-700 hover:text-primary" : "text-slate-700 hover:text-primary"
                            )}>
                                Renewable Solutions <ChevronDown className="w-3 h-3 opacity-50" />
                            </Link>
                            <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-xl border-t-2 border-primary overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <DropdownLink href="/renewable">Unified Renewable</DropdownLink>
                                <DropdownLink href="/ppc">Power Plant Control</DropdownLink>
                                <DropdownLink href="/renewable">Solar Wind Hybrid</DropdownLink>
                                <DropdownLink href="/renewable">Turnkey E&I</DropdownLink>
                            </div>
                        </div>

                        <div className="relative group flex items-center h-full">
                            <Link href="/pm-kusum" className={cn(
                                "flex items-center gap-1 py-6 text-sm font-bold uppercase tracking-wider transition-colors duration-300",
                                isScrolled ? "text-slate-700 hover:text-primary" : "text-slate-700 hover:text-primary"
                            )}>
                                PM-KUSUM <ChevronDown className="w-3 h-3 opacity-50" />
                            </Link>
                            <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-xl border-t-2 border-primary overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <DropdownLink href="#">SolarWiz</DropdownLink>
                                <DropdownLink href="#">WaterWiz</DropdownLink>
                                <DropdownLink href="#">MachineWiz</DropdownLink>
                                <DropdownLink href="#">Asset Management</DropdownLink>
                            </div>
                        </div>

                        <div className="relative group flex items-center h-full">
                            <button className="text-sm font-bold uppercase tracking-wider text-slate-700 hover:text-primary flex items-center gap-1 py-6">
                                Infrastructure <ChevronDown className="w-3 h-3 opacity-50" />
                            </button>
                            <div className="absolute top-full right-0 w-64 bg-white shadow-xl rounded-b-xl border-t-2 border-primary overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <DropdownLink href="#">Tunnel Solutions</DropdownLink>
                                <DropdownLink href="#">Data Center</DropdownLink>
                                <DropdownLink href="#">Industrial Automation</DropdownLink>
                            </div>
                        </div>

                        <div className="relative group flex items-center h-full">
                            <button className="text-sm font-bold uppercase tracking-wider text-slate-700 hover:text-primary flex items-center gap-1 py-6">
                                Resources <ChevronDown className="w-3 h-3 opacity-50" />
                            </button>
                            <div className="absolute top-full right-0 w-64 bg-white shadow-xl rounded-b-xl border-t-2 border-primary overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <DropdownLink href="#">Certification</DropdownLink>
                                <DropdownLink href="#">Brochure</DropdownLink>
                                <DropdownLink href="#">Case Studies</DropdownLink>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden text-slate-800"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 z-[60] bg-white flex flex-col justify-center px-8 space-y-8 shadow-2xl lg:hidden"
                    >
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-6 right-6 text-slate-400 p-2"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-heading font-bold text-slate-900">Home</Link>
                        <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-heading font-bold text-slate-900">About</Link>
                        <Link href="/renewable" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-heading font-bold text-slate-900">Solutions</Link>
                        <Link href="/pm-kusum" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-heading font-bold text-slate-900">PM-KUSUM</Link>
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-heading font-bold text-primary">Contact</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
