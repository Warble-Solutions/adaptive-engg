"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight, Server, Zap, Shield, BarChart3, Settings, Battery, CheckCircle2, Factory, Cable, Monitor, Cpu, Network, PieChart, Wrench, Sun } from "lucide-react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNetworkWired, faBezierCurve, faFileSignature, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import MicroCTA from "@/components/ui/MicroCTA";
import DowntimeCalculator from "@/components/DowntimeCalculator";
import SectionWrapper from "@/components/SectionWrapper";

export default function RenewablePage() {

    return (
        <div className="flex flex-col w-full">
            {/* 1. HERO SECTION (Dark) */}
            <section className="section-hero relative min-h-[50vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-12 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/imgs/renewable.jpg"
                        alt="Renewable Energy"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/90 backdrop-blur-sm"></div>
                </div>

                <div className="z-10 max-w-5xl relative">
                    <SectionWrapper>
                        <div className="flex items-center justify-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-6">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span>Renewable Solutions</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading">
                            Renewable <span className="text-primary">Solutions</span>
                        </h1>

                        <p className="text-gray-300 text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
                            The complete power value chain: From advanced Digital Intelligence and SCADA Automation to robust Heavy Electrical Infrastructure and Grid Integration
                        </p>
                    </SectionWrapper>
                </div>
            </section>

            {/* --- SOLUTION NAVIGATOR --- */}
            <section className="relative z-20 py-24 bg-slate-50 shadow-2xl text-slate-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
                        {/* Card 1: Software */}
                        <SectionWrapper delay={0.1}>
                            <a href="#unified" className="block h-full group p-8 bg-white border border-slate-200 rounded-3xl hover:border-blue-500 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">
                                <div className="flex flex-col items-center text-center gap-6 mb-4">
                                    <div className="p-5 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        <Monitor className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 transition-colors">Unified Solutions</h3>
                                </div>
                                <p className="text-slate-500 text-base text-center leading-relaxed transition-colors">SCADA, PPC, and Telemetry for Grid Compliance.</p>
                            </a>
                        </SectionWrapper>

                        {/* Card 2: Hardware */}
                        <SectionWrapper delay={0.2}>
                            <a href="#panels" className="block h-full group p-8 bg-white border border-slate-200 rounded-3xl hover:border-emerald-500 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">
                                <div className="flex flex-col items-center text-center gap-6 mb-4">
                                    <div className="p-5 bg-emerald-50 rounded-2xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                                        <Zap className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 transition-colors">Electrical Panels</h3>
                                </div>
                                <p className="text-slate-500 text-base text-center leading-relaxed transition-colors">In-house Manufacturing of HT/LT Panels.</p>
                            </a>
                        </SectionWrapper>

                        {/* Card 3: Projects */}
                        <SectionWrapper delay={0.3}>
                            <a href="#turnkey" className="block h-full group p-8 bg-white border border-slate-200 rounded-3xl hover:border-amber-500 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">
                                <div className="flex flex-col items-center text-center gap-6 mb-4">
                                    <div className="p-5 bg-amber-50 rounded-2xl text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                                        <Factory className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 transition-colors">Turnkey E&I</h3>
                                </div>
                                <p className="text-slate-500 text-base text-center leading-relaxed transition-colors">End-to-End Execution for Solar & Wind.</p>
                            </a>
                        </SectionWrapper>
                    </div>
                </div>
            </section>

            {/* 2. SOLUTION 1: UNIFIED RENEWABLE SOLUTIONS (Dark) */}
            <section id="unified" className="section-dark pt-32 pb-24 bg-slate-900 text-white relative z-10 scroll-mt-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <SectionWrapper>
                            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400 font-heading mb-4">1. Unified Renewable Solutions</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">An integrated digital ecosystem ensuring grid compliance and asset longevity.</p>
                        </SectionWrapper>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "SCADA",
                                icon: <Monitor />,
                                bullets: [
                                    "Flexible & Scalable Architecture",
                                    "Rich set of Renewable Libraries",
                                    "Seamless Handling of 10 Lacs+ Tags",
                                    "Refined interface from decades of experience"
                                ]
                            },
                            {
                                title: "Power Plant Controller (PPC)",
                                icon: <Cpu />,
                                bullets: [
                                    "Grid Code Compliant",
                                    "HIL Type Tested",
                                    "Automatic Generation Control (AGC) Ready",
                                    "Forecast & Schedule Synchronization"
                                ]
                            },
                            {
                                title: "Central Monitoring System (CMS)",
                                icon: <Shield />, // Shield works, or Network
                                bullets: [
                                    "Insightful View of Entire Portfolio",
                                    "Measure KPIs against Targeted Data",
                                    "ML Based Anomaly Detection",
                                    "Conversational AI Assistant"
                                ]
                            },
                            {
                                title: "Advanced Analytics",
                                icon: <PieChart />,
                                bullets: [
                                    "Advanced Data Visualization",
                                    "Accurate Loss Buckets",
                                    "Custom Report Builder",
                                    "Analyse Historical Data"
                                ]
                            },
                            {
                                title: "CMMS",
                                icon: <Wrench />,
                                bullets: [
                                    "Automated Workorder Management",
                                    "Standardized SOPs Across Enterprise",
                                    "Reduced Mean Time to Repair",
                                    "Cost Control & Inventory Management"
                                ]
                            },
                            {
                                title: "EMS - BESS",
                                icon: <Battery />,
                                bullets: [
                                    "Indigenous Solution",
                                    "ML Based Energy Arbitrage",
                                    "State of Charge (SoC) Management",
                                    "Peak Shaving, Grid Support"
                                ]
                            }
                        ].map((item, i) => (
                            <SectionWrapper key={i} delay={i * 0.1}>
                                <div className="dark-card p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full">
                                    <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        {/* Clone icon to enforce size if needed, though usually css handles it. Using wrapper. */}
                                        <div className="w-6 h-6">{item.icon}</div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                                    <ul className="space-y-3 text-gray-400 text-sm">
                                        {item.bullets.map((bullet, idx) => (
                                            <li key={idx} className="flex gap-2">
                                                <span className="text-primary mt-0.5">▸</span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/contact" className="mt-6 flex items-center text-primary font-bold text-sm group-hover:gap-2 transition-all">
                                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </SectionWrapper>
                        ))}
                    </div>
                    <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
                        <MicroCTA text="Download Brochure" variant="download" href="#" />
                        <MicroCTA text="Get SCADA Demo" variant="connect" href="/contact" context="dark" />
                    </div>
                </div>
            </section >

            {/* --- INTERACTIVE CALCULATOR SECTION --- */}


            {/* 3. SOLUTION 2: ELECTRICAL PANELS (Light) */}
            <section id="panels" className="section-light py-24 bg-white rounded-t-[40px] relative z-20 scroll-mt-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <SectionWrapper>
                                <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">2. Electrical Panels</h2>
                                <p className="text-xl text-primary font-bold mb-6">Manufactured in our 125,000 Sq. Ft. Manufacturing Facility.</p>
                                <p className="text-slate-600 leading-relaxed mb-8">
                                    We design and manufacture high-performance control panels ensuring safety and reliability for critical infrastructure.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <PanelItem title="HT Panels" desc="Up to 33kV Indoor/Outdoor VCB" />
                                    <PanelItem title="LT Panels" desc="PCC, MCC, APFC, and Bus Ducts" />
                                    <PanelItem title="Specialty Panels" desc="C&R Panels for substations" />
                                    <PanelItem title="Compact Substations" desc="CSS solutions for rapid deployment" />
                                </div>
                                <div className="mt-8 flex items-center gap-4 justify-start">
                                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-200 rounded-full font-bold text-slate-700 hover:border-primary hover:text-primary hover:-translate-y-1 transition-all duration-300">
                                        <span>Learn More</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <MicroCTA text="Contact Sales" variant="connect" href="/contact" context="light" />
                                </div>
                            </SectionWrapper>
                        </div>

                        <div className="lg:w-1/2">
                            <SectionWrapper delay={0.2}>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 h-[500px] rounded-3xl overflow-hidden shadow-2xl relative">
                                    <div className="col-span-2 row-span-2 relative group overflow-hidden">
                                        <Image src="/imgs/manu/15.jpg" alt="Manufacturing" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                    </div>
                                    <div className="col-span-1 row-span-1 relative group overflow-hidden">
                                        <Image src="/imgs/manu/16.jpg" alt="Assembly" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    <div className="col-span-1 row-span-1 relative group overflow-hidden">
                                        <Image src="/imgs/manu/17.jpg" alt="Testing" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    <div className="col-span-1 row-span-1 relative group overflow-hidden">
                                        <Image src="/imgs/manu/18.jpg" alt="Quality Control" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    <div className="col-span-1 row-span-1 relative group overflow-hidden">
                                        <Image src="/imgs/manu/19.jpg" alt="Fabrication" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    </div>

                                    <div className="absolute bottom-4 left-4 z-20 bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                                        <div className="text-primary font-bold tracking-widest uppercase text-xs mb-1">State-of-the-Art</div>
                                        <div className="text-white text-lg font-bold">Manufacturing Unit</div>
                                    </div>
                                </div>
                            </SectionWrapper>
                        </div>
                    </div>

                </div>
            </section>

            {/* 4. SOLUTION 3: TURNKEY E&I (Dark) */}
            <section id="turnkey" className="section-dark py-24 bg-slate-900 text-white relative z-10 -mt-10 pt-32 scroll-mt-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 reveal">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">3. Turnkey E&I</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Complete Electrical & Instrumentation services for Utility Scale & Hybrid projects.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Switchyards", desc: "Design & erection up to 220kV.", img: "/imgs/turnkey/7.jpg" },
                            { title: "Transmission", desc: "ROW, towers & stringing.", img: "/imgs/turnkey/8.jpg" },
                            { title: "Liasioning", desc: "CEIG & DISCOM approvals.", img: "/imgs/turnkey/9.jpg" },
                            { title: "Testing", desc: "Pre-commissioning & Sync.", img: "/imgs/turnkey/10.jpg" }
                        ].map((item, i) => (
                            <SectionWrapper key={i} delay={i * 0.1}>
                                <div className="group relative h-[400px] rounded-3xl overflow-hidden">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
                                    <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-2xl font-bold mb-3 text-white border-l-4 border-primary pl-4">{item.title}</h3>
                                        <p className="text-gray-300 text-sm leading-relaxed pl-5 border-l-4 border-transparent opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">{item.desc}</p>
                                    </div>
                                </div>
                            </SectionWrapper>
                        ))}
                    </div>
                    <div className="mt-12 flex justify-center">
                        <MicroCTA text="Learn More" variant="connect" href="/contact" context="dark" />
                    </div>
                </div>
            </section>


            {/* 5. SECTORS WE SERVE (Light) */}
            <section className="section-light py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionWrapper>
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-16 font-heading">Powering the Future</h2>
                    </SectionWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Utility Scale", desc: "GW-scale Solar & Wind parks", icon: <Sun className="w-8 h-8" /> },
                            { title: "Hybrid Projects", desc: "Solar + Wind + BESS integration", icon: <Battery className="w-8 h-8" /> },
                            { title: "C&I (Commercial)", desc: "Captive power plants for heavy industry (Steel, Cement)", icon: <Factory className="w-8 h-8" /> }
                        ].map((item, i) => (
                            <SectionWrapper key={i} delay={i * 0.1} className="h-full">
                                <div className="group relative p-10 bg-slate-50 border border-slate-200 rounded-[2rem] hover:bg-slate-900 hover:border-slate-800 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 overflow-hidden h-full flex flex-col">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/0 to-primary/10 rounded-bl-[100px] transition-all duration-500 group-hover:scale-150 group-hover:to-primary/20"></div>

                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 relative z-10 shrink-0">
                                        {item.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-white transition-colors duration-300 relative z-10">{item.title}</h3>
                                    <p className="text-slate-500 text-lg leading-relaxed group-hover:text-gray-400 transition-colors duration-300 relative z-10 flex-grow">{item.desc}</p>
                                </div>
                            </SectionWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- INTERACTIVE CALCULATOR SECTION --- */}
            <section className="py-24 px-6 bg-slate-950">
                <div className="max-w-7xl mx-auto">
                    <DowntimeCalculator />
                </div>
            </section>

            {/* 6. CTA (Dark) */}
            <section className="py-20 bg-slate-900 text-center border-t border-slate-800 relative z-10">
                <div className="max-w-2xl mx-auto px-6">
                    <SectionWrapper>
                        <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready to Execute?</h2>
                        <p className="text-gray-400 mb-8 text-lg">Get a quote for Panels, SCADA, or Turnkey E&I.</p>
                        <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
                            Contact Sales <ArrowRight className="w-4 h-4" />
                        </Link>
                    </SectionWrapper>
                </div>
            </section>
        </div >
    );
}

// Helper for Panel List Item
function PanelItem({ title, desc }: { title: string; desc: string }) {
    return (
        <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-primary/50 hover:bg-white hover:shadow-md hover:translate-x-1 transition-all duration-300">
            <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
            <div>
                <h4 className="font-bold text-slate-900 text-sm">{title}</h4>
                <p className="text-slate-500 text-xs">{desc}</p>
            </div>
        </div>
    )
}
