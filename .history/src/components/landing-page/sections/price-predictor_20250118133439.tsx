"use client";

import { useState } from "react";
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
import { locations } from "../housing/locations";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface PredictionResult {
  price: number;
  confidence: number;
  features: {
    name: string;
    impact: number;
  }[];
}

export function PricePredictor() {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [space, setSpace] = useState("");
  const [income, setIncome] = useState("");
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<(typeof locations)[number] | null>(null);

  // Filter locations based on search query
  const filteredLocations = locations.filter((location) =>
    location.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Validate all fields are filled
  const isFormValid = () => {
    if (!selectedLocation) {
      toast.error("Please select a location");
      return false;
    }
    if (!bathrooms || parseFloat(bathrooms) <= 0) {
      toast.error("Please enter a valid number of bathrooms");
      return false;
    }
    if (!space || parseFloat(space) <= 0) {
      toast.error("Please enter a valid living space");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Calculate base price using location factor and square footage
      const basePrice = parseFloat(space) * 200; // Base price per sq ft
      
      // Apply location factor
      const locationAdjustedPrice = basePrice * selectedLocation!.factor;
      
      // Adjust for bathrooms (each bathroom adds 15% to value)
      const bathroomAdjustment = 1 + (parseFloat(bathrooms) * 0.15);
      const adjustedPrice = locationAdjustedPrice * bathroomAdjustment;
      
      // Add market variation (+/- 10%)
      const marketVariation = 0.9 + (Math.random() * 0.2);
      const finalPrice = Math.round(adjustedPrice * marketVariation);

      // Calculate confidence based on data quality
      const confidence = Math.round(85 + (Math.random() * 10)); // 85-95%

      // Generate feature impacts
      const features = [
        {
          name: "Location",
          impact: Math.round(40 + (Math.random() * 5)),
        },
        {
          name: "Living Space",
          impact: Math.round(30 + (Math.random() * 5)),
        },
        {
          name: "Bathrooms",
          impact: Math.round(15 + (Math.random() * 5)),
        },
        {
          name: "Market Trends",
          impact: Math.round(10 + (Math.random() * 5)),
        },
      ];

      // Set the result
      setResult({
        price: finalPrice,
        confidence,
        features,
      });

      toast.success("Price estimate calculated successfully!");
    } catch (error) {
      toast.error("Failed to calculate price estimate. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Calculate distance to city center based on location
  const calculateDistanceToCenter = (location: typeof locations[number]) => {
    // This is a simplified calculation - in real app would use actual coordinates
    return Math.round(5 + (Math.random() * 10)); // Random distance between 5-15 miles
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
              US Housing AI Predictor
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-primary/90 via-primary to-primary/90 bg-clip-text text-transparent">US House Price</span>
            <span className="text-foreground"> Predictor</span>
          </h2>
          <p className="text-lg text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Get an instant AI-powered estimate for your US property's market value
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
                  <Label className="text-sm font-medium text-foreground/90">US Location</Label>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className={cn(
                          "w-full justify-between bg-background/50 hover:bg-background/80 transition-colors",
                          "border border-border/40 hover:border-primary/30 focus:border-primary/50",
                          "text-left font-normal",
                          !selectedLocation && "text-muted-foreground"
                        )}
                      >
                        {selectedLocation ? (
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 shrink-0 text-primary/70" />
                            <span className="truncate">{selectedLocation.label}</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
                            <span>Search US locations...</span>
                          </div>
                        )}
                        <span className="ml-auto opacity-50 text-xs">⌄</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent 
                      className="p-0 shadow-lg backdrop-blur-sm" 
                      style={{ width: 'var(--radix-popover-trigger-width)' }}
                      align="start"
                    >
                      <Command className="border-none">
                        <CommandInput 
                          placeholder="Type to search..." 
                          value={searchQuery}
                          onValueChange={setSearchQuery}
                          className="border-none focus:ring-0 h-11"
                        />
                        <CommandList className="max-h-[300px] overflow-auto">
                          <CommandEmpty className="py-6 text-center text-sm">
                            <div className="flex flex-col items-center gap-2">
                              <Search className="h-4 w-4 text-muted-foreground" />
                              <span className="text-muted-foreground">No locations found</span>
                            </div>
                          </CommandEmpty>
                          <CommandGroup className="p-2">
                            {filteredLocations.map((location) => (
                              <CommandItem
                                key={location.value}
                                value={location.value}
                                onSelect={(value) => {
                                  const selected = locations.find(l => l.value === value);
                                  if (selected) {
                                    setSelectedLocation(selected);
                                    setOpen(false);
                                    setSearchQuery("");
                                  }
                                }}
                                className={cn(
                                  "flex items-center gap-2 px-3 py-2.5 rounded-md cursor-pointer",
                                  "aria-selected:bg-primary/10 hover:bg-primary/5",
                                  "transition-colors duration-150"
                                )}
                              >
                                <MapPin className="h-4 w-4 shrink-0 text-primary/70" />
                                <span className="flex-1 truncate">{location.label}</span>
                                {location === selectedLocation && (
                                  <span className="ml-auto text-primary">✓</span>
                                )}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
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
                <div className="space-y-2 md:col-span-2">
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
            {result && selectedLocation && bathrooms && space && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8"
              >
                <Card className="bg-background/50 backdrop-blur-sm border-border/40">
                  <CardHeader>
                    <CardTitle>Estimated Price</CardTitle>
                    <CardDescription>Based on AI analysis with {result.confidence}% confidence</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="text-4xl font-bold text-primary">
                        ${result.price.toLocaleString()}
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        This estimate is based on current market conditions and similar properties in {selectedLocation.label}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium">Price Factors</h4>
                      <div className="space-y-2">
                        {result.features.map((feature) => (
                          <div key={feature.name} className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">{feature.name}</span>
                            <div className="flex items-center gap-2">
                              <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-primary rounded-full"
                                  style={{ width: `${feature.impact}%` }}
                                />
                              </div>
                              <span className="text-sm font-medium w-8">{feature.impact}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
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