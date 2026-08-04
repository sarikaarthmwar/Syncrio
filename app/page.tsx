import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Products } from "@/components/Products";
import { WhySyncrio } from "@/components/WhySyncrio";
import { Industries } from "@/components/Industries";
import { HowWeWork } from "@/components/HowWeWork";
import { AboutFounder } from "@/components/AboutFounder";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <WhatWeDo />
        <Products />
        <WhySyncrio />
        <Industries />
        <HowWeWork />
        <AboutFounder />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
