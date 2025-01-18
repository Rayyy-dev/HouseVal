import { Header } from "@/components/landing-page/sections/header";
import { Hero } from "@/components/landing-page/sections/hero";
import { Integrations } from "@/components/landing-page/sections/integrations";
import { Benefits } from "@/components/landing-page/sections/benefits";
import { PricePredictor } from "@/components/landing-page/sections/price-predictor";
import { Solution } from "@/components/landing-page/sections/solution";
import { Footer } from "@/components/landing-page/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Integrations />
      <Benefits />
      <PricePredictor />
      <Solution />
      <Footer />
    </div>
  );
}
