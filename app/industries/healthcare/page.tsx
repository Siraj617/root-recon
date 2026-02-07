"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Contact } from "@/components/sections/Contact";
import { Button } from "@/components/ui/Button";
import {
    Shield, Target, Users, Zap, Globe, Smartphone, Server, Cloud,
    CheckCircle2, FileText, Lock, Eye, Heart, Activity, Stethoscope, Database,
    ArrowRight, AlertTriangle, Wifi, Tablet, HardDrive, Video
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const solutionsMapping = [
    {
        problem: "IoMT Device Vulnerabilities",
        desc: "Unsecured medical devices (pacemakers, pumps) acting as entry points.",
        solution: "IoT & Medical Device Security",
        icon: Activity,
    },
    {
        problem: "Ransomware Targeting Hospitals",
        desc: "Attacks encrypting patient data and halting critical care operations.",
        solution: "Red Teaming & Ransomware Sim",
        icon: Lock,
    },
    {
        problem: "Network Segmentation Gaps",
        desc: "Clinical networks exposed to guest Wi-Fi or administrative LANs.",
        solution: "Network Penetration Testing",
        icon: Wifi,
    },
    {
        problem: "EHR Access Control Flaws",
        desc: "Unauthorized staff accessing sensitive patient records (PHI).",
        solution: "Web App Security & RBAC Testing",
        icon: Database,
    },
    {
        problem: "Telehealth Privacy",
        desc: "Interception of video/audio streams in consultation apps.",
        solution: "WebRTC Security",
        icon: Video,
    },
    {
        problem: "Legacy System Hardening",
        desc: "Protecting unpatchable Windows XP/7 machines.",
        solution: "Network Segmentation",
        icon: HardDrive,
    },
];

import { HeroAnimation } from "@/components/sections/HeroAnimation";

const healthcareItems = [
    { icon: Heart, label: "Patient", x: -220, y: -100 },
    { icon: Activity, label: "IoMT", x: 220, y: -100 },
    { icon: Tablet, label: "Telehealth", x: -220, y: 100 },
    { icon: Wifi, label: "Connected", x: 220, y: 100 },
    { icon: Database, label: "EHR", x: 0, y: -180 },
    { icon: Lock, label: "PHI", x: -120, y: 180 },
    { icon: Shield, label: "Compliance", x: 120, y: 180 },
    { icon: Server, label: "PACS", x: -300, y: 0 },
    { icon: Stethoscope, label: "Care", x: 300, y: 0 },
];

export default function HealthcarePage() {
    return (
        <main className="min-h-screen font-sans bg-white">
            <Header />

            {/* Hero Section: Patient Safety */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-slate-50">
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
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-6">
                                    <Heart size={12} className="fill-blue-800" /> Healthcare Security
                                </div>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                                    Protecting Data. <br />
                                    <span className="text-blue-600">Saving Lives.</span>
                                </h1>
                                <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                                    In healthcare, cybersecurity isn't just about data privacy—it's about patient safety. We secure the connected medical devices and systems that care for your patients.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/contact">
                                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold rounded-lg shadow-lg shadow-blue-600/20">
                                            Secure Your Hospital
                                        </Button>
                                    </Link>
                                    <Link href="#solutions">
                                        <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-4 text-lg font-bold rounded-lg">
                                            View Solutions
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                        <div className="hidden lg:block h-[600px] w-full">
                            <HeroAnimation items={healthcareItems} />
                        </div>
                    </div>
                </div>
            </section>

            {/* The Challenge: IoMT Risks */}
            <section className="py-24 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                The Hospital is Now <br />
                                <span className="text-blue-600">A Digital Network.</span>
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                From infusion pumps to MRI machines, every device is connected. A vulnerability in a pacemaker monitor isn't just an IT ticket—it's a clinical risk.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "IoMT Device Vulnerabilities",
                                    "Legacy Systems (Windows 7/XP)",
                                    "Ransomware Targeting Hospitals",
                                    "Telehealth API Leaks"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                        <Activity size={20} className="text-blue-500 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Visual: Connected Hospital - Blue Theme */}
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur opacity-20"></div>
                            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                                <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                            <Wifi size={20} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900">Infusion Pump #402</div>
                                            <div className="text-xs text-slate-500">Firmware v2.1 (Outdated)</div>
                                        </div>
                                    </div>
                                    <div className="px-3 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full">CRITICAL</div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
                                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                        <div className="text-sm text-slate-700">Hardcoded Admin Credentials</div>
                                    </div>
                                    <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
                                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                        <div className="text-sm text-slate-700">Unencrypted Command Protocol</div>
                                    </div>
                                    <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                        <div className="text-sm text-slate-700">Open Telnet Port (23)</div>
                                    </div>
                                </div>
                                <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                                    <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm">
                                        <Shield size={16} /> RootRecon IoMT Audit
                                    </div>
                                </div>
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
                            Clinical-Grade <span className="text-blue-600">Cybersecurity</span>
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            We understand the unique constraints of healthcare. We test your systems without disrupting patient care.
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

            {/* How RootRecon Helps: Patient-First Security */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            The <span className="text-blue-600">Patient-First</span> Methodology
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Our testing protocols are designed to ensure zero disruption to clinical workflows and patient safety.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 relative overflow-hidden group hover:border-blue-300 transition-colors">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Activity size={80} className="text-blue-600" />
                            </div>
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-6 font-bold text-xl">1</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Non-Intrusive Testing</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We use passive scanning and mirrored traffic analysis for critical IoMT devices to avoid downtime.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 relative overflow-hidden group hover:border-blue-300 transition-colors">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Lock size={80} className="text-blue-600" />
                            </div>
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-6 font-bold text-xl">2</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Legacy Hardening</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We identify compensating controls and segmentation strategies for unpatchable legacy systems.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 relative overflow-hidden group hover:border-blue-300 transition-colors">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <FileText size={80} className="text-blue-600" />
                            </div>
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-6 font-bold text-xl">3</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">HIPAA Mapping</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Every vulnerability we find is mapped directly to HIPAA Security Rule requirements for your compliance team.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* HIPAA Compliance */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                HIPAA & HITECH <br />
                                <span className="text-blue-400">Compliance Simplified.</span>
                            </h2>
                            <p className="text-slate-300 text-lg mb-8">
                                Our reports provide the technical evidence you need to demonstrate compliance with the HIPAA Security Rule. We map every finding to specific physical and technical safeguards.
                            </p>
                            <Link href="/contact">
                                <Button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 text-lg font-bold rounded-lg shadow-lg shadow-blue-600/20">
                                    Get a Sample Report
                                </Button>
                            </Link>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-2 gap-4">
                            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                                <div className="text-3xl font-bold text-white mb-2">100%</div>
                                <div className="text-blue-300 text-sm">BAA Coverage</div>
                            </div>
                            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                                <div className="text-3xl font-bold text-white mb-2">Zero</div>
                                <div className="text-blue-300 text-sm">PHI Retention</div>
                            </div>
                            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 col-span-2">
                                <div className="flex items-center gap-3 mb-2">
                                    <FileText className="text-blue-400" />
                                    <span className="font-bold">Audit-Ready Documentation</span>
                                </div>
                                <p className="text-blue-200 text-sm">
                                    Detailed remediation plans for your IT team and executive summaries for your auditors.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
