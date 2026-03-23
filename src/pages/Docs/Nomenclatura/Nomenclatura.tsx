import { Title, Text, Badge, Card, Callout, CodeBlock } from "@/components/ui";
import { VStack, Box, HStack } from "@/components/layout/Stack";
import { MessageSquareOff, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { Button } from "@shadcn/components/button";
import { Link } from "react-router-dom";

export function Component() {
  return (
    <VStack gap={12} className="pb-20">
      <VStack gap={4}>
        <Badge variant="brand">Cultura</Badge>
        <Title variant="h1" id="nomenclatura" className="text-4xl md:text-5xl text-typography-950">
          Dicionário de <span className="text-brand-500">Nomenclatura</span>
        </Title>
        <Text variant="lg" className="text-typography-400 max-w-2xl">
          A linguagem molda como pensamos. No Catalyst, seguimos padrões rígidos para que o código
          seja uma leitura fluida e inequívoca.
        </Text>
      </VStack>

      {/* Tudo em Português */}
      <section id="portugues">
        <VStack gap={6}>
          <Title variant="h2" id="idioma-projeto" className="text-2xl text-typography-950 pt-8">
            Tudo em Português
          </Title>
          <Text className="text-typography-400">
            Para evitar a "mistura" mental de idiomas e garantir clareza nas regras de negócio
            nacionais, <strong>pastas, arquivos, variáveis e funções devem ser em português</strong>
            .
          </Text>
          <Callout variant="info">
            Exceção: Termos técnicos universais (Docker, Symfony, React, Component, Middleware)
            permanecem como estão.
          </Callout>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-red-500/10 bg-red-500/[0.02]">
              <HStack gap={3} className="mb-2">
                <XCircle className="size-4 text-red-500" />
                <Title variant="h4" className="text-typography-950 text-base">
                  Incorreto
                </Title>
              </HStack>
              <Text variant="sm" className="text-typography-400">
                <code>getUserInfo()</code>, <code>$data</code>, <code>fetchData()</code>
              </Text>
            </Card>
            <Card className="border-green-500/10 bg-green-500/[0.02]">
              <HStack gap={3} className="mb-2">
                <CheckCircle2 className="size-4 text-green-500" />
                <Title variant="h4" className="text-typography-950 text-base">
                  Correto
                </Title>
              </HStack>
              <Text variant="sm" className="text-typography-400">
                <code>buscarDadosDoUsuario()</code>, <code>$perfilUsuario</code>,{" "}
                <code>processarRelatorio()</code>
              </Text>
            </Card>
          </div>
        </VStack>
      </section>

      {/* Zero Comentários */}
      <section id="sem-comentarios">
        <VStack gap={6}>
          <Title variant="h2" id="codigo-limpo" className="text-2xl text-typography-950 pt-8">
            Zero Comentários
          </Title>
          <Text className="text-typography-400">
            Comentários mentem. O código não. Se você precisa comentar o que o código faz, o código
            não é claro o suficiente.
          </Text>
          <HStack gap={4} className="p-4 bg-background-950 border border-outline-900 rounded-xl">
            <MessageSquareOff className="size-5 text-brand-500 shrink-0" />
            <Text className="text-typography-400 text-sm italic">
              "Não comente um código ruim. Reescreva-o." — Brian Kernighan
            </Text>
          </HStack>
        </VStack>
      </section>

      {/* Padrões de Variáveis */}
      <section id="padroes">
        <VStack gap={6}>
          <Title
            variant="h2"
            id="variaveis-autoexplicativas"
            className="text-2xl text-typography-950 pt-8"
          >
            Variáveis Autoexplicativas
          </Title>
          <CodeBlock
            language="php"
            title="Comparativo de Nomenclatura"
            code={`// ❌ Ruim: genérico e confuso
$var = 10;
$dados = $repo->find($id);

// ✅ Bom: descritivo
$tentativasRestantesDeLogin = 10;
$usuarioEncontrado = $usuarioRepository->buscarPorUuid($uuid);`}
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
            <Title variant="h3" className="text-typography-950">
              Voltar ao Início
            </Title>
            <Text className="text-typography-400">Revisite os fundamentos e o setup inicial.</Text>
          </VStack>
          <Button asChild size="lg" className="group">
            <Link to="/docs/introducao">
              Introdução{" "}
              <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
}
