
import type { Metadata } from "next";
import AboutPageClient from "@/components/about-page-client";

export const metadata: Metadata = {
  title: "About Argynix | Our Mission, Values, and Team",
  description: "Learn about Argynix, a leading technology company specializing in IoT, automation, and electronics. Discover our mission, core values, and the expert team driving our innovation.",
};

export default function AboutPage() {
  return (
    <AboutPageClient />
  )
}
