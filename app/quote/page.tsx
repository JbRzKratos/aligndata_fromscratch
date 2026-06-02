import { QuoteForm } from "@/components/sections/service/QuoteForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Custom Quote | Aligndata",
  description: "Get a custom quote for verified B2B email lists and data appending services.",
};

export default function QuotePage() {
  return (
    <div className="pt-24 pb-12">
      <QuoteForm industryName="General Business" />
    </div>
  );
}
