import { MapPin, Phone, Mail, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-slate-900/60 backdrop-blur-md text-white pt-24 pb-12 relative z-50">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

                {/* Brand */}
                <div>
                    <Image
                        src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_170/https://adaptive-engg.com/wp-content/uploads/2025/04/logo-1-png.avif"
                        alt="AEPL"
                        width={170}
                        height={48}
                        className="h-10 w-auto brightness-0 invert opacity-80 mb-8"
                    />
                    <h5 className="text-white font-bold mb-4 tracking-widest text-lg">AEPL</h5>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        India&apos;s most trusted company for Renewable Energy, PM-KUSUM, and Industrial Automation solutions.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"><Linkedin className="w-5 h-5" /></Link>
                        <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"><Twitter className="w-5 h-5" /></Link>
                        <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"><Youtube className="w-5 h-5" /></Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h5 className="text-white font-bold mb-6 text-lg tracking-wide">Quick Links</h5>
                    <ul className="space-y-4 text-sm text-gray-400 font-medium">
                        <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                        <li><Link href="/about" className="hover:text-primary transition-colors">Company Profile</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Certifications</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition-colors">Careers</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Solutions */}
                <div>
                    <h5 className="text-white font-bold mb-6 text-lg tracking-wide">Solutions</h5>
                    <ul className="space-y-4 text-sm text-gray-400 font-medium">
                        <li><Link href="/solutions/renewable" className="hover:text-primary hover:pl-1 transition-all">Unified Renewable</Link></li>
                        <li><Link href="/solutions/pm-kusum" className="hover:text-primary hover:pl-1 transition-all">PM-KUSUM (SolarWiz)</Link></li>
                        <li><Link href="#" className="hover:text-primary hover:pl-1 transition-all">Water Treatment</Link></li>
                        <li><Link href="#" className="hover:text-primary hover:pl-1 transition-all">Tunnel Automation</Link></li>
                        <li><Link href="#" className="hover:text-primary hover:pl-1 transition-all">Electrical Panels</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h5 className="text-white font-bold mb-6 text-lg tracking-wide">Contact Us</h5>
                    <ul className="space-y-4 text-sm text-gray-400 font-medium">
                        <li className="flex items-start gap-3">
                            <MapPin className="text-primary w-5 h-5 mt-1 shrink-0" />
                            <span>2/1 Chitra Ami Apartment, Opp Reserve Bank, Ashram Road, Ahmedabad - 380009</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="text-primary w-5 h-5 shrink-0" />
                            <span>+91 79 6926 9000</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="text-primary w-5 h-5 shrink-0" />
                            <span>info@adaptive-engg.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm">© {new Date().getFullYear()} ADAPTIVE ENGINEERING PVT. LTD. All Rights Reserved.</p>
                <div className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity cursor-default">
                    <span className="text-sm text-gray-500">Tech Partner</span>
                    <div className="flex items-center gap-2">
                        <Image
                            src="https://adaptive-engg.com/wp-content/uploads/2023/04/Hone-ST-Circular-Logo.png"
                            alt="Hone ST Solutions"
                            width={24}
                            height={24}
                            className="rounded-full bg-white"
                        />
                        <span className="font-bold text-sm text-gray-300">Hone ST Solutions</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
