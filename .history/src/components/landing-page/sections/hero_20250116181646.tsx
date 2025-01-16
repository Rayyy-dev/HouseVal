"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Building2, DollarSign, ArrowRight, MapPin } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { AvatarStack } from "@/components/ui/avatar-stack";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const [address, setAddress] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Simulated search suggestions
  const suggestions = [
    "123 Park Avenue, New York, NY",
    "456 Market Street, San Francisco, CA",
    "789 Michigan Ave, Chicago, IL",
  ].filter(s => s.toLowerCase().includes(address.toLowerCase()));

  const handleSearch = async () => {
    if (!address) return;
    
    setIsAnalyzing(true);
    // Simulate analysis
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsAnalyzing(false);
    setShowResults(true);
  };

  // Auto-focus search on mount
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  return (
    <section className="container mx-auto px-4 pt-32 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left content */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-6xl sm:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="inline-block">
                <span className="relative inline-flex items-center">
                  <span className="relative z-10 bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent">
                    AI-Powered
                  </span>
                  <div className="absolute inset-x-0 -bottom-2 h-3 bg-primary/10 blur-xl" />
                </span>
              </span>
              <br />
              <span className="text-5xl sm:text-6xl bg-gradient-to-br from-foreground via-foreground to-foreground/90 bg-clip-text text-transparent mt-4 block">
                House Valuation
              </span>
            </h1>
            <p className="text-xl text-muted-foreground/90 leading-relaxed max-w-2xl">
              Get instant, accurate property valuations powered by advanced AI technology.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
              <Input 
                ref={searchInputRef}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter property address..."
                className="pl-12 h-14 text-base rounded-xl border-border/50 bg-muted/50 hover:bg-muted/80 transition-colors"
              />
              <AnimatePresence>
                {address && suggestions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute z-10 w-full mt-2 bg-background/95 backdrop-blur-sm rounded-lg border border-border/50 shadow-lg"
                  >
                    {suggestions.map((suggestion, index) => (
                      <motion.div
                        key={suggestion}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-3 hover:bg-muted/50 cursor-pointer flex items-center gap-2"
                        onClick={() => setAddress(suggestion)}
                      >
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{suggestion}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-4 flex gap-4">
              <Button 
                size="lg" 
                className="h-14 px-8 rounded-xl bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25 group flex-1"
                onClick={handleSearch}
                disabled={isAnalyzing || !address}
              >
                {isAnalyzing ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 border-2 border-white border-r-transparent rounded-full animate-spin" />
                    <span>Analyzing...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span>Get Estimate</span>
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </div>
                )}
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-10"
          >
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
          </motion.div>
        </div>

        {/* Right side - Demo Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative h-[580px] rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/90 backdrop-blur-xl border border-border/50 rounded-3xl">
            <AnimatePresence mode="wait">
              {showResults ? (
                <ResultsView />
              ) : isAnalyzing ? (
                <AnalyzingView />
              ) : (
                <SearchView address={address} />
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Separate components for different views
const SearchView = ({ address }: { address: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="p-8 h-full flex flex-col"
  >
    {/* Add search view content */}
  </motion.div>
);

const AnalyzingView = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="p-8 h-full flex items-center justify-center"
  >
    <div className="text-center space-y-4">
      <div className="relative mx-auto w-20 h-20">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
        <div className="relative h-20 w-20 rounded-full border-2 border-primary flex items-center justify-center">
          <div className="h-12 w-12 rounded-full border-2 border-primary border-dashed animate-spin-slow" />
        </div>
      </div>
      <p className="text-lg font-medium text-primary">Analyzing property data...</p>
    </div>
  </motion.div>
);

const ResultsView = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="p-8 h-full"
  >
    {/* Add results view content */}
  </motion.div>
);
