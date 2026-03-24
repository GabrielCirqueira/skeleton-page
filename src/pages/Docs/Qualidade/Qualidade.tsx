import { Title, Text, Card, Callout, CodeBlock } from "@/components/ui";
import { VStack, Box, HStack } from "@/components/layout/Stack";
import { CheckCircle2, FlaskConical, Search, ArrowRight, GitCommit, Settings } from "lucide-react";
import { Button } from "@shadcn/components/button";
import { Link } from "react-router-dom";

export function Component() {
  return (
    <VStack gap={10} className="pb-20">
      <VStack gap={3}>
        <span className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Confiança
        </span>
        <Title
          variant="h1"
          id="qualidade"
          className="text-3xl sm:text-4xl text-typography-950 dark:text-white"
        >
          Qualidade de <span className="text-brand-500">Engenharia</span>
        </Title>
        <Text variant="lg" className="text-typography-600 dark:text-typography-400 max-w-2xl">
          Nenhum código entra em produção sem passar por uma bateria rigorosa de testes, análise
          estática e validação de padrões.
        </Text>
      </VStack>

      <section id="testes">
        <VStack gap={5}>
          <VStack gap={1}>
            <Title
              variant="h2"
              id="piramide-testes"
              className="text-2xl text-typography-950 dark:text-white"
            >
              Pirâmide de Testes
            </Title>
            <Text className="text-typography-600 dark:text-typography-400">
              Focamos em testes unitários para a lógica de domínio e testes de integração para
              garantir que o banco de dados e a API respondam corretamente.
            </Text>
          </VStack>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <HStack gap={4} align="start">
                <Box className="size-10 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                  <FlaskConical className="size-5 text-brand-500" strokeWidth={2} />
                </Box>
                <VStack gap={1}>
                  <p className="text-sm font-semibold text-typography-950 dark:text-white">
                    Testes Unitários
                  </p>
                  <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                    Testam Services e Value Objects isoladamente sem I/O.
                  </Text>
                </VStack>
              </HStack>
            </Card>
            <Card>
              <HStack gap={4} align="start">
                <Box className="size-10 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="size-5 text-brand-500" strokeWidth={2} />
                </Box>
                <VStack gap={1}>
                  <p className="text-sm font-semibold text-typography-950 dark:text-white">
                    Integração
                  </p>
                  <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                    Validam o contrato da API e a persistência no MySQL.
                  </Text>
                </VStack>
              </HStack>
            </Card>
          </div>
        </VStack>
      </section>

      <section id="static-analysis">
        <VStack gap={5}>
          <VStack gap={1}>
            <Title
              variant="h2"
              id="analise-estatica"
              className="text-2xl text-typography-950 dark:text-white"
            >
              Análise Estática e Linting
            </Title>
            <Text className="text-typography-600 dark:text-typography-400">
              O compilador não é suficiente. Usamos ferramentas que &ldquo;leem&rdquo; o código em
              busca de bugs lógicos e violações de estilo.
            </Text>
          </VStack>
          <div className="space-y-4">
            <HStack
              gap={4}
              className="p-4 bg-background-800/30 dark:bg-background-900/50 border border-outline-100 dark:border-outline-900 rounded-lg"
            >
              <Box className="size-9 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                <Search className="size-4 text-brand-500" strokeWidth={2} />
              </Box>
              <VStack gap={0}>
                <p className="text-sm font-semibold text-typography-950 dark:text-white">
                  PHPStan (Nível 6)
                </p>
                <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                  Garante tipagem correta em todo o backend Symfony.
                </Text>
              </VStack>
            </HStack>
            <HStack
              gap={4}
              className="p-4 bg-background-800/30 dark:bg-background-900/50 border border-outline-100 dark:border-outline-900 rounded-lg"
            >
              <Box className="size-9 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                <Settings className="size-4 text-brand-500" strokeWidth={2} />
              </Box>
              <VStack gap={0}>
                <p className="text-sm font-semibold text-typography-950 dark:text-white">
                  Biome (Frontend)
                </p>
                <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                  Linter e formatter ultra-rápido para React e TypeScript.
                </Text>
              </VStack>
            </HStack>
          </div>
        </VStack>
      </section>

      <section id="commits">
        <VStack gap={5}>
          <Title
            variant="h2"
            id="conventional-commits"
            className="text-2xl text-typography-950 dark:text-white"
          >
            Commitlint &amp; Husky
          </Title>
          <Callout variant="warning">
            O projeto bloqueia commits que não seguem o padrão Conventional Commits (ex:{" "}
            <code>feat(auth): ...</code>).
          </Callout>
          <HStack
            gap={4}
            className="p-4 bg-background-800/30 dark:bg-background-900/50 border border-outline-100 dark:border-outline-900 rounded-lg"
          >
            <Box className="size-9 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
              <GitCommit className="size-4 text-brand-500" strokeWidth={2} />
            </Box>
            <Text variant="sm" className="text-typography-600 dark:text-typography-400">
              Isso garante um histórico de projeto limpo e permite a geração automática de
              Changelogs.
            </Text>
          </HStack>
        </VStack>
      </section>

      <section id="qa-commands">
        <VStack gap={5}>
          <Title
            variant="h2"
            id="comandos-qa"
            className="text-2xl text-typography-950 dark:text-white"
          >
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
              Deploy, Docker e configuração de ambientes
            </p>
          </VStack>
        </HStack>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="group border-outline-100 dark:border-outline-900 hover:border-brand-500/50"
        >
          <Link to="/docs/devops">
            DevOps
            <ArrowRight className="ml-2 size-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </Button>
      </HStack>
    </VStack>
  );
}
