import React from "react";
import { cn } from "@/utils/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function AppContainer({ children, className, as: Component = "main" }: ContainerProps) {
  return (
    <Component
      className={cn(
        "min-h-screen bg-background-950 text-typography-950 dark:text-white antialiased",
        className
      )}
    >
      {children}
    </Component>
  );
}

export function Container({ children, className, as: Component = "section" }: ContainerProps) {
  return (
    <Component className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24", className)}>
      {children}
    </Component>
  );
}
