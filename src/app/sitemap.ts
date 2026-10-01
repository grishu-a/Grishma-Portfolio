import type { MetadataRoute } from "next";
import { caseStudies, siteUrl } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    ...caseStudies.map((study) => ({
      url: `${siteUrl}/case-studies/${study.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
