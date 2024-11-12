"use client";

import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";

export function Header() {
  return (
    <nav className="container mx-auto px-4 py-6 relative z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 group">
          <Building2 className="h-8 w-8 text-primary animate-neon" />
          <div className="text-2xl font-bold text-primary relative">
            HouseVal
            <div className="absolute -inset-1 bg-primary/20 blur-sm group-hover:bg-primary/30 transition-all duration-300" />
          </div>
        </div>
        <div className="space-x-4">
          <Button 
            variant="ghost" 
            className="hover:bg-primary/20 hover:text-primary transition-colors"
          >
            Login
          </Button>
          <Button className="relative overflow-hidden group">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%] animate-gradient" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
