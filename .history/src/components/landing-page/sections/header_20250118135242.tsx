"use client";

import { Building2, Home, CircleDot, Circle } from "lucide-react";
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
            className="flex items-center gap-4 group cursor-pointer"
          >
            {/* Premium Animated Logo */}
            <div className="relative">
              {/* Outer rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Inner content container */}
              <div className="relative z-20 w-12 h-12 flex items-center justify-center">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-destructive/20 rounded-xl" />
                
                {/* Animated icons */}
                <div className="relative w-8 h-8">
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Building2 className="w-6 h-6 text-primary transform group-hover:scale-110 transition-all duration-300" />
                  </motion.div>
                  
                  {/* Decorative elements */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <CircleDot className="w-full h-full text-primary" />
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-1 -left-1 w-2 h-2"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    <Circle className="w-full h-full text-destructive" />
                  </motion.div>
                </div>
              </div>

              {/* Premium glow effects */}
              <div className="absolute inset-0 z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-destructive/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-xl blur-lg"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </div>

            {/* Enhanced Brand Name */}
            <div className="relative">
              <div className="relative">
                <motion.span 
                  className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  House
                </motion.span>
                <motion.span 
                  className="text-2xl font-bold bg-gradient-to-r from-destructive/90 via-destructive to-destructive/90 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Val
                </motion.span>
                
                {/* Animated underline */}
                <motion.div 
                  className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-primary via-destructive to-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </div>
              
              {/* Enhanced hover effect */}
              <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-primary/10 via-destructive/10 to-primary/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Floating particles */}
              <motion.div 
                className="absolute -right-2 -top-2 w-1 h-1 rounded-full bg-primary"
                animate={{ y: [-4, 0, -4], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -right-1 bottom-0 w-1 h-1 rounded-full bg-destructive"
                animate={{ y: [0, -4, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
