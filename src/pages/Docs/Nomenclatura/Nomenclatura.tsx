import { Title, Text, Card, Callout, CodeBlock } from "@/components/ui";
import { VStack, Box, HStack } from "@/components/layout/Stack";
import { MessageSquareOff, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { Button } from "@shadcn/components/button";
import { Link } from "react-router-dom";

export function Component() {
  return (
    <VStack gap={10} className="pb-20">
      <VStack gap={3}>
        <span className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Cultura
        </span>
        <Title
          variant="h1"
          id="nomenclatura"
          className="text-3xl sm:text-4xl text-typography-950 dark:text-white"
        >
          Dicionário de <span className="text-brand-500">Nomenclatura</span>
        </Title>
        <Text variant="lg" className="text-typography-600 dark:text-typography-400 max-w-2xl">
          A linguagem molda como pensamos. Padrões rígidos de nomenclatura tornam o código uma
          leitura fluída e iquívoca para qualquer desenvolvedor do time.
        </Text>
      </VStack>

      <section id="portugues">
        <VStack gap={5}>
          <VStack gap={1}>
            <Title
              variant="h2"
              id="idioma-projeto"
              className="text-2xl text-typography-950 dark:text-white"
            >
              Tudo em Português
            </Title>
            <Text className="text-typography-600 dark:text-typography-400">
              Pastas, arquivos, variáveis e funções em português. Termos técnicos universais
              (Docker, Symfony, React) permanecem como estão.
            </Text>
          </VStack>
          <Callout variant="info">
            Exceção: Termos técnicos universais (Docker, Symfony, React, Component, Middleware)
            permanecem como estão.
          </Callout>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-error-500/20">
              <HStack gap={4} align="start">
                <Box className="size-10 rounded-lg bg-error-500/10 flex items-center justify-center shrink-0">
                  <XCircle className="size-5 text-error-500" strokeWidth={2} />
                </Box>
                <VStack gap={1}>
                  <p className="text-sm font-semibold text-typography-950 dark:text-white">
                    Incorreto
                  </p>
                  <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                    <code className="text-error-500 bg-error-500/10 px-1 rounded text-xs">
                      getUserInfo()
                    </code>
                    ,{" "}
                    <code className="text-error-500 bg-error-500/10 px-1 rounded text-xs">
                      $data
                    </code>
                    ,{" "}
                    <code className="text-error-500 bg-error-500/10 px-1 rounded text-xs">
                      fetchData()
                    </code>
                  </Text>
                </VStack>
              </HStack>
            </Card>
            <Card className="border-success-500/20">
              <HStack gap={4} align="start">
                <Box className="size-10 rounded-lg bg-success-500/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="size-5 text-success-500" strokeWidth={2} />
                </Box>
                <VStack gap={1}>
                  <p className="text-sm font-semibold text-typography-950 dark:text-white">
                    Correto
                  </p>
                  <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                    <code className="text-success-500 bg-success-500/10 px-1 rounded text-xs">
                      buscarDadosDoUsuario()
                    </code>
                    ,{" "}
                    <code className="text-success-500 bg-success-500/10 px-1 rounded text-xs">
                      $perfilUsuario
                    </code>
                  </Text>
                </VStack>
              </HStack>
            </Card>
          </div>
        </VStack>
      </section>

      <section id="sem-comentarios">
        <VStack gap={5}>
          <VStack gap={1}>
            <Title
              variant="h2"
              id="codigo-limpo"
              className="text-2xl text-typography-950 dark:text-white"
            >
              Zero Comentários
            </Title>
            <Text className="text-typography-600 dark:text-typography-400">
              Comentários mentem. O código não. Se você precisa comentar o que o código faz, o
              código não é claro o suficiente.
            </Text>
          </VStack>
          <HStack
            gap={4}
            className="p-4 bg-background-800/30 dark:bg-background-900/50 border border-outline-100 dark:border-outline-900 rounded-lg"
          >
            <Box className="size-9 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
              <MessageSquareOff className="size-4 text-brand-500" strokeWidth={2} />
            </Box>
            <Text variant="sm" className="text-typography-600 dark:text-typography-400 italic">
              &ldquo;Não comente um código ruim. Reescreva-o.&rdquo; — Brian Kernighan
            </Text>
          </HStack>
        </VStack>
      </section>

      <section id="padroes">
        <VStack gap={5}>
          <Title
            variant="h2"
            id="variaveis-autoexplicativas"
            className="text-2xl text-typography-950 dark:text-white"
          >
            Variáveis Autoexplicativas
          </Title>
          <CodeBlock
            language="php"
            title="Comparativo de Nomenclatura"
            code={`// ❌ Ruim: genérico e confuso
$var = 10;
$dados = $repo->find($id);

$tentativasRestantesDeLogin = 10;
$usuarioEncontrado = $usuarioRepository->buscarPorUuid($uuid);`}
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
            <p className="text-sm font-semibold text-typography-950 dark:text-white">Voltar</p>
            <p className="text-sm text-typography-600 dark:text-typography-400">
              Revisite os fundamentos e o setup inicial
            </p>
          </VStack>
        </HStack>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="group border-outline-100 dark:border-outline-900 hover:border-brand-500/50"
        >
          <Link to="/docs">
            Introdução
            <ArrowRight className="ml-2 size-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </Button>
      </HStack>
    </VStack>
  );
}
