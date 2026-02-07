"use client";

import { motion } from "framer-motion";

const trustedCompanies = {
    row1: ["Groww", "SBI General", "Swiggy", "SBI Life", "SKIDATA", "IATA", "ICICI Prudential", "Zaggle", "MyGate", "WebEngage"],
    row2: ["Wati", "PolicyBazaar", "Composio", "Jupiter", "Upstox", "Razorpay", "CRED", "PhonePe", "Paytm", "Zerodha"]
};

export function TrustedBy() {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container px-4 mx-auto">
                <p className="text-center text-slate-600 font-medium mb-10">
                    Trusted by leading security-conscious companies across the world
                </p>

                {/* Row 1 - Scrolling Left */}
                <div className="relative mb-6">
                    <div className="flex overflow-hidden">
                        <motion.div
                            className="flex gap-12 whitespace-nowrap"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        >
                            {[...trustedCompanies.row1, ...trustedCompanies.row1].map((company, index) => (
                                <span key={index} className="text-xl font-bold text-slate-300 hover:text-slate-500 transition-colors cursor-default">
                                    {company}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Row 2 - Scrolling Right */}
                <div className="relative">
                    <div className="flex overflow-hidden">
                        <motion.div
                            className="flex gap-12 whitespace-nowrap"
                            animate={{ x: ["-50%", "0%"] }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        >
                            {[...trustedCompanies.row2, ...trustedCompanies.row2].map((company, index) => (
                                <span key={index} className="text-xl font-bold text-slate-300 hover:text-slate-500 transition-colors cursor-default">
                                    {company}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
