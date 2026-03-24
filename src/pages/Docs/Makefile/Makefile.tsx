import { Title, Text, Badge, Card, Callout, CodeBlock } from "@/components/ui";
import { VStack, Box, HStack } from "@/components/layout/Stack";
import { Terminal, Lightbulb, Zap, ArrowRight } from "lucide-react";
import { Button } from "@shadcn/components/button";
import { Link } from "react-router-dom";

export function Component() {
  return (
    <VStack gap={12} className="pb-20">
      <VStack gap={4}>
        <Badge variant="brand">Produtividade</Badge>
        <Title variant="h1" id="makefile" className="text-4xl md:text-5xl text-typography-950">
          A Magia do <span className="text-brand-500">Makefile</span>
        </Title>
        <Text variant="lg" className="text-typography-400 max-w-2xl">
          Acelere seu fluxo de trabalho com comandos curtos que orquestram Docker, Symfony,
          Migrations e limpeza de cache.
        </Text>
      </VStack>

      <section id="why">
        <VStack gap={6}>
          <Title
            variant="h2"
            id="produtividade-terminal"
            className="text-2xl text-typography-950 pt-8"
          >
            Por que usar Makefile?
          </Title>
          <Text className="text-typography-400">
            Digitar comandos longos do Docker ou bin/console é propenso a erros. O Makefile
            centraliza a inteligência do projeto em comandos simples de memorizar.
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-brand-500/10 bg-brand-500/[0.02]">
              <HStack gap={3} className="mb-2">
                <Zap className="size-4 text-brand-500" />
                <Title variant="h4" className="text-typography-950 text-base">
                  Velocidade
                </Title>
              </HStack>
              <Text variant="sm" className="text-typography-400">
                <code>make up</code> é muito mais rápido que <code>docker compose up -d</code>.
              </Text>
            </Card>
            <Card className="border-brand-500/10 bg-brand-500/[0.02]">
              <HStack gap={3} className="mb-2">
                <Lightbulb className="size-4 text-brand-500" />
                <Title variant="h4" className="text-typography-950 text-base">
                  Padronização
                </Title>
              </HStack>
              <Text variant="sm" className="text-typography-400">
                Todo novo desenvolvedor roda os mesmos comandos para iniciar o projeto.
              </Text>
            </Card>
          </div>
        </VStack>
      </section>

      <section id="commands">
        <VStack gap={6}>
          <Title
            variant="h2"
            id="comandos-essenciais"
            className="text-2xl text-typography-950 pt-8"
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
        <VStack gap={6}>
          <Title variant="h2" id="gestao-logs" className="text-2xl text-typography-950 pt-8">
            Logs e Monitoramento
          </Title>
          <Callout variant="tip">
            Use <code>make logs</code> para acompanhar tudo o que acontece no servidor em tempo real
            (Tail -f).
          </Callout>
          <HStack gap={4} className="p-4 bg-background-950 border border-outline-900 rounded-lg">
            <Terminal className="size-5 text-brand-500 shrink-0" />
            <Text className="text-typography-400 text-sm">
              O comando <code>make bash</code> te coloca dentro do container PHP já no diretório
              correto.
            </Text>
          </HStack>
        </VStack>
      </section>

      <Box className="pt-12 mt-12 border-t border-outline-900/50">
        <HStack
          justify="between"
          className="items-center bg-brand-500/[0.03] p-8 rounded-lg border border-brand-500/20"
        >
          <VStack gap={2}>
            <Title variant="h3" className="text-typography-950">
              Dicionário de Nomenclatura
            </Title>
            <Text className="text-typography-400">
              Padronização de nomes e termos técnicos em português.
            </Text>
          </VStack>
          <Button asChild size="lg" className="group">
            <Link to="/docs/nomenclatura">
              Nomenclatura{" "}
              <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
}
