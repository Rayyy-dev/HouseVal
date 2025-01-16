'use client';

import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Search, Bath, MapPin, Home, ArrowRight, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface Report {
  estimatedPrice: number;
  confidence: number;
  comparables: Array<{
    address: string;
    price: number;
    similarity: number;
  }>;
  features: Array<{
    name: string;
    impact: number;
  }>;
}

export function HousingReport() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [location, setLocation] = React.useState("");
  const [bathrooms, setBathrooms] = React.useState("");
  const [distance, setDistance] = React.useState("");
  const [space, setSpace] = React.useState("");
  const [report, setReport] = React.useState<Report | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate a response
      const mockReport: Report = {
        estimatedPrice: 750000,
        confidence: 92,
        comparables: [
          {
            address: "123 Nearby Street",
            price: 745000,
            similarity: 95,
          },
          {
            address: "456 Similar Avenue",
            price: 760000,
            similarity: 90,
          },
          {
            address: "789 Comparable Lane",
            price: 752000,
            similarity: 88,
          },
        ],
        features: [
          {
            name: "Location Quality",
            impact: 35,
          },
          {
            name: "Property Size",
            impact: 25,
          },
          {
            name: "Recent Sales",
            impact: 20,
          },
          {
            name: "Market Trends",
            impact: 20,
          },
        ],
      };

      setReport(mockReport);
    } catch (err) {
      setError("Failed to generate report. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const closeReport = () => {
    setReport(null);
  };

  return (
    <section className="relative py-24 overflow-hidden bg-muted/30">
      {/* Background Effects */}
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
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-5 py-2 rounded-full bg-primary/8 text-primary text-sm font-medium border border-primary/10">
              AI Price Predictor
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-primary/90 via-primary to-primary/90 bg-clip-text text-transparent">AI House Price</span>
            <span className="text-foreground"> Predictor</span>
          </h2>
          <p className="text-lg text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Get an instant AI-powered estimate for your property's market value
          </p>
        </motion.div>

        {/* Predictor Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-b from-primary/20 to-transparent rounded-2xl blur-xl opacity-50" />
            <form 
              onSubmit={handleSubmit}
              className="relative bg-background/50 backdrop-blur-sm rounded-xl p-8 border border-border/40 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Location Input */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-foreground/90">Location</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search location..."
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="pl-9 bg-background/50 border-border/40 hover:border-primary/30 focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Bathrooms Input */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-foreground/90">Bathrooms</Label>
                  <div className="relative">
                    <Bath className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="number"
                      placeholder="e.g., 2"
                      value={bathrooms}
                      onChange={(e) => setBathrooms(e.target.value)}
                      className="pl-9 bg-background/50 border-border/40 hover:border-primary/30 focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Distance Input */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-foreground/90">Distance to Center (miles)</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="number"
                      placeholder="e.g., 5"
                      value={distance}
                      onChange={(e) => setDistance(e.target.value)}
                      className="pl-9 bg-background/50 border-border/40 hover:border-primary/30 focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Living Space Input */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-foreground/90">Living Space (sq ft)</Label>
                  <div className="relative">
                    <Home className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="number"
                      placeholder="e.g., 1500"
                      value={space}
                      onChange={(e) => setSpace(e.target.value)}
                      className="pl-9 bg-background/50 border-border/40 hover:border-primary/30 focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {error && (
                <div className="text-red-500 text-sm mt-2 text-center">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <Button 
                  type="submit"
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 group"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full border-2 border-primary-foreground border-r-transparent animate-spin" />
                      Processing...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      Get Price Estimate
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Report Modal */}
        <AnimatePresence>
          {report && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
            >
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={closeReport} />
              <motion.div 
                className="relative bg-background rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
              >
                <div className="sticky top-0 bg-background z-10 p-6 border-b border-border/40">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold">Property Valuation Report</h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={closeReport}
                      className="hover:bg-muted"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="p-6 space-y-8">
                  {/* Estimated Price */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Estimated Price</h4>
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold text-primary">
                        ${report.estimatedPrice.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground mb-1">
                        with {report.confidence}% confidence
                      </span>
                    </div>
                  </div>

                  {/* Comparable Properties */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Comparable Properties</h4>
                    <div className="space-y-3">
                      {report.comparables.map((comp, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                          <div>
                            <p className="font-medium">{comp.address}</p>
                            <p className="text-sm text-muted-foreground">
                              {comp.similarity}% similar
                            </p>
                          </div>
                          <span className="font-semibold">${comp.price.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Feature Impact */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Price Factors</h4>
                    <div className="space-y-3">
                      {report.features.map((feature, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{feature.name}</span>
                            <span className="text-primary">{feature.impact}% impact</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${feature.impact}%` }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              className="h-full bg-primary rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 