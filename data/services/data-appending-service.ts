import { ServicePageData } from "@/types/service";

export const dataAppendingData: ServicePageData = {
  meta: {
    title: "B2B Data Appending & Cleansing Service | Aligndata",
    description: "Upgrade your CRM data with our B2B Data Appending Service. Add missing emails, phone numbers, and company firmographics to your existing database. 95% match rate guarantee.",
    keywords: "data appending service, b2b data cleansing, CRM data enrichment, email appending, reverse appending, firmographic data append, phone number appending",
    canonical: "https://www.aliigndata.com/data-appending-service",
    slug: "data-appending-service"
  },
  hero: {
    badge: "Enterprise Service",
    headline: "B2B Data Appending & Enrichment Service",
    subheadline: "Turn Incomplete Records into Actionable Sales Intel",
    description: "Is your CRM filled with outdated, incomplete, or decaying data? Our Data Appending Service matches your existing records against our master database of 75M+ B2B profiles to fill in missing emails, direct dials, job titles, and firmographics, instantly reviving your sales pipeline.",
    updatedDate: "Ongoing Service"
  },
  dbHighlights: [
    { value: "75M+", label: "Master Reference Database", icon: "Database" },
    { value: "85-95%", label: "Average Match Rate", icon: "RefreshCw" },
    { value: "100%", label: "Manual QA on Matches", icon: "ShieldCheck" },
    { value: "< 48h", label: "Average Turnaround", icon: "Clock" }
  ],
  industries: [
    {
      name: "Email Appending",
      count: "Identify missing emails",
      icon: "Mail",
      items: ["B2B Email Append", "Reverse Email Append", "Domain Email Append", "SMTP Verification"]
    },
    {
      name: "Phone & Contact Appending",
      count: "Add direct dials",
      icon: "Headphones",
      items: ["Direct Dial Appending", "Mobile Number Append", "Social Profile Append (LinkedIn)", "Alternate Contact Matching"]
    },
    {
      name: "Firmographic Enrichment",
      count: "Deep company insights",
      icon: "Building2",
      items: ["Revenue & Employee Size", "Industry NAICS/SIC Codes", "Tech Stack Identification", "Headquarters & Branch Locations"]
    },
    {
      name: "Data Cleansing & Scrubbing",
      count: "Fix decaying records",
      icon: "Filter",
      items: ["De-duplication", "Format Standardization", "NCOA Processing (Address Updates)", "Title Normalization"]
    }
  ],
  includedFields: [
    "Appended Verified Email Addresses",
    "Updated Job Titles & Departments",
    "Added Direct Phone Numbers",
    "Missing Company Names & URLs",
    "Corrected Postal Addresses",
    "Added Revenue & Employee Counts",
    "Industry Classification Codes",
    "Data Confidence Match Scores"
  ],
  comparisonTable: [
    { feature: "Match Rate", advantage: "Consistently 85%+ on B2B records" },
    { feature: "Verification", advantage: "All appended emails are live-pinged" },
    { feature: "Security", advantage: "SOC2 Compliant secure file transfer" },
    { feature: "Pricing", advantage: "Pay only for successful matches" },
    { feature: "Test File", advantage: "Free test append on 100 records" },
    { feature: "Support", advantage: "Dedicated data engineer assigned" }
  ],
  dataSources: "We cross-reference your uploaded files securely against our proprietary master database of 75 million continuously updated B2B profiles, utilizing fuzzy matching algorithms and manual QA to ensure high-fidelity enrichment.",
  keyBenefits: [
    { title: "Revive Dead Leads", description: "Re-engage old prospects by updating their contact information if they changed jobs or emails." },
    { title: "Increase Campaign ROI", description: "Complete data allows for better segmentation, leading to higher open rates and conversions." },
    { title: "Reduce CRM Clutter", description: "We identify and merge duplicate records, saving you CRM licensing costs and SDR confusion." },
    { title: "Zero-Risk Pricing", description: "You only pay for the records we successfully match and verify. No match, no fee." },
    { title: "Secure & Confidential", description: "Your data is processed in a secure environment and immediately destroyed post-delivery. We never resell your customer lists." }
  ],
  whoShouldUse: [
    { title: "Sales Operations Teams", icon: "Settings" },
    { title: "Marketing Automation Managers", icon: "Monitor" },
    { title: "RevOps & CRM Administrators", icon: "Database" },
    { title: "B2B Marketing Agencies", icon: "Megaphone" },
    { title: "Business Development Leads", icon: "Briefcase" },
    { title: "Event & Trade Show Teams", icon: "Calendar" }
  ],
  faqs: [
    { question: "How does the pricing work?", answer: "Our data appending is priced on a pay-per-match basis. You upload your file, we process it, and you only pay for the records we successfully append with verified data." },
    { question: "Is my data secure?", answer: "Yes. We use end-to-end encrypted file transfers. We sign NDAs standard, and your source files are permanently deleted from our servers after the project is complete." },
    { question: "What is your average match rate?", answer: "For B2B records, our clients typically see match rates between 60% and 90%, depending on the age and quality of the input data." },
    { question: "Do you verify the appended emails?", answer: "Yes. Every single email address we append is put through a real-time SMTP handshake verification to ensure it is valid and will not bounce." },
    { question: "Can I test the service first?", answer: "Absolutely. Send us a sample of 100-500 records, and we will append them for free so you can evaluate the quality of our matches." }
  ],
  relatedLists: [
    { title: "Global Industry Database", slug: "industry-email-list", count: "25M+" },
    { title: "Technology Decision Makers List", slug: "technology-email-list", count: "12M+" },
    { title: "Professionals & C-Level List", slug: "professionals-email-list", count: "15M+" }
  ],
  industryName: "Data Appending & Enrichment"
};
