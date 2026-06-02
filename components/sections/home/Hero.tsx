"use client";

import { motion } from "framer-motion";


import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { AuroraBackground } from "@/components/ui/AuroraBackground";

export function Hero() {
  const stats = [
    { value: 75, suffix: "M+", label: "Verified Contacts" },
    { value: 95, suffix: "%", label: "Data Accuracy" },
    { value: 500, suffix: "+", label: "Enterprise Clients" },
    { value: 150, suffix: "+", label: "Countries Covered" },
  ];

  return (
    <AuroraBackground className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center mt-12 md:mt-0">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-slate-100 mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
          </span>
          <span className="text-sm text-muted font-medium">Trusted by 500+ Companies Worldwide</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 tracking-tight text-balance max-w-5xl"
        >
          Fuel Your Growth With<br className="hidden sm:block" />{" "}
          <span className="text-cyan-DEFAULT">Verified Data</span>
        </motion.h1>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-1 mb-10 max-w-3xl"
        >
          <p className="text-xl md:text-2xl text-muted leading-relaxed">Access 75M+ verified business contacts and decision-makers.</p>
          <p className="text-xl md:text-2xl text-muted leading-relaxed">Build targeted campaigns that convert with 95% data accuracy.</p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <Button href="/quote" variant="primary" size="lg" className="w-full sm:w-auto">
            Get Started Free →
          </Button>
          <Button href="/contact" variant="secondary" size="lg" className="w-full sm:w-auto">
            Talk to Our Team
          </Button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:flex md:flex-row flex-wrap justify-center gap-4 w-full max-w-4xl"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.05 }}
              className="bg-slate-100 border border-[var(--border)] rounded-full px-5 py-3 flex items-center justify-center gap-2"
            >
              <span className="text-[var(--text-primary)] font-bold text-lg md:text-xl">
                <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
              </span>
              <span className="text-muted text-xs md:text-sm">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </AuroraBackground>
  );
}
