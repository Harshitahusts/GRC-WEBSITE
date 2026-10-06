import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Search engines and AI assistants (ChatGPT, Claude, Perplexity, Gemini) may read the whole
// public site, so GRC Flow can show up in search results and in AI answers.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      {
        userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Google-Extended", "Applebot-Extended"],
        allow: "/",
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
