"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
    align?: "left" | "center";
}

export function SectionHeading({
    title,
    subtitle,
    className,
    align = "center",
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-4 mb-16",
                align === "center" ? "items-center text-center" : "items-start text-left",
                className
            )}
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="max-w-2xl text-lg text-slate-600"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}
