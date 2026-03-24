<!-- README do React Skeleton (template) -->

# React Skeleton

Este repositório é um esqueleto (skeleton) opinativo para iniciar projetos React modernos com Vite, TypeScript e Tailwind — pensado para ser usado como template/base em novos projetos.

Ele já vem com várias conveniências e boas práticas configuradas para acelerar o desenvolvimento e manter consistência entre projetos.

---

[![2025-11-25-11-24-54.png](https://i.postimg.cc/W3SnGShp/2025-11-25-11-24-54.png)](https://postimg.cc/G88GrFF6)

---

## 🚀 Visão geral

- **Stack**: React (18+/19), TypeScript, Vite, Tailwind CSS
- **Sistema de componentes locais** (`src/shadcn`) seguindo primitives de layout e tipografia
- **Ferramentas de qualidade**: ESLint (config flat), Prettier, Husky, lint-staged, commitlint
- **Conveniências devops/dev**: Makefile com targets úteis, scripts CLI para gerar componentes/páginas/ganchos
- **Estrutura modular** com exemplos de `pages`, `layouts` e componentes reutilizáveis
- **Sistema de tema** centralizado com ThemeProvider e cores padrão globais
- **Scripts de automação** para criação de páginas, limpeza de componentes não utilizados e análise de bundle

Este repositório foi projetado para ser copiado ou usado como base — você pode clonar e adaptar, ou transformar em um template de repositório (ex.: GitHub Template) para iniciar novos projetos a partir daqui.

---

## 📦 O que está incluído

### Estrutura de arquivos

```
├── cli/                          # Scripts de automação
│   ├── create-page.sh           # Cria novas páginas com rotas
│   ├── create-component.sh      # Cria componentes
│   ├── create-hook.sh           # Cria hooks customizados
│   ├── clean-shadcn.sh          # Remove componentes shadcn não utilizados
│   ├── analyze-bundle.sh        # Análise de tamanho do bundle
│   ├── check-deps.sh            # Verifica dependências desatualizadas
│   ├── generate-icons.sh        # Gera tipos para ícones Lucide
│   ├── git-stats.sh             # Estatísticas do repositório
│   └── health-check.sh          # Verificações de saúde do projeto
├── scripts/
│   └── normalize-classnames.cjs  # Normaliza classes Tailwind
├── src/
│   ├── contexts/
│   │   └── ThemeContext.tsx     # Provider de tema (light/dark)
│   ├── layouts/
│   │   ├── AppContainer.tsx     # Container principal da aplicação
│   │   └── MainLayout.tsx       # Layout base com navegação
│   ├── pages/
│   │   ├── Home/
│   │   │   └── Home.tsx         # Página inicial
│   │   ├── NotFound/
│   │   │   └── NotFound.tsx     # Página 404
│   │   └── index.ts             # Exports das páginas
│   ├── shadcn/
│   │   ├── components/ui/       # Componentes UI reutilizáveis
│   │   └── lib/utils.ts         # Funções utilitárias
│   ├── App.tsx                  # App principal com roteamento
│   ├── index.css                # Estilos globais + cores padrão
│   └── main.tsx                 # Ponto de entrada
├── .vscode/
│   └── settings.json            # Configurações do VS Code
├── tailwind.config.cjs          # Configuração Tailwind
├── tsconfig.json                # Configuração TypeScript
├── eslint.config.js             # Configuração ESLint
├── postcss.config.cjs           # Configuração PostCSS
├── vite.config.ts               # Configuração Vite
├── package.json                 # Dependências e scripts
└── Makefile                     # Comandos de automação
```

### Sistema de Tema

- **ThemeProvider** centralizado que gerencia tema light/dark
- **Cores padrão globais** definidas no `@layer base` do CSS
- **Persistência** do tema no localStorage
- **Cores padrão**: texto `gray-700` (light) / `gray-300` (dark), fundo `white` / `gray-950`

### Componentes Shadcn

- **60+ componentes** prontos para uso (Button, Card, Dialog, Form, etc.)
- **Sistema de design consistente** com tokens Tailwind
- **Script de limpeza** (`clean-shadcn.sh`) para remover componentes não utilizados
- **Organização modular** em `src/shadcn/components/ui/`

---

## 🏃‍♂️ Rápido começo (Quickstart)

### 1. Clone o repositório

```bash
git clone https://github.com/GabrielCirqueira/Catalyst-Skeleton my-app
cd my-app
```

### 2. Instale dependências

```bash
npm install
```

### 3. Inicie em modo desenvolvimento

```bash
npm run dev
```

### 4. Build de produção

```bash
npm run build
```

### 5. Lint / format

```bash
npm run lint
npm run format
```

---

## 🛠️ Como usar o sistema

### Sistema de Tema

O tema é gerenciado automaticamente. Para alternar entre light/dark:

```tsx
import { useTheme } from "@/contexts";

function MyComponent() {
  const { theme, toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Tema atual: {theme}</button>;
}
```

**Cores padrão globais**: Todo texto herda automaticamente `gray-700` no light e `gray-300` no dark. Fundo padrão: `white` / `gray-950`.

Para cores específicas (brand, estados especiais), use classes `dark:`:

```tsx
<p className="text-brand-600 dark:text-brand-400">Texto brand</p>
```

### Criando Páginas

Use o script CLI para criar páginas automaticamente:

```bash
# Página simples
./cli/create-page.sh About

# Página com rota específica
./cli/create-page.sh UserProfile /profile

# Modo interativo
./cli/create-page.sh
```

O script:

- Cria `src/pages/PageName/PageName.tsx` com template padrão
- Adiciona export em `src/pages/index.ts`
- Insere rota lazy em `src/App.tsx`

### Criando Componentes

```bash
./cli/create-component.sh MyButton
```

Cria componente em `src/shadcn/components/ui/my-button.tsx` com template básico.

### Criando Hooks

```bash
./cli/create-hook.sh useLocalStorage
```

Cria hook customizado em `src/hooks/use-local-storage.ts`.

### Sistema de Formatação

O projeto tem múltiplas camadas de formatação:

#### 1. Prettier (automático)

- Formatação automática ao salvar (VS Code)
- Scripts: `npm run format`, `npm run format:check`
- Configurado com `prettier-plugin-tailwindcss`

#### 2. Normalização de Classes (opcional)

- Remove espaços extras e duplicatas em `className`
- Executado automaticamente ao salvar (`.vscode/settings.json`)
- Script: `./scripts/normalize-classnames.cjs`
- Pula strings com template literals (`${...}`)

#### 3. ESLint + TypeScript

- Regras opinativas para qualidade de código
- Auto-fix ao salvar
- Scripts: `npm run lint`, `npm run lint:fix`

### Limpeza de Componentes Shadcn

Ao final do desenvolvimento, remova componentes não utilizados:

```bash
# Verificar o que seria removido (dry-run)
./cli/clean-shadcn.sh

# Remover componentes não utilizados
./cli/clean-shadcn.sh --yes

# Proteger componentes específicos
./cli/clean-shadcn.sh --keep button --keep card --yes
```

O script:

- Detecta imports `@shadcn/component`
- Move componentes não utilizados para `.shadcn-backup/`
- Preserva backup para restauração

### Análise de Bundle

```bash
./cli/analyze-bundle.sh
```

Analisa tamanho do bundle de produção e dependências.

### Outros Scripts Úteis

```bash
./cli/check-deps.sh          # Verifica dependências desatualizadas
./cli/generate-icons.sh      # Gera tipos para ícones Lucide
./cli/git-stats.sh           # Estatísticas do repositório
./cli/health-check.sh        # Verificações gerais de saúde
```

---

## 📋 Scripts do package.json

| Comando                | Descrição                        |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Servidor de desenvolvimento Vite |
| `npm run build`        | Build de produção                |
| `npm run preview`      | Preview do build                 |
| `npm run lint`         | Executa ESLint                   |
| `npm run lint:fix`     | Executa ESLint com auto-fix      |
| `npm run format`       | Formata com Prettier             |
| `npm run format:check` | Verifica formatação              |
| `npm run type-check`   | Verifica tipos TypeScript        |
| `npm run validate`     | Validações combinadas            |

---

## 🎨 Personalização

### Tailwind CSS

- Configure tokens em `tailwind.config.cjs`
- Cores padrão globais em `src/index.css` (`@layer base`)
- Adicione utilitários conforme seu design system

### Componentes

- `src/shadcn/components/ui/` contém componentes reutilizáveis
- Estenda ou modifique conforme seu design system
- Use o script `clean-shadcn.sh` para manter apenas o necessário

### Tipografia

- Componentes em `src/shadcn/components/ui/typography/`
- `Title`, `Text`, `Code`, `Span` etc.
- Configure tamanhos e pesos em `tailwind.config.cjs`

### Aliases TypeScript

- `@/` → `src/`
- `@layouts` → `src/layouts/`
- `@pages` → `src/pages/`
- `@shadcn` → `src/shadcn/`
- `@contexts` → `src/contexts/`

### Commit Hooks

- Husky + lint-staged garantem qualidade
- Commitlint padroniza mensagens
- ESLint e Prettier rodam automaticamente

---

## 🏗️ Estrutura recomendada

```
src/
├── components/          # Componentes específicos da aplicação
├── contexts/           # Contextos React (Theme, Auth, etc.)
├── hooks/              # Hooks customizados
├── layouts/            # Layouts e containers
├── pages/              # Páginas por rota
├── shadcn/             # Sistema de design (componentes base)
│   ├── components/ui/  # Componentes primitivos
│   └── lib/            # Utilitários
└── utils/              # Funções utilitárias
```

---

## 🔧 Desenvolvimento

### VS Code (recomendado)

- Instale extensão "Run on Save"
- Configurações já incluídas em `.vscode/settings.json`
- Formatação automática ao salvar
- Normalização de classes opcional

### Estrutura de commits

Seguimos Conventional Commits:

```
feat: add user authentication
fix: resolve button hover state
docs: update README
refactor: simplify component logic
```

### CI/CD

Pronto para integração com:

- GitHub Actions
- Azure Pipelines
- Outros providers

---

## 🤝 Como contribuir

### Melhorias sugeridas

- Novos componentes exemplares
- Templates de CI/CD
- Mais hooks utilitários
- Exemplos de testes
- Documentação adicional

### Processo

1. Fork o repositório
2. Crie uma branch: `git checkout -b feature/nova-feature`
3. Commit suas mudanças: `git commit -m 'feat: add nova feature'`
4. Push para a branch: `git push origin feature/nova-feature`
5. Abra um Pull Request

---

## 📄 Licença

Este projeto é distribuído sob a licença MIT — veja o arquivo `LICENSE` para os termos completos.

---

## ❓ FAQ

**P: Como adicionar novas cores ao tema?**
R: Edite `tailwind.config.cjs` na seção `colors` e use no `@layer base` de `src/index.css`.

**P: Os componentes shadcn são obrigatórios?**
R: Não, você pode removê-los com `./cli/clean-shadcn.sh --yes` e usar outros sistemas.

**P: Como desabilitar a normalização de classes?**
R: Remova a configuração `emeraldwalk.runonsave` do `.vscode/settings.json`.

**P: Como adicionar novas rotas?**
R: Use `./cli/create-page.sh` ou edite manualmente `src/App.tsx` e `src/pages/index.ts`.

---

_Template mantido por Gabriel Cirqueira - PRs e sugestões bem-vindas!_ 🚀
