import { useState, useEffect, useRef } from "react";
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

export function FeaturesCardEffect() {
  const [isFanned, setIsFanned] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => setIsFanned(entry.isIntersecting),
      { threshold: 0.35 },
    );

    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const careItems = [
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

  /**
   * PERFECT FAN MATH
   * Works for any number of cards.
   */
  const getFanTransform = (index: number, total: number, fanned: boolean) => {
    if (!fanned) return "translateX(0px) rotate(0deg)";

    const middle = (total - 1) / 2;
    const offset = index - middle;

    const spread = 240; // 🔥 controls gap between cards
    const lift = 28; // vertical arc
    const rotateFactor = 5; // readability

    const translateX = offset * spread;
    const translateY = Math.abs(offset) * -lift;
    const rotate = offset * rotateFactor;

    return `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg)`;
  };

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* Mobile Sticky Stack */}
      <div className="flex flex-col gap-12 md:hidden pb-12">
        {careItems.map((item, index) => (
          <div
            key={index}
            className="sticky bg-neutral-900 rounded-2xl p-8 shadow-xl border border-white/10"
            style={{
              top: `${6 + index * 2}rem`,
              zIndex: 10 + index,
              marginBottom: index === careItems.length - 1 ? 0 : "60px",
            }}
          >
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600 mb-5 group-hover:bg-red-100 transition-colors">
              <item.icon size={24} />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>

            <p className="text-gray-400 mb-4 leading-relaxed">{item.desc}</p>

            <div className="text-orange-500 font-bold inline-flex items-center gap-2 text-sm uppercase tracking-wider">
              Value {index + 1} <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Fan */}
      <div className="hidden md:flex justify-center items-center h-[620px] relative perspective-[1600px] [transform-style:preserve-3d]">
        {careItems.map((item, index) => (
          <div
            key={index}
            className="absolute w-[265px] h-[380px] bg-black rounded-2xl p-8 shadow-2xl border border-white/10 transition-all duration-700 ease-out will-change-transform flex flex-col hover:scale-105 hover:border-slate-500/50 hover:shadow-orange-500/10"
            style={{
              transform: getFanTransform(index, careItems.length, isFanned),
              zIndex: 20 + index,
            }}
          >
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600 mb-5 group-hover:bg-red-100 transition-colors">
              <item.icon size={24} />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>

            <p className="text-white mb-6 leading-relaxed flex-grow">
              {item.desc}
            </p>

            {/* <div className="mt-auto text-orange-500 font-bold inline-flex items-center gap-2 text-sm uppercase tracking-wider opacity-80 hover:opacity-100 transition-opacity">
              Value {index + 1} <ArrowRight className="h-4 w-4" />
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
