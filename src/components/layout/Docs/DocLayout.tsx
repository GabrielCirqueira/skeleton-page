import React from "react";
import { AppContainer, Container } from "@/components/layout/Containers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DocSidebar } from "./DocSidebar";
import { DocTableOfContents } from "./DocTableOfContents";
import { DocBreadcrumb } from "./DocBreadcrumb";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/utils/animacoes";

export function DocLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <AppContainer className="bg-background-950 overflow-x-hidden min-h-screen">
      <Navbar />

      <Container className="pt-24 lg:pt-32 pb-20">
        <div className="flex gap-4 lg:gap-12 relative items-start">
          {/* Desktop Sidebar */}
          <DocSidebar className="hidden lg:block" />

          {/* Mobile Sidebar Trigger */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden fixed bottom-8 right-8 z-40 size-14 rounded-full bg-brand-500 text-background-950 shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
          >
            <Menu className="size-6" />
          </button>

          {/* Main Content Area */}
          <main className="flex-1 w-full max-w-[800px] min-w-0">
            <DocBreadcrumb />
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              key={window.location.pathname}
            >
              {children}
            </motion.div>
          </main>

          {/* Table of Contents */}
          <DocTableOfContents />
        </div>
      </Container>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-background-950 z-[70] lg:hidden border-r border-outline-900 shadow-2xl overflow-y-auto px-6"
            >
              <div className="pt-8 pb-4 border-b border-outline-900 mb-4 flex items-center justify-between">
                <span className="text-xl font-black text-typography-950">Menu Docs</span>
                <button onClick={() => setIsSidebarOpen(false)} className="text-typography-400">
                  <X className="size-6" />
                </button>
              </div>
              <DocSidebar className="w-full h-auto overflow-visible pr-0" />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </AppContainer>
  );
}
