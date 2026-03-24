import { Title, Text, Badge, Card, Callout, CodeBlock } from "@/components/ui";
import { VStack, Box, HStack } from "@/components/layout/Stack";
import { Server, ArrowRight, Shield } from "lucide-react";
import { Button } from "@shadcn/components/button";
import { Link } from "react-router-dom";

export function Component() {
  return (
    <VStack gap={12} className="pb-20">
      <VStack gap={4}>
        <Badge variant="brand">Deploy</Badge>
        <Title variant="h1" id="devops" className="text-4xl md:text-5xl text-typography-950">
          Infraestrutura e <span className="text-brand-500">DevOps</span>
        </Title>
        <Text variant="lg" className="text-typography-400 max-w-2xl">
          Ambiente padronizado via Docker para garantir que o código que roda na sua máquina seja
          exatamente o mesmo que roda em produção.
        </Text>
      </VStack>

      <section id="docker">
        <VStack gap={6}>
          <Title variant="h2" id="docker-compose" className="text-2xl text-typography-950 pt-8">
            Padronização com Docker
          </Title>
          <Text className="text-typography-400">
            O Catalyst utiliza containers isolados para PHP, Servidor Web e Banco de Dados. Isso
            elimina o clássico "na minha máquina funciona".
          </Text>
          <CodeBlock
            language="yaml"
            title="docker-compose.yml"
            code={`services:
  php:
    build: ./docker/php
    volumes:
      - .:/var/www/html
  
  apache:
    image: httpd:2.4-alpine
    ports:
      - "8080:80"`}
          />
        </VStack>
      </section>

      <section id="servidores">
        <VStack gap={6}>
          <Title variant="h2" id="servidor-web" className="text-2xl text-typography-950 pt-8">
            Servidores e Proxies
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-brand-500/10 bg-brand-500/[0.02]">
              <HStack gap={3} className="mb-2">
                <Server className="size-4 text-brand-500" />
                <Title variant="h4" className="text-typography-950 text-base">
                  Apache 2.4
                </Title>
              </HStack>
              <Text variant="sm" className="text-typography-400">
                Configurado para máxima compatibilidade com o Symfony via <code>mod_rewrite</code>.
              </Text>
            </Card>
            <Card className="border-brand-500/10 bg-brand-500/[0.02]">
              <HStack gap={3} className="mb-2">
                <Shield className="size-4 text-brand-500" />
                <Title variant="h4" className="text-typography-950 text-base">
                  Segurança
                </Title>
              </HStack>
              <Text variant="sm" className="text-typography-400">
                Headers de segurança (HSTS, CSP) injetados nativamente na camada de rede.
              </Text>
            </Card>
          </div>
        </VStack>
      </section>

      <section id="cicd">
        <VStack gap={6}>
          <Title variant="h2" id="pipeline-automacao" className="text-2xl text-typography-950 pt-8">
            Continuous Integration (CI)
          </Title>
          <Callout variant="info">
            Todo Pull Request dispara automaticamente a bateria de testes e o linter via GitHub
            Actions ou GitLab CI.
          </Callout>
          <Text className="text-typography-400">
            A automação garante que bugs regressivos nunca cheguem ao branch principal.
          </Text>
          <CodeBlock
            language="yaml"
            title=".github/workflows/ci.yml"
            code={`jobs:
  testes:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Tests
        run: make test`}
          />
        </VStack>
      </section>

      <Box className="pt-12 mt-12 border-t border-outline-900/50">
        <HStack
          justify="between"
          className="items-center bg-brand-500/[0.03] p-8 rounded-lg border border-brand-500/20"
        >
          <VStack gap={2}>
            <Title variant="h3" className="text-typography-950">
              Produtividade CLI
            </Title>
            <Text className="text-typography-400">
              Comandos Makefile para acelerar seu desenvolvimento.
            </Text>
          </VStack>
          <Button asChild size="lg" className="group">
            <Link to="/docs/makefile">
              Makefile{" "}
              <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
}
