import Link from "next/link";
import { Phone, Mail, Globe, Hash, Monitor } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--bg-base)] border-t border-[var(--border)] pt-16 md:pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-12 mb-16">
          {/* Column 1: Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-white text-lg leading-none font-display font-bold">A</span>
              </span>
              <span className="text-[var(--text-primary)] font-display font-bold text-2xl">Aligndata</span>
            </Link>
            <p className="text-muted">Fuel your growth with verified data.</p>
            
            <div className="flex flex-col gap-3">
              <p className="text-muted text-sm">212 N. 2nd St. STE 100<br/>Richmond, KY 40475</p>
              <a href="tel:+12513531795" className="text-muted text-sm flex items-center gap-2 hover:text-[var(--text-primary)] transition-colors">
                <Phone className="w-4 h-4" /> +1 (251) 353-1795
              </a>
              <a href="mailto:hello@aliigndata.com" className="text-muted text-sm flex items-center gap-2 hover:text-[var(--text-primary)] transition-colors">
                <Mail className="w-4 h-4" /> hello@aliigndata.com
              </a>
            </div>

            <div className="flex gap-4">
              <a href="#" aria-label="Visit our website" className="w-10 h-10 rounded-full bg-slate-100 border border-[var(--border)] flex items-center justify-center text-muted hover:text-[var(--text-primary)] hover:border-[rgba(37,99,235,0.5)] transition-colors">
                <Globe className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="#" aria-label="Visit our Twitter/X profile" className="w-10 h-10 rounded-full bg-slate-100 border border-[var(--border)] flex items-center justify-center text-muted hover:text-[var(--text-primary)] hover:border-[rgba(37,99,235,0.5)] transition-colors">
                <Hash className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="#" aria-label="Visit our LinkedIn profile" className="w-10 h-10 rounded-full bg-slate-100 border border-[var(--border)] flex items-center justify-center text-muted hover:text-[var(--text-primary)] hover:border-[rgba(37,99,235,0.5)] transition-colors">
                <Monitor className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold mb-6 uppercase tracking-wider text-sm opacity-90">Services</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/data-appending-service" className="text-muted hover:text-[var(--text-primary)] text-sm transition-colors min-h-[44px] md:min-h-0 flex items-center">Data Appending</Link></li>
              <li><Link href="/professionals-email-list" className="text-muted hover:text-[var(--text-primary)] text-sm transition-colors min-h-[44px] md:min-h-0 flex items-center">Professionals List</Link></li>
              <li><Link href="/technology-email-list" className="text-muted hover:text-[var(--text-primary)] text-sm transition-colors min-h-[44px] md:min-h-0 flex items-center">Technology Users</Link></li>
              <li><Link href="/healthcare-email-list" className="text-muted hover:text-[var(--text-primary)] text-sm transition-colors min-h-[44px] md:min-h-0 flex items-center">Healthcare List</Link></li>
              <li><Link href="/industry-email-list" className="text-muted hover:text-[var(--text-primary)] text-sm transition-colors min-h-[44px] md:min-h-0 flex items-center">Industry Database</Link></li>
            </ul>
          </div>

          {/* Column 3: Regions */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold mb-6 uppercase tracking-wider text-sm opacity-90">Regions</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/canadian-business-email-list" className="text-muted hover:text-[var(--text-primary)] text-sm transition-colors min-h-[44px] md:min-h-0 flex items-center">Canadian Business</Link></li>
              <li><Link href="/europe-business-email-database" className="text-muted hover:text-[var(--text-primary)] text-sm transition-colors min-h-[44px] md:min-h-0 flex items-center">European Business</Link></li>
              <li><Link href="/asia-pacific-business-email-list" className="text-muted hover:text-[var(--text-primary)] text-sm transition-colors min-h-[44px] md:min-h-0 flex items-center">Asia Pacific</Link></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold mb-6 uppercase tracking-wider text-sm opacity-90">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/about" className="text-muted hover:text-[var(--text-primary)] text-sm transition-colors min-h-[44px] md:min-h-0 flex items-center">About Us</Link></li>
              <li><Link href="/services" className="text-muted hover:text-[var(--text-primary)] text-sm transition-colors min-h-[44px] md:min-h-0 flex items-center">All Services</Link></li>


              <li><Link href="/contact" className="text-muted hover:text-[var(--text-primary)] text-sm transition-colors min-h-[44px] md:min-h-0 flex items-center">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--border)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm text-center md:text-left">
            © {new Date().getFullYear()} Aligndata LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-muted hover:text-[var(--text-primary)] text-sm transition-colors min-h-[44px] md:min-h-0 flex items-center">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted hover:text-[var(--text-primary)] text-sm transition-colors min-h-[44px] md:min-h-0 flex items-center">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
