"use client";

import { ArrowRight, Shield, Lock, Target, Network, Globe, Smartphone, Server, Wifi } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const capabilities = [
    {
        name: "Web Application Pentesting",
        desc: "We dig deep into your web app — testing auth flows, business logic, input handling, and session management. Every finding is validated with real exploitation, not assumptions.",
        icon: Globe,
        href: "/solutions/web-security",
        number: "01",
    },
    {
        name: "Android Application Pentesting",
        desc: "From insecure storage to SSL pinning bypass, we reverse-engineer your Android app and test it on real devices. Runtime hooking, API chaining, and root detection bypass included.",
        icon: Smartphone,
        href: "/solutions/mobile-security",
        number: "02",
    },
    {
        name: "API Pentesting",
        desc: "We test your APIs independently and through clients — hunting for BOLA, BFLA, broken auth, and logic flaws. Every endpoint is tested for what attackers can access, modify, or destroy.",
        icon: Server,
        href: "/solutions/api-security",
        number: "03",
    },
    {
        name: "Network Pentesting",
        desc: "We simulate real attackers targeting your network — from external perimeter breaches to internal lateral movement. Credential harvesting, privilege escalation, and full attack path mapping.",
        icon: Wifi,
        href: "/solutions/penetration-testing",
        number: "04",
    },
];

export function About() {
    return (
        <section id="about" className="py-24 bg-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-5 px-4 py-1.5 bg-red-600/10 text-red-500 border border-red-500/20 rounded-full text-sm font-semibold tracking-wide uppercase"
                    >
                        Who We Are
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6"
                    >
                        Think Like an{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                            Attacker
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        RootRecon is an offensive security company delivering advanced penetration testing
                        and vulnerability assessment services. We simulate real-world attacks to protect your business.
                    </motion.p>
                </div>

                {/* Service Cards - Premium Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[90rem] mx-auto mb-20">
                    {capabilities.map((capability, index) => {
                        const IconComponent = capability.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Link href={capability.href}>
                                    <div className="group relative bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-red-500/40 transition-all duration-500 cursor-pointer overflow-hidden h-full">
                                        {/* Hover Glow */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-900/0 group-hover:from-red-600/5 group-hover:to-red-900/10 transition-all duration-500 rounded-2xl" />

                                        {/* Number */}
                                        <div className="absolute top-6 right-6 text-5xl font-black text-slate-700/30 group-hover:text-red-500/20 transition-colors duration-500">
                                            {capability.number}
                                        </div>

                                        <div className="relative z-10">
                                            {/* Icon */}
                                            <div className="w-14 h-14 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center mb-6 group-hover:bg-red-600/20 group-hover:border-red-500/40 transition-all duration-500">
                                                <IconComponent className="w-7 h-7 text-red-500" />
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-50 transition-colors">
                                                {capability.name}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                                                {capability.desc}
                                            </p>

                                            {/* Link */}
                                            <div className="flex items-center gap-2 text-red-500 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-neutral-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-10 max-w-5xl mx-auto"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Deep Insight", desc: "Chain vulnerabilities for real impact", icon: Target },
                            { label: "Zero Blind Spots", desc: "Find what scanners miss", icon: Shield },
                            { label: "Real Impact", desc: "Exploitation-focused testing", icon: Network },
                            { label: "Actionable Reports", desc: "Clear remediation guidance", icon: Lock },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="w-12 h-12 rounded-full bg-red-900/20 flex items-center justify-center mx-auto mb-3">
                                    <stat.icon className="w-5 h-5 text-red-500" />
                                </div>
                                <h4 className="font-bold text-white text-lg mb-1">{stat.label}</h4>
                                <p className="text-sm text-slate-500">{stat.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-700/50 text-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full shadow-lg shadow-red-600/20 group transition-all duration-300"
                        >
                            Explore Our Services
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
