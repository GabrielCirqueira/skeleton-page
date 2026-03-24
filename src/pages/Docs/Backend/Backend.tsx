import { Title, Text, Card, Callout, CodeBlock } from "@/components/ui";
import { VStack, Box, HStack } from "@/components/layout/Stack";
import { Server, ShieldCheck, ArrowRight, Zap, Target, BookOpen } from "lucide-react";
import { Button } from "@shadcn/components/button";
import { Link } from "react-router-dom";

export function Component() {
  return (
    <VStack gap={10} className="pb-20">
      <VStack gap={3}>
        <span className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Engenharia
        </span>
        <Title
          variant="h1"
          id="backend"
          className="text-3xl sm:text-4xl text-typography-950 dark:text-white"
        >
          Arquitetura de <span className="text-brand-500">Backend</span>
        </Title>
        <Text variant="lg" className="text-typography-600 dark:text-typography-400 max-w-2xl">
          Symfony 7.3 focado em previsibilidade, tipagem estrita e separação total de interesses
          através de Clean Architecture.
        </Text>
      </VStack>

      <section id="services">
        <VStack gap={5}>
          <VStack gap={1}>
            <Title
              variant="h2"
              id="services-logica"
              className="text-2xl text-typography-950 dark:text-white"
            >
              Services e Lógica de Negócio
            </Title>
            <Text className="text-typography-600 dark:text-typography-400">
              Um Service representa uma única ação de negócio. Isso garante atomicidade,
              testabilidade e facilidade de manutenção.
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
                    Services Atômicos
                  </p>
                  <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                    Uma classe, uma ação. Ex:{" "}
                    <code className="text-brand-500 bg-brand-500/10 px-1 rounded text-xs">
                      CriarUsuarioService
                    </code>
                    , nunca{" "}
                    <code className="text-brand-500 bg-brand-500/10 px-1 rounded text-xs">
                      UsuarioService
                    </code>
                    .
                  </Text>
                </VStack>
              </HStack>
            </Card>
            <Card>
              <HStack gap={4} align="start">
                <Box className="size-10 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="size-5 text-brand-500" strokeWidth={2} />
                </Box>
                <VStack gap={1}>
                  <p className="text-sm font-semibold text-typography-950 dark:text-white">
                    Independência de HTTP
                  </p>
                  <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                    O Service nunca vê o objeto{" "}
                    <code className="text-brand-500 bg-brand-500/10 px-1 rounded text-xs">
                      Request
                    </code>
                    . Recebe DTOs e retorna{" "}
                    <code className="text-brand-500 bg-brand-500/10 px-1 rounded text-xs">
                      Resultado
                    </code>
                    .
                  </Text>
                </VStack>
              </HStack>
            </Card>
          </div>
          <CodeBlock
            language="php"
            title="Padrão de Service"
            code={`final class CriarPedidoService 
{
    public function executar(CriarPedidoDTO $dto): Resultado 
    {
    }
}`}
          />
        </VStack>
      </section>

      <section id="dtos">
        <VStack gap={5}>
          <VStack gap={1}>
            <Title
              variant="h2"
              id="dtos-validacao"
              className="text-2xl text-typography-950 dark:text-white"
            >
              DTOs e Validação de Entrada
            </Title>
            <Text className="text-typography-600 dark:text-typography-400">
              Data Transfer Objects são a única forma de entrada nos Services. Chegam validados e
              tipados antes mesmo da lógica começar.
            </Text>
          </VStack>
          <CodeBlock
            language="php"
            title="DTO Implementation"
            code={`final readonly class CadastrarUsuarioDTO 
{
    public function __construct(
        #[Assert\\NotBlank]
        #[Assert\\Email]
        public string $email,

        #[Assert\\Length(min: 8)]
        public string $senha
    ) {}
}`}
          />
        </VStack>
      </section>

      <section id="dominio">
        <VStack gap={5}>
          <VStack gap={1}>
            <Title
              variant="h2"
              id="entidades-enums"
              className="text-2xl text-typography-950 dark:text-white"
            >
              Entidades e Enums
            </Title>
            <Text className="text-typography-600 dark:text-typography-400">
              Nossas entidades não são anêmicas — contêm validações de invariantes. Enums são
              obrigatórios para qualquer campo com valores fixos.
            </Text>
          </VStack>
          <Callout variant="warning">
            PROIBIDO: Usar strings soltas para status ou tipos. Use Enums PHP 8.4 e tipagem estrita
            no Doctrine.
          </Callout>
          <CodeBlock
            language="php"
            title="Entidade com Enum"
            code={`#[ORM\\Entity]
class Pedido 
{
    #[ORM\\Column(type: 'string', enumType: StatusPedido::class)]
    private StatusPedido $status;

    public function cancelar(): void 
    {
        if ($this->status === StatusPedido::Entregue) {
            throw new DomainException("Pedido entregue não pode ser cancelado.");
        }
        $this->status = StatusPedido::Cancelado;
    }
}`}
          />
        </VStack>
      </section>

      <section id="regras">
        <VStack gap={5}>
          <Title
            variant="h2"
            id="regras-ouro"
            className="text-2xl text-typography-950 dark:text-white"
          >
            Regras de Ouro do Backend
          </Title>
          <div className="space-y-3">
            <HStack
              gap={4}
              className="p-4 bg-background-800/30 dark:bg-background-900/50 border border-outline-100 dark:border-outline-900 rounded-lg"
            >
              <Target className="size-5 text-brand-500 shrink-0" />
              <VStack gap={0}>
                <p className="text-sm font-semibold text-typography-950 dark:text-white">
                  Early Return
                </p>
                <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                  Ordene falhas pelo custo. Valide o que é local antes de chamar o banco.
                </Text>
              </VStack>
            </HStack>
            <HStack
              gap={4}
              className="p-4 bg-background-800/30 dark:bg-background-900/50 border border-outline-100 dark:border-outline-900 rounded-lg"
            >
              <BookOpen className="size-5 text-brand-500 shrink-0" />
              <VStack gap={0}>
                <p className="text-sm font-semibold text-typography-950 dark:text-white">
                  Zero Comentários
                </p>
                <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                  O código deve se explicar. Nomes como{" "}
                  <code className="text-brand-500 bg-brand-500/10 px-1 rounded text-xs">
                    validarDuplicidadeDeEmail()
                  </code>{" "}
                  dispensam comentários.
                </Text>
              </VStack>
            </HStack>
            <HStack
              gap={4}
              className="p-4 bg-background-800/30 dark:bg-background-900/50 border border-outline-100 dark:border-outline-900 rounded-lg"
            >
              <Server className="size-5 text-brand-500 shrink-0" />
              <VStack gap={0}>
                <p className="text-sm font-semibold text-typography-950 dark:text-white">
                  Serializer é Contrato
                </p>
                <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                  Nunca retorne entidades diretamente. O Serializer protege contra mudanças internas
                  no banco.
                </Text>
              </VStack>
            </HStack>
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
              Frontend reativo com React 19
            </p>
          </VStack>
        </HStack>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="group border-outline-100 dark:border-outline-900 hover:border-brand-500/50"
        >
          <Link to="/docs/frontend">
            Frontend
            <ArrowRight className="ml-2 size-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </Button>
      </HStack>
    </VStack>
  );
}
