import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import LoadingScreen from "@/components/LoadingScreen";
import CursorEffect from "@/components/CursorEffect";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// Get the base path for GitHub Pages
const basePath = import.meta.env.PROD ? "/My_Portfolio" : "";

function AppRouter() {
  return (
    <Router base={basePath}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <div className="min-h-screen bg-background text-foreground">
            <AnimatePresence mode="wait">
              {isLoading ? (
                <LoadingScreen
                  key="loading"
                  onComplete={() => setIsLoading(false)}
                />
              ) : (
                <div key="app">
                  <CursorEffect />
                  <Navigation />
                  <AppRouter />
                  <Toaster />
                </div>
              )}
            </AnimatePresence>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
