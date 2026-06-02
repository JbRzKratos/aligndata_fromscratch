import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({ children, className, hoverable = true }: CardProps) {
  return (
    <div
      className={cn(
        "bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-7 transition-all duration-200 ease-out",
        hoverable && "hover:border-[var(--border-hover)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]",
        className
      )}
    >
      {children}
    </div>
  );
}
