import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: ReactNode;
  variant?: "base" | "surface";
}

export function SectionWrapper({
  id,
  className,
  children,
  variant = "base",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-12 md:py-16 lg:py-24",
        variant === "surface" ? "bg-[var(--bg-surface)]" : "bg-[var(--bg-base)]",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
