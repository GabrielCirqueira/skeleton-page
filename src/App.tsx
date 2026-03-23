import { ThemeProvider } from "@/contexts";
import { MainLayout } from "@layouts";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Landing Page */}
      <Route path="/" lazy={() => import("@/pages/LandingPage/LandingPage")} />

      {/* Documentação */}
      <Route path="/docs">
        <Route index lazy={() => import("@/pages/Docs/Introducao/Introducao")} />
        <Route path="arquitetura" lazy={() => import("@/pages/Docs/Arquitetura/Arquitetura")} />
        <Route path="autenticacao" lazy={() => import("@/pages/Docs/Autenticacao/Autenticacao")} />
        <Route path="backend" lazy={() => import("@/pages/Docs/Backend/Backend")} />
        <Route path="frontend" lazy={() => import("@/pages/Docs/Frontend/Frontend")} />
        <Route
          path="banco-de-dados"
          lazy={() => import("@/pages/Docs/BancoDeDados/BancoDeDados")}
        />
        <Route path="mensageria" lazy={() => import("@/pages/Docs/Mensageria/Mensageria")} />
        <Route path="qualidade" lazy={() => import("@/pages/Docs/Qualidade/Qualidade")} />
        <Route path="devops" lazy={() => import("@/pages/Docs/DevOps/DevOps")} />
        <Route path="makefile" lazy={() => import("@/pages/Docs/Makefile/Makefile")} />
        <Route path="nomenclatura" lazy={() => import("@/pages/Docs/Nomenclatura/Nomenclatura")} />
      </Route>
    </>
  )
);

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
