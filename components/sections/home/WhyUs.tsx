import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ShieldCheck, Clock, Headphones, Zap, Lock, Gift } from "lucide-react";

export function WhyUs() {
  const stats = [
    { value: "210%", label: "Avg ROI" },
    { value: "98%", label: "Deliverability" },
    { value: "4.9/5", label: "Client Rating" },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Hand-Verified Accuracy",
      desc: "95% verified — dedicated team manually verifies each contact.",
    },
    {
      icon: Clock,
      title: "Always Fresh",
      desc: "30-day refresh — automated monitoring tracks promotions and role changes.",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      desc: "24/7 available — personal account manager per client.",
    },
    {
      icon: Zap,
      title: "48-Hour Delivery",
      desc: "Speed matters — standard 48hrs, rush service 24hrs.",
    },
    {
      icon: Lock,
      title: "GDPR Compliant",
      desc: "100% compliant — all data from public records, full regulatory compliance.",
    },
    {
      icon: Gift,
      title: "Free Monthly Updates",
      desc: "Stay current — purchased lists refreshed monthly at no charge.",
    },
  ];

  return (
    <SectionWrapper variant="surface">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <Badge label="Why Us" className="mb-6" />
        <h2 className="mb-4">The Aligndata advantage</h2>
        <p className="text-lg">Real researchers verify every contact. Higher deliverability, better response rates, measurable ROI.</p>
      </div>

      {/* Stats Row */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 lg:gap-32 mb-20">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2">
            <span className="text-4xl md:text-5xl font-display font-bold text-cyan-DEFAULT">
              {stat.value}
            </span>
            <span className="text-[var(--text-primary)] uppercase tracking-wider text-sm font-semibold">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <Card key={idx} className="flex gap-5 items-start">
              <div className="w-12 h-12 shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                <Icon className="w-6 h-6 text-[#60A5FA]" />
              </div>
              <div>
                <h3 className="text-[var(--text-primary)] font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted text-[15px] leading-relaxed">{feature.desc}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
