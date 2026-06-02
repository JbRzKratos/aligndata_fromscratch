import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Aligndata",
  description: "Get in touch with Aligndata. We're here to help you fuel your growth with verified data.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-12 bg-[var(--bg-base)]">
      {/* Visual background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] pointer-events-none" 
           style={{ background: "radial-gradient(ellipse 50% 50% at 50% 0%, rgba(37,99,235,0.1) 0%, transparent 80%)" }} />

      <SectionWrapper variant="base" className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <h1 className="mb-6">Get in touch</h1>
          <p className="text-xl text-muted">Whether you have a question about our database, need a custom quote, or need technical support, our team is ready to answer all your questions.</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Column: Contact Info & Map placeholder */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="bg-[var(--bg-surface)] p-8 rounded-2xl border border-[var(--border)]">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">Contact Information</h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#60A5FA]" />
                  </div>
                  <div>
                    <h4 className="text-[var(--text-primary)] font-medium mb-1">Our Headquarters</h4>
                    <p className="text-muted text-sm leading-relaxed">212 N. 2nd St. STE 100<br/>Richmond, KY 40475</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#60A5FA]" />
                  </div>
                  <div>
                    <h4 className="text-[var(--text-primary)] font-medium mb-1">Phone</h4>
                    <a href="tel:+12513531795" className="text-muted text-sm hover:text-cyan-DEFAULT transition-colors">+1 (251) 353-1795</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#60A5FA]" />
                  </div>
                  <div>
                    <h4 className="text-[var(--text-primary)] font-medium mb-1">Email</h4>
                    <a href="mailto:hello@aliigndata.com" className="text-muted text-sm hover:text-cyan-DEFAULT transition-colors">hello@aliigndata.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#60A5FA]" />
                  </div>
                  <div>
                    <h4 className="text-[var(--text-primary)] font-medium mb-1">Business Hours</h4>
                    <p className="text-muted text-sm leading-relaxed">Monday - Friday: 9am - 6pm EST<br/>Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-48 md:h-64 w-full rounded-2xl overflow-hidden border border-[var(--border)] relative group">
              <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#2563EB 1px, transparent 1px)", backgroundSize: "16px 16px" }}></div>
                <div className="flex flex-col items-center gap-2 relative z-10 text-muted group-hover:text-cyan-DEFAULT transition-colors">
                  <MapPin className="w-8 h-8" />
                  <span className="text-sm font-medium">Interactive Map view</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
