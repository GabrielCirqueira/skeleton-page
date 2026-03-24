import { Title, Text, Card, Callout, CodeBlock } from "@/components/ui";
import { VStack, Box, HStack } from "@/components/layout/Stack";
import { Clock, ShieldCheck, Terminal, Zap, ArrowRight } from "lucide-react";
import { Button } from "@shadcn/components/button";
import { Link } from "react-router-dom";

export function Component() {
  return (
    <VStack gap={10} className="pb-20">
      <VStack gap={3}>
        <span className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Versão 4.0.0 — Estável
        </span>
        <Title
          variant="h1"
          id="introducao"
          className="text-3xl sm:text-4xl text-typography-950 dark:text-white"
        >
          Introdução ao <span className="text-brand-500">Catalyst Skeleton</span>
        </Title>
        <Text variant="lg" className="text-typography-600 dark:text-typography-400 max-w-2xl">
          O ponto de partida definitivo para aplicações empresariais sólidas, escaláveis e
          resilientes utilizando Symfony 7.3 e React 19.
        </Text>
      </VStack>

      <section id="visao-geral">
        <VStack gap={5}>
          <VStack gap={1}>
            <Title
              variant="h2"
              id="oque-e"
              className="text-2xl text-typography-950 dark:text-white"
            >
              O que é o Catalyst?
            </Title>
            <Text className="text-typography-600 dark:text-typography-400">
              Uma suite completa de engenharia que impõe padrões de Clean Architecture, DDD e SOLID.
              Não é um boilerplate — é um framework de trabalho que garante maturidade desde o
              primeiro commit.
            </Text>
          </VStack>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <HStack gap={4} align="start">
                <Box className="size-10 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="size-5 text-brand-500" strokeWidth={2} />
                </Box>
                <VStack gap={1}>
                  <p className="text-sm font-semibold text-typography-950 dark:text-white">
                    Seguro por Padrão
                  </p>
                  <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                    JWT RS256, Refresh Tokens e Security Headers já configurados.
                  </Text>
                </VStack>
              </HStack>
            </Card>
            <Card>
              <HStack gap={4} align="start">
                <Box className="size-10 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                  <Zap className="size-5 text-brand-500" strokeWidth={2} />
                </Box>
                <VStack gap={1}>
                  <p className="text-sm font-semibold text-typography-950 dark:text-white">
                    Produtividade Real
                  </p>
                  <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                    Setup em 1 comando e CLI para criação de novas funcionalidades.
                  </Text>
                </VStack>
              </HStack>
            </Card>
          </div>
        </VStack>
      </section>

      <section id="historico">
        <VStack gap={5}>
          <Title variant="h2" id="versoes" className="text-2xl text-typography-950 dark:text-white">
            Histórico de Versões
          </Title>
          <div className="overflow-x-auto rounded-lg border border-outline-900 bg-background-900/50">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-outline-900 bg-background-950/50">
                  <th className="px-6 py-4 text-xs font-black text-typography-400 uppercase tracking-widest">
                    Versão
                  </th>
                  <th className="px-6 py-4 text-xs font-black text-typography-400 uppercase tracking-widest">
                    Destaque
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm font-bold text-typography-400">
                <tr className="border-b border-outline-900/50">
                  <td className="px-6 py-4 text-typography-950">Skeleton V4</td>
                  <td className="px-6 py-4 italic">Atual — Symfony 7.3, React 19, Biome.</td>
                </tr>
                <tr className="border-b border-outline-900/50">
                  <td className="px-6 py-4 opacity-50">Skeleton V3</td>
                  <td className="px-6 py-4 opacity-50">Symfony Messenger & Workers estáveis.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 opacity-50">Skeleton V1</td>
                  <td className="px-6 py-4 opacity-50">
                    Release Inicial (Symfony 6.4 + React 18).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </VStack>
      </section>

      <section id="pre-requisitos">
        <VStack gap={5}>
          <Title
            variant="h2"
            id="requisitos"
            className="text-2xl text-typography-950 dark:text-white"
          >
            Pré-requisitos
          </Title>
          <Callout variant="info">
            Node.js e PHP não precisam estar instalados na máquina host. Todo o ambiente roda
            isolado via Docker.
          </Callout>
          <VStack gap={3}>
            <HStack
              justify="between"
              className="p-4 rounded-lg bg-background-800/30 dark:bg-background-900/50 border border-outline-100 dark:border-outline-900"
            >
              <HStack gap={3}>
                <Terminal className="size-4 text-brand-500" />
                <Text className="font-semibold text-typography-950 dark:text-white">
                  Docker + Docker Compose v2
                </Text>
              </HStack>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
                Obrigatório
              </span>
            </HStack>
            <HStack
              justify="between"
              className="p-4 rounded-lg bg-background-800/30 dark:bg-background-900/50 border border-outline-100 dark:border-outline-900"
            >
              <HStack gap={3}>
                <Clock className="size-4 text-brand-500" />
                <Text className="font-semibold text-typography-950 dark:text-white">Git 2.x+</Text>
              </HStack>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
                Obrigatório
              </span>
            </HStack>
          </VStack>
        </VStack>
      </section>

      <section id="setup">
        <VStack gap={5}>
          <Title
            variant="h2"
            id="setup-inicial"
            className="text-2xl text-typography-950 dark:text-white"
          >
            Setup Inicial
          </Title>
          <Text className="text-typography-600 dark:text-typography-400">
            O Catalyst possui um orquestrador de setup altamente sofisticado que prepara todo o seu
            ambiente profissional em minutos:
          </Text>
          <CodeBlock language="bash" code="bash setup.sh" title="Terminal" />
          <VStack gap={4} className="pl-6 border-l-2 border-brand-500/20">
            <Text variant="sm" className="text-typography-400 italic">
              O que o script faz por você:
            </Text>
            <ul className="list-disc list-inside text-sm text-typography-400 flex flex-col gap-2">
              <li>Configura variáveis de ambiente (.env) automaticamente.</li>
              <li>Gera chaves RSA para o JWT.</li>
              <li>Orquestra build multi-stage do Docker.</li>
              <li>Executa migrations e seeders iniciais.</li>
              <li>Valida a saúde (Health Check) da API.</li>
            </ul>
          </VStack>
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
              Entenda as camadas de arquitetura do sistema
            </p>
          </VStack>
        </HStack>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="group border-outline-100 dark:border-outline-900 hover:border-brand-500/50"
        >
          <Link to="/docs/arquitetura">
            Arquitetura
            <ArrowRight className="ml-2 size-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </Button>
      </HStack>
    </VStack>
  );
}
