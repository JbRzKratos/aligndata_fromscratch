import { WhyUs } from "@/components/sections/home/WhyUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Aligndata | The Aligndata Advantage",
  description: "Discover why 500+ enterprise clients trust Aligndata. 95% accuracy, 100% GDPR compliant, and 24-48 hour delivery.",
};

export default function WhyUsPage() {
  return (
    <div className="pt-24 pb-12">
      <WhyUs />
    </div>
  );
}
