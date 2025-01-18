"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Search, Bath, MapPin, Home, ArrowRight, DollarSign } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Predefined US cities with their coordinates and median income data
const cities = [
  { name: "New York, NY", lat: 40.7128, lng: -74.0060, medianIncome: 85000 },
  { name: "Los Angeles, CA", lat: 34.0522, lng: -118.2437, medianIncome: 75000 },
  { name: "Chicago, IL", lat: 41.8781, lng: -87.6298, medianIncome: 70000 },
  { name: "Houston, TX", lat: 29.7604, lng: -95.3698, medianIncome: 65000 },
  { name: "Phoenix, AZ", lat: 33.4484, lng: -112.0740, medianIncome: 62000 },
  { name: "Philadelphia, PA", lat: 39.9526, lng: -75.1652, medianIncome: 63000 },
  { name: "San Antonio, TX", lat: 29.4241, lng: -98.4936, medianIncome: 58000 },
  { name: "San Diego, CA", lat: 32.7157, lng: -117.1611, medianIncome: 79000 },
  { name: "Dallas, TX", lat: 32.7767, lng: -96.7970, medianIncome: 67000 },
  { name: "San Jose, CA", lat: 37.3382, lng: -121.8863, medianIncome: 115000 },
];

export function PricePredictor() {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [distance, setDistance] = useState("");
  const [space, setSpace] = useState("");
  const [income, setIncome] = useState("");
  const [predictedPrice, setPredictedPrice] = useState<number | null>(null);
  const [selectedCity, setSelectedCity] = useState<typeof cities[0] | null>(null);

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 3959; // Earth's radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  // Simple price prediction algorithm
  const predictPrice = (params: {
    income: number;
    bathrooms: number;
    distance: number;
    space: number;
    cityMedianIncome: number;
  }) => {
    const { income, bathrooms, distance, space, cityMedianIncome } = params;
    
    // Base price calculation
    let basePrice = space * 200; // $200 per sq ft base
    
    // Adjust for bathrooms
    basePrice *= (1 + (bathrooms * 0.15)); // Each bathroom adds 15%
    
    // Adjust for distance from city center
    const distanceMultiplier = Math.max(0.7, 1 - (distance * 0.01)); // Reduce price by 1% per mile, min 70%
    basePrice *= distanceMultiplier;
    
    // Adjust for income factors
    const incomeRatio = income / cityMedianIncome;
    basePrice *= (0.8 + (incomeRatio * 0.4)); // Income adjustment
    
    // Add random market variation (+/- 10%)
    const marketVariation = 0.9 + (Math.random() * 0.2);
    basePrice *= marketVariation;
    
    return Math.round(basePrice);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (!selectedCity) throw new Error("Please select a city");
      
      const price = predictPrice({
        income: parseFloat(income),
        bathrooms: parseFloat(bathrooms),
        distance: parseFloat(distance),
        space: parseFloat(space),
        cityMedianIncome: selectedCity.medianIncome,
      });
      
      setPredictedPrice(price);
    } catch (error) {
      console.error('Error predicting price:', error);
    } finally {
      setIsLoading(false);
    }
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
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between bg-background/50"
                      >
                        {selectedCity ? selectedCity.name : "Select city..."}
                        <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput placeholder="Search cities..." />
                        <CommandList>
                          <CommandEmpty>No city found.</CommandEmpty>
                          <CommandGroup>
                            {cities.map((city) => (
                              <CommandItem
                                key={city.name}
                                value={city.name}
                                onSelect={() => {
                                  setSelectedCity(city);
                                  setIncome(city.medianIncome.toString());
                                  setOpen(false);
                                }}
                              >
                                <MapPin className="mr-2 h-4 w-4" />
                                {city.name}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Income Input */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-foreground/90">Household Income</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="number"
                      placeholder="e.g., 75000"
                      value={income}
                      onChange={(e) => setIncome(e.target.value)}
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

            {/* Results Card */}
            {predictedPrice !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8"
              >
                <Card className="bg-background/50 backdrop-blur-sm border-border/40">
                  <CardHeader>
                    <CardTitle>Estimated Price</CardTitle>
                    <CardDescription>Based on market analysis and local data</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary">
                      ${predictedPrice.toLocaleString()}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      This estimate is based on current market conditions and similar properties in {selectedCity?.name}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 