import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Aligndata",
  description: "Learn about Aligndata, our mission, and how we deliver 95% accurate B2B contact data.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-12">
      <SectionWrapper variant="base">
        <div className="max-w-4xl mx-auto">
          <Badge label="Our Mission" className="mb-6" />
          <h1 className="mb-8">Precision Data Intelligence</h1>
          
          <div className="prose prose-invert prose-lg max-w-none text-muted">
            <p>
              At Aligndata, we believe that B2B outreach should be built on certainty, not guesswork. 
              We started with a simple observation: sales and marketing teams were spending more time 
              managing bounce rates and hunting for accurate contact info than actually selling.
            </p>
            <p>
              Our solution is a meticulously verified database of over 75 million business contacts 
              across 1000+ industries worldwide. Unlike automated scrapers that pull outdated information, 
              we combine advanced technology with human researchers to achieve a 95% accuracy guarantee.
            </p>
            <h2>Ethical & Compliant By Design</h2>
            <p>
              All our data is ethically sourced from public records and fully compliant with global 
              data privacy laws, including GDPR and CCPA. We provide you with the exact tools you need 
              to scale your outreach safely and effectively.
            </p>
            <h2>Dedicated to Your Success</h2>
            <p>
              When you partner with Aligndata, you're not just buying a list. You get a dedicated 
              account manager, 24-48 hour turnarounds, and free monthly updates. We align our data 
              with your specific business goals to ensure maximum ROI.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
