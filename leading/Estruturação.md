# 📌 Guia de Estrutura e Padrões do Sistema (Frontend)

Este documento define o padrão oficial de arquitetura, organização de pastas, nomenclatura e boas práticas do sistema para o Frontend.

---

## 1) Stack Oficial do Projeto

### Frontend

- **React 18** com **TypeScript**
- **Vite**
- **Axios**
- **Framer Motion**
- **Shadcn UI**

### DevOps (Frontend focus)

- **Docker** e **Docker Compose**
- **Apache 2.4** (para servir arquivos estáticos)

---

## 2) Padrão Geral do Projeto

### 2.1 Linguagem e nomenclatura

- **Tudo em português**
  - Pastas
  - Arquivos
  - Variáveis
  - Funções
  - Componentes
  - Services (Lógica de API)

- Nomes devem ser **autoexplicativos** e **descritivos**
- Evitar abreviações confusas
  - Exemplo ruim: `dados`, `info`, `resp`, `obj`, `tmp`
  - Exemplo bom: `usuarioAutenticado`, `filtroRelatorioConversao`, `respostaCadastroUsuario`

### 2.2 Comentários

- **Proibição de comentários**: O código deve ser escrito de forma clara o suficiente para dispensar comentários. Use nomes de variáveis, funções e componentes que expliquem o que o código faz.
- **Proibido**: Comentários explicativos (`//`, `/* ... */`, `{/* ... */}`) em qualquer parte do código (páginas, componentes, hooks, etc).
- **Exceção**: Apenas anotações básicas (DocBlocks) em métodos e funções de **Services** e **Utils** são permitidas para documentar parâmetros inusuais ou retornos complexos.

---

## 3) Frontend (React)

### 3.1 Localização do frontend

O frontend fica em:

```
./src
```

### 3.2 Estrutura de pastas padrão

Dentro de `./src`, o projeto é organizado assim:

```
App.tsx
assets/
components/
config/
services/
contexts/
hooks/
index.css
layouts/
main.tsx
pages/
routes/
shadcn/
types/
utils/
vite-env.d.ts
```

---

## 4) Regras de Rotas

### 4.1 Onde as rotas ficam

- As rotas são declaradas no **App.tsx**
- A pasta `routes/` contém as lógicas auxiliares de rota, principalmente:
  - controle de acesso
  - proteção de páginas
  - bloqueio de acesso sem login/permissão

### 4.2 Regra de permissão

Nenhuma página protegida pode ser acessada se:

- o usuário não estiver logado
- o usuário não tiver permissão

A lógica de permissão deve estar centralizada em `routes/`, e não espalhada em páginas.

---

## 5) Estrutura das Páginas

### 5.1 Onde ficam as páginas

Todas as páginas do sistema ficam em:

```
/src/pages
```

### 5.2 Padrão obrigatório por página

Cada página deve ser:

- **Uma pasta**
- Dentro da pasta, **um único arquivo `.tsx`**
- O arquivo deve ter o mesmo nome da página
- O componente principal deve ser exportado assim:

```tsx
export function Component() {
  return (...)
}
```

- **Zero Comentários**: O código deve ser autoexplicativo através de bons nomes de variáveis, funções e classes.
  - **Proibido**: Comentários explicativos (`//`, `/* ... */`, `{/* ... */}`).
  - **Exceção**: Apenas anotações básicas (DocBlocks) em métodos e funções de **Services** e **Utils** são permitidas para documentar parâmetros inusuais ou retornos complexos.
- **Formatação**: Utilize ferramentas de formatação automática (Prettier).

Exemplo de estrutura:

```
/src/pages
  /Usuarios
    Usuarios.tsx
  /Dashboard
    Dashboard.tsx
```

---

## 6) Hierarquia obrigatória de layout

### 6.1 Estrutura padrão de layout

Toda página **obrigatoriamente** segue essa hierarquia:

- `AppContainer` como container principal da página
- Dentro dele, `Container` para dividir seções

Padrão obrigatório:

```tsx
<AppContainer>
  <Container>Seção 1</Container>
  <Container>Seção 2</Container>
</AppContainer>
```

### 6.2 Regra de seções

- Cada `<Container>` representa uma **seção da página**
- Dentro de cada seção pode existir qualquer estrutura necessária (cards, tabelas, filtros, gráficos, etc.)

---

## 7) Componentização por Página

### 7.1 Quando dividir em componentes

Se a página estiver ficando grande demais, deve ser dividido em componentes.

A regra é:

- A página mantém a estrutura:
  - `AppContainer`
  - `Container` por seção

- O conteúdo grande dentro de um `Container` pode virar um componente separado

Exemplo:

```tsx
<Container>
  <ResumoUsuarios />
</Container>
```

### 7.2 Onde ficam componentes específicos de uma página

Componentes exclusivos de uma página devem ficar em:

```
/src/components/page/{nome-da-pagina}/
```

Exemplo:

```
/src/components/page/Usuarios/
  TabelaUsuarios.tsx
  FiltrosUsuarios.tsx
  ModalCadastroUsuario.tsx
```

### 7.3 Regra de nome dos componentes de página

Componentes de página devem ter nomes claros e descritivos:

✅ Bom:

- `TabelaUsuarios`
- `ModalCadastroUsuario`
- `FiltroRelatorioConversao`
- `ResumoCampanhasPorFilial`

❌ Ruim:

- `Card1`
- `Tabela`
- `Modal`
- `BoxInfo`
- `ComponentX`

---

## 8) Componentes Globais (Reutilizáveis)

Componentes que são usados em múltiplas páginas devem ficar em:

```
/src/components/{contexto}/
```

Exemplo:

```
/src/components/formulario/
  CampoTexto.tsx
  CampoSelect.tsx

/src/components/tabela/
  TabelaPadrao.tsx
  PaginacaoTabela.tsx
```

---

## 9) Regras de UI (obrigatórias)

### 9.1 Proibido usar tags HTML padrão

Não usar tags HTML diretamente como:

- `div`
- `span`
- `p`
- `h1`
- `button`
- etc.

### 9.2 Usar somente componentes do sistema

Sempre utilizar os componentes disponíveis em:

```
/src/shadcn/ (ou componentes globais)
```

Exemplos permitidos:

- `VStack`
- `HStack`
- `Box`
- `Text`
- `Title`
- `Button`
- `Spinner`
- `Icon`

### 9.3 Estilização obrigatória

- Todo estilo deve ser feito com:
  - `className`
  - **TailwindCSS**

- O sistema deve sempre manter:
  - transições
  - animações
  - sensação moderna e fluida

---

## 10) Regras de Animação

O sistema deve ter animações consistentes e agradáveis.

Biblioteca oficial:

- **Framer Motion**

Regras:

- evitar telas “secas” sem transição
- aplicar animações com bom senso (não exagerar)
- usar animações principalmente em:
  - entrada de seções
  - abertura de modais
  - carregamentos
  - troca de páginas

---

## 11) Regras de Requisições HTTP

### 11.1 Nunca chamar Axios direto na página

Requisições devem ser feitas usando **hooks**.

### 11.2 Axios centralizado

Todas as requisições devem usar a instância oficial:

- `api.ts` cria a `axiosInstance`
- `api.ts` contém interceptors
- `api.ts` injeta automaticamente o **Bearer Token**

Ou seja:

- hooks devem consumir `api.ts`
- não duplicar axios em outros lugares

---

## 12) Organização de lógica (Frontend)

### 12.1 Hooks

Toda requisição ao backend deve ser abstraída em hooks:

```
/src/hooks/
```

### 12.2 Services

Lógicas grandes, regras complexas ou fluxos completos devem ficar em:

```
/src/services/
```

Regras:

- apenas arquivos `.ts`
- não conter JSX
- conter lógica de negócio ou operações complexas (ex: tratamento de dados vindos da API)

### 12.3 Utils

Lógicas menores, helpers e formatadores devem ficar em:

```
/src/utils/
```

Regras:

- apenas arquivos `.ts`
- funções pequenas e reaproveitáveis

---

## 13) Lints e Qualidade

O projeto possui lints obrigatórios e devem ser usados diariamente.

### Frontend

```bash
make lint
```

---

## 14) Checklist de Pull Request (Foco Frontend)

Antes de abrir PR:

- [ ] Rode `make lint`
- [ ] Não existe HTML puro no frontend (somente shadcn ou componentes customizados padronizados)
- [ ] Página segue padrão `AppContainer -> Container`
- [ ] Hooks consumindo `api.ts`
- [ ] Lógicas grandes movidas para `services/`
- [ ] Helpers pequenos em `utils/`
- [ ] Visual agradável + transições + animações

---

## Referências oficiais (documentação)

Frontend:

- React 18: [https://react.dev/](https://react.dev/)
- Vite: [https://vitejs.dev/](https://vitejs.dev/)
- Axios: [https://axios-http.com/](https://axios-http.com/)
- Framer Motion: [https://www.framer.com/motion/](https://www.framer.com/motion/)
- shadcn/ui: [https://ui.shadcn.com/](https://ui.shadcn.com/)
- TailwindCSS: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

DevOps:

- Docker: [https://docs.docker.com/](https://docs.docker.com/)
- Docker Compose: [https://docs.docker.com/compose/](https://docs.docker.com/)
- Apache HTTP Server 2.4: [https://httpd.apache.org/docs/2.4/](https://httpd.apache.org/docs/2.4/)
