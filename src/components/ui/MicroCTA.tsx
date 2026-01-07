"use client";

import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";

type MicroCTAProps = {
    text: string;
    href?: string;
    variant: 'download' | 'connect' | 'quote';
    className?: string;
};

export default function MicroCTA({ text, href = "/contact", variant, className = "" }: MicroCTAProps) {
    if (variant === 'download') {
        return (
            <Link
                href={href}
                className={`inline-flex items-center gap-2 px-8 py-3 border border-white/20 bg-white/5 backdrop-blur-sm rounded-full font-bold text-white hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 w-fit cursor-pointer ${className}`}
            >
                <Download className="w-4 h-4 text-primary" />
                <span>{text}</span>
            </Link>
        );
    }

    if (variant === 'quote') {
        return (
            <Link
                href={href}
                className={`inline-flex items-center gap-2 px-10 py-4 bg-primary rounded-full font-bold text-white hover:bg-white hover:text-primary hover:-translate-y-1 transition-all duration-300 w-fit cursor-pointer shadow-lg hover:shadow-primary/50 ${className}`}
            >
                <span>{text}</span>
                <ArrowRight className="w-4 h-4" />
            </Link>
        );
    }

    return (
        <Link
            href={href}
            className={`inline-flex items-center gap-2 px-10 py-4 bg-primary rounded-full font-bold text-white hover:bg-white hover:text-slate-900 hover:-translate-y-1 transition-all duration-300 w-fit cursor-pointer ${className}`}
        >
            <span>{text}</span>
            <ArrowRight className="w-4 h-4" />
        </Link>
    );
}
