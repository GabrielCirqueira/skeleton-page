import { motion } from "framer-motion";
import { Title, Text } from "@/components/ui";
import { VStack } from "@/components/layout/Stack";
import { fadeInUp, containerStagger } from "@/utils/animacoes";

const stats = [
  { value: "120+", label: "Bibliotecas" },
  { value: "40+", label: "Guias Técnicos" },
  { value: "5", label: "Layers de Arquitetura" },
  { value: "1", label: "Comando Setup" },
];

export function Stats() {
  return (
    <div className="py-12 border-y border-outline-900/50 bg-background-950/50 backdrop-blur-sm">
      <motion.div
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4"
      >
        {stats.map((stat, i) => (
          <motion.div key={i} variants={fadeInUp} className="text-center">
            <VStack gap={1}>
              <Title variant="h2" className="text-3xl md:text-5xl text-brand-500 font-black">
                {stat.value}
              </Title>
              <Text className="text-typography-400 font-bold uppercase tracking-widest text-xs">
                {stat.label}
              </Text>
            </VStack>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
