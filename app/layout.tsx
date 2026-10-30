import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL, SITE_NAME, ORG_DESCRIPTION } from "@/lib/site";
import { ContactModalProvider } from "@/components/ContactModalProvider";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Syncrio — Custom AI Solutions, Built for Your Business", template: `%s | ${SITE_NAME}` },
  description: "Syncrio designs and builds custom AI applications, agents and intelligent workflows around your business processes, data and systems.",
  keywords: ["custom AI development", "AI solution engineering", "AI agents", "AI applications", "enterprise AI", "AI automation", "RAG", "AI workflow automation", "custom AI solutions"],
  openGraph: { title: "Syncrio — Custom AI Solutions, Built for Your Business", description: "Custom AI applications, agents and intelligent workflows built around your business.", url: SITE_URL, siteName: SITE_NAME, type: "website" },
  twitter: { card: "summary_large_image", title: "Syncrio — Custom AI Solutions, Built for Your Business", description: "Custom AI applications, agents and intelligent workflows built around your business." },
};

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description: ORG_DESCRIPTION,
  knowsAbout: ["Custom AI development", "AI agents", "Intelligent automation", "Enterprise AI", "AI solution engineering"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
        <ContactModalProvider>{children}</ContactModalProvider>
      </body>
    </html>
  );
}
