import { Hero } from "@/components/sections/home/Hero";
import { TrustedBy } from "@/components/sections/home/TrustedBy";
import { Features } from "@/components/sections/home/Features";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { Industries } from "@/components/sections/home/Industries";
import { WhyUs } from "@/components/sections/home/WhyUs";
import { HomeCTA } from "@/components/sections/home/HomeCTA";
import { HomeFAQ } from "@/components/sections/home/HomeFAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <Industries />
      <WhyUs />
      <HomeFAQ />
      <HomeCTA />
    </>
  );
}
