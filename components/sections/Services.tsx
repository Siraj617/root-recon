"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2, ArrowRight, Globe, Server, Smartphone, ShieldCheck, Crosshair, Code } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
    {
        title: "Pentest as a Service",
        icon: ShieldCheck,
        href: "/solutions/ptaas",
        desc: "Comprehensive manual security assessments to uncover critical vulnerabilities in your applications.",
        features: ["Web Apps", "Mobile Apps", "APIs", "Networks"],
        image: "https://certera.com/blog/wp-content/uploads/2023/04/web-application-penetration-testing-jpg.webp",
    },
    {
        title: "Cloud & infrastructure security",
        icon: Crosshair,
        href: "/solutions/cloud-security",
        desc: "Cloud security issues grow fast when left unseen. We identify IAM risks, exposed services, and lateral movement paths to reduce blast radius and prevent serious breaches.",
        features: ["IAM Risks", "Exposed Services", "Lateral Movement", "Defense Evasion"],
        image: "https://artificesecurity.com/wp-content/uploads/2023/03/RED-TEAM-main-SM.jpg",
    },
    {
        title: "Code Review",
        icon: Code,
        href: "/solutions/code-review",
        desc: "Continuous security program with code review, DevSecOps, and vulnerability management.",
        features: ["Code Review", "DevSecOps", "Vuln Management", "Continuous Testing"],
        image: "https://www.adtran.com/-/media/adtran/about-us/meta-images/82-productsecurity.jpg?rev=db10a52509db4a74aea1d6553bfb7167&hash=C6DE32BAE925B10AE03EE5643EDEAA89",
    },
    {
        title: "Web App Security",
        icon: Globe,
        href: "/solutions/web-security",
        desc: "OWASP Top 10 coverage with business logic and authentication testing.",
        features: ["OWASP Top 10", "Business Logic", "Auth Bypass", "Session Mgmt"],
        image: "https://3852769.fs1.hubspotusercontent-na1.net/hubfs/3852769/Way%20to%20Improve%20Web%20Application%20Security.jpg",
    },
    {
        title: "API Security Testing",
        icon: Server,
        href: "/solutions/api-security",
        desc: "Deep assessments for REST, GraphQL, and SOAP APIs.",
        features: ["BOLA/BFLA", "Rate Limiting", "Token Security", "Data Exposure"],
        image: "https://cdn.prod.website-files.com/5ff66329429d880392f6cba2/6455e369e4efcfed355a9152_655%20Preview.jpg",
    },
    {
        title: "Mobile App Security",
        icon: Smartphone,
        href: "/solutions/mobile-security",
        desc: "Android and iOS testing with static analysis and reverse engineering.",
        features: ["Static Analysis", "Dynamic Testing", "Reverse Engineering", "API Security"],
        image: "https://nix-united.com/wp-content/uploads/2020/12/MobAppSecur_graphics_02.jpg",
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-gradient-to-b from-white to-slate-50">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
                        Services Designed to{" "}
                        <span className="text-blue-600">Fortify Your Security</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Link
                            href={service.href}
                            key={index}
                            className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-lg transition-all group flex flex-col h-full"
                        >
                            {/* Image */}
                            <div className="relative w-full h-40 rounded-xl overflow-hidden bg-slate-50 mb-4">
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
                                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition-colors">
                                    <service.icon size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                            </div>

                            <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                                {service.desc}
                            </p>

                            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-4">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-1.5">
                                        <CheckCircle2 size={12} className="text-green-600 flex-shrink-0" />
                                        <span className="text-xs text-slate-600">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                                Learn More <ArrowRight size={16} className="ml-1" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
