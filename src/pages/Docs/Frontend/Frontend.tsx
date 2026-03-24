import { Title, Text, Badge, Card, Callout, CodeBlock } from "@/components/ui";
import { VStack, Box, HStack } from "@/components/layout/Stack";
import { Ban, Share2, Palette, ArrowRight, Layers, Smartphone, Sparkles } from "lucide-react";
import { Button } from "@shadcn/components/button";
import { Link } from "react-router-dom";

export function Component() {
  return (
    <VStack gap={12} className="pb-20">
      <VStack gap={4}>
        <Badge variant="brand">Experiência</Badge>
        <Title variant="h1" id="frontend" className="text-4xl md:text-5xl text-typography-950">
          Arquitetura de <span className="text-brand-500">Frontend</span>
        </Title>
        <Text variant="lg" className="text-typography-400 max-w-2xl">
          Frontend moderno baseado em React 19, focado em performance, previsibilidade e uma
          experiência de usuário (UX) premium.
        </Text>
      </VStack>

      <section id="features">
        <VStack gap={6}>
          <Title variant="h2" id="estrutura-features" className="text-2xl text-typography-950 pt-8">
            Estrutura baseada em Features
          </Title>
          <Text className="text-typography-400">
            Nossa organização não é por "tipo de arquivo", mas por domínio funcional. Cada módulo em{" "}
            <code>web/features/</code> é um domínio autossuficiente.
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-brand-500/10 bg-brand-500/[0.02]">
              <HStack gap={3} className="mb-2">
                <Share2 className="size-4 text-brand-500" />
                <Title variant="h4" className="text-typography-950 text-base">
                  Isolamento
                </Title>
              </HStack>
              <Text variant="sm" className="text-typography-400">
                Cada feature contém seus próprios hooks, componentes e chamadas de API.
              </Text>
            </Card>
            <Card className="border-brand-500/10 bg-brand-500/[0.02]">
              <HStack gap={3} className="mb-2">
                <Layers className="size-4 text-brand-500" />
                <Title variant="h4" className="text-typography-950 text-base">
                  Shared
                </Title>
              </HStack>
              <Text variant="sm" className="text-typography-400">
                Componentes universais e utilitários globais ficam em <code>web/shared/</code>.
              </Text>
            </Card>
          </div>
        </VStack>
      </section>

      <section id="use-effect">
        <VStack gap={6}>
          <Title variant="h2" id="banimento-effect" className="text-2xl text-typography-950 pt-8">
            O Banimento do useEffect
          </Title>
          <Callout variant="warning">
            O uso direto de <code>useEffect</code> é proibido no Catalyst. Efeitos colaterais
            descontrolados são a fonte número 1 de bugs complexos.
          </Callout>
          <Text className="text-typography-400">
            Em vez de efeitos, utilizamos <strong>Estado Derivado</strong>,{" "}
            <strong>Event Handlers</strong> ou hooks especializados do{" "}
            <strong>TanStack Query</strong>.
          </Text>
          <div className="space-y-4">
            <HStack
              gap={4}
              className="p-4 bg-background-900/30 border border-outline-900 rounded-lg"
            >
              <Ban className="size-5 text-red-500 shrink-0" />
              <VStack gap={1}>
                <Text className="text-typography-950 font-black">Lógica reativa</Text>
                <Text variant="sm" className="text-typography-400">
                  Mantenha a lógica dentro do ciclo de renderização através de <code>useMemo</code>{" "}
                  ou variáveis locais.
                </Text>
              </VStack>
            </HStack>
          </div>
        </VStack>
      </section>

      <section id="query">
        <VStack gap={6}>
          <Title variant="h2" id="server-state" className="text-2xl text-typography-950 pt-8">
            Estado do Servidor (Query)
          </Title>
          <Text className="text-typography-400">
            Utilizamos <strong>TanStack Query v5</strong> para gerenciar caches, sincronização e
            estados de carregamento. Isso elimina 90% dos estados locais manuais.
          </Text>
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
        <VStack gap={6}>
          <Title variant="h2" id="design-system" className="text-2xl text-typography-950 pt-8">
            Design System & UI
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-brand-500/10 bg-brand-500/[0.02]">
              <VStack gap={3}>
                <Palette className="size-5 text-brand-500" />
                <Title variant="h4" className="text-typography-950 text-sm uppercase">
                  Tailwind CSS
                </Title>
                <Text variant="sm" className="text-typography-400">
                  Estilização via utilitários atômicos e tokens semânticos.
                </Text>
              </VStack>
            </Card>
            <Card className="border-brand-500/10 bg-brand-500/[0.02]">
              <VStack gap={3}>
                <Sparkles className="size-5 text-brand-500" />
                <Title variant="h4" className="text-typography-950 text-sm uppercase">
                  Framer Motion
                </Title>
                <Text variant="sm" className="text-typography-400">
                  Animações fluidas e micro-interações de alta qualidade.
                </Text>
              </VStack>
            </Card>
            <Card className="border-brand-500/10 bg-brand-500/[0.02]">
              <VStack gap={3}>
                <Smartphone className="size-5 text-brand-500" />
                <Title variant="h4" className="text-typography-950 text-sm uppercase">
                  Mobile First
                </Title>
                <Text variant="sm" className="text-typography-400">
                  Responsividade nativa em todos os componentes UI.
                </Text>
              </VStack>
            </Card>
          </div>
        </VStack>
      </section>

      <Box className="pt-12 mt-12 border-t border-outline-900/50">
        <HStack
          justify="between"
          className="items-center bg-brand-500/[0.03] p-8 rounded-lg border border-brand-500/20"
        >
          <VStack gap={2}>
            <Title variant="h3" className="text-typography-950">
              Persistência de Dados
            </Title>
            <Text className="text-typography-400">
              Saiba como gerenciar Migrations e o banco de dados.
            </Text>
          </VStack>
          <Button asChild size="lg" className="group">
            <Link to="/docs/banco-de-dados">
              Banco de Dados{" "}
              <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
}
