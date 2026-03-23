import { AppContainer, Container } from "@/components/layout/Containers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Title, Text } from "@/components/ui";
import { Button } from "@shadcn/components/button";
import { HStack } from "@/components/layout/Stack";
import { MockupVisual } from "@/components/landing/MockupVisual";
import { Stats } from "@/components/landing/Stats";
import { Diferenciais } from "@/components/landing/Diferenciais";
import { AntesDepois } from "@/components/landing/AntesDepois";
import { StackCompleta } from "@/components/landing/StackCompleta";
import { LinhaDoTempo } from "@/components/landing/LinhaDoTempo";
import { SetupRapido } from "@/components/landing/SetupRapido";
import { Quote } from "@/components/landing/Quote";
import { ArrowRight, Code, Sparkles } from "lucide-react";
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
            <Title variant="display" className="max-w-4xl text-typography-950 mb-8">
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

      {/* Setup Section */}
      <Container className="py-24">
        <SetupRapido />
      </Container>

      {/* Quote Section */}
      <Container className="py-24">
        <Quote />
      </Container>

      <Footer />
    </AppContainer>
  );
}
