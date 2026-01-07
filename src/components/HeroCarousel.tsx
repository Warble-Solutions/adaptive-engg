"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useScene, SceneVariant } from "@/context/SceneContext";

const slides = [
    {
        id: 1,
        title: "Renewable Solutions",
        subtext: "Integrating Manufacturing, Execution, and Digital Intelligence.",
        cta: "Our Solutions",
        link: "/renewable",
        ctaSecondary: "Our Expertise",
        linkSecondary: "/about",
        scene: {
            primaryColor: "#049A89", // Teal
            secondaryColor: "#0F172A",
            speed: 1,
            variant: 'network' as SceneVariant
        }
    },
    {
        id: 2,
        title: "PM-KUSUM Solutions",
        subtext: "Empowering farmers with Solar Pumps & IoT (SolarWiz).",
        cta: "View Scheme",
        link: "/pm-kusum",
        ctaSecondary: "Contact Us",
        linkSecondary: "/contact",
        scene: {
            primaryColor: "#3B82F6", // Blue
            secondaryColor: "#1E3A8A",
            speed: 2,
            variant: 'solar' as SceneVariant
        }
    },
    {
        id: 3,
        title: "Infrastructure Solutions",
        subtext: "Turnkey E&I for Tunnels, Data Centers & Heavy Industry.",
        cta: "View Projects",
        link: "/#projects",
        ctaSecondary: "Get Quote",
        linkSecondary: "/contact",
        scene: {
            primaryColor: "#F59E0B", // Amber
            secondaryColor: "#451A03",
            speed: 0.5,
            variant: 'wind' as SceneVariant
        }
    },
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);
    const { setScene } = useScene();

    useEffect(() => {
        setScene(slides[current].scene);
    }, [current, setScene]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3000); // 3 seconds pause as requested
        return () => clearTimeout(timer);
    }, [current]);

    const slide = slides[current];

    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center">
            {/* Content Layer */}
            <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12">
                <div className="max-w-4xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={slide.id}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="inline-flex items-center gap-2 mb-6">
                                <span className="w-12 h-[2px] bg-white/50"></span>
                                <span className="text-white/80 uppercase tracking-widest text-sm font-bold">Powering Tomorrow</span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black text-white leading-[1.1] mb-8 font-heading drop-shadow-2xl">
                                {slide.title}
                            </h1>

                            <p className="text-slate-200 text-lg sm:text-xl md:text-3xl leading-relaxed mb-12 max-w-2xl font-light drop-shadow-lg">
                                {slide.subtext}
                            </p>

                            <div className="flex flex-wrap items-center gap-6">
                                {/* Primary Button */}
                                <Link
                                    href={slide.link}
                                    className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-primary transition-all duration-300 shadow-lg group"
                                >
                                    {slide.cta}
                                </Link>

                                {/* Secondary Button */}
                                <Link
                                    href={slide.linkSecondary}
                                    className="inline-flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/20 text-white rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-sm"
                                >
                                    {slide.ctaSecondary}
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Controls */}
            <div className="absolute bottom-12 right-12 z-20 flex gap-4">
                <button
                    onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
                    className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-dark transition-all backdrop-blur-sm"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
                    className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-dark transition-all backdrop-blur-sm"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Progress Indicators */}
            <div className="absolute bottom-12 left-12 z-20 flex gap-4">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-1 transition-all duration-500 rounded-full ${current === idx ? "w-16 bg-white" : "w-8 bg-white/30"}`}
                    />
                ))}
            </div>
        </div>
    );
}
