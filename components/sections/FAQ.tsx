"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How long does a penetration test take?",
        answer: "The duration depends on the scope and complexity of the application. Typically, a web application pentest takes between 1 to 3 weeks.",
    },
    {
        question: "Do you provide retesting?",
        answer: "Yes, we provide one round of complimentary retesting to verify that the reported vulnerabilities have been fixed.",
    },
    {
        question: "What is the difference between VAPT and Pentesting?",
        answer: "VAPT (Vulnerability Assessment and Penetration Testing) is a broad term. VA focuses on identifying vulnerabilities (often automated), while Pentesting involves manual exploitation to understand the real-world impact.",
    },
    {
        question: "Do you offer white-label services for agencies?",
        answer: "Yes, we partner with MSPs and development agencies to offer white-label security testing services.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white">
            <div className="container px-4 mx-auto max-w-3xl">
                <SectionHeading
                    title="Frequently Asked Questions"
                    subtitle="Everything you need to know about our security services."
                />

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-slate-200 rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-semibold text-lg text-slate-900">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="text-primary flex-shrink-0" />
                                ) : (
                                    <Plus className="text-slate-400 flex-shrink-0" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-muted-foreground leading-relaxed border-t border-slate-100">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
