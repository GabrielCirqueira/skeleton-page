import { motion } from "framer-motion";
import { fadeInUp, containerStagger } from "@/utils/animacoes";
import { Title, Text } from "@/components/ui";
import { Card } from "@/components/ui/Card";
import { Box, VStack } from "@/components/layout/Stack";
import { Shield, LayoutGrid, Zap, Layers, Mail, SearchCheck } from "lucide-react";

const diferenciais = [
  {
    icon: Shield,
    title: "JWT RS256 Pronto",
    description:
      "Access token de 1h + Refresh de 30 dias com renovação automática e fila de requisições concorrentes.",
  },
  {
    icon: Layers,
    title: "Clean Architecture",
    description:
      "Separação rigorosa: Controller sem lógica, Service atômico e regras de negócio sempre no lugar certo.",
  },
  {
    icon: Zap,
    title: "Setup em 1 Comando",
    description:
      "bash setup.sh cuida de tudo: Docker, Migrations, Keypairs JWT e Health Check autônomo.",
  },
  {
    icon: LayoutGrid,
    title: "Frontend por Features",
    description:
      "React 19 estruturado por domínio funcional. TanStack Query, Zustand e Framer Motion integrados.",
  },
  {
    icon: Mail,
    title: "Mensageria e Workers",
    description:
      "Messenger com transporte Doctrine, Scheduler nativo e Outbox Pattern para atomicidade total.",
  },
  {
    icon: SearchCheck,
    title: "Qualidade de Elite",
    description:
      "PHPStan nível 6, PHPUnit, Biome, Husky e Commitlint configurados do primeiro commit.",
  },
];

export function Diferenciais() {
  return (
    <VStack gap={16} className="py-24">
      <VStack gap={4} className="text-center max-w-3xl mx-auto">
        <Title variant="h2" className="text-3xl sm:text-5xl text-white">
          Tudo que você precisaria configurar.{" "}
          <span className="text-brand-500">Já configurado.</span>
        </Title>
        <Text variant="lg" className="text-typography-400">
          Engenharia de precisão para quem não tem tempo a perder com boilerplate repetitivo.
        </Text>
      </VStack>

      <motion.div
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {diferenciais.map((item, i) => (
          <motion.div key={i} variants={fadeInUp}>
            <Card className="h-full group">
              <VStack gap={6}>
                <Box className="size-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500 group-hover:bg-brand-500/20 transition-colors">
                  <item.icon className="size-6" />
                </Box>
                <VStack gap={2}>
                  <Title variant="h4" className="text-white">
                    {item.title}
                  </Title>
                  <Text className="text-typography-400 leading-relaxed">{item.description}</Text>
                </VStack>
              </VStack>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </VStack>
  );
}
