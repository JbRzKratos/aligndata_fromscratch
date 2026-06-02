"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { NavDropdown } from "./NavDropdown";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-[var(--border)] py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <div className="text-[var(--text-primary)] font-display font-bold text-2xl flex items-center gap-2">
            <span className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-white text-lg leading-none">A</span>
            </span>
            Aligndata
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[14px] text-muted hover:text-[var(--text-primary)] transition-colors duration-150 font-body">
            Home
          </Link>
          <Link href="/about" className="text-[14px] text-muted hover:text-[var(--text-primary)] transition-colors duration-150 font-body">
            About
          </Link>
          
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
          <button
            className="flex items-center gap-1 text-[14px] text-muted hover:text-[var(--text-primary)] transition-colors duration-150 font-body py-2"
            aria-expanded={servicesDropdownOpen}
            aria-haspopup="true"
          >
            Services <ChevronDown className="w-4 h-4" aria-hidden="true" />
          </button>
            <NavDropdown isOpen={servicesDropdownOpen} />
          </div>

          <Link href="/why-us" className="text-[14px] text-muted hover:text-[var(--text-primary)] transition-colors duration-150 font-body">
            Why Us
          </Link>
          <Link href="/contact" className="text-[14px] text-muted hover:text-[var(--text-primary)] transition-colors duration-150 font-body">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button href="/quote" variant="primary" size="sm">
            Get Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--text-primary)] p-2"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
