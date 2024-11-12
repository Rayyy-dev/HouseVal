"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Home, DollarSign, ArrowRight, Building2 } from "lucide-react";
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
        }, 300);
      }, 500);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="container mx-auto px-4 pt-32 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl font-bold leading-tight tracking-tight">
              Predict House{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent">
                  Prices
                </span>
                <div className="absolute -inset-1 bg-primary/10 blur-2xl rounded-2xl -z-10" />
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground/80 to-foreground">
                with AI Precision
              </span>
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
                </div>
                <div className="absolute inset-0 bg-primary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
              <div className="space-y-1">
                <div className="font-medium text-sm group-hover:text-primary transition-colors">
                  Excellent Rating
                </div>
                <div className="text-xs text-muted-foreground">
                  Based on 2,000+ reviews
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[580px]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-[2.5rem] blur-3xl opacity-60" />
          
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden group">
            <div 
              className={`absolute inset-0 transition-all duration-700 ease-out transform will-change-transform
                ${isTransitioning ? 'scale-105 blur-sm opacity-0' : 'scale-100 blur-0 opacity-100'}
              `}
            >
              <div className="relative w-full h-full">
                <Image
                  src={scenarios[currentScenario].image}
                  alt={`${scenarios[currentScenario].type}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIB4gHh4gIB4dHR0eHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div 
                className={`relative backdrop-blur-xl rounded-2xl transition-all duration-500
                  ${isTransitioning ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}
                `}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 pointer-events-none" />
                <div className="absolute inset-0 rounded-2xl bg-background/40" />
                
                <div className="relative p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-primary/10 backdrop-blur-sm">
                        <Building2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium text-lg">{scenarios[currentScenario].type}</span>
                        <div className="text-sm text-muted-foreground mt-0.5">
                          {scenarios[currentScenario].beds}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                      <div className="text-sm text-muted-foreground mb-1">Size</div>
                      <div className="font-medium">{scenarios[currentScenario].size}</div>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                      <div className="text-sm text-muted-foreground mb-1">Change</div>
                      <div className="font-medium text-emerald-500">{scenarios[currentScenario].change}</div>
                    </div>

                    <div className="p-4 rounded-xl bg-primary/5 backdrop-blur-sm col-span-2 border border-primary/10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-5 w-5 text-primary" />
                          <span className="text-sm text-muted-foreground">Predicted Value</span>
                        </div>
                        <div className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                          {scenarios[currentScenario].prediction}
                        </div>
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
