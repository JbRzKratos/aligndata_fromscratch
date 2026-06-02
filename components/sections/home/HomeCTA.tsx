import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

export function HomeCTA() {
  const trustBadges = [
    "95% accuracy guarantee",
    "24-48h delivery",
    "GDPR/CCPA compliant",
    "Custom targeting options",
  ];

  return (
    <SectionWrapper
      variant="base"
      className="relative border-y border-blue-200"
    >
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 opacity-80"
      />
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto py-10 md:py-16">
        <h2 className="mb-6">Get a custom quote tailored to your needs</h2>
        <p className="text-xl text-muted mb-10 max-w-2xl">
          Connect with our team. We'll provide a detailed quote and quality sample within 24-48 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto">
          <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
            Get Free Quote →
          </Button>
          <Button href="/contact" variant="secondary" size="lg" className="w-full sm:w-auto">
            Talk to Sales
          </Button>
        </div>

        <div className="grid grid-cols-2 md:flex md:flex-row flex-wrap justify-center gap-4 md:gap-8 w-full">
          {trustBadges.map((badge, idx) => (
            <div key={idx} className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-success" />
              </div>
              <span className="text-sm text-[var(--text-primary)] font-medium">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
