"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Building2, DollarSign, ArrowRight, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { AvatarStack } from "@/components/ui/avatar-stack";
import Image from "next/image";

export function Hero() {
  const [address, setAddress] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showPrediction, setShowPrediction] = useState(false);
  const [showImage, setShowImage] = useState(false);
  
  const demoAddress = "1234 Innovation Drive, Silicon Valley, CA";
  const predictionData = {
    price: "$1,250,000",
    change: "+4.2% from last year",
    confidence: "High (95%)",
    size: "2,400 sq ft",
    type: "Modern House",
    image: "/modern-house.jpg"
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
            setShowImage(true);
            setTimeout(() => {
              setIsAnalyzing(false);
              setShowPrediction(true);
            }, 1000);
          }, 500);
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
                <span className="relative inline-flex items-center">
                  <span className="relative z-10 bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent">
                    Predict House Prices
                  </span>
                  <div className="absolute inset-x-0 -bottom-2 h-3 bg-primary/10 blur-xl" />
                </span>
              </span>
              <br />
              <span className="text-5xl sm:text-6xl bg-gradient-to-br from-foreground via-foreground to-foreground/90 bg-clip-text text-transparent mt-4 block animate-text-glow">
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
            {showImage && (
              <div className="absolute inset-0 animate-image-analysis">
                <Image
                  src="/f36168bb-cc3e-43da-8912-f5379ce8139f.jpeg"
                  alt="Modern House"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
              </div>
            )}
            
            {showPrediction ? (
              <div className="w-full max-w-md animate-card-float">
                <div className="relative backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl">
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
                          </div>
                          <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500">
                            {predictionData.change}
                          </span>
                        </div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                          {predictionData.price}
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-white/5 ring-1 ring-white/10">
                        <p className="text-sm text-muted-foreground mb-1">AI Confidence</p>
                        <p className="font-medium">{predictionData.confidence}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 backdrop-blur-sm mb-4">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground animate-address-typing">
                    {isAnalyzing ? address : 'Enter your property address to get started'}
                  </span>
                </div>
                {isAnalyzing && (
                  <div className="space-y-2 animate-fade-in">
                    <div className="text-lg font-medium text-muted-foreground">
                      Analyzing property data...
                    </div>
                    <div className="text-sm text-muted-foreground/80">
                      Using AI to evaluate market conditions
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
