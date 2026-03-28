"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2, ArrowRight, Globe, Server, Smartphone, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
    {
        title: "Web Application Penetration Testing",
        icon: Globe,
        href: "/solutions/web-security",
        desc: "Expose what attackers can really do to your web app",
        features: ["Auth & Session Flaws", "Business Logic Abuse", "Injection & XSS", "Account Takeover"],
        image: "/web-security-card.png",
    },
    {
        title: "Android Application Penetration Testing",
        icon: Smartphone,
        href: "/solutions/mobile-security",
        desc: "Secure your mobile app against reverse engineering & runtime attacks",
        features: ["Static & Dynamic Analysis", "SSL Pinning Bypass", "Reverse Engineering", "API Chaining"],
        image: "/mobile-security-card.png",
    },
    {
        title: "API Penetration Testing",
        icon: Server,
        href: "/solutions/api-security",
        desc: "Stop attackers from abusing your APIs silently",
        features: ["BOLA/BFLA", "Token Misuse", "Data Exposure", "Rate Limit Abuse"],
        image: "/api-security-card.png",
    },
    {
        title: "Network Penetration Testing",
        icon: Shield,
        href: "/solutions/penetration-testing",
        desc: "Know how far an attacker can go inside your network",
        features: ["External Exposure", "Lateral Movement", "Privilege Escalation", "Credential Harvesting"],
        image: "/cloud-security-card.png",
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-black">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                        Services Designed to{" "}
                        <span className="text-red-600">Fortify Your Security</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Link
                            href={service.href}
                            key={index}
                            className="bg-black rounded-2xl p-5 border border-slate-700 shadow-sm hover:shadow-lg transition-all group flex flex-col h-full"
                        >
                            {/* Image */}
                            <div className="relative w-full h-40 rounded-xl overflow-hidden bg-zinc-900 mb-4">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-lg bg-red-900/20 flex items-center justify-center text-red-500 group-hover:bg-red-900/30 transition-colors">
                                    <service.icon size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                            </div>

                            <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                                {service.desc}
                            </p>

                            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-4">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-1.5">
                                        <CheckCircle2 size={12} className="text-red-500/80 flex-shrink-0" />
                                        <span className="text-xs text-slate-400">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
