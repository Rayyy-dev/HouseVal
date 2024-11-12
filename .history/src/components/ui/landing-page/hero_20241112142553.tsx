"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Building2, DollarSign, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { AvatarStack } from "@/components/ui/avatar-stack";

export function Hero() {
  const [address, setAddress] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showPrediction, setShowPrediction] = useState(false);
  const [currentText, setCurrentText] = useState("");
  
  const demoAddress = "1234 Innovation Drive, Silicon Valley, CA";
  const predictionData = {
    price: "$1,250,000",
    change: "+4.2% from last year",
    confidence: "High (95%)",
    size: "2,400 sq ft",
    type: "Modern House"
  };

  useEffect(() => {
    if (isAnalyzing) {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= demoAddress.length) {
          setAddress(demoAddress.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setIsAnalyzing(false);
            setShowPrediction(true);
          }, 1500);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isAnalyzing]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnalyzing(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="container mx-auto px-4 pt-32 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="inline-block">
                Predict House{" "}
                <span className="relative inline-flex items-center">
                  <span className="relative z-10 bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent">
                    Prices
                  </span>
                  <div className="absolute inset-x-0 -bottom-2 h-3 bg-primary/10 blur-xl" />
                </span>
              </span>
              <br />
              <span className="bg-gradient-to-br from-foreground/90 to-foreground/70 bg-clip-text text-transparent mt-2 block">
                with AI Precision
              </span>
            </h1>
            <p className="text-xl text-muted-foreground/90 leading-relaxed max-w-2xl">
              Transform your real estate decisions with our advanced AI valuation model.
              Get instant, accurate property estimates powered by machine learning.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
              <Input 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter property address"
                className="pl-12 h-14 text-base rounded-xl border-border/50 bg-muted/50 hover:bg-muted/80 transition-colors"
              />
              {isAnalyzing && (
                <div className="absolute right-4 top-4">
                  <div className="h-5 w-5 rounded-full border-2 border-primary border-r-transparent animate-spin" />
                </div>
              )}
            </div>
            <Button 
              size="lg" 
              className="h-14 px-8 rounded-xl bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25 group"
              disabled={isAnalyzing}
            >
              Get Estimate
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="flex items-center gap-10">
            <AvatarStack />
            <div className="h-12 w-px bg-border/50" />
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">4.9</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="font-medium text-sm">Excellent Rating</div>
                <div className="text-xs text-muted-foreground">Based on 2,000+ reviews</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[580px] rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background to-primary/5" />
          
          <div className="relative h-full flex items-center justify-center p-8">
            {showPrediction ? (
              <div className="w-full max-w-md animate-fade-in">
                <div className="relative backdrop-blur-xl rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 animate-gradient-x" />
                  
                  <div className="relative bg-background/20 p-6 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-primary/10 ring-1 ring-primary/20">
                          <Building2 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{predictionData.type}</h3>
                          <p className="text-sm text-muted-foreground">{predictionData.size}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-primary/5 ring-1 ring-primary/10">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-primary" />
                            <span className="text-sm text-muted-foreground">Predicted Value</span>
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
                className={`relative transition-all duration-500 transform
                  ${isTransitioning ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}
                `}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 animate-gradient-x" />
                  
                  <div className="relative backdrop-blur-xl bg-background/20 p-5 border border-white/10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-primary/10 backdrop-blur-sm ring-1 ring-primary/20">
                          <Building2 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-base">{scenarios[currentScenario].type}</h3>
                          <p className="text-sm text-muted-foreground/80">{scenarios[currentScenario].beds}</p>
                        </div>
                      </div>
                      <div className="px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-medium">
                        {scenarios[currentScenario].change}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-white/5 ring-1 ring-white/10">
                        <p className="text-sm text-muted-foreground mb-1">Size</p>
                        <p className="font-medium">{scenarios[currentScenario].size}</p>
                      </div>
                      
                      <div className="p-4 rounded-xl bg-primary/5 ring-1 ring-primary/10">
                        <div className="flex items-center gap-2 mb-1">
                          <DollarSign className="h-4 w-4 text-primary" />
                          <p className="text-sm text-muted-foreground">Value</p>
                        </div>
                        <p className="font-semibold text-lg bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                          {scenarios[currentScenario].prediction}
                        </p>
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
