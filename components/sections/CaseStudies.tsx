"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";

const cases = [
    {
        title: "How a Fintech Unicorn Strengthened API Security",
        summary: "Prevented critical data exposure by identifying BOLA vulnerabilities in their core transaction API.",
        tag: "Fintech",
    },
    {
        title: "Cloud Misconfiguration Discovery",
        summary: "Led to Zero-Trust Architecture improvement after uncovering a critical IAM privilege escalation path.",
        tag: "Cloud Security",
    },
    {
        title: "Securing a Healthcare App for HIPAA Compliance",
        summary: "Identified and fixed insecure local storage issues in a patient data mobile application.",
        tag: "Healthcare",
    },
];

export function CaseStudies() {
    return (
        <section className="py-24 bg-white">
            <div className="container px-4 mx-auto">
                <SectionHeading
                    title="Featured Case Studies"
                    subtitle="Real-world impact of our offensive security engagements."
                />

                <div className="grid md:grid-cols-3 gap-8">
                    {cases.map((item, index) => (
                        <Card key={index} className="group hover:shadow-md transition-all border-slate-200">
                            <CardContent className="p-8 flex flex-col h-full">
                                <div className="mb-4">
                                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide">
                                        {item.tag}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 mb-6 flex-1">
                                    {item.summary}
                                </p>
                                <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform cursor-pointer mt-auto">
                                    Read Case Study <ArrowRight size={16} className="ml-1" />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
