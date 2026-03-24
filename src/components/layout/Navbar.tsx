import { Link } from "react-router-dom";
import { Title, Text } from "@/components/ui";
import { Container } from "./Containers";
import { HStack, Box } from "./Stack";
import { Button } from "@shadcn/components/button";
import { Menu, X, Github } from "lucide-react";
import React from "react";
import { cn } from "@/utils/cn";
import { ThemeToggle } from "../ui/ThemeToggle";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const links = [
    { name: "Documentação", href: "/docs" },
    { name: "Arquitetura", href: "/docs/arquitetura" },
    { name: "Backend", href: "/docs/backend" },
    { name: "Frontend", href: "/docs/frontend" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-outline-900 bg-background-950/80 backdrop-blur-md">
      <Container className="py-4 sm:py-4 lg:py-4">
        <HStack justify="between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <div className="w-4 h-4 text-background-950">
                <svg
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
            </div>
            <Title variant="h3" className="font-poppins text-typography-950">
              Catalyst <span className="text-brand-500">Skeleton</span>
            </Title>
          </Link>

          <HStack gap={8} className="hidden md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-semibold text-typography-400 hover:text-typography-950 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <HStack gap={4}>
              <ThemeToggle />
              <Button asChild variant="ghost" size="icon">
                <a
                  href="https://github.com/GabrielCirqueira/catalyst-testproject"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="primary">
                <Link to="/docs">Explorar Docs</Link>
              </Button>
            </HStack>
          </HStack>

          <HStack gap={2} className="md:hidden">
            <ThemeToggle />
            <button className="text-typography-950 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </HStack>
        </HStack>

        {isMenuOpen && (
          <Box className="md:hidden pt-4 pb-2 border-t border-outline-900 mt-4 absolute left-0 right-0 bg-background-950 px-4 animate-in slide-in-from-top-4 duration-300 overflow-hidden">
            <div className="flex flex-col gap-4 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-lg font-bold text-typography-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild variant="primary" className="w-full">
                <Link to="/docs" onClick={() => setIsMenuOpen(false)}>
                  Começar Agora
                </Link>
              </Button>
            </div>
          </Box>
        )}
      </Container>
    </nav>
  );
}
