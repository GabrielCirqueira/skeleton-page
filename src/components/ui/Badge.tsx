import React from "react";
import { cn } from "@/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "brand" | "success" | "warning" | "error" | "info" | "neutral";
  className?: string;
  size?: "sm" | "md";
}

export function Badge({ children, variant = "brand", className, size = "md" }: BadgeProps) {
  const variants = {
    brand: "bg-brand-500/10 text-brand-500 border-brand-500/20",
    success: "bg-success-500/10 text-success-500 border-success-500/20",
    warning: "bg-warning-500/10 text-warning-500 border-warning-500/20",
    error: "bg-error-500/10 text-error-500 border-error-500/20",
    info: "bg-info-500/10 text-info-500 border-info-500/20",
    neutral: "bg-background-800 text-typography-400 border-outline-900",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-2.5 py-1 text-xs",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-bold uppercase tracking-widest border rounded-lg transition-all",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
