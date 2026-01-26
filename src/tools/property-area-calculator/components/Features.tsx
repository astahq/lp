import { Square, Calculator, ArrowLeftRight, Home, Ruler, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Square,
    title: "Multi-Room Calculator",
    description:
      "Add unlimited rooms and calculate individual areas. Perfect for measuring entire properties room by room.",
  },
  {
    icon: ArrowLeftRight,
    title: "Unit Conversion",
    description:
      "Instantly convert between square metres, square feet, acres, and hectares with precise calculations.",
  },
  {
    icon: Calculator,
    title: "Property Valuation",
    description:
      "Get estimated property values based on current UK and London average prices per square foot.",
  },
  {
    icon: Home,
    title: "UK Property Standards",
    description:
      "Calculations aligned with UK property measurement standards used by estate agents and surveyors.",
  },
  {
    icon: Ruler,
    title: "Accurate Measurements",
    description:
      "Enter precise dimensions in metres and get exact area calculations for floor plans and valuations.",
  },
  {
    icon: FileText,
    title: "Room Breakdown",
    description:
      "View detailed breakdowns of each room's contribution to the total property floor area.",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-card/50 py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Powerful Area Calculation Features
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Everything you need to accurately measure and calculate your property's floor area, 
            whether you're buying, selling, or renovating.
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
