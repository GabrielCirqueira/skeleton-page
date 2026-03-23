import React from "react";
import { cn } from "@/utils/cn";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "display" | "h1" | "h2" | "h3" | "h4" | "lg" | "base" | "sm" | "xs";
  as?: React.ElementType;
}

export function Title({ children, className, variant = "h1", as }: TextProps) {
  const variants = {
    display: "text-4xl sm:text-6xl font-black leading-[1.1] tracking-tight font-poppins",
    h1: "text-3xl sm:text-4xl font-black leading-tight font-poppins",
    h2: "text-2xl font-bold font-poppins",
    h3: "text-xl font-bold font-poppins",
    h4: "text-lg font-semibold font-poppins",
  };

  type TitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  const Component = (as || (variant === "display" ? "h1" : variant)) as TitleTag;

  return (
    <Component className={cn(variants[variant as keyof typeof variants] || variants.h1, className)}>
      {children}
    </Component>
  );
}

export function Text({ children, className, variant = "base", as: Tag = "p" }: TextProps) {
  const variants = {
    lg: "text-lg leading-relaxed font-lato text-typography-600 dark:text-typography-400",
    base: "text-base font-lato text-typography-600 dark:text-typography-400",
    sm: "text-sm font-lato text-typography-600 dark:text-typography-400",
    xs: "text-xs font-bold uppercase tracking-widest font-lato text-typography-400",
  };

  const Component = Tag as React.ElementType;

  return (
    <Component
      className={cn(variants[variant as keyof typeof variants] || variants.base, className)}
    >
      {children}
    </Component>
  );
}
