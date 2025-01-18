"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border/40 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            {/* House Logo */}
            <div className="relative">
              <div className="relative z-20 w-9 h-9">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  {/* House shape */}
                  <motion.path
                    d="M20 5L8 15V35H32V15L20 5Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary/80 drop-shadow-[0_0_10px_rgba(var(--primary),0.3)]"
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
                    className="text-primary/60"
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
                    className="text-primary/80 drop-shadow-[0_0_8px_rgba(var(--primary),0.3)]"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  />
                </svg>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 z-10">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
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
                <span className="text-3xl font-light tracking-tight bg-gradient-to-r from-primary/80 via-primary to-primary/80 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(var(--primary),0.3)]">
                  house
                </span>
                <span className="text-3xl font-medium tracking-tight bg-gradient-to-r from-primary/90 via-primary to-primary/90 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(var(--primary),0.3)]">
                  val
                </span>
              </motion.div>
              
              {/* Animated glowing line */}
              <motion.div 
                className="relative h-[2px] mt-1 overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/80 to-primary/40"
                  animate={{
                    x: ["0%", "100%", "0%"],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 shadow-[0_0_15px_rgba(var(--primary),0.2)]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-8"
          >
            <div className="hidden md:flex items-center gap-6">
              {["Features", "About", "Contact"].map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {item}
                </motion.span>
              ))}
            </div>
            <motion.div 
              className="flex items-center gap-1 text-sm text-primary cursor-pointer group/demo"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <span className="font-medium">Try Demo</span>
              <ChevronRight className="w-4 h-4 group-hover/demo:translate-x-0.5 transition-transform" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
