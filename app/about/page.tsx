"use client";

import { Header } from "@/components/layout/Header";
import { Contact } from "@/components/sections/Contact";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2, Users, Award, Target, Shield, Globe, Zap, Lock, Eye, FileSearch, Code, ArrowRight, Star, TrendingUp, Clock, Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
    { value: "500+", label: "Security Assessments", icon: Shield },
    { value: "150+", label: "Enterprise Clients", icon: Briefcase },
    { value: "10K+", label: "Vulnerabilities Found", icon: Target },
    { value: "99%", label: "Client Satisfaction", icon: Star },
];

const values = [
    { icon: Target, title: "Attacker Mindset", desc: "We think like adversaries to uncover vulnerabilities that automated tools and traditional testing miss. Our team has real-world experience in offensive security." },
    { icon: Shield, title: "Defense-Grade Reporting", desc: "Our reports are actionable, developer-friendly, and include code-level remediation guidance with prioritized risk ratings." },
    { icon: Users, title: "Collaborative Approach", desc: "We work as an extension of your team, providing transparent communication throughout every engagement with dedicated support." },
    { icon: Award, title: "Proven Expertise", desc: "Our team holds elite certifications (OSCP, OSCE, OSWE) and has discovered critical bugs in Fortune 500 companies." },
];

const certifications = ["CREST Certified", "OSCP", "OSCE", "OSWE", "AWS Security", "Azure Security"];

const whyChooseUs = [
    { icon: Zap, title: "Fast Turnaround", desc: "Get comprehensive security reports within 5-7 business days. Critical findings reported immediately." },
    { icon: Lock, title: "Zero False Positives", desc: "Every vulnerability is manually verified by our experts. No noise, only actionable security issues." },
    { icon: Eye, title: "Deep Manual Testing", desc: "We go beyond automated scans. Our experts spend 40+ hours manually testing your application." },
    { icon: FileSearch, title: "Detailed Remediation", desc: "Step-by-step fix guidance with code examples. Your developers will know exactly what to do." },
];

const approach = [
    { step: "01", title: "Discovery", desc: "We start by understanding your application architecture, tech stack, and business logic to identify high-risk areas." },
    { step: "02", title: "Reconnaissance", desc: "Our team maps attack surfaces, identifies entry points, and gathers intelligence like a real attacker would." },
    { step: "03", title: "Exploitation", desc: "We attempt to exploit vulnerabilities to demonstrate real-world impact and chain multiple issues for maximum severity." },
    { step: "04", title: "Reporting", desc: "Detailed findings with risk ratings, proof of concepts, and actionable remediation steps delivered in hours, not weeks." },
];

const achievements = [
    { number: "50+", label: "CVEs Published" },
    { number: "$2M+", label: "Bug Bounties Earned" },
    { number: "100%", label: "Retest Success Rate" },
    { number: "24/7", label: "Security Support" },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen font-sans">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
                <div className="container px-4 mx-auto text-center">
                    <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide uppercase mb-6 inline-block">
                        About RootRecon
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Securing the Digital World <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            One Vulnerability at a Time
                        </span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                        We are a team of elite ethical hackers and security researchers dedicated to making the internet safer for everyone. With over 10,000 vulnerabilities discovered, we bring real-world offensive expertise to protect your digital assets.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/get-started" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors inline-flex items-center gap-2">
                            Get Started <ArrowRight size={18} />
                        </Link>
                        <Link href="/solutions" className="px-8 py-4 bg-white border-2 border-slate-200 hover:border-blue-300 text-slate-800 font-bold rounded-xl transition-colors">
                            Our Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-colors">
                                <div className="w-12 h-12 mx-auto rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                                    <stat.icon size={24} />
                                </div>
                                <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">{stat.value}</div>
                                <div className="text-slate-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-gradient-to-b from-white to-slate-50">
                <div className="container px-4 mx-auto">
                    <SectionHeading
                        title="Why Choose RootRecon?"
                        subtitle="We deliver security assessments that go beyond checkbox compliance to find real vulnerabilities."
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyChooseUs.map((item, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mb-5">
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <span className="px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold tracking-wide uppercase mb-6 inline-block">
                            Our Methodology
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
                            How We Find What Others Miss
                        </h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Our battle-tested methodology combines automated scanning with deep manual testing to uncover every vulnerability.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {approach.map((item, index) => (
                            <div key={index} className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-colors">
                                <div className="text-5xl font-extrabold text-blue-500/30 mb-4">{item.step}</div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24 bg-slate-50">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide uppercase mb-6 inline-block">
                                Our Story
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                                Founded by Hackers, <br />Built for Defenders
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                RootRecon was founded in 2023 by a team of security researchers who spent years working on bug bounty programs and discovering critical vulnerabilities in some of the world's largest companies including Google, Microsoft, and Apple.
                            </p>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                We realized that most organizations were struggling to find quality penetration testing services that could match the skills of real-world attackers. Traditional security firms relied too heavily on automated scanners and missed the business logic flaws that caused real breaches.
                            </p>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Today, we combine our attacker mindset with enterprise-grade processes to help organizations of all sizes secure their applications, APIs, and infrastructure. Our team has helped prevent data breaches affecting millions of users.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {achievements.map((item, index) => (
                                    <div key={index} className="bg-white rounded-xl p-4 border border-slate-200">
                                        <div className="text-2xl font-extrabold text-blue-600">{item.number}</div>
                                        <div className="text-sm text-slate-600">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-white">
                            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                            <p className="text-xl text-white/90 leading-relaxed mb-8">
                                "To make the internet safer by helping organizations identify and fix security vulnerabilities before malicious actors can exploit them. We believe security should be accessible to all businesses, not just enterprises."
                            </p>
                            <h4 className="text-lg font-bold mb-4">Team Certifications</h4>
                            <div className="grid grid-cols-2 gap-3">
                                {certifications.map((cert, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <CheckCircle2 size={18} className="text-blue-200" />
                                        <span className="text-sm font-medium">{cert}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-white">
                <div className="container px-4 mx-auto">
                    <SectionHeading title="Our Core Values" subtitle="The principles that guide everything we do and how we serve our clients." />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((item, index) => (
                            <div key={index} className="text-center p-8 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-colors">
                                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mb-6">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trusted By */}


            {/* CTA */}
            <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">Ready to Secure Your Business?</h2>
                    <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                        Join hundreds of companies that trust RootRecon to protect their digital assets. Get a free consultation today.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/get-started" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 font-bold rounded-xl transition-colors gap-2">
                            Get Started Today <ArrowRight size={18} />
                        </Link>
                        <Link href="/solutions" className="inline-flex items-center px-8 py-4 border-2 border-white/30 hover:border-white text-white font-bold rounded-xl transition-colors">
                            View Our Services
                        </Link>
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
