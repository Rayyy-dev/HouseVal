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
            className="flex items-center gap-4 group cursor-pointer"
          >
            {/* House Logo */}
            <div className="relative">
              <div className="relative z-20 w-10 h-10">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  {/* House shape */}
                  <motion.path
                    d="M20 5L8 15V35H32V15L20 5Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary drop-shadow-[0_0_10px_rgba(var(--primary),0.5)]"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                  {/* Roof detail */}
                  <motion.path
                    d="M14 20H26"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary/70"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                  {/* Door */}
                  <motion.path
                    d="M18 35V27H22V35"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  />
                </svg>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 z-10">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>

            {/* Brand Name with Modern Style */}
            <div className="relative">
              <motion.div 
                className="flex items-baseline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-3xl font-extrabold tracking-tighter bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(var(--primary),0.5)] mr-1">
                  House
                </span>
                <span className="text-3xl font-black tracking-tighter bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(var(--primary),0.5)]">
                  VAL
                </span>
              </motion.div>
              
              {/* Animated glowing line */}
              <motion.div 
                className="relative h-0.5 mt-1 overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary to-primary/80"
                  animate={{
                    x: ["0%", "100%", "0%"],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40 shadow-[0_0_15px_rgba(var(--primary),0.3)]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
