import type { Post } from "./types";
import { post as dpdpAct } from "./posts/dpdp-act-2023-explained";
import { post as dpdpRules } from "./posts/dpdp-rules-2025";
import { post as checklist } from "./posts/dpdp-compliance-checklist";
import { post as penalties } from "./posts/dpdp-act-penalties";
import { post as vsGdpr } from "./posts/dpdp-vs-gdpr";
import { post as certification } from "./posts/dpdp-certification";

// To publish a post: add lib/blog/posts/<slug>.tsx, then import it and add it here.
const all: Post[] = [dpdpAct, dpdpRules, checklist, penalties, vsGdpr, certification];

// Newest first; a post dated in the future stays hidden until its day.
export function posts(today = new Date().toISOString().slice(0, 10)): Post[] {
  return all.filter((p) => p.published <= today).sort((a, b) => (a.published < b.published ? 1 : a.published > b.published ? -1 : 0));
}

export function allPosts(): Post[] {
  return all;
}

export function getPost(slug: string): Post | undefined {
  return all.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
