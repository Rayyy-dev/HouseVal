"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Home, DollarSign, ArrowRight } from "lucide-react";
import { AvatarStack } from "@/components/ui/avatar-stack";
import Image from "next/image";
import { useState, useEffect } from "react";

const scenarios = [
  {
    type: "Modern House",
    beds: "4 Bed, 3 Bath",
    size: "2,400 sq ft",
    prediction: "$520,000",
    change: "+5.2%",
    image: "/4b927c83-bc15-47ac-af33-8534b81a6ca9.jpeg"
  },
  {
    type: "Suburban Home",
    beds: "3 Bed, 2 Bath",
    size: "1,800 sq ft",
    prediction: "$450,000",
    change: "+3.8%",
    image: "/f36168bb-cc3e-43da-8912-f5379ce8139f.jpeg"
  },
  {
    type: "Family House",
    beds: "5 Bed, 4 Bath",
    size: "3,200 sq ft",
    prediction: "$680,000",
    change: "+4.5%",
    image: "/output (12).jpg"
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
        setTimeout(() => {
          setIsTransitioning(false);
        }, 200);
      }, 400);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="container mx-auto px-4 pt-32 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl font-bold leading-tight tracking-tight">
              Predict House 
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent">
                  Prices
                </span>
                <svg className="absolute -bottom-2 w-full" viewBox="0 0 318 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M317 11C217.5 11 118.5 11 1 11" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <br />with AI Precision
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Make informed real estate decisions with our advanced machine learning model.
              Get accurate property valuations in seconds.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Enter property address" 
                className="pl-12 h-14 text-base rounded-xl border-border/50 bg-muted/50 hover:bg-muted/80 transition-colors"
              />
            </div>
            <Button size="lg" className="h-14 px-8 rounded-xl bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25 group">
              Get Estimate
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="flex items-center gap-10">
            <AvatarStack />
            <div className="h-12 w-px bg-border/50" />
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20">
                  <span className="text-primary font-bold text-lg">4.9</span>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/20">
                <span className="text-primary font-bold text-lg">4.9</span>
              </div>
              <div className="space-y-0.5">
                <div className="text-sm font-medium group-hover:text-primary transition-colors">
                  Excellent Rating
                </div>
                <div className="text-xs text-muted-foreground">
                  Based on 2,000+ reviews
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[600px] rounded-2xl overflow-hidden">
          <div 
            className={`absolute inset-0 transition-all duration-500 ease-out transform ${
              isTransitioning ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
            }`}
          >
            <Image
              src={scenarios[currentScenario].image}
              alt={`${scenarios[currentScenario].type}`}
              fill
              className="object-cover rounded-xl"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent">
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
    </section>
  );
}
