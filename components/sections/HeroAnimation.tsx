"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Server,
  Smartphone,
  Cloud,
  Shield,
  Lock,
  Code,
  FileSearch,
  Target,
  Layers,
  Crosshair,
} from "lucide-react";

const services = [
  { icon: Globe, label: "Web App Security", x: -220, y: -100 },
  { icon: Shield, label: "Penetration Testing", x: 220, y: -100 },
  { icon: Server, label: "API Security", x: -220, y: 100 },
  { icon: Cloud, label: "Cloud Security", x: 220, y: 100 },
  { icon: Smartphone, label: "Mobile Security", x: 0, y: -180 },
  { icon: FileSearch, label: "Code Review", x: -120, y: 180 },
  { icon: Code, label: "Code Review", x: -300, y: 0 },
];

export interface HeroAnimationProps {
  items?: { icon: any; label: string; x: number; y: number }[];
}

export function HeroAnimation({ items = services }: HeroAnimationProps) {
  return (
    <div className="relative w-full h-full min-h-[550px] flex items-center justify-center">
      {/* Central Shield */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-20"
      >
        <div className="relative">
          {/* Shield - No background */}
          <div className="relative w-40 h-48 flex items-center justify-center">
            <Shield className="text-primary w-24 h-24" strokeWidth={1.5} />
          </div>
        </div>
      </motion.div>

      {/* Orbiting Rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute border rounded-full"
          style={{
            width: 280 + i * 100,
            height: 280 + i * 100,
            borderColor: `rgba(59, 130, 246, ${0.3 - i * 0.08})`,
          }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{
            duration: 30 + i * 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Orbiting Dot 1 */}
          <div
            className="absolute w-3 h-3 bg-primary rounded-full shadow-lg shadow-blue-500/50"
            style={{ top: "50%", left: 0, transform: "translate(-50%, -50%)" }}
          />
          {/* Orbiting Dot 2 - Opposite side */}
          <div
            className="absolute w-3 h-3 bg-primary rounded-full shadow-lg shadow-blue-500/50"
            style={{ top: "50%", right: 0, transform: "translate(50%, -50%)" }}
          />
        </motion.div>
      ))}

      {/* Floating Service Cards */}
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="absolute z-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, x: item.x, y: item.y }}
          transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.8,
            }}
            className="flex items-center gap-3 px-4 py-3"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-primary">
              <item.icon size={24} />
            </div>
            <span className="font-bold text-primary text-sm">
              {item.label}
            </span>
          </motion.div>
        </motion.div>
      ))}

      {/* Scanning Line */}
      <motion.div
        className="absolute w-[500px] h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent rounded-full"
        animate={{ top: ["15%", "85%", "15%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
