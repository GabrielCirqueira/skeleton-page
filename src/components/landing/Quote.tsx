import { motion } from "framer-motion";
import { Title } from "@/components/ui";
import { VStack, Box } from "@/components/layout/Stack";
import { fadeInUp } from "@/utils/animacoes";
import { Quote as QuoteIcon } from "lucide-react";

export function Quote() {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-32 flex flex-col items-center text-center"
    >
      <Box className="size-16 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-500 mb-12">
        <QuoteIcon className="size-8 fill-brand-500/20" />
      </Box>
      <Title
        variant="h2"
        className="max-w-4xl text-2xl md:text-5xl text-typography-950 italic font-serif leading-tight px-4"
      >
        "O Catalyst Skeleton não é sobre dar o peixe, é sobre dar o{" "}
        <span className="text-brand-500">barco de pesca</span> de elite para você dominar o oceano
        SaaS."
      </Title>
      <Box className="mt-8 size-1 w-24 bg-brand-500/30 rounded-full" />
    </motion.div>
  );
}
