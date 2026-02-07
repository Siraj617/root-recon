"use client";

import { Shield, Award } from "lucide-react";
import { motion } from "framer-motion";

const contributions = [
    { name: "Microsoft", slug: "microsoft", color: "#5E5E5E" },
    { name: "Amazon", slug: "amazon", color: "#FF9900" },
    { name: "Meta", slug: "meta", color: "#0081FB" },
    { name: "Stripe", slug: "stripe", color: "#635BFF" },
    { name: "Uber", slug: "uber", color: "#000000" },
    { name: "IBM", slug: "ibm", color: "#052FAD" },
    { name: "Capital One", slug: "capitalone", color: "#004879" },
    { name: "Zendesk", slug: "zendesk", color: "#03363D" },
    { name: "ResMed", slug: "resmed", color: "#E35205" },
    { name: "Urban Company", slug: "urbancompany", color: "#000000" },
];

const additionalCompanies = [
    "ImpactGuru",
    "CodeHS",
    "Amdax",
    "GLS",
    "Balena",
    "ZKTeco",
];

export function Contributions() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-slate-50">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-green-100 text-green-700 border border-green-200 rounded-full text-sm font-medium">
                        <Award className="w-4 h-4" />
                        Responsible Disclosure
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Our Security Contributions
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Our security contributions are not limited to the organizations listed below.
                        We strongly believe in responsible disclosure and collaborative security.
                    </p>
                </div>

                {/* Main Company Logos Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-10">
                    {contributions.map((company, index) => (
                        <motion.div
                            key={company.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all duration-300 flex flex-col items-center justify-center h-28">
                                <img
                                    src={`https://cdn.simpleicons.org/${company.slug}/${company.color.replace('#', '')}`}
                                    alt={`${company.name} logo`}
                                    className="h-8 w-auto object-contain mb-2 group-hover:scale-110 transition-transform duration-300"
                                    loading="lazy"
                                />
                                <span className="text-xs text-slate-500 font-medium">{company.name}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Companies */}
                <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
                    <span className="text-sm text-slate-500 mr-2">And more:</span>
                    {additionalCompanies.map((company, index) => (
                        <span
                            key={company}
                            className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors"
                        >
                            {company}
                        </span>
                    ))}
                </div>

                {/* Trust Badge */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                            <Shield className="w-8 h-8" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Committed to Ethical Security</h3>
                    <p className="text-blue-100 max-w-2xl mx-auto">
                        From startups to Fortune-level organizations, we&apos;ve helped secure hundreds of
                        applications worldwide through responsible vulnerability disclosure.
                    </p>
                </div>
            </div>
        </section>
    );
}