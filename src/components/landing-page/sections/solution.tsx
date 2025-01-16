import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

export function Solution() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-transparent to-primary/5 -z-10" />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          Transforming Real Estate Valuation
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="p-8 border-destructive/20 bg-gradient-to-br from-background to-destructive/5">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <XCircle className="text-destructive h-8 w-8" />
              Traditional Methods
            </h3>
            <CardContent className="space-y-6 p-0">
              {[
                "Time-consuming manual assessments",
                "Inconsistent valuations",
                "Limited market data analysis",
                "Subjective decision making"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <XCircle className="h-4 w-4 text-destructive" />
                  </div>
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="p-8 border-primary/20 bg-gradient-to-br from-background to-primary/5">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <CheckCircle className="text-primary h-8 w-8" />
              HouseVal Solution
            </h3>
            <CardContent className="space-y-6 p-0">
              {[
                "AI-powered instant valuations",
                "Data-driven accuracy",
                "Comprehensive market analysis",
                "Real-time market insights"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 