"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, TrendingUp, Shield, Zap, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    title: "AI-Powered Precision",
    description: "Advanced machine learning algorithms deliver accurate property valuations with 95%+ confidence.",
    icon: Brain,
    gradient: "from-[#7C3AED] to-[#4338CA]",
    glow: "bg-[#7C3AED]",
    delay: 0.1,
  },
  {
    title: "Real-Time Market Data",
    description: "Live market insights and trends analysis for informed decision-making.",
    icon: TrendingUp,
    gradient: "from-[#0EA5E9] to-[#2563EB]",
    glow: "bg-[#0EA5E9]",
    delay: 0.2,
  },
  {
    title: "Smart Analytics",
    description: "Comprehensive property analytics and predictive market trends.",
    icon: BarChart3,
    gradient: "from-[#059669] to-[#0D9488]",
    glow: "bg-[#059669]",
    delay: 0.3,
  },
  {
    title: "Premium Features",
    description: "Exclusive tools and insights available only to our premium members.",
    icon: Sparkles,
    gradient: "from-[#F59E0B] to-[#D97706]",
    glow: "bg-[#F59E0B]",
    delay: 0.4,
  },
  {
    title: "Lightning Fast",
    description: "Instant valuations and analysis in seconds, not hours.",
    icon: Zap,
    gradient: "from-[#EC4899] to-[#BE185D]",
    glow: "bg-[#EC4899]",
    delay: 0.5,
  },
  {
    title: "Bank-Grade Security",
    description: "Enterprise-level encryption and data protection protocols.",
    icon: Shield,
    gradient: "from-[#6366F1] to-[#4F46E5]",
    glow: "bg-[#6366F1]",
    delay: 0.6,
  },
];

export function Benefits() {
  return (
    <section className="relative py-24 overflow-hidden bg-muted/30">
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px]" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/5 blur-[120px] animate-pulse-slow" />
          <div className="absolute left-1/3 right-0 top-1/2 -z-10 h-[250px] w-[250px] rounded-full bg-primary/8 blur-[120px] animate-pulse-slow delay-300" />
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Enhanced Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Premium Features
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
            The Future of Real Estate
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience the future of property valuation with our cutting-edge AI technology and premium features.
          </p>
        </motion.div>

        {/* Enhanced Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: benefit.delay }}
            >
              <motion.div 
                className="relative group"
                whileHover={{ translateY: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={cn(
                  "absolute -inset-0.5 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition duration-500",
                  benefit.glow
                )} />
                <div className="relative h-full bg-card border border-border/50 rounded-xl p-7 backdrop-blur-sm hover:border-border transition-all duration-300">
                  {/* Enhanced Icon */}
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                    className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center mb-5",
                      "bg-gradient-to-br shadow-lg",
                      benefit.gradient
                    )}
                  >
                    <benefit.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Enhanced Content */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary/90 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Enhanced Hover Effect */}
                  <div className="absolute inset-0 rounded-xl transition-all duration-300 group-hover:bg-gradient-to-br from-foreground/[0.02] to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Bottom Decorative Element */}
        <motion.div 
          initial={{ opacity: 0, width: "0%" }}
          whileInView={{ opacity: 1, width: "50%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        />
      </div>
    </section>
  );
} 