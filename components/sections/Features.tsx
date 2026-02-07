"use client";

import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Target,
  Zap,
  Lock,
  Eye,
  Users,
} from "lucide-react";
import Link from "next/link";
import { FeaturesCardEffect } from "./FeaturesCardView";

const features = [
  {
    icon: ShieldCheck,
    title: "Attacker-Mindset Testing",
    desc: "We think like real threat actors, using the same tools and techniques to find vulnerabilities that automated scanners miss.",
  },
  {
    icon: Target,
    title: "Zero False Positives",
    desc: "Every finding is manually validated and exploitable. No noise, only actionable security issues that matter.",
  },
  {
    icon: Zap,
    title: "Vulnerability Chaining",
    desc: "We connect low-risk issues into critical attack paths, demonstrating real-world business impact.",
  },
  {
    icon: Lock,
    title: "Actionable Reports",
    desc: "Clear remediation guidance with code-level fixes your developers can implement immediately.",
  },
  {
    icon: Eye,
    title: "Continuous Monitoring",
    desc: "Ongoing security assessments to catch new vulnerabilities as your application evolves.",
  },
  {
    icon: Users,
    title: "Dedicated Security Team",
    desc: "Work with the same experts throughout your engagement for consistent, deep understanding.",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="px-4 py-1.5 rounded-full bg-red-100 text-red-700 text-sm font-bold tracking-wide uppercase mb-6 inline-block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Traditional tools miss the exploits that real attackers use.
          </h2>
          <p className="text-lg text-slate-600">
            At Root Recon, security is not about counting vulnerabilities. It is
            about finding the ones that truly matter. We focus on real attack
            paths that bypass controls, abuse business logic, break
            authorization, and lead to data leaks or fraud.
          </p>
        </div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow group">
                            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600 mb-5 group-hover:bg-red-100 transition-colors">
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-slate-600 text-sm mb-4 leading-relaxed">{item.desc}</p>
                            <Link href="/solutions" className="inline-flex items-center text-red-600 font-semibold text-sm hover:gap-2 transition-all group-hover:underline">
                                Learn More <ArrowRight size={14} className="ml-1" />
                            </Link>
                        </div>
                    ))}
                </div> */}

        <FeaturesCardEffect />
      </div>
    </section>
  );
}
