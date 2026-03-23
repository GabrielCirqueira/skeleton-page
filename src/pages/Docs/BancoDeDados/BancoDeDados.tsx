import { Title, Text, Badge, Card, Callout, CodeBlock } from "@/components/ui";
import { VStack, Box, HStack } from "@/components/layout/Stack";
import { Hash, ListOrdered, ArrowRight } from "lucide-react";
import { Button } from "@shadcn/components/button";
import { Link } from "react-router-dom";

export function Component() {
  return (
    <VStack gap={12} className="pb-20">
      <VStack gap={4}>
        <Badge variant="brand">Persistência</Badge>
        <Title
          variant="h1"
          id="banco-de-dados"
          className="text-4xl md:text-5xl text-typography-950"
        >
          Banco de Dados e <span className="text-brand-500">Doctrine</span>
        </Title>
        <Text variant="lg" className="text-typography-400 max-w-2xl">
          Utilizamos MySQL 8.3 com Doctrine ORM 3.x, configurado para alta performance e integridade
          de dados absoluta.
        </Text>
      </VStack>

      {/* UUID v7 */}
      <section id="uuid">
        <VStack gap={6}>
          <Title variant="h2" id="id-uuidv7" className="text-2xl text-typography-950 pt-8">
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

      {/* Doctrine Migrations */}
      <section id="migrations">
        <VStack gap={6}>
          <Title
            variant="h2"
            id="versionamento-schema"
            className="text-2xl text-typography-950 pt-8"
          >
            Doctrine Migrations
          </Title>
          <Text className="text-typography-400">
            Nunca altere o banco de dados manualmente. Todo o schema é versionado através de
            Migrations, garantindo que todos os ambientes (Dev, Staging, Prod) estejam sempre
            sincronizados.
          </Text>
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

      {/* Paginação */}
      <section id="paginacao">
        <VStack gap={6}>
          <Title variant="h2" id="padrao-paginacao" className="text-2xl text-typography-950 pt-8">
            Padrão de Paginação
          </Title>
          <Callout variant="tip">
            Todo endpoint que retorna uma lista de recursos deve ser obrigatoriamente paginado para
            evitar overhead de memória e rede.
          </Callout>
          <Text className="text-typography-400">
            O Catalyst impõe um contrato de paginação unificado. O frontend espera metadados como{" "}
            <code>total</code>, <code>pagina</code> e <code>totalPaginas</code>.
          </Text>
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

      {/* Próximos Passos */}
      <Box className="pt-12 mt-12 border-t border-outline-900/50">
        <HStack
          justify="between"
          className="items-center bg-brand-500/[0.03] p-8 rounded-3xl border border-brand-500/20"
        >
          <VStack gap={2}>
            <Title variant="h3" className="text-typography-950">
              Processamento Assíncrono
            </Title>
            <Text className="text-typography-400">
              Envio de e-mails e tarefas pesadas em background.
            </Text>
          </VStack>
          <Button asChild size="lg" className="group">
            <Link to="/docs/mensageria">
              Mensageria{" "}
              <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
}
