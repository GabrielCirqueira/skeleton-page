import { motion } from "framer-motion";
import { Title, Text } from "@/components/ui";
import { Card } from "@/components/ui/Card";
import { VStack, HStack, Box } from "@/components/layout/Stack";
import { X, Check, ArrowRight, Zap } from "lucide-react";
import { fadeInUp } from "@/utils/animacoes";

export function AntesDepois() {
  return (
    <VStack gap={12} className="py-24">
      <Title variant="h2" className="text-center text-typography-950 mb-4">
        O contraste é <span className="text-brand-500">gritante.</span>
      </Title>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Antes */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="border-error-500/10 bg-error-500/[0.02] opacity-60">
            <VStack gap={6}>
              <HStack gap={3} className="text-error-500">
                <X className="w-6 h-6" />
                <Title variant="h3">Sem o Catalyst</Title>
              </HStack>
              <VStack gap={4}>
                {[
                  "Configurar Docker e Ambientes",
                  "Implementar Autenticação JWT",
                  "Estruturar Pastas e Camadas",
                  "Configurar Linters e Formatters",
                  "Criar Migrations e CORS",
                  "Rate Limiting e Security Headers",
                ].map((item, i) => (
                  <HStack
                    key={i}
                    gap={4}
                    className="text-typography-400 line-through decoration-error-500/30"
                  >
                    <Box className="size-1.5 rounded-full bg-error-500/30" />
                    <Text>{item}</Text>
                  </HStack>
                ))}
              </VStack>
              <Box className="pt-4 border-t border-error-500/10">
                <Text
                  variant="sm"
                  className="font-bold text-error-500/50 uppercase tracking-widest text-center"
                >
                  Semanas perdidas em boilerplate
                </Text>
              </Box>
            </VStack>
          </Card>
        </motion.div>

        {/* Depois */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="border-brand-500/20 bg-brand-500/[0.03]">
            <div className="absolute -top-10 -right-10 size-40 bg-brand-500/10 blur-[60px] rounded-full" />
            <VStack gap={6}>
              <HStack gap={3} className="text-brand-500">
                <Check className="w-8 h-8" />
                <Title variant="h3">Com o Catalyst</Title>
              </HStack>
              <VStack gap={4}>
                <HStack
                  gap={4}
                  className="text-typography-950 font-bold p-3 bg-brand-500/10 rounded-lg border border-brand-500/20"
                >
                  <Zap className="w-5 h-5 text-brand-500 fill-brand-500" />
                  <Text className="text-typography-950">Dia 1: bash setup.sh</Text>
                </HStack>
                <HStack gap={4} className="text-brand-500 font-bold p-3">
                  <ArrowRight className="w-5 h-5" />
                  <Text className="text-brand-500">Código de Negócio Real</Text>
                </HStack>
                <Box className="h-32 flex items-center justify-center border-2 border-dashed border-brand-500/20 rounded-xl">
                  <Text className="text-brand-500/50 italic">
                    Foque no que traz valor para o seu cliente
                  </Text>
                </Box>
              </VStack>
              <Box className="pt-4 border-t border-brand-500/10">
                <Text
                  variant="sm"
                  className="font-bold text-brand-500 uppercase tracking-widest text-center"
                >
                  Production-ready em minutos
                </Text>
              </Box>
            </VStack>
          </Card>
        </motion.div>
      </div>
    </VStack>
  );
}
