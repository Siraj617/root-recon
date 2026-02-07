"use client";

import { Button } from "@/components/ui/Button";
import { Target, Brain, Shield, Rocket, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const features = [
    {
        icon: Target,
        title: "Attacker Mindset",
        desc: "We don't just run tools - we think like real adversaries. Our team chains vulnerabilities and finds attack paths that automated scanners miss."
    },
    {
        icon: Brain,
        title: "Deep Technical Expertise",
        desc: "From reverse engineering to custom exploit development, our researchers have discovered 0-days in Fortune 500 companies."
    },
    {
        icon: Shield,
        title: "Business Logic Focus",
        desc: "We specialize in finding critical business logic flaws, authentication bypasses, and payment manipulation vulnerabilities."
    },
    {
        icon: Rocket,
        title: "Fast & Thorough",
        desc: "Initial findings within 48 hours. Complete assessment in 7-14 days. No shortcuts, no template reports."
    },
    {
        icon: MessageCircle,
        title: "Direct Communication",
        desc: "Work directly with the tester - not a project manager. Real-time updates via Slack with proof-of-concept videos."
    },
];

interface WhyChooseProps {
    serviceName?: string;
}

export function WhyChoose({ serviceName = "Pentesting" }: WhyChooseProps) {
    return (
        <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
            <div className="container px-4 mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-sm font-bold tracking-wide uppercase mb-6 inline-block">
                        The RootRecon Difference
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
                        Why Teams Choose Us for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{serviceName}</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        We go beyond checkbox security. Our offensive security researchers find the vulnerabilities that matter - before attackers do.
                    </p>
                </div>

                {/* Features Grid - Bento Style */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all group ${index === 0 ? 'lg:col-span-2' : ''}`}
                        >
                            {/* Glow Effect on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />

                            <div className="relative z-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white flex-shrink-0">
                                        <item.icon size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Stats & CTA */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <div className="flex items-center gap-2 text-slate-300">
                            <CheckCircle2 size={20} className="text-green-500" />
                            <span>100% Manual Testing</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                            <CheckCircle2 size={20} className="text-green-500" />
                            <span>Proof-of-Concept for Every Finding</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                            <CheckCircle2 size={20} className="text-green-500" />
                            <span>Free Retesting</span>
                        </div>
                    </div>
                    <Link href="/get-started">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold">
                            Start Your Assessment <ArrowRight size={18} className="ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
