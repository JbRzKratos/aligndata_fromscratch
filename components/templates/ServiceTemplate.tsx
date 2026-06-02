import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ServiceHero } from "@/components/sections/service/ServiceHero";
import { DbHighlights } from "@/components/sections/service/DbHighlights";
import { IndustryCoverage } from "@/components/sections/service/IndustryCoverage";
import { IncludedFields } from "@/components/sections/service/IncludedFields";
import { ComparisonTable } from "@/components/sections/service/ComparisonTable";
import { DataSources } from "@/components/sections/service/DataSources";
import { KeyBenefits } from "@/components/sections/service/KeyBenefits";
import { WhoShouldUse } from "@/components/sections/service/WhoShouldUse";
import { ServiceFAQ } from "@/components/sections/service/ServiceFAQ";
import { RelatedLists } from "@/components/sections/service/RelatedLists";
import { QuoteForm } from "@/components/sections/service/QuoteForm";
import { ServicePageData } from "@/types/service";

export function ServiceTemplate({ data }: { data: ServicePageData }) {
  return (
    <>
      {/* Breadcrumb */}
      <div className="absolute top-24 left-0 w-full z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted">
            <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 opacity-50" />
            <Link href="/services" className="hover:text-[var(--text-primary)] transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4 opacity-50" />
            <span className="text-[var(--text-primary)] font-medium">{data.industryName}</span>
          </div>
        </div>
      </div>

      <ServiceHero data={data.hero} />
      <DbHighlights data={data.dbHighlights} />
      {data.industries && <IndustryCoverage data={data.industries} />}
      <IncludedFields data={data.includedFields} />
      <ComparisonTable data={data.comparisonTable} industryName={data.industryName} />
      <DataSources data={data.dataSources} />
      <KeyBenefits data={data.keyBenefits} industryName={data.industryName} />
      <WhoShouldUse data={data.whoShouldUse} />
      <ServiceFAQ data={data.faqs} />
      {data.relatedLists && <RelatedLists data={data.relatedLists} />}
      <QuoteForm industryName={data.industryName} />
    </>
  );
}
