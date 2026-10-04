import type { MetadataRoute } from "next";
import { caseStudies, insights, siteUrl } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    ...caseStudies.map((study) => ({
      url: `${siteUrl}/case-studies/${study.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
    ...insights.map((article) => ({
      url: `${siteUrl}/insights/${article.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
