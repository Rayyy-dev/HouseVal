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

declare global {
  interface Window {
    google: any;
    initAutocomplete?: () => void;
  }
}

export function PricePredictor() {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [distance, setDistance] = useState("");
  const [space, setSpace] = useState("");
  const [income, setIncome] = useState("");
  const [predictedPrice, setPredictedPrice] = useState<number | null>(null);
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);
  const autocompleteInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Load Google Maps JavaScript API
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initAutocomplete`;
    script.async = true;
    script.defer = true;

    window.initAutocomplete = () => {
      if (autocompleteInput.current) {
        const autocomplete = new window.google.maps.places.Autocomplete(
          autocompleteInput.current,
          { types: ["address"] }
        );

        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          if (place.geometry?.location) {
            setCoordinates({
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            });
            setLocation(place.formatted_address || "");
            
            // Calculate distance to city center (New York City coordinates)
            const cityCenter = { lat: 40.7128, lng: -74.0060 };
            const distance = calculateDistance(
              place.geometry.location.lat(),
              place.geometry.location.lng(),
              cityCenter.lat,
              cityCenter.lng
            );
            setDistance(distance.toFixed(2));
          }
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      delete window.initAutocomplete;
    };
  }, []);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/predict-price', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          income: parseFloat(income),
          bathrooms: parseFloat(bathrooms),
          distance: parseFloat(distance),
          space: parseFloat(space),
        }),
      });

      const data = await response.json();
      if (data.price) {
        setPredictedPrice(data.price);
      }
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
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      ref={autocompleteInput}
                      type="text"
                      placeholder="Search location..."
                      className="pl-9 bg-background/50 border-border/40 hover:border-primary/30 focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Income Input */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-foreground/90">Median Household Income</Label>
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
                    <CardDescription>Based on AI analysis of market data</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary">
                      ${predictedPrice.toLocaleString()}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      This estimate is based on current market conditions and similar properties in the area
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