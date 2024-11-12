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
  const [animationStage, setAnimationStage] = useState<'typing' | 'analyzing' | 'results'>('typing');
  const [chatStep, setChatStep] = useState(0);

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

  // Control animation sequence
  useEffect(() => {
    const sequence = async () => {
      // Reset sequence
      setAnimationStage('typing');
      
      // Wait for typing animation
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Start analysis
      setAnimationStage('analyzing');
      
      // Wait for analysis animation
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Show results
      setAnimationStage('results');
      
      // Reset after showing results for a while
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Restart sequence
      sequence();
    };

    sequence();
    
    return () => {
      setAnimationStage('typing');
    };
  }, []);

  // Update the chat steps effect for more granular control
  useEffect(() => {
    if (animationStage === 'typing') {
      const chatSequence = async () => {
        // Reset
        setChatStep(0);
        
        // First message
        await new Promise(resolve => setTimeout(resolve, 500));
        setChatStep(1); // "Hello! Please enter..."
        
        // Second message appears on same screen
        await new Promise(resolve => setTimeout(resolve, 2000));
        setChatStep(2); // "For example: 1234..."
        
        // User input appears
        await new Promise(resolve => setTimeout(resolve, 2000));
        setChatStep(3); // User typing effect
        
        // Processing message
        await new Promise(resolve => setTimeout(resolve, 2000));
        setChatStep(4); // "Analyzing property..."
      };
      chatSequence();
    }
  }, [animationStage]);

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
            
            {/* Address Search Animation - Enhanced typing stage */}
            {animationStage === 'typing' && (
              <div className="demo-address absolute inset-0 flex items-center justify-center p-6">
                <div className="w-full max-w-2xl space-y-4">
                  {/* First AI Message */}
                  {chatStep >= 1 && (
                    <div className="flex items-start gap-3 animate-fade-in">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <Building2 className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-muted/50 backdrop-blur-sm rounded-2xl rounded-tl-none p-4 text-sm text-foreground/80 shadow-sm border border-border/50">
                          Hello! Please enter a property address for AI analysis.
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Second AI Message */}
                  {chatStep >= 2 && (
                    <div className="flex items-start gap-3 animate-fade-in">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-muted/50 backdrop-blur-sm rounded-2xl rounded-tl-none p-4 text-sm text-foreground/80 shadow-sm border border-border/50 typing-text">
                          For example: 1234 Innovation Drive, Silicon Valley, CA
                        </div>
                      </div>
                    </div>
                  )}

                  {/* User Input */}
                  {chatStep >= 3 && (
                    <div className="flex items-start gap-3 justify-end animate-fade-in">
                      <div className="flex-1 max-w-[80%]">
                        <div className="bg-primary/10 backdrop-blur-sm rounded-2xl rounded-tr-none p-4 text-sm shadow-sm border border-primary/20 ml-auto">
                          <div className="typing-text text-foreground/90">
                            1234 Innovation Drive, Silicon Valley, CA
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-background/80 border border-border/50 flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  )}

                  {/* Processing Message */}
                  {chatStep >= 4 && (
                    <div className="flex items-start gap-3 animate-fade-in">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <div className="h-4 w-4 rounded-full border-2 border-primary border-r-transparent animate-spin-slow" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-muted/50 backdrop-blur-sm rounded-2xl rounded-tl-none p-4 text-sm text-foreground/80 shadow-sm border border-border/50">
                          <p className="text-sm text-foreground/80 typing-text">
                            Analyzing property details...
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Analysis Status - Enhanced analyzing stage */}
            {animationStage === 'analyzing' && (
              <div className="demo-analysis animate-fade-in absolute inset-0 flex items-center justify-center p-6">
                <div className="w-full max-w-md space-y-6">
                  <div className="flex flex-col items-center gap-4 bg-background/40 backdrop-blur-2xl rounded-2xl p-8 shadow-lg border border-border/30">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
                      <div className="relative h-16 w-16 rounded-full border-2 border-primary flex items-center justify-center">
                        <div className="h-10 w-10 rounded-full border-2 border-primary border-dashed animate-spin-slow" />
                      </div>
                    </div>
                    <div className="space-y-3 text-center">
                      <div className="flex items-center gap-2 justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="font-medium bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                          Advanced AI Analysis in Progress
                        </span>
                        <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse delay-100" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="text-sm text-muted-foreground/80">
                          Processing property characteristics...
                        </div>
                        <div className="h-1.5 w-full bg-primary/10 rounded-full overflow-hidden">
                          <div className="h-full w-full bg-primary animate-progress origin-left" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* House Image with Smart AI Analysis Markers - Show during results stage */}
            {animationStage === 'results' && (
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
                
                {/* Scanning Effect First */}
                <div className="absolute inset-0 pointer-events-none z-20">
                  <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent blur-sm animate-scan-once" />
                </div>
                
                {/* Smart AI Analysis Markers - Appear after scan */}
                <div className="absolute inset-0 z-20">
                  {/* Price Estimation Marker */}
                  <div className="absolute top-1/4 left-1/4 animate-marker-reveal delay-[1000ms]">
                    <div className="relative">
                      {/* Marker Point */}
                      <div className="relative">
                        <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl animate-pulse" />
                        <div className="h-4 w-4 rounded-full bg-background/80 backdrop-blur-sm border-2 border-primary flex items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        </div>
                      </div>
                      
                      {/* Always Visible Prediction Card */}
                      <div className="absolute left-6 top-1/2 -translate-y-1/2 animate-card-reveal delay-[1100ms]">
                        <div className="bg-background/80 backdrop-blur-xl rounded-xl p-3 shadow-2xl border border-border/50 whitespace-nowrap">
                          <div className="flex items-center gap-2 mb-1">
                            <DollarSign className="h-4 w-4 text-primary" />
                            <p className="text-sm font-medium text-foreground/70">AI Prediction Area</p>
                          </div>
                          <p className="text-lg font-bold text-primary">$1,250,000</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Property Size Marker */}
                  <div className="absolute bottom-1/3 right-1/4 animate-marker-reveal delay-[1200ms]">
                    <div className="relative">
                      <div className="relative">
                        <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl animate-pulse delay-300" />
                        <div className="h-4 w-4 rounded-full bg-background/80 backdrop-blur-sm border-2 border-primary flex items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        </div>
                      </div>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 animate-card-reveal delay-[1300ms]">
                        <div className="bg-background/80 backdrop-blur-xl rounded-xl p-3 shadow-2xl border border-border/50 whitespace-nowrap">
                          <div className="flex items-center gap-2 mb-1">
                            <MapPin className="h-4 w-4 text-primary" />
                            <p className="text-sm font-medium text-foreground/70">AI Prediction Area</p>
                          </div>
                          <p className="text-lg font-bold text-primary">2,400 sq ft</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Confidence Score Marker */}
                  <div className="absolute top-1/3 right-1/3 animate-marker-reveal delay-[1400ms]">
                    <div className="relative">
                      <div className="relative">
                        <div className="absolute -inset-2 bg-emerald-500/20 rounded-full blur-xl animate-pulse delay-150" />
                        <div className="h-4 w-4 rounded-full bg-background/80 backdrop-blur-sm border-2 border-emerald-500 flex items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </div>
                      </div>
                      <div className="absolute left-6 top-1/2 -translate-y-1/2 animate-card-reveal delay-[1500ms]">
                        <div className="bg-background/80 backdrop-blur-xl rounded-xl p-3 shadow-2xl border border-border/50 whitespace-nowrap">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="text-emerald-500">
                              <Building2 className="h-4 w-4" />
                            </div>
                            <p className="text-sm font-medium text-foreground/70">AI Prediction Area</p>
                          </div>
                          <p className="text-lg font-bold text-emerald-500">High (95%)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
