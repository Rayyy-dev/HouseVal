import { Header } from "@/components/ui/landing-page/header";
import { Hero } from "@/components/ui/landing-page/hero";
import { Integrations } from "@/components/ui/landing-page/integrations";
import { Benefits } from "@/components/ui/landing-page/benefits";
import { HousingPredictor } from "@/components/ui/landing-page/housing-predictor";
import { Solution } from "@/components/ui/landing-page/solution";
import { Footer } from "@/components/ui/landing-page/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Integrations />
      <Benefits />
      <HousingPredictor />
      <Solution />
      <Footer />
    </div>
  );
}
