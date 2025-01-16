import { Header } from "@/components/landing-page/sections/header";
import { Hero } from "@/components/landing-page/sections/hero";
import { Integrations } from "@/components/landing-page/sections/integrations";
import { Benefits } from "@/components/landing-page/sections/benefits";
import { HousingPredictor } from "@/components/landing-page/housing";
import { Solution } from "@/components/landing-page/sections/sol";
import { Footer } from "@/components/landing-page/sections/footer";

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
