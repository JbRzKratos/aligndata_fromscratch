import { cn } from "@/lib/utils";

interface BadgeProps {
  label: string;
  variant?: "default" | "cyan" | "success";
  className?: string;
}

export function Badge({ label, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-blue-50 text-blue-700 border-blue-200",
    cyan: "bg-cyan-50 text-cyan-700 border-cyan-200",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200",
  };

  return (
    <span
      className={cn(
        "inline-block border px-[12px] py-[5px] rounded-full",
        "text-[11px] font-semibold tracking-[0.08em] uppercase",
        variants[variant],
        className
      )}
    >
      {label}
    </span>
  );
}
