"use client";

import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Activity, HardHat, CheckCircle2 } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO CAROUSEL */}
      <section className="relative h-screen bg-transparent">
        <HeroCarousel />
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-20 animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* 2. MARQUEE SECTION (Light) */}
      <section className="py-20 bg-light rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">Preferred Partner for Industry Leaders</p>
        </div>
        <div className="flex overflow-hidden relative">
          <div className="flex animate-marquee gap-20 min-w-full px-10">
            {[
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/1-1024x1024.png.webp",
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/20-1024x1024.png.webp",
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/36-1024x1024.png.webp",
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/40-1024x1024.png.webp",
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/21-1024x1024.png.webp",
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/13-1024x1024.png.webp",
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/19-1024x1024.png.webp"
            ].map((src, i) => (
              <div key={i} className="flex-shrink-0">
                <img src={src} alt="Partner" className="h-24 w-auto object-contain opacity-80 hover:scale-110 transition-transform duration-300" />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {[
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/1-1024x1024.png.webp",
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/20-1024x1024.png.webp",
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/36-1024x1024.png.webp",
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/40-1024x1024.png.webp",
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/21-1024x1024.png.webp",
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/13-1024x1024.png.webp",
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/19-1024x1024.png.webp"
            ].map((src, i) => (
              <div key={`dup-${i}`} className="flex-shrink-0">
                <img src={src} alt="Partner" className="h-24 w-auto object-contain opacity-80 hover:scale-110 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STATS GRID (Light) */}
      <section className="py-24 bg-white z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-center">
            {[
              { val: "16+", label: "Years Experience" },
              { val: "300+", label: "Engineers" },
              { val: "68 GW+", label: "Assets Monitored" },
              { val: "125,000+", label: "Sq. Ft. Manufacturing Facility" },
              { val: "10,000+", label: "Electrical Panels Supplied" },
              { val: "1,000+", label: "Projects Completed" }
            ].map((stat, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="text-5xl font-extrabold text-slate-900 font-heading mb-2">{stat.val}</div>
                <div className="text-xs uppercase tracking-widest text-primary font-bold">{stat.label}</div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE SOLUTIONS (Dark) */}
      <section className="py-32 bg-transparent rounded-b-[40px] z-10 relative shadow-2xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 text-center">
            <SectionWrapper>
              <h2 className="text-5xl font-bold text-white mb-6 font-heading">Our Solutions</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectionWrapper delay={0.1}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-primary transition-all group cursor-pointer h-full">
                <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=150&q=80" className="w-20 h-20 rounded-2xl object-cover mb-8 border-2 border-primary shadow-lg group-hover:scale-110 transition-transform" alt="Renewable" />
                <h3 className="text-2xl font-bold text-white mb-4">Renewable Solutions</h3>
                <p className="text-gray-400 leading-relaxed mb-8">End-to-end services: Conceptualizing, designing, and commissioning electrical systems up to 66KV. Solar, Wind, and Hybrid plant integration.</p>
                <span className="text-white text-sm font-bold border-b border-primary pb-1 group-hover:text-primary transition-colors">Learn More</span>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-primary transition-all group cursor-pointer h-full">
                <img src="https://adaptive-engg.com/wp-content/uploads/2024/10/Untitled-design-13-1-480x340.png" className="w-20 h-20 rounded-2xl object-cover mb-8 border-2 border-primary shadow-lg group-hover:scale-110 transition-transform" alt="KUSUM" />
                <h3 className="text-2xl font-bold text-white mb-4">PM-KUSUM Solutions</h3>
                <p className="text-gray-400 leading-relaxed mb-8">Industrial IoT powered by SolarWiz, WaterWiz, and MachineWiz. Real-time telemetry for agricultural pumps and water supply schemes.</p>
                <span className="text-white text-sm font-bold border-b border-primary pb-1 group-hover:text-primary transition-colors">Learn More</span>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.3}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-primary transition-all group cursor-pointer h-full">
                <img src="https://adaptive-engg.com/wp-content/uploads/2023/08/tunnel-mp.png.webp" className="w-20 h-20 rounded-2xl object-cover mb-8 border-2 border-primary shadow-lg group-hover:scale-110 transition-transform" alt="Infra" />
                <h3 className="text-2xl font-bold text-white mb-4">Infrastructure Solutions</h3>
                <p className="text-gray-400 leading-relaxed mb-8">Specialized automation for Tunnels and Data Centers. In-house manufacturing of HT/LT Panels, MCC, and PCC for heavy industry.</p>
                <span className="text-white text-sm font-bold border-b border-primary pb-1 group-hover:text-primary transition-colors">Learn More</span>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 5. TECH HIGHLIGHT (Light) */}
      <section className="py-32 bg-light z-0 -mt-20 pt-44">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <SectionWrapper>
              <span className="text-primary font-bold uppercase text-sm tracking-widest mb-2 block">ReportWiz Platform</span>
              <h2 className="text-5xl font-extrabold text-slate-900 mb-8 font-heading">Intelligent <br /> Monitoring</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our proprietary software provides Central Plant Monitoring and Mobile Asset Management. With an installed base of over 68GW, we ensure optimal performance across 500+ plants.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                  <Activity className="text-primary w-8 h-8" />
                  <div>
                    <h4 className="font-bold text-slate-900">Real-Time</h4>
                    <p className="text-xs text-slate-500">Telemetry</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                  <ShieldCheck className="text-primary w-8 h-8" />
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
      <section className="py-32 bg-transparent rounded-t-[40px] z-10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-6">
            <SectionWrapper>
              <h2 className="text-5xl font-bold text-white font-heading">Case Studies</h2>
            </SectionWrapper>
            <Link href="#" className="text-primary font-bold hover:text-white transition hidden md:block">View All Projects</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <SectionWrapper delay={0.1}>
              <div className="group cursor-pointer">
                <div className="h-96 bg-gray-800 rounded-2xl overflow-hidden mb-6 relative">
                  <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition duration-700 group-hover:scale-105" alt="Project" />
                  <div className="absolute top-6 right-6 bg-white text-black px-4 py-1 text-xs font-bold rounded-full">GUJARAT</div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Water Supply Scheme</h3>
                <p className="text-gray-400">Complete E&I automation for Rewa, Kirgi, and Barhi projects.</p>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <div className="group cursor-pointer">
                <div className="h-96 bg-gray-800 rounded-2xl overflow-hidden mb-6 relative">
                  <img src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition duration-700 group-hover:scale-105" alt="Project" />
                  <div className="absolute top-6 right-6 bg-white text-black px-4 py-1 text-xs font-bold rounded-full">HIGHWAY</div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Twin Tube Tunnel</h3>
                <p className="text-gray-400">2.5Km highway tunnel E&I package delivery.</p>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 7. PROTOCOL (Light) */}
      <section className="py-32 bg-light z-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionWrapper>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-20 font-heading">The Protocol</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Conceptualize", desc: "Design & Feasibility" },
                { step: "02", title: "Manufacture", desc: "In-house Panel Fabrication" },
                { step: "03", title: "Commission", desc: "Install & Test up to 66KV" },
                { step: "04", title: "Monitor", desc: "24/7 ReportWiz Analytics" }
              ].map((item, i) => (
                <div key={i} className="p-8 hover:bg-white hover:shadow-xl transition rounded-2xl group relative">
                  <div className="text-6xl font-bold text-primary/20 mb-[-30px] group-hover:opacity-100 transition duration-500">{item.step}</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 relative z-10">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* 8. IMPACT (Dark) */}
      <section className="py-32 bg-transparent">
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
      <section className="py-24 bg-light border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <SectionWrapper>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4 font-heading">ISO 9001:2015 Certified</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our best-in-class manufacturing facility is certified by TUV Nord. We maintain stringent safety standards and a Zero Harm policy.
              </p>
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
                <CheckCircle2 className="mx-auto w-10 h-10 mb-4 text-primary" />
                <div className="text-xs font-bold uppercase text-slate-900">TUV Nord</div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 10. CTA (Dark) */}
      <section className="py-40 bg-transparent text-center relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-6xl mb-8 font-black text-white font-heading">Ready to <span className="text-primary">Scale?</span></h2>
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
