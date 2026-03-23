import { AppContainer, Container } from "@/components/layout/Containers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Title, Text } from "@/components/ui";
import { Button } from "@shadcn/components/button";
import { HStack, VStack, Box } from "@/components/layout/Stack";
import { MockupVisual } from "@/components/landing/MockupVisual";
import { Stats } from "@/components/landing/Stats";
import { Diferenciais } from "@/components/landing/Diferenciais";
import { AntesDepois } from "@/components/landing/AntesDepois";
import { StackCompleta } from "@/components/landing/StackCompleta";
import { LinhaDoTempo } from "@/components/landing/LinhaDoTempo";
import { ArrowRight, Code, Zap, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, containerStagger } from "@/utils/animacoes";
import { Link } from "react-router-dom";

export function Component() {
  return (
    <AppContainer className="bg-background-950 overflow-x-hidden pt-20">
      <Navbar />

      {/* Hero Section */}
      <Container className="relative py-20 sm:py-32 lg:py-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl aspect-square bg-brand-500/[0.03] blur-[160px] rounded-full -z-10 pointer-events-none" />

        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center px-4"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/20 bg-brand-500/5 text-brand-500 text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles className="w-4 h-4 animate-pulse" />
              Sua nova jornada começa aqui
            </span>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Title variant="display" className="max-w-4xl text-white mb-8">
              Arquitetura de elite para <span className="text-brand-500">SaaS modernos</span> com
              tecnologia de ponta.
            </Title>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Text variant="lg" className="max-w-2xl text-typography-400 mb-12">
              Clean Architecture, DDD e React 19. Catalyst Skeleton é o fundamento sólido que sua
              empresa precisa para entregar em dias o que antes levava meses.
            </Text>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <HStack gap={6} flex-wrap="wrap" justify="center">
              <Button asChild size="lg" className="group h-14 px-10 text-base">
                <Link to="/docs">
                  Começar agora
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="h-14 px-10 text-base">
                <a
                  href="https://github.com/GabrielCirqueira/catalyst-testproject"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code className="w-5 h-5 mr-2" />
                  Explorar Repositório
                </a>
              </Button>
            </HStack>
          </motion.div>

          {/* Visual Mockup */}
          <MockupVisual />
        </motion.div>
      </Container>

      {/* Stats Section */}
      <Container className="py-24">
        <Stats />
      </Container>

      {/* Diferenciais Section */}
      <Container className="py-24">
        <Diferenciais />
      </Container>

      {/* Antes Depois Section */}
      <Container className="py-24">
        <AntesDepois />
      </Container>

      {/* Stack Section */}
      <Container className="py-24">
        <StackCompleta />
      </Container>

      {/* Timeline Section */}
      <Container className="py-24">
        <LinhaDoTempo />
      </Container>

      {/* Grid de Benefícios Iniciais */}
      <Container className="py-20 bg-background-900/30 border-y border-outline-900/50">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {[
            {
              icon: Zap,
              title: "Velocidade Extrema",
              description:
                "Vite, React 19 e PHP 8.4 em harmonia para uma experiência de desenvolvimento e execução que redefine o padrão.",
            },
            {
              icon: Shield,
              title: "Segurança de Elite",
              description:
                "Autenticação JWT com chaves RS256 e fluxos de estado robustos para aplicações de grau empresarial.",
            },
            {
              icon: Code,
              title: "Limpeza Acima de Tudo",
              description:
                "Padronização estrita de código com lints globais e tipagem profunda. Menos bugs, mais transparência.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex flex-col gap-6 p-8 rounded-2xl border border-outline-900 bg-background-950/50 hover:border-brand-500/30 transition-all group"
            >
              <Box className="size-14 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500 group-hover:bg-brand-500/20 transition-colors">
                <item.icon className="size-7" />
              </Box>
              <VStack gap={4}>
                <Title variant="h3" className="text-white text-xl">
                  {item.title}
                </Title>
                <Text className="text-typography-400 font-medium leading-relaxed">
                  {item.description}
                </Text>
              </VStack>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      <Footer />
    </AppContainer>
  );
}
