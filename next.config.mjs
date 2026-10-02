/** @type {import("next").NextConfig} */
const nextConfig = {
  // Build a self-contained server in .next/standalone for the Docker image.
  output: "standalone",
  // Don't announce the framework in an X-Powered-By header.
  poweredByHeader: false,
  // The Next.js dev tools button only shows in `next dev`. Keep it out of the
  // bottom-left corner, where the cookie pop-up and cookie button sit.
  devIndicators: { position: "bottom-right" },
};

export default nextConfig;
