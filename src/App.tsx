import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Residencial from "./pages/Residencial";
import ComerciosIndustrias from "./pages/ComerciosIndustrias";
import Metodologia from "./pages/Metodologia";
import Obras from "./pages/Obras";
import Calculadora from "./pages/Calculadora";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const base = import.meta.env.BASE_URL.replace(/\/$/, "");
const basename = base && window.location.pathname.startsWith(base) ? base : "/";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/residencial" element={<Residencial />} />
          <Route path="/comercios-e-industrias" element={<ComerciosIndustrias />} />
          <Route path="/metodologia" element={<Metodologia />} />
          <Route path="/obras" element={<Obras />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
