import { cn } from "@/lib/utils";
import { ElementType, ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

export function GradientText({ children, as: Component = "span", className }: GradientTextProps) {
  return (
    <Component
      className={cn(
        "text-transparent bg-clip-text",
        className
      )}
      style={{
        backgroundImage: "linear-gradient(135deg, #1D4ED8 0%, #06B6D4 50%, #2563EB 100%)",
      }}
    >
      {children}
    </Component>
  );
}
