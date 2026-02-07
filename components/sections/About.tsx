"use client";

import { ArrowRight, CheckCircle2, Shield, Bug, Lock, Eye, Target, Zap, FileSearch, Network } from "lucide-react";
import { useState, useEffect } from "react";

const capabilities = [
    {
        name: "Web Apps",
        desc: "Full-stack security testing for modern web applications",
        icon: Network,
        color: "#8b5cf6",
    },
    {
        name: "API Security",
        desc: "REST, GraphQL and microservices vulnerability assessment",
        icon: Lock,
        color: "#3b82f6",
    },
    {
        name: "Mobile Apps",
        desc: "iOS and Android application penetration testing",
        icon: Target,
        color: "#06b6d4",
    },
    {
        name: "Cloud Security",
        desc: "AWS, Azure, GCP infrastructure security review",
        icon: Shield,
        color: "#10b981",
    },
    {
        name: "Red Team",
        desc: "Adversary simulation and attack path validation",
        icon: Eye,
        color: "#ef4444",
    },
    {
        name: "Code Review",
        desc: "Secure code analysis and vulnerability detection",
        icon: FileSearch,
        color: "#ec4899",
    },
];

export function About() {
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
        <section id="about" className="py-20 bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block mb-4 px-4 py-1.5 bg-blue-100 text-blue-700 border border-blue-200 rounded-full text-sm font-medium">
                        Who We Are
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Think Like an Attacker
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                        RootRecon is an offensive security company delivering advanced penetration testing
                        and vulnerability assessment services. We simulate real-world attacks to protect your business.
                    </p>
                    <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg group transition-all duration-300">
                        Explore Our Services
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Hub on Left, Cards on Right Layout */}
                <div className="relative flex items-center justify-center mb-24 lg:mb-32">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24 w-full max-w-6xl">

                        {/* Left Side - Circular Hub */}
                        <div className="relative flex-shrink-0">
                            {/* Background Circle */}
                            <div
                                className="absolute rounded-full bg-gradient-to-br from-blue-50 via-violet-50 to-blue-50 opacity-50"
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
                                {/* Center arrows from hub to icons */}
                                <svg
                                    className="absolute inset-0"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: 'visible' }}
                                >
                                    <defs>
                                        {capabilities.map((capability, index) => (
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
                                                <path d="M0,0 L0,8 L8,4 z" fill={capability.color} />
                                            </marker>
                                        ))}
                                    </defs>
                                    {capabilities.map((capability, index) => {
                                        const angle = (index * 360) / capabilities.length - 90;
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
                                                stroke={capability.color}
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
                                        Offensive Security
                                    </p>
                                </div>

                                {/* Capability Icons around the hub */}
                                {capabilities.map((capability, index) => {
                                    const angle = (index * 360) / capabilities.length - 90;
                                    const iconRadius = radius * 0.55;
                                    const centerX = (radius * 1.4) / 2;
                                    const centerY = (radius * 1.4) / 2;
                                    const x = Math.cos((angle * Math.PI) / 180) * iconRadius;
                                    const y = Math.sin((angle * Math.PI) / 180) * iconRadius;
                                    const IconComponent = capability.icon;

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
                                                style={{ border: `3px solid ${capability.color}40` }}
                                            >
                                                <div
                                                    className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center"
                                                    style={{ backgroundColor: capability.color + '15' }}
                                                >
                                                    <IconComponent
                                                        className="w-4 h-4 md:w-5 md:h-5"
                                                        style={{ color: capability.color }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Side - Cards with arrows */}
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                            {capabilities.map((capability, index) => {
                                const IconComponent = capability.icon;
                                return (
                                    <div key={index} className="flex items-center gap-4">
                                        {/* Arrow pointing to card */}
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
                                                        <path d="M0,0 L0,8 L8,4 z" fill={capability.color} />
                                                    </marker>
                                                </defs>
                                                <line
                                                    x1="0"
                                                    y1="10"
                                                    x2="30"
                                                    y2="10"
                                                    stroke={capability.color}
                                                    strokeWidth="2"
                                                    markerEnd={`url(#card-arrow-${index})`}
                                                />
                                            </svg>
                                        </div>

                                        {/* Card */}
                                        <div
                                            className="flex-1 bg-white rounded-xl p-4 shadow-lg border border-slate-100"
                                            style={{ borderLeft: `4px solid ${capability.color}` }}
                                        >
                                            <div className="flex items-start gap-3">
                                                <div
                                                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                                    style={{ backgroundColor: capability.color + '15' }}
                                                >
                                                    <IconComponent className="w-5 h-5" style={{ color: capability.color }} />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-sm text-slate-900 mb-1">{capability.name}</p>
                                                    <p className="text-xs text-slate-500 leading-relaxed">{capability.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-8 md:p-10">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center">
                                    <Target className="w-6 h-6 text-violet-600" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Deep Insight</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Modern attackers do not follow checklists. They exploit logic gaps and chain vulnerabilities.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                    <Eye className="w-6 h-6 text-blue-600" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Zero Blind Spots</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    We focus on uncovering hidden attack paths missed by automated scanners.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                                    <Zap className="w-6 h-6 text-red-600" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Real Impact</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Our assessments focus on exploitation and business impact, not just theoretical risks.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                    <Shield className="w-6 h-6 text-green-600" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Proactive Defense</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Identify and fix vulnerabilities before attackers can exploit them in production.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                                    <FileSearch className="w-6 h-6 text-amber-600" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Actionable Reports</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Clear remediation guidance with prioritized findings based on actual risk levels.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                                    <Lock className="w-6 h-6 text-cyan-600" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Continuous Security</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Ongoing testing and monitoring to maintain security as your application evolves.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-slate-200 text-center">
                        <p className="text-slate-600 text-base">
                            Need a custom security assessment?{" "}
                            <a href="#contact" className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-2 underline-offset-4 hover:underline-offset-2 transition-all">
                                Let&apos;s discuss your requirements
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
