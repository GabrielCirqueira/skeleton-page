import React from "react";
import { cn } from "@/utils/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
}

export function Card({ children, className, hoverGlow = true }: CardProps) {
  return (
    <div
      className={cn(
        "relative bg-background-900 border border-outline-900 rounded-lg p-6 overflow-hidden transition-all duration-300",
        hoverGlow && "hover:border-brand-500/50 hover:shadow-2xl hover:shadow-brand-500/10 group",
        className
      )}
    >
      {hoverGlow && (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
