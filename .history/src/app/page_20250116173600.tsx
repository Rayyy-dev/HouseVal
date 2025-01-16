import { Header } from "@/components/ui/landing-page/header";
import { Hero } from "@/components/ui/landing-page/hero";
import { Integrations } from "@/components/ui/landing-page/integrations";
import { ProblemSolution } from "@/components/ui/landing-page/problem-solution";
import { Features } from "@/components/ui/landing-page/features";
import { Pricing } from "@/components/ui/landing-page/pricing";
import { Footer } from "@/components/ui/landing-page/footer";
import { HousingPredictor } from "@/components/ui/landing-page/housing-predictor";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Integrations />
      <ProblemSolution />
      <Features />
      <Pricing />
      
      <Footer />
    </div>
  );
}
