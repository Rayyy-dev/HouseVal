"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Building2, DollarSign, ArrowRight, MapPin } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { AvatarStack } from "@/components/ui/avatar-stack";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Simple typing effect hook
const useTypingEffect = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let timer: NodeJS.Timeout;

    const typeNextCharacter = () => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
        
        if (currentIndex > text.length) {
          setIsComplete(true);
        } else {
          timer = setTimeout(typeNextCharacter, speed);
        }
      }
    };

    typeNextCharacter();

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [text, speed]);

  return { displayText, isComplete };
};

export function Hero() {
  const demoRef = useRef<HTMLDivElement>(null);
  const [address, setAddress] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [animationStage, setAnimationStage] = useState<'typing' | 'analyzing' | 'scanning' | 'results'>('typing');
  const [chatStep, setChatStep] = useState(0);
  const { displayText, isComplete } = useTypingEffect("Hello! Please enter a property address for AI analysis...", 50);

  // Animation sequence with faster timing
  useEffect(() => {
    const sequence = async () => {
      setAnimationStage('typing');
      await new Promise(resolve => setTimeout(resolve, 2000)); // Faster typing
      
      setAnimationStage('analyzing');
      await new Promise(resolve => setTimeout(resolve, 1500)); // Faster analyzing
      
      setAnimationStage('results');
      await new Promise(resolve => setTimeout(resolve, 4000)); // Show results
      
      sequence(); // Restart
    };

    sequence();
  }, []);

  // Handle address submission
  const handleGetEstimate = () => {
    if (!address) return;
    setIsAnalyzing(true);
    setAnimationStage('analyzing');
    
    // Simulate analysis time then show results
    setTimeout(() => {
      setAnimationStage('results');
      setIsAnalyzing(false);
    }, 3000); // Adjust timing as needed
  };

  // When typing is complete, don't immediately go to analyzing
  useEffect(() => {
    if (isComplete) {
      // Remove the automatic transition to analyzing
      // Let the button click trigger it instead
    }
  }, [isComplete]);

  return (
    <section className="container mx-auto px-4 pt-32 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold leading-[1.1] tracking-tight">
              <span className="inline-block">
                <span className="relative inline-flex items-center">
                  <span className="relative z-10 bg-gradient-to-r from-foreground via-foreground/90 to-foreground bg-clip-text text-transparent">
                    Predict House Prices
                  </span>
                  <div className="absolute inset-x-0 -bottom-2 h-3 bg-[#22c55e]/10 blur-xl" />
                </span>
              </span>
              <br />
              <span className="text-4xl sm:text-5xl bg-gradient-to-r from-[#22c55e] via-[#22c55e]/90 to-[#22c55e] bg-clip-text text-transparent mt-6 block">
                with AI Precision
              </span>
            </h1>
            <p className="text-lg text-muted-foreground/90 leading-relaxed max-w-2xl">
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
                className="pl-12 h-14 text-base rounded-xl border-border/50 bg-background/50 hover:bg-background/80 focus:border-[#22c55e]/30 focus:ring-[#22c55e]/20 transition-all duration-300"
              />
              {isAnalyzing && (
                <div className="absolute right-4 top-4">
                  <div className="h-5 w-5 rounded-full border-2 border-[#22c55e] border-r-transparent animate-spin" />
                </div>
              )}
            </div>
            <Button 
              size="lg" 
              className="h-14 px-8 rounded-xl bg-[#22c55e] hover:bg-[#22c55e]/90 transition-all duration-300 shadow-lg hover:shadow-[#22c55e]/25 group"
              onClick={handleGetEstimate}
              disabled={isAnalyzing || !address}
            >
              <span className="font-medium">Get Estimate</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="flex items-center gap-10">
            <AvatarStack />
            <div className="h-12 w-px bg-border/50" />
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-[#22c55e]/10 flex items-center justify-center">
                  <span className="text-[#22c55e] font-bold text-lg">4.9</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="font-medium text-sm">Excellent Rating</div>
                <div className="text-xs text-muted-foreground">Based on 2,000+ reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Demo Animation */}
        <div ref={demoRef} className="relative h-[580px] rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/90 backdrop-blur-xl border border-border/50">
            <AnimatePresence mode="wait">
              {animationStage === 'typing' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-full max-w-md px-4">
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <div className="w-full pl-12 pr-4 py-3 text-base rounded-xl border border-border/50 bg-background shadow-lg">
                        {displayText}
                        <span className="inline-block w-0.5 h-5 bg-primary animate-pulse ml-0.5 align-middle">
                          &nbsp;
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {animationStage === 'analyzing' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
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
                          <motion.span 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="font-medium bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent relative"
                          >
                            <motion.span
                              initial={{ width: "0%" }}
                              animate={{ width: "100%" }}
                              transition={{
                                duration: 2,
                                ease: "linear",
                                repeat: Infinity
                              }}
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                            />
                            AI Analysis in Progress
                          </motion.span>
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
                </motion.div>
              )}

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
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
