import { Title, Text, Card, Callout, CodeBlock } from "@/components/ui";
import { VStack, Box, HStack } from "@/components/layout/Stack";
import { Layers, Database, ArrowRight, Share2 } from "lucide-react";
import { Button } from "@shadcn/components/button";
import { Link } from "react-router-dom";

export function Component() {
  return (
    <VStack gap={10} className="pb-20">
      <VStack gap={3}>
        <span className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Fundamentos
        </span>
        <Title
          variant="h1"
          id="arquitetura"
          className="text-3xl sm:text-4xl text-typography-950 dark:text-white"
        >
          Arquitetura e <span className="text-brand-500">Padrões</span>
        </Title>
        <Text variant="lg" className="text-typography-600 dark:text-typography-400 max-w-2xl">
          A fundação opinativa do Catalyst, desenhada para manter escalabilidade e manutenibilidade
          do primeiro ao último dia de projeto.
        </Text>
      </VStack>

      <section id="camadas">
        <VStack gap={5}>
          <VStack gap={1}>
            <Title
              variant="h2"
              id="camadas-sistema"
              className="text-2xl text-typography-950 dark:text-white"
            >
              Camadas do Sistema
            </Title>
            <Text className="text-typography-600 dark:text-typography-400">
              Separação rigorosa de interesses: a lógica de negócio nunca se mistura com a
              infraestrutura.
            </Text>
          </VStack>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <VStack gap={1}>
                <p className="text-sm font-semibold text-typography-950 dark:text-white">
                  Controller
                </p>
                <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                  Lógica zero. Recebe request, chama Service e retorna JSON padronizado.
                </Text>
              </VStack>
            </Card>
            <Card>
              <VStack gap={1}>
                <p className="text-sm font-semibold text-typography-950 dark:text-white">Service</p>
                <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                  O coração da aplicação. Atômico, orquestra operações e comunica via objeto
                  Resultado.
                </Text>
              </VStack>
            </Card>
            <Card>
              <VStack gap={1}>
                <p className="text-sm font-semibold text-typography-950 dark:text-white">
                  Repository
                </p>
                <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                  Único ponto de acesso ao banco (Doctrine). Queries complexas ficam encapsuladas
                  aqui.
                </Text>
              </VStack>
            </Card>
            <Card>
              <VStack gap={1}>
                <p className="text-sm font-semibold text-typography-950 dark:text-white">
                  Serializer
                </p>
                <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                  O contrato entre back e front. Define exatamente quais campos saem no JSON final.
                </Text>
              </VStack>
            </Card>
          </div>
        </VStack>
      </section>

      <section id="padrao-resultado">
        <VStack gap={5}>
          <VStack gap={1}>
            <Title
              variant="h2"
              id="resultado"
              className="text-2xl text-typography-950 dark:text-white"
            >
              Padrão Resultado
            </Title>
            <Text className="text-typography-600 dark:text-typography-400">
              Todas as operações de negócio retornam um objeto{" "}
              <code className="text-brand-500 bg-brand-500/10 px-1 rounded text-xs">Resultado</code>
              , eliminando a necessidade de{" "}
              <code className="text-brand-500 bg-brand-500/10 px-1 rounded text-xs">try/catch</code>{" "}
              para erros conhecidos.
            </Text>
          </VStack>
          <Callout variant="tip">
            Evite exceptions para fluxos previsíveis. O objeto Resultado torna o código mais
            previsível e fácil de testar.
          </Callout>
          <CodeBlock
            language="php"
            title="Service Implementation"
            code={`public function executar(UsuarioDTO $dto): Resultado 
{
    if ($this->repo->existe($dto->email)) {
        return Resultado::falha('email_duplicado');
    }

    $usuario = new Usuario($dto->nome, $dto->email);
    $this->repo->salvar($usuario);

    return Resultado::sucesso($usuario);
}`}
          />
        </VStack>
      </section>

      <section id="infraestrutura">
        <VStack gap={5}>
          <VStack gap={1}>
            <Title
              variant="h2"
              id="uuidv7"
              className="text-2xl text-typography-950 dark:text-white"
            >
              Identificadores UUID v7
            </Title>
            <Text className="text-typography-600 dark:text-typography-400">
              Diferente do UUID v4 (aleatório), o UUID v7 é ordenável cronologicamente — alta
              performance em índices, unicidade global e sem expor volume de dados.
            </Text>
          </VStack>
          <HStack
            gap={4}
            className="p-4 bg-background-800/30 dark:bg-background-900/50 border border-outline-100 dark:border-outline-900 rounded-lg"
          >
            <Box className="size-9 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
              <Database className="size-4 text-brand-500" strokeWidth={2} />
            </Box>
            <VStack gap={0}>
              <p className="text-sm font-semibold text-typography-950 dark:text-white">
                Performance em Índices B-Tree
              </p>
              <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                Evita a fragmentação de páginas no MySQL durante inserções em massa.
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </section>

      <section id="pastas">
        <VStack gap={5}>
          <Title
            variant="h2"
            id="estrutura-pastas"
            className="text-2xl text-typography-950 dark:text-white"
          >
            Estrutura de Pastas
          </Title>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <VStack gap={4}>
              <HStack gap={2} className="text-brand-500">
                <Share2 className="size-4" />
                <Text className="font-black text-xs uppercase tracking-widest">Backend (src/)</Text>
              </HStack>
              <div className="text-sm font-mono text-typography-400 bg-background-950 p-6 rounded-lg border border-outline-900">
                <ul className="flex flex-col gap-1">
                  <li>├── Command/</li>
                  <li>├── Controller/</li>
                  <li>├── Entity/</li>
                  <li>├── Repository/</li>
                  <li>├── Service/</li>
                  <li>└── Serializer/</li>
                </ul>
              </div>
            </VStack>
            <VStack gap={4}>
              <HStack gap={2} className="text-brand-500">
                <Layers className="size-4" />
                <Text className="font-black text-xs uppercase tracking-widest">
                  Frontend (web/)
                </Text>
              </HStack>
              <div className="text-sm font-mono text-typography-400 bg-background-950 p-6 rounded-lg border border-outline-900">
                <ul className="flex flex-col gap-1">
                  <li>├── features/ (Módulos)</li>
                  <li>├── shared/ (Reutilizáveis)</li>
                  <li>├── stores/ (Estado global)</li>
                  <li>└── shadcn/ (Componentes UI)</li>
                </ul>
              </div>
            </VStack>
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
              Saiba como protegemos sua aplicação com JWT RS256
            </p>
          </VStack>
        </HStack>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="group border-outline-100 dark:border-outline-900 hover:border-brand-500/50"
        >
          <Link to="/docs/autenticacao">
            Autenticação
            <ArrowRight className="ml-2 size-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </Button>
      </HStack>
    </VStack>
  );
}
