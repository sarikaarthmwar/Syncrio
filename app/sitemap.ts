import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog-posts";
import { services } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/services`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.95 },
    ...services.map((service) => ({
      url: `${SITE_URL}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/careers`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    ...posts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.updated),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
