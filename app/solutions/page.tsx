"use client";

import { Header } from "@/components/layout/Header";
import { Contact } from "@/components/sections/Contact";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Methodology } from "@/components/sections/Methodology";
import { Globe, Server, Smartphone, Cloud, ShieldCheck, Code, Crosshair, Building, DollarSign, Cpu, Heart, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Web Application Penetration Testing",
        slug: "web-security",
        icon: Globe,
        desc: "Expose what attackers can really do to your web app. We perform deep manual testing to uncover vulnerabilities that automated tools completely miss.",
        features: ["Auth & Session Flaws", "Business Logic Abuse", "Injection & XSS", "Account Takeover"],
    },
    {
        title: "Android Application Penetration Testing",
        slug: "mobile-security",
        icon: Smartphone,
        desc: "Secure your mobile app against reverse engineering & runtime attacks. Deep Android application security testing beyond surface-level checks.",
        features: ["Static & Dynamic Analysis", "SSL Pinning Bypass", "Reverse Engineering", "Mobile-to-API Chaining"],
    },
    {
        title: "API Penetration Testing",
        slug: "api-security",
        icon: Server,
        desc: "Stop attackers from abusing your APIs silently. We specialize in deep API security testing aligned with real attacker behavior.",
        features: ["BOLA/BFLA", "Token Misuse", "Data Exposure", "Rate Limit Abuse"],
    },
    {
        title: "Network Penetration Testing",
        slug: "penetration-testing",
        icon: ShieldCheck,
        desc: "Know how far an attacker can go inside your network. We simulate real attackers to identify how your network can be breached and abused.",
        features: ["External Exposure", "Lateral Movement", "Privilege Escalation", "Credential Harvesting"],
    },
];

const industries = [
    { title: "Fintech", icon: DollarSign, desc: "Secure payment systems, trading platforms, and financial data with PCI DSS compliant testing." },
    { title: "AI/ML", icon: Cpu, desc: "Protect AI systems, training data, and ML pipelines from adversarial attacks and data poisoning." },
    { title: "SaaS", icon: Building, desc: "Achieve SOC 2 and ISO 27001 compliance with comprehensive security assessments for your platform." },
    { title: "Healthcare", icon: Heart, desc: "HIPAA-compliant security testing for patient data, medical devices, and healthcare applications." },
];

export default function SolutionsPage() {
    return (
        <main className="min-h-screen font-sans">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
                <div className="container px-4 mx-auto text-center">
                    <span className="px-4 py-1.5 rounded-full bg-red-100 text-red-700 text-sm font-bold tracking-wide uppercase mb-6 inline-block">
                        Our Solutions
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Offensive Security Services <br />
                        <span className="text-transparent bg-clip-text">
                            Designed to Fortify Your Security
                        </span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Comprehensive security testing by experts who think like attackers and secure like defenders. We uncover vulnerabilities that automated tools miss.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="container px-4 mx-auto">
                    <SectionHeading title="Security Services" subtitle="Tailored testing for every layer of your technology stack." />
                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {services.map((service, index) => (
                            <div key={index} className="group bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-xl hover:border-red-200 transition-all flex flex-col">
                                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 mb-4 group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
                                    <service.icon size={24} />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
                                <p className="text-sm text-slate-600 mb-4 flex-1">{service.desc}</p>
                                <div className="space-y-1 mb-4">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
                                            <CheckCircle2 size={12} className="text-red-600" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link href={`/solutions/${service.slug}`} className="text-red-600 text-sm font-semibold flex items-center hover:gap-1 transition-all">
                                    Learn More <ArrowRight size={14} className="ml-1" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-24 bg-slate-50">
                <div className="container px-4 mx-auto">
                    <SectionHeading title="Industry Solutions" subtitle="Specialized expertise for your sector with compliance-ready deliverables." />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {industries.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600 mb-4">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Methodology />
            <Contact />
        </main>
    );
}
