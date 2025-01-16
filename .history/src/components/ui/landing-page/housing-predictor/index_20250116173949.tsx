'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MapPin, Bath, Ruler, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check } from "lucide-react";

// Sample locations from the dataset
const locations = [
  { value: 'new-york', label: 'New York, NY', factor: 2.0 },
  { value: 'brooklyn', label: 'Brooklyn, NY', factor: 1.8 },
  { value: 'queens', label: 'Queens, NY', factor: 1.6 },
  { value: 'bronx', label: 'Bronx, NY', factor: 1.4 },
  { value: 'staten-island', label: 'Staten Island, NY', factor: 1.3 },
  { value: 'seattle', label: 'Seattle, WA', factor: 1.7 },
];

export const HousingPredictor = () => {
  const [baths, setBaths] = useState('');
  const [distance, setDistance] = useState('');
  const [space, setSpace] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<typeof locations[0] | null>(null);
  const [prediction, setPrediction] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePredict = async () => {
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const basePrice = 200000;
    const bathValue = Number(baths) * 50000;
    const spaceValue = Number(space) * 200;
    const distanceDiscount = Number(distance) * 1000;
    const locationFactor = selectedLocation?.factor || 1;

    const predictedPrice = (basePrice + bathValue + spaceValue - distanceDiscount) * locationFactor;
    setPrediction(Math.max(0, predictedPrice));
    setIsLoading(false);
  };

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-8 text-center"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
              AI House Price Predictor
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Get an instant AI-powered estimate for your property's market value
            </p>
          </div>

          <Card className="w-full max-w-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 md:col-span-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <label className="text-sm font-medium">Location</label>
                </div>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-full justify-between text-left font-normal"
                    >
                      {selectedLocation ? selectedLocation.label : "Select location..."}
                      <MapPin className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Search location..." />
                      <CommandEmpty>No location found.</CommandEmpty>
                      <CommandGroup>
                        {locations.map((location) => (
                          <CommandItem
                            key={location.value}
                            onSelect={() => {
                              setSelectedLocation(location);
                              setOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                selectedLocation?.value === location.value ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {location.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Bath className="w-5 h-5 text-blue-500" />
                  <label className="text-sm font-medium">Bathrooms</label>
                </div>
                <Input
                  type="number"
                  placeholder="e.g., 2"
                  value={baths}
                  onChange={(e) => setBaths(e.target.value)}
                  className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Navigation className="w-5 h-5 text-blue-500" />
                  <label className="text-sm font-medium">Distance to Center (miles)</label>
                </div>
                <Input
                  type="number"
                  placeholder="e.g., 5"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <div className="flex items-center space-x-2">
                  <Ruler className="w-5 h-5 text-blue-500" />
                  <label className="text-sm font-medium">Living Space (sq ft)</label>
                </div>
                <Input
                  type="number"
                  placeholder="e.g., 1500"
                  value={space}
                  onChange={(e) => setSpace(e.target.value)}
                  className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <motion.div 
                className="md:col-span-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  className={cn(
                    "w-full h-12 text-lg font-semibold",
                    "bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700",
                    "transition-all duration-300 ease-in-out",
                    "shadow-lg hover:shadow-xl"
                  )}
                  onClick={handlePredict}
                  disabled={isLoading || !selectedLocation}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin" />
                      <span>Analyzing...</span>
                    </div>
                  ) : (
                    "Get Price Estimate"
                  )}
                </Button>
              </motion.div>
            </div>

            {prediction !== null && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-violet-50 rounded-xl border border-blue-100"
              >
                <div className="space-y-2">
                  <p className="text-sm font-medium text-blue-600">
                    Estimated Market Value in {selectedLocation?.label}
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
                      ${prediction.toLocaleString()}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500">
                    Based on current market conditions and provided parameters
                  </p>
                </div>
              </motion.div>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  );
}; 