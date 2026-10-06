import type { ReactNode } from "react";

// One blog post. Each post lives in lib/blog/posts/<slug>.tsx and is listed in lib/blog/index.ts.
export type Post = {
  slug: string; // the URL: /blog/<slug>
  title: string; // the H1 and the page title (keep under ~60 characters for search results)
  description: string; // the search-result snippet (about 140-160 characters)
  keywords: string[]; // the main keyword first
  published: string; // YYYY-MM-DD
  updated: string; // YYYY-MM-DD, change it whenever the post is revised
  minutes: number; // reading time
  // Three to five one-line answers shown first: what search engines and AI assistants quote.
  takeaways: string[];
  faqs: { q: string; a: string }[]; // also published as FAQPage structured data
  sources: { label: string; url: string }[]; // official and reputable sources the post relies on
  related: string[]; // slugs of other posts to link at the end
  body: ReactNode;
};
