"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, TrendingUp, Shield, Zap, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    title: "AI-Powered Precision",
    description: "Advanced machine learning algorithms deliver accurate property valuations with 95%+ confidence.",
    icon: Brain,
    gradient: "from-violet-500 to-purple-500",
    delay: 0.1,
  },
  {
    title: "Real-Time Market Data",
    description: "Live market insights and trends analysis for informed decision-making.",
    icon: TrendingUp,
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.2,
  },
  {
    title: "Smart Analytics",
    description: "Comprehensive property analytics and predictive market trends.",
    icon: BarChart3,
    gradient: "from-emerald-500 to-green-500",
    delay: 0.3,
  },
  {
    title: "Premium Features",
    description: "Exclusive tools and insights available only to our premium members.",
    icon: Sparkles,
    gradient: "from-amber-500 to-orange-500",
    delay: 0.4,
  },
  {
    title: "Lightning Fast",
    description: "Instant valuations and analysis in seconds, not hours.",
    icon: Zap,
    gradient: "from-pink-500 to-rose-500",
    delay: 0.5,
  },
  {
    title: "Bank-Grade Security",
    description: "Enterprise-level encryption and data protection protocols.",
    icon: Shield,
    gradient: "from-indigo-500 to-blue-500",
    delay: 0.6,
  },
];

export function Benefits() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 bg-slate-950/95">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute left-1/3 right-0 top-1/2 -z-10 h-[250px] w-[250px] rounded-full bg-primary/30 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Premium Features for Modern Real Estate
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Experience the future of property valuation with our cutting-edge AI technology and premium features.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: benefit.delay }}
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500" />
                <div className="relative h-full bg-slate-900/90 border border-slate-800/60 rounded-xl p-6 backdrop-blur-sm hover:border-slate-700/60 transition duration-300">
                  {/* Icon */}
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                    "bg-gradient-to-br shadow-lg",
                    benefit.gradient
                  )}>
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                    {benefit.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-xl transition duration-300 group-hover:bg-primary/[0.02] pointer-events-none" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
    </section>
  );
} 