import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      title: "Accurate Predictions",
      description: "AI-powered valuation model trained on millions of data points"
    },
    {
      title: "Real-Time Data",
      description: "Live market data and trends analysis for precise estimates"
    },
    {
      title: "Comprehensive Reports",
      description: "Detailed property analysis with comparable sales data"
    },
    {
      title: "Location Intelligence",
      description: "Advanced location-based factors and neighborhood analysis"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Choose HouseVal?
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Advanced AI technology meets real estate expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-background/60 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 