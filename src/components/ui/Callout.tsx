import React from "react";
import { cn } from "@/utils/cn";
import { Info, AlertCircle, Lightbulb } from "lucide-react";
import { Title } from "./index";

interface CalloutProps {
  children: React.ReactNode;
  title?: string;
  variant?: "info" | "tip" | "warning" | "danger";
  className?: string;
}

const icons = {
  info: Info,
  tip: Lightbulb,
  warning: AlertCircle,
  danger: AlertCircle,
};

const variants = {
  info: "bg-info-500/10 border-info-500/20 text-info-500",
  tip: "bg-brand-500/10 border-brand-500/20 text-brand-500",
  warning: "bg-warning-500/10 border-warning-500/20 text-warning-500",
  danger: "bg-error-500/10 border-error-500/20 text-error-500",
};

export function Callout({ children, title, variant = "info", className }: CalloutProps) {
  const Icon = icons[variant];
  const variantStyles = variants[variant];

  return (
    <div
      className={cn(
        "p-5 border rounded-xl flex gap-4 my-6 transition-all shadow-sm",
        variantStyles,
        className
      )}
    >
      <div className="shrink-0 mt-0.5">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 flex flex-col gap-1">
        {title && (
          <Title variant="h4" className="text-typography-950 text-base">
            {title}
          </Title>
        )}
        <div className="text-sm font-medium leading-relaxed opacity-90">{children}</div>
      </div>
    </div>
  );
}
