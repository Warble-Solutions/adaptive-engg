"use client";

import HeroCarousel from "@/components/HeroCarousel";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import MicroCTA from "@/components/ui/MicroCTA";
import Counter from "@/components/ui/Counter";
import { ArrowRight, ShieldCheck, Activity, HardHat, CheckCircle2, Blocks, Link2, Youtube } from "lucide-react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDraftingCompass, faIndustry, faScrewdriverWrench, faDesktop } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO CAROUSEL */}
      <section className="relative min-h-screen pt-32 md:pt-0 bg-transparent">
        <HeroCarousel />
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-20 animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* 2. MARQUEE SECTION (Light) */}
      <section className="pt-20 pb-8 bg-light rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <p className="text-center text-gray-400 text-lg font-bold uppercase tracking-[0.2em]">Preferred Partner for Industry Leaders</p>
        </div>
        <div className="flex overflow-hidden relative">
          <div className="flex animate-marquee gap-20 min-w-full px-10">
            {Array.from({ length: 40 }, (_, i) => `/imgs/logos/${i + 1}.webp`).map((src, i) => (
              <div key={i} className="flex-shrink-0">
                <img src={src} alt="Partner" className="h-40 w-auto object-contain opacity-80 hover:scale-110 transition-transform duration-300" />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {Array.from({ length: 40 }, (_, i) => `/imgs/logos/${i + 1}.webp`).map((src, i) => (
              <div key={`dup-${i}`} className="flex-shrink-0">
                <img src={src} alt="Partner" className="h-40 w-auto object-contain opacity-80 hover:scale-110 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STATS GRID (Light) */}
      <section className="pt-8 pb-24 bg-white z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 text-center">
            {[
              { value: 16, suffix: "+", label: "Years Experience" },
              { value: 300, suffix: "+", label: "Manpower" },
              { value: 68, suffix: "GW+", label: "Assets Monitored" },
              { value: 125000, suffix: "+", label: "Sq. Ft. Facility" },
              { value: 1000, suffix: "+", label: "Projects Executed" },
              { value: 500, suffix: "+", label: "Plants Monitored" }
            ].map((stat, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                {/* <div className="text-5xl font-extrabold text-slate-900 font-heading mb-2">{stat.val}</div> */}
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-5xl font-extrabold text-slate-900 font-heading mb-2 block"
                />
                <div className="text-xs uppercase tracking-widest text-primary font-bold">{stat.label}</div>
              </SectionWrapper>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CORE SOLUTIONS (Dark) */}
      <section className="py-32 bg-transparent rounded-b-[40px] z-10 relative shadow-2xl">
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="mb-24 text-center">
            <SectionWrapper>
              <h2 className="text-5xl font-bold text-white font-heading">Our Solutions</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6"></div>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectionWrapper delay={0.1}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-primary hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full">
                <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=150&q=80" className="w-20 h-20 rounded-2xl object-cover mb-8 border-2 border-primary shadow-lg group-hover:scale-110 transition-transform duration-500" alt="Renewable" />
                <h3 className="text-2xl font-bold text-white mb-4">Renewable Solutions</h3>
                <p className="text-gray-400 leading-relaxed mb-8">End-to-end services: Conceptualizing, designing, and commissioning electrical systems up to 66KV. Solar, Wind, and Hybrid plant integration.</p>
                <Link href="/renewable" className="text-white text-sm font-bold border-b border-primary pb-1 group-hover:text-primary transition-colors z-20 relative">Learn More</Link>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-primary hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full relative">
                <img src="https://adaptive-engg.com/wp-content/uploads/2024/10/Untitled-design-13-1-480x340.png" className="w-20 h-20 rounded-2xl object-cover mb-8 border-2 border-primary shadow-lg group-hover:scale-110 transition-transform duration-500" alt="KUSUM" />
                <h3 className="text-2xl font-bold text-white mb-4">PM-KUSUM Solutions</h3>
                <p className="text-gray-400 leading-relaxed mb-8">Industrial IoT powered by SolarWiz, WaterWiz, and MachineWiz. Real-time telemetry for agricultural pumps and water supply schemes.</p>
                <Link href="/pm-kusum" className="text-white text-sm font-bold border-b border-primary pb-1 group-hover:text-primary transition-colors z-20 relative">Learn More</Link>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.3}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-primary hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full">
                <img src="https://adaptive-engg.com/wp-content/uploads/2023/08/tunnel-mp.png.webp" className="w-20 h-20 rounded-2xl object-cover mb-8 border-2 border-primary shadow-lg group-hover:scale-110 transition-transform duration-500" alt="Infra" />
                <h3 className="text-2xl font-bold text-white mb-4">Infrastructure Solutions</h3>
                <p className="text-gray-400 leading-relaxed mb-8">Specialized automation for Tunnels and Data Centers. In-house manufacturing of HT/LT Panels, MCC, and PCC for heavy industry.</p>
                <span className="text-white text-sm font-bold border-b border-primary pb-1 group-hover:text-primary transition-colors">Learn More</span>
              </div>
            </SectionWrapper>
          </div>


        </div>
      </section>

      {/* 5. TECH HIGHLIGHT (Light) */}
      <section className="py-24 bg-light z-0" >
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <SectionWrapper>
              <span className="text-primary font-bold uppercase text-sm tracking-widest mb-2 block">ReportWiz Platform</span>
              <h2 className="text-5xl font-extrabold text-slate-900 mb-8 font-heading">Intelligent <br /> Monitoring</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our proprietary software provides Central Plant Monitoring and Mobile Asset Management. With an installed base of over 68GW, we ensure optimal performance across 500+ plants.
              </p>
              <div className="mb-8">
                <MicroCTA text="Request Live Demo" variant="quote" href="/contact?subject=Demo" context="light" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <Activity className="text-primary w-8 h-8 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-bold text-slate-900">Real-Time</h4>
                    <p className="text-xs text-slate-500">Telemetry</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <ShieldCheck className="text-primary w-8 h-8 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-bold text-slate-900">Secure</h4>
                    <p className="text-xs text-slate-500">Asset Mgmt</p>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          </div>

          <div className="lg:w-1/2">
            <SectionWrapper delay={0.2}>
              <div className="aspect-video bg-gray-50 flex items-center justify-center border border-gray-100 rounded-3xl shadow-xl p-8">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full border-4 border-t-primary border-r-primary border-b-gray-200 border-l-gray-200 animate-spin-slow mb-4"></div>
                  <p className="font-bold text-slate-400 text-sm tracking-widest">LIVE DATA FEED</p>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 6. PROJECTS (Dark) */}
      <section className="py-32 bg-transparent rounded-t-[40px] z-10 relative" >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-6">
            <SectionWrapper>
              <h2 className="text-5xl font-bold text-white font-heading">Case Studies</h2>
            </SectionWrapper>
            <Link href="#" className="text-primary font-bold hover:text-white transition hidden md:block">View All Projects</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectionWrapper delay={0.1}>
              <div className="group cursor-pointer">
                <div className="h-80 bg-gray-800 rounded-2xl overflow-hidden mb-6 relative">
                  <img src="/imgs/case%20/1.jpg" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition duration-700 group-hover:scale-105" alt="Project" />
                  <div className="absolute top-6 right-6 bg-white text-black px-4 py-1 text-xs font-bold rounded-full">GUJARAT</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Water Supply Scheme</h3>
                <p className="text-gray-400 text-sm">Complete E&I automation for Rewa, Kirgi, and Barhi projects.</p>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <div className="group cursor-pointer">
                <div className="h-80 bg-gray-800 rounded-2xl overflow-hidden mb-6 relative">
                  <img src="/imgs/case%20/2.jpg" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition duration-700 group-hover:scale-105" alt="Project" />
                  <div className="absolute top-6 right-6 bg-white text-black px-4 py-1 text-xs font-bold rounded-full">HIGHWAY</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Twin Tube Tunnel</h3>
                <p className="text-gray-400 text-sm">2.5Km highway tunnel E&I package delivery.</p>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.3}>
              <div className="group cursor-pointer">
                <div className="h-80 bg-gray-800 rounded-2xl overflow-hidden mb-6 relative">
                  <img src="/imgs/case%20/3.jpg" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition duration-700 group-hover:scale-105" alt="Project" />
                  <div className="absolute top-6 right-6 bg-white text-black px-4 py-1 text-xs font-bold rounded-full">MNRE</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Solar Park Automation</h3>
                <p className="text-gray-400 text-sm">Centralized SCADA for 500MW solar installation.</p>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 7. SCALABILITY (Light) */}
      <section className="section-light py-24 bg-white relative z-20" >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <h2 className="text-4xl font-bold text-slate-900 mb-2 font-heading">Built to Grow</h2>
              <p className="text-primary font-bold uppercase tracking-widest text-sm">Future Proof Architecture</p>
            </SectionWrapper>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Modular Architecture", desc: "Scale effortlessly from 50MW to 5GW. Our plug-and-play architecture allows you to add capacity or new assets (like BESS) without disrupting core operations.", icon: <Blocks className="w-6 h-6" /> },
              { title: "Universal Compatibility", desc: "True vendor independence. We seamlessly integrate with all major inverter makes (Huawei, Sungrow, SMA) and turbine protocols, unifying your entire portfolio.", icon: <Link2 className="w-6 h-6" /> },
              { title: "Grid Future-Proofing", desc: "Stay ahead of regulations. Our systems are pre-configured for the latest IEGC grid codes, frequency response norms, and upcoming scheduling requirements.", icon: <ShieldCheck className="w-6 h-6" /> }
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="premium-card p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm text-primary group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
          <div className="mt-16 text-center">
            <MicroCTA text="Consult Our Engineers" variant="quote" href="/contact?subject=Consultation" context="light" />
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS (Dark) */}
      <section className="section-dark py-24 bg-transparent relative z-10" >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <h2 className="text-4xl font-bold text-white mb-2 font-heading">Trusted Voices</h2>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Powering India&apos;s energy leaders</p>
            </SectionWrapper>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "I appreciate the exceptional work of Adaptive Engineering Pvt. Ltd. Their commitment to excellence, attention to details and proactive mindset have significantly contributed to the success of our projects.", author: "Advisor - Solar O&M", company: "Tata Power", initial: "T" },
              { quote: "I have no hesitation in recommending AEPL to anyone seeking reliable and efficient solar monitoring solutions. The combination of cutting-edge technology, expert knowledge, and outstanding customer service makes AEPL the ideal partner.", author: "Director", company: "WAAREE Renewable Technologies Ltd.", initial: "W" },
              { quote: "Our Machine Automation Solutions are powered by AEPL and we highly recommend the same.", author: "Managing Director", company: "Clartech Engineers Pvt. Ltd.", initial: "C" }
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="dark-card p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="mb-6 text-primary text-4xl">❝</div>
                    <p className="text-gray-300 leading-relaxed italic mb-8 text-sm">&quot;{item.quote}&quot;</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                      {item.initial}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{item.author}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">{item.company}</div>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PROTOCOL (Light) */}
      <section className="py-24 bg-light z-20" >
        <div className="max-w-[1800px] mx-auto px-6">
          <SectionWrapper>
            <div className="flex flex-col md:flex-row items-end justify-between mb-12">
              <div>
                <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-2 block">Our Methodology</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 font-heading">The Integration Pipeline</h2>
              </div>
              <p className="text-slate-500 max-w-sm text-right hidden md:block">
                A streamlined framework delivering excellence from concept to commissioning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[1200px] md:h-[800px]">
              {[
                { step: "01", title: "Conceptualize", desc: "Design & Feasibility", img: "/imgs/protocol/11.jpg", span: "" },
                { step: "02", title: "Manufacture", desc: "In-house Fabrication", img: "/imgs/protocol/12.jpg", span: "" },
                { step: "03", title: "Commission", desc: "Install & Execute", img: "/imgs/protocol/13.jpg", span: "" },
                { step: "04", title: "Monitor", desc: "24/7 ReportWiz Analytics", img: "/imgs/protocol/14.jpg", span: "" }
              ].map((item, i) => (
                <div key={i} className={`group relative overflow-hidden rounded-3xl cursor-pointer ${item.span}`}>
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:via-black/40"></div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end">
                    <div className="flex items-center gap-4 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-5xl font-black text-white/20 select-none group-hover:text-primary transition-colors">{item.step}</span>
                      <div className="h-[1px] flex-grow bg-white/20 group-hover:bg-primary transition-colors"></div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.title}</h3>
                    <p className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 opacity-0 group-hover:opacity-100">{item.desc}</p>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-white/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* 9. MEDIA GALLERY (YouTube Widget) */}
      <section className="section-dark py-24 px-6 relative overflow-hidden bg-slate-900 border-t border-white/5" >
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <SectionWrapper className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 mb-4 bg-red-600/10 px-4 py-1.5 rounded-full border border-red-600/20">
              <Youtube className="text-red-500 w-4 h-4" />
              <span className="text-red-400 text-xs font-bold tracking-widest uppercase">Latest Uploads</span>
            </div>
            <h2 className="text-4xl serif font-bold text-white mb-4">Engineering in Motion</h2>

          </SectionWrapper>

          {/* 6-Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Video 1: Corporate Profile */}
            <SectionWrapper className="group">
              <div className="aspect-video w-full bg-slate-800 rounded-2xl overflow-hidden border border-white/10 relative shadow-lg">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/xGRlPBasltI?loading=lazy" title="Corporate Profile" allowFullScreen></iframe>
              </div>
              <div className="mt-4">
                <h4 className="text-white font-bold text-lg leading-tight group-hover:text-primary transition-colors">Corporate Profile</h4>
                <p className="text-sm text-gray-500 mt-1">An inside look at our capabilities.</p>
              </div>
            </SectionWrapper>

            {/* Video 2: Renewable Monitoring */}
            <SectionWrapper className="group" delay={0.1}>
              <div className="aspect-video w-full bg-slate-800 rounded-2xl overflow-hidden border border-white/10 relative shadow-lg">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/9WUw0TAABCM?loading=lazy" title="Monitoring Solutions" allowFullScreen></iframe>
              </div>
              <div className="mt-4">
                <h4 className="text-white font-bold text-lg leading-tight group-hover:text-primary transition-colors">Monitoring Solutions</h4>
                <p className="text-sm text-gray-500 mt-1">Managing 68GW+ of assets.</p>
              </div>
            </SectionWrapper>

            {/* Video 3: ReportWiz (KUSUM) */}
            <SectionWrapper className="group" delay={0.2}>
              <div className="aspect-video w-full bg-slate-800 rounded-2xl overflow-hidden border border-white/10 relative shadow-lg">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/6-5EexkEQvA?loading=lazy" title="ReportWiz Demo" allowFullScreen></iframe>
              </div>
              <div className="mt-4">
                <h4 className="text-white font-bold text-lg leading-tight group-hover:text-primary transition-colors">ReportWiz Demo</h4>
                <p className="text-sm text-gray-500 mt-1">PM-KUSUM Subsidy Automation.</p>
              </div>
            </SectionWrapper>

            {/* Video 4: Manufacturing (LT Panels) */}
            <SectionWrapper className="group">
              <div className="aspect-video w-full bg-slate-800 rounded-2xl overflow-hidden border border-white/10 relative shadow-lg">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/0JhExHWzK6Y?loading=lazy" title="LT Panel Manufacturing" allowFullScreen></iframe>
              </div>
              <div className="mt-4">
                <h4 className="text-white font-bold text-lg leading-tight group-hover:text-primary transition-colors">Manufacturing Facility</h4>
                <p className="text-sm text-gray-500 mt-1">Inside our 125,000 Sq. Ft. Plant.</p>
              </div>
            </SectionWrapper>

            {/* Video 5: REI Expo Highlights */}
            <SectionWrapper className="group" delay={0.1}>
              <div className="aspect-video w-full bg-slate-800 rounded-2xl overflow-hidden border border-white/10 relative shadow-lg">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/unreC-D1cKk?loading=lazy" title="REI Expo Highlights" allowFullScreen></iframe>
              </div>
              <div className="mt-4">
                <h4 className="text-white font-bold text-lg leading-tight group-hover:text-primary transition-colors">REI Expo Highlights</h4>
                <p className="text-sm text-gray-500 mt-1">Showcasing innovation at REI.</p>
              </div>
            </SectionWrapper>

            {/* Video 6: Director Interview */}
            <SectionWrapper className="group" delay={0.2}>
              <div className="aspect-video w-full bg-slate-800 rounded-2xl overflow-hidden border border-white/10 relative shadow-lg">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/grmVOLbojBA?loading=lazy" title="Director's Vision" allowFullScreen></iframe>
              </div>
              <div className="mt-4">
                <h4 className="text-white font-bold text-lg leading-tight group-hover:text-primary transition-colors">Director&apos;s Vision</h4>
                <p className="text-sm text-gray-500 mt-1">Customer Talk with Mr. Jay Patel.</p>
              </div>
            </SectionWrapper>

          </div>

          {/* View All Button */}
          <SectionWrapper className="mt-16 text-center">
            <a
              href="https://youtube.com/@adaptiveengineeringpvt.ltd.?si=C_3FYNQtQxYz9B_D"
              target="_blank"
              className="inline-flex items-center gap-3 px-8 py-3 bg-white/5 border border-white/10 hover:bg-red-600 hover:border-red-600 text-white rounded-full font-bold transition-all group"
            >
              <span>View All 50+ Videos</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </SectionWrapper>

        </div>
      </section>

      {/* 8. IMPACT (Dark) */}
      <section className="py-32 bg-transparent" >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 text-white">
          <SectionWrapper>
            <h2 className="text-4xl font-bold mb-4 font-heading">Impact & Scale</h2>
            <p className="text-gray-400 max-w-md">Reducing carbon footprints and empowering local communities.</p>
          </SectionWrapper>
          <div className="flex gap-16 text-center">
            <SectionWrapper delay={0.1}>
              <div className="text-6xl font-bold mb-2 font-mono">68<span className="text-primary">GW+</span></div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Monitored Assets</div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="text-6xl font-bold mb-2 font-mono">1,000<span className="text-primary">+</span></div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Total Projects</div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 9. SAFETY (Light) */}
      <section className="py-24 bg-light border-t border-gray-100" >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <SectionWrapper>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4 font-heading">ISO 9001:2015 Certified</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our best-in-class manufacturing facility is certified by TUV Nord. We maintain stringent safety standards and a Zero Harm policy.
              </p>
              <div className="mt-8">
                <Link href="/about" className="text-primary font-bold border-b-2 border-primary pb-1 hover:text-slate-900 transition-colors">View Safety Policy</Link>
              </div>
            </SectionWrapper>
          </div>
          <div className="flex gap-6">
            <SectionWrapper delay={0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center w-48 hover:-translate-y-1 transition-transform">
                <HardHat className="mx-auto w-10 h-10 mb-4 text-accent" />
                <div className="text-xs font-bold uppercase text-slate-900">Safety First</div>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center w-48 hover:-translate-y-1 transition-transform">
                <img src="/logos/tuv-nord-vector-logo.png" alt="TUV Nord" className="mx-auto h-12 w-auto mb-4 object-contain" />
                <div className="text-xs font-bold uppercase text-slate-900">TUV Nord</div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 10. CTA (Dark) */}
      <section className="py-40 bg-transparent text-center relative z-10" >
        <div className="max-w-3xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-4xl md:text-6xl mb-8 font-black text-white font-heading">Ready to <span className="text-primary">Scale?</span></h2>
            <p className="text-xl text-gray-400 mb-12">Partner with the &quot;Preferred Project Partner&quot; of India&apos;s largest corporate houses.</p>
            <Link href="/contact" className="inline-block px-12 py-4 bg-gradient-to-r from-primary to-teal-700 text-white rounded-full font-bold uppercase tracking-wider text-lg shadow-xl shadow-teal-900/50 hover:scale-105 transition-transform">
              Start Discussion
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
