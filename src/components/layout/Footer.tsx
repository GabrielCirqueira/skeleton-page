import { Container } from "./Containers";
import { Title, Text } from "@/components/ui";
import { HStack, VStack } from "./Stack";
import { Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const version = "v4.0.0";

  const sections: FooterSection[] = [
    {
      title: "Documentação",
      links: [
        { name: "Introdução", href: "/docs" },
        { name: "Arquitetura", href: "/docs/arquitetura" },
        { name: "Backend", href: "/docs/backend" },
        { name: "Frontend", href: "/docs/frontend" },
        { name: "Banco de Dados", href: "/docs/banco-de-dados" },
      ],
    },
    {
      title: "Avançado",
      links: [
        { name: "Mensageria", href: "/docs/mensageria" },
        { name: "DevOps", href: "/docs/devops" },
        { name: "Qualidade", href: "/docs/qualidade" },
        { name: "Makefile", href: "/docs/makefile" },
        { name: "Nomenclatura", href: "/docs/nomenclatura" },
      ],
    },
    {
      title: "Links Externos",
      links: [
        {
          name: "GitHub",
          href: "https://github.com/GabrielCirqueira/Catalyst-Skeleton",
          external: true,
        },
      ],
    },
  ];

  return (
    <footer className="border-t border-outline-900 bg-background-950 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 px-4 sm:px-0">
          <div className="md:col-span-4 max-w-sm">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center p-1 shadow-lg group-hover:scale-110 transition-transform">
                <svg
                  className="w-4 h-4 text-background-950"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m16 18 6-6-6-6" />
                  <path d="m8 6-6 6 6 6" />
                </svg>
              </div>
              <Title variant="h3" className="text-typography-950">
                Catalyst <span className="text-brand-500">Skeleton</span>
              </Title>
            </Link>
            <Text className="text-typography-400 mb-6 font-medium">
              O ponto de partida definitivo para aplicações empresariais sólidas, escaláveis e com
              design de alto nível.
            </Text>
            <HStack gap={4}>
              <a
                href="https://github.com/GabrielCirqueira/Catalyst-Skeleton"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-outline-900 flex items-center justify-center text-typography-400 hover:text-brand-500 hover:border-brand-500/50 hover:bg-brand-500/5 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
            </HStack>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {sections.map((section) => (
              <VStack key={section.title} gap={6}>
                <Title variant="h4" className="text-typography-950 text-base">
                  {section.title}
                </Title>
                <div className="flex flex-col gap-3">
                  {section.links.map((link) => {
                    const isExternal = link.external;
                    const Component = isExternal ? "a" : Link;
                    const props = isExternal
                      ? { href: link.href, target: "_blank", rel: "noopener" }
                      : { to: link.href };

                    return (
                      <Component
                        key={link.name}
                        {...(props as any)}
                        className="text-sm font-semibold text-typography-400 hover:text-brand-500 transition-colors inline-flex items-center gap-1 group"
                      >
                        {link.name}
                        {isExternal && (
                          <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        )}
                      </Component>
                    );
                  })}
                </div>
              </VStack>
            ))}
          </div>
        </div>

        <HStack
          justify="between"
          align="center"
          className="pt-8 border-t border-outline-900/50 flex-col sm:flex-row gap-4 px-4 sm:px-0"
        >
          <Text variant="sm" className="text-typography-400/60 order-2 sm:order-1">
            © {currentYear} Gabriel Cirqueira. Catalyst Skeleton. Todos os direitos reservados.
          </Text>
          <HStack gap={4} className="order-1 sm:order-2">
            <span className="text-xs font-bold text-brand-500/80 bg-brand-500/10 px-3 py-1 rounded-full uppercase tracking-widest border border-brand-500/20">
              {version}
            </span>
            <Text
              variant="sm"
              className="text-typography-400 font-bold hover:text-typography-950 transition-colors cursor-pointer"
            >
              Status do Sistema
            </Text>
          </HStack>
        </HStack>
      </Container>
    </footer>
  );
}
