import React from "react";
import { cn } from "@/utils/cn";

interface StackProps {
  children: React.ReactNode;
  className?: string;
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32;
  align?: "start" | "center" | "end" | "baseline" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  as?: React.ElementType;
}

const gapMap = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
  12: "gap-12",
  16: "gap-16",
  20: "gap-20",
  24: "gap-24",
  32: "gap-32",
};

const alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  baseline: "items-baseline",
  stretch: "items-stretch",
};

const justifyMap = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

export function VStack({
  children,
  className,
  gap = 4,
  align = "stretch",
  justify = "start",
  as: Component = "div",
}: StackProps) {
  return (
    <Component
      className={cn("flex flex-col", gapMap[gap], alignMap[align], justifyMap[justify], className)}
    >
      {children}
    </Component>
  );
}

export function HStack({
  children,
  className,
  gap = 4,
  align = "center",
  justify = "start",
  as: Component = "div",
}: StackProps) {
  return (
    <Component
      className={cn("flex flex-row", gapMap[gap], alignMap[align], justifyMap[justify], className)}
    >
      {children}
    </Component>
  );
}

export function Box({
  children,
  className,
  as: Component = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  return <Component className={className}>{children}</Component>;
}
