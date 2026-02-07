"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2, Search, Shield, FileText, RefreshCw, Target, Lock, Zap } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Reconnaissance",
        desc: "Map attack surface"
    },
    {
        icon: Target,
        title: "Threat Modeling",
        desc: "Identify abuse scenarios"
    },
    {
        icon: Zap,
        title: "Exploitation",
        desc: "Validate real impact"
    },
    {
        icon: FileText,
        title: "Reporting",
        desc: "Remediation guidance"
    },
    {
        icon: RefreshCw,
        title: "Validation",
        desc: "Verify fixes"
    },
    {
        icon: Shield,
        title: "Hardening",
        desc: "Strengthen defenses"
    },
];

const compliance = [
    { name: "PCI DSS", desc: "Secure payment card processing and protect cardholder data from breaches and fraud.", icon: Shield, color: "#8b5cf6", colorEnd: "#a78bfa" },
    { name: "ISO 27001", desc: "Establish and maintain a robust information security management system (ISMS).", icon: Lock, color: "#3b82f6", colorEnd: "#60a5fa" },
    { name: "SOC 2", desc: "Demonstrate trust through security, availability, and confidentiality controls.", icon: CheckCircle2, color: "#06b6d4", colorEnd: "#22d3ee" },
    { name: "GDPR", desc: "Ensure EU data privacy rights and lawful processing of personal information.", icon: FileText, color: "#10b981", colorEnd: "#34d399" },
];

export function Methodology() {
    return (
        <section id="methodology" className="py-24 bg-slate-50 overflow-hidden">
            <div className="container px-4 mx-auto">
                <SectionHeading
                    title="Our Methodology"
                    subtitle="A battle-tested approach mirroring real attack campaigns."
                />

                {/* Desktop: Horizontal Timeline */}
                <div className="hidden lg:block relative max-w-5xl mx-auto mb-24 pt-8">
                    {/* Line Container */}
                    <div className="absolute top-16 left-[8%] right-[8%] h-1 z-0">
                        <div className="absolute inset-0 bg-slate-200 rounded-full" />
                        <motion.div
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-black to-black rounded-full"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.5, ease: "easeOut" }}
                        />
                    </div>

                    <div className="relative grid grid-cols-6 gap-4 z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex flex-col items-center">
                                <motion.div
                                    className="relative"
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                        delay: index * 0.2
                                    }}
                                >
                                    <div className="w-14 h-14 rounded-full bg-white border-4 border-black flex items-center justify-center shadow-lg">
                                        <step.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center shadow-md">
                                        {index + 1}
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="mt-4 text-center"
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                                >
                                    <h3 className="text-xs font-bold text-slate-900">{step.title}</h3>
                                    <p className="text-slate-500 text-[10px] mt-0.5">{step.desc}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile: Vertical Timeline */}
                <div className="lg:hidden relative max-w-md mx-auto mb-16">
                    {/* Vertical Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200">
                        <motion.div
                            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-blue-500 to-blue-600"
                            initial={{ height: "0%" }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeOut" }}
                        />
                    </div>

                    <div className="relative space-y-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="relative flex items-start gap-4 pl-14"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                {/* Circle with Icon */}
                                <div className="absolute left-0 w-12 h-12 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center shadow-lg">
                                    <step.icon className="w-5 h-5 text-blue-600" />
                                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-black text-white text-[10px] font-bold flex items-center justify-center shadow-md">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 bg-white rounded-xl p-4 shadow-md border border-slate-100">
                                    <h3 className="font-bold text-slate-900">{step.title}</h3>
                                    <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Compliance - Enhanced */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="overflow-hidden relative">
                        {/* Background Decorations */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            <motion.div
                                className="text-center mb-10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 className="text-2xl font-bold mb-3 text-slate-900">Compliance & Audit Support</h3>
                                <p className="text-slate-600 max-w-2xl mx-auto">
                                    Our assessments help you achieve and maintain compliance with industry standards.
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {compliance.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="group relative bg-white rounded-2xl p-6 shadow-lg border border-slate-100 overflow-hidden cursor-pointer"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 20,
                                            delay: index * 0.1
                                        }}
                                        whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                                    >
                                        {/* Gradient accent bar */}
                                        <div
                                            className="absolute top-0 left-0 right-0 h-1"
                                            style={{
                                                background: `linear-gradient(90deg, ${item.color}, ${item.colorEnd || item.color})`
                                            }}
                                        />

                                        {/* Icon container */}
                                        <div
                                            className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                                            style={{
                                                background: `linear-gradient(135deg, ${item.color}15, ${item.color}25)`
                                            }}
                                        >
                                            <item.icon className="w-7 h-7" style={{ color: item.color }} />
                                        </div>

                                        {/* Content */}
                                        <h4 className="font-bold text-lg text-slate-900 mb-2">{item.name}</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>

                                        {/* Checkmark badge */}
                                        <div className="absolute top-4 right-4">
                                            <CheckCircle2 size={20} className="text-green-500" />
                                        </div>

                                        {/* Hover glow effect */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                            style={{
                                                background: `radial-gradient(circle at 50% 0%, ${item.color}10, transparent 70%)`
                                            }}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
