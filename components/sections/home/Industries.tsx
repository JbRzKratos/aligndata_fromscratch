import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { Factory, Heart, HardHat, Car, Plane, ArrowRight } from "lucide-react";

export function Industries() {
  const industries = [
    { name: "Manufacturing", icon: Factory, count: "8M+ contacts", href: "/manufacturing-industry-email-list" },
    { name: "Healthcare", icon: Heart, count: "12M+ contacts", href: "/healthcare-email-list" },
    { name: "Construction", icon: HardHat, count: "5M+ contacts", href: "/construction-industry-email-list" },
    { name: "Automotive", icon: Car, count: "4M+ contacts", href: "/automobile-industry-email-list" },
    { name: "Aviation", icon: Plane, count: "2M+ contacts", href: "/aviation-industry-email-list" },
  ];

  return (
    <SectionWrapper variant="base" className="overflow-hidden">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <Badge label="Industries We Cover" className="mb-6" />
        <h2 className="mb-4">Data for every sector</h2>
        <p className="text-lg">Deep, verified contact databases across the industries that matter most.</p>
      </div>

      <div className="-mx-4 sm:mx-0 overflow-x-auto pb-8 sm:pb-0 hide-scrollbar">
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-4 px-4 sm:px-0 min-w-max sm:min-w-0">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <Link
                key={idx}
                href={ind.href}
                className="group flex flex-col w-[260px] sm:w-auto bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 transition-all duration-200 hover:border-blue-400 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#60A5FA]" />
                </div>
                <h3 className="text-[var(--text-primary)] font-bold text-xl mb-2">{ind.name}</h3>
                <div className="flex items-center justify-between mt-auto pt-4">
                  <span className="text-cyan-DEFAULT font-semibold text-sm tracking-wide">
                    {ind.count}
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted group-hover:text-cyan-DEFAULT transition-colors" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
