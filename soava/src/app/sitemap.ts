import type { MetadataRoute } from "next";

// Le plan du site a besoin de l'adresse réelle du site (NEXT_PUBLIC_SITE_URL).
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) return [];
  return [{ url: siteUrl, changeFrequency: "monthly", priority: 1 }];
}
