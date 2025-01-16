'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MapPin, Bath, Ruler, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";
import { locations } from './locations';
import { generateReport } from './report-generator';

export const HousingPredictor = () => {
  const [baths, setBaths] = useState('');
  const [distance, setDistance] = useState('');
  const [space, setSpace] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<typeof locations>([]);
  const [selectedLocation, setSelectedLocation] = useState<typeof locations[0] | null>(null);
  const [prediction, setPrediction] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [report, setReport] = useState<Report | null>(null);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = locations.filter(location =>
        location.label.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  const handleLocationSelect = (location: typeof locations[0]) => {
    setSelectedLocation(location);
    setSearchQuery(location.label);
    setShowSuggestions(false);
  };

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

  const handleGenerateReport = async () => {
    if (!prediction || !selectedLocation) return;
    
    setIsLoading(true);
    const generatedReport = await generateReport({
      price: prediction,
      location: selectedLocation.label,
      details: {
        bathrooms: Number(baths),
        livingSpace: Number(space),
        distanceToCenter: Number(distance),
        marketFactor: selectedLocation.factor
      }
    });
    setReport(generatedReport);
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
              <div className="space-y-2 md:col-span-2 relative">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <label className="text-sm font-medium">Location</label>
                </div>
                <Input
                  type="text"
                  placeholder="Search location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                  onFocus={() => setShowSuggestions(true)}
                />
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200">
                    {suggestions.map((location) => (
                      <div
                        key={location.value}
                        className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors"
                        onClick={() => handleLocationSelect(location)}
                      >
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-blue-500" />
                          <span>{location.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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
              <div className="space-y-6">
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
                
                <Button
                  onClick={handleGenerateReport}
                  className="mt-4 w-full bg-gradient-to-r from-violet-600 to-blue-600"
                  disabled={isLoading}
                >
                  Generate Detailed Report
                </Button>
                
                {report && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 p-6 bg-white rounded-xl border border-gray-200 shadow-lg"
                  >
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold mb-3">Detailed Market Analysis</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-600">Yearly Growth</p>
                          <p className="text-2xl font-bold text-green-600">
                            +{report.marketTrends.yearlyGrowth}%
                          </p>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-600">Average Price</p>
                          <p className="text-2xl font-bold">
                            ${report.marketTrends.averagePrice.toLocaleString()}
                          </p>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-600">Available Inventory</p>
                          <p className="text-2xl font-bold">
                            {report.marketTrends.inventory}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold mb-3">Comparable Properties</h4>
                        <div className="space-y-3">
                          {report.comparables.map((comp, index) => (
                            <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="text-sm">{comp.address}</span>
                              <span className="font-semibold">${comp.price.toLocaleString()}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  );
}; 