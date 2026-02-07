"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Rocket, TrendingUp, Building2, CreditCard, ShieldCheck } from "lucide-react";

const clients = [
    {
        icon: Rocket,
        title: "Early-Stage Startups",
        desc: "Preparing for launch with secure foundations.",
    },
    {
        icon: TrendingUp,
        title: "Growing SaaS Companies",
        desc: "Scaling platforms while maintaining security posture.",
    },
    {
        icon: Building2,
        title: "Enterprises",
        desc: "Protecting large user bases and complex infrastructure.",
    },
    {
        icon: CreditCard,
        title: "Financial Platforms",
        desc: "Handling sensitive transactions with highest security standards.",
    },
    {
        icon: ShieldCheck,
        title: "High Compliance Orgs",
        desc: "Meeting strict regulatory and trust requirements.",
    },
];

export function WhoWeHelp() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container px-4 mx-auto">
                <SectionHeading
                    title="Who We Help"
                    subtitle="Whether you are securing your first production release or strengthening an established platform, Root Recon adapts its approach to your risk profile."
                />

                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
                    {clients.map((client, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow text-center group">
                            <div className="w-12 h-12 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-100 transition-colors">
                                <client.icon size={24} />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">{client.title}</h3>
                            <p className="text-sm text-slate-600">{client.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
