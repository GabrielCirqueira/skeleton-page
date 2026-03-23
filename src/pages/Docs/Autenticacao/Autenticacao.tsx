import { Title, Text, Badge, Card, Callout, CodeBlock } from "@/components/ui";
import { VStack, Box, HStack } from "@/components/layout/Stack";
import { Key, RefreshCw, Lock, ArrowRight } from "lucide-react";
import { Button } from "@shadcn/components/button";
import { Link } from "react-router-dom";

export function Component() {
  return (
    <VStack gap={12} className="pb-20">
      <VStack gap={4}>
        <Badge variant="brand">Segurança</Badge>
        <Title variant="h1" id="autenticacao" className="text-4xl md:text-5xl text-typography-950">
          Guia de <span className="text-brand-500">Autenticação</span>
        </Title>
        <Text variant="lg" className="text-typography-400 max-w-2xl">
          O Catalyst implementa um sistema de autenticação robusto baseado em JWT com o algoritmo
          RS256 e rotação automática de tokens.
        </Text>
      </VStack>

      {/* Estrutura de Tokens */}
      <section id="tokens">
        <VStack gap={6}>
          <Title variant="h2" id="estrutura-tokens" className="text-2xl text-typography-950 pt-8">
            Estrutura de Tokens
          </Title>
          <Text className="text-typography-400">
            Utilizamos dois tipos de tokens para garantir segurança e uma excelente UX (User
            Experience).
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-brand-500/10 bg-brand-500/[0.02]">
              <HStack gap={3} className="mb-4">
                <Key className="size-5 text-brand-500" />
                <Title variant="h4" className="text-typography-950">
                  Access Token
                </Title>
              </HStack>
              <VStack gap={2}>
                <Badge variant="info">JWT — RS256</Badge>
                <Text variant="sm" className="text-typography-400">
                  Duração: 1 Hora. Armazenado apenas na memória do JavaScript (Zustand).
                </Text>
              </VStack>
            </Card>
            <Card className="border-brand-500/10 bg-brand-500/[0.02]">
              <HStack gap={3} className="mb-4">
                <RefreshCw className="size-5 text-brand-500" />
                <Title variant="h4" className="text-typography-950">
                  Refresh Token
                </Title>
              </HStack>
              <VStack gap={2}>
                <Badge variant="success">Persistente</Badge>
                <Text variant="sm" className="text-typography-400">
                  Duração: 30 Dias. Armazenado no LocalStorage para restauração de sessão.
                </Text>
              </VStack>
            </Card>
          </div>
        </VStack>
      </section>

      {/* Interceptor Axios */}
      <section id="interceptores">
        <VStack gap={6}>
          <Title variant="h2" id="axios-interceptors" className="text-2xl text-typography-950 pt-8">
            Interceptores Axios
          </Title>
          <Callout variant="info">
            Você nunca precisa tratar o erro 401 manualmente nos seus componentes. O interceptor
            cuida do refresh automático.
          </Callout>
          <Text className="text-typography-400">
            A instância centralizada do Axios (`web/config/api.ts`) gerencia a fila de requisições
            concorrentes durante o processo de renovação do token.
          </Text>
          <CodeBlock
            language="typescript"
            title="web/config/api.ts"
            code={`api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const novoToken = await refreshAccessToken();
      return api(originalRequest);
    }
    return Promise.reject(error);
  }
);`}
          />
        </VStack>
      </section>

      {/* Auth Store */}
      <section id="store">
        <VStack gap={6}>
          <Title variant="h2" id="zustand-store" className="text-2xl text-typography-950 pt-8">
            Gestão de Estado (Zustand)
          </Title>
          <Text className="text-typography-400">
            O estado de autenticação é global e persistente. Se o usuário der F5, o Refresh Token é
            usado para recuperar a sessão sem novo login.
          </Text>
          <CodeBlock
            language="typescript"
            title="web/stores/useAuthStore.ts"
            code={`export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      usuario: null,
      token: null,
      autenticado: false,
      setAutenticado: (user, token) => set({ usuario: user, token, autenticado: true }),
      limpar: () => set({ usuario: null, token: null, autenticado: false }),
    }),
    { name: 'auth-storage' }
  )
);`}
          />
        </VStack>
      </section>

      {/* Firewall */}
      <section id="seguranca">
        <VStack gap={6}>
          <Title variant="h2" id="firewall-symfony" className="text-2xl text-typography-950 pt-8">
            Firewall Symfony
          </Title>
          <VStack gap={4} className="bg-background-950 p-6 rounded-2xl border border-outline-900">
            <HStack gap={3}>
              <Lock className="size-5 text-brand-500" />
              <Text className="text-typography-950 font-black">Stateless: True</Text>
            </HStack>
            <Text variant="sm" className="text-typography-400">
              O backend não usa sessões PHP tradidionais. Cada requisição é validada de forma
              isolada através do cabeçalho <code>Authorization: Bearer</code>.
            </Text>
          </VStack>
        </VStack>
      </section>

      {/* Próximos Passos */}
      <Box className="pt-12 mt-12 border-t border-outline-900/50">
        <HStack
          justify="between"
          className="items-center bg-brand-500/[0.03] p-8 rounded-3xl border border-brand-500/20"
        >
          <VStack gap={2}>
            <Title variant="h3" className="text-typography-950">
              Padrões de Backend
            </Title>
            <Text className="text-typography-400">
              Veja como estruturar seus Services e Controllers.
            </Text>
          </VStack>
          <Button asChild size="lg" className="group">
            <Link to="/docs/backend">
              Backend{" "}
              <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
}
