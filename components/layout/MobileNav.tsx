"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 400, damping: 30 }
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);


  const services = [
    { label: "Manufacturing", href: "/manufacturing-industry-email-list" },
    { label: "Healthcare", href: "/healthcare-email-list" },
    { label: "Construction", href: "/construction-industry-email-list" },
    { label: "Automotive", href: "/automobile-industry-email-list" },
    { label: "Technology", href: "/technology-email-list" },
    { label: "View All Services", href: "/services" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Full Screen Menu */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-[var(--bg-base)] z-[101] flex flex-col md:hidden"
          >
            <motion.div variants={itemVariants} className="flex items-center justify-between p-6 border-b border-[var(--border)]">
              <span className="text-[var(--text-primary)] font-display font-bold text-xl">Menu</span>
              <button
                onClick={onClose}
                className="text-[var(--text-primary)] p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-slate-100"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            </motion.div>

            <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-2">
              <motion.div variants={itemVariants}>
                <Link
                  href="/"
                  onClick={onClose}
                  className="text-[18px] text-[var(--text-primary)] py-4 border-b border-[var(--border)] min-h-[44px] flex items-center"
                >
                  Home
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="/about"
                  onClick={onClose}
                  className="text-[18px] text-[var(--text-primary)] py-4 border-b border-[var(--border)] min-h-[44px] flex items-center"
                >
                  About
                </Link>
              </motion.div>

              {/* Accordion for Services */}
              <motion.div variants={itemVariants} className="border-b border-[var(--border)]">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full text-[18px] text-[var(--text-primary)] py-4 min-h-[44px] flex items-center justify-between"
                  aria-expanded={servicesOpen}
                  aria-controls="mobile-services-menu"
                >
                  Services
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 transition-transform duration-300",
                      servicesOpen && "rotate-180"
                    )}
                    aria-hidden="true"
                  />
                </button>
                
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      id="mobile-services-menu"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-2 pb-4 pl-4"
                    >
                      {services.map((service, idx) => (
                        <Link
                          key={idx}
                          href={service.href}
                          onClick={onClose}
                          className="text-muted text-[16px] py-2 min-h-[44px] flex items-center"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>


              <motion.div variants={itemVariants}>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="text-[18px] text-[var(--text-primary)] py-4 min-h-[44px] flex items-center"
                >
                  Contact
                </Link>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="p-6 border-t border-[var(--border)] mt-auto">
              <Button href="/contact" className="w-full" onClick={onClose}>
                Get Quote
              </Button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
