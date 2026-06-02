"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
});

type FormData = z.infer<typeof formSchema>;

const inputBase = "w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-[var(--text-primary)] outline-none transition-colors";
const inputDefault = `${inputBase} focus:border-[var(--accent-cyan)] focus:ring-1 focus:ring-[var(--accent-cyan)]`;
const inputError = `${inputBase} border-red-500/50`;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
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

  if (isSuccess) {
    return (
      <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 md:p-12 text-center h-full flex flex-col justify-center items-center shadow-lg">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-success" aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Message Sent</h3>
        <p className="text-muted">Thanks for reaching out! A member of our team will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 md:p-10 shadow-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Send us a message</h2>
        <p className="text-muted">Fill out the form below and we&apos;ll reply within 24 hours.</p>
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
            <label htmlFor="contact-fullName" className="text-sm font-medium text-muted">Full Name *</label>
            <input
              id="contact-fullName"
              type="text"
              autoComplete="name"
              {...register("fullName")}
              className={errors.fullName ? inputError : inputDefault}
              placeholder="Jane Doe"
              aria-describedby={errors.fullName ? "contact-fullName-error" : undefined}
              aria-invalid={!!errors.fullName}
            />
            {errors.fullName && <p id="contact-fullName-error" className="text-red-400 text-xs mt-1" role="alert">{errors.fullName.message}</p>}
          </div>

          <div className="space-y-1">
            <label htmlFor="contact-email" className="text-sm font-medium text-muted">Email Address *</label>
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              {...register("email")}
              className={errors.email ? inputError : inputDefault}
              placeholder="jane@example.com"
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              aria-invalid={!!errors.email}
            />
            {errors.email && <p id="contact-email-error" className="text-red-400 text-xs mt-1" role="alert">{errors.email.message}</p>}
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="contact-subject" className="text-sm font-medium text-muted">Subject *</label>
          <input
            id="contact-subject"
            type="text"
            {...register("subject")}
            className={errors.subject ? inputError : inputDefault}
            placeholder="How can we help?"
            aria-describedby={errors.subject ? "contact-subject-error" : undefined}
            aria-invalid={!!errors.subject}
          />
          {errors.subject && <p id="contact-subject-error" className="text-red-400 text-xs mt-1" role="alert">{errors.subject.message}</p>}
        </div>

        <div className="space-y-1">
          <label htmlFor="contact-message" className="text-sm font-medium text-muted">Message *</label>
          <textarea
            id="contact-message"
            rows={5}
            {...register("message")}
            className={`${errors.message ? inputError : inputDefault} resize-none`}
            placeholder="Please provide details about your inquiry..."
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            aria-invalid={!!errors.message}
          />
          {errors.message && <p id="contact-message-error" className="text-red-400 text-xs mt-1" role="alert">{errors.message.message}</p>}
        </div>

        <Button type="submit" variant="primary" size="lg" className="w-full mt-2" disabled={isSubmitting}>
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </div>
  );
}
