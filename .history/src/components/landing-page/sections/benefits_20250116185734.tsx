"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Sparkles, Zap, LineChart, Shield, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    title: "AI-Powered Accuracy",
    description: "Advanced machine learning algorithms deliver precise property valuations with up to 98% accuracy.",
    icon: Sparkles,
    gradient: "from-violet-500 to-purple-500",
    delay: 0.1
  },
  {
    title: "Real-Time Updates",
    description: "Get instant market updates and property value changes as they happen in your area.",
    icon: Clock,
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.2
  },
  {
    title: "Market Insights",
    description: "Deep analytics and trend forecasting to help you make informed real estate decisions.",
    icon: LineChart,
    gradient: "from-emerald-500 to-green-500",
    delay: 0.3
  },
  {
    title: "Verified Data",
    description: "Access to comprehensive, verified property data from multiple trusted sources.",
    icon: BadgeCheck,
    gradient: "from-orange-500 to-amber-500",
    delay: 0.4
  },
  {
    title: "Lightning Fast",
    description: "Get property valuations in seconds, not days. Built for speed and efficiency.",
    icon: Zap,
    gradient: "from-pink-500 to-rose-500",
    delay: 0.5
  },
  {
    title: "Bank-Grade Security",
    description: "Enterprise-level encryption and security protocols to protect your data.",
    icon: Shield,
    gradient: "from-indigo-500 to-blue-500",
    delay: 0.6
  }
];

export function Benefits() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
        <div className="absolute h-full w-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        
        {/* Animated Orbs */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Why Choose HouseVal
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Experience the future of property valuation with our cutting-edge features
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: benefit.delay }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-background to-muted rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8 rounded-3xl border border-border/50 bg-background/50 backdrop-blur-xl hover:border-primary/50 transition-colors duration-300">
                <div className={cn(
                  "inline-flex p-3 rounded-2xl bg-gradient-to-br",
                  benefit.gradient
                )}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mt-4 mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 