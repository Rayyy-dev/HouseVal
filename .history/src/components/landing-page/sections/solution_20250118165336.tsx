"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// Add smooth animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export function Solution() {
  return (
    <section className="py-32 relative bg-white">
      <div className="container mx-auto px-4 relative">
        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={itemVariants}
            className="inline-block mb-6"
          >
            <span className="px-5 py-2 rounded-full bg-primary/8 text-primary text-sm font-medium border border-primary/10">
              Why Choose Us
            </span>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-primary/90 via-primary to-primary/90 bg-clip-text text-transparent">Transforming</span>
            <span className="text-foreground"> Real Estate Valuation</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed"
          >
            Experience the future of property valuation with our cutting-edge AI technology
          </motion.p>
        </motion.div>
        
        {/* Enhanced Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="relative group h-full bg-white">
              <div className="relative h-full rounded-xl p-8 border border-secondary/20">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <XCircle className="text-secondary h-6 w-6" />
                  </div>
                  Traditional Methods
                </h3>
                <CardContent className="space-y-6 p-0">
                  {[
                    "Time-consuming manual assessments",
                    "Inconsistent valuations",
                    "Limited market data analysis",
                    "Subjective decision making",
                    "Outdated pricing models",
                    "High margin of error"
                  ].map((item, i) => (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
                      key={i} 
                      className="flex items-start gap-4 group"
                    >
                      <div className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-all duration-500">
                        <XCircle className="h-4 w-4 text-secondary" />
                      </div>
                      <p className="text-muted-foreground group-hover:text-foreground transition-all duration-500">{item}</p>
                    </motion.div>
                  ))}
                </CardContent>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="relative group h-full bg-white">
              <div className="relative h-full rounded-xl p-8 border border-primary/20">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <CheckCircle className="text-primary h-6 w-6" />
                  </div>
                  HouseVal Solution
                </h3>
                <CardContent className="space-y-6 p-0">
                  {[
                    "AI-powered instant valuations",
                    "Data-driven accuracy",
                    "Comprehensive market analysis",
                    "Real-time market insights",
                    "Advanced predictive models",
                    "99% confidence rate"
                  ].map((item, i) => (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
                      key={i} 
                      className="flex items-start gap-4 group"
                    >
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-all duration-500">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-muted-foreground group-hover:text-foreground transition-all duration-500">{item}</p>
                    </motion.div>
                  ))}
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <Card className="relative group overflow-hidden rounded-[2.5rem] bg-white">
            <div className="relative rounded-[2.5rem] border border-primary/10">              
              <div className="relative p-12 md:p-16">
                <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
                  {/* Left Content */}
                  <div className="flex-1 text-left space-y-8">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                        Premium AI Valuation
                      </span>
                    </motion.div>
                    
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent"
                    >
                      Experience Next-Gen Property Valuation
                    </motion.h3>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-lg text-muted-foreground/90 max-w-xl"
                    >
                      Join the future of real estate with our AI-powered valuation system, delivering unmatched accuracy and real-time market intelligence.
                    </motion.p>
                  </div>
                  
                  {/* Right Stats Grid */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex-1 grid grid-cols-2 gap-4 w-full"
                  >
                    {[
                      {
                        stat: "99%",
                        label: "Accuracy Rate",
                        gradient: "bg-primary/5"
                      },
                      {
                        stat: "50K+",
                        label: "Properties Valued",
                        gradient: "bg-secondary/5"
                      },
                      {
                        stat: "24/7",
                        label: "Real-time Updates",
                        gradient: "bg-primary/5"
                      },
                      {
                        stat: "1M+",
                        label: "Data Points",
                        gradient: "bg-secondary/5"
                      }
                    ].map((item, i) => (
                      <div 
                        key={i} 
                        className={cn(
                          "flex flex-col justify-center p-6 rounded-2xl border border-primary/10",
                          item.gradient
                        )}
                      >
                        <span className="text-3xl font-bold text-foreground mb-1">
                          {item.stat}
                        </span>
                        <span className="text-muted-foreground/80">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
} 