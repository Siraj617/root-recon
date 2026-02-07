"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2, ArrowRight, Globe, Server, Smartphone, Cloud } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
    {
        title: "Web App Security",
        icon: Globe,
        href: "/solutions/web-security",
        desc: "OWASP Top 10 & beyond",
        features: ["OWASP Top 10", "Business Logic", "Auth Testing", "Session Mgmt"],
        image: "https://www.shutterstock.com/image-vector/cyber-security-levels-knob-button-600nw-2508942001.jpg",
    },
    {
        title: "API Security",
        icon: Server,
        href: "/solutions/api-security",
        desc: "REST, GraphQL & gRPC",
        features: ["BOLA/BFLA", "Rate Limiting", "Token Security", "Data Exposure"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXh6f5EQNCvTpknRA8YAt6CE0LjQbx1tThsg&s",
    },
    {
        title: "Mobile Security",
        icon: Smartphone,
        href: "/solutions/mobile-security",
        desc: "iOS & Android testing",
        features: ["Static Analysis", "Dynamic Testing", "Reverse Eng", "API Sec"],
        image: "https://valencynetworks.com/wp-content/uploads/2025/10/mobile-app-vat-companies.jpg",
    },
    {
        title: "Cloud Security",
        icon: Cloud,
        href: "/solutions/cloud-security",
        desc: "AWS, Azure & GCP",
        features: ["IAM Risks", "Exposed Services", "Misconfigurations", "Compliance"],
        image: "https://www.eescorporation.com/wp-content/uploads/2021/05/2.jpg",
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
                            className="bg-black rounded-2xl p-5 border border-zinc-800 shadow-sm hover:shadow-lg transition-all group flex flex-col h-full"
                        >
                            {/* Image */}
                            <div className="relative w-full h-40 rounded-xl overflow-hidden bg-zinc-900 mb-4">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    unoptimized
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
