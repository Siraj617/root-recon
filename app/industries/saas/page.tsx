"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Contact } from "@/components/sections/Contact";
import { Button } from "@/components/ui/Button";
import {
    Shield, Target, Users, Zap, Globe, Smartphone, Server, Cloud,
    CheckCircle2, FileText, Lock, Database, Layout, Key, Code,
    ArrowRight, Briefcase, FileCheck, Layers, BarChart, Box, GitBranch
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const solutionsMapping = [
    {
        problem: "Tenant Isolation Breaches",
        desc: "One customer accessing another's data via IDOR or logic flaws.",
        solution: "Advanced Web App Pentesting",
        icon: Database,
    },
    {
        problem: "Cloud Misconfigurations",
        desc: "Exposed S3 buckets, open security groups, or weak IAM roles.",
        solution: "Cloud Security Review (AWS/Azure)",
        icon: Cloud,
    },
    {
        problem: "Broken Access Controls (RBAC)",
        desc: "Privilege escalation allowing regular users to access admin functions.",
        solution: "Role-Based Access Testing",
        icon: Key,
    },
    {
        problem: "API Vulnerabilities",
        desc: "BOLA/BFLA vulnerabilities in REST or GraphQL endpoints.",
        solution: "API Security Testing",
        icon: Server,
    },
    {
        problem: "Container Breakouts",
        desc: "Escaping Docker/Kubernetes isolation to access host.",
        solution: "Container Security",
        icon: Box,
    },
    {
        problem: "CI/CD Pipeline Risks",
        desc: "Insecure build pipelines injecting malicious code.",
        solution: "DevSecOps Hardening",
        icon: GitBranch,
    },
];

import { HeroAnimation } from "@/components/sections/HeroAnimation";

const saasItems = [
    { icon: Users, label: "Tenants", x: -220, y: -100 },
    { icon: Cloud, label: "AWS/Azure", x: 220, y: -100 },
    { icon: Key, label: "SSO/RBAC", x: -220, y: 100 },
    { icon: Database, label: "Data Isolation", x: 220, y: 100 },
    { icon: Globe, label: "CDN", x: 0, y: -180 },
    { icon: Server, label: "API", x: -120, y: 180 },
    { icon: Shield, label: "WAF", x: 120, y: 180 },
    { icon: FileCheck, label: "Compliance", x: -300, y: 0 },
    { icon: Layers, label: "Microservices", x: 300, y: 0 },
];

export default function SaaSPage() {
    return (
        <main className="min-h-screen font-sans bg-white">
            <Header />

            {/* Hero Section: Enterprise Scale */}
            <section className="pt-32 pb-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                                <Cloud size={12} /> SaaS Security
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                                Enterprise Trust <br />
                                <span className="text-blue-600">At Scale.</span>
                            </h1>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                Stop getting blocked by Vendor Security Reviews. We provide the penetration testing and compliance reports you need to close enterprise deals faster.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact">
                                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold rounded-lg shadow-lg shadow-blue-600/20">
                                        Get Audit Ready
                                    </Button>
                                </Link>
                                <Link href="#solutions">
                                    <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-white px-8 py-4 text-lg font-bold rounded-lg">
                                        View Solutions
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="hidden lg:block h-[600px] w-full relative">
                            <HeroAnimation items={saasItems} />
                        </div>
                    </div>
                </div>
            </section>

            {/* The Challenge: Vendor Risk */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Security is the New <br />
                                <span className="text-blue-600">Sales Blocker.</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Your enterprise customers demand proof of security. A generic automated scan won't satisfy a Fortune 500 CISO. You need a deep-dive manual pentest report to pass Vendor Risk Assessments.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Tenant Isolation Breaches (IDOR)",
                                    "Cloud Misconfigurations (AWS/Azure)",
                                    "Broken Access Control (RBAC)",
                                    "Supply Chain Vulnerabilities"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                        <Briefcase size={20} className="text-blue-500 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Common Deal Blockers</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                                    <span className="font-medium text-slate-700">Lack of SOC 2 Type II</span>
                                    <span className="text-red-500 font-bold">Blocked</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                                    <span className="font-medium text-slate-700">Old Pentest Report (&gt;1 year)</span>
                                    <span className="text-red-500 font-bold">Blocked</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                                    <span className="font-medium text-slate-700">Unresolved Critical Bugs</span>
                                    <span className="text-red-500 font-bold">Blocked</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-100 shadow-sm">
                                    <span className="font-medium text-blue-900">RootRecon Certified</span>
                                    <span className="text-green-600 font-bold flex items-center gap-2"><CheckCircle2 size={16} /> Approved</span>
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
                            Security That <span className="text-blue-600">Scales With You</span>
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            From startup to IPO, we provide the security testing you need to grow without risk.
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

            {/* How RootRecon Helps: Continuous Compliance Engine */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            The <span className="text-blue-600">Continuous Compliance</span> Engine
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            We automate the evidence collection and security testing required for SOC 2 and ISO 27001.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 relative overflow-hidden group hover:border-blue-300 transition-colors">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Layers size={80} className="text-blue-600" />
                            </div>
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-6 font-bold text-xl">1</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Asset Discovery</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We map your entire attack surface, including forgotten subdomains and shadow IT assets.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 relative overflow-hidden group hover:border-blue-300 transition-colors">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <FileCheck size={80} className="text-blue-600" />
                            </div>
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-6 font-bold text-xl">2</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Automated Testing</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Our PTaaS platform runs daily scans to catch new vulnerabilities as soon as code is deployed.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 relative overflow-hidden group hover:border-blue-300 transition-colors">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <BarChart size={80} className="text-blue-600" />
                            </div>
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-6 font-bold text-xl">3</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Audit Reporting</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We generate auditor-ready reports that map findings directly to SOC 2 and ISO 27001 controls.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-blue-600">
                <div className="container px-4 mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to scale securely?
                    </h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Get the security certification you need to unlock enterprise revenue.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact">
                            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-bold rounded-lg shadow-lg">
                                Book a Discovery Call
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
