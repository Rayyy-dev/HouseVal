import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function Hero() {
  return (
    <header className="container mx-auto px-4 py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 -z-10" />
      
      <nav className="flex justify-between items-center mb-24">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg" />
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            HouseVal
          </div>
        </div>
        <div className="space-x-4">
          <Button variant="ghost" className="hover:bg-primary/5">Login</Button>
          <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
            Get Started
          </Button>
        </div>
      </nav>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI-Powered
            </span>
            {" "}House Price Predictions
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Make informed real estate decisions with our advanced machine learning model.
            Get accurate property valuations in seconds.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row">
            <Input 
              placeholder="Enter property address" 
              className="h-12 sm:min-w-[300px]"
            />
            <Button size="lg" className="h-12 bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Get Free Estimate
            </Button>
          </div>
          <div className="flex items-center gap-8 pt-4">
            <div className="flex -space-x-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-muted border-2 border-background" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by <span className="font-bold text-foreground">10,000+</span> real estate professionals
            </p>
          </div>
        </div>
        <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="absolute inset-0 bg-grid-white/10" />
        </div>
      </div>
    </header>
  );
}
