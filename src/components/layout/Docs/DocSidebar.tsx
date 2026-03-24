import { NavLink } from "react-router-dom";
import { Text } from "@/components/ui";
import { VStack } from "@/components/layout/Stack";
import { cn } from "@/utils/cn";

interface DocLink {
  name: string;
  href: string;
}

interface DocGroup {
  title: string;
  links: DocLink[];
}

const grupos: DocGroup[] = [
  {
    title: "Começando",
    links: [{ name: "Introdução", href: "/docs" }],
  },
  {
    title: "Fundamentos",
    links: [
      { name: "Arquitetura", href: "/docs/arquitetura" },
      { name: "Nomenclatura", href: "/docs/nomenclatura" },
    ],
  },
  {
    title: "Backend",
    links: [
      { name: "Padronização", href: "/docs/backend" },
      { name: "Autenticação", href: "/docs/autenticacao" },
      { name: "Banco de Dados", href: "/docs/banco-de-dados" },
      { name: "Mensageria", href: "/docs/mensageria" },
    ],
  },
  {
    title: "Frontend",
    links: [{ name: "Estrutura", href: "/docs/frontend" }],
  },
  {
    title: "Infra & QA",
    links: [
      { name: "DevOps", href: "/docs/devops" },
      { name: "Qualidade", href: "/docs/qualidade" },
      { name: "Makefile", href: "/docs/makefile" },
    ],
  },
];

export function DocSidebar({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "w-64 shrink-0 h-[calc(100vh-5rem)] sticky top-20 overflow-y-auto pr-6 custom-scrollbar",
        className
      )}
    >
      <VStack gap={10} className="py-8">
        {grupos.map((grupo) => (
          <VStack key={grupo.title} gap={4}>
            <Text
              variant="xs"
              className="text-[11px] uppercase tracking-[0.25em] text-typography-400/60 font-black px-3 mb-1"
            >
              {grupo.title}
            </Text>
            <nav className="flex flex-col gap-1">
              {grupo.links.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === "/docs"}
                  className={({ isActive }) =>
                    cn(
                      "px-3 py-2 text-sm font-bold rounded-lg transition-all flex items-center gap-2 border border-transparent group",
                      isActive
                        ? "bg-brand-500/10 text-brand-600 dark:text-brand-400 border-brand-500/15"
                        : "text-typography-400 hover:text-typography-950 hover:bg-background-800"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </VStack>
        ))}
      </VStack>
    </aside>
  );
}
