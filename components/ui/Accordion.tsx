"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("w-full", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `accordion-panel-${index}`;
        const triggerId = `accordion-trigger-${index}`;

        return (
          <div
            key={index}
            className="border-b border-[var(--border)] py-5"
          >
            <button
              id={triggerId}
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-DEFAULT focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)] rounded-sm"
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="font-semibold text-[var(--text-primary)] text-lg">
                {item.question}
              </span>
              <ChevronDown
                aria-hidden="true"
                className={cn(
                  "w-5 h-5 text-muted transition-transform duration-300 shrink-0",
                  isOpen && "rotate-180 text-cyan-DEFAULT"
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pt-4 text-[15px] text-muted leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
