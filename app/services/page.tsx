import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { Metadata } from "next";
import { Factory, Heart, HardHat, Car, Plane, Cpu, Briefcase, MapPin, Globe, Users, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "All B2B Email Lists & Data Services | Aligndata",
  description: "Browse our comprehensive directory of verified B2B email lists, contact databases, and data appending services across multiple industries and regions.",
};

export default function ServicesPage() {
  const categories = [
    {
      title: "Industry Specific Lists",
      items: [
        { label: "Manufacturing Industry", href: "/manufacturing-industry-email-list", icon: Factory, count: "8M+" },
        { label: "Healthcare & Medical", href: "/healthcare-email-list", icon: Heart, count: "6.5M+" },
        { label: "Construction Sector", href: "/construction-industry-email-list", icon: HardHat, count: "4.2M+" },
        { label: "Automotive Industry", href: "/automobile-industry-email-list", icon: Car, count: "3M+" },
        { label: "Aviation & Aerospace", href: "/aviation-industry-email-list", icon: Plane, count: "1.5M+" },
        { label: "Technology Sector", href: "/technology-email-list", icon: Cpu, count: "12M+" },
        { label: "General Industry Database", href: "/industry-email-list", icon: Briefcase, count: "25M+" },
      ],
    },
    {
      title: "By Region & Role",
      items: [
        { label: "Professionals & C-Level", href: "/professionals-email-list", icon: Users, count: "15M+" },
        { label: "Canadian Businesses", href: "/canadian-business-email-list", icon: MapPin, count: "2.5M+" },
        { label: "European Database", href: "/europe-business-email-database", icon: Globe, count: "18M+" },
        { label: "Asia Pacific Database", href: "/asia-pacific-business-email-list", icon: Globe, count: "14M+" },
      ],
    },
    {
      title: "Data Services",
      items: [
        { label: "Data Appending Service", href: "/data-appending-service", icon: FileText, count: "N/A" },
      ],
    },
  ];

  return (
    <div className="pt-32 pb-12">
      <SectionWrapper variant="base">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge label="Data Solutions" className="mb-6" />
          <h1 className="mb-6">B2B Email Lists & Services</h1>
          <p className="text-xl text-muted">
            Explore our comprehensive range of verified business contact databases, tailored by industry, region, and job role.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          {categories.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8 border-b border-[var(--border)] pb-4">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIdx) => {
                  const Icon = item.icon;
                  return (
                    <Link key={itemIdx} href={item.href} className="group outline-none focus-visible:ring-2 focus-visible:ring-cyan-DEFAULT rounded-xl">
                      <Card className="h-full group-hover:border-cyan-DEFAULT/50 transition-colors">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-[var(--accent-cyan)] group-hover:scale-110 transition-transform">
                            <Icon className="w-6 h-6" />
                          </div>
                          {item.count !== "N/A" && (
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-muted group-hover:bg-slate-200 transition-colors">
                              {item.count} Contacts
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-cyan)] transition-colors">
                          {item.label}
                        </h3>
                        <p className="text-sm text-muted">
                          View details and request a sample for the {item.label.toLowerCase()}.
                        </p>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
