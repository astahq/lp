import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "£99",
    period: "/mo",
    description: "Perfect for individual & small solicitors",
    features: [
      "100 packs/month",
      "All document types",
      "Summary with key risks & red flags",
      "Downloadable PDF report",
      "Property-specific chatbot",
      "Email support",
      "Dashboard access",
    ],
    cta: "Start 14 Days Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "£249",
    period: "/mo",
    description: "For growing practices with higher volume",
    features: [
      "300 packs/month",
      "Everything in Starter",
      "Priority support",
      "API access",
      "Case management integrations",
    ],
    cta: "Start 14 Days Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large firms with bespoke requirements",
    features: [
      "Unlimited packs",
      "Everything in Professional",
      "White-label option",
      "Dedicated account manager",
      "Custom SLA",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your firm's needs. All plans include a
            14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative flex flex-col ${
                tier.popular
                  ? "border-primary shadow-lg scale-105 z-10"
                  : "border-border"
              }`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-semibold text-foreground">
                  {tier.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {tier.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">
                    {tier.price}
                  </span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full h-11 rounded-lg font-medium"
                  variant={tier.popular ? "default" : "outline"}
                  asChild
                >
                  <a
                    href={
                      tier.name === "Enterprise"
                        ? "mailto:hello@useasta.com"
                        : "https://app.useasta.com/"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tier.cta}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
