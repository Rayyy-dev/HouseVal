"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';

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
        <div>
          {/* Your existing hero content */}
        </div>
        
        {/* Demo sequence */}
        <div ref={demoRef} className="demo-container">
          <div className="demo-address">
            1234 Innovation Drive, Silicon Valley, CA
          </div>
          
          <div className="demo-analysis">
            Analyzing property details...
          </div>
          
          <div className="demo-house">
            <Image
              src="/modern-house.jpg"
              alt="Modern House"
              fill
              className="object-cover"
              priority
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
