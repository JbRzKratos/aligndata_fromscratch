import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";

export function HomeFAQ() {
  const faqs = [
    {
      question: "How accurate is your data?",
      answer: "95% accuracy rate. Every contact is manually verified by researchers using multiple sources. Database refreshed every 30 days.",
    },
    {
      question: "How long does delivery take?",
      answer: "Standard delivery 24-48 hours. Rush delivery available within 12-24 hours.",
    },
    {
      question: "What format will I receive?",
      answer: "CSV, Excel (XLS/XLSX), or direct CRM integration — Salesforce, HubSpot, or Zoho.",
    },
    {
      question: "Is your data GDPR compliant?",
      answer: "Yes. All data sourced from public records, fully compliant with GDPR, CCPA, and international regulations.",
    },
    {
      question: "Can I get a free sample?",
      answer: "Absolutely. Request a free sample through our contact form before purchasing.",
    },
    {
      question: "What is your refund policy?",
      answer: "If bounce rate exceeds 5% or data does not meet specs, we provide free replacements or a partial refund.",
    },
    {
      question: "How often is data updated?",
      answer: "Full database refresh every 30 days. Real-time tracking of job changes and company updates included.",
    },
    {
      question: "What makes you different from competitors?",
      answer: "Real researchers hand-verify every contact — no bots or automated scraping. Higher accuracy, better deliverability, and dedicated account management.",
    },
  ];

  return (
    <SectionWrapper variant="base" lazy>
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <Badge label="FAQ" className="mb-6" />
        <h2 className="mb-4">Frequently asked questions</h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <Accordion items={faqs} />
      </div>
    </SectionWrapper>
  );
}
