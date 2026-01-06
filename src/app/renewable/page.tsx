"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Server, Zap, Shield, BarChart3, Settings, Battery, CheckCircle2, Factory, Cable } from "lucide-react";
// Navbar and Footer are globally in layout

export default function RenewablePage() {

    useEffect(() => {
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
                    delay: (el: any, i: number) => i * 100,
                });
            }
        };
        initAnime();
    }, []);

    return (
        <div className="flex flex-col w-full">
            {/* 1. HERO SECTION (Dark) */}
            <section className="section-hero relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32">
                <div className="z-10 max-w-5xl">
                    <div className="flex items-center justify-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-6 reveal">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span>Renewable Solutions</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading reveal">
                        Renewable <span className="text-primary">Solutions</span>
                    </h1>

                    <p className="text-gray-300 text-xl md:text-2xl font-light reveal delay-100 max-w-3xl mx-auto leading-relaxed">
                        The complete power value chain: From Digital Intelligence to Heavy Infrastructure.
                    </p>
                </div>
            </section>

            {/* 2. SOLUTION 1: UNIFIED RENEWABLE SOLUTIONS (Dark) */}
            <section className="section-dark py-24 bg-transparent text-white relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 reveal">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400 font-heading mb-4">1. Unified Renewable Solutions</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">An integrated digital ecosystem ensuring grid compliance and asset longevity.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "SolarWiz / SCADA", desc: "Real-time data acquisition and plant control.", icon: <Server /> },
                            { title: "PPC", desc: "Active/Reactive power control and frequency regulation.", icon: <Settings /> },
                            { title: "Advanced Analytics", desc: "Machine learning for generation forecasting and PR analysis.", icon: <BarChart3 /> },
                            { title: "CMS", desc: "Central Monitoring System for multi-plant management.", icon: <Shield /> }
                        ].map((item, i) => (
                            <div key={i} className="dark-card p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group reveal cursor-pointer">
                                <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. SOLUTION 2: ELECTRICAL PANELS (Light) */}
            <section className="section-light py-24 bg-white rounded-t-[40px] relative z-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2 reveal">
                            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">2. Electrical Panels</h2>
                            <p className="text-xl text-primary font-bold mb-6">Manufactured in our 125,000 Sq. Ft. Facility.</p>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                We design and manufacture high-performance control panels ensuring safety and reliability for critical infrastructure.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <PanelItem title="HT Panels" desc="Up to 33kV Indoor/Outdoor VCB" />
                                <PanelItem title="LT Panels" desc="PCC, MCC, APFC, and Bus Ducts" />
                                <PanelItem title="Specialty Panels" desc="C&R Panels for substations" />
                                <PanelItem title="Compact Substations" desc="CSS solutions for rapid deployment" />
                            </div>
                        </div>

                        <div className="lg:w-1/2 reveal delay-200">
                            <div className="h-[500px] bg-slate-900 rounded-3xl relative overflow-hidden shadow-2xl group">
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-black opacity-90"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Factory className="w-32 h-32 text-primary/20 group-hover:text-primary/40 transition-colors duration-500" />
                                </div>
                                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent">
                                    <div className="text-primary font-bold tracking-widest uppercase text-sm mb-2">State-of-the-Art</div>
                                    <div className="text-white text-2xl font-bold">Manufacturing Unit</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SOLUTION 3: TURNKEY E&I (Dark) */}
            <section className="section-dark py-24 bg-slate-900 text-white relative z-10 -mt-10 pt-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 reveal">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">3. Turnkey E&I</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Complete Electrical & Instrumentation services for Utility Scale & Hybrid projects.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Switchyards", desc: "Design and erection up to 220kV.", color: "bg-blue-500" },
                            { title: "Transmission Lines", desc: "ROW, tower erection, and conductor stringing.", color: "bg-teal-500" },
                            { title: "Liasioning", desc: "End-to-end CEIG approvals and DISCOM coordination.", color: "bg-amber-500" },
                            { title: "Testing", desc: "Pre-commissioning testing and grid synchronization.", color: "bg-green-500" }
                        ].map((item, i) => (
                            <div key={i} className="group reveal">
                                <div className="h-1 bg-white/10 w-full mb-6 relative overflow-hidden">
                                    <div className={`absolute top-0 left-0 h-full w-0 ${item.color} group-hover:w-full transition-all duration-700 ease-out`}></div>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* 5. SECTORS WE SERVE (Light) */}
            <section className="section-light py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-16 font-heading reveal">Powering the Future</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Utility Scale", desc: "GW-scale Solar & Wind parks." },
                            { title: "Hybrid Projects", desc: "Solar + Wind + BESS integration." },
                            { title: "C&I (Commercial)", desc: "Captive power plants for heavy industry (Steel, Cement)." }
                        ].map((item, i) => (
                            <div key={i} className="premium-card p-10 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow reveal hover:-translate-y-1 duration-300">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-primary">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. CTA (Dark) */}
            <section className="py-20 bg-slate-900 text-center border-t border-slate-800 relative z-10">
                <div className="max-w-2xl mx-auto px-6 reveal">
                    <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready to Execute?</h2>
                    <p className="text-gray-400 mb-8 text-lg">Get a quote for Panels, SCADA, or Turnkey E&I.</p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
                        Contact Sales <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}

// Helper for Panel List Item
function PanelItem({ title, desc }: { title: string; desc: string }) {
    return (
        <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-primary/50 transition-colors">
            <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
            <div>
                <h4 className="font-bold text-slate-900 text-sm">{title}</h4>
                <p className="text-slate-500 text-xs">{desc}</p>
            </div>
        </div>
    )
}
