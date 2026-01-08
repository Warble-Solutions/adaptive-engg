"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import MicroCTA from "@/components/ui/MicroCTA";

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
                                        <div className="text-4xl font-extrabold text-primary mb-1">16+</div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Years</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-extrabold text-primary mb-1">300+</div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Manpower</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-extrabold text-primary mb-1">1,000+</div>
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
                <div className="max-w-4xl mx-auto px-6">
                    <SectionWrapper>
                        <h2 className="text-4xl font-bold text-center mb-20 font-heading">Our Journey</h2>
                    </SectionWrapper>

                    <div className="relative border-l-2 border-white/10 ml-6 md:ml-12 space-y-48">
                        {[
                            {
                                year: "2014",
                                points: [
                                    "Team Strength - 15",
                                    "Renewable Installed Capacity - 100MW",
                                    "Authorized System Integrators - Schneider-Electric"
                                ]
                            },
                            {
                                year: "2016",
                                points: [
                                    "First Panel Manufacturing Factory",
                                    "ISO 9001:2015 - TUV NORD",
                                    "Renewable Installed Capacity - 250MW"
                                ]
                            },
                            {
                                year: "2018",
                                points: [
                                    "Renewable Installed Capacity - 4.8GW+",
                                    "HT/LT Panels",
                                    "Highest Revenue Growth in SCADA - Schneider-Electric"
                                ]
                            },
                            {
                                year: "2020",
                                points: [
                                    "Renewable Installed Capacity - 14GW+",
                                    "Introduced Renewable PPC",
                                    "Outstanding Achievement in Solar Segment - EQ Magazine",
                                    "Best End User & EPC Solution Provider - Schneider-Electric",
                                    "Best Solar Monitoring Company of the Year - ET Now"
                                ]
                            },
                            {
                                year: "2022",
                                points: [
                                    "Single location 1GW",
                                    "Single Largest Order - 3.6GW",
                                    "Second Factory - 60,000/- sq.ft.",
                                    "Preferred Project Partner of Industry Leaders"
                                ]
                            },
                            {
                                year: "2024",
                                points: [
                                    "Renewable Installed Capacity - 40GW+",
                                    "New Office - 100+ workstations",
                                    "Participation in International Expos",
                                    "Monitoring Solutions - PM KUSUM",
                                    "SCADA Tags in a single project - 10,00,000+",
                                    "Hardware In Loop (HIL) Testing - PPC",
                                    "Introduced EMS - BESS",
                                    "Transition From commissioning (2014) to configuration (2024)",
                                    "Highest Revenue in Digitization - Schneider-Electric"
                                ]
                            },
                            {
                                year: "Current",
                                points: [
                                    "Team Strength - 300+",
                                    "Solar Installed Capacity - 51GW+",
                                    "PPC - 49GW+",
                                    "Years of Experience - 30+",
                                    "Renewable Energy Plants Monitored - 650+",
                                    "Electrical Panels Supplied - 10,000+",
                                    "Projects Completed - 1000+",
                                    "Yearly Capacity - 25GW+"
                                ]
                            }
                        ].map((item, i, arr) => (
                            <SectionWrapper key={i} delay={i * 0.1}>
                                <div className="relative pl-12">
                                    <div className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full ${i === arr.length - 1 ? "bg-primary shadow-[0_0_15px_rgba(4,154,137,0.5)] animate-pulse" : "bg-white"}`}></div>
                                    <span className="text-5xl font-black text-white/5 absolute -top-10 left-10 select-none">{item.year}</span>
                                    <h3 className="text-2xl font-bold text-white mb-4">{item.year}</h3>
                                    <ul className="space-y-2">
                                        {item.points.map((point, idx) => (
                                            <li key={idx} className="text-gray-400 flex items-start gap-2">
                                                <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                                                <span className="leading-relaxed">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </SectionWrapper>
                        ))}
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
            <section className="py-20 bg-gray-50 border-t border-gray-200 relative z-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <SectionWrapper>
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 font-heading">Certified Excellence</h2>
                        <div className="flex flex-wrap justify-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="flex items-center gap-3 font-bold text-slate-700 text-xl">
                                <CheckCircle2 className="w-8 h-8 text-primary" />
                                ISO 9001:2015
                            </div>
                            <div className="flex items-center gap-3 font-bold text-slate-700 text-xl">
                                <CheckCircle2 className="w-8 h-8 text-blue-600" />
                                TUV Nord Certified
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
