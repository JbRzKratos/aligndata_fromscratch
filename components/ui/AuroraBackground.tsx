"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
        {/* Base Aurora gradient container */}
        <div
          className="filter blur-[100px] md:blur-[120px] opacity-40 md:opacity-60 absolute -inset-[10px] will-change-transform"
          style={{
            backgroundImage: `
              repeating-linear-gradient(100deg, #fff 0%, #fff 7%, transparent 10%, transparent 12%, #fff 16%),
              repeating-linear-gradient(100deg, #3b82f6 10%, #6366f1 20%, #0ea5e9 30%, #3b82f6 40%)
            `,
            backgroundSize: '300%, 200%',
            backgroundPosition: '50% 50%, 50% 50%',
          }}
        >
          {/* Animated layer to simulate the active aurora motion */}
          <div 
            className="absolute inset-0 mix-blend-overlay animate-aurora opacity-70"
            style={{
              backgroundImage: `
                repeating-linear-gradient(100deg, #fff 0%, #fff 7%, transparent 10%, transparent 12%, #fff 16%),
                repeating-linear-gradient(100deg, #3b82f6 10%, #6366f1 20%, #0ea5e9 30%, #3b82f6 40%)
              `,
              backgroundSize: '200%, 100%',
            }}
          />

          {/* Custom animated orbs to enhance the depth */}
          <motion.div
            animate={{
              x: [0, 50, 0, -50, 0],
              y: [0, 50, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-blue-600/30 rounded-full mix-blend-screen"
          />
          <motion.div
            animate={{
              x: [0, -50, 0, 50, 0],
              y: [0, -50, 50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/3 right-1/4 w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-cyan-500/20 rounded-full mix-blend-screen"
          />
        </div>
        
        {/* Subtle grid overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none mix-blend-multiply">
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
