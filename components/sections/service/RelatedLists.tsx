import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";
import { ServicePageData } from "@/types/service";

export function RelatedLists({ data }: { data: ServicePageData["relatedLists"] }) {
  if (!data || data.length === 0) return null;

  return (
    <SectionWrapper variant="surface">
      <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
        <Badge label="Related Lists" className="mb-6" />
        <h2 className="mb-4">Explore more email lists</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {data.map((list, idx) => (
          <Link key={idx} href={`/${list.slug}`} className="group block h-full">
            <Card hoverable className="h-full flex flex-col p-6">
              <h3 className="text-[var(--text-primary)] font-bold text-lg mb-4 leading-snug">{list.title}</h3>
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-[var(--border)]">
                <span className="text-cyan-DEFAULT font-semibold text-sm tracking-wide">
                  {list.count} contacts
                </span>
                <ArrowRight className="w-5 h-5 text-muted group-hover:text-cyan-DEFAULT transition-colors" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
