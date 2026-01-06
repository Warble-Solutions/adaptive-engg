"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Zap, Cloud, Database, FileText, Settings, ShieldCheck, Sun } from "lucide-react";
// Navbar and Footer are globally in layout

export default function PmKusumPage() {

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
                    <div className="inline-block px-4 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-green-500/30 reveal">
                        MNRE Compliant
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading reveal">
                        PM-KUSUM <span className="text-primary">Solutions</span>
                    </h1>

                    <p className="text-gray-300 text-xl md:text-2xl font-light reveal delay-100 max-w-3xl mx-auto leading-relaxed">
                        End-to-end Remote Monitoring (RMS) & Automation for Components A, B & C.
                    </p>
                </div>
            </section>

            {/* 2. SCHEME OVERVIEW (Light) */}
            <section className="section-light py-24 bg-white rounded-t-[40px] relative z-20 -mt-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="reveal">
                            <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">The Digital Farmer</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
                                PM-KUSUM aims to de-diesel the farm sector. Our solutions ensure 100% visibility of solar pump performance, enabling farmers to earn from surplus power.
                            </p>
                            <div className="flex items-center gap-4 text-primary font-bold">
                                <Sun className="w-6 h-6" />
                                <span>Sustainable Agriculture</span>
                            </div>
                        </div>

                        <div className="reveal delay-200">
                            <div className="premium-card p-10 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl border border-green-100 shadow-xl relative overflow-hidden">
                                <div className="grid grid-cols-2 gap-8 relative z-10">
                                    <div>
                                        <div className="text-4xl font-black text-slate-900 mb-1">34k<span className="text-lg text-slate-500">Cr</span></div>
                                        <div className="text-xs font-bold text-green-600 uppercase tracking-wider">Allocation</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-black text-slate-900 mb-1">30.8<span className="text-lg text-slate-500">GW</span></div>
                                        <div className="text-xs font-bold text-green-600 uppercase tracking-wider">Target</div>
                                    </div>
                                    <div className="col-span-2 pt-4 border-t border-green-200">
                                        <div className="text-xl font-bold text-slate-900">Farmers Empowered</div>
                                        <p className="text-slate-500 text-sm">Through Solar Irrigation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. DIGITAL SOLUTION: RMS & IOT (Dark) */}
            <section className="section-dark py-32 bg-transparent text-white relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 reveal">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-400 font-heading mb-4">Intelligent RMS Stack</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Seamless connectivity from Farm to State Cloud.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* SolarWiz */}
                        <div className="dark-card p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group reveal cursor-pointer">
                            <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <Zap />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">SolarWiz (IoT Gateway)</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Edge computing device. Stores data during internet outages. Modbus/DLMS compatible.</p>
                        </div>

                        {/* CMS */}
                        <div className="dark-card p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group reveal cursor-pointer delay-100">
                            <div className="mb-6 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                <Cloud />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">Central Monitoring System</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">District-level dashboard for DISCOMs and State Nodal Agencies.</p>
                        </div>

                        {/* ReportWiz */}
                        <div className="dark-card p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group reveal cursor-pointer delay-200">
                            <div className="mb-6 w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                                <FileText />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">ReportWiz</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Automated generation of JMR (Joint Meter Reading) and subsidy compliance reports.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. PHYSICAL INFRASTRUCTURE (Light) */}
            <section className="section-light py-24 bg-white rounded-t-[40px] relative z-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 reveal">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2 font-heading">Field-Ready Hardware</h2>
                        <p className="text-slate-500">Ruggedized for rural environments.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <HardwareCard
                            title="USPC"
                            desc="Universal Pump Controller. Auto-switch between Grid and Solar power."
                            icon={<Settings className="w-8 h-8 text-slate-700" />}
                        />
                        <HardwareCard
                            title="ACDB / DCDB Panels"
                            desc="IP65 rated protection boxes for harsh weather."
                            icon={<ShieldCheck className="w-8 h-8 text-slate-700" />}
                        />
                        <HardwareCard
                            title="Net Metering Interface"
                            desc="Seamless integration with bidirectional meters."
                            icon={<Database className="w-8 h-8 text-slate-700" />}
                        />
                    </div>
                </div>
            </section>

            {/* 5. COMPLIANCE & INTEGRATION (Dark) */}
            <section className="section-dark py-24 bg-slate-900 text-white relative z-10 -mt-10 pt-32 text-center">
                <div className="max-w-4xl mx-auto px-6 reveal">
                    <h2 className="text-3xl font-bold mb-6 font-heading">Seamless Compliance</h2>
                    <p className="text-gray-400 text-lg mb-10">Our RMS stack is pre-integrated with major state portals.</p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {["MNRE Portal", "KUSUM State Portals", "DISCOM ERP"].map((tag, i) => (
                            <div key={i} className="px-6 py-3 bg-white/10 rounded-full border border-white/10 text-sm font-bold tracking-wide hover:bg-primary hover:border-primary transition-colors cursor-default">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. CTA (Light) */}
            <section className="py-20 bg-white text-center border-t border-gray-100 relative z-20">
                <div className="max-w-2xl mx-auto px-6 reveal">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">Partner for PM-KUSUM?</h2>
                    <p className="text-slate-500 mb-8 text-lg">We support EPCs and Developers with end-to-end RMS & Hardware.</p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-primary transition-colors">
                        Get RMS Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}

// Helper Card
function HardwareCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
    return (
        <div className="premium-card p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 reveal group hover:-translate-y-1">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
        </div>
    )
}
