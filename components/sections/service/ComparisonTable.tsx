import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { ServicePageData } from "@/types/service";
import { CheckCircle2 } from "lucide-react";

export function ComparisonTable({ data, industryName }: { data: ServicePageData["comparisonTable"], industryName: string }) {
  return (
    <SectionWrapper variant="base">
      <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
        <Badge label="Our Advantage" className="mb-6" />
        <h2 className="mb-4">Why choose Aligndata's {industryName} database?</h2>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Desktop Table */}
        <div className="hidden sm:block overflow-hidden border border-[var(--border)] rounded-xl bg-[var(--bg-card)]">
          <table className="w-full text-left border-collapse table-fixed">
            <thead className="bg-slate-100 border-b border-[var(--border)]">
              <tr>
                <th className="py-4 px-6 text-muted text-sm uppercase tracking-wider font-semibold w-1/3">Feature</th>
                <th className="py-4 px-6 text-cyan-DEFAULT text-sm uppercase tracking-wider font-semibold w-2/3">Aligndata Advantage</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr key={idx} className={idx !== data.length - 1 ? "border-b border-[var(--border)]" : ""}>
                  <td className="py-4 px-6 text-[var(--text-primary)] font-medium">{row.feature}</td>
                  <td className="py-4 px-6 text-cyan-DEFAULT font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    {row.advantage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="sm:hidden flex flex-col gap-4">
          {data.map((row, idx) => (
            <div key={idx} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 flex flex-col gap-2">
              <span className="text-muted text-sm uppercase tracking-wider font-semibold">{row.feature}</span>
              <span className="text-cyan-DEFAULT font-medium flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                {row.advantage}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
