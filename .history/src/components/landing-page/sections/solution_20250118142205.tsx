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
    <section className="py-32 relative overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-transparent to-primary/5" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/5 blur-[120px] animate-pulse-slow" />
          <div className="absolute left-1/3 right-0 top-1/2 -z-10 h-[250px] w-[250px] rounded-full bg-destructive/5 blur-[120px] animate-pulse-slow delay-300" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Enhanced Header */}
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
              Why Choose Us
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-primary/90 via-primary to-primary/90 bg-clip-text text-transparent">Transforming</span>
            <span className="text-foreground"> Real Estate Valuation</span>
          </h2>
          <p className="text-lg text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Experience the future of property valuation with our cutting-edge AI technology
          </p>
        </motion.div>
        
        {/* Enhanced Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="relative group h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-destructive/20 to-destructive/0 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300" />
              <div className="relative h-full bg-background/50 backdrop-blur-sm rounded-xl p-8 border border-destructive/20">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-destructive/10">
                    <XCircle className="text-destructive h-6 w-6" />
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
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      key={i} 
                      className="flex items-start gap-4 group"
                    >
                      <div className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 group-hover:bg-destructive/20 transition-colors">
                        <XCircle className="h-4 w-4 text-destructive" />
                      </div>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">{item}</p>
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
            <Card className="relative group h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-primary/0 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300" />
              <div className="relative h-full bg-background/50 backdrop-blur-sm rounded-xl p-8 border border-primary/20">
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
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      key={i} 
                      className="flex items-start gap-4 group"
                    >
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">{item}</p>
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
          <Card className="relative group overflow-hidden rounded-[2.5rem]">
            {/* Modern gradient background */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-destructive/10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--primary),0.1),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(var(--destructive),0.1),transparent_50%)]" />
            </div>
            
            <div className="relative backdrop-blur-xl rounded-[2.5rem] border border-primary/10">              
              <div className="relative p-12 md:p-16">
                <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
                  {/* Left Content */}
                  <div className="flex-1 text-left space-y-8">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 shadow-[0_0_15px_-3px_rgba(var(--primary),0.3)]">
                        Premium AI Valuation
                      </span>
                    </motion.div>
                    
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(var(--primary),0.3)]"
                    >
                      Experience Next-Gen Property Valuation
                    </motion.h3>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-lg text-muted-foreground/90 max-w-xl drop-shadow-[0_0_10px_rgba(var(--primary),0.1)]"
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
                        gradient: "from-primary/20 to-primary/5"
                      },
                      {
                        stat: "50K+",
                        label: "Properties Valued",
                        gradient: "from-destructive/20 to-destructive/5"
                      },
                      {
                        stat: "24/7",
                        label: "Real-time Updates",
                        gradient: "from-primary/20 to-primary/5"
                      },
                      {
                        stat: "1M+",
                        label: "Data Points",
                        gradient: "from-destructive/20 to-destructive/5"
                      }
                    ].map((item, i) => (
                      <div 
                        key={i} 
                        className={cn(
                          "flex flex-col justify-center p-6 rounded-2xl border border-primary/10",
                          "bg-gradient-to-br backdrop-blur-sm",
                          item.gradient,
                          "shadow-[0_0_15px_-3px_rgba(var(--primary),0.2)]"
                        )}
                      >
                        <span className="text-3xl font-bold text-foreground mb-1 drop-shadow-[0_0_10px_rgba(var(--primary),0.2)]">
                          {item.stat}
                        </span>
                        <span className="text-muted-foreground/80 drop-shadow-[0_0_8px_rgba(var(--primary),0.1)]">
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