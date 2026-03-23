import React from "react";
import { cn } from "@/utils/cn";

export * from "./Badge";
export * from "./Card";
export * from "./Callout";
export * from "./CodeBlock";

interface TextProps {
  children: React.ReactNode;
  variant?: "display" | "h1" | "h2" | "h3" | "h4" | "lg" | "md" | "sm" | "xs";
  className?: string;
  id?: string;
}

export function Title({ children, variant = "h1", className, id }: TextProps) {
  const Tag = (variant === "display" ? "h1" : variant) as React.ElementType;
  const variants = {
    display: "text-5xl md:text-7xl font-black tracking-tight leading-[1.1] font-poppins",
    h1: "text-4xl md:text-6xl font-black tracking-tight font-poppins",
    h2: "text-3xl md:text-5xl font-black tracking-tight font-poppins",
    h3: "text-2xl md:text-4xl font-black tracking-tight font-poppins",
    h4: "text-xl md:text-2xl font-black tracking-tight font-poppins",
  };

  return (
    <Tag
      id={id}
      className={cn(variants[variant as keyof typeof variants] || variants.h1, className)}
    >
      {children}
    </Tag>
  );
}

export function Text({ children, variant = "md", className, id }: TextProps) {
  const variants = {
    lg: "text-lg md:text-xl font-medium leading-relaxed font-lato",
    md: "text-base font-medium leading-relaxed font-lato",
    sm: "text-sm font-medium leading-relaxed font-lato",
    xs: "text-xs font-bold tracking-wider uppercase font-lato",
  };

  return (
    <p id={id} className={cn(variants[variant as keyof typeof variants] || variants.md, className)}>
      {children}
    </p>
  );
}
