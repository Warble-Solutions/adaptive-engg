"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
    Phone, Mail, MapPin, Send, MessageSquare,
    Briefcase, LifeBuoy, Building2, ChevronDown, CheckCircle2
} from "lucide-react";
// Navbar and Footer are globally in layout

export default function ContactPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    useEffect(() => {
        const initAnime = async () => {
            // @ts-ignore
            const animeModule = await import("animejs") as any;
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

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    }

    return (
        <div className="flex flex-col w-full">
            {/* 1. HERO SECTION (Dark) */}
            <section className="section-hero relative min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-32">
                <div className="z-10 max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading reveal">
                        Establish <span className="text-primary">Connection</span>
                    </h1>
                    <p className="text-gray-300 text-xl md:text-2xl font-light reveal delay-100 max-w-2xl mx-auto leading-relaxed">
                        Get in touch with our engineering team for Consultations, Quotes, or Support.
                    </p>
                </div>
            </section>

            {/* 2. CONTACT INTERFACE (Light - Split Layout) */}
            <section className="section-light py-24 bg-white rounded-t-[40px] relative z-20 -mt-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Left Column: The Form */}
                        <div className="lg:w-3/5 reveal">
                            <div className="premium-card p-8 md:p-12 bg-white rounded-3xl border border-gray-100 shadow-xl">
                                <h3 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h3>
                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Name</label>
                                            <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all" placeholder="Enter your name" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone</label>
                                            <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all" placeholder="+91..." />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email</label>
                                        <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all" placeholder="name@company.com" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Project Type</label>
                                        <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all text-slate-700">
                                            <option>Renewable Solutions</option>
                                            <option>PM-KUSUM</option>
                                            <option>Infrastructure</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message</label>
                                        <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all resize-none" placeholder="Tell us about your requirements..."></textarea>
                                    </div>

                                    <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-teal-600 transition-all flex items-center justify-center gap-2 group">
                                        Transmit Inquiry <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Right Column: HQ Intelligence */}
                        <div className="lg:w-2/5 space-y-12 reveal delay-200">
                            <div>
                                <h2 className="text-4xl font-bold text-slate-900 mb-8 font-heading">Headquarters</h2>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg mb-1">Corporate Office</h4>
                                            <p className="text-slate-500 leading-relaxed max-w-xs">
                                                2/1 Chitra Ami Apartment, Opp Reserve Bank, Ashram Road, Ahmedabad - 380009, Gujarat, India.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg mb-1">Phone</h4>
                                            <p className="text-slate-500 font-medium">+91 79 6926 9000</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg mb-1">Email</h4>
                                            <p className="text-slate-500 font-medium">info@adaptive-engg.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="w-full h-56 md:h-72 min-h-[240px] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.936636737389!2d72.5732143154236!3d23.02606512197686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f7f6a704f1%3A0xc6c7c5c8c5c5c5c5!2sReserve%20Bank%20of%20India%2C%20Ashram%20Rd%2C%20Ahmedabad!5e0!3m2!1sen!2sin!4v1675840000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="absolute inset-0 w-full h-full"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. DEPARTMENT CHANNELS (Dark) */}
            <section className="section-dark py-24 bg-transparent text-white relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 reveal">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Direct Communication Channels</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Connect directly with the right department.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Sales & Business", desc: "For RFQs and Tenders.", email: "sales@adaptive-engg.com", icon: <Briefcase /> },
                            { title: "Technical Support", desc: "For O&M and Troubleshooting.", email: "support@adaptive-engg.com", icon: <LifeBuoy /> },
                            { title: "HR & Careers", desc: "Join the engineering corps.", email: "hr@adaptive-engg.com", icon: <Building2 /> }
                        ].map((item, i) => (
                            <div key={i} className="dark-card p-10 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group reveal cursor-pointer text-center">
                                <div className="mb-6 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-primary mx-auto group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                                <p className="text-gray-400 text-sm mb-6">{item.desc}</p>
                                <a href={`mailto:${item.email}`} className="text-primary font-bold hover:text-white transition-colors">
                                    {item.email}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* 5. TRANSMISSION PROTOCOLS (FAQ - Dark) */}
            <section className="section-dark py-24 bg-slate-900 text-white relative z-10 -mt-10 pt-32">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16 font-heading reveal">Frequently Asked Questions</h2>

                    <div className="space-y-4 reveal">
                        {[
                            { q: "Do you handle government liasioning?", a: "Yes, our Turnkey service includes end-to-end CEIG and DISCOM approvals." },
                            { q: "What is the warranty on panels?", a: "Standard 25-year performance warranty on modules, 1-year on panels." },
                            { q: "Is SolarWiz compatible with my existing pump?", a: "Yes, SolarWiz is retrofit-ready for most AC/DC pumps." }
                        ].map((item, i) => (
                            <div key={i} className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden transition-all duration-300">
                                <button
                                    onClick={() => toggleFaq(i)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="font-bold text-lg pr-4">{item.q}</span>
                                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                                        {item.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
