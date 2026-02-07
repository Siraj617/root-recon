"use client";

import { Header } from "@/components/layout/Header";
import { Contact } from "@/components/sections/Contact";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        quote: "RootRecon is like our extended security team. They are very patient in pointing out non-trivial security bugs in our systems.",
        name: "John Smith",
        title: "CTO, TechCorp",
        company: "TechCorp",
    },
    {
        quote: "They pointed out a bunch of high and critical vulnerabilities, helping us meet our goals and making our applications more secure.",
        name: "Sarah Johnson",
        title: "VP Engineering, FinanceApp",
        company: "FinanceApp",
    },
    {
        quote: "The team at RootRecon not only finds security loopholes but also provides detailed action plans to fix the vulnerabilities.",
        name: "Mike Chen",
        title: "Security Lead, CloudBase",
        company: "CloudBase",
    },
    {
        quote: "I have been impressed with their deep expertise on the OWASP areas, and the team does quite a thorough job on each engagement.",
        name: "Emily Davis",
        title: "CIO, HealthTech Inc",
        company: "HealthTech Inc",
    },
    {
        quote: "They gave great feedback that improved the security of our products immensely and allowed us to focus on product development.",
        name: "David Wilson",
        title: "Founder, SaaS Startup",
        company: "SaaS Startup",
    },
    {
        quote: "We have been working with RootRecon for a year now and the team has helped us make sure that our security is never compromised.",
        name: "Lisa Brown",
        title: "Head of Security, E-Commerce Co",
        company: "E-Commerce Co",
    },
];

const caseStudies = [
    {
        title: "Fintech Unicorn Strengthens API Security",
        description: "Prevented critical data exposure by identifying BOLA vulnerabilities in core transaction APIs.",
        stats: { label: "Vulnerabilities Found", value: "47" },
        tag: "Fintech",
    },
    {
        title: "Cloud Misconfiguration Discovery",
        description: "Led to Zero-Trust Architecture improvement after uncovering critical IAM privilege escalation.",
        stats: { label: "Risk Reduction", value: "85%" },
        tag: "Cloud",
    },
    {
        title: "Healthcare App HIPAA Compliance",
        description: "Identified and fixed insecure local storage issues in a patient data mobile application.",
        stats: { label: "Compliance Score", value: "100%" },
        tag: "Healthcare",
    },
];

export default function CustomersPage() {
    return (
        <main className="min-h-screen font-sans">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
                <div className="container px-4 mx-auto text-center">
                    <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide uppercase mb-6 inline-block">
                        Customer Stories
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Trusted by Security-Conscious <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            Companies Worldwide
                        </span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        See how leading organizations have strengthened their security posture with RootRecon.
                    </p>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-24">
                <div className="container px-4 mx-auto">
                    <SectionHeading title="What Our Customers Say" subtitle="Real feedback from security leaders." />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
                                </div>
                                <Quote className="w-8 h-8 text-blue-100 mb-4" />
                                <p className="text-slate-700 mb-6 leading-relaxed">"{item.quote}"</p>
                                <div className="border-t border-slate-100 pt-4">
                                    <div className="font-bold text-slate-900">{item.name}</div>
                                    <div className="text-sm text-slate-500">{item.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-24 bg-slate-50">
                <div className="container px-4 mx-auto">
                    <SectionHeading title="Featured Case Studies" subtitle="Real-world impact of our engagements." />
                    <div className="grid md:grid-cols-3 gap-8">
                        {caseStudies.map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase">{item.tag}</span>
                                <h3 className="text-xl font-bold text-slate-900 mt-4 mb-3">{item.title}</h3>
                                <p className="text-slate-600 mb-6">{item.description}</p>
                                <div className="bg-slate-50 rounded-xl p-4 text-center">
                                    <div className="text-3xl font-extrabold text-blue-600">{item.stats.value}</div>
                                    <div className="text-sm text-slate-500">{item.stats.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
