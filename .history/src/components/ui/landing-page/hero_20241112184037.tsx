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

        {/* Right side - Futuristic Demo sequence */}
        <div ref={demoRef} className="relative h-[580px] rounded-3xl overflow-hidden bg-gradient-to-br from-background via-background/95 to-muted/90 shadow-[0_0_40px_-15px] shadow-primary/20 border border-border/50 backdrop-blur-xl">
          <div className="demo-container">
            {/* Futuristic Grid Background */}
            <div className="absolute inset-0 grid-background opacity-30" />
            
            {/* Address Search Animation */}
            <div className="demo-address">
              <div className="flex items-center gap-3 bg-background/40 backdrop-blur-2xl rounded-2xl p-4 shadow-lg border border-border/30 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium text-foreground/80">
                  1234 Innovation Drive, Silicon Valley, CA
                </span>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5">
                  <div className="absolute inset-0 border-2 border-primary rounded-full animate-ping opacity-20" />
                  <div className="absolute inset-0 border-2 border-primary rounded-full animate-pulse" />
                </div>
              </div>
            </div>
            
            {/* Analysis Status with Neural Network Animation */}
            <div className="demo-analysis">
              <div className="flex flex-col items-center gap-4 bg-background/40 backdrop-blur-2xl rounded-2xl p-6 shadow-lg border border-border/30">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                  <div className="relative h-12 w-12 rounded-full border-2 border-primary flex items-center justify-center">
                    <div className="h-8 w-8 rounded-full border-2 border-primary border-dashed animate-spin-slow" />
                  </div>
                </div>
                <div className="space-y-2 text-center">
                  <div className="flex items-center gap-2 justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="font-medium bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                      AI Analysis in Progress
                    </span>
                    <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse delay-100" />
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="inline-block h-1 w-12 bg-primary/20 rounded-full overflow-hidden">
                      <span className="h-full w-full bg-primary block animate-progress" />
                    </span>
                    Processing Data
                  </div>
                </div>
              </div>
            </div>
            
            {/* House Image with Enhanced AI Analysis */}
            <div className="demo-house">
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
              <Image
                src="/f36168bb-cc3e-43da-8912-f5379ce8139f.jpeg"
                alt="Modern suburban house at twilight"
                fill
                priority
                className="object-cover rounded-2xl transition-all duration-1000 hover:scale-105 hover:brightness-110"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={95}
              />
              
              {/* AI Analysis Overlay */}
              <div className="absolute inset-0 z-20">
                {/* AI Detection Points */}
                {[
                  'top-1/4 left-1/4',
                  'top-1/3 right-1/3',
                  'bottom-1/3 left-1/2',
                  'bottom-1/4 right-1/4',
                ].map((position, index) => (
                  <div key={index} className={`absolute ${position} animate-pulse delay-${index * 200}`}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-md animate-ping" />
                      <div className="h-4 w-4 rounded-full bg-background/50 backdrop-blur-sm border border-primary/50 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Scanning Effect */}
                <div className="demo-scan-line" />
              </div>
            </div>
            
            {/* Enhanced Futuristic Result Card */}
            <div className="demo-result">
              <div className="space-y-6 bg-background/40 backdrop-blur-2xl rounded-t-2xl p-6 shadow-2xl border border-border/30">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-foreground/80">
                        AI Valuation Result
                      </h3>
                      <div className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary">
                        Real-time
                      </div>
                    </div>
                    <div className="flex items-baseline gap-3">
                      <p className="text-4xl font-bold bg-gradient-to-br from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                        $1,250,000
                      </p>
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-medium">
                        <span className="text-xs">▲</span>4.2%
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl transition-opacity group-hover:opacity-100 opacity-0" />
                    <div className="relative p-3 rounded-xl bg-primary/10 border border-primary/20 transition-colors group-hover:bg-primary/20">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: DollarSign, label: 'Confidence', value: 'High (95%)' },
                    { icon: MapPin, label: 'Size', value: '2,400 sq ft' }
                  ].map((item, index) => (
                    <div key={index} className="relative group overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      <div className="relative p-4 rounded-xl bg-muted/30 border border-border/30 backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <item.icon className="h-4 w-4 text-primary" />
                          <p className="text-sm font-medium text-foreground/70">{item.label}</p>
                        </div>
                        <p className="font-semibold text-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border/30 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-emerald-500/30 rounded-full blur-md animate-pulse" />
                      <div className="relative h-2 w-2 rounded-full bg-emerald-500" />
                    </div>
                    <span>AI Confidence: High</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary/50" />
                    <span>Updated just now</span>
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
