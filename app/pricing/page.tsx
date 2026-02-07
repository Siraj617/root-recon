"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Contact } from "@/components/sections/Contact";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Button } from "@/components/ui/Button";
import { Check, ArrowRight, Shield, Zap, Globe, Server, Smartphone, Cloud, Code, Target, Building, HelpCircle, ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Service Tabs
const services = [
    { id: "ptaas", label: "Pentest (PTaaS)", icon: Shield },
    { id: "red-teaming", label: "Red Teaming", icon: Target },
    { id: "web-security", label: "Web App", icon: Globe },
    { id: "api-security", label: "API Security", icon: Server },
    { id: "mobile-security", label: "Mobile App", icon: Smartphone },
    { id: "cloud-security", label: "Cloud", icon: Cloud },
    { id: "code-review", label: "Code Review", icon: Code },
];

// Pricing Data Structure
const pricingData = {
    "ptaas": {
        essentials: {
            desc: "Best for startups and small businesses needing annual compliance.",
            features: [
                "1 Pentest per year",
                "OWASP Top 10 Coverage",
                "Basic Executive Report",
                "1 Free Retest",
                "Email Support",
                "External Attack Surface Scan",
                "Automated Vulnerability Scanning",
                "Certificate Validity Check"
            ]
        },
        advanced: {
            desc: "Best for growing companies needing continuous security assurance.",
            features: [
                "2 Pentests per year",
                "Business Logic Testing",
                "Real-time Vulnerability Dashboard",
                "Slack/Teams Integration",
                "Unlimited Retesting",
                "Jira/GitHub Integration",
                "Internal Network Scanning",
                "Cloud Configuration Review"
            ]
        },
        enterprise: {
            desc: "Best for large organizations with complex compliance needs.",
            features: [
                "Continuous Pentesting",
                "Dedicated Security Team",
                "Custom Compliance Mapping",
                "API Access to Platform",
                "24/7 Priority Support",
                "On-Premise Deployment Option",
                "Supply Chain Security",
                "Advanced Threat Modeling",
                "Quarterly Strategy Reviews"
            ]
        }
    },
    "red-teaming": {
        essentials: {
            desc: "For organizations starting their adversary simulation journey.",
            features: [
                "External Network Recon",
                "Basic Social Engineering",
                "Vulnerability Scanning",
                "High-Level Risk Report",
                "1x Retesting",
                "Open Source Intelligence (OSINT)",
                "Password Spraying Analysis",
                "Public Data Exposure Check"
            ]
        },
        advanced: {
            desc: "For mid-sized companies needing deeper security analysis.",
            features: [
                "Advanced Social Engineering",
                "Adversary Emulation (MITRE ATT&CK)",
                "Cloud Security Exploitation",
                "Tactical Remediation Guide",
                "2x Retesting",
                "Defense Evasion Testing",
                "Lateral Movement Simulation",
                "Active Directory Assessment"
            ]
        },
        enterprise: {
            desc: "For enterprises, government agencies, and regulated industries.",
            features: [
                "Full-Scope Red Teaming",
                "Physical Security Testing",
                "Insider Threat Simulation",
                "24/7 Adversary Simulation",
                "Custom Attack Scenarios",
                "Unlimited Retesting",
                "Blue Team Training Exercises",
                "Custom Exploit Development",
                "Executive Crisis Simulation"
            ]
        }
    },
    "web-security": {
        essentials: {
            desc: "Essential security testing for standard web applications.",
            features: [
                "Automated Scanning",
                "Manual False Positive Check",
                "OWASP Top 10 Verification",
                "PDF Report",
                "1 Retest",
                "Sitemap Crawling",
                "Basic Auth Testing",
                "SSL/TLS Configuration Review"
            ]
        },
        advanced: {
            desc: "Comprehensive testing for business-critical applications.",
            features: [
                "Deep Business Logic Testing",
                "Authenticated Testing",
                "Role-Based Access Checks",
                "Video PoCs",
                "Developer Walkthroughs",
                "Session Management Testing",
                "Input Validation Stress Test",
                "Payment Gateway Security"
            ]
        },
        enterprise: {
            desc: "Rigorous assessment for high-risk and financial applications.",
            features: [
                "Microservices Coverage",
                "Advanced Auth Scenarios",
                "Zero-Day Research",
                "Continuous Monitoring",
                "Dedicated Pentester",
                "SLA Guarantees",
                "WAF Bypass Testing",
                "Custom Exploit Scripts",
                "Architecture Security Review"
            ]
        }
    },
    "api-security": {
        essentials: {
            desc: "Basic coverage for public-facing APIs.",
            features: [
                "Public Endpoint Scanning",
                "OWASP API Top 10",
                "Rate Limiting Checks",
                "Basic Auth Review",
                "Standard Report",
                "Swagger/OpenAPI Analysis",
                "Error Handling Review",
                "HTTP Headers Audit"
            ]
        },
        advanced: {
            desc: "Deep dive into logic and authorization flaws.",
            features: [
                "BOLA/BFLA Testing",
                "GraphQL/gRPC Support",
                "Complex Logic Chains",
                "Token Security Analysis",
                "Postman Collection PoCs",
                "Mass Assignment Checks",
                "Injection Attack Simulation",
                "Data Exposure Analysis"
            ]
        },
        enterprise: {
            desc: "Full ecosystem security for API-first companies.",
            features: [
                "Internal API Testing",
                "Custom Protocol Fuzzing",
                "CI/CD Pipeline Integration",
                "Real-time Attack Simulation",
                "Architecture Review",
                "Compliance Attestation",
                "Gateway Policy Review",
                "Microservices Mesh Audit",
                "Legacy API Assessment"
            ]
        }
    },
    "mobile-security": {
        essentials: {
            desc: "Standard assessment for store compliance.",
            features: [
                "Static Analysis (SAST)",
                "Basic Dynamic Analysis",
                "Store Compliance Check",
                "Known Vulnerabilities",
                "Summary Report",
                "Permissions Review",
                "Third-party Library Check",
                "Manifest Analysis"
            ]
        },
        advanced: {
            desc: "Thorough testing for sensitive mobile apps.",
            features: [
                "Deep Dynamic Analysis",
                "Traffic Interception",
                "Local Storage Forensics",
                "Certificate Pinning Bypass",
                "Detailed Technical Report",
                "Biometric Auth Testing",
                "Deep Link/Intent Fuzzing",
                "Runtime Manipulation"
            ]
        },
        enterprise: {
            desc: "Hardened security for fintech and healthcare apps.",
            features: [
                "Advanced Reverse Engineering",
                "Custom Cryptography Audit",
                "Runtime Manipulation",
                "Backend API Full Test",
                "Obfuscation Review",
                "Source Code Assist",
                "Root/Jailbreak Detection Test",
                "Memory Corruption Analysis",
                "Custom Native Code Review"
            ]
        }
    },
    "cloud-security": {
        essentials: {
            desc: "Configuration review for single cloud environments.",
            features: [
                "CIS Benchmark Scan",
                "Public Resource Check",
                "Basic IAM Review",
                "Logging Configuration",
                "Compliance Snapshot",
                "Storage Bucket Audit",
                "Security Group Review",
                "MFA Enforcement Check"
            ]
        },
        advanced: {
            desc: "Multi-cloud and architecture review.",
            features: [
                "Multi-Cloud (AWS/Azure/GCP)",
                "Kubernetes Security",
                "Deep IAM Analysis",
                "Network Segmentation",
                "Remediation Scripts",
                "Container Image Scanning",
                "Secrets Management Review",
                "Serverless Function Audit"
            ]
        },
        enterprise: {
            desc: "Continuous cloud security posture management.",
            features: [
                "Infrastructure as Code Review",
                "Serverless Security",
                "Real-time Threat Detection",
                "Custom Policy Creation",
                "DevSecOps Integration",
                "Forensic Readiness",
                "Threat Hunting",
                "Compliance Automation",
                "Custom Drift Detection"
            ]
        }
    },
    "code-review": {
        essentials: {
            desc: "Automated baseline with manual verification.",
            features: [
                "SAST Tool Setup",
                "False Positive Removal",
                "Top 10 Vulnerabilities",
                "Dependency Check",
                "Basic Report",
                "Secret Scanning",
                "Code Quality Metrics",
                "Framework Best Practices"
            ]
        },
        advanced: {
            desc: "Manual review for critical logic and flows.",
            features: [
                "Line-by-Line Manual Review",
                "Business Logic Analysis",
                "Framework Specific Checks",
                "Secure Coding Guidelines",
                "Developer Training Session",
                "Cryptography Implementation",
                "Auth & Session Logic",
                "Input Validation Strategy"
            ]
        },
        enterprise: {
            desc: "Security partnership for development teams.",
            features: [
                "IDE Integration",
                "Pre-Commit Hooks",
                "Architecture Design Review",
                "Custom Rule Creation",
                "Ongoing PR Reviews",
                "Threat Modeling",
                "Legacy Code Refactoring",
                "Secure SDLC Consulting",
                "Custom Training Workshops"
            ]
        }
    }
};

const faqs = [
    {
        q: "How long does a typical pentest take?",
        a: "It depends on the scope. A small web app (10-20 pages) typically takes 5-7 business days. Larger applications or API suites may take 2-3 weeks. We'll provide a timeline during scoping."
    },
    {
        q: "What do we need to provide before testing?",
        a: "Access credentials (if testing authenticated features), target URLs/IPs, testing environment access, and any documentation about your application architecture."
    },
    {
        q: "Will testing affect our production environment?",
        a: "We recommend testing in staging when possible. If production testing is required, we coordinate timing with your team and avoid destructive tests. We've never caused downtime."
    },
    {
        q: "How do you handle sensitive data discovered during testing?",
        a: "All data is encrypted and stored securely. We follow strict data handling protocols and can sign custom NDAs. Data is securely deleted 90 days after engagement."
    },
    {
        q: "What's included in retesting?",
        a: "We verify that specific vulnerabilities have been fixed. Retesting is focused on previously identified issues, not a full re-assessment."
    },
    {
        q: "Can you help us with compliance requirements?",
        a: "Yes! Our reports map findings to SOC 2, PCI DSS, ISO 27001, and HIPAA requirements. We can also provide attestation letters for auditors."
    },
];

export default function PricingPage() {
    const [activeTab, setActiveTab] = useState("ptaas");
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const currentData = pricingData[activeTab as keyof typeof pricingData];

    return (
        <main className="min-h-screen font-sans bg-slate-50">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-40 bg-[#0B1120] relative overflow-hidden">
                {/* Background Tech Lines */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 0 L50 50 L100 0" stroke="white" strokeWidth="0.5" fill="none" />
                        <path d="M0 100 L50 50 L100 100" stroke="white" strokeWidth="0.5" fill="none" />
                    </svg>
                </div>

                <div className="container px-4 mx-auto relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Protect Your Business with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            Hacker-Focused Approach.
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
                        Protect your business from evolving threats with a proactive, hacker-focused approach designed to keep your operations secure and resilient.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <Link href="/get-started">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-lg shadow-blue-600/20">
                                Secure Now
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" className="border-2 border-slate-700 text-white hover:bg-slate-800 px-8 py-4 text-lg font-bold rounded-xl">
                                Schedule A Call
                            </Button>
                        </Link>
                    </div>

                    {/* Service Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveTab(service.id)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === service.id
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105"
                                        : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
                                    }`}
                            >
                                <service.icon size={16} />
                                {service.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Cards Section */}
            <section className="py-16 -mt-32 relative z-20">
                <div className="container px-4 mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                        >
                            {/* Essentials Plan */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                                <div className="mb-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Zap className="text-blue-600" size={24} />
                                        <h3 className="text-2xl font-bold text-slate-900">Essentials</h3>
                                    </div>
                                    <p className="text-slate-500 text-sm min-h-[40px]">{currentData.essentials.desc}</p>
                                </div>

                                <Link href="/get-started" className="w-full">
                                    <Button variant="outline" className="w-full py-6 text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300 rounded-xl font-bold text-lg mb-8">
                                        Get Started
                                    </Button>
                                </Link>

                                <div className="mt-auto pt-6 border-t border-slate-100">
                                    <p className="text-sm font-semibold text-slate-900 mb-6">Includes:</p>
                                    <ul className="space-y-5">
                                        {currentData.essentials.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                                                <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Advanced Plan (Highlighted) */}
                            <div className="bg-white rounded-3xl p-8 border-2 border-blue-600 shadow-2xl shadow-blue-900/10 relative transform lg:-translate-y-4 flex flex-col">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    Most Popular
                                </div>

                                <div className="mb-6 mt-2">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Shield className="text-blue-600" size={24} />
                                        <h3 className="text-2xl font-bold text-slate-900">Advanced</h3>
                                    </div>
                                    <p className="text-slate-500 text-sm min-h-[40px]">{currentData.advanced.desc}</p>
                                </div>

                                <Link href="/contact" className="w-full">
                                    <Button className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg mb-8 shadow-lg shadow-blue-600/20">
                                        Book Consultation
                                    </Button>
                                </Link>

                                <div className="mt-auto pt-6 border-t border-slate-100">
                                    <p className="text-sm font-semibold text-slate-900 mb-6">Everything in Essentials +</p>
                                    <ul className="space-y-5">
                                        {currentData.advanced.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                                                <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Enterprise Plan */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                                <div className="mb-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Building className="text-slate-900" size={24} />
                                        <h3 className="text-2xl font-bold text-slate-900">Enterprise</h3>
                                    </div>
                                    <p className="text-slate-500 text-sm min-h-[40px]">{currentData.enterprise.desc}</p>
                                </div>

                                <Link href="/contact" className="w-full">
                                    <Button variant="outline" className="w-full py-6 text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300 rounded-xl font-bold text-lg mb-8">
                                        Request Custom Quote
                                    </Button>
                                </Link>

                                <div className="mt-auto pt-6 border-t border-slate-100">
                                    <p className="text-sm font-semibold text-slate-900 mb-6">Everything in Advanced +</p>
                                    <ul className="space-y-5">
                                        {currentData.enterprise.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                                                <Check className="text-slate-900 flex-shrink-0 mt-0.5" size={18} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Trusted By */}
            <TrustedBy />

            {/* FAQs */}
            <section className="py-24 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide uppercase mb-6 inline-block">
                            FAQs
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                            Frequently Asked Questions
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

            {/* Background Decoration Lines (Bottom) */}
            <div className="fixed bottom-0 left-0 right-0 h-96 -z-10 pointer-events-none opacity-30">
                <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="#f1f5f9" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <Contact />
        </main>
    );
}
