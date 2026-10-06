import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { legalNav, nav, pagesUpdated, site } from "@/lib/site";

// Every public page, for search engines (served at /sitemap.xml). Each entry carries the
// date the page last changed, so crawlers know what to fetch again. Google ignores
// changeFrequency and priority, but other search engines still read them.
export default function sitemap(): MetadataRoute.Sitemap {
  const blog = posts();
  const newestPost = blog.map((p) => p.updated).sort().at(-1);
  const main = [...new Set(["/", ...nav.map((n) => n.href), "/about", "/contact"])];
  const url = (path: string) => `${site.url}${path === "/" ? "" : path}`;
  return [
    ...main.map((path) => ({
      url: url(path),
      // The blog index changes whenever a post does.
      lastModified: path === "/blog" && newestPost ? newestPost : pagesUpdated.marketing,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...blog.map((p) => ({
      url: url(`/blog/${p.slug}`),
      lastModified: p.updated,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...legalNav.map((n) => ({
      url: url(n.href),
      lastModified: pagesUpdated.policies,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
