import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { ServicePageData } from "@/types/service";

export function WhoShouldUse({ data }: { data: ServicePageData["whoShouldUse"] }) {
  return (
    <SectionWrapper variant="surface">
      <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
        <Badge label="Ideal For" className="mb-6" />
        <h2 className="mb-4">Who should use this email list?</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((audience, idx) => (
          <Card key={idx} className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
              <DynamicIcon name={audience.icon} className="w-6 h-6 text-[#60A5FA]" />
            </div>
            <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors">{audience.title}</h3>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
