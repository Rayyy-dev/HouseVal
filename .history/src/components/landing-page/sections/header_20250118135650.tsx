"use client";

import { motion } from "framer-motion";

export function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border/40 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            {/* Premium Logo Mark */}
            <div className="relative">
              <div className="relative z-20 w-12 h-12">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  {/* Base shape with fill */}
                  <motion.path
                    d="M20 2L4 12V28L20 38L36 28V12L20 2Z"
                    fill="currentColor"
                    className="text-primary/5"
                  />
                  {/* Animated outline */}
                  <motion.path
                    d="M20 2L4 12V28L20 38L36 28V12L20 2Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-primary"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                  {/* Inner lines */}
                  <motion.path
                    d="M20 8L10 14V26L20 32L30 26V14L20 8Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-primary/30"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
                  />
                  {/* Center accent */}
                  <motion.circle
                    cx="20"
                    cy="20"
                    r="4"
                    className="text-destructive"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  />
                </svg>
              </div>

              {/* Enhanced glow effects */}
              <div className="absolute inset-0 z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-destructive/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-primary/10 rounded-xl blur-lg group-hover:blur-2xl transition-all duration-700" />
              </div>
            </div>

            {/* Enhanced Brand Name */}
            <div className="relative">
              <div className="flex items-baseline">
                <motion.div 
                  className="text-3xl font-bold tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent drop-shadow-sm">
                    House
                  </span>
                </motion.div>
                <motion.div 
                  className="text-3xl font-semibold tracking-tight ml-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <span className="bg-gradient-to-r from-destructive to-destructive bg-clip-text text-transparent drop-shadow-sm">
                    Val
                  </span>
                </motion.div>
              </div>
              
              {/* Premium underline effect */}
              <div className="relative h-0.5 mt-1 overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-destructive/50 to-transparent opacity-50" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
