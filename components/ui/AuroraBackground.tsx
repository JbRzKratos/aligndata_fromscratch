"use client";

import { cn } from "@/lib/utils";

export function AuroraBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-[var(--bg-base)] text-[var(--text-primary)] w-full overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* CSS-only Aurora gradient — no JS animation for max perf on low-end devices */}
        <div
          className="aurora-layer filter blur-[80px] sm:blur-[100px] opacity-30 sm:opacity-50 absolute -inset-[10px] will-change-auto"
          style={{
            backgroundImage: `
              repeating-linear-gradient(100deg, #fff 0%, #fff 7%, transparent 10%, transparent 12%, #fff 16%),
              repeating-linear-gradient(100deg, #3b82f6 10%, #6366f1 20%, #0ea5e9 30%, #3b82f6 40%)
            `,
            backgroundSize: '300%, 200%',
            backgroundPosition: '50% 50%, 50% 50%',
          }}
        >
          <div 
            className="absolute inset-0 mix-blend-overlay animate-aurora opacity-60"
            style={{
              backgroundImage: `
                repeating-linear-gradient(100deg, #fff 0%, #fff 7%, transparent 10%, transparent 12%, #fff 16%),
                repeating-linear-gradient(100deg, #3b82f6 10%, #6366f1 20%, #0ea5e9 30%, #3b82f6 40%)
              `,
              backgroundSize: '200%, 100%',
            }}
          />
        </div>
        
        {/* Subtle grid overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none mix-blend-multiply" aria-hidden="true">
          <pattern id="aurora-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#aurora-grid)" />
        </svg>
      </div>
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full flex flex-col justify-center">{children}</div>
    </div>
  );
}

