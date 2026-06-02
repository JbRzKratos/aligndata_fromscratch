import { ServiceTemplate } from "@/components/templates/ServiceTemplate";
import { constructionData } from "@/data/services/construction";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data = constructionData;
  return {
    title: data.meta.title,
    description: data.meta.description,
    keywords: data.meta.keywords,
    alternates: { canonical: data.meta.canonical },
    openGraph: {
      title: data.meta.title,
      description: data.meta.description,
      url: data.meta.canonical,
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Aligndata — Verified B2B Data' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.meta.title,
      description: data.meta.description,
      images: ['/og-image.png'],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

export default function Page() {
  return <ServiceTemplate data={constructionData} />;
}
