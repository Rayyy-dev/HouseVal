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
            {/* Sophisticated Logo Mark */}
            <div className="relative">
              <div className="relative z-20 w-10 h-10">
                {/* Main logo shape */}
                <svg viewBox="0 0 40 40" className="w-full h-full">
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
                  <motion.path
                    d="M20 2L20 38"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-primary/50"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M4 12L36 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-destructive/50"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
                  />
                  <motion.circle
                    cx="20"
                    cy="20"
                    r="6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-primary"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  />
                </svg>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 z-10">
                <div className="absolute inset-0 bg-primary/10 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-all duration-700" />
              </div>
            </div>

            {/* Refined Brand Name */}
            <div className="relative">
              <div className="flex items-baseline gap-0.5">
                <motion.span 
                  className="text-2xl font-bold tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">HOUSE</span>
                </motion.span>
                <motion.span 
                  className="text-2xl font-light tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <span className="bg-gradient-to-r from-destructive/90 to-destructive/70 bg-clip-text text-transparent">VAL</span>
                </motion.span>
              </div>
              
              {/* Subtle line decoration */}
              <motion.div 
                className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
