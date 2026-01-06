"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

// Simple utility if @/lib/utils doesn't exist yet, I will create it or valid inline. 
// Standard Next.js+Tailwind setup often has clsx/tailwind-merge. 
// I'll assume standard clean setup and avoid complex utils if not sure, 
// but user installed clsx tailwind-merge. I'll create a simple utils file first or inline it.
// I'll inline the class merging for safety in this file or creating utils first is better.

export default function SectionWrapper({ children, className, delay = 0 }: SectionWrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay }}
            viewport={{ once: true, margin: "-50px" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
