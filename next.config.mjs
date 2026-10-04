/** @type {import("next").NextConfig} */
const nextConfig = {
  // Build a self-contained server in .next/standalone for the Docker image.
  output: "standalone",
  // Don't announce the framework in an X-Powered-By header.
  poweredByHeader: false,
  // The Next.js dev tools button only shows in `next dev`. Keep it out of the
  // bottom-left corner, where the cookie pop-up and cookie button sit.
  devIndicators: { position: "bottom-right" },
  // The old "Live demo" page was a mock-up. Its links now open the real app.
  redirects() {
    const app = process.env.NEXT_PUBLIC_APP_URL || "https://app.grc-flow.com";
    return [{ source: "/demo/:path*", destination: app, permanent: false }];
  },
};

export default nextConfig;
