import { motion } from "framer-motion";
import { Title, Text } from "@/components/ui";
import { VStack, Box } from "@/components/layout/Stack";
import { fadeInUp } from "@/utils/animacoes";
import { Badge } from "@/components/ui/Badge";

const versoes = [
  { v: "v1.0", data: "JAN 2025", desc: "Release inicial: Symfony 6.4 + React 18." },
  { v: "v2.0", data: "JUN 2025", desc: "Design System: Shadcn UI + Lucide Icons." },
  { v: "v3.0", data: "OUT 2025", desc: "Escalabilidade: Messenger & Workers estáveis." },
  { v: "v4.0", data: "MAR 2026", desc: "O Futuro: Symfony 7.3 + React 19 + RS256.", active: true },
];

export function LinhaDoTempo() {
  return (
    <VStack gap={16} className="py-24 border-t border-outline-900/50">
      <VStack gap={4} className="text-center mx-auto max-w-2xl">
        <Title variant="h2" className="text-typography-950">
          Evolução Contínua.
        </Title>
        <Text variant="lg" className="text-typography-400">
          O Catalyst Skeleton amadurece a cada versão para acompanhar as melhores práticas do
          mercado.
        </Text>
      </VStack>

      <div className="relative flex flex-col md:flex-row justify-between gap-8 md:gap-4 lg:gap-8 px-4 sm:px-0">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-outline-900 hidden md:block" />

        {versoes.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10 flex-1"
          >
            <VStack gap={6} className={item.active ? "md:scale-110" : "opacity-50"}>
              <Box className="mx-auto">
                <Box
                  className={`size-6 rounded-full border-4 border-background-950 ${item.active ? "bg-brand-500 shadow-[0_0_20px_rgba(28,195,157,0.5)]" : "bg-outline-900"}`}
                >
                  &nbsp;
                </Box>
              </Box>
              <VStack
                gap={2}
                className="text-center bg-background-900 p-6 rounded-lg border border-outline-900"
              >
                <Badge variant={item.active ? "brand" : "neutral"}>{item.v}</Badge>
                <Text variant="xs" className="text-typography-400">
                  {item.data}
                </Text>
                <Text className="text-typography-950 text-sm font-semibold">{item.desc}</Text>
              </VStack>
            </VStack>
          </motion.div>
        ))}
      </div>
    </VStack>
  );
}
