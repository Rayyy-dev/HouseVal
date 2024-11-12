import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Features() {
  const features = [
    {
      title: "AI-Powered Predictions",
      description: "Advanced machine learning algorithms for accurate valuations"
    },
    {
      title: "Real-Time Data",
      description: "Up-to-date market information and trends analysis"
    },
    {
      title: "Location Intelligence",
      description: "Detailed neighborhood and amenity impact assessment"
    },
    {
      title: "Comprehensive Reports",
      description: "Detailed property analysis and value breakdown"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Powered by Advanced Technology
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 