import { Hero } from "@/components/ui/landing-page/hero";
import { Features } from "@/components/ui/landing-page/features";
import { Pricing } from "@/components/ui/landing-page/pricing";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Pricing />
    </div>
  );
}
