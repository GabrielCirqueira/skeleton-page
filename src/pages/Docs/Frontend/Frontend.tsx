import { Title, Text, Card, Callout, CodeBlock } from "@/components/ui";
import { VStack, Box, HStack } from "@/components/layout/Stack";
import { Ban, Share2, Palette, ArrowRight, Layers, Smartphone, Sparkles } from "lucide-react";
import { Button } from "@shadcn/components/button";
import { Link } from "react-router-dom";

export function Component() {
  return (
    <VStack gap={10} className="pb-20">
      <VStack gap={3}>
        <span className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Experiência
        </span>
        <Title
          variant="h1"
          id="frontend"
          className="text-3xl sm:text-4xl text-typography-950 dark:text-white"
        >
          Arquitetura de <span className="text-brand-500">Frontend</span>
        </Title>
        <Text variant="lg" className="text-typography-600 dark:text-typography-400 max-w-2xl">
          Frontend moderno baseado em React 19, focado em performance, previsibilidade e uma
          experiência de usuário (UX) premium.
        </Text>
      </VStack>

      <section id="features">
        <VStack gap={5}>
          <VStack gap={1}>
            <Title
              variant="h2"
              id="estrutura-features"
              className="text-2xl text-typography-950 dark:text-white"
            >
              Estrutura baseada em Features
            </Title>
            <Text className="text-typography-600 dark:text-typography-400">
              Nossa organização não é por "tipo de arquivo", mas por domínio funcional. Cada módulo
              em <code>web/features/</code> é um domínio autossuficiente.
            </Text>
          </VStack>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <HStack gap={4} align="start">
                <Box className="size-10 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                  <Share2 className="size-5 text-brand-500" strokeWidth={2} />
                </Box>
                <VStack gap={1}>
                  <p className="text-sm font-semibold text-typography-950 dark:text-white">
                    Isolamento
                  </p>
                  <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                    Cada feature contém seus próprios hooks, componentes e chamadas de API.
                  </Text>
                </VStack>
              </HStack>
            </Card>
            <Card>
              <HStack gap={4} align="start">
                <Box className="size-10 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                  <Layers className="size-5 text-brand-500" strokeWidth={2} />
                </Box>
                <VStack gap={1}>
                  <p className="text-sm font-semibold text-typography-950 dark:text-white">
                    Shared
                  </p>
                  <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                    Componentes universais e utilitários globais ficam em <code>web/shared/</code>.
                  </Text>
                </VStack>
              </HStack>
            </Card>
          </div>
        </VStack>
      </section>

      <section id="use-effect">
        <VStack gap={5}>
          <VStack gap={1}>
            <Title
              variant="h2"
              id="banimento-effect"
              className="text-2xl text-typography-950 dark:text-white"
            >
              O Banimento do useEffect
            </Title>
            <Text className="text-typography-600 dark:text-typography-400">
              Em vez de efeitos, utilizamos <strong>Estado Derivado</strong>,{" "}
              <strong>Event Handlers</strong> ou hooks especializados do{" "}
              <strong>TanStack Query</strong>.
            </Text>
          </VStack>
          <Callout variant="warning">
            O uso direto de <code>useEffect</code> é proibido no Catalyst. Efeitos colaterais
            descontrolados são a fonte número 1 de bugs complexos.
          </Callout>
          <div className="space-y-4">
            <HStack
              gap={4}
              className="p-4 bg-background-800/30 dark:bg-background-900/50 border border-outline-100 dark:border-outline-900 rounded-lg"
            >
              <Box className="size-9 rounded-lg bg-error-500/10 flex items-center justify-center shrink-0">
                <Ban className="size-4 text-error-500" strokeWidth={2} />
              </Box>
              <VStack gap={0}>
                <p className="text-sm font-semibold text-typography-950 dark:text-white">
                  Lógica reativa
                </p>
                <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                  Mantenha a lógica dentro do ciclo de renderização através de <code>useMemo</code>{" "}
                  ou variáveis locais.
                </Text>
              </VStack>
            </HStack>
          </div>
        </VStack>
      </section>

      <section id="query">
        <VStack gap={5}>
          <VStack gap={1}>
            <Title
              variant="h2"
              id="server-state"
              className="text-2xl text-typography-950 dark:text-white"
            >
              Estado do Servidor (Query)
            </Title>
            <Text className="text-typography-600 dark:text-typography-400">
              Utilizamos <strong>TanStack Query v5</strong> para gerenciar caches, sincronização e
              estados de carregamento. Isso elimina 90% dos estados locais manuais.
            </Text>
          </VStack>
          <CodeBlock
            language="tsx"
            title="Exemplo de Hook de Feature"
            code={`export function useProdutos() {
  return useQuery({
    queryKey: ['produtos'],
    queryFn: () => api.get('/produtos'),
    staleTime: 1000 * 60 * 5
  });
}`}
          />
        </VStack>
      </section>

      <section id="ui">
        <VStack gap={5}>
          <Title
            variant="h2"
            id="design-system"
            className="text-2xl text-typography-950 dark:text-white"
          >
            Design System &amp; UI
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <VStack gap={3}>
                <Box className="size-10 rounded-lg bg-brand-500/10 flex items-center justify-center">
                  <Palette className="size-5 text-brand-500" strokeWidth={2} />
                </Box>
                <p className="text-sm font-semibold text-typography-950 dark:text-white uppercase tracking-wide">
                  Tailwind CSS
                </p>
                <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                  Estilização via utilitários atômicos e tokens semânticos.
                </Text>
              </VStack>
            </Card>
            <Card>
              <VStack gap={3}>
                <Box className="size-10 rounded-lg bg-brand-500/10 flex items-center justify-center">
                  <Sparkles className="size-5 text-brand-500" strokeWidth={2} />
                </Box>
                <p className="text-sm font-semibold text-typography-950 dark:text-white uppercase tracking-wide">
                  Framer Motion
                </p>
                <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                  Animações fluidas e micro-interações de alta qualidade.
                </Text>
              </VStack>
            </Card>
            <Card>
              <VStack gap={3}>
                <Box className="size-10 rounded-lg bg-brand-500/10 flex items-center justify-center">
                  <Smartphone className="size-5 text-brand-500" strokeWidth={2} />
                </Box>
                <p className="text-sm font-semibold text-typography-950 dark:text-white uppercase tracking-wide">
                  Mobile First
                </p>
                <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                  Responsividade nativa em todos os componentes UI.
                </Text>
              </VStack>
            </Card>
          </div>
        </VStack>
      </section>

      <HStack
        justify="between"
        align="center"
        className="mt-4 p-6 rounded-xl bg-background-50 dark:bg-background-900 border border-outline-100 dark:border-outline-900"
      >
        <HStack gap={3} align="center">
          <Box className="size-9 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
            <ArrowRight className="size-4 text-brand-500" strokeWidth={2} />
          </Box>
          <VStack gap={0}>
            <p className="text-sm font-semibold text-typography-950 dark:text-white">Próximo</p>
            <p className="text-sm text-typography-600 dark:text-typography-400">
              Saiba como gerenciar Migrations e o banco de dados
            </p>
          </VStack>
        </HStack>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="group border-outline-100 dark:border-outline-900 hover:border-brand-500/50"
        >
          <Link to="/docs/banco-de-dados">
            Banco de Dados
            <ArrowRight className="ml-2 size-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </Button>
      </HStack>
    </VStack>
  );
}
