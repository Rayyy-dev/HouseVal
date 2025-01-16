'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export const HousingPredictor = () => {
  const [income, setIncome] = useState('');
  const [baths, setBaths] = useState('');
  const [distance, setDistance] = useState('');
  const [space, setSpace] = useState('');
  const [prediction, setPrediction] = useState<number | null>(null);

  const handlePredict = () => {
    // Simulate AI prediction with a basic calculation
    const basePrice = 200000;
    const incomeMultiplier = Number(income) * 0.3;
    const bathValue = Number(baths) * 50000;
    const spaceValue = Number(space) * 200;
    const distanceDiscount = Number(distance) * 1000;

    const predictedPrice = basePrice + incomeMultiplier + bathValue + spaceValue - distanceDiscount;
    setPrediction(Math.max(0, predictedPrice));
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              AI House Price Predictor
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Enter your property details and let our AI predict its market value
            </p>
          </div>

          <Card className="w-full max-w-md p-6 space-y-4">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Median Household Income ($)
                </label>
                <Input
                  type="number"
                  placeholder="Enter household income"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  className="mt-2"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Number of Bathrooms
                </label>
                <Input
                  type="number"
                  placeholder="Enter number of bathrooms"
                  value={baths}
                  onChange={(e) => setBaths(e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Distance to City Center (miles)
                </label>
                <Input
                  type="number"
                  placeholder="Enter distance"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Living Space (sq ft)
                </label>
                <Input
                  type="number"
                  placeholder="Enter living space"
                  value={space}
                  onChange={(e) => setSpace(e.target.value)}
                  className="mt-2"
                />
              </div>

              <Button 
                className="w-full"
                onClick={handlePredict}
              >
                Predict Price
              </Button>
            </div>

            {prediction !== null && (
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <p className="text-sm font-medium text-green-900">
                  Estimated Price:
                </p>
                <p className="text-2xl font-bold text-green-700">
                  ${prediction.toLocaleString()}
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}; 