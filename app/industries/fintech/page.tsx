"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Contact } from "@/components/sections/Contact";
import { Button } from "@/components/ui/Button";
import {
    Shield, Target, Users, Zap, Globe, Smartphone, Server, Cloud,
    CheckCircle2, FileText, Lock, DollarSign, CreditCard, Building,
    ArrowRight, AlertTriangle, TrendingUp, Activity, PieChart, Layers, Star,
    Database, Code, Terminal, UserCheck, Cpu
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const complianceStandards = [
    { name: "PCI-DSS 4.0", desc: "Payment Card Industry Data Security Standard", icon: CreditCard },
    { name: "SOC 2 Type II", desc: "Service Organization Control", icon: FileText },
    { name: "RBI / SEBI", desc: "Indian Financial Regulations", icon: Building },
    { name: "GDPR / DPDP", desc: "Data Privacy & Protection", icon: Lock },
    { name: "ISO 27001", desc: "Information Security Management", icon: Shield },
];

const solutionsMapping = [
    {
        problem: "Logic Flaws in Payment Gateways",
        desc: "Attackers manipulating price parameters or currency codes to bypass payment logic.",
        solution: "API Security Testing",
        icon: Server,
    },
    {
        problem: "Mobile Wallet Vulnerabilities",
        desc: "Insecure storage of keys or weak biometric authentication in trading apps.",
        solution: "Mobile App Security (iOS/Android)",
        icon: Smartphone,
    },
    {
        problem: "Race Conditions in Ledgers",
        desc: "Simultaneous transactions exploiting concurrency to double-spend funds.",
        solution: "Advanced Logic Testing",
        icon: Code,
    },
    {
        problem: "Cloud Infrastructure Leaks",
        desc: "Misconfigured S3 buckets or IAM roles exposing sensitive financial data.",
        solution: "Cloud Security Review",
        icon: Cloud,
    },
    {
        problem: "Insider Threat Simulation",
        desc: "Malicious employee attempting to exfiltrate customer PII.",
        solution: "Red Teaming",
        icon: UserCheck,
    },
    {
        problem: "ATM/POS Security",
        desc: "Hardware attacks on physical payment terminals.",
        solution: "IoT Security",
        icon: Cpu,
    },
];

import { HeroAnimation } from "@/components/sections/HeroAnimation";

const fintechItems = [
    { icon: CreditCard, label: "Payments", x: -220, y: -100 },
    { icon: Smartphone, label: "Mobile Wallet", x: 220, y: -100 },
    { icon: Server, label: "Core Banking", x: -220, y: 100 },
    { icon: Lock, label: "Encryption", x: 220, y: 100 },
    { icon: Shield, label: "Fraud Prev", x: 0, y: -180 },
    { icon: Globe, label: "SWIFT", x: -120, y: 180 },
    { icon: Database, label: "Ledger", x: 120, y: 180 },
    { icon: Cloud, label: "Fintech Cloud", x: -300, y: 0 },
    { icon: Code, label: "Smart Contracts", x: 300, y: 0 },
];

export default function FintechPage() {
    return (
        <main className="min-h-screen font-sans bg-slate-50">
            <Header />

            {/* Hero Section: Trust & Authority */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <svg className="absolute right-0 top-0 h-full w-1/2 text-blue-500/20" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M50 0 L100 0 L100 100 L0 100 Z" fill="currentColor" />
                    </svg>
                </div>

                <div className="container px-4 mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                                    <Shield size={12} /> Fintech Security
                                </div>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                                    Secure the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Future of Finance</span>
                                </h1>
                                <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                                    In fintech, trust is your currency. We provide bank-grade security testing to protect your assets, compliance, and reputation.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/contact">
                                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-bold rounded-lg shadow-lg shadow-blue-600/20">
                                            Secure Your Platform
                                        </Button>
                                    </Link>
                                    <Link href="#solutions">
                                        <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg font-bold rounded-lg">
                                            View Solutions
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                        <div className="hidden lg:block h-[600px] w-full">
                            <HeroAnimation items={fintechItems} />
                        </div>
                    </div>
                </div>
            </section>

            {/* The Challenge: High Impact Numbers */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                When Milliseconds Matter, <br />
                                <span className="text-blue-600">Security Can't Blink.</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Fintech platforms are high-value targets. A single logic flaw in a payment gateway or a trading algorithm can lead to catastrophic financial loss in seconds. Traditional scanners miss these business-logic vulnerabilities.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Business Logic Flaws (e.g., Price Manipulation)",
                                    "Race Conditions in Transaction Processing",
                                    "Broken Access Control in Multi-Tenant SaaS",
                                    "API Parameter Tampering"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                        <AlertTriangle size={20} className="text-blue-500 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center">
                                <div className="text-4xl font-extrabold text-slate-900 mb-2">$4.2M</div>
                                <div className="text-sm text-slate-500 font-medium">Avg. Cost of a Breach</div>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center">
                                <div className="text-4xl font-extrabold text-slate-900 mb-2">24/7</div>
                                <div className="text-sm text-slate-500 font-medium">Attack Frequency</div>
                            </div>
                            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-center col-span-2 text-white">
                                <div className="text-4xl font-extrabold text-blue-500 mb-2">Zero</div>
                                <div className="text-sm text-slate-400 font-medium">Tolerance for Error</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* RootRecon Solutions Mapping */}
            <section id="solutions" className="py-24 bg-slate-50">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Tailored Security for <span className="text-blue-600">Financial Systems</span>
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            We don't just run tools. We map our offensive security services directly to the unique risks of the fintech ecosystem.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {solutionsMapping.map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <item.icon size={28} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.problem}</h3>
                                    <p className="text-slate-500 text-sm mb-4 leading-relaxed min-h-[60px]">{item.desc}</p>
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wide">
                                        <CheckCircle2 size={14} className="text-blue-600" />
                                        Solution: {item.solution}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How RootRecon Helps: The Fintech Shield */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            The <span className="text-blue-600">Fintech Shield</span> Methodology
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            We integrate directly into your SDLC to catch vulnerabilities before they hit production.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 relative overflow-hidden group hover:border-blue-300 transition-colors">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Code size={80} className="text-blue-600" />
                            </div>
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-6 font-bold text-xl">1</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Design Review</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We analyze your architecture diagrams and threat model your payment flows to identify logic flaws early.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 relative overflow-hidden group hover:border-blue-300 transition-colors">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Terminal size={80} className="text-blue-600" />
                            </div>
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-6 font-bold text-xl">2</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Deep-Dive Pentest</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Our experts manually test for race conditions, parameter tampering, and IDOR vulnerabilities that scanners miss.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 relative overflow-hidden group hover:border-blue-300 transition-colors">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Shield size={80} className="text-blue-600" />
                            </div>
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-6 font-bold text-xl">3</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Continuous Monitoring</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We provide ongoing surveillance of your external attack surface to detect new threats as they emerge.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compliance Map */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Regulatory Compliance</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Audit-Ready, <br />Every Time.
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Navigating the regulatory landscape is complex. Our reports are mapped directly to key compliance controls, saving your team weeks of audit preparation time.
                            </p>
                            <div className="flex gap-4">
                                <CheckCircle2 className="text-blue-500 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Executive Attestations</h4>
                                    <p className="text-sm text-slate-500">Formal letters for your partners and auditors.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 mt-6">
                                <Layers className="text-slate-500 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Detailed Technical Maps</h4>
                                    <p className="text-sm text-slate-500">Vulnerabilities mapped to specific PCI/SOC2 controls.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {complianceStandards.map((std, index) => (
                                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-blue-200 hover:bg-blue-50 transition-colors">
                                        <div className="bg-white p-2 rounded-lg shadow-sm text-slate-700">
                                            <std.icon size={20} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900">{std.name}</div>
                                            <div className="text-xs text-slate-500 mt-1">{std.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container px-4 mx-auto text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to secure your fintech platform?
                        </h2>
                        <p className="text-xl text-slate-400 mb-10">
                            Get a comprehensive security assessment tailored to your financial stack.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/contact">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold rounded-lg w-full sm:w-auto shadow-lg shadow-blue-600/20">
                                    Schedule a Consultation
                                </Button>
                            </Link>
                            <Link href="/pricing">
                                <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800 px-8 py-4 text-lg font-bold rounded-lg w-full sm:w-auto">
                                    View Pricing
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
