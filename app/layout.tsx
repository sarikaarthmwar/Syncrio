import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL, SITE_NAME, ORG_DESCRIPTION } from "@/lib/site";
import { ContactModalProvider } from "@/components/ContactModalProvider";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Syncrio — AI-Powered Enterprise Delivery & Transformation",
    template: `%s | ${SITE_NAME}`,
  },
  description: ORG_DESCRIPTION,
  keywords: [
    "enterprise AI",
    "AI transformation",
    "AI agents",
    "AI consulting",
    "intelligent automation",
    "SaaS delivery",
    "enterprise automation",
    "AI program management",
    "digital transformation",
  ],
  openGraph: {
    title: "Syncrio — AI-Powered Enterprise Delivery & Transformation",
    description: ORG_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syncrio — AI-Powered Enterprise Delivery & Transformation",
    description: ORG_DESCRIPTION,
  },
};

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description: ORG_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
        <ContactModalProvider>{children}</ContactModalProvider>
      </body>
    </html>
  );
}
