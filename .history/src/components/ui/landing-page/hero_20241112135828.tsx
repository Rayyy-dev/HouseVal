"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Building2, Search, LineChart, Home, DollarSign } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const scenarios = [
  {
    type: "Modern House",
    beds: "4 Bed, 3 Bath",
    size: "2,400 sq ft",
    prediction: "$520,000",
    change: "+5.2%",
    image: "/house1.jpg"
  },
  {
    type: "Suburban Home",
    beds: "3 Bed, 2 Bath",
    size: "1,800 sq ft",
    prediction: "$450,000",
    change: "+3.8%",
    image: "/house2.jpg"
  },
  {
    type: "Family House",
    beds: "5 Bed, 4 Bath",
    size: "3,200 sq ft",
    prediction: "$680,000",
    change: "+4.5%",
    image: "/house3.jpg"
  },
];

export function Hero() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentScenario((prev) => (prev + 1) % scenarios.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

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
          <div className={`absolute inset-0 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <Image
              src="/4b927c83-bc15-47ac-af33-8534b81a6ca9.jpeg"
              alt="Modern house"
              fill
              className="object-cover rounded-xl"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className={`bg-background/80 backdrop-blur-sm rounded-xl p-4 transform transition-all duration-300 ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Home className="h-5 w-5 text-primary" />
                    <span className="font-medium">{scenarios[currentScenario].type}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{scenarios[currentScenario].beds}</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Size</span>
                    <span className="font-medium">{scenarios[currentScenario].size}</span>
                  </div>
                  
                  <div className="h-px bg-border/50" />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <span className="font-medium">Predicted Value</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary">
                        {scenarios[currentScenario].prediction}
                      </div>
                      <div className="text-xs text-emerald-500">
                        {scenarios[currentScenario].change} from last year
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
