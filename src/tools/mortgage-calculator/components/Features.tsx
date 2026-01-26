import { Calculator, PiggyBank, FileText, TrendingUp, Home, Percent } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Calculator,
    title: "Mortgage Payments",
    description: "Calculate monthly repayments based on property value, deposit, interest rate, and term length.",
  },
  {
    icon: PiggyBank,
    title: "Stamp Duty Calculator",
    description: "Automatically calculates stamp duty for additional properties using current England & NI rates.",
  },
  {
    icon: Percent,
    title: "LTV Calculations",
    description: "See your Loan-to-Value ratio instantly and understand how it affects your mortgage options.",
  },
  {
    icon: TrendingUp,
    title: "Total Cost Analysis",
    description: "View the complete picture with total interest payable and full repayment amounts.",
  },
  {
    icon: Home,
    title: "Investment Planning",
    description: "Plan your initial investment with combined deposit and stamp duty calculations.",
  },
  {
    icon: FileText,
    title: "Buy-to-Let Focus",
    description: "Designed specifically for UK property investors with additional property stamp duty rates.",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-card/50 py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Everything You Need to Plan Your Investment
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Our calculator provides comprehensive insights for UK property investors looking to make informed decisions.
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
