import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aliigndata.com"),
  title: "B2B Email List | 75M+ Verified Business Contacts | Aligndata",
  description: "Access 75M+ verified B2B contacts with 95% accuracy. Generate qualified leads, power marketing campaigns with GDPR compliant business email lists.",
  keywords: "b2b email list, verified business contacts, lead generation, business contact database, email list for marketing, b2b leads, decision maker contacts, GDPR compliant data",
  alternates: { canonical: "https://www.aliigndata.com" },
  openGraph: {
    title: "B2B Email List | 75M+ Verified Business Contacts | Aligndata",
    description: "Access 75M+ verified B2B contacts with 95% accuracy. Generate qualified leads, power marketing campaigns with GDPR compliant business email lists.",
    url: "https://www.aliigndata.com",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Aligndata — Verified B2B Data" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Email List | 75M+ Verified Business Contacts | Aligndata",
    description: "Access 75M+ verified B2B contacts with 95% accuracy. Generate qualified leads, power marketing campaigns with GDPR compliant business email lists.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sora.variable} ${dmSans.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
