"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, TrendingUp, Shield, Zap, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    title: "AI-Powered Precision",
    description: "Advanced machine learning algorithms deliver accurate property valuations with 95%+ confidence.",
    icon: Brain,
    gradient: "from-primary/80 to-primary",
    delay: 0.1,
  },
  {
    title: "Real-Time Market Data",
    description: "Live market insights and trends analysis for informed decision-making.",
    icon: TrendingUp,
    gradient: "from-primary/80 to-primary",
    delay: 0.2,
  },
  {
    title: "Smart Analytics",
    description: "Comprehensive property analytics and predictive market trends.",
    icon: BarChart3,
    gradient: "from-primary/80 to-primary",
    delay: 0.3,
  },
  {
    title: "Premium Features",
    description: "Exclusive tools and insights available only to our premium members.",
    icon: Sparkles,
    gradient: "from-primary/80 to-primary",
    delay: 0.4,
  },
  {
    title: "Lightning Fast",
    description: "Instant valuations and analysis in seconds, not hours.",
    icon: Zap,
    gradient: "from-primary/80 to-primary",
    delay: 0.5,
  },
  {
    title: "Bank-Grade Security",
    description: "Enterprise-level encryption and data protection protocols.",
    icon: Shield,
    gradient: "from-primary/80 to-primary",
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
            <span className="px-5 py-2 rounded-full bg-primary/8 text-primary text-sm font-medium border border-primary/10">
              Premium Features
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-primary/90 via-primary to-primary/90 bg-clip-text text-transparent">The Future of</span>
            <span className="text-foreground"> Real Estate</span>
          </h2>
          <p className="text-lg text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed">
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
              className="h-full"
            >
              <motion.div 
                className="relative group h-full"
                whileHover={{ translateY: -3, scale: 1.02 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/10 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative h-full bg-background/50 backdrop-blur-sm rounded-xl p-8 border border-border/40 group-hover:border-primary/20 transition-all duration-300 flex flex-col">
                  {/* Enhanced Icon */}
                  <div className="mb-6 relative flex-shrink-0">
                    <div className="absolute inset-0 bg-primary/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className={cn(
                        "relative w-14 h-14 rounded-xl flex items-center justify-center",
                        "bg-gradient-to-br shadow-lg",
                        benefit.gradient
                      )}
                    >
                      <benefit.icon className="w-7 h-7 text-background" />
                    </motion.div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground/90 group-hover:text-muted-foreground transition-colors leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Subtle Corner Accent */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-all duration-300" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Bottom Decorative Element */}
        <motion.div 
          initial={{ opacity: 0, width: "0%" }}
          whileInView={{ opacity: 1, width: "60%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        />
      </div>
    </section>
  );
} 