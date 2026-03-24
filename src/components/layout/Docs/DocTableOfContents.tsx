import React from "react";
import { Text } from "@/components/ui";
import { VStack } from "@/components/layout/Stack";
import { cn } from "@/utils/cn";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function DocTableOfContents() {
  const [items, setItems] = React.useState<TOCItem[]>([]);
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    const headings = Array.from(document.querySelectorAll("h2, h3"));
    const tocItems = headings
      .map((heading) => ({
        id: heading.id,
        text: heading.textContent || "",
        level: heading.tagName === "H2" ? 2 : 3,
      }))
      .filter((item) => item.id);

    setItems(tocItems);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0% -80% 0%" }
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, []);

  if (items.length === 0) return null;

  return (
    <aside className="w-64 shrink-0 hidden xl:block sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto pl-8 py-10">
      <VStack gap={6}>
        <Text
          variant="xs"
          className="text-[11px] uppercase tracking-[0.25em] text-typography-400/60 font-black mb-1"
        >
          Nesta seção
        </Text>
        <nav className="flex flex-col gap-3">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "text-xs font-bold transition-all border-l-2 pl-4 -ml-[2px]",
                activeId === item.id
                  ? "text-brand-600 dark:text-brand-400 border-brand-500/50"
                  : "text-typography-400 border-transparent hover:text-typography-950"
              )}
              style={{ marginLeft: item.level === 3 ? "12px" : "0" }}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </VStack>
    </aside>
  );
}
