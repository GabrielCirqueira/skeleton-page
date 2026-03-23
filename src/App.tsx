import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { DocLayout } from "@/components/layout/Docs/DocLayout";

// Páginas
import { Component as LandingPage } from "@/pages/LandingPage/LandingPage";
import { Component as Introducao } from "@/pages/Docs/Introducao/Introducao";
import { Component as Arquitetura } from "@/pages/Docs/Arquitetura/Arquitetura";
import { Component as Autenticacao } from "@/pages/Docs/Autenticacao/Autenticacao";
import { Component as Backend } from "@/pages/Docs/Backend/Backend";
import { Component as Frontend } from "@/pages/Docs/Frontend/Frontend";
import { Component as BancoDeDados } from "@/pages/Docs/BancoDeDados/BancoDeDados";
import { Component as Mensageria } from "@/pages/Docs/Mensageria/Mensageria";
import { Component as Qualidade } from "@/pages/Docs/Qualidade/Qualidade";
import { Component as DevOps } from "@/pages/Docs/DevOps/DevOps";
import { Component as Makefile } from "@/pages/Docs/Makefile/Makefile";
import { Component as Nomenclatura } from "@/pages/Docs/Nomenclatura/Nomenclatura";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Documentação com Layout Centralizado */}
        <Route
          path="/docs"
          element={
            <DocLayout>
              <Outlet />
            </DocLayout>
          }
        >
          <Route index element={<Introducao />} />
          <Route path="arquitetura" element={<Arquitetura />} />
          <Route path="autenticacao" element={<Autenticacao />} />
          <Route path="backend" element={<Backend />} />
          <Route path="frontend" element={<Frontend />} />
          <Route path="banco-de-dados" element={<BancoDeDados />} />
          <Route path="mensageria" element={<Mensageria />} />
          <Route path="qualidade" element={<Qualidade />} />
          <Route path="devops" element={<DevOps />} />
          <Route path="makefile" element={<Makefile />} />
          <Route path="nomenclatura" element={<Nomenclatura />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
