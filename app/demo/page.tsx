import type { Metadata } from "next";
import { DemoPage } from "@/components/demo/demo-page";

export const metadata: Metadata = {
  title: "Live demo",
  description: "Try the real GRC agent app with a sample workspace, or click through a guided tour of the dashboard, engagements, risk register, GRC Analyst, data flows and connectors.",
};

export default function Page() {
  return <DemoPage />;
}
