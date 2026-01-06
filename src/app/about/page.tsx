"use client";

import { useEffect, useRef } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

// NOTE: Navbar and Footer are provided globally by layout.tsx
// Importing them here would cause duplication.

export default function AboutPage() {
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Dynamic import for animejs to avoid SSR/Build errors
        const initAnime = async () => {
            // @ts-ignore
            const animeModule = await import("animejs");
            // Handle v4 vs v3 import differences
            const anime = animeModule.default || animeModule;

            if (!anime) return;

            // In v4, anime might be an object containing the function, or the function itself.
            // If it's v4, the main function might be named export 'anime' or default.
            // Let's try to find the callable function.
            const runAnime = typeof anime === 'function' ? anime : animeModule.anime;

            if (typeof runAnime === 'function') {
                runAnime({
                    targets: ".reveal",
                    translateY: [20, 0],
                    opacity: [0, 1],
                    easing: "easeOutExpo",
                    duration: 1000,
                    delay: (el: any, i: number) => i * 200,
                });
            }
        };

        initAnime();
    }, []);

    return (
        <div className="flex flex-col w-full">
            {/* 1. HERO SECTION (Dark) */}
            <section className="section-hero relative min-h-[80vh] flex items-center justify-center text-center px-6">
                {/* Transparent background to show global 3D Globe/Particles */}
                <div className="z-10 max-w-4xl">
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-6 font-heading reveal">
                        Engineering <span className="text-primary">Legacy</span>
                    </h1>
                    <p className="text-gray-300 text-xl md:text-2xl font-light reveal delay-100">
                        Three Decades of Excellence in Renewable Energy & Automation.
                    </p>
                </div>
            </section>

            {/* 2. THE BLUEPRINT (Light) */}
            <section className="section-light py-24 bg-white rounded-t-[40px] relative z-20 -mt-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2 reveal">
                            <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Our Mission</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                To be the preferred project partner for India's largest corporate houses by integrating manufacturing, execution, and digital intelligence.
                            </p>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-3 gap-8 text-center reveal">
                            <div>
                                <div className="text-4xl font-extrabold text-primary mb-1">16+</div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Years</div>
                            </div>
                            <div>
                                <div className="text-4xl font-extrabold text-primary mb-1">300+</div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Manpower</div>
                            </div>
                            <div>
                                <div className="text-4xl font-extrabold text-primary mb-1">500+</div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Customers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. HISTORY TIMELINE (Dark) */}
            <section className="section-dark py-32 bg-transparent text-white relative z-10" ref={timelineRef}>
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-20 font-heading reveal">Our Journey</h2>

                    <div className="relative border-l-2 border-white/10 ml-6 md:ml-12 space-y-20">
                        {/* 2005 */}
                        <div className="relative pl-12 reveal">
                            <div className="absolute -left-[9px] top-2 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(4,154,137,0.5)]"></div>
                            <span className="text-5xl font-black text-white/5 absolute -top-10 left-10">2005</span>
                            <h3 className="text-2xl font-bold text-white mb-2">Inception</h3>
                            <p className="text-gray-400">Foundation of Adaptive Engineering Pvt. Ltd.</p>
                        </div>

                        {/* 2010 */}
                        <div className="relative pl-12 reveal">
                            <div className="absolute -left-[9px] top-2 w-4 h-4 bg-white rounded-full"></div>
                            <span className="text-5xl font-black text-white/5 absolute -top-10 left-10">2010</span>
                            <h3 className="text-2xl font-bold text-white mb-2">Manufacturing Excellence</h3>
                            <p className="text-gray-400">Established first Manufacturing Unit for HT/LT Panels.</p>
                        </div>

                        {/* 2018 */}
                        <div className="relative pl-12 reveal">
                            <div className="absolute -left-[9px] top-2 w-4 h-4 bg-white rounded-full"></div>
                            <span className="text-5xl font-black text-white/5 absolute -top-10 left-10">2018</span>
                            <h3 className="text-2xl font-bold text-white mb-2">Digital Transformation</h3>
                            <p className="text-gray-400">Launch of ReportWiz proprietary SCADA platform.</p>
                        </div>

                        {/* 2025 */}
                        <div className="relative pl-12 reveal">
                            <div className="absolute -left-[9px] top-2 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(4,154,137,0.5)] animate-pulse"></div>
                            <span className="text-5xl font-black text-white/5 absolute -top-10 left-10">2025</span>
                            <h3 className="text-2xl font-bold text-white mb-2">Scale & Expansion</h3>
                            <p className="text-gray-400">Expansion to 125,000 Sq. Ft. Integrated Facility.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. LEADERSHIP TEAM (Light) */}
            <section className="section-light py-32 bg-white rounded-t-[40px] relative z-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-slate-900 text-center mb-16 font-heading reveal">Leadership</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Founder */}
                        <div className="premium-card p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow reveal group">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm mx-auto group-hover:scale-110 transition-transform">
                                {/* Using a generic user icon as requested */}
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 text-center mb-2">Founder</h3>
                            <p className="text-gray-500 text-sm text-center leading-relaxed">Visionary Leader with 30+ years in Power Sector.</p>
                        </div>

                        {/* Director Ops */}
                        <div className="premium-card p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow reveal group delay-100">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm mx-auto group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 text-center mb-2">Director Ops</h3>
                            <p className="text-gray-500 text-sm text-center leading-relaxed">Expert in Supply Chain & Lean Manufacturing.</p>
                        </div>

                        {/* Tech Lead */}
                        <div className="premium-card p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow reveal group delay-200">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm mx-auto group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 text-center mb-2">Tech Lead</h3>
                            <p className="text-gray-500 text-sm text-center leading-relaxed">Architect of the Unified Renewable Stack.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 5. ACCREDITATIONS (Alt Light) */}
            <section className="py-20 bg-gray-50 border-t border-gray-200 relative z-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 font-heading reveal">Certified Excellence</h2>
                    <div className="flex flex-wrap justify-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 reveal">
                        <div className="flex items-center gap-3 font-bold text-slate-700 text-xl">
                            <CheckCircle2 className="w-8 h-8 text-primary" />
                            ISO 9001:2015
                        </div>
                        <div className="flex items-center gap-3 font-bold text-slate-700 text-xl">
                            <CheckCircle2 className="w-8 h-8 text-blue-600" />
                            TUV Nord Certified
                        </div>
                        <div className="flex items-center gap-3 font-bold text-slate-700 text-xl">
                            <CheckCircle2 className="w-8 h-8 text-orange-500" />
                            Startup India
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. CTA (Dark) */}
            <section className="section-dark text-center py-32 bg-transparent text-white relative z-10">
                <div className="max-w-2xl mx-auto px-6 reveal">
                    <h2 className="text-4xl font-bold mb-8 font-heading">Want to join our team?</h2>
                    <Link href="/contact" className="inline-block px-10 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-primary hover:text-white transition-colors">
                        View Careers
                    </Link>
                </div>
            </section>
        </div>
    );
}
