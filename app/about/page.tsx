import { AboutContent } from "@/components/sections/about/AboutContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Aligndata",
  description: "Learn about Aligndata, our mission, and how we deliver 95% accurate B2B contact data.",
};

export default function AboutPage() {
  return <AboutContent />;
}
