import { Title, Text, Card, Callout, CodeBlock } from "@/components/ui";
import { VStack, Box, HStack } from "@/components/layout/Stack";
import { Hash, ListOrdered, ArrowRight } from "lucide-react";
import { Button } from "@shadcn/components/button";
import { Link } from "react-router-dom";

export function Component() {
  return (
    <VStack gap={10} className="pb-20">
      <VStack gap={3}>
        <span className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Persistência
        </span>
        <Title
          variant="h1"
          id="banco-de-dados"
          className="text-3xl sm:text-4xl text-typography-950 dark:text-white"
        >
          Banco de Dados e <span className="text-brand-500">Doctrine</span>
        </Title>
        <Text variant="lg" className="text-typography-600 dark:text-typography-400 max-w-2xl">
          MySQL 8.3 com Doctrine ORM 3.x, configurado para alta performance e integridade de dados
          absoluta desde o schema até a paginação.
        </Text>
      </VStack>

      <section id="uuid">
        <VStack gap={6}>
          <Title variant="h2" id="id-uuidv7" className="text-2xl text-typography-950">
            UUID v7 como Chave Primária
          </Title>
          <Text className="text-typography-400">
            Diferente dos tradicionais IDs incrementais ou UUID v4, o **UUID v7** é ordenado pelo
            tempo. Isso previne a fragmentação de índices e permite que os registros sejam ordenados
            cronologicamente pela própria chave primária.
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-brand-500/10 bg-brand-500/[0.02]">
              <HStack gap={3} className="mb-2">
                <Hash className="size-4 text-brand-500" />
                <Title variant="h4" className="text-typography-950 text-base">
                  Segurança
                </Title>
              </HStack>
              <Text variant="sm" className="text-typography-400">
                Impede que competidores ou robôs descubram o volume real de dados via scraping.
              </Text>
            </Card>
            <Card className="border-brand-500/10 bg-brand-500/[0.02]">
              <HStack gap={3} className="mb-2">
                <ListOrdered className="size-4 text-brand-500" />
                <Title variant="h4" className="text-typography-950 text-base">
                  Ordenação
                </Title>
              </HStack>
              <Text variant="sm" className="text-typography-400">
                Nativamente ordenável por carimbo de data/hora (timestamp).
              </Text>
            </Card>
          </div>
        </VStack>
      </section>

      <section id="migrations">
        <VStack gap={5}>
          <VStack gap={1}>
            <Title
              variant="h2"
              id="versionamento-schema"
              className="text-2xl text-typography-950 dark:text-white"
            >
              Doctrine Migrations
            </Title>
            <Text className="text-typography-600 dark:text-typography-400">
              Nunca altere o banco manualmente. Todo o schema é versionado, garantindo que todos os
              ambientes estejam sempre sincronizados.
            </Text>
          </VStack>
          <CodeBlock
            language="bash"
            title="Workflow de Migrations"
            code={`# 1. Alterar a Entity PHP
# 2. Gerar o diff automático
make new-migration

# 3. Aplicar as mudanças
make migrate`}
          />
        </VStack>
      </section>

      <section id="paginacao">
        <VStack gap={5}>
          <VStack gap={1}>
            <Title
              variant="h2"
              id="padrao-paginacao"
              className="text-2xl text-typography-950 dark:text-white"
            >
              Padrão de Paginação
            </Title>
            <Text className="text-typography-600 dark:text-typography-400">
              Todo endpoint que retorna lista deve ser paginado para evitar overhead de memória e
              rede.
            </Text>
          </VStack>
          <Callout variant="tip">
            O Catalyst impõe um contrato unificado: o frontend espera metadados como{" "}
            <code className="text-brand-500 bg-brand-500/10 px-1 rounded text-xs">total</code>,{" "}
            <code className="text-brand-500 bg-brand-500/10 px-1 rounded text-xs">pagina</code> e{" "}
            <code className="text-brand-500 bg-brand-500/10 px-1 rounded text-xs">
              totalPaginas
            </code>
            .
          </Callout>
          <CodeBlock
            language="php"
            title="Repository Implementation"
            code={`public function buscarPaginado(int $pagina, int $porPagina): array
{
    $qb = $this->createQueryBuilder('p')
        ->setFirstResult(($pagina - 1) * $porPagina)
        ->setMaxResults($porPagina);

    $paginator = new Paginator($qb->getQuery());

    return [
        'itens' => iterator_to_array($paginator),
        'total' => count($paginator)
    ];
}`}
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
              Processamento assíncrono com Symfony Messenger
            </p>
          </VStack>
        </HStack>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="group border-outline-100 dark:border-outline-900 hover:border-brand-500/50"
        >
          <Link to="/docs/mensageria">
            Mensageria
            <ArrowRight className="ml-2 size-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </Button>
      </HStack>
    </VStack>
  );
}
