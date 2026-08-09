import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CareersHero } from "@/components/careers/CareersHero";
import { EcosystemSection } from "@/components/careers/EcosystemSection";
import { WhoBelongsSection } from "@/components/careers/WhoBelongsSection";
import { PathwaySection } from "@/components/careers/PathwaySection";
import { QuoteSection } from "@/components/careers/QuoteSection";
import { TalentForm } from "@/components/careers/TalentForm";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const TITLE = "Careers at Syncrio — Join the Talent Ecosystem";
const DESCRIPTION =
  "Syncrio is a business, technology, and consulting ecosystem. Join the talent pool across engineering, business, finance, operations, consulting, product, design, and growth.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/careers` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/careers`,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <CareersHero />
        <EcosystemSection />
        <WhoBelongsSection />
        <PathwaySection />
        <QuoteSection />
        <TalentForm />
      </main>
      <Footer />
    </>
  );
}
