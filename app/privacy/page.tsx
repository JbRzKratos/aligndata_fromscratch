import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Aligndata",
  description: "Aligndata Privacy Policy. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-12">
      <SectionWrapper variant="base">
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-8">Privacy Policy</h1>
          <div className="prose prose-invert prose-lg max-w-none text-muted">
            <p>Last updated: June 2026</p>
            <p>
              At Aligndata LLC, we are committed to protecting your privacy. This Privacy Policy explains our data collection, use, and disclosure practices.
            </p>
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide to us directly, such as when you request a quote, fill out a form, or contact us. We also build and maintain business contact databases from publicly available sources and third-party data providers.
            </p>
            <h2>2. GDPR and CCPA Compliance</h2>
            <p>
              Our database is strictly B2B and we operate in full compliance with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). We only process personal data where we have a lawful basis to do so, such as legitimate interest in B2B marketing.
            </p>
            <h2>3. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to process transactions, and to communicate with you about products, services, and offers.
            </p>
            <h2>4. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at hello@aliigndata.com.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
