import { Title, Text, Card, Callout, CodeBlock } from "@/components/ui";
import { VStack, Box, HStack } from "@/components/layout/Stack";
import { Server, Shield, GitMerge, ArrowRight } from "lucide-react";
import { Button } from "@shadcn/components/button";
import { Link } from "react-router-dom";

export function Component() {
  return (
    <VStack gap={10} className="pb-20">
      <VStack gap={3}>
        <span className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Infra & QA
        </span>
        <Title
          variant="h1"
          id="devops"
          className="text-3xl sm:text-4xl text-typography-950 dark:text-white"
        >
          Infraestrutura e <span className="text-brand-500">DevOps</span>
        </Title>
        <Text variant="lg" className="text-typography-600 dark:text-typography-400 max-w-2xl">
          Ambiente padronizado via Docker para garantir paridade total entre desenvolvimento e
          produção — sem o clássico &ldquo;na minha máquina funciona&rdquo;.
        </Text>
      </VStack>

      <section id="docker">
        <VStack gap={5}>
          <VStack gap={1}>
            <Title
              variant="h2"
              id="docker-compose"
              className="text-2xl text-typography-950 dark:text-white"
            >
              Padronização com Docker
            </Title>
            <Text className="text-typography-600 dark:text-typography-400">
              Containers isolados para PHP, servidor web e banco de dados. Um único comando
              provisiona o ambiente completo.
            </Text>
          </VStack>
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
      - "8080:80"

  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: catalyst
      POSTGRES_USER: \${DB_USER}
      POSTGRES_PASSWORD: \${DB_PASSWORD}`}
          />
        </VStack>
      </section>

      <section id="servidores">
        <VStack gap={5}>
          <Title
            variant="h2"
            id="servidor-web"
            className="text-2xl text-typography-950 dark:text-white"
          >
            Servidores e Segurança
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-outline-100 dark:border-outline-900 bg-white dark:bg-background-900 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30">
              <HStack gap={4} className="p-6">
                <Box className="size-10 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                  <Server className="size-5 text-brand-500" strokeWidth={2} />
                </Box>
                <VStack gap={1}>
                  <p className="text-sm font-semibold text-typography-950 dark:text-white">
                    Apache 2.4
                  </p>
                  <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                    Configurado para máxima compatibilidade com Symfony via{" "}
                    <code className="text-brand-500 bg-brand-500/10 px-1 rounded text-xs">
                      mod_rewrite
                    </code>
                    .
                  </Text>
                </VStack>
              </HStack>
            </Card>
            <Card className="border-outline-100 dark:border-outline-900 bg-white dark:bg-background-900 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30">
              <HStack gap={4} className="p-6">
                <Box className="size-10 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                  <Shield className="size-5 text-brand-500" strokeWidth={2} />
                </Box>
                <VStack gap={1}>
                  <p className="text-sm font-semibold text-typography-950 dark:text-white">
                    Headers de Segurança
                  </p>
                  <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                    HSTS, CSP e X-Frame-Options injetados nativamente na camada de rede.
                  </Text>
                </VStack>
              </HStack>
            </Card>
          </div>
        </VStack>
      </section>

      <section id="cicd">
        <VStack gap={5}>
          <VStack gap={1}>
            <Title
              variant="h2"
              id="pipeline-automacao"
              className="text-2xl text-typography-950 dark:text-white"
            >
              Continuous Integration
            </Title>
            <Text className="text-typography-600 dark:text-typography-400">
              Todo Pull Request dispara a bateria de testes e o linter automaticamente, impedindo
              que regressões cheguem ao branch principal.
            </Text>
          </VStack>
          <Callout variant="info">
            Compatível com <strong>GitHub Actions</strong> e <strong>GitLab CI</strong> — basta
            copiar o arquivo de workflow para o repositório.
          </Callout>
          <CodeBlock
            language="yaml"
            title=".github/workflows/ci.yml"
            code={`jobs:
  testes:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Instalar dependências
        run: make install

      - name: Executar testes
        run: make test

      - name: Verificar lint
        run: make lint`}
          />
        </VStack>
      </section>

      <HStack
        justify="between"
        align="center"
        className="mt-4 p-6 rounded-xl bg-background-50 dark:bg-background-900 border border-outline-100 dark:border-outline-900"
      >
        <HStack gap={3} align="center">
          <Box className="size-9 rounded-lg bg-brand-500/10 flex items-center justify-center">
            <GitMerge className="size-4 text-brand-500" strokeWidth={2} />
          </Box>
          <VStack gap={0}>
            <p className="text-sm font-semibold text-typography-950 dark:text-white">Próximo</p>
            <p className="text-sm text-typography-600 dark:text-typography-400">
              Comandos Makefile para produtividade
            </p>
          </VStack>
        </HStack>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="group border-outline-100 dark:border-outline-900 hover:border-brand-500/50"
        >
          <Link to="/docs/makefile">
            Makefile
            <ArrowRight className="ml-2 size-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </Button>
      </HStack>
    </VStack>
  );
}
