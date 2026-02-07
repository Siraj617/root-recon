"use client";

import { Header } from "@/components/layout/Header";
import { Contact } from "@/components/sections/Contact";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";

const blogPosts = [
    {
        title: "How We Discovered a Critical Bug in Meta AI",
        excerpt: "A deep technical analysis of a prompt injection vulnerability that could leak generated content.",
        category: "Vulnerability Research",
        date: "Dec 15, 2024",
        readTime: "8 min read",
    },
    {
        title: "OWASP API Security Top 10: 2024 Edition",
        excerpt: "An updated look at the most critical API security risks and how to mitigate them.",
        category: "API Security",
        date: "Dec 10, 2024",
        readTime: "12 min read",
    },
    {
        title: "The Rise of AI-Powered Attacks: What You Need to Know",
        excerpt: "How threat actors are leveraging AI to automate attacks and what defenders can do.",
        category: "Threat Intelligence",
        date: "Dec 5, 2024",
        readTime: "6 min read",
    },
    {
        title: "Secure Coding Practices for Modern Developers",
        excerpt: "A practical guide to implementing secure coding practices in your development workflow.",
        category: "Secure Development",
        date: "Nov 28, 2024",
        readTime: "10 min read",
    },
    {
        title: "Red Teaming vs Penetration Testing: Key Differences",
        excerpt: "Understanding when to use each approach and how they complement each other.",
        category: "Offensive Security",
        date: "Nov 20, 2024",
        readTime: "7 min read",
    },
    {
        title: "Cloud Security Best Practices for 2025",
        excerpt: "Preparing your cloud infrastructure for the evolving threat landscape.",
        category: "Cloud Security",
        date: "Nov 15, 2024",
        readTime: "9 min read",
    },
];

export default function BlogPage() {
    return (
        <main className="min-h-screen font-sans">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
                <div className="container px-4 mx-auto text-center">
                    <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide uppercase mb-6 inline-block">
                        Security Research
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Insights from the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            Security Frontlines
                        </span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Tactical insights, vulnerability research, and best practices from our security experts.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-24">
                <div className="container px-4 mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <article key={index} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                                {/* Thumbnail Placeholder */}
                                <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                                    <Tag className="w-12 h-12 text-slate-300" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md font-medium">{post.category}</span>
                                        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                        <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-slate-600 mb-4 line-clamp-2">{post.excerpt}</p>
                                    <Link href="#" className="inline-flex items-center text-blue-600 font-semibold text-sm hover:gap-2 transition-all">
                                        Read More <ArrowRight size={14} className="ml-1" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
