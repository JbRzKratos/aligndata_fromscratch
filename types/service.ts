export interface ServicePageData {
  meta: {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
    slug: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    description: string;
    updatedDate: string;
  };
  dbHighlights: Array<{ value: string; label: string; icon: string }>;
  industries: Array<{
    name: string;
    count: string;
    items: string[];
    icon: string;
  }>;
  includedFields: string[];
  comparisonTable: Array<{ feature: string; advantage: string }>;
  dataSources: string;
  keyBenefits: Array<{ title: string; description: string }>;
  whoShouldUse: Array<{ title: string; icon: string }>;
  faqs: Array<{ question: string; answer: string }>;
  relatedLists: Array<{ title: string; slug: string; count: string }>;
  industryName: string;
}
