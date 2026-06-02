const fs = require('fs');
const path = require('path');

const mapping = {
  'manufacturing-industry-email-list': 'manufacturing',
  'healthcare-email-list': 'healthcare',
  'construction-industry-email-list': 'construction',
  'automobile-industry-email-list': 'automobile',
  'aviation-industry-email-list': 'aviation',
  'technology-email-list': 'technology',
  'data-appending-service': 'data-appending-service',
  'professionals-email-list': 'professionals',
  'industry-email-list': 'industry',
  'canadian-business-email-list': 'canadian-business',
  'europe-business-email-database': 'europe-business',
  'asia-pacific-business-email-list': 'asia-pacific-business'
};

Object.entries(mapping).forEach(([slug, dataFile]) => {
  const dirPath = path.join(__dirname, '../app', slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const varName = dataFile.replace(/-([a-z])/g, g => g[1].toUpperCase()) + 'Data';

  const content = `import { ServiceTemplate } from "@/components/templates/ServiceTemplate";
import { ${varName} } from "@/data/services/${dataFile}";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data = ${varName};
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
  return <ServiceTemplate data={${varName}} />;
}
`;

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
});
