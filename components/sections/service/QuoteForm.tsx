"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  companyName: z.string().min(1, "Company name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  targetIndustry: z.string().optional(),
  message: z.string().max(500, "Message cannot exceed 500 characters").optional(),
});

type FormData = z.infer<typeof formSchema>;

const inputBase = "w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-[var(--text-primary)] outline-none transition-colors";
const inputDefault = `${inputBase} focus:border-[var(--accent-cyan)] focus:ring-1 focus:ring-[var(--accent-cyan)]`;
const inputError = `${inputBase} border-red-500/50`;

export function QuoteForm({ industryName }: { industryName: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      targetIndustry: industryName,
    }
  });

  const onSubmit = async (_data: FormData) => {
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      await new Promise<void>((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMsg(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const trustPoints = [
    "95% accuracy guarantee",
    "24-48h delivery",
    "Free sample available",
    "GDPR compliant",
  ];

  return (
    <SectionWrapper variant="base" id="quote-form">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

        {/* Left: Form */}
        <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-2xl p-6 md:p-10 shadow-lg">
          {isSuccess ? (
            <div className="flex flex-col items-center text-center py-12">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-success" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Quote Request Received</h3>
              <p className="text-muted">We&apos;ll be in touch within 24 hours.</p>
            </div>
          ) : (
            <>
              <div className="mb-8 text-center sm:text-left">
                <Badge label="Get Started" className="mb-4" />
                <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Ready to get your custom {industryName} list?</h2>
                <p className="text-muted">Fill out the form and receive a tailored quote within 24 hours.</p>
              </div>

              {errorMsg && (
                <div role="alert" className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-400">
                  <AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <p className="text-sm">{errorMsg}</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label htmlFor="quote-fullName" className="text-sm font-medium text-muted">Full Name *</label>
                    <input
                      id="quote-fullName"
                      type="text"
                      autoComplete="name"
                      {...register("fullName")}
                      className={errors.fullName ? inputError : inputDefault}
                      placeholder="John Doe"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? "quote-fullName-error" : undefined}
                    />
                    {errors.fullName && <p id="quote-fullName-error" className="text-red-400 text-xs mt-1" role="alert">{errors.fullName.message}</p>}
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="quote-companyName" className="text-sm font-medium text-muted">Company Name *</label>
                    <input
                      id="quote-companyName"
                      type="text"
                      autoComplete="organization"
                      {...register("companyName")}
                      className={errors.companyName ? inputError : inputDefault}
                      placeholder="Acme Corp"
                      aria-invalid={!!errors.companyName}
                      aria-describedby={errors.companyName ? "quote-companyName-error" : undefined}
                    />
                    {errors.companyName && <p id="quote-companyName-error" className="text-red-400 text-xs mt-1" role="alert">{errors.companyName.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label htmlFor="quote-email" className="text-sm font-medium text-muted">Work Email *</label>
                    <input
                      id="quote-email"
                      type="email"
                      autoComplete="email"
                      {...register("email")}
                      className={errors.email ? inputError : inputDefault}
                      placeholder="john@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "quote-email-error" : undefined}
                    />
                    {errors.email && <p id="quote-email-error" className="text-red-400 text-xs mt-1" role="alert">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="quote-phone" className="text-sm font-medium text-muted">Phone Number</label>
                    <input
                      id="quote-phone"
                      type="tel"
                      autoComplete="tel"
                      {...register("phone")}
                      className={inputDefault}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="quote-targetIndustry" className="text-sm font-medium text-muted">Target Industry</label>
                  <select
                    id="quote-targetIndustry"
                    {...register("targetIndustry")}
                    className={`${inputDefault} appearance-none`}
                  >
                    <option value={industryName}>{industryName}</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="quote-message" className="text-sm font-medium text-muted">Message / Requirements</label>
                  <textarea
                    id="quote-message"
                    rows={4}
                    {...register("message")}
                    className={`${errors.message ? inputError : inputDefault} resize-none`}
                    placeholder="Tell us what you're looking for..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "quote-message-error" : undefined}
                  />
                  {errors.message && <p id="quote-message-error" className="text-red-400 text-xs mt-1" role="alert">{errors.message.message}</p>}
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full mt-4" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                      Submitting...
                    </span>
                  ) : (
                    "Request Custom Quote →"
                  )}
                </Button>
              </form>
            </>
          )}
        </div>

        {/* Right: Trust Info */}
        <div className="flex flex-col justify-center lg:py-10">
          <div className="inline-flex w-16 h-16 rounded-2xl bg-blue-100 border border-blue-200 items-center justify-center mb-8" aria-hidden="true">
            <span className="text-2xl font-bold text-cyan-DEFAULT font-display">A</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">Connect with the right decision makers.</h3>
          <p className="text-lg text-muted mb-10 leading-relaxed">
            Our data specialists will review your requirements and provide a detailed quote tailored to your exact target audience criteria.
          </p>

          <ul className="space-y-5">
            {trustPoints.map((point, idx) => (
              <li key={idx} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0" aria-hidden="true">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                </div>
                <span className="text-[var(--text-primary)] font-medium text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
