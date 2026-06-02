import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { ServicePageData } from "@/types/service";

export function DataSources({ data }: { data: ServicePageData["dataSources"] }) {
  const sources = [
    "Associations", "Trade Shows", "Public Filings", "Direct Research"
  ];

  return (
    <SectionWrapper variant="surface" className="text-center border-y border-[var(--border)]">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <Badge label="Data Sources" className="mb-6" />
        <h2 className="mb-4">How we source our data</h2>
        
        <p className="text-lg md:text-xl text-muted leading-relaxed mb-10">
          {data}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {sources.map((source, idx) => (
            <span key={idx} className="px-5 py-2.5 rounded-full bg-slate-100 border border-[var(--border)] text-[var(--text-primary)] text-sm font-medium">
              {source}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
