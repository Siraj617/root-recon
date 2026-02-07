"use client";

import { Header } from "@/components/layout/Header";
import { Contact as Footer } from "@/components/sections/Contact";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white font-sans">
            <Header />

            <div className="pt-32 pb-20 container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get in Touch</h1>
                    <p className="text-xl text-slate-600">Have a security concern? Let's talk.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">First Name</label>
                                    <Input placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                                    <Input placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Email</label>
                                <Input type="email" placeholder="john@company.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Subject</label>
                                <Input placeholder="Security Assessment Inquiry" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Message</label>
                                <Textarea placeholder="Tell us about your project..." className="min-h-[150px]" />
                            </div>
                            <Button className="w-full bg-primary text-white">Send Message</Button>
                        </form>
                    </div>

                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        {/* Info Cards */}
                        <div className="grid gap-6">
                            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                                <Mail className="text-primary mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Email Us</h3>
                                    <p className="text-slate-600">security@rootrecon.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                                <Phone className="text-primary mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Call Us</h3>
                                    <p className="text-slate-600">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                                <MapPin className="text-primary mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Visit Us</h3>
                                    <p className="text-slate-600">123 Security Blvd, Cyber City, CA 90210</p>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="h-[300px] bg-slate-200 rounded-2xl overflow-hidden relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81732767975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6a32f7f1f81!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1631234567890!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
