"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Brain, LineChart, FileText, MapPin } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Neural networks trained on millions of property data points for precise valuations",
      gradient: "from-blue-500/10 to-violet-500/10",
      iconColor: "text-blue-500"
    },
    {
      icon: LineChart,
      title: "Real-Time Analytics",
      description: "Live market trends and predictive modeling for future property values",
      gradient: "from-violet-500/10 to-purple-500/10",
      iconColor: "text-violet-500"
    },
    {
      icon: FileText,
      title: "Smart Reports",
      description: "Comprehensive analysis with AI-generated insights and recommendations",
      gradient: "from-purple-500/10 to-blue-500/10",
      iconColor: "text-purple-500"
    },
    {
      icon: MapPin,
      title: "Location Analysis",
      description: "Advanced geospatial intelligence for neighborhood-specific insights",
      gradient: "from-blue-500/10 to-violet-500/10",
      iconColor: "text-blue-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container px-4 md:px-6 relative z-10"
      >
        <div className="text-center space-y-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 inline-block">
              Why Choose HouseVal?
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary"
          >
            Next-Gen Property Valuation
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[700px] text-muted-foreground md:text-xl"
          >
            Cutting-edge AI technology meets deep real estate expertise
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl -z-10" />
              <Card className="relative overflow-hidden border-border/50 bg-background/60 backdrop-blur-sm hover:border-primary/20 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className={`rounded-xl w-12 h-12 bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className={`w-6 h-6 ${benefit.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-foreground/90">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
                
                {/* Hover Effect Border */}
                <div className="absolute inset-0 border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 