import { Title, Text, Card, Callout, CodeBlock } from "@/components/ui";
import { VStack, Box, HStack } from "@/components/layout/Stack";
import { Cpu, Activity, ArrowRight, Zap, Share2 } from "lucide-react";
import { Button } from "@shadcn/components/button";
import { Link } from "react-router-dom";

export function Component() {
  return (
    <VStack gap={10} className="pb-20">
      <VStack gap={3}>
        <span className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Performance
        </span>
        <Title
          variant="h1"
          id="mensageria"
          className="text-3xl sm:text-4xl text-typography-950 dark:text-white"
        >
          Mensageria e <span className="text-brand-500">Workers</span>
        </Title>
        <Text variant="lg" className="text-typography-600 dark:text-typography-400 max-w-2xl">
          E-mails, processamento de arquivos e integrações externas nunca devem atrasar a resposta
          ao usuário. O Catalyst usa Symfony Messenger para tudo.
        </Text>
      </VStack>

      <section id="async">
        <VStack gap={5}>
          <VStack gap={1}>
            <Title
              variant="h2"
              id="processamento-background"
              className="text-2xl text-typography-950 dark:text-white"
            >
              Processamento em Segundo Plano
            </Title>
            <Text className="text-typography-600 dark:text-typography-400">
              A regra é simples: se a tarefa demora mais que 100ms ou depende de serviço externo,
              ela deve ser assíncrona.
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
                    Instantaneidade
                  </p>
                  <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                    O usuário recebe o "OK" imediatamente, enquanto a tarefa roda no background.
                  </Text>
                </VStack>
              </HStack>
            </Card>
            <Card>
              <HStack gap={4} align="start">
                <Box className="size-10 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                  <Share2 className="size-5 text-brand-500" strokeWidth={2} />
                </Box>
                <VStack gap={1}>
                  <p className="text-sm font-semibold text-typography-950 dark:text-white">
                    Retentativas
                  </p>
                  <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                    Se um e-mail falhar por rede, o sistema tenta novamente de forma automática.
                  </Text>
                </VStack>
              </HStack>
            </Card>
          </div>
        </VStack>
      </section>

      <section id="handler">
        <VStack gap={5}>
          <VStack gap={1}>
            <Title
              variant="h2"
              id="implementacao-messenger"
              className="text-2xl text-typography-950 dark:text-white"
            >
              Mensagens e Handlers
            </Title>
            <Text className="text-typography-600 dark:text-typography-400">
              Dividimos a tarefa em duas classes: o Payload (Message) e a Lógica (Handler).
            </Text>
          </VStack>
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
        <VStack gap={5}>
          <VStack gap={1}>
            <Title
              variant="h2"
              id="supervisor-workers"
              className="text-2xl text-typography-950 dark:text-white"
            >
              Workers e Supervisord
            </Title>
          </VStack>
          <Callout variant="info">
            Em produção, o Supervisord garante que os workers estejam sempre rodando, reiniciando-os
            automaticamente caso falhem.
          </Callout>
          <div className="space-y-4">
            <HStack
              gap={4}
              className="p-4 bg-background-800/30 dark:bg-background-900/50 border border-outline-100 dark:border-outline-900 rounded-lg"
            >
              <Box className="size-9 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                <Cpu className="size-4 text-brand-500" strokeWidth={2} />
              </Box>
              <VStack gap={0}>
                <p className="text-sm font-semibold text-typography-950 dark:text-white">
                  Transporte Doctrine
                </p>
                <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                  As mensagens são guardadas temporariamente no MySQL (não exige Redis no início).
                </Text>
              </VStack>
            </HStack>
            <HStack
              gap={4}
              className="p-4 bg-background-800/30 dark:bg-background-900/50 border border-outline-100 dark:border-outline-900 rounded-lg"
            >
              <Box className="size-9 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                <Activity className="size-4 text-brand-500" strokeWidth={2} />
              </Box>
              <VStack gap={0}>
                <p className="text-sm font-semibold text-typography-950 dark:text-white">
                  Painel de Controle
                </p>
                <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                  Acesse o painel do Supervisor na porta 1011 para ver o estado das filas.
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
              Testes automatizados e análise estática rigorosa
            </p>
          </VStack>
        </HStack>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="group border-outline-100 dark:border-outline-900 hover:border-brand-500/50"
        >
          <Link to="/docs/qualidade">
            Qualidade
            <ArrowRight className="ml-2 size-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </Button>
      </HStack>
    </VStack>
  );
}
