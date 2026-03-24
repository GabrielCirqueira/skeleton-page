import { Title, Text, Badge, Card, Callout, CodeBlock } from "@/components/ui";
import { VStack, Box, HStack } from "@/components/layout/Stack";
import { Layers, Database, ArrowRight, Share2 } from "lucide-react";
import { Button } from "@shadcn/components/button";
import { Link } from "react-router-dom";

export function Component() {
  return (
    <VStack gap={12} className="pb-20">
      <VStack gap={4}>
        <Badge variant="brand">Fundamentos</Badge>
        <Title variant="h1" id="arquitetura" className="text-4xl md:text-5xl text-typography-950">
          Arquitetura e <span className="text-brand-500">Padrões</span>
        </Title>
        <Text variant="lg" className="text-typography-400 max-w-2xl">
          Conheça a fundação opinativa do Catalyst Skeleton, desenhada para manter a escalabilidade
          e a manutenibilidade do primeiro ao último dia do projeto.
        </Text>
      </VStack>

      <section id="camadas">
        <VStack gap={6}>
          <Title variant="h2" id="camadas-sistema" className="text-2xl text-typography-950 pt-8">
            Camadas do Sistema
          </Title>
          <Text className="text-typography-400">
            A arquitetura é baseada em uma separação rigorosa de interesses, garantindo que a lógica
            de negócio nunca se misture com a infraestrutura.
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-brand-500/10 bg-brand-500/[0.02]">
              <Title variant="h4" className="text-typography-950 mb-2">
                Controller
              </Title>
              <Text variant="sm" className="text-typography-400">
                Lógica zero. Único papel: Receber request, chamar Service e retornar JSON
                padronizado.
              </Text>
            </Card>
            <Card className="border-brand-500/10 bg-brand-500/[0.02]">
              <Title variant="h4" className="text-typography-950 mb-2">
                Service
              </Title>
              <Text variant="sm" className="text-typography-400">
                O coração da aplicação. Atômico, orquestra operações de negócio e comunica-se via
                objeto Resultado.
              </Text>
            </Card>
            <Card className="border-brand-500/10 bg-brand-500/[0.02]">
              <Title variant="h4" className="text-typography-950 mb-2">
                Repository
              </Title>
              <Text variant="sm" className="text-typography-400">
                Único ponto de acesso ao banco (Doctrine). Queries complexas ficam encapsuladas
                aqui.
              </Text>
            </Card>
            <Card className="border-brand-500/10 bg-brand-500/[0.02]">
              <Title variant="h4" className="text-typography-950 mb-2">
                Serializer
              </Title>
              <Text variant="sm" className="text-typography-400">
                O contrato entre back e front. Define exatamente quais campos saem no JSON final.
              </Text>
            </Card>
          </div>
        </VStack>
      </section>

      <section id="padrao-resultado">
        <VStack gap={6}>
          <Title variant="h2" id="resultado" className="text-2xl text-typography-950 pt-8">
            Padrão Resultado
          </Title>
          <Callout variant="tip">
            Evite exceptions para fluxos previstos. O objeto Resultado torna o código mais
            previsível e fácil de testar.
          </Callout>
          <Text className="text-typography-400">
            Todas as operações de negócio retornam um objeto `Resultado`. Isso elimina a necessidade
            de `try/catch` para erros conhecidos (como "e-mail já existe").
          </Text>
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
        <VStack gap={6}>
          <Title variant="h2" id="uuidv7" className="text-2xl text-typography-950 pt-8">
            Identificadores UUID v7
          </Title>
          <Text className="text-typography-400">
            Diferente do UUID v4 (aleatório), o **UUID v7** é ordenável cronologicamente. Isso
            garante alta performance em índices de banco de dados, mantendo a unicidade global e
            ocultando o volume real de dados de usuários mal-intencionados.
          </Text>
          <VStack gap={2} className="bg-background-900/50 p-6 rounded-lg border border-outline-900">
            <HStack gap={3}>
              <Database className="size-5 text-brand-500" />
              <Text className="text-typography-950 font-black">Performance em Índices B-Tree</Text>
            </HStack>
            <Text variant="sm" className="text-typography-400">
              Evita a fragmentação de páginas no MySQL durante inserções em massa.
            </Text>
          </VStack>
        </VStack>
      </section>

      <section id="pastas">
        <VStack gap={6}>
          <Title variant="h2" id="estrutura-pastas" className="text-2xl text-typography-950 pt-8">
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

      <Box className="pt-12 mt-12 border-t border-outline-900/50">
        <HStack
          justify="between"
          className="items-center bg-brand-500/[0.03] p-8 rounded-lg border border-brand-500/20"
        >
          <VStack gap={2}>
            <Title variant="h3" className="text-typography-950">
              Segurança de Ponta
            </Title>
            <Text className="text-typography-400">
              Saiba como protegemos sua aplicação com JWT RS256.
            </Text>
          </VStack>
          <Button asChild size="lg" className="group">
            <Link to="/docs/autenticacao">
              Autenticação{" "}
              <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
}
