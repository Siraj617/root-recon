"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Contact } from "@/components/sections/Contact";
import { Button } from "@/components/ui/Button";
import {
    Layers, ArrowRight, Shield, Target, Users, Settings, Zap, Headphones,
    Globe, Smartphone, Server, Cloud, Wifi, Cpu, ChevronDown, CheckCircle2,
    FileText, RefreshCw, MessageCircle, Star, Search, Lock, Eye, Database, Code, Key, AlertTriangle, ShieldCheck
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const trustedCompanies = ["Groww", "Swiggy", "SBI Life", "IATA", "Zaggle", "MyGate", "Wati", "PolicyBazaar", "Jupiter", "Razorpay", "CRED", "PhonePe"];

const caseStudies = [
    {
        stat: "1500+",
        label: "Pentests Completed",
        desc: "Trusted by startups and Fortune 500s to secure their critical infrastructure.",
        icon: ShieldCheck,
    },
    {
        stat: "10k+",
        label: "Vulnerabilities",
        desc: "We've found everything from simple XSS to complex RCE chains in production systems.",
        icon: Bug,
    },
    {
        stat: "OSCP",
        label: "Certified Team",
        desc: "Our testers hold top industry certifications (OSCP, OSCE, OSWE, CISSP).",
        icon: Award,
    },
];

import { Bug, Award } from "lucide-react";

const whyChooseFeatures = [
    {
        icon: Users,
        title: "Manual Testing",
        desc: "We don't just run scanners. 90% of our effort is manual, creative hacking by experts."
    },
    {
        icon: Target,
        title: "Zero False Positives",
        desc: "We verify every finding. If it's in the report, it's a real risk to your business."
    },
    {
        icon: Zap,
        title: "Business Logic",
        desc: "We understand your application's unique logic to find flaws that generic tools miss."
    },
    {
        icon: RefreshCw,
        title: "Free Retesting",
        desc: "We verify your fixes for free to ensure the vulnerabilities are truly closed."
    },
    {
        icon: MessageCircle,
        title: "Direct Access",
        desc: "Chat directly with the pentester working on your project via Slack or Teams."
    },
];

const processSteps = [
    { icon: Search, title: "Reconnaissance", desc: "OSINT & Discovery", color: "#3b82f6" },
    { icon: Target, title: "Mapping", desc: "Attack surface map", color: "#2563eb" },
    { icon: Zap, title: "Discovery", desc: "Find vulnerabilities", color: "#1d4ed8" },
    { icon: Lock, title: "Exploitation", desc: "Verify impact", color: "#1e40af" },
    { icon: FileText, title: "Reporting", desc: "Detailed findings", color: "#1e3a8a" },
];

const servicesOffered = [
    { icon: Globe, title: "Web Application", desc: "OWASP Top 10 & Logic" },
    { icon: Server, title: "API Security", desc: "REST, GraphQL, gRPC" },
    { icon: Smartphone, title: "Mobile Apps", desc: "iOS & Android" },
    { icon: Cloud, title: "Cloud Config", desc: "AWS, Azure, GCP" },
    { icon: Wifi, title: "Network", desc: "Internal & External" },
    { icon: Code, title: "Source Code", desc: "Secure Code Review" },
];

const testimonials = [
    {
        quote: "The depth of their testing was impressive. They found a critical RCE that three previous vendors missed.",
        name: "Alex Thompson",
        role: "CISO",
        company: "Global Logistics",
        service: "Full Stack Pentest",
    },
    {
        quote: "Professional, fast, and the report was extremely detailed. Our devs loved the remediation guides.",
        name: "Sarah Jenkins",
        role: "VP of Engineering",
        company: "FinTech Unicorn",
        service: "Web & API Pentest",
    },
    {
        quote: "RootRecon is our go-to partner for all security testing. They act like an extension of our internal team.",
        name: "David Chen",
        role: "Director of Security",
        company: "HealthTech Inc",
        service: "Annual Pentest",
    },
];

const faqs = [
    {
        q: "What is the difference between a Vulnerability Scan and a Penetration Test?",
        a: "A scan is automated and finds known, low-hanging fruit. A penetration test is a manual, human-led simulation of a real attack to find complex logic flaws and business risks."
    },
    {
        q: "How long does a penetration test take?",
        a: "It varies by scope. A typical web app pentest takes 1-2 weeks. Larger engagements or network tests can take 3-4 weeks."
    },
    {
        q: "Do you provide a certificate of testing?",
        a: "Yes, upon completion and remediation of critical issues, we provide a Letter of Attestation that you can share with customers and auditors."
    },
    {
        q: "What standards do you follow?",
        a: "We follow industry standards like OWASP Top 10, SANS Top 25, OSSTMM, and PTES to ensure a comprehensive assessment."
    },
    {
        q: "Will the testing take down my site?",
        a: "We take great care to avoid disruption. We test in a non-destructive manner and can coordinate testing during off-peak hours if needed."
    },
    {
        q: "How much does a penetration test cost?",
        a: "Pricing depends on the size and complexity of the target. We offer flat-rate pricing packages starting at $4,995. Check our Pricing page for details."
    },
];

export default function PenetrationTestingPage() {
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
            <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
                <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide uppercase mb-6 inline-block">
                            Comprehensive Security Testing
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                            Expert-Led <span className="text-blue-600">Penetration Testing</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                            We simulate real-world attacks to find vulnerabilities in your web, mobile, cloud, and network infrastructure before hackers do.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/get-started">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-lg shadow-blue-600/20">
                                    Get a Quote <ArrowRight size={18} className="ml-2" />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" className="border-2 border-slate-200 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-bold rounded-xl">
                                    Talk to Expert
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted By */}
            <section className="py-10 bg-white border-b border-slate-100">
                <div className="container px-4 mx-auto">
                    <p className="text-center text-slate-500 text-sm font-medium mb-6">
                        Trusted by leading security-conscious companies across the world
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {trustedCompanies.map((company, index) => (
                            <span key={index} className="text-lg font-bold text-slate-300 hover:text-slate-500 transition-colors">
                                {company}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Research - Stats Cards */}
            <section className="py-24 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide uppercase mb-6 inline-block">
                            Proven Expertise
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                            Results That Matter
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {caseStudies.map((study, index) => (
                            <div key={index} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mb-6">
                                    <study.icon size={28} />
                                </div>
                                <div className="text-4xl font-extrabold text-blue-600 mb-2">{study.stat}</div>
                                <div className="text-lg font-bold text-slate-900 mb-3">{study.label}</div>
                                <p className="text-slate-600 text-sm leading-relaxed">{study.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose RootRecon - Animated Timeline */}
            <section className="py-24 bg-slate-50 overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide uppercase mb-6 inline-block">
                            Why RootRecon
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                            Why Choose <span className="text-blue-600">RootRecon</span>?
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            We deliver more than just a report. We deliver peace of mind.
                        </p>
                    </div>

                    {/* Animated Horizontal Timeline */}
                    <div className="hidden lg:block relative max-w-5xl mx-auto pt-8">
                        {/* Line Container */}
                        <div className="absolute top-16 left-[10%] right-[10%] h-1 z-0">
                            <div className="absolute inset-0 bg-slate-200 rounded-full" />
                            <motion.div
                                className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                                initial={{ width: "0%" }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, ease: "easeOut" }}
                            />
                        </div>

                        <div className="relative grid grid-cols-5 gap-4 z-10">
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
                                        <div className="w-16 h-16 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center shadow-lg">
                                            <feature.icon className="w-7 h-7 text-blue-600" />
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shadow-md">
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
                                className="absolute top-0 left-0 right-0 bg-gradient-to-b from-blue-500 to-indigo-600"
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
                        <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide uppercase mb-6 inline-block">
                            Our Methodology
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
                            How We <span className="text-blue-600">Test</span> Your Security
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            A rigorous, multi-stage process to ensure nothing is missed.
                        </p>
                    </div>

                    {/* Hub Layout */}
                    <div className="relative flex items-center justify-center mb-24 lg:mb-32">
                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24 w-full max-w-6xl">

                            {/* Left Side - Circular Hub */}
                            <div className="relative flex-shrink-0">
                                {/* Background Circle */}
                                <div
                                    className="absolute rounded-full bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 opacity-50"
                                    style={{
                                        width: `${radius * 1.6}px`,
                                        height: `${radius * 1.6}px`,
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                />

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
                                                    <path d="M0,0 L0,8 L8,4 z" fill={step.color} />
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
                                                    stroke={step.color}
                                                    strokeWidth="2.5"
                                                    opacity="0.6"
                                                    markerEnd={`url(#arrow-hub-${index})`}
                                                />
                                            );
                                        })}
                                    </svg>

                                    {/* Center Hub */}
                                    <div
                                        className="absolute z-20 bg-white rounded-full px-5 py-4 shadow-2xl border-4 border-blue-100"
                                        style={{
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    >
                                        <h3 className="text-lg md:text-xl font-bold text-blue-600 tracking-tight text-center">
                                            RootRecon
                                        </h3>
                                        <p className="text-[9px] md:text-[10px] text-slate-600 text-center mt-0.5">
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
                                                            style={{ color: step.color }}
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
                                                            <path d="M0,0 L0,8 L8,4 z" fill={step.color} />
                                                        </marker>
                                                    </defs>
                                                    <line
                                                        x1="0"
                                                        y1="10"
                                                        x2="30"
                                                        y2="10"
                                                        stroke={step.color}
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
                                                            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">Step {index + 1}</span>
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
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-8 md:p-10 max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: Globe, title: "Web Apps", desc: "Testing for OWASP Top 10 and business logic flaws.", color: "text-blue-600", bg: "bg-blue-100" },
                                { icon: Smartphone, title: "Mobile Apps", desc: "iOS and Android security assessments.", color: "text-violet-600", bg: "bg-violet-100" },
                                { icon: Server, title: "APIs", desc: "REST, GraphQL, and gRPC security testing.", color: "text-green-600", bg: "bg-green-100" },
                                { icon: Cloud, title: "Cloud", desc: "AWS, Azure, and GCP configuration reviews.", color: "text-orange-600", bg: "bg-orange-100" },
                                { icon: Wifi, title: "Network", desc: "Internal and external infrastructure testing.", color: "text-indigo-600", bg: "bg-indigo-100" },
                                { icon: Code, title: "Source Code", desc: "Manual code review for security vulnerabilities.", color: "text-cyan-600", bg: "bg-cyan-100" },
                            ].map((feature, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className={`w-12 h-12 rounded-full ${feature.bg} flex items-center justify-center`}>
                                            <feature.icon className={`w-6 h-6 ${feature.color}`} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-900 mb-2">{feature.title}</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-16">
                <div className="container px-4 mx-auto">
                    <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl p-12 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-500 rounded-full blur-3xl" />
                        </div>

                        <div className="relative z-10 text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                                Ready to Secure Your <span className="text-blue-400">Business</span>?
                            </h2>
                            <p className="text-slate-300 text-lg mb-8">
                                Don't wait for a breach. Get a comprehensive penetration test today.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link href="/get-started">
                                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-bold rounded-xl">
                                        Get Started <ArrowRight size={16} className="ml-2" />
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button variant="outline" className="border-2 border-slate-600 text-white hover:bg-slate-700 px-8 py-4 font-bold rounded-xl">
                                        Talk to Expert
                                    </Button>
                                </Link>
                            </div>
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
                        We Cover Every <span className="text-blue-600">Attack Surface</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
                        From your code to your cloud, we have the expertise to test it all.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {servicesOffered.map((service, index) => (
                            <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:bg-blue-50 hover:shadow-lg transition-all text-left group cursor-pointer">
                                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <service.icon size={28} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                                <p className="text-slate-600">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-slate-50">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide uppercase mb-6 inline-block">
                            Testimonials
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                            What Our Clients Say
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                                    ))}
                                </div>
                                <div className="mb-4">
                                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                        Service: {testimonial.service}
                                    </span>
                                </div>
                                <p className="text-slate-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">{testimonial.name}</div>
                                        <div className="text-sm text-slate-500">{testimonial.role} @{testimonial.company}</div>
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
                        <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide uppercase mb-6 inline-block">
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
