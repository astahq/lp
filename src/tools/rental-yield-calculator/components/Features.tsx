import { Calculator, PiggyBank, TrendingUp, Home, Percent, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Percent,
    title: "Gross Yield",
    description: "Calculate your gross rental yield based on property value and annual rental income before expenses.",
  },
  {
    icon: TrendingUp,
    title: "Net Yield",
    description: "Get your true net yield after accounting for running costs, management fees, and void periods.",
  },
  {
    icon: PiggyBank,
    title: "Cash-on-Cash Return",
    description: "See your actual return on the cash invested, perfect for leveraged buy-to-let investments.",
  },
  {
    icon: Calculator,
    title: "Running Costs",
    description: "Factor in maintenance, insurance, service charges, and letting agent fees for accurate projections.",
  },
  {
    icon: Home,
    title: "Void Period Adjustment",
    description: "Account for empty periods between tenancies to get a realistic annual income estimate.",
  },
  {
    icon: BarChart3,
    title: "Investment Comparison",
    description: "Compare different properties and scenarios to find the best rental yield opportunities.",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-card/50 py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Everything You Need to Analyse Rental Yields
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Our calculator provides comprehensive yield analysis for UK property investors making informed decisions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
