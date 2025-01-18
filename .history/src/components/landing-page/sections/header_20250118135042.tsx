"use client";

import { Building2, Home } from "lucide-react";
import { motion } from "framer-motion";

export function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border/40 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            {/* Animated Logo Container */}
            <div className="relative">
              <div className="relative z-20 flex items-center justify-center w-10 h-10">
                <Home className="w-6 h-6 text-primary absolute transform group-hover:scale-0 transition-transform duration-300" />
                <Building2 className="w-6 h-6 text-primary absolute transform scale-0 group-hover:scale-100 transition-transform duration-300" />
              </div>
              {/* Animated Glow Effect */}
              <div className="absolute inset-0 z-10">
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg group-hover:blur-xl transform group-hover:scale-150 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-destructive/30 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300" />
              </div>
            </div>

            {/* Brand Name with Effects */}
            <div className="relative">
              <motion.span 
                className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                HouseVal
              </motion.span>
              {/* Hover Glow Effect */}
              <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-primary/20 to-destructive/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
              {/* Animated Dot */}
              <motion.div 
                className="absolute -right-3 top-0 w-1.5 h-1.5 rounded-full bg-primary"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
