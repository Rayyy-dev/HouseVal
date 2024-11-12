import { Card, CardContent } from "@/components/ui/card";

export function ProblemSolution() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Problem Section */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-destructive">The Problem</h3>
            <CardContent className="space-y-4 p-0">
              <p className="text-muted-foreground">
                Traditional house valuation methods are:
              </p>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Time-consuming and often inaccurate</li>
                <li>Heavily reliant on manual assessment</li>
                <li>Inconsistent across different evaluators</li>
                <li>Unable to process large amounts of market data</li>
              </ul>
            </CardContent>
          </Card>

          {/* Solution Section */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Solution</h3>
            <CardContent className="space-y-4 p-0">
              <p className="text-muted-foreground">
                HouseVal provides:
              </p>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>AI-powered instant valuations</li>
                <li>Data-driven market analysis</li>
                <li>Consistent and unbiased assessments</li>
                <li>Real-time market trend integration</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 