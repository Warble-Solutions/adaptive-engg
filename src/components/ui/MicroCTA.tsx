"use client";

import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";

type MicroCTAProps = {
    text: string;
    href?: string;
    variant: 'download' | 'connect' | 'quote';
    context?: 'light' | 'dark';
    className?: string;
};

export default function MicroCTA({ text, href = "/contact", variant, context = 'dark', className = "" }: MicroCTAProps) {
    // Standard Hover Styles based on Context
    const hoverStyles = context === 'light'
        ? "hover:bg-slate-900 hover:text-white" // Light Context -> Dark Hover
        : "hover:bg-white hover:text-slate-900"; // Dark Context -> Light Hover

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
                className={`inline-flex items-center gap-2 px-10 py-4 bg-primary rounded-full font-bold text-white ${hoverStyles} hover:-translate-y-1 transition-all duration-300 w-fit cursor-pointer shadow-lg hover:shadow-primary/50 ${className}`}
            >
                <span>{text}</span>
                <ArrowRight className="w-4 h-4" />
            </Link>
        );
    }

    return (
        <Link
            href={href}
            className={`inline-flex items-center gap-2 px-10 py-4 bg-primary rounded-full font-bold text-white ${hoverStyles} hover:-translate-y-1 transition-all duration-300 w-fit cursor-pointer ${className}`}
        >
            <span>{text}</span>
            <ArrowRight className="w-4 h-4" />
        </Link>
    );
}
