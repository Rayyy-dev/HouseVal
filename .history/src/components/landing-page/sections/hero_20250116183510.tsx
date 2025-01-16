"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Building2, DollarSign, ArrowRight, MapPin } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { AvatarStack } from "@/components/ui/avatar-stack";
import { motion, AnimatePresence } from "framer-motion";

// Simple typing effect hook
const useTypingEffect = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex <= text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex));
        setCurrentIndex(prev => prev + 1);
        if (currentIndex === text.length) {
          setIsComplete(true);
        }
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, speed, text]);

  return { displayText, isComplete };
};

export function Hero() {
  const demoRef = useRef<HTMLDivElement>(null);
  const [animationStage, setAnimationStage] = useState<'typing' | 'analyzing' | 'results'>('typing');
  const promptText = "Hello! Please enter a property address for AI analysis...";
  const { displayText, isComplete } = useTypingEffect(
    "Hello! Please enter a property address for AI analysis...",
    50
  );

  // When typing is complete, move to analyzing stage
  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(() => {
        setAnimationStage('analyzing');
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isComplete]);

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

        {/* Right side - Demo Animation */}
        <div ref={demoRef} className="relative h-[580px] rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/90 backdrop-blur-xl border border-border/50">
            <AnimatePresence mode="wait">
              {animationStage === 'typing' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
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
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
