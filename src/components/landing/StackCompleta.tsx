import { motion } from "framer-motion";
import { Title, Text } from "@/components/ui";
import { Card } from "@/components/ui/Card";
import { VStack, HStack } from "@/components/layout/Stack";
import { fadeInUp } from "@/utils/animacoes";
import { Badge } from "@/components/ui/Badge";

const backendStack = [
  { name: "PHP 8.4", role: "Linguagem core moderna" },
  { name: "Symfony 7.3", role: "Framework empresarial sólido" },
  { name: "MySQL 8.3", role: "Banco de dados relacional" },
  { name: "Doctrine ORM", role: "Abstração de dados robusta" },
  { name: "Messenger", role: "Processamento assíncrono" },
  { name: "PHPStan Lvl 6", role: "Análise estática rigorosa" },
];

const frontendStack = [
  { name: "React 19", role: "UI declarativa e performática" },
  { name: "TypeScript", role: "Segurança de tipos ponta a ponta" },
  { name: "Vite", role: "Build tool de próxima geração" },
  { name: "TanStack Query", role: "Gerenciamento de cache & sync" },
  { name: "Zustand", role: "Estado global simplificado" },
  { name: "Tailwind CSS", role: "Design system utilitário" },
];

export function StackCompleta() {
  return (
    <VStack gap={16} className="py-24 border-t border-outline-900/50">
      <VStack gap={4} className="text-center mx-auto max-w-2xl">
        <Title variant="h2" className="text-typography-950">
          Stack completa. <span className="text-brand-500">Zero decisões pendentes.</span>
        </Title>
        <Text variant="lg" className="text-typography-400">
          Escolhemos as melhores ferramentas para que você não precise gastar meses testando
          integrações.
        </Text>
      </VStack>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Backend */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="h-full border-brand-500/10">
            <VStack gap={8}>
              <HStack justify="between">
                <Title variant="h3" className="text-typography-950">
                  Backend
                </Title>
                <Badge variant="brand">Empresarial</Badge>
              </HStack>
              <VStack gap={3}>
                {backendStack.map((tech, i) => (
                  <HStack
                    key={i}
                    justify="between"
                    className="p-3 rounded-lg bg-background-950/50 border border-outline-900 group hover:border-brand-500/30 transition-all"
                  >
                    <Text className="text-typography-950 font-bold">{tech.name}</Text>
                    <Text variant="sm" className="text-typography-400">
                      {tech.role}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </VStack>
          </Card>
        </motion.div>

        {/* Frontend */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="h-full border-brand-500/10">
            <VStack gap={8}>
              <HStack justify="between">
                <Title variant="h3" className="text-typography-950">
                  Frontend
                </Title>
                <Badge variant="brand">Moderno</Badge>
              </HStack>
              <VStack gap={3}>
                {frontendStack.map((tech, i) => (
                  <HStack
                    key={i}
                    justify="between"
                    className="p-3 rounded-lg bg-background-950/50 border border-outline-900 group hover:border-brand-500/30 transition-all"
                  >
                    <Text className="text-typography-950 font-bold">{tech.name}</Text>
                    <Text variant="sm" className="text-typography-400">
                      {tech.role}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </VStack>
          </Card>
        </motion.div>
      </div>
    </VStack>
  );
}
