import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { Check } from "lucide-react";
import { ServicePageData } from "@/types/service";

export function IndustryCoverage({ data }: { data: ServicePageData["industries"] }) {
  if (!data || data.length === 0) return null;

  return (
    <SectionWrapper variant="base">
      <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
        <Badge label="Coverage" className="mb-6" />
        <h2 className="mb-4">Industries we cover</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {data.map((ind, idx) => (
          <Card key={idx} className="flex flex-col">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <DynamicIcon name={ind.icon} className="w-6 h-6 text-[#60A5FA]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">{ind.name}</h3>
              </div>
              <Badge label={ind.count} variant="cyan" />
            </div>
            
            <ul className="space-y-3 mt-auto pt-4 border-t border-[var(--border)]">
              {ind.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-DEFAULT shrink-0 mt-0.5 opacity-80" />
                  <span className="text-muted text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
