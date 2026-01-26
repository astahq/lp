import { Calculator, MapPin, Users, Percent, Home, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Calculator,
    title: "Instant Calculation",
    description: "Get your stamp duty amount calculated instantly as you adjust the property value.",
  },
  {
    icon: MapPin,
    title: "All UK Regions",
    description: "Covers England & Northern Ireland, Scotland (LBTT), and Wales (LTT) with accurate regional rates.",
  },
  {
    icon: Users,
    title: "Buyer Type Options",
    description: "Calculate for first-time buyers, home movers, or additional property purchases.",
  },
  {
    icon: Percent,
    title: "Detailed Breakdown",
    description: "See exactly how your stamp duty is calculated across each tax band.",
  },
  {
    icon: Home,
    title: "First-Time Buyer Relief",
    description: "Automatically applies first-time buyer relief rates where eligible.",
  },
  {
    icon: FileText,
    title: "Additional Property Rates",
    description: "Includes the surcharge for second homes and buy-to-let properties.",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-card/50 py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Everything You Need to Calculate Stamp Duty
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Our calculator provides comprehensive stamp duty calculations for all UK property purchases.
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
