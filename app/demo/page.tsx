import type { Metadata } from "next";
import { DemoApp } from "@/components/demo/demo-app";

export const metadata: Metadata = {
  title: "Live demo",
  description: "Click through a sample DPDPA workspace: dashboard, engagement findings, risk register, GRC Analyst, data flows and connectors.",
};

export default function DemoPage() {
  return <DemoApp />;
}
