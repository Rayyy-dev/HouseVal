import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Building2, Search, LineChart, Home, DollarSign, ArrowRight } from "lucide-react";

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
        <div className="relative h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
          {/* Animated AI Prediction Visualization */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-md space-y-6 p-8">
              {/* House Card */}
              <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-lg animate-slide-in-right">
                <div className="flex items-center gap-3">
                  <Home className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">3 Bed, 2 Bath House</span>
                </div>
              </div>
              
              {/* Processing Animation */}
              <div className="flex items-center justify-center gap-2 animate-pulse">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div className="w-2 h-2 rounded-full bg-primary delay-100" />
                <div className="w-2 h-2 rounded-full bg-primary delay-200" />
              </div>
              
              {/* Price Prediction */}
              <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-lg animate-slide-in-left">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Predicted Value</span>
                  </div>
                  <span className="font-bold text-primary">$450,000</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <LineChart className="h-4 w-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    Based on 1,000+ similar properties
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
