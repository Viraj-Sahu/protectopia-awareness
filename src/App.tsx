
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Learn from "./pages/Learn";
import Tools from "./pages/Tools";
import Personas from "./pages/Personas";
import Resources from "./pages/Resources";
import Phishing from "./pages/learn/Phishing";
import SimSwap from "./pages/learn/SimSwap";
import Deepfake from "./pages/learn/Deepfake";
import PanMisuse from "./pages/learn/PanMisuse";
import Students from "./pages/personas/Students";
import Households from "./pages/personas/Households";
import Professionals from "./pages/personas/Professionals";
import Seniors from "./pages/personas/Seniors";
import CreditCheck from "./pages/tools/CreditCheck";
import CallerVerify from "./pages/tools/CallerVerify";
import PhishingSimulator from "./pages/tools/PhishingSimulator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/phishing" element={<Phishing />} />
          <Route path="/learn/sim-swap" element={<SimSwap />} />
          <Route path="/learn/deepfake" element={<Deepfake />} />
          <Route path="/learn/pan-misuse" element={<PanMisuse />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/credit-check" element={<CreditCheck />} />
          <Route path="/tools/caller-verify" element={<CallerVerify />} />
          <Route path="/tools/phishing-simulator" element={<PhishingSimulator />} />
          <Route path="/personas" element={<Personas />} />
          <Route path="/personas/students" element={<Students />} />
          <Route path="/personas/households" element={<Households />} />
          <Route path="/personas/professionals" element={<Professionals />} />
          <Route path="/personas/seniors" element={<Seniors />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
