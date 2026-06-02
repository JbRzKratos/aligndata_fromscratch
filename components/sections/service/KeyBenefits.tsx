import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CheckCircle } from "lucide-react";
import { ServicePageData } from "@/types/service";

export function KeyBenefits({ data, industryName }: { data: ServicePageData["keyBenefits"], industryName: string }) {
  return (
    <SectionWrapper variant="base">
      <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
        <Badge label="Key Benefits" className="mb-6" />
        <h2 className="mb-4">Key benefits of using our {industryName} list</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((benefit, idx) => (
          <Card key={idx} className="flex flex-col gap-4">
            <CheckCircle className="w-8 h-8 text-cyan-DEFAULT" />
            <h3 className="text-xl font-bold text-[var(--text-primary)]">{benefit.title}</h3>
            <p className="text-muted leading-relaxed">{benefit.description}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
