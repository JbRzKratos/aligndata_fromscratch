import { Marquee } from "@/components/ui/Marquee";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { Database, Cloud, Building, Briefcase, Network, Server, Fingerprint, Activity, Zap, HardDrive } from "lucide-react";

export function TrustedBy() {
  const companies = [
    { name: "Salesforce", icon: Cloud },
    { name: "HubSpot", icon: Network },
    { name: "Oracle", icon: Database },
    { name: "IBM", icon: Server },
    { name: "Stripe", icon: Zap },
    { name: "Shopify", icon: Building },
    { name: "Atlassian", icon: Briefcase },
    { name: "Slack", icon: Activity },
    { name: "Microsoft", icon: HardDrive },
    { name: "Adobe", icon: Fingerprint },
  ];

  return (
    <SectionWrapper variant="surface" className="py-16 md:py-20 lg:py-24 overflow-hidden text-center border-y border-[var(--border)]">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <Badge label="Trusted by Industry Leaders" className="mb-6" />
        <h2 className="mb-4 text-xl md:text-2xl font-semibold text-[var(--text-primary)]">Powering growth for 500+ enterprises</h2>
      </div>

      {/* Marquee Row 1 */}
      <Marquee pauseOnHover={true} className="mb-8">
        {companies.map((company, idx) => {
          const Icon = company.icon;
          return (
            <div key={idx} className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
              <Icon className="w-5 h-5 text-muted" />
              <span className="text-[#94A3B8] font-medium text-lg md:text-xl">{company.name}</span>
            </div>
          );
        })}
      </Marquee>

      {/* Marquee Row 2 (Reverse direction on mobile or just duplicate for density) */}
      <div className="md:hidden">
        <Marquee pauseOnHover={true}>
          {[...companies].reverse().map((company, idx) => {
            const Icon = company.icon;
            return (
              <div key={idx} className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                <Icon className="w-5 h-5 text-muted" />
                <span className="text-[#94A3B8] font-medium text-lg md:text-xl">{company.name}</span>
              </div>
            );
          })}
        </Marquee>
      </div>
    </SectionWrapper>
  );
}
