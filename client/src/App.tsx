import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Museu from "./pages/Museu";
import AcervoDigital from "./pages/AcervoDigital";
import Historia from "./pages/Historia";
import HistoriaOral from "./pages/HistoriaOral";
import HistoriaEscrita from "./pages/HistoriaEscrita";
import Capela from "./pages/Capela";
import Videos from "./pages/Videos";
import Publicacoes from "./pages/Publicacoes";
import Arquivo from "./pages/Arquivo";
import Biblioteca from "./pages/Biblioteca";
import Composicao from "./pages/Composicao";
import Exposicoes from "./pages/Exposicoes";
import Visitacoes from "./pages/Visitacoes";
import Pesquisa from "./pages/Pesquisa";
import Atribuicoes from "./pages/Atribuicoes";
import Eventos from "./pages/Eventos";

function AppRoutes() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/museu"} component={Museu} />
      <Route path={"/acervo-digital"} component={AcervoDigital} />
      <Route path={"/historia"} component={Historia} />
      <Route path={"/historia-oral"} component={HistoriaOral} />
      <Route path={"/historia-escrita"} component={HistoriaEscrita} />
      <Route path={"/capela"} component={Capela} />
      <Route path={"/videos"} component={Videos} />
      <Route path={"/publicacoes"} component={Publicacoes} />
      <Route path={"/arquivo"} component={Arquivo} />
      <Route path={"/biblioteca"} component={Biblioteca} />
      <Route path={"/composicao"} component={Composicao} />
      <Route path={"/exposicoes"} component={Exposicoes} />
      <Route path={"/visitacoes"} component={Visitacoes} />
      <Route path={"/pesquisa"} component={Pesquisa} />
      <Route path={"/atribuicoes"} component={Atribuicoes} />
      <Route path={"/eventos"} component={Eventos} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <div className="museu-tjsc-app">
            <Toaster />
            <Router hook={useHashLocation}>
              <AppRoutes />
            </Router>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
