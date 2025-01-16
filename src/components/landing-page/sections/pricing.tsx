import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      features: ["5 valuations/month", "Basic market insights", "Email support"],
    },
    {
      name: "Pro",
      price: "$99",
      features: ["50 valuations/month", "Advanced analytics", "Priority support"],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Unlimited valuations", "Custom API access", "Dedicated support"],
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="text-3xl font-bold">{plan.price}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 