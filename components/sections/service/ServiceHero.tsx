"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { ServicePageData } from "@/types/service";
import { AuroraBackground } from "@/components/ui/AuroraBackground";

export function ServiceHero({ data }: { data: ServicePageData["hero"] }) {
  const trustBadges = [
    "Verified Data",
    "GDPR Compliant",
    "95% Accuracy",
    "24-48hr Delivery",
  ];

  return (
    <AuroraBackground className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full border border-cyan-DEFAULT/30 bg-cyan-DEFAULT/10 mb-8"
        >
          <span className="text-sm text-cyan-DEFAULT font-medium">{data.badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 tracking-tight text-[var(--text-primary)] max-w-4xl"
        >
          {data.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-cyan-DEFAULT text-xl md:text-2xl font-bold mb-6 max-w-3xl"
        >
          {data.subheadline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-3xl"
        >
          {data.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto"
        >
          <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
            Get Custom Quote →
          </Button>
          <Button href="/contact" variant="secondary" size="lg" className="w-full sm:w-auto">
            Request Free Sample
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 max-w-4xl"
        >
          {trustBadges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Check className="w-5 h-5 text-success" />
              <span className="text-[var(--text-primary)] font-medium">{badge}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </AuroraBackground>
  );
}
