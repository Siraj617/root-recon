"use client";

import { Header } from "@/components/layout/Header";
import { Contact } from "@/components/sections/Contact";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { CheckCircle2, Calendar, Shield, Clock } from "lucide-react";

export default function GetStartedPage() {
    return (
        <main className="min-h-screen font-sans">
            <Header />

            <section className="pt-28 pb-16">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
                        {/* Left */}
                        <div>
                            <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide uppercase mb-4 inline-block">
                                Get Started
                            </span>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                                Secure Your Business Today
                            </h1>
                            <p className="text-lg text-slate-600 mb-6">
                                Book a free consultation with our security experts. No obligations.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { icon: Shield, text: "CREST-accredited testing" },
                                    { icon: Calendar, text: "Flexible engagements" },
                                    { icon: CheckCircle2, text: "Zero false positives" },
                                    { icon: Clock, text: "Fast turnaround" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                                            <item.icon size={20} />
                                        </div>
                                        <span className="font-medium text-slate-700">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right - Form */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg">
                            <h2 className="text-xl font-bold text-slate-900 mb-1">Book a Demo</h2>
                            <p className="text-slate-500 text-sm mb-6">We'll respond within 24 hours.</p>

                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-medium text-slate-700 block mb-1">First Name</label>
                                        <Input placeholder="John" className="h-10" />
                                    </div>
                                    <div>
                                        <label className="text-xs font-medium text-slate-700 block mb-1">Last Name</label>
                                        <Input placeholder="Doe" className="h-10" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-medium text-slate-700 block mb-1">Work Email</label>
                                    <Input type="email" placeholder="john@company.com" className="h-10" />
                                </div>
                                <div>
                                    <label className="text-xs font-medium text-slate-700 block mb-1">Company</label>
                                    <Input placeholder="Acme Inc." className="h-10" />
                                </div>
                                <div>
                                    <label className="text-xs font-medium text-slate-700 block mb-1">Message</label>
                                    <Textarea placeholder="Tell us about your security needs..." className="min-h-[80px]" />
                                </div>
                                <Button className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white">
                                    Schedule Consultation
                                </Button>
                                <p className="text-xs text-center text-slate-400">
                                    By submitting, you agree to our <a href="/privacy-policy" className="underline">Privacy Policy</a>.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
