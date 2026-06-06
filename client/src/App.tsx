import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Tos from "@/pages/tos";
import AIProductManager from "@/pages/ai-product-manager";
import IntelligenceAgentsLanding from "@/pages/IntelligenceAgentsLanding";
import LegalAgentsLanding from "@/pages/LegalAgentsLanding";
import HeadhuntingScopingV2 from "@/pages/headhunting-scoping-v2";
import PrivacyPolicy from "@/pages/privacy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/ai-agents-for-headhunting-professionals" component={IntelligenceAgentsLanding} />
      <Route path="/hong-kong-legal-agents" component={LegalAgentsLanding} />
      <Route path="/ai-agents-for-hong-kong-law-firms" component={LegalAgentsLanding} />
      <Route path="/terms-of-services" component={Tos} />
      <Route path="/privacy-policy" component={PrivacyPolicy } />
      <Route path="/ai-product-manager" component={AIProductManager} />
      <Route path="/intel-agent-scoping-v2" component={HeadhuntingScopingV2} />
      <Route path="/:rest*" component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
