import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { ServicePageData } from "@/types/service";

export function DbHighlights({ data }: { data: ServicePageData["dbHighlights"] }) {
  return (
    <SectionWrapper variant="surface">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <Badge label="Database Highlights" className="mb-6" />
        <h2 className="mb-4">What's in this database</h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {data.map((item, idx) => (
          <Card key={idx} className="flex flex-col items-center text-center p-8">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
              <DynamicIcon name={item.icon} className="w-6 h-6 text-[#60A5FA]" />
            </div>
            <span className="text-3xl md:text-4xl font-display font-bold text-cyan-DEFAULT mb-2">
              {item.value}
            </span>
            <span className="text-[var(--text-primary)] font-medium">
              {item.label}
            </span>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
