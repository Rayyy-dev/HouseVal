"use client";

import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";

export function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border/40 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 group">
            <div className="relative">
              <Building2 className="h-8 w-8 text-primary relative z-10" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
            </div>
            <div className="text-2xl font-bold relative">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                HouseVal
              </span>
              <div className="absolute -inset-x-2 -inset-y-1 bg-primary/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Button 
              variant="ghost" 
              className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              Login
            </Button>
            <Button className="bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25">
              <span className="relative z-10">Get Started</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
