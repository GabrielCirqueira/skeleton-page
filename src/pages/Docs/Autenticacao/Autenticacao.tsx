import { Title, Text, Card, Callout, CodeBlock } from "@/components/ui";
import { VStack, Box, HStack } from "@/components/layout/Stack";
import { Key, RefreshCw, Lock, ArrowRight } from "lucide-react";
import { Button } from "@shadcn/components/button";
import { Link } from "react-router-dom";

export function Component() {
  return (
    <VStack gap={10} className="pb-20">
      <VStack gap={3}>
        <span className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Segurança
        </span>
        <Title
          variant="h1"
          id="autenticacao"
          className="text-3xl sm:text-4xl text-typography-950 dark:text-white"
        >
          Guia de <span className="text-brand-500">Autenticação</span>
        </Title>
        <Text variant="lg" className="text-typography-600 dark:text-typography-400 max-w-2xl">
          Sistema robusto baseado em JWT com algoritmo RS256 e rotação automática de tokens para
          garantir sessões seguras e experiência de usuário fluida.
        </Text>
      </VStack>

      <section id="tokens">
        <VStack gap={5}>
          <VStack gap={1}>
            <Title
              variant="h2"
              id="estrutura-tokens"
              className="text-2xl text-typography-950 dark:text-white"
            >
              Estrutura de Tokens
            </Title>
            <Text className="text-typography-600 dark:text-typography-400">
              Dois tipos de tokens garantem segurança sem prejudicar a experiência do usuário.
            </Text>
          </VStack>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <HStack gap={4} align="start">
                <Box className="size-10 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                  <Key className="size-5 text-brand-500" strokeWidth={2} />
                </Box>
                <VStack gap={1}>
                  <p className="text-sm font-semibold text-typography-950 dark:text-white">
                    Access Token
                  </p>
                  <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                    JWT RS256, duração de 1 hora. Armazenado apenas na memória JavaScript (Zustand).
                  </Text>
                </VStack>
              </HStack>
            </Card>
            <Card>
              <HStack gap={4} align="start">
                <Box className="size-10 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                  <RefreshCw className="size-5 text-brand-500" strokeWidth={2} />
                </Box>
                <VStack gap={1}>
                  <p className="text-sm font-semibold text-typography-950 dark:text-white">
                    Refresh Token
                  </p>
                  <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                    Persistente, duração de 30 dias. Armazenado no LocalStorage para restaurar a
                    sessão.
                  </Text>
                </VStack>
              </HStack>
            </Card>
          </div>
        </VStack>
      </section>

      <section id="interceptores">
        <VStack gap={5}>
          <VStack gap={1}>
            <Title
              variant="h2"
              id="axios-interceptors"
              className="text-2xl text-typography-950 dark:text-white"
            >
              Interceptores Axios
            </Title>
            <Text className="text-typography-600 dark:text-typography-400">
              A instância centralizada do Axios gerencia a fila de requisições concorrentes durante
              a renovação do token.
            </Text>
          </VStack>
          <Callout variant="info">
            Você nunca precisa tratar o erro 401 manualmente nos componentes. O interceptor cuida do
            refresh automático.
          </Callout>
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

      <section id="store">
        <VStack gap={5}>
          <VStack gap={1}>
            <Title
              variant="h2"
              id="zustand-store"
              className="text-2xl text-typography-950 dark:text-white"
            >
              Gestão de Estado (Zustand)
            </Title>
            <Text className="text-typography-600 dark:text-typography-400">
              O estado de autenticação é global e persistente. Se o usuário der F5, o Refresh Token
              recupera a sessão sem novo login.
            </Text>
          </VStack>
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

      <section id="seguranca">
        <VStack gap={5}>
          <Title
            variant="h2"
            id="firewall-symfony"
            className="text-2xl text-typography-950 dark:text-white"
          >
            Firewall Symfony
          </Title>
          <HStack
            gap={4}
            className="p-4 bg-background-800/30 dark:bg-background-900/50 border border-outline-100 dark:border-outline-900 rounded-lg"
          >
            <Box className="size-9 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
              <Lock className="size-4 text-brand-500" strokeWidth={2} />
            </Box>
            <VStack gap={0}>
              <p className="text-sm font-semibold text-typography-950 dark:text-white">
                Stateless: True
              </p>
              <Text variant="sm" className="text-typography-600 dark:text-typography-400">
                O backend não usa sessões PHP. Cada requisição é validada de forma isolada via{" "}
                <code className="text-brand-500 bg-brand-500/10 px-1 rounded text-xs">
                  Authorization: Bearer
                </code>
                .
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </section>

      <HStack
        justify="between"
        align="center"
        className="mt-4 p-6 rounded-xl bg-background-50 dark:bg-background-900 border border-outline-100 dark:border-outline-900"
      >
        <HStack gap={3} align="center">
          <Box className="size-9 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
            <ArrowRight className="size-4 text-brand-500" strokeWidth={2} />
          </Box>
          <VStack gap={0}>
            <p className="text-sm font-semibold text-typography-950 dark:text-white">Próximo</p>
            <p className="text-sm text-typography-600 dark:text-typography-400">
              Padrões de backend com Symfony 7.3
            </p>
          </VStack>
        </HStack>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="group border-outline-100 dark:border-outline-900 hover:border-brand-500/50"
        >
          <Link to="/docs/backend">
            Backend
            <ArrowRight className="ml-2 size-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </Button>
      </HStack>
    </VStack>
  );
}
