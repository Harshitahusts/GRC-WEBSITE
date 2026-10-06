// Structured data (schema.org) for search engines and AI assistants.
// JSON-LD is a data block, not a script the browser runs. "<" is escaped so the
// JSON can never close the tag early (the pattern the Next.js JSON-LD guide uses).
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
