import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Building2, Search } from "lucide-react";

export function Hero() {
  return (
    <header className="container mx-auto px-4 py-20">
      <nav className="flex justify-between items-center mb-20">
        <div className="flex items-center gap-2">
          <Building2 className="h-8 w-8 text-primary" />
          <div className="text-2xl font-bold text-primary">HouseVal</div>
        </div>
        <div className="space-x-4">
          <Button variant="ghost">Login</Button>
          <Button>Get Started</Button>
        </div>
      </nav>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">
              Predict House Prices with{" "}
              <span className="text-primary">AI Precision</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Make informed real estate decisions with our advanced machine learning model.
              Get accurate property valuations in seconds.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Enter property address" 
                className="pl-10 h-12"
              />
            </div>
            <Button size="lg" className="h-12">
              Get Estimate
            </Button>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-3">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full border-2 border-background bg-muted"
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                10k+ Users
              </span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold">4.9</span>
              </div>
              <span className="text-sm text-muted-foreground">
                Rating
              </span>
            </div>
          </div>
        </div>
        <div className="relative h-[500px] rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
        </div>
      </div>
    </header>
  );
}
