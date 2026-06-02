import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle } from "lucide-react";
import { ServicePageData } from "@/types/service";

export function IncludedFields({ data }: { data: ServicePageData["includedFields"] }) {
  return (
    <SectionWrapper variant="surface">
      <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
        <Badge label="Data Fields" className="mb-6" />
        <h2 className="mb-4">What's included in every contact record</h2>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-12 md:gap-y-6">
        {data.map((field, idx) => (
          <div key={idx} className="flex items-center gap-4 bg-[var(--bg-card)] border border-[var(--border)] p-4 rounded-xl hover:border-blue-400 transition-colors">
            <CheckCircle className="w-[18px] h-[18px] text-success shrink-0" />
            <span className="text-[var(--text-primary)] font-medium">{field}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
