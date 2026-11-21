import type { MetadataRoute } from "next";

// Le plan du site a besoin de l'adresse réelle du site (NEXT_PUBLIC_SITE_URL).
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (!siteUrl) return [];
  return ["", "/about", "/contact", "/en", "/en/about", "/en/contact"].map((p) => ({
    url: `${siteUrl}${p}` || siteUrl,
    changeFrequency: "monthly" as const,
    priority: p === "" || p === "/en" ? 1 : 0.7,
  }));
}
