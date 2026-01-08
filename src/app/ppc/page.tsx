"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Activity, Network, Zap, Lock, Server, CheckCircle2, Database, Cpu, Globe } from "lucide-react";
import MicroCTA from "@/components/ui/MicroCTA";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartLine,
    faBolt,
    faWaveSquare,
    faHeartbeat,
    faBalanceScale,
    faBezierCurve, // using as substitute for smooth-curve
    faNetworkWired,
    faFileContract,
    faShieldAlt,
    faCogs
} from "@fortawesome/free-solid-svg-icons";

// Navbar and Footer are globally in layout

import SectionWrapper from "@/components/SectionWrapper";

export default function PPCPage() {

    return (
        <div className="flex flex-col w-full">
            {/* 1. HERO SECTION (Dark) */}
            <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-32">
                <div className="z-10 max-w-5xl">
                    <SectionWrapper>
                        <div className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/20 text-center">
                            India&apos;s Preferred Renewable Energy Technology Partner
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading">
                            AEPL Power <span className="text-primary">Plant Control</span>
                        </h1>

                        <p className="text-gray-300 text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
                            Advanced, reliable and adaptable Power Plant Control (PPC) solutions for stand-alone and hybrid plants to achieve green energy goals
                        </p>
                    </SectionWrapper>
                </div>
            </section>

            {/* 2. THE AEPL ADVANTAGE (Light) */}
            <section className="section-light py-24 bg-white rounded-t-[40px] relative z-20 -mt-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <SectionWrapper>
                            <div>
                                <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">The AEPL Advantage</h2>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
                                    We electrify, automate and digitise renewable plants, driving efficiency and sustainability for Developers, IPPs and EPC companies.
                                </p>
                                <p className="text-slate-600 leading-relaxed mb-8">
                                    With a proven track record of excellence, AEPL has established itself as the leader in Power Plant Control (PPC), having successfully executed over <span className="font-bold text-slate-900">200 PPC projects</span> across India’s rapidly growing renewable landscape. Supporting a massive installed base of <span className="font-bold text-slate-900">40GW+</span>, we bring field-proven experience to ensure seamless grid integration and operational success.
                                </p>
                                <MicroCTA text="View Our Portfolio" variant="connect" href="/renewable" context="light" />
                            </div>
                        </SectionWrapper>
                        <SectionWrapper delay={0.2}>
                            <div className="bg-slate-900 rounded-3xl p-10 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                                <div className="relative z-10 grid grid-cols-2 gap-8">
                                    <div>
                                        <div className="text-4xl font-black text-primary mb-2">200+</div>
                                        <div className="text-sm text-gray-400 uppercase tracking-widest font-bold">PPC Projects</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-black text-primary mb-2">40GW+</div>
                                        <div className="text-sm text-gray-400 uppercase tracking-widest font-bold">Installed Base</div>
                                    </div>
                                    <div className="col-span-2 pt-8 border-t border-white/10">
                                        <p className="text-gray-300 italic">&quot;Seamlessly orchestrating Solar, Wind, and BESS assets.&quot;</p>
                                    </div>
                                </div>
                            </div>
                        </SectionWrapper>
                    </div>
                </div>
            </section>

            {/* 3. THE RISING COMPLEXITY (Gray) */}
            <section className="py-24 bg-slate-50 relative z-10 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <SectionWrapper>
                            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">The Rising Complexity</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">Navigating the challenges of the road to 500GW+.</p>
                        </SectionWrapper>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "The Road to 500GW+",
                                desc: "By 2030, renewable generation will exceed 500GW+. This rapid scaling demands a transformative shift toward sustainable energy infrastructure",
                                icon: faChartLine
                            },
                            {
                                title: "The Distributed Grid",
                                desc: "Integration of thousands of decentralized Solar, Wind, and BESS assets requires effective orchestration to work in harmony",
                                icon: faNetworkWired
                            },
                            {
                                title: "Intermittency & Instability",
                                desc: "Fluctuations in wind and solar can risk grid stability. Assets must be managed with high-precision control to prevent frequency deviations",
                                icon: faWaveSquare
                            },
                            {
                                title: "Stringent Regulatory Standards",
                                desc: "Grid operators are tightening requirements. Compliance is a critical mandate for plants to remain connected and profitable",
                                icon: faFileContract
                            },
                            {
                                title: "Securing Critical Infrastructure",
                                desc: "Renewable assets are prime cyber targets. Robust encryption and adherence to IEC 62443 are vital to prevent outages",
                                icon: faShieldAlt
                            },
                            {
                                title: "Expert Execution",
                                desc: "Complex automation requires deep domain expertise. Connecting high-speed control systems with legacy grids involves intricate engineering",
                                icon: faCogs
                            }
                        ].map((item, i) => (
                            <SectionWrapper key={i} delay={i * 0.1} className="h-full">
                                <div className="group relative bg-white rounded-2xl border border-slate-200 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col overflow-hidden">
                                    {/* Gradient Top Border */}
                                    <div className="h-1 bg-gradient-to-r from-primary via-teal-400 to-blue-500 group-hover:h-1.5 transition-all duration-300"></div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        {/* Number Badge & Icon */}
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-teal-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                <span className="text-white font-black text-xl">0{i + 1}</span>
                                            </div>

                                            {/* Icon */}
                                            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                                <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>

                                        {/* Description */}
                                        <p className="text-slate-600 text-sm leading-relaxed flex-grow">{item.desc}</p>
                                    </div>
                                </div>
                            </SectionWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. ADAPTIVE PPC CORE (Dark) */}
            <section className="section-dark py-32 bg-transparent text-white relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <SectionWrapper>
                            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400 font-heading mb-6">Gain Superior Control</h2>
                            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                                An Adaptive PPC ensures compliance, stability, and maximized yield through advanced technology.
                            </p>
                        </SectionWrapper>
                    </div>

                    <div className="space-y-24">
                        {/* Feature Block 1: Compliance & Optimization */}
                        <SectionWrapper>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div className="order-2 lg:order-1">
                                    <div className="mb-12">
                                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                            <ShieldCheck className="text-primary w-6 h-6" /> Grid Compliance & Stability
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Adhere to IEGC and state mandates. Dynamically regulate active and reactive power at the POI, providing essential support for voltage and frequency to maintain grid stability.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                            <Zap className="text-yellow-400 w-6 h-6" /> Power Optimization & Curtailment
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Maximize yield with &quot;Dynamic Power Control&quot;. Intelligent algorithms optimize production across all inverters/turbines. Execute curtailment orders with precision to protect revenue.
                                        </p>
                                    </div>
                                </div>
                                <div className="order-1 lg:order-2 bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
                                    {/* Visual placeholder or icon graphic could go here */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                                            <div className="text-3xl font-bold text-primary mb-1">100%</div>
                                            <div className="text-xs text-gray-500 uppercase">Compliance</div>
                                        </div>
                                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                                            <div className="text-3xl font-bold text-yellow-500 mb-1">Max</div>
                                            <div className="text-xs text-gray-500 uppercase">Yield</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SectionWrapper>

                        {/* Feature Block 2: Speed & Reliability */}
                        <SectionWrapper>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/5">
                                            <div className="w-20 h-20 rounded-full border-4 border-primary/30 flex items-center justify-center mb-3">
                                                <span className="text-base font-black text-white">&lt;200ms</span>
                                            </div>
                                            <div className="text-xs text-gray-400 uppercase text-center">Response Time</div>
                                        </div>
                                        <div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/5">
                                            <div className="w-20 h-20 rounded-full border-4 border-green-500/30 flex items-center justify-center mb-3">
                                                <span className="text-base font-black text-green-400">99.9%</span>
                                            </div>
                                            <div className="text-xs text-gray-400 uppercase text-center">Uptime</div>
                                        </div>
                                        <div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/5">
                                            <div className="w-20 h-20 rounded-full border-4 border-blue-500/30 flex items-center justify-center mb-3">
                                                <span className="text-base font-black text-blue-400">24/7</span>
                                            </div>
                                            <div className="text-xs text-gray-400 uppercase text-center">Monitoring</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-12">
                                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                            <Activity className="text-red-400 w-6 h-6" /> Fast Loop Control
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Sub-second response times (&lt;200ms) to counteract sudden grid changes. Automated ramp-rate control and active power limiting prevent plant trips and equipment stress.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                            <Server className="text-blue-400 w-6 h-6" /> Reliability & Fail-Safe
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Master-Slave hot-redundancy ensures 100% availability. Multi-layered Fail-Safe Mode with &quot;Heartbeat&quot; monitoring automatically transitions to safe local setpoints during network interruptions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SectionWrapper>

                        {/* Feature Block 3: Security & Analytics */}
                        <SectionWrapper>
                            <div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                            <Lock className="text-emerald-400 w-6 h-6" /> Cyber Security
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            &quot;Secure-by-design&quot; per IEC 62443 standards. Encrypted communication, firewalls, and RBAC protect critical infrastructure from unauthorized access.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                            <Database className="text-purple-400 w-6 h-6" /> Analytics & Reporting
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Real-time granular monitoring and custom dashboards. Automated reporting for compliance and O&M. Advanced analytics identify underperforming assets.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <MicroCTA text="Download Technical Specs" variant="download" href="#" />
                                </div>
                            </div>
                        </SectionWrapper>
                    </div>
                </div>
            </section>

            {/* 5. CONTROL MODES (Light) */}
            <section className="section-light py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionWrapper>
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-16 font-heading">Key Functions for Peak Performance</h2>
                    </SectionWrapper>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                        {/* Column 1: Precise Power Management */}
                        <SectionWrapper>
                            <div>
                                <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">Precise Power Management</h3>
                                </div>
                                <div className="space-y-6">
                                    <FeatureRow
                                        title="Active Power Control"
                                        desc="Maximize profitability with precision dispatch, intelligent curtailment, and high-speed response to utility commands."
                                        imageSrc="/imgs/tam/Active Power Management.png"
                                        color="text-blue-600"
                                    />
                                    <FeatureRow
                                        title="Reactive Power Control"
                                        desc="Dynamic control for ultra-fast voltage support and precision power factor management to ensure maximum uptime."
                                        imageSrc="/imgs/tam/Optimized Reactive Power Control.png"
                                        color="text-yellow-500"
                                    />
                                    <FeatureRow
                                        title="Ramp-Rate Control"
                                        desc="Protect grid integrity with precision ramp rate control, delivering smooth power transitions that eliminate fluctuations."
                                        imageSrc="/imgs/tam/Smooth Ramp-Rate Control.png"
                                        color="text-primary"
                                    />
                                </div>
                            </div>
                        </SectionWrapper>

                        {/* Column 2: Grid Resilience & Stability */}
                        <SectionWrapper delay={0.2}>
                            <div>
                                <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
                                    <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">Grid Resilience & Stability</h3>
                                </div>
                                <div className="space-y-6">
                                    <FeatureRow
                                        title="Voltage Control"
                                        desc="Maintain perfect grid harmony with instantaneous reactive support and automated regulation for equipment protection."
                                        imageSrc="/imgs/tam/Voltage Control.png"
                                        color="text-purple-600"
                                    />
                                    <FeatureRow
                                        title="Frequency Control"
                                        desc="Empower the grid with ultra-responsive sub-second stability and seamless droop support for total utility compliance."
                                        imageSrc="/imgs/tam/Dynamic Frequency Response.png"
                                        color="text-red-500"
                                    />
                                    <FeatureRow
                                        title="PF Control"
                                        desc="Optimize plant efficiency with automated phase-angle correction and seamless reactive power management."
                                        imageSrc="/imgs/tam/Enhanced Power Factor Correction.png"
                                        color="text-green-600"
                                    />
                                </div>
                            </div>
                        </SectionWrapper>
                    </div>
                    <div className="flex justify-center">
                        <MicroCTA text="Schedule Technical Demo" variant="connect" href="/contact" context="light" />
                    </div>
                </div >
            </section >

            {/* 6. ECOSYSTEM INTEGRATION (Dark - Redesigned) */}
            < section className="section-dark py-32 bg-slate-900 text-white relative z-10 -mt-20 pt-40" >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        {/* Left Column: Context */}
                        <SectionWrapper>
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-primary/20">
                                    <Network className="w-4 h-4" />
                                    <span>Integration Layer</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-heading leading-tight">
                                    Universal <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-400">Compatibility</span>
                                </h2>
                                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                    The Universal Translator for your renewable assets. Seamlessly talk to any device, any make, any protocol without complex custom engineering.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        { title: "Vendor Agnostic", desc: "Compatible with huge list of inverter & turbine makes." },
                                        { title: "Retrofit Ready", desc: "Easily integrates with legacy infrastructure." },
                                        { title: "Plug & Play", desc: "Pre-configured drivers for standard devices." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-lg">{item.title}</h4>
                                                <p className="text-gray-500 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </SectionWrapper>

                        {/* Right Column: Visual Stack */}
                        <SectionWrapper delay={0.2}>
                            <div className="relative">
                                {/* Decorative Blur */}
                                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-30"></div>

                                <div className="grid grid-cols-1 gap-6 relative z-10 w-full max-w-md mx-auto">
                                    {/* Protocol Card */}
                                    <div className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-primary/40 transition-colors duration-300 w-full min-h-[220px] flex flex-col justify-between">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                                                <Database className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white">Supported Protocols</h3>
                                                <p className="text-gray-400 text-xs">Standardized Communication</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            {["IEC 61850", "Modbus TCP/RTU", "DNP3", "OPC UA", "IEC 104", "MQTT"].map((p, i) => (
                                                <span key={i} className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-bold rounded hover:bg-white/10 transition-colors border border-white/5">
                                                    {p}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Device Card */}
                                    <div className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-primary/40 transition-colors duration-300 w-full min-h-[220px] flex flex-col justify-between">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 shrink-0">
                                                <Cpu className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white">Device Support</h3>
                                                <p className="text-gray-400 text-xs">Hardware Independence</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="flex items-center gap-2 text-gray-300 text-sm">
                                                <Zap className="w-4 h-4 text-yellow-400" /> Inverters
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-300 text-sm">
                                                <Activity className="w-4 h-4 text-red-400" /> MFMs / Meters
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-300 text-sm">
                                                <Server className="w-4 h-4 text-purple-400" /> BESS PCS
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-300 text-sm">
                                                <Globe className="w-4 h-4 text-blue-400" /> Weather Stations
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SectionWrapper>
                    </div>
                </div>
            </section >

            {/* 7. BENEFITS SUMMARY (Light) */}
            < section className="py-24 bg-white border-t border-slate-100 relative z-20" >
                <div className="max-w-7xl mx-auto px-6">
                    <SectionWrapper>
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-16 font-heading">Benefits of Adaptive-PPC</h2>
                    </SectionWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            "Regulatory Compliance (IEGC)",
                            "Enhanced Grid Stability",
                            "Optimized Energy Production",
                            "Improved System Reliability",
                            "Cyber Security Measures",
                            "Future-Ready Scalability",
                            "Advanced Analytics & Reporting",
                            "Faster Commissioning"
                        ].map((benefit, i) => (
                            <SectionWrapper key={i} delay={i * 0.1} className="h-full">
                                <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary/30 transition-colors h-full">
                                    <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                                    <span className="font-bold text-slate-700">{benefit}</span>
                                </div>
                            </SectionWrapper>
                        ))}
                    </div>
                </div>
            </section >

            {/* 8. CTA (Light) */}
            < section className="py-20 bg-slate-900 text-center relative z-20" >
                <div className="max-w-2xl mx-auto px-6">
                    <SectionWrapper>
                        <h2 className="text-4xl font-bold text-white mb-6 font-heading">Partner with AEPL</h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            Leverage our 16+ years of expertise to configure your PPC faster and more accurately.
                            Accelerate commissioning and ensure long-term operational success.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
                            Get Started <ArrowRight className="w-4 h-4" />
                        </Link>
                    </SectionWrapper>
                </div>
            </section >
        </div >
    );
}

// Helper Card using FontAwesome
// Helper Row for Features
function FeatureRow({ title, desc, imageSrc, color }: { title: string; desc: string; imageSrc?: string; color: string }) {
    return (
        <div className="flex items-start gap-5 group p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 reveal">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 overflow-hidden ${color.replace('text-', 'bg-').replace('600', '100').replace('500', '100')}`}>
                {imageSrc ? (
                    <Image src={imageSrc} alt={title} width={48} height={48} className="object-cover" />
                ) : null}
            </div>
            <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">{title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
        </div>
    )
}
