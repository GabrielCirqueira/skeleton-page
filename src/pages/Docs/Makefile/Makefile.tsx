import { Title, Text, Card, Callout, CodeBlock } from "@/components/ui";
import { VStack, Box, HStack } from "@/components/layout/Stack";
import { Terminal, Lightbulb, Zap, ArrowRight } from "lucide-react";
import { Button } from "@shadcn/components/button";
import { Link } from "react-router-dom";

export function Component() {
  return (
    <VStack gap={10} className="pb-20">
      <VStack gap={3}>
        <span className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Produtividade
        </span>
        <Title
          variant="h1"
          id="makefile"
          className="text-3xl sm:text-4xl text-typography-950 dark:text-white"
        >
          A Magia do <span className="text-brand-500">Makefile</span>
        </Title>
        <Text variant="lg" className="text-typography-600 dark:text-typography-400 max-w-2xl">
          Acelere seu fluxo de trabalho com comandos curtos que orquestram Docker, Symfony,
          Migrations e limpeza de cache.
        </Text>
      </VStack>

      <section id="why">
        <VStack gap={5}>
          <VStack gap={1}>
            <Title
              variant="h2"
              id="produtividade-terminal"
              className="text-2xl text-typography-950 dark:text-white"
            >
              Por que usar Makefile?
            </Title>
            <Text className="text-typography-600 dark:text-typography-400">
              Digitar comandos longos do Docker ou bin/console é propenso a erros. O Makefile
              centraliza a inteligência do projeto em comandos simples de memorizar.
            </Text>
          </VStack>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <HStack gap={4} align="start">
                <Box className="size-10 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                  <Zap className="size-5 text-brand-500" strokeWidth={2} />
                </Box>
                <VStack gap={1}>
                  <p className="text-sm font-semibold text-typography-950 dark:text-white">
                    Velocidade
                  </p>
                  <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                    <code>make up</code> é muito mais rápido que <code>docker compose up -d</code>.
                  </Text>
                </VStack>
              </HStack>
            </Card>
            <Card>
              <HStack gap={4} align="start">
                <Box className="size-10 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                  <Lightbulb className="size-5 text-brand-500" strokeWidth={2} />
                </Box>
                <VStack gap={1}>
                  <p className="text-sm font-semibold text-typography-950 dark:text-white">
                    Padronização
                  </p>
                  <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                    Todo novo desenvolvedor roda os mesmos comandos para iniciar o projeto.
                  </Text>
                </VStack>
              </HStack>
            </Card>
          </div>
        </VStack>
      </section>

      <section id="commands">
        <VStack gap={5}>
          <Title
            variant="h2"
            id="comandos-essenciais"
            className="text-2xl text-typography-950 dark:text-white"
          >
            Comandos Essenciais
          </Title>
          <div className="space-y-4">
            <CodeBlock
              language="bash"
              title="Gestão de Ambiente"
              code={`make up      # Sobe os containers
make down    # Para tudo
make restart # Reinicia o ambiente`}
            />
            <CodeBlock
              language="bash"
              title="Desenvolvimento"
              code={`make console # Atalho para bin/console
make migrate # Aplica migrations pendentes
make cc      # Limpa o cache do Symfony`}
            />
          </div>
        </VStack>
      </section>

      <section id="logs">
        <VStack gap={5}>
          <Title
            variant="h2"
            id="gestao-logs"
            className="text-2xl text-typography-950 dark:text-white"
          >
            Logs e Monitoramento
          </Title>
          <Callout variant="tip">
            Use <code>make logs</code> para acompanhar tudo o que acontece no servidor em tempo real
            (Tail -f).
          </Callout>
          <HStack
            gap={4}
            className="p-4 bg-background-800/30 dark:bg-background-900/50 border border-outline-100 dark:border-outline-900 rounded-lg"
          >
            <Box className="size-9 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
              <Terminal className="size-4 text-brand-500" strokeWidth={2} />
            </Box>
            <Text variant="sm" className="text-typography-600 dark:text-typography-400">
              O comando <code>make bash</code> te coloca dentro do container PHP já no diretório
              correto.
            </Text>
          </HStack>
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
              Padronização de nomes e termos técnicos em português
            </p>
          </VStack>
        </HStack>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="group border-outline-100 dark:border-outline-900 hover:border-brand-500/50"
        >
          <Link to="/docs/nomenclatura">
            Nomenclatura
            <ArrowRight className="ml-2 size-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </Button>
      </HStack>
    </VStack>
  );
}
