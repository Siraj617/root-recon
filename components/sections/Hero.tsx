"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HeroAnimation } from "./HeroAnimation";
import { ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
            {/* Premium Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-red rounded-full blur-[120px] mix-blend-multiply" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-indigo-100/40 rounded-full blur-[100px] mix-blend-multiply" />
                <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-white rounded-full blur-[80px] opacity-80" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col items-start text-left space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 text-primary text-sm font-bold shadow-sm"
                        >
                            <ShieldCheck size={16} className="text-primary-600" />
                            <span className="tracking-wide uppercase text-xs">Trusted by Fortune 500 Companies</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-rootrec leading-[1.1]"
                        >
                            Deep Insights <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary">
                                Zero Blind Spots
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed font-medium"
                        >
                            Root Recon is an offensive security company that helps organizations find and fix real-world security risks before attackers do. We uncover hidden gaps in modern, fast-moving applications built on APIs, cloud, and third-party systems. Using an attacker mindset, not just automated tools, we identify how vulnerabilities can be chained to cause real business damage.

                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-5 pt-4 w-full sm:w-auto"
                        >
                            <Link href="/contact">
                                <Button size="lg" className="w-full sm:w-auto text-lg h-14 bg-primary hover:bg-red-700 text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-105">
                                    Get a Free Consultation
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14 bg-white/80 backdrop-blur-sm text-slate-900 hover:bg-white border-slate-200 hover:border-blue-200 group shadow-sm transition-all">
                                    Request a Quote <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform text-primary" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden lg:block relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl -z-10" />
                        <HeroAnimation />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
