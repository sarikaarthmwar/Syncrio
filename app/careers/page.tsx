import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CareersHero } from "@/components/careers/CareersHero";
import { EcosystemSection } from "@/components/careers/EcosystemSection";
import { JourneySection } from "@/components/careers/JourneySection";
import { LearningHubSection } from "@/components/careers/LearningHubSection";
import { JoinSection } from "@/components/careers/JoinSection";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const TITLE = "Careers at Syncrio — Build Your Career by Building Real Things";
const DESCRIPTION =
  "Don't wait for your first job to get your first experience. Join the Syncrio talent ecosystem across engineering, business, finance, operations, consulting, product, design, and growth.";

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
        <JourneySection />
        <LearningHubSection />
        <JoinSection />
      </main>
      <Footer />
    </>
  );
}
