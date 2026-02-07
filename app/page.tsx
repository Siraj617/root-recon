import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Research } from "@/components/sections/Research";
import { Features } from "@/components/sections/Features";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { Services } from "@/components/sections/Services";
import { Methodology } from "@/components/sections/Methodology";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { Contributions } from "@/components/sections/Contributions";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-rootrec-100
text-rootrec-900
 text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground font-sans"
    >
      <Header />
      <Hero />
      <Research />
      <Features />

      <Services />
      <Methodology />
      <CaseStudies />
      <About />
      <FAQ />

      <Contact />
    </main>
  );
}
