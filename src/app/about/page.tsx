"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { CheckCircle2, Rocket, Factory, TrendingUp, Trophy, MapPin, Cpu, Activity } from "lucide-react";
import MicroCTA from "@/components/ui/MicroCTA";
import Counter from "@/components/ui/Counter";
import JourneyTimeline from "@/components/JourneyTimeline";

// NOTE: Navbar and Footer are provided globally by layout.tsx

export default function AboutPage() {
    const [leaderIndex, setLeaderIndex] = useState(0);

    return (
        <div className="flex flex-col w-full">
            {/* 1. HERO SECTION (Dark) */}
            <section className="section-hero relative min-h-[80vh] flex items-center justify-center text-center px-6">
                {/* Transparent background to show global 3D Globe/Particles */}
                <div className="z-10 max-w-4xl">
                    <SectionWrapper>
                        <h1 className="text-4xl md:text-8xl font-black text-white mb-6 font-heading">
                            Engineering <span className="text-primary">Legacy</span>
                        </h1>
                        <p className="text-gray-300 text-xl md:text-2xl font-light">
                            Three Decades of Excellence in Renewable Energy & Automation
                        </p>
                    </SectionWrapper>
                </div>
            </section>

            {/* 2. THE BLUEPRINT (Light) */}
            <section className="section-light py-24 bg-white rounded-t-[40px] relative z-20 -mt-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2">
                            <SectionWrapper>
                                <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Our Mission</h2>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    Continuously evolve to maximize value of each installation towards providing the Best Customer Experience
                                </p>
                            </SectionWrapper>
                        </div>
                        <div className="md:w-1/2">
                            <SectionWrapper delay={0.2}>
                                <div className="grid grid-cols-3 gap-8 text-center">
                                    <div>
                                        <Counter
                                            value={16}
                                            suffix="+"
                                            className="text-4xl font-extrabold text-primary mb-1 block"
                                        />
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Years</div>
                                    </div>
                                    <div>
                                        <Counter
                                            value={300}
                                            suffix="+"
                                            className="text-4xl font-extrabold text-primary mb-1 block"
                                        />
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Manpower</div>
                                    </div>
                                    <div>
                                        <Counter
                                            value={1000}
                                            suffix="+"
                                            className="text-4xl font-extrabold text-primary mb-1 block"
                                        />
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Projects</div>
                                    </div>
                                </div>
                            </SectionWrapper>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. HISTORY TIMELINE (Dark) */}
            <section className="section-dark py-32 bg-transparent text-white relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionWrapper>
                        <h2 className="text-4xl font-bold text-center mb-20 font-heading">Our Journey</h2>
                    </SectionWrapper>

                    <div className="relative w-full mt-12">
                        <JourneyTimeline />
                    </div>
                </div>
            </section>

            {/* 4. LEADERSHIP TEAM (Light) */}
            <section className="section-light py-32 bg-white rounded-t-[40px] relative z-20">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionWrapper>
                        <h2 className="text-4xl font-bold text-slate-900 text-center mb-16 font-heading">Leadership</h2>
                    </SectionWrapper>
                    <div className="relative">
                        <SectionWrapper delay={0.2}>
                            <div className="overflow-hidden p-4">
                                <AnimatePresence mode="popLayout">
                                    <motion.div
                                        className="flex gap-8"
                                        initial={false}
                                    >
                                        {[0, 1, 2, 3].map((offset) => {
                                            const leader = [
                                                {
                                                    name: "Chirag Soni",
                                                    role: "Managing Director",
                                                    img: "https://test.adaptive-engg.com/wp-content/uploads/2023/09/chirag-1.png.webp"
                                                },
                                                {
                                                    name: "Jay Patel",
                                                    role: "Director",
                                                    img: "https://adaptive-engg.com/wp-content/uploads/2023/09/Jay-1.png.webp"
                                                },
                                                {
                                                    name: "Keyur Amin",
                                                    role: "C.E.O",
                                                    img: "https://adaptive-engg.com/wp-content/uploads/2023/09/Keyur-1.png.webp"
                                                },
                                                {
                                                    name: "Ajit Patel",
                                                    role: "Technical Advisor",
                                                    img: "https://adaptive-engg.com/wp-content/uploads/2023/06/ajit.png.webp"
                                                },
                                                {
                                                    name: "Chintan Patel",
                                                    role: "Head Sales",
                                                    img: "https://adaptive-engg.com/wp-content/uploads/2023/09/Chintan-1.png.webp"
                                                }
                                            ][(leaderIndex + offset) % 5];

                                            return (
                                                <motion.div
                                                    key={leader.name}
                                                    layout="position"
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.9 }}
                                                    transition={{ duration: 0.4 }}
                                                    className="min-w-full md:min-w-[calc(50%-16px)] lg:min-w-[calc(25%-24px)] premium-card p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 group"
                                                >
                                                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6 shadow-md mx-auto overflow-hidden group-hover:scale-105 transition-transform border-4 border-white">
                                                        <img
                                                            src={leader.img}
                                                            alt={leader.name}
                                                            className="w-full h-full object-cover object-top"
                                                        />
                                                    </div>
                                                    <h3 className="text-xl font-bold text-slate-900 text-center mb-1">{leader.name}</h3>
                                                    <p className="text-primary font-bold text-xs uppercase tracking-widest text-center">{leader.role}</p>
                                                </motion.div>
                                            );
                                        })}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </SectionWrapper>

                        {/* Controls */}
                        <button
                            onClick={() => setLeaderIndex((prev) => (prev - 1 + 5) % 5)}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-slate-600 hover:text-primary hover:scale-110 transition-all z-10"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => setLeaderIndex((prev) => (prev + 1) % 5)}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-slate-600 hover:text-primary hover:scale-110 transition-all z-10"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </section>

            {/* 5. ACCREDITATIONS (Alt Light) */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative z-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <SectionWrapper>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Certified Excellence</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-16">
                            Adhering to the highest global standards for quality and safety.
                        </p>

                        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">
                            {/* ISO Certification */}
                            <div className="group relative p-8 bg-white rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex-1 max-w-sm mx-auto w-full">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-3xl"></div>
                                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <CheckCircle2 className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">ISO 9001:2015</h3>
                                <p className="text-slate-500 font-medium">Quality Management System</p>
                                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-sm text-slate-400 group-hover:text-primary transition-colors">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    Verified & Active
                                </div>
                            </div>

                            {/* TUV Nord Certification */}
                            <div className="group relative p-8 bg-white rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex-1 max-w-sm mx-auto w-full">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-3xl"></div>
                                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    <Trophy className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">TUV Nord Certified</h3>
                                <p className="text-slate-500 font-medium">Internationally Recognized Safety</p>
                                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-sm text-slate-400 group-hover:text-blue-600 transition-colors">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    Verified & Active
                                </div>
                            </div>
                        </div>
                    </SectionWrapper>
                </div>
            </section>

            {/* 6. CTA (Dark) */}
            <section className="section-dark text-center py-32 bg-transparent text-white relative z-10">
                <div className="max-w-2xl mx-auto px-6">
                    <SectionWrapper>
                        <h2 className="text-4xl font-bold mb-8 font-heading">Want to join our team?</h2>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-primary hover:text-white transition-colors">
                            View Careers
                        </Link>
                    </SectionWrapper>
                </div>
            </section>
        </div>
    );
}
