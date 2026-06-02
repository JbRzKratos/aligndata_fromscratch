import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Aligndata",
  description: "Aligndata Terms of Service.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-12">
      <SectionWrapper variant="base">
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-8">Terms of Service</h1>
          <div className="prose prose-invert prose-lg max-w-none text-muted">
            <p>Last updated: June 2026</p>
            <p>
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Aligndata website and services operated by Aligndata LLC.
            </p>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
            </p>
            <h2>2. License to Use Data</h2>
            <p>
              Upon purchase, Aligndata grants you a non-exclusive, non-transferable license to use the provided data for your internal business and marketing purposes. You may not resell, redistribute, or publicly display the data.
            </p>
            <h2>3. Accuracy Guarantee and Refunds</h2>
            <p>
              We provide a 95% accuracy guarantee. If the bounce rate of the delivered emails exceeds 5%, we will provide free replacements or a proportional refund for the hard bounces over the 5% threshold, provided a bounce report is supplied within 14 days of delivery.
            </p>
            <h2>4. Limitation of Liability</h2>
            <p>
              In no event shall Aligndata LLC be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of our services or data.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
