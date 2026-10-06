import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { legalNav, nav, site } from "@/lib/site";

// Every public page, for search engines (served at /sitemap.xml).
export default function sitemap(): MetadataRoute.Sitemap {
  const main = ["/", ...nav.map((n) => n.href), "/blog", "/about", "/contact"];
  const legal = legalNav.map((n) => n.href);
  const unique = [...new Set(main)];
  return [
    ...unique.map((path) => ({
      url: `${site.url}${path === "/" ? "" : path}`,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...posts().map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: p.updated,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...legal.map((path) => ({ url: `${site.url}${path}`, changeFrequency: "yearly" as const, priority: 0.3 })),
  ];
}
