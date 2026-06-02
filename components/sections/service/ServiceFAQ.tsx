import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { ServicePageData } from "@/types/service";

export function ServiceFAQ({ data }: { data: ServicePageData["faqs"] }) {
  return (
    <SectionWrapper variant="base">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <Badge label="FAQ" className="mb-6" />
        <h2 className="mb-4">Frequently asked questions</h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <Accordion items={data} />
      </div>
    </SectionWrapper>
  );
}
