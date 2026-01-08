import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const payPerReportFeatures = [
    "One-time detailed legal pack analysis",
    "Summary with key risks and red flags",
    "Downloadable PDF Report",
    "Property-specific chatbot for follow-up questions",
    "Mail Support",
  ];

  const enterpriseFeatures = [
    "Bulk legal pack analysis",
    "Team dashboard and report sharing",
    "API access and workflow integrations",
    "Custom integrations",
    "Priority support",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Pricing
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Pay-Per-Report Plan */}
            <Card className="relative border-2 border-border bg-card">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-foreground">
                  Pay-Per-Report
                </CardTitle>
                <p className="text-muted-foreground text-sm mt-2">
                  Perfect for individual investors who want instant insights before bidding.
                </p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">£29</span>
                  <span className="text-muted-foreground ml-2">(VAT Included)</span>
                </div>

                <div className="mb-8">
                  <p className="text-sm font-medium text-foreground mb-4">What's included:</p>
                  <ul className="space-y-3">
                    {payPerReportFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full h-12 rounded-lg text-sm font-medium">
                  Get Started for Free
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="relative border-2 border-primary bg-card">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-foreground">
                  Enterprise
                </CardTitle>
                <p className="text-muted-foreground text-sm mt-2">
                  Ideal for solicitors, auction houses, property management companies, and high-volume investors needing tailored access.
                </p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">Custom Pricing</span>
                </div>

                <div className="mb-8">
                  <p className="text-sm font-medium text-foreground mb-4">What's included:</p>
                  <ul className="space-y-3">
                    {enterpriseFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="outline" className="w-full h-12 rounded-lg text-sm font-medium">
                  Book a Demo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
