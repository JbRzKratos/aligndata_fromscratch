import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  pauseOnHover?: boolean;
}

export function Marquee({ children, className, pauseOnHover = true }: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden whitespace-nowrap",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 animate-marquee items-center justify-around gap-12 px-6",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 animate-marquee items-center justify-around gap-12 px-6",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
