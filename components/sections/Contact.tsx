"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Twitter, Linkedin, Github, Mail, ArrowRight } from "lucide-react";

const footerLinks = {
    services: {
        title: "Services",
        links: [
            { name: "Penetration Testing", href: "/solutions" },
            { name: "Red Teaming", href: "/solutions" },
            { name: "Mobile App Security", href: "/solutions" },
            { name: "API Security", href: "/solutions" },
            { name: "Cloud Security", href: "/solutions" },
            { name: "Secure Code Review", href: "/solutions" },
        ],
    },
    solutions: {
        title: "Solutions",
        links: [
            { name: "Fintech Security", href: "/solutions" },
            { name: "AI/ML Security", href: "/solutions" },
            { name: "SaaS Security", href: "/solutions" },
            { name: "Healthcare Security", href: "/solutions" },
        ],
    },
    resources: {
        title: "Resources",
        links: [
            { name: "Blog", href: "/blog" },
            { name: "Case Studies", href: "/customers" },
            { name: "Buyer's Guide", href: "/blog" },
            { name: "Documentation", href: "/blog" },
        ],
    },
    company: {
        title: "Company",
        links: [
            { name: "About Us", href: "/about" },
            { name: "Customers", href: "/customers" },
            { name: "Pricing", href: "/pricing" },
            { name: "Contact", href: "/contact" },
        ],
    },
};

export function Contact() {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
            <div className="container px-4 mx-auto">
                {/* Main Footer */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
                    {/* Brand */}
                    <div className="col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="relative w-48 h-12 brightness-0 invert">
                                <Image
                                    src="/logo.png"
                                    alt="RootRecon Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed mb-6 text-slate-400 max-w-xs">
                            Offensive security for modern applications. We help companies identify and fix vulnerabilities before attackers exploit them.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"><Twitter size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"><Linkedin size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"><Github size={18} /></a>
                        </div>
                    </div>

                    {/* Links */}
                    {Object.values(footerLinks).map((section, index) => (
                        <div key={index}>
                            <h4 className="font-bold text-white mb-4">{section.title}</h4>
                            <ul className="space-y-3 text-sm">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link href={link.href} className="hover:text-white transition-colors">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter + CTA */}


                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} RootRecon. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
