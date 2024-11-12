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
  const [demoAddress, setDemoAddress] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [animationStage, setAnimationStage] = useState<'typing' | 'analyzing' | 'scanning' | 'results'>('typing');
  const [showMarkers, setShowMarkers] = useState(false);

  // Improved typing animation
  useEffect(() => {
    if (animationStage === 'typing') {
      const fullAddress = "1234 Innovation Drive, Silicon Valley, CA";
      let index = 0;
      
      const typingInterval = setInterval(() => {
        if (index <= fullAddress.length) {
          setDemoAddress(fullAddress.slice(0, index));
          index++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => setAnimationStage('analyzing'), 500);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [animationStage]);

  // Control animation sequence
  useEffect(() => {
    const sequence = async () => {
      // Reset sequence
      setAnimationStage('typing');
      setShowMarkers(false);
      setDemoAddress("");
      
      // Typing happens in its own effect
      
      // Analysis stage is triggered after typing
      if (animationStage === 'analyzing') {
        await new Promise(resolve => setTimeout(resolve, 2500));
        setAnimationStage('scanning');
      }
      
      // Scanning stage
      if (animationStage === 'scanning') {
        await new Promise(resolve => setTimeout(resolve, 2000));
        setAnimationStage('results');
        // Reveal markers sequentially after scan
        setTimeout(() => setShowMarkers(true), 500);
      }
      
      // Reset after showing results
      if (animationStage === 'results') {
        await new Promise(resolve => setTimeout(resolve, 5000));
        sequence();
      }
    };

    sequence();
    
    return () => {
      setAnimationStage('typing');
      setShowMarkers(false);
      setDemoAddress("");
    };
  }, [animationStage]);

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
                    Predict House Prices with AI Precision
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

        {/* Right side - Updated Demo sequence */}
        <div ref={demoRef} className="relative h-[580px] rounded-3xl overflow-hidden bg-gradient-to-br from-background via-background/95 to-muted/90 shadow-[0_0_40px_-15px] shadow-primary/20 border border-border/50 backdrop-blur-xl">
          <div className="demo-container">
            {/* Futuristic Grid Background */}
            <div className="absolute inset-0 grid-background opacity-30" />
            
            {/* Address Search Animation - Only show during typing stage */}
            {animationStage === 'typing' && (
              <div className="demo-address animate-fade-in">
                <div className="flex items-center gap-3 bg-background/40 backdrop-blur-2xl rounded-2xl p-4 shadow-lg border border-border/30 relative overflow-hidden group">
                  <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium text-foreground/80">
                    {demoAddress}
                    <span className="border-r-2 border-primary animate-blink-caret" />
                  </span>
                </div>
              </div>
            )}
            
            {/* Analysis Status - Only show during analyzing stage */}
            {animationStage === 'analyzing' && (
              <div className="demo-analysis animate-fade-in">
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
            )}
            
            {/* House Image with Smart AI Analysis Markers */}
            {(animationStage === 'scanning' || animationStage === 'results') && (
              <div className="demo-house animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
                <Image
                  src="/f36168bb-cc3e-43da-8912-f5379ce8139f.jpeg"
                  alt="Modern suburban house at twilight"
                  fill
                  priority
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={95}
                />
                
                {/* Scanning Effect - Only show during scanning stage */}
                {animationStage === 'scanning' && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent blur-sm animate-scan-line" />
                  </div>
                )}

                {/* Smart AI Analysis Markers - Only show after scanning */}
                {showMarkers && (
                  <div className="absolute inset-0 z-20">
                    {/* Markers appear sequentially */}
                    <div className="animate-fade-in-delay-1">
                      {/* Price Estimation Marker */}
                      <div className="absolute top-1/4 left-1/4 group">
                        <div className="relative">
                          {/* Marker Pulse Effect */}
                          <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl animate-pulse" />
                          
                          {/* Marker Point */}
                          <div className="relative h-4 w-4 rounded-full bg-background/80 backdrop-blur-sm border-2 border-primary flex items-center justify-center">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          </div>
                          
                          {/* Info Popup */}
                          <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                            <div className="bg-background/80 backdrop-blur-xl rounded-xl p-3 shadow-2xl border border-border/50 whitespace-nowrap">
                              <div className="flex items-center gap-2 mb-1">
                                <DollarSign className="h-4 w-4 text-primary" />
                                <p className="text-sm font-medium text-foreground/70">Estimated Value</p>
                              </div>
                              <p className="text-lg font-bold text-primary">$1,250,000</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="animate-fade-in-delay-2">
                      {/* Property Size Marker */}
                      <div className="absolute bottom-1/3 right-1/4 group">
                        <div className="relative">
                          <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl animate-pulse delay-300" />
                          <div className="relative h-4 w-4 rounded-full bg-background/80 backdrop-blur-sm border-2 border-primary flex items-center justify-center">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          </div>
                          <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                            <div className="bg-background/80 backdrop-blur-xl rounded-xl p-3 shadow-2xl border border-border/50 whitespace-nowrap">
                              <div className="flex items-center gap-2 mb-1">
                                <MapPin className="h-4 w-4 text-primary" />
                                <p className="text-sm font-medium text-foreground/70">Property Size</p>
                              </div>
                              <p className="text-lg font-bold text-primary">2,400 sq ft</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="animate-fade-in-delay-3">
                      {/* Confidence Score Marker */}
                      <div className="absolute top-1/3 right-1/3 group">
                        <div className="relative">
                          <div className="absolute -inset-2 bg-emerald-500/20 rounded-full blur-xl animate-pulse delay-150" />
                          <div className="relative h-4 w-4 rounded-full bg-background/80 backdrop-blur-sm border-2 border-emerald-500 flex items-center justify-center">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          </div>
                          <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                            <div className="bg-background/80 backdrop-blur-xl rounded-xl p-3 shadow-2xl border border-border/50 whitespace-nowrap">
                              <div className="flex items-center gap-2 mb-1">
                                <div className="text-emerald-500">
                                  <Building2 className="h-4 w-4" />
                                </div>
                                <p className="text-sm font-medium text-foreground/70">AI Confidence</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <p className="text-lg font-bold text-emerald-500">High (95%)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
