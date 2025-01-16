"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Sparkles, Zap, LineChart, Shield, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    title: "AI-Powered Accuracy",
    description: "Advanced machine learning algorithms deliver precise property valuations with up to 98% accuracy.",
    icon: Sparkles,
    gradient: "from-blue-600 to-blue-800",
    delay: 0.1
  },
  {
    title: "Real-Time Updates",
    description: "Get instant market updates and property value changes as they happen in your area.",
    icon: Clock,
    gradient: "from-slate-600 to-slate-800",
    delay: 0.2
  },
  {
    title: "Market Insights",
    description: "Deep analytics and trend forecasting to help you make informed real estate decisions.",
    icon: LineChart,
    gradient: "from-gray-600 to-gray-800",
    delay: 0.3
  },
  {
    title: "Verified Data",
    description: "Access to comprehensive, verified property data from multiple trusted sources.",
    icon: BadgeCheck,
    gradient: "from-zinc-600 to-zinc-800",
    delay: 0.4
  },
  {
    title: "Lightning Fast",
    description: "Get property valuations in seconds, not days. Built for speed and efficiency.",
    icon: Zap,
    gradient: "from-slate-700 to-slate-900",
    delay: 0.5
  },
  {
    title: "Bank-Grade Security",
    description: "Enterprise-level encryption and security protocols to protect your data.",
    icon: Shield,
    gradient: "from-gray-700 to-gray-900",
    delay: 0.6
  }
];

export function Benefits() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-background dark:to-slate-950">
      {/* Abstract Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-slate-200/[0.02] bg-[size:32px] dark:bg-grid-slate-800/[0.02]" />
        <div className="absolute h-full w-full [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        
        {/* Professional Gradient Accents */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-slate-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-gray-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-200 dark:via-slate-100 dark:to-slate-200 bg-clip-text text-transparent"
          >
            Why Choose HouseVal
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
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
              <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl hover:border-blue-600/50 dark:hover:border-blue-500/50 transition-colors duration-300 shadow-sm">
                <div className={cn(
                  "inline-flex p-3 rounded-2xl bg-gradient-to-br",
                  benefit.gradient
                )}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-900 dark:text-slate-100">{benefit.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 