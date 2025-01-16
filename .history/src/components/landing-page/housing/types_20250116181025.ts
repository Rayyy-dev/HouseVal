export interface PredictionInput {
  location: string;
  baths: string;
  distance: string;
  space: string;
}

export interface PredictionResult {
  price: number;
  location: string;
  details: {
    bathrooms: number;
    livingSpace: number;
    distanceToCenter: number;
    marketFactor: number;
  };
  comparables: Array<{
    price: number;
    address: string;
    difference: number;
  }>;
}

export interface Report {
  id: string;
  date: string;
  prediction: PredictionResult;
  marketTrends: {
    yearlyGrowth: number;
    averagePrice: number;
    inventory: number;
  };
} 