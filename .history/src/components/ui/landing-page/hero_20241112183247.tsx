"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Hero() {
  const demoRef = useRef<HTMLDivElement>(null);

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
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight lg:leading-snug animate-slide-in-left">
              Instant AI Property Valuations You Can Trust
            </h1>
            <p className="text-lg text-muted-foreground animate-slide-in-left">
              Get accurate property valuations powered by advanced AI. Enter any address to start.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                type="text"
                placeholder="Enter property address..."
                className="pl-10 h-12"
              />
            </div>
            <Button size="lg" className="h-12">
              Get Valuation
            </Button>
          </div>
        </div>
        
        {/* Right side - Demo sequence */}
        <div ref={demoRef} className="demo-container">
          <div className="demo-address">
            1234 Innovation Drive, Silicon Valley, CA
          </div>
          
          <div className="demo-analysis">
            Analyzing property details...
          </div>
          
          <div className="demo-house">
            <Image
              src="/f36168bb-cc3e-43da-8912-f5379ce8139f.jpeg"
              alt="Modern suburban house at twilight with warm interior lighting"
              fill
              priority
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
            />
            <div className="demo-scan-line" />
          </div>
          
          <div className="demo-result">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Predicted Value</h3>
                  <p className="text-3xl font-bold text-primary">$1,250,000</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-medium">
                  +4.2% from last year
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <p className="text-sm text-muted-foreground">Size</p>
                  <p className="font-medium">2,400 sq ft</p>
                </div>
                <div className="p-3 rounded-xl bg-primary/10">
                  <p className="text-sm text-muted-foreground">Confidence</p>
                  <p className="font-medium">High (95%)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
