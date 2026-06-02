"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { HomeCTA } from "@/components/sections/home/HomeCTA";
import { ShieldCheck, Target, Award, Globe2, TrendingUp, Users, Database } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Verified Contacts", value: "75M+", icon: Database },
  { label: "Happy Clients", value: "500+", icon: Users },
  { label: "Data Accuracy", value: "95%", icon: Target },
  { label: "Years Experience", value: "10+", icon: Award },
];

const values = [
  {
    title: "Data Integrity",
    description: "We maintain the highest standards of data quality with rigorous verification processes and 95% accuracy guarantee.",
    icon: ShieldCheck,
  },
  {
    title: "Customer Success",
    description: "Your success is our priority. Dedicated support and customized solutions for every business need.",
    icon: Users,
  },
  {
    title: "Global Reach",
    description: "Access verified contacts across 100+ countries with local expertise and compliance in every market.",
    icon: Globe2,
  },
  {
    title: "Innovation",
    description: "Constantly evolving our platform with cutting-edge technology and data collection methodologies.",
    icon: TrendingUp,
  },
];

const compliances = [
  { name: "GDPR Compliant", region: "European Union" },
  { name: "CCPA Compliant", region: "California, USA" },
  { name: "CASL Compliant", region: "Canada" },
  { name: "HIPAA Compliant", region: "Healthcare, USA" },
  { name: "PDPA Compliant", region: "Singapore" },
  { name: "Privacy Act", region: "Australia" },
];

export function AboutContent() {
  return (
    <div className="pt-14"> {/* pt-14 to account for header */}
      {/* Hero Section */}
      <AuroraBackground className="min-h-[60vh] py-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto"
        >
          <Badge label="About Us" className="mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Empowering Businesses with Verified Data
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-primary)] opacity-80 max-w-2xl">
            Aligndata is a leading provider of premium B2B contact data, helping businesses connect with decision-makers across the globe through accurate, compliant, and actionable intelligence.
          </p>
        </motion.div>
      </AuroraBackground>

      {/* Stats Section */}
      <SectionWrapper variant="base" className="border-t border-[var(--border)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl hover:border-blue-400 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-2">{stat.value}</h3>
              <p className="text-sm font-medium text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Story & Mission Section */}
      <SectionWrapper variant="surface">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge label="Our Story" className="mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Empowering businesses with accurate data since 2015
            </h2>
            <div className="space-y-4 text-lg text-muted">
              <p>
                Founded in 2015, Aligndata emerged from a simple observation: businesses were struggling to connect with the right decision-makers due to outdated, inaccurate contact data.
              </p>
              <p>
                We've built one of the most comprehensive B2B contact databases with 75M+ verified contacts across professionals, technology users, healthcare providers, and businesses across every major industry.
              </p>
              <p>
                Every contact is verified through multiple sources, updated every 30 days, and guaranteed to be 95% accurate. Today, we serve 500+ clients worldwide, helping them achieve better targeting, higher response rates, and improved ROI.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-8 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                  <p className="text-muted">
                    Empower businesses with accurate, actionable B2B contact data that drives measurable results.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                  <p className="text-muted">
                    Be the most trusted and innovative B2B data provider, setting the standard for quality and compliance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Core Values Section */}
      <SectionWrapper variant="base">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge label="Core Values" className="mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Principles that guide everything we do
          </h2>
          <p className="text-lg text-muted">
            These values guide everything we do, from data collection to customer support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Global Compliance Section */}
      <SectionWrapper variant="surface" className="border-t border-[var(--border)]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge label="Global Compliance" className="mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Global data protection standards
          </h2>
          <p className="text-lg text-muted">
            We take data privacy seriously and maintain full compliance with all major data protection regulations worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {compliances.map((comp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex flex-col items-center text-center p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl hover:bg-emerald-50/50 transition-colors"
            >
              <ShieldCheck className="w-8 h-8 text-emerald-500 mb-3" />
              <h3 className="font-bold text-lg mb-1">{comp.name}</h3>
              <p className="text-sm text-muted">{comp.region}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <HomeCTA />
    </div>
  );
}
