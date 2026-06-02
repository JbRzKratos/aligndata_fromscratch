"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Factory, Heart, HardHat, Car, Plane, Cpu, Briefcase, MapPin, Globe, Users, FileText } from "lucide-react";

interface NavDropdownProps {
  isOpen: boolean;
}

export function NavDropdown({ isOpen }: NavDropdownProps) {
  const columns = [
    {
      title: "Key Industries",
      items: [
        { label: "Manufacturing", href: "/manufacturing-industry-email-list", icon: Factory },
        { label: "Healthcare", href: "/healthcare-email-list", icon: Heart },
        { label: "Construction", href: "/construction-industry-email-list", icon: HardHat },
        { label: "Automotive", href: "/automobile-industry-email-list", icon: Car },
        { label: "Aviation", href: "/aviation-industry-email-list", icon: Plane },
      ],
    },
    {
      title: "Specialty Lists",
      items: [
        { label: "Data Appending", href: "/data-appending-service", icon: FileText },
        { label: "Industry Database", href: "/industry-email-list", icon: Briefcase },
        { label: "Technology Users", href: "/technology-email-list", icon: Cpu },
      ],
    },
    {
      title: "Regional Data",
      items: [
        { label: "Canadian Business", href: "/canadian-business-email-list", icon: MapPin },
        { label: "Europe Database", href: "/europe-business-email-database", icon: Globe },
        { label: "Asia Pacific", href: "/asia-pacific-business-email-list", icon: Globe },
      ],
    },
    {
      title: "By Job Role",
      items: [
        { label: "Professionals List", href: "/professionals-email-list", icon: Users },
      ],
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 min-w-[760px] bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl shadow-2xl overflow-hidden z-50"
        >
          <div className="grid grid-cols-4 gap-6 p-6">
            {columns.map((col, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <h4 className="text-[var(--text-primary)] font-semibold text-sm tracking-wide uppercase mb-2 opacity-80">
                  {col.title}
                </h4>
                {col.items.map((item, itemIdx) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={itemIdx}
                      href={item.href}
                      className="flex items-center gap-2 py-2 px-3 -mx-3 rounded-lg text-muted text-sm hover:bg-[var(--bg-card)] hover:text-[var(--text-primary)] transition-colors group"
                    >
                      <Icon className="w-4 h-4 text-cyan-DEFAULT opacity-70 group-hover:opacity-100 transition-opacity" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
