"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Contact } from "@/components/sections/Contact";
import { Button } from "@/components/ui/Button";
import {
    Layers, ArrowRight, Shield, Target, Users, Settings, Zap, Headphones,
    Globe, Smartphone, Server, Cloud, Wifi, Cpu, ChevronDown, CheckCircle2,
    FileText, RefreshCw, MessageCircle, Star, Search, Lock, Eye, Database, Code, Key, AlertTriangle
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const trustedCompanies = ["Groww", "Swiggy", "SBI Life", "IATA", "Zaggle", "MyGate", "Wati", "PolicyBazaar", "Jupiter", "Razorpay", "CRED", "PhonePe"];

const caseStudies = [
    {
        stat: "1000+",
        label: "Web Apps Tested",
        desc: "From simple marketing sites to complex SaaS platforms and fintech applications, we've secured them all.",
        icon: Globe,
    },
    {
        stat: "5000+",
        label: "Critical Vulns Found",
        desc: "Identified high-severity issues like SQL Injection, RCE, and Broken Authentication before they could be exploited.",
        icon: AlertTriangle,
    },
    {
        stat: "Zero",
        label: "False Positives",
        desc: "We verify every finding manually. You get a clean, actionable report without the noise of automated scanners, allowing your team to focus on real threats.",
        icon: CheckCircle2,
    },
    {
        stat: "100%",
        label: "Compliance Ready",
        desc: "We help you meet critical standards like SOC2, HIPAA, and PCI-DSS with detailed, audit-ready reports that satisfy auditors and stakeholders alike.",
        icon: Shield,
    },
];

const whyChooseFeatures = [
    {
        icon: Zap,
        title: "Business Logic Focus",
        desc: "Automated scanners miss logic flaws. We deep-dive into your workflows to find bugs that break business rules."
    },
    {
        icon: Code,
        title: "Tech Stack Expertise",
        desc: "Experts in React, Node.js, Python, and Go, we effectively identify and remediate stack-specific vulnerabilities."
    },
    {
        icon: Eye,
        title: "Zero False Positives",
        desc: "We manually verify every finding with a concrete PoC, ensuring your team wastes no time on noise."
    },
    {
        icon: RefreshCw,
        title: "Fast Turnaround",
        desc: "Get initial critical findings in 72 hours and a full, detailed remediation report within 1-2 weeks."
    },
    {
        icon: FileText,
        title: "Dev-Friendly Fixes",
        desc: "We provide precise code snippets and copy-paste remediation guides to accelerate your fixing process."
    },
    {
        icon: CheckCircle2,
        title: "Free Retesting",
        desc: "Complimentary retest to verify patches are effective and ensure no new regressions were introduced."
    },
];

const processSteps = [
    { icon: Search, title: "Reconnaissance", desc: "Subdomain enumeration", color: "#dc2626" },
    { icon: Layers, title: "Mapping", desc: "Crawl & understand app", color: "#dc2626" },
    { icon: Zap, title: "Discovery", desc: "Find vulnerabilities", color: "#dc2626" },
    { icon: Shield, title: "Exploitation", desc: "Verify impact", color: "#dc2626" },
    { icon: FileText, title: "Reporting", desc: "Remediation guide", color: "#dc2626" },
    { icon: RefreshCw, title: "Retest", desc: "Verify patches", color: "#dc2626" },
];

const servicesOffered = [
    { icon: Globe, title: "Single Page Apps (SPA)", desc: "Comprehensive security assessment of client-side routing, API integrations, and DOM-based vulnerabilities in React, Vue, and Angular applications." },
    { icon: Database, title: "SaaS Platforms", desc: "Rigorous testing of multi-tenant isolation, role-based access controls (RBAC), and data aggregation flaws to prevent cross-tenant data leakage." },
    { icon: ShoppingCart, title: "E-commerce", desc: "Security validation of payment gateways, shopping cart logic, coupon manipulation, and order processing workflows to prevent financial fraud." },
    { icon: Server, title: "Legacy Applications", desc: "In-depth code review and dynamic testing of monolithic architectures built on PHP, Java, and .NET to identify historical vulnerabilities and patch gaps." },
    { icon: Lock, title: "Internal Portals", desc: "Testing of intranet applications, admin dashboards, and employee portals to prevent privilege escalation and unauthorized internal access." },
    { icon: Layers, title: "CMS Security", desc: "Vulnerability assessment of Content Management Systems including core files, plugins, and themes to prevent defacement and backend takeovers." },
    { icon: Code, title: "GraphQL APIs", desc: "Advanced testing of GraphQL endpoints for excessive query depth, batching attacks, and field-level authorization issues to secure your data graph." },
    { icon: Cloud, title: "Cloud-Native Apps", desc: "Security auditing of serverless functions, microservices communication, and container configurations to ensure a secure cloud-native environment." },
];

import { ShoppingCart } from "lucide-react";

const testimonials = [
    {
        quote: "RootRecon found a critical logic flaw in our payment flow that three other vendors missed. Truly impressive work.",
        name: "Alex Rivera",
        role: "CTO",
        company: "FinTech Solutions",
        service: "Web Security",
    },
    {
        quote: "The report was exactly what our devs needed. Clear reproduction steps and actual code fixes, not just generic advice.",
        name: "Priya Sharma",
        role: "Engineering Lead",
        company: "SaaS Corp",
        service: "Web Security",
    },
    {
        quote: "Fast, professional, and thorough. They helped us pass our SOC 2 audit with flying colors.",
        name: "James Wilson",
        role: "VP of Engineering",
        company: "HealthData Inc",
        service: "Compliance Testing",
    },
];

const faqs = [
    {
        q: "Do you test Single Page Applications (SPAs)?",
        a: "Yes! We specialize in modern web apps built with React, Angular, Vue, and Next.js. We understand client-side routing, API interactions, and JWT authentication."
    },
    {
        q: "How is this different from an automated scan?",
        a: "Automated scanners only find surface-level bugs. We manually test for business logic flaws (e.g., bypassing payments, privilege escalation) which scanners cannot understand."
    },
    {
        q: "Do you provide retesting?",
        a: "Yes, we provide one round of free retesting to verify that all identified vulnerabilities have been successfully patched."
    },
    {
        q: "What standards do you cover?",
        a: "We cover OWASP Top 10, SANS 25, and check for compliance requirements like PCI-DSS, HIPAA, and SOC 2 where applicable."
    },
    {
        q: "How long does a web app pentest take?",
        a: "It depends on the size and complexity of the application. A typical assessment takes between 1 to 2 weeks."
    },
    {
        q: "Can you test in production?",
        a: "Yes, we take great care to avoid disrupting your live services. We can also test in a staging environment if preferred."
    },
];

export default function WebSecurityPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [radius, setRadius] = useState(320);

    useEffect(() => {
        const getRadius = () => {
            if (typeof window === 'undefined') return 320;
            if (window.innerWidth < 640) return 180;
            if (window.innerWidth < 1024) return 260;
            return 320;
        };

        setRadius(getRadius());

        const handleResize = () => setRadius(getRadius());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <main className="min-h-screen font-sans bg-white">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
                <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="px-4 py-1.5 rounded-full bg-red-600 text-white border border-red-500 text-sm font-bold tracking-wide uppercase mb-6 inline-block">
                            Web Application Security
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                            Secure Your Web Apps <span className="text-red-600">Before Deployment</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                            Go beyond automated scanning with deep-dive manual penetration testing. We uncover complex logic flaws, chain critical vulnerabilities, and provide actionable remediation to secure your application against sophisticated real-world attacks.
                            Our certified experts simulate advanced cyber threats to identify weak points in your defense, ensuring robust protection for customer data and compliance with global security standards.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact">
                                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-lg shadow-red-600/20">
                                    Request a Quote <ArrowRight size={18} className="ml-2" />
                                </Button>
                            </Link>
                            <Link href="/get-started">
                                <Button variant="outline" className="bg-white border-2 border-slate-200 text-slate-900 hover:bg-slate-50 px-8 py-4 text-lg font-bold rounded-xl">
                                    Free Consultation
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>



            {/* Security Research - Stats Cards */}
            <section className="py-24 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <span className="px-4 py-1.5 rounded-full bg-red-600 text-white text-sm font-bold tracking-wide uppercase mb-6 inline-block">
                            Proven Expertise
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                            We Find What Others Miss
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {caseStudies.map((study, index) => (
                            <div key={index} className="bg-black rounded-2xl p-8 border border-zinc-800 hover:shadow-xl transition-all group">
                                <div className="w-14 h-14 rounded-2xl bg-red-900/20 flex items-center justify-center text-red-600 mb-6 group-hover:scale-105 transition-transform">
                                    <study.icon size={28} />
                                </div>
                                <div className="text-3xl font-extrabold text-white mb-2">{study.stat}</div>
                                <div className="text-lg font-bold text-slate-200 mb-3">{study.label}</div>
                                <p className="text-slate-400 text-sm leading-relaxed">{study.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose RootRecon - Animated Timeline */}
            <section className="py-24 bg-slate-50 overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <span className="px-4 py-1.5 rounded-full bg-red-600 text-white text-sm font-bold tracking-wide uppercase mb-6 inline-block">
                            Why RootRecon
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                            Why Choose Us for <span className="text-red-600">Web Security</span>?
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            We combine manual expertise with modern tooling to deliver the most comprehensive assessment.
                        </p>
                    </div>

                    {/* Animated Horizontal Timeline */}
                    <div className="hidden lg:block relative max-w-5xl mx-auto pt-8">
                        {/* Line Container */}
                        <div className="absolute top-16 left-[5%] right-[5%] h-1 z-0">
                            <div className="absolute inset-0 bg-slate-200 rounded-full" />
                            <motion.div
                                className="absolute inset-y-0 left-0 bg-black rounded-full"
                                initial={{ width: "0%" }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, ease: "easeOut" }}
                            />
                        </div>

                        <div className="relative grid grid-cols-6 gap-4 z-10">
                            {whyChooseFeatures.map((feature, index) => (
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
                                        <div className="w-16 h-16 rounded-full bg-white border-4 border-black flex items-center justify-center shadow-lg">
                                            <feature.icon className="w-7 h-7 text-red-600" />
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-red-600 text-white text-xs font-bold flex items-center justify-center shadow-md">
                                            {index + 1}
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="mt-6 text-center px-2"
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                                    >
                                        <h3 className="text-sm font-bold text-slate-900 mb-1">{feature.title}</h3>
                                        <p className="text-slate-500 text-xs leading-relaxed">{feature.desc}</p>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile: Vertical Timeline */}
                    <div className="lg:hidden relative max-w-md mx-auto">
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200">
                            <motion.div
                                className="absolute top-0 left-0 right-0 bg-black"
                                initial={{ height: "0%" }}
                                whileInView={{ height: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, ease: "easeOut" }}
                            />
                        </div>

                        <div className="relative space-y-6">
                            {whyChooseFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-4 pl-16"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.15 }}
                                >
                                    <div className="absolute left-0 w-12 h-12 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center shadow-lg">
                                        <feature.icon className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div className="bg-white rounded-xl p-4 flex-1 shadow-sm border border-slate-100">
                                        <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
                                        <p className="text-sm text-slate-600">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works - Hub Animation */}
            <section className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <span className="px-4 py-1.5 rounded-full bg-red-600 text-white text-sm font-bold tracking-wide uppercase mb-6 inline-block">
                            Our Methodology
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
                            How We <span className="text-red-600">Secure</span> Your App
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            A systematic approach to identifying and remediating vulnerabilities.
                        </p>
                    </div>

                    {/* Hub Layout */}
                    <div className="relative flex items-center justify-center mb-24 lg:mb-32">
                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24 w-full max-w-6xl">

                            {/* Left Side - Circular Hub */}
                            <div className="relative flex-shrink-0">
                                {/* Background Circle Removed */}

                                {/* Container for circles and arrows */}
                                <div
                                    className="relative"
                                    style={{
                                        width: `${radius * 1.4}px`,
                                        height: `${radius * 1.4}px`,
                                    }}
                                >
                                    {/* Center arrows */}
                                    <svg className="absolute inset-0" width="100%" height="100%" style={{ overflow: 'visible' }}>
                                        <defs>
                                            {processSteps.map((step, index) => (
                                                <marker
                                                    key={`marker-${index}`}
                                                    id={`arrow-hub-${index}`}
                                                    markerWidth="8"
                                                    markerHeight="8"
                                                    refX="7"
                                                    refY="4"
                                                    orient="auto"
                                                    markerUnits="strokeWidth"
                                                >
                                                    <path d="M0,0 L0,8 L8,4 z" fill="black" />
                                                </marker>
                                            ))}
                                        </defs>
                                        {processSteps.map((step, index) => {
                                            const angle = (index * 360) / processSteps.length - 90;
                                            const angleRad = (angle * Math.PI) / 180;
                                            const centerX = (radius * 1.4) / 2;
                                            const centerY = (radius * 1.4) / 2;
                                            const innerRadius = 50;
                                            const outerRadius = (radius * 0.55);

                                            return (
                                                <line
                                                    key={`line-${index}`}
                                                    x1={centerX + Math.cos(angleRad) * innerRadius}
                                                    y1={centerY + Math.sin(angleRad) * innerRadius}
                                                    x2={centerX + Math.cos(angleRad) * outerRadius}
                                                    y2={centerY + Math.sin(angleRad) * outerRadius}
                                                    stroke="black"
                                                    strokeWidth="2.5"
                                                    opacity="0.6"
                                                    markerEnd={`url(#arrow-hub-${index})`}
                                                />
                                            );
                                        })}
                                    </svg>

                                    {/* Center Hub */}
                                    <div
                                        className="absolute z-20 bg-white rounded-full px-5 py-4 shadow-2xl border-4 border-white"
                                        style={{
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    >
                                        <h3 className="text-lg md:text-xl font-bold text-black tracking-tight text-center">
                                            RootRecon
                                        </h3>
                                        <p className="text-[9px] md:text-[10px] text-black text-center mt-0.5">
                                            Process
                                        </p>
                                    </div>

                                    {/* Icons around hub */}
                                    {processSteps.map((step, index) => {
                                        const angle = (index * 360) / processSteps.length - 90;
                                        const iconRadius = radius * 0.55;
                                        const centerX = (radius * 1.4) / 2;
                                        const centerY = (radius * 1.4) / 2;
                                        const x = Math.cos((angle * Math.PI) / 180) * iconRadius;
                                        const y = Math.sin((angle * Math.PI) / 180) * iconRadius;
                                        const IconComponent = step.icon;

                                        return (
                                            <div
                                                key={index}
                                                className="absolute z-10"
                                                style={{
                                                    left: centerX + x,
                                                    top: centerY + y,
                                                    transform: 'translate(-50%, -50%)',
                                                }}
                                            >
                                                <div
                                                    className="bg-white rounded-full p-2.5 md:p-3 shadow-lg"
                                                    style={{ border: `3px solid ${step.color}40` }}
                                                >
                                                    <div
                                                        className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center"
                                                        style={{ backgroundColor: step.color + '15' }}
                                                    >
                                                        <IconComponent
                                                            className="w-4 h-4 md:w-5 md:h-5"
                                                            style={{ color: '#dc2626' }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Right Side - Cards */}
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                                {processSteps.map((step, index) => {
                                    const IconComponent = step.icon;
                                    return (
                                        <div key={index} className="flex items-center gap-4">
                                            {/* Arrow */}
                                            <div className="hidden lg:flex items-center">
                                                <svg width="40" height="20" className="flex-shrink-0">
                                                    <defs>
                                                        <marker
                                                            id={`card-arrow-${index}`}
                                                            markerWidth="8"
                                                            markerHeight="8"
                                                            refX="7"
                                                            refY="4"
                                                            orient="auto"
                                                        >
                                                            <path d="M0,0 L0,8 L8,4 z" fill="black" />
                                                        </marker>
                                                    </defs>
                                                    <line
                                                        x1="0"
                                                        y1="10"
                                                        x2="30"
                                                        y2="10"
                                                        stroke="black"
                                                        strokeWidth="2"
                                                        markerEnd={`url(#card-arrow-${index})`}
                                                    />
                                                </svg>
                                            </div>

                                            {/* Card */}
                                            <div
                                                className="flex-1 bg-white rounded-xl p-4 shadow-lg border border-slate-100"
                                                style={{ borderLeft: `4px solid ${step.color}` }}
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div
                                                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                                        style={{ backgroundColor: step.color + '15' }}
                                                    >
                                                        <IconComponent className="w-5 h-5" style={{ color: step.color }} />
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <p className="font-bold text-sm text-slate-900">{step.title}</p>
                                                        </div>
                                                        <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="bg-black border border-zinc-800 rounded-2xl shadow-lg p-8 md:p-10 max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: Database, title: "SQL Injection", desc: "We test for all types of SQLi: Error-based, Blind, Time-based, and Boolean." },
                                { icon: Code, title: "XSS & CSRF", desc: "Identifying scripts that can hijack user sessions or perform unauthorized actions." },
                                { icon: Key, title: "Broken Auth", desc: "Testing for weak passwords, session fixation, and MFA bypass vulnerabilities." },
                                { icon: Lock, title: "IDOR", desc: "Checking if users can access data belonging to other users or admins." },
                                { icon: AlertTriangle, title: "Logic Flaws", desc: "Finding ways to bypass payment gateways, coupon limits, or business rules." },
                                { icon: Eye, title: "Data Exposure", desc: "Ensuring sensitive data like PII and credit cards are properly encrypted." },
                            ].map((feature, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className={`w-12 h-12 rounded-full bg-red-900/20 flex items-center justify-center`}>
                                            <feature.icon className={`w-6 h-6 text-red-600`} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-white mb-2">{feature.title}</h3>
                                        <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* Services Offered */}
            <section className="py-24 bg-white">
                <div className="container px-4 mx-auto text-center">
                    <span className="inline-block px-4 py-2 bg-slate-100 text-slate-600 text-sm font-semibold rounded-full mb-6">
                        Coverage
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                        We Secure All Types of <span className="text-red-600">Web Apps</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
                        From modern SPAs to legacy monoliths, we have the expertise to test them all.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {servicesOffered.map((service, index) => (
                            <div key={index} className="bg-black rounded-2xl p-8 border border-zinc-800 hover:border-red-600 transition-all text-left group cursor-pointer">
                                <div className="w-14 h-14 rounded-xl bg-red-900/20 flex items-center justify-center text-red-600 mb-5 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                    <service.icon size={28} />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-slate-400">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-slate-50">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <span className="px-4 py-1.5 rounded-full bg-red-600 text-white text-sm font-bold tracking-wide uppercase mb-6 inline-block">
                            Testimonials
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                            What Our Clients Say
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-black rounded-2xl p-8 border border-zinc-800">
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-red-600 fill-red-600" />
                                    ))}
                                </div>
                                <div className="mb-4">
                                    <span className="text-xs font-bold text-red-400 border border-red-900/30 bg-red-900/10 px-2 py-1 rounded">
                                        Service: {testimonial.service}
                                    </span>
                                </div>
                                <p className="text-stone-300 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-red-900/20 flex items-center justify-center text-red-600 font-bold border border-red-900/30">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">{testimonial.name}</div>
                                        <div className="text-sm text-stone-400">{testimonial.role} @{testimonial.company}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <span className="px-4 py-1.5 rounded-full bg-red-600 text-white text-sm font-bold tracking-wide uppercase mb-6 inline-block">
                            FAQs
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                            Questions You May Have
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="font-semibold text-slate-900">{faq.q}</span>
                                    <ChevronDown
                                        size={20}
                                        className={`text-slate-400 transition-transform flex-shrink-0 ml-4 ${openFaq === index ? "rotate-180" : ""}`}
                                    />
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
