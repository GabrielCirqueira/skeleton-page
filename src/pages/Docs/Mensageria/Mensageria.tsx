import { Title, Text, Badge, Card, Callout, CodeBlock } from "@/components/ui";
import { VStack, Box, HStack } from "@/components/layout/Stack";
import { Cpu, Activity, ArrowRight, Zap, Share2 } from "lucide-react";
import { Button } from "@shadcn/components/button";
import { Link } from "react-router-dom";

export function Component() {
  return (
    <VStack gap={12} className="pb-20">
      <VStack gap={4}>
        <Badge variant="brand">Performance</Badge>
        <Title variant="h1" id="mensageria" className="text-4xl md:text-5xl text-typography-950">
          Mensageria e <span className="text-brand-500">Workers</span>
        </Title>
        <Text variant="lg" className="text-typography-400 max-w-2xl">
          E-mails, processamento de arquivos e integrações externas nunca devem atrasar a resposta
          ao usuário. O Catalyst usa Symfony Messenger para tudo.
        </Text>
      </VStack>

      <section id="async">
        <VStack gap={6}>
          <Title
            variant="h2"
            id="processamento-background"
            className="text-2xl text-typography-950 pt-8"
          >
            Processamento em Segundo Plano
          </Title>
          <Text className="text-typography-400">
            A regra é simples: se a tarefa demora mais que 100ms ou depende de serviço externo, ela
            deve ser assíncrona.
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-brand-500/10 bg-brand-500/[0.02]">
              <HStack gap={3} className="mb-2">
                <Zap className="size-4 text-brand-500" />
                <Title variant="h4" className="text-typography-950 text-base">
                  Instantaneidade
                </Title>
              </HStack>
              <Text variant="sm" className="text-typography-400">
                O usuário recebe o "OK" imediatamente, enquanto a tarefa roda no background.
              </Text>
            </Card>
            <Card className="border-brand-500/10 bg-brand-500/[0.02]">
              <HStack gap={3} className="mb-2">
                <Share2 className="size-4 text-brand-500" />
                <Title variant="h4" className="text-typography-950 text-base">
                  Retentativas
                </Title>
              </HStack>
              <Text variant="sm" className="text-typography-400">
                Se um e-mail falhar por rede, o sistema tenta novamente de forma automática.
              </Text>
            </Card>
          </div>
        </VStack>
      </section>

      <section id="handler">
        <VStack gap={6}>
          <Title
            variant="h2"
            id="implementacao-messenger"
            className="text-2xl text-typography-950 pt-8"
          >
            Mensagens e Handlers
          </Title>
          <Text className="text-typography-400">
            Dividimos a tarefa em duas classes: o Payload (Message) e a Lógica (Handler).
          </Text>
          <CodeBlock
            language="php"
            title="MessageHandler Implementation"
            code={`#[AsMessageHandler]
final class EnviarEmailBemVindoHandler 
{
    public function __invoke(EnviarEmailBemVindoMessage $messenger) 
    {
    }
}`}
          />
        </VStack>
      </section>

      <section id="infra">
        <VStack gap={6}>
          <Title variant="h2" id="supervisor-workers" className="text-2xl text-typography-950 pt-8">
            Workers e Supervisord
          </Title>
          <Callout variant="info">
            Em produção, o Supervisord garante que os workers estejam sempre rodando, reiniciando-os
            automaticamente caso falhem.
          </Callout>
          <div className="space-y-4">
            <HStack
              gap={4}
              className="p-4 bg-background-900/30 border border-outline-900 rounded-lg"
            >
              <Cpu className="size-5 text-brand-500 shrink-0" />
              <VStack gap={1}>
                <Text className="text-typography-950 font-black">Transporte Doctrine</Text>
                <Text variant="sm" className="text-typography-400">
                  As mensagens são guardadas temporariamente no MySQL (não exige Redis no início).
                </Text>
              </VStack>
            </HStack>
            <HStack
              gap={4}
              className="p-4 bg-background-900/30 border border-outline-900 rounded-lg"
            >
              <Activity className="size-5 text-brand-500 shrink-0" />
              <VStack gap={1}>
                <Text className="text-typography-950 font-black">Painel de Controle</Text>
                <Text variant="sm" className="text-typography-400">
                  Acesse o painel do Supervisor na porta 1011 para ver o estado das filas.
                </Text>
              </VStack>
            </HStack>
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
              Qualidade de Código
            </Title>
            <Text className="text-typography-400">
              Testes automatizados e análise estática rigorosa.
            </Text>
          </VStack>
          <Button asChild size="lg" className="group">
            <Link to="/docs/qualidade">
              Qualidade{" "}
              <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
}
