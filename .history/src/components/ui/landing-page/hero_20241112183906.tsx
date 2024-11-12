"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Building2, DollarSign, ArrowRight, MapPin } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { AvatarStack } from "@/components/ui/avatar-stack";
import Image from "next/image";

export function Hero() {
  const demoRef = useRef<HTMLDivElement>(null);
  const [address, setAddress] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            element.style.animationPlayState = 'running';
          } else {
            element.style.animationPlayState = 'paused';
          }
        });
      },
      { threshold: 0.5 }
    );

    if (demoRef.current) {
      observer.observe(demoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="container mx-auto px-4 pt-32 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left content */}
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

        {/* Right side - Enhanced Demo sequence */}
        <div ref={demoRef} className="relative h-[580px] rounded-2xl overflow-hidden bg-gradient-to-br from-background to-muted shadow-2xl border border-border/50">
          <div className="demo-container">
            {/* Address Search Animation */}
            <div className="demo-address">
              <div className="flex items-center gap-2 bg-background/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-border/50">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">
                  1234 Innovation Drive, Silicon Valley, CA
                </span>
              </div>
            </div>
            
            {/* Analysis Status */}
            <div className="demo-analysis">
              <div className="flex flex-col items-center gap-3 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-border/50">
                <div className="h-8 w-8 rounded-full border-2 border-primary border-r-transparent animate-spin" />
                <div className="flex items-center gap-2">
                  <span className="font-medium text-primary">
                    Analyzing property details
                  </span>
                  <span className="animate-pulse">...</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  AI Model Processing
                </div>
              </div>
            </div>
            
            {/* House Image with Enhanced Effects */}
            <div className="demo-house">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
              <Image
                src="/f36168bb-cc3e-43da-8912-f5379ce8139f.jpeg"
                alt="Modern suburban house at twilight"
                fill
                priority
                className="object-cover rounded-xl transition-transform duration-1000 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={95}
              />
              <div className="demo-scan-line" />
              
              {/* AI Analysis Markers */}
              <div className="absolute inset-0 z-20">
                <div className="absolute top-1/4 left-1/4 animate-pulse">
                  <div className="h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                </div>
                <div className="absolute top-1/3 right-1/3 animate-pulse delay-300">
                  <div className="h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Result Card */}
            <div className="demo-result">
              <div className="space-y-6 bg-background/95 backdrop-blur-xl rounded-t-xl p-6 shadow-2xl border border-border/50">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground/80">
                      AI Valuation Result
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <p className="text-4xl font-bold text-primary tracking-tight">
                        $1,250,000
                      </p>
                      <div className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-medium">
                        +4.2% ↑
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-muted/50 border border-border/50 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="h-4 w-4 text-primary" />
                      <p className="text-sm font-medium text-foreground/80">Confidence</p>
                    </div>
                    <p className="font-semibold text-foreground">High (95%)</p>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/50 border border-border/50 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <p className="text-sm font-medium text-foreground/80">Size</p>
                    </div>
                    <p className="font-semibold text-foreground">2,400 sq ft</p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>AI Model Confidence: High</span>
                  </div>
                  <span>Updated just now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
