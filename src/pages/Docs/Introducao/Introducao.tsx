import { Title, Text, Badge, Card, Callout, CodeBlock } from "@/components/ui";
import { VStack, Box, HStack } from "@/components/layout/Stack";
import { Clock, ShieldCheck, Terminal, Zap, ArrowRight } from "lucide-react";
import { Button } from "@shadcn/components/button";
import { Link } from "react-router-dom";

export function Component() {
  return (
    <VStack gap={12} className="pb-20">
      {/* Hero da Doc */}
      <VStack gap={4}>
        <Badge variant="brand">Versão 4.0.0 — Estável</Badge>
        <Title variant="h1" id="introducao" className="text-4xl md:text-5xl text-white">
          Introdução ao <span className="text-brand-500">Catalyst Skeleton</span>
        </Title>
        <Text variant="lg" className="text-typography-400 max-w-2xl">
          O ponto de partida definitivo para aplicações empresariais sólidas, escaláveis e
          resilientes utilizando Symfony 7.3 e React 19.
        </Text>
      </VStack>

      {/* Visão Geral */}
      <section id="visao-geral">
        <VStack gap={6}>
          <Title variant="h2" id="oque-e" className="text-2xl text-white pt-8">
            O que é o Catalyst?
          </Title>
          <Text className="text-typography-400 leading-relaxed">
            Catalyst Skeleton é uma suite completa de engenharia que impõe padrões de **Clean
            Architecture**, **DDD (Domain Driven Design)** e **SOLID**. Não é apenas um boilerplate,
            mas um framework de trabalho que garante que seu projeto comece com a maturidade de um
            sistema desenvolvido por anos.
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-brand-500/10 bg-brand-500/[0.02]">
              <HStack gap={4}>
                <Box className="size-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-500">
                  <ShieldCheck className="size-5" />
                </Box>
                <Title variant="h4" className="text-white">
                  Seguro por Padrão
                </Title>
              </HStack>
              <Text variant="sm" className="mt-2 text-typography-400">
                JWT RS256, Refresh Tokens e Security Headers já configurados.
              </Text>
            </Card>
            <Card className="border-brand-500/10 bg-brand-500/[0.02]">
              <HStack gap={4}>
                <Box className="size-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-500">
                  <Zap className="size-5" />
                </Box>
                <Title variant="h4" className="text-white">
                  Produtividade Real
                </Title>
              </HStack>
              <Text variant="sm" className="mt-2 text-typography-400">
                Setup em 1 comando e CLI para criação de novas funcionalidades.
              </Text>
            </Card>
          </div>
        </VStack>
      </section>

      {/* Histórico */}
      <section id="historico">
        <VStack gap={6}>
          <Title variant="h2" id="versoes" className="text-2xl text-white pt-8">
            Histórico de Versões
          </Title>
          <div className="overflow-x-auto rounded-xl border border-outline-900 bg-background-900/50">
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
                  <td className="px-6 py-4 text-white">Skeleton V4</td>
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

      {/* Pré-requisitos */}
      <section id="pre-requisitos">
        <VStack gap={6}>
          <Title variant="h2" id="requisitos" className="text-2xl text-white pt-8">
            Pré-requisitos
          </Title>
          <Callout variant="info">
            Node.js e PHP não precisam estar instalados na máquina host. Todo o ambiente roda
            isolado via Docker.
          </Callout>
          <VStack gap={3}>
            <HStack
              justify="between"
              className="p-4 rounded-lg bg-background-900/30 border border-outline-900"
            >
              <HStack gap={3}>
                <Terminal className="size-4 text-brand-500" />
                <Text className="font-bold text-white">Docker + Docker Compose v2</Text>
              </HStack>
              <Badge variant="neutral">Obrigatório</Badge>
            </HStack>
            <HStack
              justify="between"
              className="p-4 rounded-lg bg-background-900/30 border border-outline-900"
            >
              <HStack gap={3}>
                <Clock className="size-4 text-brand-500" />
                <Text className="font-bold text-white">Git 2.x+</Text>
              </HStack>
              <Badge variant="neutral">Obrigatório</Badge>
            </HStack>
          </VStack>
        </VStack>
      </section>

      {/* Setup */}
      <section id="setup">
        <VStack gap={6}>
          <Title variant="h2" id="setup-inicial" className="text-2xl text-white pt-8">
            Setup Inicial
          </Title>
          <Text className="text-typography-400 leading-relaxed">
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

      {/* Próximos Passos */}
      <Box className="pt-12 mt-12 border-t border-outline-900/50">
        <HStack
          justify="between"
          className="items-center bg-brand-500/[0.03] p-8 rounded-3xl border border-brand-500/20"
        >
          <VStack gap={2}>
            <Title variant="h3" className="text-white">
              Fundamentos Sólidos
            </Title>
            <Text className="text-typography-400">
              Entenda as camadas de arquitetura do sistema.
            </Text>
          </VStack>
          <Button asChild size="lg" className="group">
            <Link to="/docs/arquitetura">
              Arquitetura{" "}
              <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
}
