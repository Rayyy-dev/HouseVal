import { Report, PredictionResult } from '../../../../landing-page/housing/types';
import { v4 as uuidv4 } from 'uuid';

// Mock data for comparable properties based on location
const mockComparables: Record<string, Array<{ price: number; address: string }>> = {
  'New York, NY': [
    { price: 2100000, address: '123 Park Avenue' },
    { price: 1950000, address: '456 Madison Ave' },
    { price: 2300000, address: '789 5th Avenue' },
  ],
  'San Francisco, CA': [
    { price: 1800000, address: '123 Market Street' },
    { price: 2100000, address: '456 Mission St' },
    { price: 1950000, address: '789 Hayes Valley' },
  ],
  // Add more cities as needed
};

// Mock market trends data based on location
const mockMarketTrends: Record<string, { yearlyGrowth: number; averagePrice: number; inventory: number }> = {
  'New York, NY': {
    yearlyGrowth: 5.2,
    averagePrice: 2000000,
    inventory: 1250,
  },
  'San Francisco, CA': {
    yearlyGrowth: 6.8,
    averagePrice: 1850000,
    inventory: 980,
  },
  // Add more cities as needed
};

export const generateReport = async (data: {
  price: number;
  location: string;
  details: {
    bathrooms: number;
    livingSpace: number;
    distanceToCenter: number;
    marketFactor: number;
  };
}): Promise<Report> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  const cityComparables = mockComparables[data.location] || mockComparables['New York, NY'];
  const marketTrends = mockMarketTrends[data.location] || mockMarketTrends['New York, NY'];

  const comparables = cityComparables.map(comp => ({
    ...comp,
    difference: ((comp.price - data.price) / data.price) * 100,
  }));

  return {
    id: uuidv4(),
    date: new Date().toISOString(),
    prediction: {
      price: data.price,
      location: data.location,
      details: data.details,
      comparables,
    },
    marketTrends,
  };
}; 