"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, ShieldCheck, Activity, Network, Zap, Lock, Server } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartLine,
    faBolt,
    faWaveSquare,
    faHeartbeat,
    faBalanceScale,
    faBezierCurve // using as substitute for smooth-curve
} from "@fortawesome/free-solid-svg-icons";

// Navbar and Footer are globally in layout

export default function PPCPage() {

    useEffect(() => {
        const initAnime = async () => {
            // @ts-ignore
            const animeModule = await import("animejs");
            // Handle v4 vs v3 import differences
            const anime = animeModule.default || animeModule;

            if (!anime) return;

            // In v4, anime might be an object containing the function, or the function itself.
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
                    <div className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/20 reveal">
                        200+ Projects Executed | 40GW+ Installed Base
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading reveal">
                        Adaptive Power <span className="text-primary">Plant Control</span>
                    </h1>

                    <p className="text-gray-300 text-xl md:text-2xl font-light reveal delay-100 max-w-3xl mx-auto leading-relaxed">
                        Orchestrating Solar, Wind, and BESS assets for India's 500GW+ Future.
                    </p>
                </div>
            </section>

            {/* 2. THE CHALLENGE: ROAD TO 500GW+ (Light) */}
            <section className="section-light py-24 bg-white rounded-t-[40px] relative z-20 -mt-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="reveal">
                            <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">The Rising Complexity</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
                                As India moves towards 500GW+ renewable capacity, grid instability and intermittency are becoming critical challenges. Regulatory standards are tightening to ensure security.
                            </p>
                        </div>

                        <div className="reveal delay-200">
                            <div className="premium-card p-10 bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl border border-red-100 shadow-xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6 text-red-600">
                                        <Activity className="w-8 h-8" />
                                        <h3 className="text-2xl font-bold text-slate-900">The Core Risks</h3>
                                    </div>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3 text-slate-700 font-medium">
                                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                            Grid Intermittency
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-700 font-medium">
                                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                            Frequency Deviation
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-700 font-medium">
                                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                            Cyber Threats
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CORE CAPABILITIES (Dark) */}
            <section className="section-dark py-32 bg-transparent text-white relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 reveal">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400 font-heading mb-4">Gain Superior Control</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Engineered for stability, speed, and security.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* 1. Sub-Second Response */}
                        <div className="dark-card p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group reveal cursor-pointer">
                            <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <Zap />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">Sub-Second Response</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">&lt;200ms Fast Loop Control Actions to counteract sudden grid changes.</p>
                        </div>

                        {/* 2. Master-Slave Redundancy */}
                        <div className="dark-card p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group reveal cursor-pointer delay-100">
                            <div className="mb-6 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                <Server />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">Master-Slave Redundancy</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Hot-Redundancy configuration ensuring 100% uptime even if primary unit fails.</p>
                        </div>

                        {/* 3. Cyber-Secure */}
                        <div className="dark-card p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group reveal cursor-pointer delay-200">
                            <div className="mb-6 w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                                <Lock />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">Cyber-Secure</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">IEC 62443 Compliant with encrypted communication and RBAC.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CONTROL MODES (Light) */}
            <section className="section-light py-24 bg-white rounded-t-[40px] relative z-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-16 font-heading reveal">Key Functions for Peak Performance</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ControlCard
                            title="Active Power Control"
                            desc="Intelligent curtailment and dispatch."
                            icon={faChartLine}
                            color="text-blue-600"
                        />
                        <ControlCard
                            title="Reactive Power Control"
                            desc="Ultra-fast voltage support & PF management."
                            icon={faBolt}
                            color="text-yellow-500"
                        />
                        <ControlCard
                            title="Voltage Control"
                            desc="Automated regulation for connectivity."
                            icon={faWaveSquare}
                            color="text-purple-600"
                        />
                        <ControlCard
                            title="Frequency Control"
                            desc="Sub-second stability & Droop support."
                            icon={faHeartbeat}
                            color="text-red-500"
                        />
                        <ControlCard
                            title="Power Factor Control"
                            desc="Automated phase-angle correction."
                            icon={faBalanceScale}
                            color="text-green-600"
                        />
                        <ControlCard
                            title="Ramp-Rate Control"
                            desc="Smooth power transitions eliminating fluctuations."
                            icon={faBezierCurve}
                            color="text-primary"
                        />
                    </div>
                </div>
            </section>

            {/* 5. ECOSYSTEM INTEGRATION (Dark) */}
            <section className="section-dark py-24 bg-slate-900 text-white relative z-10 -mt-10 pt-32 text-center">
                <div className="max-w-4xl mx-auto px-6 reveal">
                    <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-8 animate-pulse">
                        <Network className="w-10 h-10 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold mb-6 font-heading">Seamless Integration</h2>
                    <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                        The Universal Translator for your plant. Compatible with multi-make inverters, turbines, and BESS.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {["IEC 61850", "Modbus TCP", "OPC UA", "DNP3", "IEC 104"].map((protocol, i) => (
                            <div key={i} className="px-6 py-3 bg-white/5 rounded-full border border-white/10 text-sm font-bold tracking-wide hover:bg-primary/20 hover:border-primary transition-colors cursor-default">
                                {protocol}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. CTA (Light) */}
            <section className="py-20 bg-white text-center border-t border-gray-100 relative z-20">
                <div className="max-w-2xl mx-auto px-6 reveal">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">Maximize Your Plant's Yield</h2>
                    <p className="text-slate-500 mb-8 text-lg">Leverage our 16+ years of expertise to configure your PPC faster and more accurately.</p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-primary transition-colors">
                        Schedule Demo <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}

// Helper Card using FontAwesome
function ControlCard({ title, desc, icon, color }: { title: string; desc: string; icon: any; color: string }) {
    return (
        <div className="premium-card p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 reveal group hover:-translate-y-1">
            <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform ${color}`}>
                <FontAwesomeIcon icon={icon} className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
        </div>
    )
}
