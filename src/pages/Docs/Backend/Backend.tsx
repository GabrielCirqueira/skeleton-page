import { Title, Text, Badge, Card, Callout, CodeBlock } from "@/components/ui";
import { VStack, Box, HStack } from "@/components/layout/Stack";
import { Server, ShieldCheck, ArrowRight, Zap, Target, BookOpen } from "lucide-react";
import { Button } from "@shadcn/components/button";
import { Link } from "react-router-dom";

export function Component() {
  return (
    <VStack gap={12} className="pb-20">
      <VStack gap={4}>
        <Badge variant="brand">Engenharia</Badge>
        <Title variant="h1" id="backend" className="text-4xl md:text-5xl text-typography-950">
          Arquitetura de <span className="text-brand-500">Backend</span>
        </Title>
        <Text variant="lg" className="text-typography-400 max-w-2xl">
          O backend do Catalyst (Symfony 7.3) é focado em previsibilidade, tipagem estrita e
          separação total de interesses através de Clean Architecture.
        </Text>
      </VStack>

      {/* Services Atômicos */}
      <section id="services">
        <VStack gap={6}>
          <Title variant="h2" id="services-logica" className="text-2xl text-typography-950 pt-8">
            Services e Lógica de Negócio
          </Title>
          <Text className="text-typography-400">
            No Catalyst, um **Service** deve representar uma única ação de negócio (`executar()`).
            Isso garante que a lógica seja atômica, testável e fácil de manter por humanos e IAs.
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap={4}">
            <Card className="border-brand-500/10 bg-brand-500/[0.02]">
              <HStack gap={3} className="mb-2">
                <Zap className="size-4 text-brand-500" />
                <Title variant="h4" className="text-typography-950 text-base">
                  Services Atômicos
                </Title>
              </HStack>
              <Text variant="sm" className="text-typography-400">
                Uma classe, uma ação. Ex: <code>CriarUsuarioService</code>, nunca{" "}
                <code>UsuarioService</code> (gigante).
              </Text>
            </Card>
            <Card className="border-brand-500/10 bg-brand-500/[0.02]">
              <HStack gap={3} className="mb-2">
                <ShieldCheck className="size-4 text-brand-500" />
                <Title variant="h4" className="text-typography-950 text-base">
                  Independência de HTTP
                </Title>
              </HStack>
              <Text variant="sm" className="text-typography-400">
                O Service nunca vê o objeto <code>Request</code>. Ele recebe DTOs e retorna{" "}
                <code>Resultado</code>.
              </Text>
            </Card>
          </div>
          <CodeBlock
            language="php"
            title="Padrão de Service"
            code={`final class CriarPedidoService 
{
    public function executar(CriarPedidoDTO $dto): Resultado 
    {
        // 1. Validar regras de negócio
        // 2. Chamar Repositorios
        // 3. Disparar Eventos
        // 4. Retornar Resultado
    }
}`}
          />
        </VStack>
      </section>

      {/* DTOs */}
      <section id="dtos">
        <VStack gap={6}>
          <Title variant="h2" id="dtos-validacao" className="text-2xl text-typography-950 pt-8">
            DTOs e Validação de Entrada
          </Title>
          <Text className="text-typography-400">
            Data Transfer Objects (DTOs) são a única forma de entrada de dados nos Services. Eles
            usam atributos do Symfony para garantir que os dados cheguem validados e tipados antes
            mesmo da lógica começar.
          </Text>
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

      {/* Entidades e Enums */}
      <section id="dominio">
        <VStack gap={6}>
          <Title variant="h2" id="entidades-enums" className="text-2xl text-typography-950 pt-8">
            Entidades e Enums
          </Title>
          <Text className="text-typography-400">
            Nossas entidades não são anêmicas. Elas contêm validações de invariantes e
            comportamentos reais. O uso de **Enums** é obrigatório para qualquer campo com valores
            fixos.
          </Text>
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

      {/* Regras de Ouro */}
      <section id="regras">
        <VStack gap={6}>
          <Title variant="h2" id="regras-ouro" className="text-2xl text-typography-950 pt-8">
            Regras de Ouro do Backend
          </Title>
          <div className="space-y-4">
            <HStack
              gap={4}
              className="p-4 bg-background-900/30 border border-outline-900 rounded-xl"
            >
              <Target className="size-5 text-brand-500 shrink-0" />
              <VStack gap={1}>
                <Text className="text-typography-950 font-black">Early Return</Text>
                <Text variant="sm" className="text-typography-400">
                  Ordene falhas pelo custo. Valide o que é local antes de chamar o banco.
                </Text>
              </VStack>
            </HStack>
            <HStack
              gap={4}
              className="p-4 bg-background-900/30 border border-outline-900 rounded-xl"
            >
              <BookOpen className="size-5 text-brand-500 shrink-0" />
              <VStack gap={1}>
                <Text className="text-typography-950 font-black">Zero Comentários</Text>
                <Text variant="sm" className="text-typography-400">
                  O código deve se explicar. Nomes como <code>validarDuplicidadeDeEmail()</code>{" "}
                  dispensam comentários.
                </Text>
              </VStack>
            </HStack>
            <HStack
              gap={4}
              className="p-4 bg-background-900/30 border border-outline-900 rounded-xl"
            >
              <Server className="size-5 text-brand-500 shrink-0" />
              <VStack gap={1}>
                <Text className="text-typography-950 font-black">Serializer é Contrato</Text>
                <Text variant="sm" className="text-typography-400">
                  Nunca retorne entidades diretamente. O Serializer protege contra mudanças internas
                  no banco.
                </Text>
              </VStack>
            </HStack>
          </div>
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
              Experiência do Usuário
            </Title>
            <Text className="text-typography-400">
              Frontend reativo com React 19 e "No useEffect".
            </Text>
          </VStack>
          <Button asChild size="lg" className="group">
            <Link to="/docs/frontend">
              Frontend{" "}
              <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
}
