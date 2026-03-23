# 🚀 Roadmap — Landing Page & Documentação do Catalyst Skeleton v4.0

> Site de apresentação e documentação completa do Catalyst Skeleton.  
> React 18 + TypeScript + Vite + TailwindCSS + Framer Motion + Shadcn UI.  
> Estrutura seguindo o guia oficial de padrões do projeto.

---

## Índice dos Tópicos

1. [Fundação Visual e Design System](#tópico-1--fundação-visual-e-design-system)
2. [Componentes Globais e Layout Base](#tópico-2--componentes-globais-e-layout-base)
3. [Landing Page — Hero e Apresentação Principal](#tópico-3--landing-page--hero-e-apresentação-principal)
4. [Landing Page — Diferenciais, Stack e Versões](#tópico-4--landing-page--diferenciais-stack-e-versões)
5. [Landing Page — CTA, Setup Rápido e Rodapé](#tópico-5--landing-page--cta-setup-rápido-e-rodapé)
6. [Layout da Documentação — Estrutura Navegável](#tópico-6--layout-da-documentação--estrutura-navegável)
7. [Páginas de Docs — Introdução, Arquitetura e Autenticação](#tópico-7--páginas-de-docs--introdução-arquitetura-e-autenticação)
8. [Páginas de Docs — Backend e Frontend](#tópico-8--páginas-de-docs--backend-e-frontend)
9. [Páginas de Docs — Infraestrutura, Qualidade e Referências](#tópico-9--páginas-de-docs--infraestrutura-qualidade-e-referências)
10. [Polimento Final, SEO e Deploy](#tópico-10--polimento-final-seo-e-deploy)

---

## TÓPICO 1 — Fundação Visual e Design System

Este é o ponto zero do projeto. Antes de criar qualquer página ou componente, toda a identidade visual precisa estar definida e documentada. Decisões tomadas aqui vão se refletir em cada detalhe do site — do espaçamento das fontes ao comportamento dos botões. Fazer isso no início evita inconsistências e retrabalho ao longo da construção.

### Identidade Visual e Direção Estética

O Catalyst Skeleton é uma ferramenta de engenharia séria, opinativa e técnica. A identidade visual deve transmitir exatamente isso: precisão, profissionalismo e modernidade. A estética escolhida é dark-first com acentos neon, inspirada em terminais e IDEs premium — a ferramenta que o desenvolvedor usa todos os dias. Nada de gradientes pastéis ou paletas genéricas de SaaS. A sensação deve ser a de abrir a documentação de uma ferramenta poderosa.

**Paleta de cores:** fundo quase-preto como base principal, superfícies ligeiramente mais claras para cards e painéis, verde esmeralda como cor de destaque principal para CTAs e elementos de sucesso, âmbar/dourado como acento secundário para badges e avisos, azul para links e elementos informativos. Bordas sutis, quase invisíveis, com efeito de glow verde em hover.

**Tipografia:** três fontes com papéis distintos. Uma fonte de exibição com personalidade forte — com serifa ou semi-serifa — para headings grandes e títulos de seção, algo que tenha caráter e não pareça genérico. Uma fonte sans-serif limpa e moderna para corpo de texto, parágrafos e UI em geral. Uma fonte monospace de alta legibilidade para blocos de código, comandos de terminal e labels técnicos. A combinação dessas três cria uma hierarquia visual clara e uma identidade inconfundível.

**Espaçamento e layout:** generoso nas páginas de documentação para facilitar leitura prolongada, mais denso e dramático na landing page para criar impacto visual. Grid de 12 colunas no desktop, empilhamento progressivo até mobile.

### Tokens no Tailwind

Todas as cores, fontes e espaçamentos customizados devem ser registrados no `tailwind.config.js` como extensões do tema. Isso garante que qualquer componente do projeto use os mesmos valores sem duplicação. Cores como `accent-green`, `bg-surface`, `bg-elevated` e `text-muted` estarão disponíveis como classes Tailwind em todo o projeto, sem nenhum valor hardcoded nos componentes.

### Estrutura de Pastas

A estrutura de pastas segue rigorosamente o guia oficial do projeto. Páginas em `src/pages/`, cada uma em sua própria pasta com um único arquivo `.tsx` exportando `function Component()`. Componentes globais em `src/components/{contexto}/`. Componentes específicos de página em `src/components/page/{nome-da-pagina}/`. Hooks em `src/hooks/`. Services em `src/services/`. Utils em `src/utils/`. Rotas declaradas no `App.tsx`, com lógica de proteção centralizada em `src/routes/`.

Antes de qualquer código, mapear todas as páginas que existirão no site — tanto da landing quanto da documentação — e criar a estrutura de pastas completa vazia. Isso cria o esqueleto do projeto e permite trabalhar com clareza sobre o que já foi feito e o que falta.

### Mapeamento de Rotas

Definir todas as rotas no `App.tsx` antes de começar as páginas. O site terá as seguintes rotas:

- `/` — Landing Page
- `/docs` — Introdução e Getting Started
- `/docs/arquitetura` — Arquitetura geral do skeleton
- `/docs/autenticacao` — JWT, RS256, fluxo de refresh
- `/docs/backend` — Entidade → DTO → Service → Serializer → Controller
- `/docs/frontend` — Features, Hooks, TanStack Query, Zustand
- `/docs/banco-de-dados` — UUID v7, Migrations, Paginação
- `/docs/mensageria` — Messenger, Scheduler, Outbox Pattern
- `/docs/qualidade` — PHPStan, PHPUnit, Biome, Conventional Commits
- `/docs/devops` — Docker, Nginx, SSL, deploy, observabilidade
- `/docs/makefile` — Todos os comandos Make e scripts CLI
- `/docs/nomenclatura` — Convenções de nomes e padrões de código

---

## TÓPICO 2 — Componentes Globais e Layout Base

Com o design system definido, o segundo passo é construir todos os componentes reutilizáveis antes de iniciar qualquer página. Esses componentes são os tijolos do projeto. Quanto mais sólidos e bem construídos forem, mais rápida e consistente será a construção de todo o resto. Pular essa etapa resulta em componentes duplicados e visuais inconsistentes entre páginas.

### Navbar

A navbar é o elemento de identidade mais persistente do site. Ela aparece em todas as páginas e precisa funcionar perfeitamente em todos os contextos — no topo da landing page sobre um background escuro, nas páginas de docs sobre o layout de documentação, e em mobile com menu colapsável.

O comportamento esperado: inicialmente transparente, adquirindo blur e borda sutil ao fazer scroll. Logo à esquerda com o nome do skeleton e badge da versão atual. Links de navegação no centro levando para as seções da landing e para a documentação. Botão de CTA à direita levando para `/docs`. Em mobile, os links somem e aparecem em um drawer animado que desliza da lateral.

### Footer

Presente tanto na landing quanto nas páginas de documentação. Três colunas: identidade do projeto com logo, tagline e versão; links rápidos das seções da documentação; links externos para GitHub, Symfony e React. Uma barra inferior com copyright e informação da stack utilizada. Visual com linha de separação superior usando gradiente sutil em verde.

### Bloco de Código

Um dos componentes mais importantes do site inteiro. Praticamente toda página de documentação exibirá dezenas de blocos de código em PHP, TypeScript, Bash e YAML. O componente precisa ter syntax highlight com tema escuro compatível com a paleta do site, label indicando a linguagem, título opcional descrevendo o que o bloco demonstra, botão de copiar com feedback visual — ícone que muda para "copiado" por alguns segundos — e animação de entrada ao aparecer na viewport.

### Callout

Caixas de aviso contextual para uso dentro das páginas de documentação. Quatro variantes com ícone e cor distintos: `info` em azul para informações adicionais, `tip` em verde para dicas e boas práticas, `warning` em âmbar para avisos de cuidado, e `danger` em vermelho para alertas críticos. Aparecerão com frequência nas páginas para destacar regras importantes, avisos de produção e boas práticas de arquitetura.

### Badge

Pílulas de texto para indicar versões, status de funcionalidades e categorias. Variantes em verde para estável e atual, âmbar para novo ou beta, cinza para legado, e azul para informativo. Usadas tanto na landing quanto na documentação.

### Card

Card com fundo de superfície, borda sutil e comportamento de hover com elevação e glow verde. Base para os cards de features, cards de tecnologia e cards de conteúdo da landing page.

### AppContainer e Container

Seguindo o padrão obrigatório do guia, o `AppContainer` é o wrapper principal de cada página e o `Container` representa uma seção individual. Toda página do site usará essa hierarquia obrigatória. Devem estar criados e prontos antes de iniciar qualquer página.

---

## TÓPICO 3 — Landing Page — Hero e Apresentação Principal

A landing page é a vitrine do Catalyst Skeleton. É onde um desenvolvedor que nunca ouviu falar do projeto vai chegar e decidir em menos de 10 segundos se vai continuar lendo ou fechar a aba. A hero section é responsável por essa decisão. Ela precisa comunicar o valor central do skeleton com clareza e impacto visual imediato, sem precisar de rolagem.

### Hero Section

Ocupa a viewport inteira. O objetivo é responder uma pergunta simples para o visitante: "o que é isso e por que eu deveria me importar?" A resposta precisa estar na hero, completa, sem rolagem.

**Badge de novidade** no topo, antes do heading principal — uma pílula animada anunciando o lançamento da versão atual. Cria senso de atualidade e chama a atenção antes mesmo do título.

**Heading principal** grande e impactante, escrito com a fonte de exibição em tamanho generoso. Deve comunicar o benefício central, não a descrição técnica. A diferença entre "Symfony 7.3 + React 19 skeleton" — uma descrição — e "O ponto de partida que você merecia desde o início" — um benefício — é enorme em termos de identificação emocional. O heading deve despertar identificação no desenvolvedor que já perdeu semanas configurando boilerplate antes de escrever a primeira linha de código de negócio.

**Subheading** logo abaixo, em fonte menor e cor secundária, traz a descrição técnica objetiva: stack utilizada, o que já vem configurado, e o resultado final de ter algo production-ready desde o primeiro commit.

**Dois botões de ação** — primário levando para a documentação e secundário levando para o GitHub. O botão primário é verde sólido com glow no hover; o secundário é ghost com ícone do GitHub.

**Pills de tecnologia** em linha abaixo dos botões: cada tecnologia principal da stack representada com nome em uma pílula discreta. Dá a visão rápida de tudo que está incluído sem precisar ler parágrafos.

**Mock de terminal animado** — o elemento mais memorável e impactante da hero. Um bloco estilizado imitando um terminal mostrando o output do `bash setup.sh`, com texto aparecendo linha por linha como se estivesse sendo executado em tempo real. As linhas mostram cada etapa do setup: personalizando projeto, gerando chaves JWT, configurando portas, subindo containers Docker, executando migrations, health check passou — e terminam com a mensagem de sucesso e a URL de acesso. Este elemento demonstra o valor central do skeleton de forma muito mais poderosa que qualquer parágrafo descritivo.

**Background decorativo** com elementos que criam profundidade e atmosfera: grid sutil de linhas imitando papel de engenharia, orbes de luz difusa nos cantos criando profundidade com cores do design system, e gradiente radial saindo do centro para as bordas.

### Seção de Números

Logo abaixo da hero, uma faixa horizontal com métricas do skeleton em números grandes. Quatro métricas: quantidade de bibliotecas pré-configuradas, quantidade de guias na documentação, layers da stack cobertas, e o fato de que o setup completo é feito com um único comando. Os números aparecem com animação de contagem progressiva ao entrar na viewport.

---

## TÓPICO 4 — Landing Page — Diferenciais, Stack e Versões

Após a hero capturar a atenção, as seções seguintes têm o papel de convencer. O desenvolvedor já entendeu superficialmente o que é o skeleton — agora precisa entender por que vale a pena usá-lo, o que exatamente está incluído, e se está bem mantido e atualizado.

### Seção de Diferenciais

O título deve ser direto e provocativo — algo que ressoe com a dor de quem já perdeu semanas configurando boilerplate antes de escrever a primeira linha de código de negócio real. "Tudo que você precisaria configurar. Já configurado." funciona bem.

Grid de cards apresentando os principais diferenciais do skeleton. Cada card tem ícone, título curto e descrição de duas a três linhas explicando o valor prático do diferencial. Os seis diferenciais a cobrir são:

**JWT RS256 pronto para uso:** access token de uma hora mais refresh de 30 dias, com renovação automática transparente e fila de requisições concorrentes já implementada — o fluxo mais trabalhoso de implementar do zero.

**Clean Architecture imposta pela estrutura:** a separação de camadas não é sugestão, é obrigação. Controller sem lógica, Service atômico, Resultado pattern, regras de negócio sempre na camada certa.

**Setup em um único comando:** `bash setup.sh` cuida de tudo autonomamente — Docker, migrations, geração do keypair JWT RS256, criação do `.env` com segredos únicos, e health check final.

**Frontend orientado a features:** React 19 com estrutura por domínio funcional — não por tipo de arquivo — TanStack Query, Zustand, Shadcn/UI e Framer Motion já integrados e configurados.

**Mensageria assíncrona incluída:** Symfony Messenger com transporte Doctrine, Scheduler nativo, Outbox Pattern para atomicidade, e workers gerenciados pelo Supervisor.

**Pipeline de qualidade do primeiro commit:** PHPStan nível 6, PHPUnit com suites separadas de Unit e Integration, Biome para lint e format do frontend, Husky com pre-commit hooks, e Commitlint para Conventional Commits.

Os cards devem ter comportamento de hover com elevação suave e glow na borda.

### Seção "Antes e Depois"

Uma seção de alto impacto mostrando o contraste entre iniciar um projeto sem o skeleton versus com ele. Dois blocos lado a lado.

O bloco "sem o skeleton" lista as semanas perdidas em configuração antes de chegar no código de negócio: configurar Docker, implementar JWT do zero, estruturar pastas, configurar linters e formatters, criar migrations base, configurar CORS e rate limiting, e só então: código de negócio. Visual com tom opaco e cores apagadas.

O bloco "com o skeleton" mostra o caminho real: dia 1, um comando de setup, código de negócio. Visual com tom verde e ícones de velocidade. O contraste deve ser quase cômico de tão gritante.

### Seção de Stack Completo

Título objetivo: "Stack completa. Zero decisões pendentes." Duas colunas lado a lado — Backend e Frontend — cada uma listando todas as bibliotecas incluídas com versão e papel no projeto. Visualmente rico, demonstra o escopo do que já vem configurado sem exigir que o desenvolvedor leia a documentação antes de saber o que está recebendo.

Esta seção é importante porque desenvolvedores que avaliam ferramentas querem saber exatamente com o que estão se comprometendo. A transparência total sobre a stack inteira — versão por versão — é um ponto de confiança e diferenciação.

### Seção de Versões

Linha do tempo visual das versões do skeleton, mostrando a evolução e maturidade do projeto. V1 em janeiro de 2025 como release inicial com Symfony 6.4 e React 18, V2 em junho com Shadcn UI e Lucide Icons, V3 em outubro com estabilização de Messenger e Workers, V4 em março de 2026 como a versão atual com Symfony 7.3 e React 19.

Demonstra maturidade, continuidade e comprometimento com o projeto. Um skeleton com histórico de quatro versões ao longo de mais de um ano inspira muito mais confiança do que um projeto sem histórico visível.

---

## TÓPICO 5 — Landing Page — CTA, Setup Rápido e Rodapé

A parte final da landing page tem um objetivo claro: converter. O visitante já entendeu o que é o skeleton, já se convenceu do valor — agora precisa de um caminho claro para começar. Esta seção não deve adicionar informação nova, mas facilitar a ação com o mínimo de fricção.

### Seção de Como Começar

Três passos numerados, visuais e extremamente simples. Cada passo em um card com número grande em fonte de exibição, título de uma linha e o comando necessário. Passo 1: clonar o repositório. Passo 2: executar o setup script. Passo 3: criar a primeira feature com o scaffolding. A mensagem central é que o caminho do zero ao desenvolvimento real é de exatamente três passos — e dois deles são de uma linha cada.

Dois botões de CTA abaixo dos três passos: primário levando para a documentação completa e secundário levando para o GitHub.

### Seção de Quote

Uma frase de efeito centralizada, em fonte de exibição grande e itálico, com aspas decorativas em verde. Deve sintetizar a filosofia do projeto de forma memorável em uma única linha. Serve como respiro visual entre o conteúdo denso e o footer, e deixa uma impressão final antes do visitante sair da landing.

### Revisão da Landing

Com todos os blocos da landing page construídos, fazer uma revisão completa de consistência visual e de mensagem. Os títulos de cada seção devem formar uma narrativa coerente quando lidos em sequência. O ritmo entre seções densas e seções de respiro deve estar equilibrado. Cada seção deve ter uma ação ou próximo passo implícito que leva o visitante para a próxima.

### Responsividade da Landing Page

Revisar toda a landing page nos breakpoints mais importantes: 320px para mobile pequeno, 375px para iPhone padrão, 768px para tablet, 1024px para laptop e 1440px para desktop amplo. Garantir que o hero mantém impacto mesmo em mobile, que o terminal animado não quebra em telas pequenas, que os grids de cards empilham corretamente, que os dois blocos de comparação ficam empilhados verticalmente em mobile, que a timeline de versões adapta para layout vertical em telas menores, e que nenhum texto fica pequeno demais ou grande demais em nenhum breakpoint.

---

## TÓPICO 6 — Layout da Documentação — Estrutura Navegável

O layout de documentação é uma experiência completamente diferente da landing page em quase tudo — propósito, densidade, comportamento e estrutura. Enquanto a landing é uma experiência de convencimento, a documentação é uma ferramenta de referência técnica que o desenvolvedor vai usar diariamente enquanto trabalha com o skeleton. O layout precisa facilitar leitura prolongada e navegação rápida entre seções.

### Estrutura de Três Colunas

O layout de documentação divide a tela em três zonas com funções distintas.

**Sidebar esquerda** com largura fixa: lista de navegação com todos os tópicos da documentação agrupados por categoria. Fica fixada verticalmente enquanto o conteúdo central rola. Em mobile, some completamente e é acessível por um botão que abre um drawer lateral animado com overlay escuro.

**Conteúdo central** com largura máxima controlada: onde o texto, blocos de código, tabelas e exemplos vivem. Largura máxima de leitura confortável — em torno de 768px — centralizado na área disponível entre as duas colunas laterais. Padding generoso nas laterais. Tipografia otimizada para leitura longa: tamanho de fonte adequado, altura de linha ampla, parágrafos bem espaçados.

**Table of Contents direita** com largura fixa: lista os headings H2 e H3 da página atual. O item correspondente à seção visível no momento é destacado automaticamente conforme o usuário rola. Em tablet, some para dar espaço ao conteúdo. Em mobile, idem.

### Sidebar de Navegação

Organizada em grupos temáticos com títulos de grupo discretos em caixa alta:

- **Começando:** Introdução, Setup Inicial
- **Backend:** Arquitetura, Entidades e DTOs, Services e Controllers, Autenticação JWT, Banco de Dados
- **Frontend:** Arquitetura Frontend, Mensageria Assíncrona
- **Infraestrutura:** Docker e DevOps, Makefile e Scripts
- **Qualidade:** Testes e QA, Nomenclatura e Padrões

O item correspondente à página atual tem destaque visual claro: texto verde, fundo levemente esverdeado e borda esquerda verde. Hover com translação horizontal suave. Esta navegação deve ser imediatamente legível e nunca confusa — o desenvolvedor precisa saber onde está e para onde pode ir a qualquer momento.

### Table of Contents

Lê os headings da página atual e gera a lista de âncoras. Monitora qual heading está visível na viewport e destaca o item correspondente na lista. Ao clicar em um item, rola suavemente até a âncora. Em páginas longas como Backend e Frontend, essa funcionalidade é essencial para navegar sem perder o contexto.

### Breadcrumb

Navegação de migalhas de pão acima do título de cada página de docs. Formato: `Documentação > Backend > Arquitetura`. Permite voltar rapidamente para categorias superiores. Componente simples mas importante para orientação espacial dentro de uma documentação com muitas páginas.

### Responsividade do Layout de Docs

Em tablet: sidebar some, Table of Contents some, conteúdo ocupa toda a largura disponível. Botão visível para abrir sidebar como drawer. Em mobile: comportamento idêntico ao tablet. O drawer da sidebar cobre a tela com overlay escuro ao abrir e fecha ao clicar fora ou no botão de fechar.

---

## TÓPICO 7 — Páginas de Docs — Introdução, Arquitetura e Autenticação

Com o layout de documentação funcionando, começa a construção do conteúdo. A ordem importa — as primeiras páginas são as mais visitadas e as que mais influenciam a primeira impressão da documentação como um todo. Introdução, Arquitetura e Autenticação são os três primeiros tópicos que qualquer desenvolvedor vai ler ao conhecer o skeleton.

### Página: Introdução

É a porta de entrada da documentação. Precisa responder rapidamente: o que é, o que já vem configurado, como começar, e onde ir depois. O tom é acolhedor mas direto — quem chega aqui já foi convencido pela landing e quer começar.

Esta página cobre: abertura com título e descrição do que é o Catalyst Skeleton e sua filosofia; tabela de pré-requisitos com ferramenta e comando de verificação; o comando de setup em destaque seguido dos nove passos do que o script faz — cada passo em card numerado com ícone e descrição clara; tabela de serviços e portas padrão com API, Frontend, MySQL e Supervisor; e uma seção de próximos passos com links para as páginas mais importantes, guiando o desenvolvedor pelo caminho natural de aprendizado.

Callout `tip` sobre a centralização de portas no `ports.env`. Callout `warning` sobre alterar o `APP_SECRET` antes de produção.

### Página: Arquitetura

Página densa e visual que explica como o skeleton está estruturado em ambas as camadas. É a página de visão geral — após lê-la, o desenvolvedor deve entender o "mapa" do projeto antes de mergulhar em cada área.

Esta página cobre: diagrama visual das camadas do backend mostrando o fluxo de uma requisição HTTP desde o Controller até a resposta JSON — cada camada representada como bloco com nome, responsabilidade e pasta no projeto; tabela de responsabilidades das camadas; explicação do Padrão Resultado com os métodos disponíveis e exemplos de uso no Service e no Controller; explicação do `KernelExceptionListener` e como ele intercepta exceções nas rotas de API para retornar JSON padronizado; estrutura de pastas do backend em formato tree com descrição de cada pasta; arquitetura frontend com a regra de decisão de onde colocar cada arquivo novo; estrutura de pastas do frontend; e as Regras de Ouro documentadas — Early Return com Guard Clauses ordenadas por custo de processamento, e o banimento do useEffect com as alternativas corretas.

### Página: Autenticação

Documentação do subsistema mais crítico do skeleton — o que mais demora para implementar do zero e que mais tem nuances de segurança. Desenvolvedores consultam esta página frequentemente, então ela precisa ser clara e completa.

Esta página cobre: visão geral dos dois tokens com tabela comparativa de bundle, TTL e forma de armazenamento; diagrama de sequência do fluxo completo de autenticação passando por login bem-sucedido, requisição com token, expiração, refresh automático, sucesso no refresh e falha no refresh; explicação do `useAuthStore` com os três métodos e como o `persist` funciona com localStorage; explicação do interceptor Axios com a fila de requisições concorrentes durante o refresh — este é o ponto mais complexo da implementação e merece explicação detalhada; tabela de configuração com as variáveis de ambiente JWT; lista dos endpoints públicos que não precisam de token; e tabela de rate limiting com os dois limitadores configurados.

---

## TÓPICO 8 — Páginas de Docs — Backend e Frontend

As duas páginas mais extensas de toda a documentação. São o coração técnico do site — onde um desenvolvedor vai passar horas lendo enquanto implementa features no dia a dia. O conteúdo precisa ser denso, preciso e muito bem organizado internamente com headings claros para a Table of Contents navegar.

### Página: Backend

Página longa cobrindo todos os padrões de implementação do backend. Cada seção é um elo da cadeia de criação de uma feature: Entidade → DTO → Repository → Service → Serializer → Controller. O desenvolvedor deve conseguir seguir essa sequência enquanto implementa algo novo.

**Seção de Entidades:** checklist obrigatório com cada item explicado individualmente — UUID v7 como PK, getters sem prefixo `get`, setters com prefixo `set` retornando `self`, campos `criadoEm` e `atualizadoEm` com `PreUpdate`, método estático `fromDTO`. Diferença entre entidades anêmicas e entidades com comportamento, com exemplo comparativo mostrando regra de negócio fora da entidade versus dentro dela. Proteção de invariantes nos setters com lançamento de exceção em vez de aceitar silenciosamente.

**Seção de Value Objects:** o que são e quando usar. Propriedades de imutabilidade e ausência de identidade própria. Exemplos práticos de campos que devem ser Value Objects: Email, CPF, Dinheiro, coordenadas.

**Seção de Enums:** regra de que todo campo com conjunto fechado de valores deve ser um Enum PHP. Comparativo entre `Assert\Choice` — proibido — e tipagem com Enum — correto. Exemplos: `StatusPedido`, `Sexo`, `TipoConta`, `Prioridade`.

**Seção de DTOs:** checklist completo com `final readonly class`, validações com `#[Assert\*]`, sem setters, getters sem prefixo `get`, e Enums no lugar de `Assert\Choice`.

**Seção de Repositories:** métodos típicos esperados, regra de que o `EntityManager` nunca vai direto no Service, e conversão obrigatória de UUID string para objeto nas queries Doctrine.

**Seção de Services:** padrão de nome obrigatório com Verbo mais Entidade mais Service, checklist com `final class`, construtor com injeção de dependências, método `executar()` como ponto de entrada, e zero lógica HTTP. Distinção entre Application Service — com acesso a infraestrutura como banco, HTTP e filas — e Domain Service — lógica pura sem I/O, testável sem mocks. Tabela de decisão de qual usar em cada situação.

**Seção de Serializers:** a regra de ouro do contrato de API — toda entidade retornada pela API passa por um Serializer, nunca retornar a entidade diretamente. Tabela de quando criar Serializer versus quando não precisar. Dois Serializers para a mesma entidade com campos diferentes quando os contextos exigirem.

**Seção de Controllers:** checklist completo com prefixo de rota obrigatório `/api/v1/`, `IsGranted` nas rotas protegidas, `MapRequestPayload` para DTOs, retorno sempre `JsonResponse`, e Lógica Zero como princípio central. Tabela de mapeamento de `DomainException` para status HTTP: 400 para dados inválidos, 404 para não encontrado, 409 para conflito, 401 para não autenticado, 403 para sem permissão, 422 para semanticamente inprocessável.

**Seção de Paginação:** padrão completo do Repository com Doctrine Paginator, passando pelo Service, pelo Controller, e chegando no formato JSON padronizado da resposta com `dados`, `pagina`, `porPagina`, `total` e `totalPaginas`.

**Seção de Domain Events:** quando usar, convenção de nome `{Entidade}{VerboPastTense}Event`, diferença prática entre EventDispatcher síncrono e Messenger assíncrono. Regra de que Services não chamam outros Services para efeitos colaterais — se a ação A causa B, usam-se eventos.

**Seção de Outbox Pattern:** o problema que resolve — atomicidade entre persistência no banco e dispatch de mensagem. Diagrama do fluxo com o flush atômico e o worker de publicação separado. Quando usar versus dispatch direto.

**Seção de Specification Pattern:** quando encapsular regras de negócio combináveis e reutilizáveis em vez de espalhar condicionais por múltiplos Services.

### Página: Frontend

Espelho do Backend na camada React. Igualmente densa, cobrindo todos os padrões que o desenvolvedor precisa seguir ao criar features no frontend.

**Seção de Estrutura de Features:** a regra de decisão de onde colocar arquivos novos. Feature com mais de dois arquivos relacionados fica em `features/{feature}/` com subpastas para `types.ts`, `api.ts`, `hooks/`, `components/` e `pages/`. Componente reutilizável vai para `components/{contexto}/`. Hook global vai para `hooks/`. Utility vai para `utils/`. A regra elimina a ambiguidade de "onde coloco isso?".

**Seção de Chamadas HTTP:** regra de que nenhuma página chama Axios diretamente. Toda requisição é abstraída em hook. Hooks consomem a `axiosInstance` de `api.ts`. Services em `services/` para lógicas maiores e fluxos complexos.

**Seção de Hooks:** padrão de hook com estado de carregamento, tratamento de erro interno, `toast.success()` e `toast.error()` dentro do hook e nunca no componente que o chama. Hook não recebe callbacks `onSuccess` ou `onError` como parâmetros.

**Seção de TanStack Query:** quando usar `useQuery` para dados de servidor com cache versus `useMutation` para ações de escrita. Invalidação de cache automática no `onSuccess` da mutation. Optimistic updates com rollback em caso de erro. Quando preferir TanStack Query em vez de `useState` com `useEffect`.

**Seção de Zustand:** um store por domínio, `useAuthStore` com middleware `persist` no localStorage, integração com o interceptor Axios para injeção automática do token. Regra de que Context continua sendo usado apenas para tema e internacionalização.

**Seção de Formulários:** React Hook Form com Zod como resolver. Schema Zod como fonte única de verdade da validação. Exibição de erros por campo. Por que não usar `useState` por campo com validação manual.

**Seção de Rotas e Proteção:** todas as rotas declaradas no `App.tsx`. Lógica de proteção centralizada em `routes/`, nunca espalhada nas páginas. Três tipos de acesso: pública, parcialmente protegida com estado bloqueado e CTA de login para ações, e totalmente protegida com redirecionamento.

**Seção de Regras de UI:** proibição de tags HTML padrão. Uso exclusivo dos componentes do sistema em `shadcn/`. Estilização via `className` com Tailwind. Animações com Framer Motion nas entradas de seção, abertura de modais, carregamentos e troca de páginas.

---

## TÓPICO 9 — Páginas de Docs — Infraestrutura, Qualidade e Referências

As páginas finais da documentação cobrem temas que desenvolvedores consultam com menos frequência mas que são críticos quando necessários: banco de dados, infraestrutura Docker, deploy em produção, qualidade de código e padrões de nomenclatura.

### Página: Banco de Dados

Esta página cobre três temas centrais de persistência no skeleton.

**UUID v7 como Primary Key:** por que UUID em vez de `INT AUTO_INCREMENT` — não vaza volume de dados, não permite enumeration attacks na URL, permite geração de ID no cliente antes da inserção. Por que v7 em vez de v4 — ordenável cronologicamente, adequado para índices B-tree sem fragmentação.

**Workflow de Migrations:** os quatro comandos em sequência: `diff` para gerar a migration a partir da diferença do schema, revisar o SQL gerado manualmente antes de aplicar, `migrate` para executar, e `rollback` para reverter em desenvolvimento. Ênfase na importância de sempre revisar o SQL gerado — migrations geram DDL real que vai para produção. Onde as migrations ficam no projeto e o formato do nome do arquivo.

**Paginação:** padrão completo do Repository com Doctrine Paginator até o Controller, com o formato JSON padronizado da resposta.

### Página: Mensageria

Esta página cobre o sistema de processamento assíncrono do skeleton.

**Symfony Messenger:** transporte padrão via Doctrine sem necessidade de Redis ou RabbitMQ para começar. Fluxo de criação de uma Message, criação do Handler, e dispatch no Service. Configuração de roteamento em `messenger.yaml`.

**Symfony Scheduler:** tarefas recorrentes nativas em `src/Schedule/` implementando `ScheduleInterface`. Uso de `RecurringMessage.cron()` para expressões cron e `RecurringMessage.every()` para intervalos regulares. Por que usar o Scheduler nativo em vez de crontabs no sistema operacional.

**Workers com Supervisor:** configuração em `supervisord.conf` com número de processos, `autostart`, `autorestart` e time-limit. Painel de controle do Supervisor para monitoramento dos workers. Como os workers ficam sempre ativos em produção.

**Outbox Pattern:** o problema que resolve — se o processo cair entre o `flush()` do banco e o `dispatch()` do Messenger, o evento é perdido silenciosamente. A solução de salvar o evento na mesma transação do dado principal e ter um worker separado publicando os eventos persistidos. Diagrama do fluxo. Quando usar versus dispatch direto — apenas quando o Messenger for crítico para o negócio.

**Domain Events:** diferença prática entre usar EventDispatcher para efeitos colaterais síncronos simples e Messenger para processamento pesado assíncrono. Convenção de nomes. Regra de que Services não chamam outros Services para efeitos colaterais.

### Página: Docker e DevOps

Esta página cobre toda a infraestrutura do skeleton, de desenvolvimento até produção.

**Multi-stage Dockerfile:** as quatro stages e o que cada uma adiciona — base com PHP e extensões, dev com Xdebug, builder com Composer instalando dependências sem dev, e prod copiando o vendor do builder sem Xdebug e com OPcache agressivo. Por que o multi-stage: a imagem de produção não tem ferramentas de desenvolvimento.

**Stack de desenvolvimento:** tabela de containers com serviço, imagem, porta e função. Como as portas são centralizadas no `ports.env` e como alterá-las sem conflito.

**Stack de produção:** diagrama da arquitetura completa — Internet entrando no Nginx com TLS, proxy reverso para PHP-FPM, conexão com MySQL, e Supervisor gerenciando os workers do Messenger em paralelo.

**Bootstrap script:** o que `docker/bootstrap.sh` faz ao iniciar o container — ajuste de permissões, geração das chaves JWT se não existirem, e validação do `APP_SECRET` em produção.

**Nginx de produção:** TLS 1.2 e 1.3 com certificados Let's Encrypt, HTTP/2 habilitado, cache agressivo de assets estáticos, proxy FastCGI para PHP-FPM, e headers de segurança — HSTS, `X-Content-Type-Options`, `X-Frame-Options`.

**Scripts DevOps:** tabela com todos os scripts em `devops/` — `deploy.sh`, `update.sh`, `backup.sh`, `monitor.sh`, `logs-dev.sh` e `logs-prod.sh` — com descrição de cada um.

**SSL com Certbot:** comandos para emissão inicial e renovação automática com crontab.

**Observabilidade:** Monolog com JSON estruturado em produção, Sentry instalado e desativado por padrão com instruções de ativação, Correlation ID para rastreamento de requests, e o endpoint de Health Check com o que ele verifica.

### Página: Makefile e Scripts

Página de referência rápida. Tabela completa de todos os comandos agrupados por categoria com descrição de uma linha cada:

**Containers:** `make up-d`, `make down`, `make restart`, `make logs`, `make bash-backend`.

**Instalação e Banco:** `make install`, `make migrate`, `make new-migration`, `make rollback`.

**Qualidade Backend:** `make phpstan`, `make phpcs`, `make phpcbf`, `make test`, `make test-unit`, `make test-integration`, `make qa`.

**Qualidade Frontend:** `make frontend-lint`, `make frontend-fix`, `make ts-check`.

**Build e Produção:** `make build`, `make deploy`, `make backup-db`, `make monitor`.

Documentação do script `cli/new-feature.sh`: o que ele pergunta, o que ele gera automaticamente no backend — Entidade, DTO, Service, Controller, Repository e Serializer — e no frontend — types, api, hook e páginas de listagem e criação.

### Página: Qualidade e Nomenclatura

**Qualidade — Backend:** PHPStan nível 6 com configuração em `phpstan.neon`. PHP_CodeSniffer com PSR-12 customizado em `phpcs.xml`. PHPUnit com suites separadas de Unit e Integration. O que cada suite deve conter e por quê.

**Qualidade — Frontend:** Biome unificando lint e format do frontend. TypeScript em modo strict. Husky executando Biome nos arquivos staged no pre-commit. Commitlint validando a mensagem de commit com Conventional Commits.

**Conventional Commits:** formato obrigatório, os tipos aceitos — `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `revert` — com exemplo de uso de cada tipo.

**Nomenclatura Backend:** tabela com PascalCase para classes, camelCase para métodos e variáveis, SCREAMING_SNAKE_CASE para constantes, e sufixos obrigatórios por tipo — Service, Controller, Repository, DTO, Event, Handler.

**Nomenclatura Frontend:** tabela com PascalCase para componentes, `use` mais PascalCase para hooks, camelCase para funções utilitárias, SCREAMING_SNAKE_CASE para constantes, e PascalCase para tipos e interfaces.

**Padrões de rota da API:** prefixo obrigatório `/api/v1/`, recursos no plural, verbos HTTP no lugar de verbos na URL, todos os endpoints cobertos pelo firewall JWT e pelo KernelExceptionListener.

**O código em português:** ADR explicando a decisão — domínio de negócio em português, sem tradução mental desnecessária, coerência nos nomes ao longo do tempo.

---

## TÓPICO 10 — Polimento Final, SEO e Deploy

Com todo o conteúdo construído, o tópico final é sobre transformar o site funcional em um produto de excelência. Esta fase não adiciona conteúdo — ela eleva a qualidade do que já existe. Animações, acessibilidade, performance e SEO fazem a diferença entre um site que parece feito às pressas e um que transmite o mesmo cuidado de engenharia que o skeleton promete.

### Revisão de Animações com Framer Motion

Percorrer todo o site e garantir que as animações estejam consistentes e presentes nos momentos certos.

Na landing page: stagger nas linhas do heading principal com delays entre cada linha, animação de contagem nos números de stats ao entrarem na viewport, entrada dos cards de features em cascata ao rolar, e o terminal animado com texto aparecendo linha a linha.

Na documentação: fade-in dos blocos de código ao entrar na viewport, transição suave entre páginas ao navegar, abertura e fechamento do drawer de sidebar em mobile.

Micro-interações em toda a interface: botão de copiar código trocando de ícone por dois segundos, links da sidebar com translação horizontal no hover, cards com elevação e glow no hover, botões com escala suave no hover e active.

Respeitar `prefers-reduced-motion`: se o usuário configurou preferência por movimento reduzido, todas as animações não essenciais devem ser desativadas.

### Busca na Documentação

Implementar busca client-side para filtrar os tópicos da documentação. Acionada por um campo de busca visível ou por atalho de teclado Cmd+K no Mac e Ctrl+K no Windows. O resultado filtra os itens da sidebar e exibe os matches em um overlay modal com destaque nos termos encontrados. A busca deve ser instantânea — sem delay perceptível — usando busca fuzzy para tolerar pequenos erros de digitação.

### SEO

Meta tags no `index.html` para o site em geral: título descritivo, description com 150 a 160 caracteres, og:title, og:description e og:image. Cada página de documentação define seu próprio título e description dinamicamente. Imagem OG estática de 1200x630 pixels com identidade visual do skeleton para compartilhamentos em redes sociais e Slack. `sitemap.xml` em `public/` com todas as rotas do site. `robots.txt` em `public/` permitindo indexação completa.

### Acessibilidade

Checklist mínimo obrigatório: todos os elementos interativos acessíveis via teclado com Tab e Enter, contraste mínimo de cores respeitado — 4.5:1 para texto normal e 3:1 para texto grande — `aria-label` em botões sem texto visível como o botão de copiar código, atributo `lang="pt-BR"` no elemento `<html>`, hierarquia correta de headings em todas as páginas sem pular níveis, e texto alternativo descritivo em todas as imagens.

### Performance

Todas as páginas de documentação carregadas com lazy loading para não impactar o tempo de carregamento inicial da landing page. Fontes carregadas com `font-display: swap` para evitar texto invisível durante o carregamento. Scroll restoration ao navegar entre páginas de docs — o scroll deve voltar ao topo ao trocar de página. Build de produção verificado localmente antes do deploy.

### Checklist Final Antes do Deploy

**Conteúdo:** todas as páginas com conteúdo completo e correto, nenhum placeholder ou TODO visível, todos os blocos de código exibindo corretamente com syntax highlight, todos os links internos funcionando.

**Visual:** animações funcionando em todos os pontos definidos, responsividade correta em 320px, 768px, 1024px e 1440px, consistência de cores e tipografia em todas as páginas, sidebar destacando a página correta, ToC destacando a seção visível.

**Performance (Lighthouse):** Performance igual ou acima de 90, Accessibility igual ou acima de 90, Best Practices igual ou acima de 90, SEO igual ou acima de 90.

**Deploy:** build de produção com `npm run build`, verificação local com `npm run preview`, configuração do redirect `/*` para `/index.html` no serviço de hospedagem para suportar o React Router em todas as rotas.

---

_Roadmap — Catalyst Skeleton v4.0.0 — Março 2026_
