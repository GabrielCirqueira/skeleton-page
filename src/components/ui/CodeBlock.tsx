import React from "react";
import { cn } from "@/utils/cn";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  title?: string;
}

export function CodeBlock({ code, language = "bash", className, title }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "relative my-6 rounded-lg border border-zinc-800 bg-zinc-950/90 overflow-hidden group shadow-2xl backdrop-blur-sm",
        className
      )}
    >
      {title && (
        <div className="px-5 py-3 border-b border-zinc-800 bg-zinc-900/50 flex items-center justify-between">
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{title}</span>
          <span className="text-[10px] font-bold text-brand-500/50 uppercase">{language}</span>
        </div>
      )}
      <div className="relative">
        <pre className="p-5 text-sm font-mono overflow-x-auto text-zinc-100 text-left leading-relaxed scrollbar-thin scrollbar-thumb-zinc-800">
          <code className={`language-${language}`}>{code}</code>
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-all opacity-0 group-hover:opacity-100"
          title="Copiar código"
        >
          {copied ? <Check className="w-4 h-4 text-brand-500" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
