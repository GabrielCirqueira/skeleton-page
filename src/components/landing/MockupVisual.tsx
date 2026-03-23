import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animacoes";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { HStack, VStack, Box } from "@/components/layout/Stack";

const codeExample = `// Entidade Domain-Driven
export class Usuario extends Entidade {
  constructor(
    private readonly nome: string,
    private readonly email: EmailVo
  ) {
    super();
  }

  public static criar(nome: string, email: string) {
    return new Result(new Usuario(nome, new EmailVo(email)));
  }
}`;

export function MockupVisual() {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative w-full max-w-4xl mx-auto mt-12 sm:mt-24 lg:mt-32 px-4"
    >
      <div className="absolute inset-0 bg-brand-500/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <Card className="p-0 border-outline-900 bg-background-950/80 backdrop-blur-xl shadow-2xl overflow-hidden">
        <HStack
          className="px-5 py-3 border-b border-outline-900 bg-background-900"
          justify="between"
        >
          <HStack gap={2}>
            <Box className="w-3 h-3 rounded-full bg-error-500/50" />
            <Box className="w-3 h-3 rounded-full bg-warning-500/50" />
            <Box className="w-3 h-3 rounded-full bg-success-500/50" />
          </HStack>
          <Text variant="xs" className="text-typography-400 font-mono">
            src/domain/entities/Usuario.ts
          </Text>
        </HStack>

        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="hidden md:block md:col-span-3 border-r border-outline-900 p-4 bg-background-950/50">
            <VStack gap={4}>
              <div className="h-4 w-full bg-outline-900 rounded-md animate-pulse" />
              <div className="h-4 w-3/4 bg-outline-900 rounded-md animate-pulse" />
              <div className="h-4 w-full bg-outline-900 rounded-md animate-pulse" />
              <div className="h-4 w-1/2 bg-outline-900 rounded-md animate-pulse" />
            </VStack>
          </div>
          <div className="col-span-1 md:col-span-9">
            <CodeBlock
              code={codeExample}
              language="typescript"
              className="m-0 border-0 rounded-none shadow-none"
            />
          </div>
        </div>

        <HStack
          className="px-5 py-3 border-t border-outline-900 bg-background-900"
          justify="end"
          gap={4}
        >
          <Badge variant="success">Testes Passando</Badge>
          <Badge variant="brand">V4.0.0 Stable</Badge>
        </HStack>
      </Card>
    </motion.div>
  );
}

import { Text } from "@/components/ui";
