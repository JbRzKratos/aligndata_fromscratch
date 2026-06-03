import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2 } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: 1,
      time: "5 min",
      title: "Tell Us What You Need",
      desc: "Share target criteria — industry, titles, size, location.",
      bullets: [
        "Industry targeting",
        "Job title filters",
        "Company size range",
        "Geographic location",
      ],
    },
    {
      num: 2,
      time: "24-48 hrs",
      title: "We Verify Every Contact",
      desc: "Manual verification using multiple data sources.",
      bullets: [
        "Manual expert verification",
        "Cross-reference sources",
        "Email and phone validation",
        "Duplicate removal",
      ],
    },
    {
      num: 3,
      time: "Instant",
      title: "Receive Your Data",
      desc: "Delivered in your preferred format.",
      bullets: [
        "CSV/Excel/CRM formats",
        "Direct CRM integration",
        "Detailed contact profiles",
        "Ready immediately",
      ],
    },
  ];

  return (
    <SectionWrapper variant="surface" className="relative" lazy>
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
        <Badge label="Our Process" className="mb-6" />
        <h2 className="mb-4">From request to results in 48 hours</h2>
        <p className="text-lg">A streamlined 3-step workflow to get you accurate, actionable data fast.</p>
      </div>

      <div className="relative">
        {/* Connecting line (desktop only) */}
        <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] border-t-2 border-dashed border-[var(--border)] z-0" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex flex-col lg:flex-row items-center gap-4 mb-6">
                <div className="w-[88px] h-[88px] rounded-full bg-white border-2 border-blue-400 flex items-center justify-center text-[var(--text-primary)] font-display font-bold text-3xl shadow-md">
                  {step.num}
                </div>
                <Badge label={step.time} variant="cyan" />
              </div>
              
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">{step.title}</h3>
              <p className="text-muted mb-6">{step.desc}</p>
              
              <ul className="flex flex-col gap-3 text-left w-full sm:w-auto">
                {step.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-DEFAULT shrink-0 mt-0.5" />
                    <span className="text-[#94A3B8]">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
