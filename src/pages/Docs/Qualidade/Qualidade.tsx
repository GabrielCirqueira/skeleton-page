import { Title, Text, Badge, Card, Callout, CodeBlock } from "@/components/ui";
import { VStack, Box, HStack } from "@/components/layout/Stack";
import { CheckCircle2, FlaskConical, Search, ArrowRight, GitCommit, Settings } from "lucide-react";
import { Button } from "@shadcn/components/button";
import { Link } from "react-router-dom";

export function Component() {
  return (
    <VStack gap={12} className="pb-20">
      <VStack gap={4}>
        <Badge variant="brand">Confiança</Badge>
        <Title variant="h1" id="qualidade" className="text-4xl md:text-5xl text-white">
          Qualidade de <span className="text-brand-500">Engenharia</span>
        </Title>
        <Text variant="lg" className="text-typography-400 max-w-2xl">
          Nenhum código entra em produção sem passar por uma bateria rigorosa de testes, análise
          estática e validação de padrões.
        </Text>
      </VStack>

      {/* Pirâmide de Testes */}
      <section id="testes">
        <VStack gap={6}>
          <Title variant="h2" id="piramide-testes" className="text-2xl text-white pt-8">
            Pirâmide de Testes
          </Title>
          <Text className="text-typography-400">
            Focamos em testes unitários para a lógica de domínio e testes de integração para
            garantir que o banco de dados e a API respondam corretamente.
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-brand-500/10 bg-brand-500/[0.02]">
              <HStack gap={3} className="mb-2">
                <FlaskConical className="size-4 text-brand-500" />
                <Title variant="h4" className="text-white text-base">
                  Testes Unitários
                </Title>
              </HStack>
              <Text variant="sm" className="text-typography-400">
                Testam Services e Value Objects isoladamente sem I/O.
              </Text>
            </Card>
            <Card className="border-brand-500/10 bg-brand-500/[0.02]">
              <HStack gap={3} className="mb-2">
                <CheckCircle2 className="size-4 text-brand-500" />
                <Title variant="h4" className="text-white text-base">
                  Integração
                </Title>
              </HStack>
              <Text variant="sm" className="text-typography-400">
                Validam o contrato da API e a persistência no MySQL.
              </Text>
            </Card>
          </div>
        </VStack>
      </section>

      {/* Análise Estática */}
      <section id="static-analysis">
        <VStack gap={6}>
          <Title variant="h2" id="analise-estatica" className="text-2xl text-white pt-8">
            Análise Estática e Linting
          </Title>
          <Text className="text-typography-400">
            O compilador não é suficiente. Usamos ferramentas que "leem" o código em busca de bugs
            lógicos e violações de estilo.
          </Text>
          <div className="space-y-4">
            <HStack
              gap={4}
              className="p-4 bg-background-900/30 border border-outline-900 rounded-xl"
            >
              <Search className="size-5 text-brand-500 shrink-0" />
              <VStack gap={1}>
                <Text className="text-white font-black">PHPStan (Nível 6)</Text>
                <Text variant="sm" className="text-typography-400">
                  Garante tipagem correta em todo o backend Symfony.
                </Text>
              </VStack>
            </HStack>
            <HStack
              gap={4}
              className="p-4 bg-background-900/30 border border-outline-900 rounded-xl"
            >
              <Settings className="size-5 text-brand-500 shrink-0" />
              <VStack gap={1}>
                <Text className="text-white font-black">Biome (Frontend)</Text>
                <Text variant="sm" className="text-typography-400">
                  Linter e formatter ultra-rápido para React e TypeScript.
                </Text>
              </VStack>
            </HStack>
          </div>
        </VStack>
      </section>

      {/* Git Hooks */}
      <section id="commits">
        <VStack gap={6}>
          <Title variant="h2" id="conventional-commits" className="text-2xl text-white pt-8">
            Commitlint & Husky
          </Title>
          <Callout variant="warning">
            O projeto bloqueia commits que não seguem o padrão Conventional Commits (ex:{" "}
            <code>feat(auth): ...</code>).
          </Callout>
          <HStack gap={4} className="p-4 bg-background-950 border border-outline-900 rounded-xl">
            <GitCommit className="size-5 text-brand-500 shrink-0" />
            <Text className="text-typography-400 text-sm">
              Isso garante um histórico de projeto limpo e permite a geração automática de
              Changelogs.
            </Text>
          </HStack>
        </VStack>
      </section>

      {/* Comandos de QA */}
      <section id="qa-commands">
        <VStack gap={6}>
          <Title variant="h2" id="comandos-qa" className="text-2xl text-white pt-8">
            Bateria de QA
          </Title>
          <CodeBlock
            language="bash"
            title="Terminal"
            code={`# Executa todos os testes
make test

# Roda análise estática no backend
make phpstan

# Roda lint e formatação no frontend
make lint-all`}
          />
        </VStack>
      </section>

      {/* Próximos Passos */}
      <Box className="pt-12 mt-12 border-t border-outline-900/50">
        <HStack
          justify="between"
          className="items-center bg-brand-500/[0.03] p-8 rounded-3xl border border-brand-500/20"
        >
          <VStack gap={2}>
            <Title variant="h3" className="text-white">
              Infraestrutura e DevOps
            </Title>
            <Text className="text-typography-400">Deploy, Docker e configuração de ambientes.</Text>
          </VStack>
          <Button asChild size="lg" className="group">
            <Link to="/docs/devops">
              DevOps{" "}
              <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
}
