"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
  Menu,
  X,
  ChevronDown,
  Shield,
  Target,
  Smartphone,
  Globe,
  Server,
  Building,
  Heart,
  DollarSign,
  FileText,
  BookOpen,
  Users,
  Info,
  MessageSquare,
  ShoppingCart,
  GraduationCap,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";

import { Cloud, Code } from "lucide-react";

const menuData = {
  services: {
    title: "Services",
    items: [
      // { name: "Penetration Testing", href: "/solutions/penetration-testing", icon: Shield, desc: "Comprehensive security assessments" },

      {
        name: "Web App Security",
        href: "/solutions/web-security",
        icon: Globe,
        desc: "OWASP Top 10 & beyond",
      },
      {
        name: "API Security",
        href: "/solutions/api-security",
        icon: Server,
        desc: "REST, GraphQL & gRPC",
      },
      {
        name: "Mobile Security",
        href: "/solutions/mobile-security",
        icon: Smartphone,
        desc: "iOS & Android testing",
      },
      {
        name: "Cloud Security",
        href: "/solutions/cloud-security",
        icon: Cloud,
        desc: "AWS, Azure & GCP",
      },
      // { name: "Code Review", href: "/solutions/code-review", icon: Code, desc: "Secure code analysis" },
    ],
  },
  //   solutions: {
  //     title: "Industries",
  //     items: [
  //       {
  //         name: "Fintech",
  //         href: "/industries/fintech",
  //         icon: DollarSign,
  //         desc: "Secure financial applications",
  //       },
  //       {
  //         name: "SaaS",
  //         href: "/industries/saas",
  //         icon: Cloud,
  //         desc: "Cloud software security",
  //       },
  //       {
  //         name: "E-commerce",
  //         href: "/industries/ecommerce",
  //         icon: ShoppingCart,
  //         desc: "Online retail protection",
  //       },
  //       {
  //         name: "Healthcare",
  //         href: "/industries/healthcare",
  //         icon: Heart,
  //         desc: "HIPAA compliant testing",
  //       },
  //       {
  //         name: "Education",
  //         href: "/industries/education",
  //         icon: GraduationCap,
  //         desc: "EdTech & institution security",
  //       },
  //       {
  //         name: "Enterprise",
  //         href: "/industries/enterprise",
  //         icon: Building,
  //         desc: "Large-scale system security",
  //       },
  //     ],
  //   },
  resources: {
    title: "Resources",
    items: [
      {
        name: "Blog",
        href: "/blog",
        icon: FileText,
        desc: "Security insights",
      },
      //   {
      //     name: "Case Studies",
      //     href: "/customers",
      //     icon: BookOpen,
      //     desc: "Success stories",
      //   },
    ],
  },
  company: {
    title: "Company",
    items: [
      {
        name: "About Us",
        href: "/about",
        icon: Info,
        desc: "Our story & mission",
      },
      {
        name: "Customers",
        href: "/customers",
        icon: Users,
        desc: "Who trusts us",
      },

      {
        name: "Contact",
        href: "/contact",
        icon: MessageSquare,
        desc: "Get in touch",
      },
    ],
  },
};

function MegaMenuDropdown({
  data,
  isOpen,
}: {
  data: typeof menuData.services;
  isOpen: boolean;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 mt-2 w-80 bg-white border border-slate-200 shadow-2xl rounded-2xl overflow-hidden"
        >
          <div className="p-4">
            {data.items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-100 transition-colors flex-shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">
                    {item.name}
                  </div>
                  <div className="text-xs text-slate-500">{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuKeys = Object.keys(menuData) as (keyof typeof menuData)[];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-100",
        scrolled ? "py-2 shadow-sm" : "py-4",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Larger Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-56 h-14">
            <Image
              src="/logo.png"
              alt="RootRecon Logo"
              width={170}
              height={100}
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav with Mega Menu */}
        <nav className="hidden lg:flex items-center gap-1">
          {menuKeys.map((key) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => setActiveMenu(key)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-700 hover:text-red-600 transition-colors rounded-lg hover:bg-slate-50">
                {menuData[key].title}
                <ChevronDown
                  size={14}
                  className={cn(
                    "transition-transform",
                    activeMenu === key && "rotate-180",
                  )}
                />
              </button>
              <MegaMenuDropdown
                data={menuData[key]}
                isOpen={activeMenu === key}
              />
            </div>
          ))}
          {/* <Link
            href="/pricing"
            className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-red-600 transition-colors rounded-lg hover:bg-slate-50"
          >
            Pricing
          </Link> */}
        </nav>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/get-started">
            <Button className="bg-primary hover:bg-red-700 text-white shadow-lg shadow-blue-600/20 px-6">
              Get Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-slate-600 hover:text-red-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-y-auto max-h-[calc(100vh-80px)]"
          >
            <div className="container mx-auto px-4 py-6 space-y-6">
              {menuKeys.map((key) => (
                <div key={key} className="space-y-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {menuData[key].title}
                  </div>
                  {menuData[key].items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block py-2 text-slate-700 hover:text-red-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <Link href="/get-started">
                  <Button className="w-full bg-primary text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
