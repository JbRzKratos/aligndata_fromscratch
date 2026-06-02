import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Database, Mail, Shield, Filter, Users, RefreshCw } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Database,
      tag: "95% accuracy",
      title: "75M+ Business Contacts",
      desc: "Verified CEOs, CFOs, and decision-makers across 1000+ industries worldwide.",
    },
    {
      icon: Mail,
      tag: "48hr turnaround",
      title: "Email Appending",
      desc: "Enhance existing customer databases with verified emails. 40-50% match rate.",
    },
    {
      icon: Shield,
      tag: "100% compliant",
      title: "GDPR Compliant Data",
      desc: "Ethically sourced from public records, fully compliant with global data laws.",
    },
    {
      icon: Filter,
      tag: "50+ filters",
      title: "Advanced Segmentation",
      desc: "Filter by industry, revenue, location, tech stack, and 50+ criteria.",
    },
    {
      icon: Users,
      tag: "24/7 available",
      title: "Dedicated Account Team",
      desc: "Data specialists who understand your business and optimize your campaigns.",
    },
    {
      icon: RefreshCw,
      tag: "30-day refresh",
      title: "Real-Time Updates",
      desc: "Database refreshed every 30 days. Job changes and company updates tracked daily.",
    },
  ];

  return (
    <SectionWrapper variant="base" className="relative">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <Badge label="Platform Features" className="mb-6" />
        <h2 className="mb-4">Everything you need to scale your outreach</h2>
        <p className="text-lg">The most comprehensive B2B database built for modern sales and marketing teams.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <Card key={idx} className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#60A5FA]" />
                </div>
                <Badge label={feature.tag} variant="cyan" />
              </div>
              <div>
                <h3 className="text-[var(--text-primary)] font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-muted text-[15px]">{feature.desc}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
