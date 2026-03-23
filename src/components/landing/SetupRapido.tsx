import { motion } from "framer-motion";
import { Title, Text } from "@/components/ui";
import { Card } from "@/components/ui/Card";
import { VStack, HStack, Box } from "@/components/layout/Stack";
import { fadeInUp, containerStagger } from "@/utils/animacoes";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Button } from "@shadcn/components/button";
import { Link } from "react-router-dom";
import { Terminal, ArrowRight } from "lucide-react";

const passos = [
  {
    num: "01",
    title: "Clonar",
    desc: "Traga o fundamento para sua máquina local.",
    code: "git clone https://github.com/...",
  },
  {
    num: "02",
    title: "Setup",
    desc: "Execute o script autônomo e aguarde a mágica.",
    code: "bash setup.sh",
  },
  {
    num: "03",
    title: "Desenvolver",
    desc: "Crie sua primeira feature em segundos.",
    code: "bash cli/new-feature.sh",
  },
];

export function SetupRapido() {
  return (
    <VStack gap={16} className="py-24 border-t border-outline-900/50">
      <VStack gap={4} className="text-center mx-auto max-w-2xl">
        <Title variant="h2" className="text-typography-950">
          Do zero ao real em <span className="text-brand-500">3 passos.</span>
        </Title>
        <Text variant="lg" className="text-typography-400">
          O caminho mais curto entre sua ideia e uma aplicação de grau empresarial.
        </Text>
      </VStack>

      <motion.div
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {passos.map((passo, i) => (
          <motion.div key={i} variants={fadeInUp}>
            <Card className="h-full border-outline-900 bg-background-950/50 group">
              <VStack gap={6}>
                <HStack justify="between">
                  <span className="text-4xl font-black text-brand-500/20 group-hover:text-brand-500/40 transition-colors uppercase italic">
                    {passo.num}
                  </span>
                  <Terminal className="text-brand-500/30 group-hover:text-brand-500 group-hover:scale-110 transition-all" />
                </HStack>
                <VStack gap={2}>
                  <Title variant="h4" className="text-typography-950">
                    {passo.title}
                  </Title>
                  <Text className="text-typography-400 text-sm">{passo.desc}</Text>
                </VStack>
                <CodeBlock
                  code={passo.code}
                  language="bash"
                  className="m-0 text-xs shadow-none border-brand-500/10"
                />
              </VStack>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <Box className="flex justify-center mt-8">
        <Button asChild size="lg" className="group h-16 px-12 text-lg">
          <Link to="/docs">
            Ver Documentação Completa
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </Box>
    </VStack>
  );
}
